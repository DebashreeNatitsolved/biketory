import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,Events,AlertController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import {CartPage} from '../cart/cart'
import { Button } from 'ionic-angular/components/button/button';
import {SearchVehiclePage} from '../search-vehicle/search-vehicle'
import { Headers, Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  // showSearchbar: boolean = false;
  showMenu:boolean=false;
  user_exist:any;
  myInput:any;
  public response:any;
  public distance=[];
  public minPrice=[];
  public maxPrice=[];
  public minCC=[];
  public maxCC=[];
  public mileageFrom=[];
  public mileageTo=[];
  //public brandresult:any;
 responseData : any;
 public popularcategorylist:any;
 public categorylist:any;
public loguser:any;
public type:any;
public ser_val:any;
public form: FormGroup;
// public menuForm: FormGroup;
public gearForm: FormGroup;
firstname:any;
category:any;
category_link:any;
public frmval = [];
model:any;
  make:any;
  colour:any;
  engin:any;
  years:any;
  yearsTo:any;
  details:any;
  postcode:any;
  
  constructor(private builder: FormBuilder,
    public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,
    public loadingCtrl: LoadingController,  public menu: MenuController, 
    public myApp:MyApp,private storage: Storage,public events: Events, 
    public alertCtrl: AlertController,
    public http: HttpClient,
    public bikeService: BikeProvider,) {
      events.publish('hideFooter', { isHidden: false});
      this.form = builder.group({
        'ser_val': ['',''],
       'make_id':['',''],
        'model_id': ['',''],
        'postal_code': ['',''],
        'min_price':['',''],
        'max_price': ['',''],
       'min_milage':['',''],
        'max_milage': ['',''],
        'min_cc': ['',''],
        'max_cc':['',''],
        'min_year': ['',''],
        'max_year':['',''],
        'color':['',''],
        'type':['',''],
        'distance':['','']
      });
      
      this.form.controls ['distance'].setValue ('Nationwide')
      this.gearForm=builder.group({
        'ser_val': ['',''],
      });

      this.myApp.abc();
     
// this.menuForm=new FormGroup ({
 
  this.distance=['5 miles','10 miles','25 miles','50 miles','100 miles','200 miles','Nationwide'];
  this.minPrice=['0','500','1,000','2,000','3,000','4,000','5,000','7,500','10,000','15,000','20,000','25,000','50,000','10,0000','2,50,000'];
  this.maxPrice=['500','1,000','2,000','3,000','4,000','5,000','7,000','15,000','20,000','25,000','50,000','100,000','250,000','1,000,000'];


  this.minCC=['0','125','250','500','750','1000','1500','2000'];
  this.maxCC=['125','250','500','750','1000','1500','2000','2500'];

  this.mileageFrom=['0 miles','500 miles','1,000 miles','5,000 miles','10,000 miles','20,000 miles','30,000 miles','40,000 miles','50,000 miles','100,000 miles'];
  this.mileageTo=['500 miles','1,000 miles','5,000 miles','10,000 miles','20,000 miles','30,000 miles','40,000 miles','50,000 miles','100,000 miles','250,000 miles'];
  }

  // advancedSearch(data)
  // {
  //   console.log(data);
  //   localStorage.setItem('searchdata', JSON.stringify(data));
  //   this.navCtrl.push('SearchVehiclePage')
  // }

  ionViewDidLoad() {
    
    this.myApp.abc();
    if(localStorage.getItem('userData'))
    {
          this.loguser =  JSON.parse(localStorage.getItem('userData'));  
          // localStorage.setItem('userData',"");
          console.log(this.loguser) ;
          this.user_exist=1;
               }
        else{
          this.user_exist=0;
        }
       


  
    this.menu.enable(true, 'loggedOutMenu');
    // this.events.publish('hideFooter', { isHidden: false});
    

    console.log('ionViewDidLoad HomePage');

    this.authService.getData('products/categories.json').then((result:any) => {
       this.category = result.category;
       console.log('categories',this.category);
       this.category_link = result.link;
       console.log('categorylist',result)

       this.model =result.model;
       this.make = result.make;
       this.type=result.types;
       console.log(this.type);
       console.log (this.make);
        this.colour = result.colour;
        // this.engin = result.engin;

    }, (err) => {
      console.log(err);
      // Error log
    });

    var range = [];
    let lastYear= 1885;

    console.log(lastYear);
    let currentDate= new Date().getFullYear();
    console.log(currentDate);
    
    for (let year=currentDate;year>=lastYear;year--)
    {
            range.push(year)
     
    }
    this.years = range;
    console.log(this.years)
    


    // var rangeTo = [];
    // let lastYearTo= 1990;

    // console.log(lastYearTo);
    // let currentDateYearTo= new Date().getFullYear();
    // console.log(currentDateYearTo);
    
    // for (let year=lastYearTo;year<=currentDate;year++)
    // {
    //         rangeTo.push(year)
     
    // }
    // this.yearsTo = rangeTo;
    // console.log(this.yearsTo)


 
  }
  public bikesearch(frmval)
  {

    if (!this.form.value.postal_code)
    {
      const alert=this.alertCtrl.create  ({
        // title: 'Please log-in to view your cart',
        message:'Please provide postcode with distance',
        buttons:['Ok']
      });
      alert.present();
    
    }
    else
    {
      console.log('dhome',this.form.value.postal_code);
      localStorage.setItem('searchdata', JSON.stringify(frmval));
      this.navCtrl.push('SearchVehiclePage');
    }
    
  }

//   toggleSearchbar() { 
//   this.showSearchbar=!this.showSearchbar;
   
//   }

clickme ()
{
  this.showMenu=!this.showMenu;
}

  search(data)
  {
    this.navCtrl.push ('SearchVehiclePage');
  }
//   onCancel(value)
//   {
//   this.showSearchbar = !this.showSearchbar;
    
//     console.log('cancel');

//   }

  goToCartPage()
  {
    if ( JSON.parse(localStorage.getItem('userData')))
{
  console.log('looged user');
this.navCtrl.push ('CartPage');
}
else 
{
  const alert=this.alertCtrl.create  ({
    title: 'Please log-in to view your cart',
    buttons:['Ok']
  });
  alert.present();
}
  }

  public gearsearch(frmval,cat_id)
  {
    console.log('D formvalue',frmval);

    localStorage.setItem('cat_id',JSON.stringify(cat_id));
    localStorage.setItem('searchdata', JSON.stringify(frmval));
    console.log (frmval)
    console.log(cat_id)
   this.navCtrl.push('SearchGearPage');
  }
 
  checkPostalCode(data)
  {
    let dataset=
    {
      "postcodes":[data]
    }
   
    console.log('postal code',data);
    this.bikeService.postcode(dataset).subscribe(res=>{
       this.details = res.result

    console.log('res',this.details)

    if (this.details[0].result==null)
    {
    this.postcode=0;
    console.log('postcode null',this.postcode)
    }
    else{
      this.postcode=1;
      console.log('postcode found',this.postcode)
    }
  });

  

    
  }

}

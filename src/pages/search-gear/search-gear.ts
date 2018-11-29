import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchGearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-gear',
  templateUrl: 'search-gear.html',
})
export class SearchGearPage {
  showSearchbar: boolean = false;
  myInput:any;
  public searchdata:any;
  gearWithLength:any;
  gearWithoutLength:any;
  public gearlists:any;
  public imagelink:any;
  public no_gearlists:any;
  public sortby:any = 0;
  searchdataC:any;
  searchdataS:any;
  searchDataSet: any;
  subCategoryArray:any;
  list:any;
  constructor(private builder: FormBuilder,
  public navCtrl: NavController,
  public alertCtrl: AlertController,
  public navParams: NavParams,
  public menu: MenuController,
  public bikeService: BikeProvider,
  private storage: Storage,
  public loadingCtrl: LoadingController,
  public authService: AuthServiceProvider,
  private myApp:MyApp) {
  }

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

  ionViewDidLoad() {

    // if(localStorage.getItem('searchdata') || localStorage.getItem('cat_id'))
    // {

    //  // console.log('category_id'+localStorage.getItem('cat_id'))
    //    if(localStorage.getItem('searchdata') != '')
    //    {
        
    //      this.searchdata  = JSON.parse(localStorage.getItem('searchdata'));
    //   //   //this.searchdata.cat_id = JSON.parse(localStorage.getItem('cat_id'));
    //    }
    //    else{
    //     this.searchdata  =   {
    //       "cat_id":  JSON.parse(localStorage.getItem('cat_id'))
          
    //     };

    //   }
    //   //this.searchdata.yu = 4;
    //   //console.log(this.searchdata);
     
    //   this.searchgearlist(this.searchdata);
    // }
    if (localStorage.getItem('searchdata')||(localStorage.getItem('cat_id')))
    {
      

      if (localStorage.getItem('searchdata')!='')
      {
        
        this.searchdataS  = JSON.parse(localStorage.getItem('searchdata'));

        this.searchdataC  =   {
                    "cat_id":  JSON.parse(localStorage.getItem('cat_id'))
                    
                  };
                  this.searchdata=(this.searchdataS,this.searchdataC)
                  console.log(this.searchdata)
        this.searchgearlist(this.searchdata);
       
      }
    }

    //  else if (localStorage.getItem('cat_id'))
    //   {
    //     alert('ok');
    //     console.log('cat id')
    //         this.searchdata  =   {
    //           "cat_id":  JSON.parse(localStorage.getItem('cat_id'))
              
    //         };
    //         this.searchgearlist(this.searchdata);
    //   }
    
    this.searchDataSet=
    
      {
        "cat_id":  JSON.parse(localStorage.getItem('cat_id'))
        
      };
    
    this.bikeService.subCategory(this.searchDataSet).subscribe(res=>{
      let details = res
      console.log('dsearchgear',details)
      if(details.ack == 1){
this.list=1;
       this.subCategoryArray=details.subcategories;
       console.log(this.subCategoryArray)
      //  this.searchgearlist(this.searchdata);
  } else if (details.ack == 0){
    this.list=0;
   

  }

  
    });
  

   
  }
 
  clickOption(data){
  
    console.log('hi')
    console.log(data)
    // this.searchDataSet={
    //   "cat_id": data
    // }
    }
    

  searchgearlist(serdata)
  {
    // let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    // console.log(user_details)
    // let login_user = user_details.id;
    // let dataUserDet = {
    //   "uid": login_user
      
    // };
    this.bikeService.searchgearlist(serdata).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
        console.log(details.gears.length);

       
        this.gearlists = details.gears;
        
        this.imagelink = details.image_link;
       console.log( this.gearlists)
       
      
      }
      else{
        this.gearlists ='';
     
      }
      
     },err=>{
      //console.log(err);
       const alert = this.alertCtrl.create({
         title: 'No Gear Found!',
         buttons: ['OK']
       });
       alert.present();
    });
  }









	public sort(){
    if(this.sortby == 1)
    {
      this.sortby = 0;
    }
    else{
      this.sortby = 1;
    }

if(localStorage.getItem('cat_id'))
{
  this.searchdata  =   {
    "cat_id":  JSON.parse(localStorage.getItem('cat_id')),
    "sort_by": this.sortby
  };
}
else{
  this.searchdata.sort_by = this.sortby;
}  
    //this.navCtrl.push('SortPage');
    this.searchgearlist(this.searchdata);
  }
  





  toggleSearchbar() { 
    this.showSearchbar = !this.showSearchbar;
    //this.content.resize();
  }
  search(value){
    //console.log('here');
    this.searchdata.ser_val = this.myInput;
    this.searchgearlist(this.searchdata);
    //console.log(this.myInput)
  }
  onCancel(value)
  {
    this.searchdata  =   {
      "cat_id":  JSON.parse(localStorage.getItem('cat_id')),
      "sort_by": '',
      "ser_val":''
    };
    this.searchgearlist(this.searchdata);
    this.showSearchbar = !this.showSearchbar;
    this.myInput = '';
    console.log(this.myInput);
    console.log('cancel');
  }
  public geardetails(id)
  {  
    //sconsole.log(id);
   this.navCtrl.push('GeardetailsPage',{'id':id});
   
  }
}

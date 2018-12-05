import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SellbikeTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellbike-two',
  templateUrl: 'sellbike-two.html',
})
export class SellbikeTwoPage {
  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;

  category:any;
  model:any;
  make:any;
  colour:any;
  engin:any;
  years:any;
  public details : any;
type: any;
mileage=[];


  constructor(private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    private myApp:MyApp) 
    
    {
      this.form = builder.group({
        'type': ['', Validators.compose([Validators.required])],
        'engine_size': ['', Validators.compose([Validators.required])],
        'year': ['', Validators.compose([Validators.required])],        
        'mileage': ['', Validators.compose([Validators.required])],
        'price': ['', Validators.compose([Validators.required])],
        'color': ['', Validators.compose([Validators.required])],
        'description': ['',Validators.required],
      });

      this.mileage=['0 mile','500 miles','1,000 miles','5,000 miles','10,000 miles','20,000 miles','30,000 miles','40,000 miles','50,000 miles','100,000 miles'];            
  }


  Sellbikeone()
  {
    this.navCtrl.push('SellbikeOnePage')
  }


  ionViewDidLoad() {

    /*if( localStorage.getItem('bike1_id'))
    {
     let dataUserDet = {
       "id": localStorage.getItem('bike1_id')      
    };

     this.bikeService.getbikedetails(dataUserDet).subscribe(res=>{
       
       let details = res
       console.log('RRREESSSS',res)
       console.log(res)
       if(details.Ack == 1){
         
         this.form.controls['type'].setValue(details.product.id);
         this.form.controls['year'].setValue(details.product.year);
         this.form.controls['mileage'].setValue(details.product.mileage);
         this.form.controls['engine_size'].setValue(details.product.engine_size);
         this.form.controls['price'].setValue('');
         this.form.controls['color'].setValue(details.product.color);
       }
       
      },err=>{
       console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Bike not fetch from your account!',
          buttons: ['OK']
        });
        alert.present();
     });
 
    }*/




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

this.authService.getData('products/categories.json').then((result:any) => {
  //console.log(result)
   this.category = result.category;
     this.model =result.model;
     this.make = result.make;
      this.colour = result.colour;
      this.engin = result.engin;
      this.type=result.types;
   console.log('types',this.type);
     // console.log(this.category)
}, (err) => {
  console.log(err);
  // Error log
});
    //console.log('ionViewDidLoad SellbikeTwoPage');
  }


  Sellbikethree(fromdata) {
   if( localStorage.getItem('bike1_id'))
   {
     fromdata.id = localStorage.getItem('bike1_id');
   }


    if (!this.form.valid) {
      const alert = this.alertCtrl.create({
        title: 'Bike add failed!',
        subTitle: "Please fill all the details.",
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let loading = this.loadingCtrl.create({       
        content: 'Loading Please Wait...',    
      });
      loading.present();
     //console.log(fromdata);
     this.bikeService.addbike(fromdata).subscribe(res=>{
       let details = res
       if(details.ack == 1){
        loading.dismiss();
        localStorage.setItem('bike1_id',details.id);
      this.navCtrl.push('SellbikeThreePage');
       }

       else{
          console.log('else part');
        loading.dismiss();
       }
       
      },err=>{
        loading.dismiss();
       //console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Service Failed!',
          buttons: ['OK']
        });
        alert.present();
     });
      
    }
  }

}

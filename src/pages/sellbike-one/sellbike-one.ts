import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import { elementStart } from '@angular/core/src/render3/instructions';
// import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SellbikeOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellbike-one',
  templateUrl: 'sellbike-one.html',
})
export class SellbikeOnePage {

  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  model: any;
  make: any;
  title: any;
  type:any;
  length:any;
  lengthmatch:any;
  productId:any;
  details:any;

  constructor( private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    private myApp:MyApp) {


      this.form = builder.group({
        'make_id': ['',Validators.required],
        'model_id': ['', Validators.required],
        'reg_number': ['', [Validators.required,Validators.minLength(10), Validators.maxLength(70)]]
      });
      
      if (this.navParams.get('id'))
      {
      this.productId = this.navParams.get('id');

      let dataUserDet = {
        "id": this.productId,
      };
      this.bikeService.getbikeshowdetails(dataUserDet).subscribe((res:any)=>{
        let details = res
        console.log(res)
        if(details.Ack == 1){
        this.details = res.product;
        }
        });
      }
      else{
        this.form.controls['reg_number'].setValue('');
        this.form.controls['make_id'].setValue('');
        this.form.controls['model_id'].setValue('');
      }
    }


  ionViewDidLoad() {

    this.authService.getData('products/categories.json').then((result:any) => {
      this.model =result.model;
      this.make = result.make;
      console.log (this.make);
   }, (err) => {
     console.log(err);
   });




  /* if( localStorage.getItem('bike1_id'))
   {
    let dataUserDet = {
      "id": localStorage.getItem('bike1_id')
      
    };
    this.bikeService.getbikedetails(dataUserDet).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
        
        this.form.controls['make_id'].setValue(details.product.make_id);
        this.form.controls['model_id'].setValue(details.product.model_id);
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
    console.log('ionViewDidLoad SellbikeOnePage');
  }



  Sellbiketwo(fromdata) {
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    console.log(login_user)
    fromdata.seller_id = login_user;
    console.log(fromdata);
  //   if( localStorage.getItem('bike1_id'))
  //  {
  //    fromdata.id = localStorage.getItem('bike1_id');
  //  }
   
    let loading = this.loadingCtrl.create({      
      content: 'Loading Please Wait...',    
    });
    loading.present();

   this.bikeService.addbike(fromdata).subscribe(res=>{
     let details = res
     if(details.ack == 1){
       loading.dismiss();
      localStorage.setItem('bike1_id',details.id);
    //   console.log(res);
    //    const alert = this.alertCtrl.create({
    //      title: 'Bike Added Successfully .',
    //      buttons: ['OK']
    //    });
    //  alert.present();
   // this.navCtrl.setRoot('SellbikeThreePage');
    this.navCtrl.push('SellbikeTwoPage');
     }
     else
     {
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
    //localStorage.setItem('bikesell1', JSON.stringify(fromdata));
    //this.navCtrl.setRoot('SellbikeTwoPage');
    //this.navCtrl.push('SellbikeTwoPage');
  }


  // public checklength(check,frmval)
  // {
  //   this.length=frmval.reg_number.length;
    
    
  //   if(this.length <= 10)
  //   {
  //    this.lengthmatch = true;
  //   }
  //   else{
  //     this.lengthmatch = false;
  //   }
  // }

}

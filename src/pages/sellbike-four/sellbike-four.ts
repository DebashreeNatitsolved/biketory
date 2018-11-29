import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SellbikeFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellbike-four',
  templateUrl: 'sellbike-four.html',
})
export class SellbikeFourPage {
  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  user_details:any;
  login_user:any;


  // isChecked: boolean;
  disabled: any;
  isChecked:boolean=true;
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
      this.form = builder.group({
       
        'postal_code':['', Validators.required]
      });


      this.user_details =  JSON.parse(localStorage.getItem('userData'));
      console.log(this.user_details)
      this.login_user = this.user_details.id;

  
  }


  alert()
  {
    this.isChecked=!this.isChecked;
  }
  ionViewDidLoad() {

    this.user_details =  JSON.parse(localStorage.getItem('userData'));
    console.log(this.user_details)
    this.login_user = this.user_details.id;  
    console.log('ionViewDidLoad SellbikeFourPage');
  }


  Sellbikethree()
  {
    this.navCtrl.setRoot('SellbikeThreePage');
  }
  Sellbikefive(formData)
  {
    let loading = this.loadingCtrl.create({       
      content: 'Loading Please Wait...',    
    });
    loading.present();
   formData.id= localStorage.getItem('bike1_id'),
      formData.seller_id= this.login_user
     console.log(formData)

     
     this.bikeService.addbikefinal(formData).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.ack == 1){
        loading.dismiss();
       
        const alert = this.alertCtrl.create({
          title: 'Bike Added Successfully!',
          buttons: ['OK']
        });
        alert.present();

        this.navCtrl.setRoot('BikeSuccessPage');
      }
      else if(details.ack == 0)
      {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Please Enter Valid Postal Code',
          buttons: ['OK']
        });
        alert.present();
       
      }
      else
      {
        loading.dismiss();
      } 
      },
      err=>{
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

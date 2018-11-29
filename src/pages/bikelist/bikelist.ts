import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the BikelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bikelist',
  templateUrl: 'bikelist.html',
})
export class BikelistPage {

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

  ionViewDidLoad() {  
    
    console.log('bike list ewre')
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    let dataUserDet = {
      "id": login_user
      
    };
    this.bikeService.bikelist(dataUserDet).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
        
        //this.bikeimages = details.data;
      }
      
     },err=>{
      //console.log(err);
       const alert = this.alertCtrl.create({
         title: 'Image Remove Failed!',
         buttons: ['OK']
       });
       alert.present();
    });

    console.log('ionViewDidLoad BikelistPage');

  }



  
}

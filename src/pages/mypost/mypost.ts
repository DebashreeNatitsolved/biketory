import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the MypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypost',
  templateUrl: 'mypost.html',
})
export class MypostPage {

  bikelists:any;
  imagelink:any;

  constructor(
    private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    private myApp:MyApp
  ) {
  }

  ionViewDidLoad() {

    //console.log('bike list ewre')
   
   this.bikelist();
    console.log('ionViewDidLoad MypostPage');
  }

  bikelist()
  {
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    let dataUserDet = {
      "uid": login_user
      
    };
    this.bikeService.bikelist(dataUserDet).subscribe(res=>{
      let details = res
      //console.log(res)
      if(details.Ack == 1){
        this.bikelists = details.bikes;
        this.imagelink = details.image_link;
       console.log( this.bikelists)
      }
      
     },err=>{
      //console.log(err);
       const alert = this.alertCtrl.create({
         title: 'No bike is added in your account!',
         buttons: ['OK']
       });
       alert.present();
    });
  }
  bikedelete(id)
  {
    
    let alert = this.alertCtrl.create({
      title: 'Remove Bike',
      message: 'Are you sure to remove this Bike?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
            let dataDet = {
              "id": id
              
            };
            console.log(dataDet);
            this.bikeService.deletebike(dataDet).subscribe(res=>{
              let details = res
              //console.log(res)
              if(details.Ack == 1){
                this.bikelist();
               console.log( this.bikelists)
              }
              
             },err=>{
              console.log(err);
               const alert = this.alertCtrl.create({
                 title: 'Bike not removed from your account!',
                 buttons: ['OK']
               });
               alert.present();
            });
          }
        }
      ]
    });

    alert.present();

  }

  bikeedit(id)
  {
    localStorage.setItem('bike1_id',id);
    this.navCtrl.push('SellbikeOnePage');
  }
}

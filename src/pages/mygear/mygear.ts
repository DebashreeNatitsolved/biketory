import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the MygearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygear',
  templateUrl: 'mygear.html',
})
export class MygearPage {

  bikelists:any;
  imagelink:any;

  constructor(  private builder: FormBuilder,
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
    this.gearlist();
    console.log('ionViewDidLoad MygearPage');
  }
  gearlist()
  {  console.log('here');
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    let dataUserDet = {
      "uid": login_user
      
    };
    this.bikeService.gearlist(dataUserDet).subscribe(res=>{
      let details = res
      //console.log(res)
      if(details.Ack == 1){
        this.bikelists = details.gears;
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
  geardelete(id)
  {
    
    let alert = this.alertCtrl.create({
      title: 'Remove Gear',
      message: 'Are you sure to remove this Gear?',
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
            this.bikeService.deletegear(dataDet).subscribe(res=>{
              let details = res
              //console.log(res)
              if(details.Ack == 1){
                this.gearlist();
              // console.log( this.bikelists)
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

  gearedit(id)
  {
    localStorage.setItem('gear_id',id);
    this.navCtrl.push('AddgearPage');
  }
}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BikeProvider} from '../../providers/bike/bike'
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  user_details: any;
  user_id: any;
  changeForm: FormGroup;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    private storage: Storage,
    private builder: FormBuilder,
    public alertCtrl: AlertController,
    public bikeService:BikeProvider
  ) {

    this.user_details =  JSON.parse(localStorage.getItem('userData'));
    console.log(this.user_details)
    this.user_id = this.user_details.id;

    this.changeForm = builder.group({
      'current_password': [null, Validators.required],
      'new_password': [null, Validators.required],
      'con_password': [null, Validators.required]
    });
  }


  // changepass(formData) {
  //   this.storage.get('uid').then(val => {
  //     console.log(val);
  //     formData['user_id'] = val;
  //   });
  //   console.log(formData);
  //   // return;
  //   this.authService.changepass(formData).subscribe(res => {
  //    if (res.ACK == 1) {
  //       const alert = this.alertCtrl.create({
  //         title: res.msg,
  //         buttons: ['OK']
  //       });
  //       alert.present();
  //     } 
  //     else {

  //       const alert = this.alertCtrl.create({
  //         title: res.msg,
  //         buttons: ['OK']
  //       });
  //       alert.present();
  //     }
  //   }, err => {
  //     console.log(err);
  //   });
  // }
  changepass(formdata)
  {
  formdata.user_id=this.user_id;
  this.bikeService.changePassword(formdata).subscribe(res => {
   
    console.log(res);
    console.log('hello');
    let details = res
    if (details.Ack ==  1) {
            console.log ('password');
            const alert = this.alertCtrl.create({
                 title: details.message,
                  buttons: ['OK']
                });
                 alert.present();

                 this.navCtrl.push ('AfterSplashPage');
          } else 
          {
            const alert = this.alertCtrl.create({
              title: details.message,
               buttons: ['OK']
             });
              alert.present();
          }

  });
  }

  // showAlert2()
  // {
    
  //    const alert = this.alertCtrl.create({
  //    title: 'New Friend!',
  //     subTitle: 'Your friend accepted your friend request!',
  //     buttons: ['OK']
  //   });
  //    alert.present();}


  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

}

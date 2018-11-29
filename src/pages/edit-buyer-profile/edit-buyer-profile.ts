import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {FormBuilder,FormControl,FormGroup,Validators,AbstractControl} from '@angular/forms'
import {BikeProvider} from '../../providers/bike/bike'
import {BuyerProfilePage} from '../buyer-profile/buyer-profile'
import { Storage } from '@ionic/storage'

/**
 * Generated class for the EditBuyerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-buyer-profile',
  templateUrl: 'edit-buyer-profile.html',
})
export class EditBuyerProfilePage {
  user_details: any;
  user_id: any;
  userSet: any;
  public firstName: any;

  formGroup:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder:FormBuilder, public bikeService: BikeProvider,
    public alertCtrl: AlertController,public storage: Storage) {


      this.user_details =  JSON.parse(localStorage.getItem('userData'));
      console.log(this.user_details)
      this.user_id = this.user_details.id;

      
      this.firstName=this.user_details.first_name;
      console.log(this.firstName);


      this.userSet={
        "user_id":this.user_id,
        };

      this.formGroup = new FormGroup ({
        first_name: new FormControl ('', Validators.required),
        last_name: new FormControl ('', Validators.required),
      phone: new FormControl ('', Validators.required),
      address: new FormControl ('', Validators.required),
      city: new FormControl ('', Validators.required),
      country: new FormControl ('', Validators.required),
      postcode: new FormControl ('', Validators.required),
      gender: new FormControl ('', Validators.required)
      });
  }


submitDetails (formdata)
{
  formdata.user_id=this.user_id;
  console.log(formdata);
  this.bikeService.editprofile(formdata).subscribe(res => {
   
    console.log(res);
    console.log('hello');
    let details = res
    
    if(details.Ack == 1){
      const alert = this.alertCtrl.create({
        title: 'Your Profile Updated Successfully',
         buttons: ['OK']
       });
        alert.present();

        this.bikeService.userDetails(this.userSet).subscribe (res=>{
          console.log (res)
         
          if (res.Ack==1)
          {
            console.log('successful');
            this.storage.ready().then(() => {
              localStorage.setItem('userData', JSON.stringify(res.userdetails));
               console.log("USERDATATATATATTATATTATA", JSON.stringify(res.userdetails));
         
                this.storage.set('first_Name', res.userdetails['first_name']).then(() => {
                  this.storage.set('last_Name', res.userdetails['last_name']).then(() => {
                    this.storage.set('uid', res.userdetails['id']).then(() => {
                     
                      this.navCtrl.push('BuyerProfilePage');
                     
                    //  this.navCtrl.push ('OrderListingPage');
    
                     
                    // this.storage.get('uid').then((res)=>{
                      
                    //   console.log(res);
                    // }).catch();
                    
                  });
                });
                });
            // });
            });
         
          }
        });
      }
  });
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBuyerProfilePage');

    if (this.storage.get('userdata'))
    {
   this.formGroup.controls['first_name'].setValue(this.user_details.first_name);
   this.formGroup.controls['last_name'].setValue(this.user_details.last_name);
   this.formGroup.controls['phone'].setValue(this.user_details.phone);
   this.formGroup.controls['city'].setValue(this.user_details.city);
   this.formGroup.controls['address'].setValue(this.user_details.address);
   this.formGroup.controls['country'].setValue(this.user_details.country);
   this.formGroup.controls['gender'].setValue(this.user_details.gender);
   this.formGroup.controls['postcode'].setValue(this.user_details.postcode);
  }
else
{
  this.formGroup.controls['first_name'].setValue('');
  this.formGroup.controls['last_name'].setValue('');
  this.formGroup.controls['phone'].setValue('');
  this.formGroup.controls['city'].setValue('');
  this.formGroup.controls['address'].setValue('');
  this.formGroup.controls['country'].setValue('');
  this.formGroup.controls['gender'].setValue('');
  this.formGroup.controls['postcode'].setValue('');
}
}
}


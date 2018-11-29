import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {FormBuilder,FormControl,FormGroup,Validators,AbstractControl} from '@angular/forms'
import {Storage} from '@ionic/storage'
import {BikeProvider} from '../../providers/bike/bike'
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

formGroup:FormGroup;
userDetails:any;
billingForm:FormGroup;
cartlist:any;
total_price:any;
total_item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public builder:FormBuilder,public storage:Storage, public bikeService: BikeProvider,
    public alertCtrl: AlertController) {
  
      this.formGroup=new FormGroup ({
        first_name: new FormControl ('',Validators.required),
        last_name: new FormControl ('',Validators.required),
        phone: new FormControl ('',Validators.required),
        pincode: new FormControl ('',Validators.required),
        address: new FormControl ('',Validators.required),
        area: new FormControl ('',Validators.required),
        city: new FormControl ('',Validators.required),
        state: new FormControl ('', Validators.required),
        landmark: new FormControl ('', Validators.required),
        country: new FormControl ('', Validators.required)
      });


      this.billingForm=new FormGroup ({
        first_name: new FormControl ('',Validators.required),
        last_name: new FormControl ('',Validators.required),
        phone: new FormControl ('',Validators.required),
        pincode: new FormControl ('',Validators.required),
        address: new FormControl ('',Validators.required),
        area: new FormControl ('',Validators.required),
        city: new FormControl ('',Validators.required),
        state: new FormControl ('', Validators.required),
        landmark: new FormControl ('', Validators.required),
        country: new FormControl ('', Validators.required) 
      });

this.userDetails=JSON.parse (localStorage.getItem ('userData'))
console.log(this.userDetails);

    }
    submit(data)
    {
      console.log('submit')
      this.navCtrl.push('PaymentPage');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');


    if (localStorage.getItem('userData'))
    {
      let user_details:any =  JSON.parse(localStorage.getItem('userData'));
      console.log(user_details)
      let login_user = user_details.id;
     
      let dataUserDet = {
        "user_id": login_user,  
      };

    this.bikeService.getcarts(dataUserDet).subscribe(res=>{
      console.log(res);
      let details = res
      if(details.Ack == 1){
        if(details.cart.length > 0)
        {
       this.cartlist = details.cart;
       this.total_price = details.total_price;
                 this.total_item = details.total_item;
             console.log (this.cartlist);
        }
        else{
          const alert=this.alertCtrl.create ({
            title: 'No Cart Available',
            buttons:['ok']

          });
          alert.present();
        }
      }
      
     });




    if (this.storage.get('userData'))
    {
     this.formGroup.controls ['first_name'].setValue (this.userDetails.first_name)
     this.formGroup.controls ['last_name'].setValue (this.userDetails.last_name)
     this.formGroup.controls ['phone'].setValue (this.userDetails.phone)

     this.billingForm.controls ['first_name'].setValue (this.userDetails.first_name)
     this.billingForm.controls ['last_name'].setValue (this.userDetails.last_name)
     this.billingForm.controls ['phone'].setValue (this.userDetails.phone)

    }
    else
    {
      this.formGroup.controls ['first_name'].setValue ('')
     this.formGroup.controls ['last_name'].setValue ('')
     this.formGroup.controls ['phone'].setValue ('')

     this.billingForm.controls ['first_name'].setValue (this.userDetails.first_name)
     this.billingForm.controls ['last_name'].setValue (this.userDetails.last_name)
     this.billingForm.controls ['phone'].setValue (this.userDetails.phone)
    }
  }

}
}

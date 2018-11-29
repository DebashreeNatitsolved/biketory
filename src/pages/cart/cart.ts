import { Component ,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController, LoadingController ,ModalController} from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import {MessageFormPage} from '../../pages/message-form/message-form';
import { SocialSharing } from '@ionic-native/social-sharing';
import {CheckoutPage} from '../checkout/checkout'

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  id:any;
  image_link:any;
  public bikeimages: any;
  public wish:any;
  category_name:any;
  size:any;
  brand_name :any;
  colour:any;
  cartlist:any;
  total_price;any;
  total_item:any;
  no_cart:any;
   details:any = {};
  constructor(private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private socialSharing: SocialSharing) {

      this.id =  this.navParams.get('id');
  }

  goForCheckOut()
  {
    this.navCtrl.push ('CheckoutPage');
  }


  ionViewDidLoad() {

   this.cartsval();
   
console.log('ionViewDidLoad CartPage');
  }

public cartsval()
{
  let loading = this.loadingCtrl.create({
    content: 'Loading Please Wait...',
  });
  loading.present();
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
   loading.dismiss();
   if(details.cart.length > 0)
   {
  this.cartlist = details.cart;
  this.total_price = details.total_price;
            this.total_item = details.total_item;
            this.no_cart = 1;
   }
   else{
     this.no_cart = '';
   }
 }
 else{

  loading.dismiss();
 }
},err=>
{
  loading.dismiss();
});

} 

else
{
  loading.dismiss();
  const alert = this.alertCtrl.create({
        title: 'No Cart Available!',
        subTitle: 'Please Log-In to view your cart',
        buttons: ['OK']
      });
      alert.present();
}
}




public decriment(key)
{
if(this.cartlist[key].quantity != 1)
{
  let cartDet = {
    "id": this.cartlist[key].id ,
    "quantity":this.cartlist[key].quantity ,
    "increment":1,
    "prd_id":this.cartlist[key].prd_id
    
  };
  console.log(cartDet);
  let loading = this.loadingCtrl.create({
    content: 'Loading Please Wait...',
  });
  loading.present();
 //console.log(fromdata);
 this.bikeService.updatecarts(cartDet).subscribe(res=>{
   console.log('Hello Debashree');
   console.log(res);
   let details = res
   if(details.Ack == 1){
     loading.dismiss();
    this.cartlist[key].quantity = details.quantity;
    this.cartlist[key].price =details.price;
    this.cartsval();
   }
   else
   {
     loading.dismiss();
   }
   
  },err=>{
    loading.dismiss();
   //console.log(err);
    const alert = this.alertCtrl.create({
      title: 'Cart Not Updated!',
      buttons: ['OK']
    });
    alert.present();
 });
}
else{
  const alert = this.alertCtrl.create({
    title: 'Your cart quantity is minimum.',
    buttons: ['OK']
  });
  alert.present();
}
}


public incriment(key)
{

  let loading = this.loadingCtrl.create({
    content: 'Loading Please Wait...',
  });
  loading.present();
console.log(this.cartlist[key].id);
  let cartDet = {
    "id": this.cartlist[key].id ,
    "quantity":this.cartlist[key].quantity ,
    "increment":2,
    "prd_id":this.cartlist[key].prd_id
    
  };
  console.log(cartDet);

 //console.log(fromdata);
 this.bikeService.updatecarts(cartDet).subscribe(res=>{
   console.log(res);
   let details = res
   console.log(details.Ack)
   if(details.Ack == 1){
     loading.dismiss();
    this.cartlist[key].quantity = details.quantity;
    this.cartlist[key].price =details.price;
    this.cartsval();
   }
   else
   {
    loading.dismiss();
   }
   
  },err=>{
    loading.dismiss();
   //console.log(err);
    const alert = this.alertCtrl.create({
      title: 'Cart Not Updated!',
      buttons: ['OK']
    });
    alert.present();
 }); 
}


public removecart(id)
{
  let alert = this.alertCtrl.create({
    title: 'Remove Item',
    message: 'Are you sure to remove this item , Form your cart?',
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
        
          let cartDet = {
            "id": id ,
          };
          console.log(cartDet);
     
         this.bikeService.removecarts(cartDet).subscribe(res=>{
           console.log(res);
           let details = res
           if(details.Ack == 1){

            this.cartsval();
       
  //           let user_details:any =  JSON.parse(localStorage.getItem('userData'));
  //           console.log(user_details)
  //           let login_user = user_details.id;

  //           let dataUserDet = {
  //             "user_id": login_user,    
  //           };
  //        this.bikeService.getcarts(dataUserDet).subscribe(res=>{
  //          console.log(res);
  //          let details = res
  //          if(details.Ack == 1){
  //           if(details.cart.length > 0)
  //  {
  // this.cartlist = details.cart;
  // this.total_price = details.total_price;
  //           this.total_item = details.total_item;
  //           this.no_cart = '';
  //  }
  //  else{
  //    this.no_cart = 1;
  //  }
           
  //          }
           
  //         },err=>{
  //          //console.log(err);
  //           const alert = this.alertCtrl.create({
  //             title: 'No Cart Available!',
  //             buttons: ['OK']
  //           });
  //           alert.present();
  //        });
        
           }
           
          },err=>{
           //console.log(err);
            const alert = this.alertCtrl.create({
              title: 'Cart Not Updated!',
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


}

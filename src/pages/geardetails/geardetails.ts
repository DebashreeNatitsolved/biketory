import { Component ,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController, LoadingController ,ModalController} from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import {ReviewPage} from '../../pages/review/review';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the GeardetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geardetails',
  templateUrl: 'geardetails.html',
})
export class GeardetailsPage {
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
  dataUserDet:any;
  size:any;
  brand_name :any;
  user_details:any;
  colour:any;
  review_data:any;
  user_image_link:any;
  review_data_blank:any;
  review_data_rat:any;
  public user_val:any = {};
   details:any = {};
   user_exists:any;
  constructor(private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private socialSharing: SocialSharing,) {
      this.id =  this.navParams.get('id');
      console.log('iDDDDD'+this.id);
  }

  ionViewDidLoad() {
this.geardetails()
  }

geardetails()
{

if (localStorage.getItem('userData'))
{
this.user_details=JSON.parse(localStorage.getItem('userData'));
console.log(this.user_details)
this.user_exists=1;
console.log('I am here')
}
else{
  this.user_exists=0
  console.log('Please login')
}

     this.dataUserDet = {
      "id": this.id,
      "user_id":this.user_details.id
 
      
    };
    this.bikeService.getgearshowdetails(this.dataUserDet).subscribe((res:any)=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
      this.details = res.gears;
      if(this.details.gearsimages.length > 0)
      {
        this.bikeimages = this.details.gearsimages;
      }
      else{
        this.bikeimages ='';
      }
      
      this.user_image_link = this.details.user_image_link;
      this.image_link = this.details.image_link;
      console.log(this.details.category.name);
      this.category_name = this.details.category.name;
      
      if (this.details.brand!=null)
      {
        this.brand_name=this.details.brand.brand_name;
      }
      else 
      {
        this.brand_name='';
      }
      this.wish = this.details.wish;
      this.size = this.details.size.size;
      this.colour = this.details.colour;

      if (res.review_data.length!=0)
      {
      this.review_data = res.review_data;
      }else
      {
        this.review_data='';
      }
      this.user_val = this.details.user;
console.log(this.user_val);
      console.log(this.details.user);

      console.log('fgh'+ this.wish)
    }
     },err=>{
      console.log(err);
       const alert = this.alertCtrl.create({
         title: 'Gear not fetch from your account!',
         buttons: ['OK']
       });
       alert.present();
    });

}

  shareInfo()
  { 
    let name1 = this.details.reg_number;
    let description1 =this.details.description ;
    let link1 = this.details.link;
    let image1 = this.bikeimages[0].link  ;
    // this.socialSharing.shareViaEmail('Body', 'Subject', ['palash@natitsolved.com']).then(() => {
    //   // Success!
    // }).catch(() => {
    //   // Error!
    // });
    // this.socialSharing.shareViaFacebook(description,image,link).then(() => {
    //   // Success!
    // }).catch((error) => {
    //   console.log(error)
    //   // Error!
    // });


    
  //   this.socialSharing.shareViaFacebook(description, image, link).
  //   then(() => {
  // alert("Sharing success");
  // // Success!
  // }).catch((error) => {
  //   console.log(error);
  // // Error!
  // alert("Share failed");
  // });
  this.socialSharing.share(name1, description1,image1, link1).
  then(() => {
  //alert("Sharing success");
  // Success!
  }).catch(() => {
  // Error!
  //alert("Share failed");
  });
  }

  review() { console.log('here');
    let profileModal = this.modalCtrl.create(ReviewPage, { gearid: this.id });
    profileModal.present();
  }

  public send_request()
  {
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    let dataUserDet = {
      "user_id": login_user,
      "prod_id":this.id
      
    };
  let loading = this.loadingCtrl.create({
    spinner: 'show',
    content: 'Loading Please Wait...',
    duration: 5000
  });
  loading.present();
 //console.log(fromdata);
 this.bikeService.sendrequest(dataUserDet).subscribe(res=>{
   let details = res
   if(details.ack == 1){
    const alert = this.alertCtrl.create({
      title: 'Request Sussesfully Send To Seller!',
      buttons: ['OK']
    });
    alert.present();
   // this.navCtrl.push('DetailsPage',{'id':this.id});
   }
   
  },err=>{
   //console.log(err);
    const alert = this.alertCtrl.create({
      title: 'Service Failed!',
      buttons: ['OK']
    });
    alert.present();
 });
  }
  public send_wishelist()
  {
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    let dataUserDet = {
      "user_id": login_user,
      "prod_id":this.id,
      "status":'gears'
      
    };
  let loading = this.loadingCtrl.create({
    spinner: 'show',
    content: 'Loading Please Wait...',
    duration: 3000
  });
  loading.present();
 //console.log(fromdata);
 this.bikeService.addwish(dataUserDet).subscribe(res=>{
  //  let details = res
   if(res.ack == 1){
    this.wish=res.wish;
    // this.details.wish=1;
    const alert = this.alertCtrl.create({
      title: 'Successfully added to wishlist!',
      buttons: ['OK']
    });
    alert.present();
   // this.navCtrl.push('DetailsPage',{'id':this.id});
   }
   else
   {
    this.wish=res.wish;
    // this.details.wish=0;
    const alert = this.alertCtrl.create({
      title: 'Successfully removed from wishlist!',
      buttons: ['OK']
    });
    alert.present();
   }
   
  },err=>{
   //console.log(err);
    const alert = this.alertCtrl.create({
      title: 'Service Failed!',
      buttons: ['OK']
    });
    alert.present();
 });
  }

 public add_cart()
 {   //alert('fhfghf');
 
 let loading = this.loadingCtrl.create({
  content: 'Loading Please Wait...',
});
loading.present();

 console.log(this.details.user_id);
  let user_details:any =  JSON.parse(localStorage.getItem('userData'));
  console.log(user_details)
  let login_user = user_details.id;
  let dataUserDet = {
    "user_id": login_user,
    "prod_id":this.id
    
  };

  if(this.details.user_id != login_user)
  {

//console.log(fromdata);
this.bikeService.addcart(dataUserDet).subscribe(res=>{
 let details = res
 if(details.Ack == 1){
   loading.dismiss();
  const alert = this.alertCtrl.create({
    title: 'Cart Added Successfully!',
    buttons: ['OK']
  });
  alert.present();
 this.navCtrl.push('CartPage',{'id':this.id});
 }
 else{
  loading.dismiss();
 }
 
},err=>{
  loading.dismiss();
  const alert = this.alertCtrl.create({
    title: 'Cart Add Failed!',
    buttons: ['OK']
  });
  alert.present();
});

  }
  else{
    loading.dismiss();
    const alert = this.alertCtrl.create({
      title: 'You Can not Cart Your Own Gear!',
      buttons: ['OK']
    });
    alert.present();
  }
 } 

 loginAlert()
 {
   const alert=this.alertCtrl.create({

    title: 'Please Log In To Add Product In Your Cart',
    buttons:['ok']
   });
   alert.present();
 }

 reviewAlert()
 {
   const alert=this.alertCtrl.create({

    title: 'Please Log In To Add Review',
    buttons:['ok']
   });
   alert.present();
 }

 
}

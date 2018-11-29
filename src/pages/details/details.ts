import { Component ,Renderer,ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController, AlertController, LoadingController ,ModalController} from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import {MessageFormPage} from '../../pages/message-form/message-form';
import { SocialSharing } from '@ionic-native/social-sharing';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
 map: GoogleMap;

  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  id:any;
  user_exists:any
  public bikeimages: any;
  public wish:any;
   details:any = {};

   @ViewChild('map') mapRef:ElementRef;
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
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.DisplayMap();
    // this.loadMap();


if (localStorage.getItem('userData'))
{

this.user_exists=1;
console.log('I am here')
}
else{
  this.user_exists=0
  console.log('Please login')
}



    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
    
    
    
    
    
    let dataUserDet = {
      "id": this.id,
    };
    this.bikeService.getbikeshowdetails(dataUserDet).subscribe((res:any)=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
      this.details = res.product;
      console.log(this.details)
      this.wish = this.details.wish;
      console.log(this.details.link);
      console.log('fgh'+ this.wish)
      }
     },err=>{
      console.log(err);
       const alert = this.alertCtrl.create({
         title: 'Bike not fetch from your account!',
         buttons: ['OK']
       });
       alert.present();
    });

    this.bikeService.getbikeimagedetails(dataUserDet).subscribe(res=>{
       
      let details = res
      console.log(res)
      if(details.Ack == 1){
       this.bikeimages = details.productimage;
       //console.log('bikeimage')
console.log('bikeimage'+this.bikeimages)
               }
      
     },err=>{
      console.log(err);
       const alert = this.alertCtrl.create({
         title: 'Bike not fetch from your account!',
         buttons: ['OK']
       });
       alert.present();
    });
  }

  DisplayMap() {

    const location = new google.maps.LatLng(17.385044,
      78.486671);

    const options = {
      center:location,
      zoom:10,
      streetViewControl:false,
      // mapTypeId:'hybrid'
    };

    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    this.addMarker(location,map);
  }

  addMarker(position,map) {
    return new google.maps.Marker({
      position,
      map
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

  presentProfileModal() { console.log('here');
    let profileModal = this.modalCtrl.create(MessageFormPage, { bikeid: this.id });
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
      "status":'bikes'
      
    };
  let loading = this.loadingCtrl.create({
    spinner: 'show',
    content: 'Loading Please Wait...',
    duration: 3000
  });
  loading.present();
 //console.log(fromdata);
 this.bikeService.addwish(dataUserDet).subscribe(res=>{
   let details = res
   if(details.ack == 1){
    this.wish=details.wish;
    const alert = this.alertCtrl.create({
      title: 'Successfully added to wishlist!',
      buttons: ['OK']
    });
    alert.present();
   // this.navCtrl.push('DetailsPage',{'id':this.id});
   }
   else{
    this.wish=details.wish;
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



  loginAlert()
  {
    const alert=this.alertCtrl.create({
 
     title: 'Please Log In To Send Request',
     buttons:['ok']
    });
    alert.present();
  }
 
  reviewAlert()
  {
    const alert=this.alertCtrl.create({
 
     title: 'Please Log In To Message The Owner',
     buttons:['ok']
    });
    alert.present();
  }



  // loadMap(){
 
  //   let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
  //   let mapOptions = {
  //     center: latLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
 
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
  // }

 
}



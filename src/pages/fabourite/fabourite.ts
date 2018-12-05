import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events,AlertController } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'

/**
 * Generated class for the FabouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabourite',
  templateUrl: 'fabourite.html',
})
export class FabouritePage {
  showSearchbar: boolean = false;
  myInput:any;

  user_details: any;
  wishlistSet: any;
  wishlistGearArray: any;
  wishlistBikeArray: any;
  gearImgString: any;
  bikeImgString: any;
  gearImg:any;
  bikelistFound:any;
  gearlistFound:any;

  constructor(public navCtrl: NavController, 
    public alertCtrl:AlertController,public navParams: NavParams ,public events:Events, 
    public bikeService: BikeProvider) {
   events.publish('hideHeader', { isHidden: false});

   this.user_details =  JSON.parse(localStorage.getItem('userData'));
   console.log(this.user_details)
   let login_user = this.user_details.id;

   this.wishlistSet = {
     "user_id": login_user, 
   };

  }

  ionViewDidLoad() {
   // this.events.publish('hideHeader', { isHidden: false});
    console.log('ionViewDidLoad FabouritePage');

    this.bikeService.wishlist(this.wishlistSet).subscribe(res => {
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
      
        this.wishlistGearArray=details.wishlistgeardata;

        console.log('wishlistGearArray',this.wishlistGearArray);
      
        this.wishlistBikeArray=details.wishlistbikedata;
        console.log ('wishlistBikeArray',this.wishlistBikeArray);

      //  if ((this.wishlistGearArray[0].gear.upload.length)!=0)
      //  {
      //    console.log ('img found')
      //    this.gearImg=1;
      //  }else
       
      //  {
      //   console.log ('img not found')
      //   this.gearImg=0;
      //  }
        if (this.wishlistGearArray.length==0)
        {
          this.gearlistFound=0;
        }else{
          this.gearlistFound=1;
        }

        if (this.wishlistBikeArray.length==0)
        {
          this.bikelistFound=0;
        }else{
          this.bikelistFound=1;
        }

        
        console.log(details.gearimagepath);
        this.gearImgString=details.gearimagepath;
        this.bikeImgString=details.bikeimagepath;
  }
  else{
console.log ('else part')
  }


},err=>{

  const alert = this.alertCtrl.create({
    title: 'Service Failed!',
    buttons: ['OK']
  });
  alert.present();
});



  }

  goToGearPage(id)
  {


 if (this.wishlistGearArray[0].status=='gears')
  {
    this.navCtrl.push ('GeardetailsPage',{'id':id});
  }
  }

  goToBikePage(id)
  {
 
  if (this.wishlistBikeArray[0].status=='bikes')
  {
    this.navCtrl.push ('DetailsPage',{'id':id});
  }
  }

  

}

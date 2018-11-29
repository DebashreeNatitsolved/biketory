import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Events } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams ,public events:Events, 
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
        
        console.log(details.wishlistgeardata);
        this.wishlistGearArray=details.wishlistgeardata;

        console.log(this.wishlistGearArray);
        console.log(this.wishlistGearArray.length);
        this.wishlistBikeArray=details.wishlistbikedata;
        console.log (this.wishlistBikeArray);
       if ((this.wishlistGearArray[0].gear.upload.length)!=0)
       {
         console.log ('img found')
         this.gearImg=1;
       }else
       
       {
        console.log ('img not found')
        this.gearImg=0;
       }
        

        
        console.log(details.gearimagepath);
        this.gearImgString=details.gearimagepath;
        this.bikeImgString=details.bikeimagepath;
  }


});



  }

  goToGearPage(id)
  {
  //     for (let i=0;i<this.wishlistGearArray.length;i++)
  // {
  //   console.log(this.wishlistGearArray[i].status);
  //   if (this.wishlistGearArray[i].status=='gears')
    
  //   {
  //     this.navCtrl.push ('GeardetailsPage',{'id':id});
  //   }
  // }

 if (this.wishlistGearArray[0].status=='gears')
  {
    this.navCtrl.push ('GeardetailsPage',{'id':id});
  }
  }

  goToBikePage(id)
  {
  //     for (let i=0;i<this.wishlistBikeArray.length;i++)
  // {
  //   console.log(this.wishlistBikeArray[i].status);
  //   if (this.wishlistBikeArray[i].status=='bikes')
  //   {
  //     this.navCtrl.push ('DetailsPage',{'id':id});
  //   }
  // }

  if (this.wishlistBikeArray[0].status=='bikes')
  {
    this.navCtrl.push ('DetailsPage',{'id':id});
  }
  }

  


  // toggleSearchbar() { 
  //   this.showSearchbar = !this.showSearchbar;
  //   //this.content.resize();
  // }
  // search(value){
  //   console.log('here');
  //   console.log(this.myInput)
  // }
  // onCancel(value)
  // {
  //   this.showSearchbar = !this.showSearchbar;
  //   this.myInput = '';
  //   console.log(this.myInput);
  //   console.log('cancel');
  // }
}

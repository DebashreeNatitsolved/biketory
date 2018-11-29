import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {OrderDetailsPage} from '../order-details/order-details';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the OrderListingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-listing',
  templateUrl: 'order-listing.html',
})
export class OrderListingPage {
 
 orderSet: any;
  public orderArray: any;
  public orderId: any;
  user_details: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public bikeService: BikeProvider, private storage: Storage) {

      this.user_details =  JSON.parse(localStorage.getItem('userData'));
      console.log(this.user_details)
      let login_user = this.user_details.id;
  
      this.orderSet = {
        "user_id": login_user, 
      };
    
  }

  goToOrderDetails(data)
  {
    this.navCtrl.push ('OrderDetailsPage',{param:data});
  }

//   function($scope)
//   {
//  $scope.getDateFormat = function(timestamp) {
//     return new Date(timestamp);
//   }
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListingPage');

   let user_type=this.user_details.utype;
   console.log(user_type);

   if (user_type==1)

{
    this.bikeService.orderList(this.orderSet).subscribe(res => {
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
        console.log(details.orderlist);
        this.orderArray=details.orderlist;
        console.log(this.orderArray);
        console.log(this.orderArray[0])
       

  }
});
  }


  }
}

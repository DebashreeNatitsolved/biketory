import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike';
/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

  public parameterId: any;
  public detailsArray: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public bikeService:BikeProvider) {
    this.parameterId=navParams.get ('param');
    console.log(this.parameterId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');

    let orderIdSet={
      "order_id":this.parameterId
    };
    this.bikeService.orderDetails(orderIdSet).subscribe(res => {
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
        console.log('Hello Order List');
        
        console.log(details.order_details);
        this.detailsArray=details.order_details;
        console.log(this.detailsArray);
        console.log(this.detailsArray[0])
   
  } 
  else{console.log('No Result');}
});


  }

}

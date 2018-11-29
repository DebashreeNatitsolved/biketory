import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'

/**
 * Generated class for the SellerOrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-order-details',
  templateUrl: 'seller-order-details.html',
})
export class SellerOrderDetailsPage {
  param: any;
  user_details: any;
  login_user: any;
  public detailsArray: any;
  totalPrice:any;
  productImagePath:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bikeService:BikeProvider) {
    this.param=navParams.get('parameter');
    console.log(this.param)

    this.user_details =  JSON.parse(localStorage.getItem('userData'));
    console.log(this.user_details)
    this.login_user = this.user_details.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerOrderDetailsPage');

    let orderIdSet={
      "order_id":this.param,
      "user_id":this.login_user
    };
console.log(orderIdSet);

this.bikeService.orderDetailsSeller(orderIdSet).subscribe(res => {
  console.log(res);
  let details = res
  
  if(details.Ack == 1){
    
    console.log('Hello Order List');
      console.log(details.seller_order_details);
    this.detailsArray=details.seller_order_details;
    this.productImagePath=details.link;
    this.totalPrice=this.detailsArray[0].order.total_price
    console.log('totalPrice',this.totalPrice);
    
    console.log(this.detailsArray);
    // console.log(this.detailsArray[0])
  

} 
else{console.log('No Result');}
});
  }

}

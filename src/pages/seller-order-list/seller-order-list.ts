import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike';
import {SellerOrderDetailsPage} from '../seller-order-details/seller-order-details'
/**
 * Generated class for the SellerOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller-order-list',
  templateUrl: 'seller-order-list.html',
})
export class SellerOrderListPage {
  
  orderSet: any;
  public orderArray: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bikeService:BikeProvider) {

    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;

    this.orderSet = {
      "user_id": login_user, 
    };
   
  }
  goToSellerOrderDetails(data)
  {
    this.navCtrl.push ('SellerOrderDetailsPage', {parameter:data})
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerOrderListPage');

    console.log('seller');
    console.log(this.orderSet);
    this.bikeService.orderListSeller(this.orderSet).subscribe(res=>{
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
        console.log('Hello Order List');
        
        console.log(details.order_list_seller)
        this.orderArray=details.order_list_seller
        console.log(this.orderArray);
       
  }
});
  }

}

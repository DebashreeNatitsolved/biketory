import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Click below to get your coupon code
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-grid class="coupon-dtl">
    <ion-row>
        <ion-col col-2></ion-col>
        <ion-col col-8><button ion-button block color="secondary"">Redeem Coupon Code</button></ion-col>
      </ion-row>
      <ion-row>
        <ion-col col-12><h6 class="text-center">Amazon: Up To 75% Off | Amazon Promo Codes & Coupons February 2018</h6></ion-col>
        <ion-col col-12><p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></ion-col>
      </ion-row>
  </ion-grid>
</ion-content>
`
})

export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) {
    
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
   //this.navCtrl.push('CouponlistPage');
  }

  
  
}
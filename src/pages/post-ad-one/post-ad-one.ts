import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PostAdOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-ad-one',
  templateUrl: 'post-ad-one.html',
})
export class PostAdOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostAdOnePage');
  }
  
  steptwo() {
    this.navCtrl.setRoot('PostAdTwoPage');
  }

}

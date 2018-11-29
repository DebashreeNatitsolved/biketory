import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BikeSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bike-success',
  templateUrl: 'bike-success.html',
})
export class BikeSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BikeSuccessPage');
  }
  gohome()
  {
    localStorage.setItem('bike1_id','');
    this.navCtrl.push('HomePage');
  }
  golist()
  {
    localStorage.setItem('bike1_id','');
    this.navCtrl.push('SellbikeOnePage');
  }
  
}

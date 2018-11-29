import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';

/**
 * Generated class for the AdDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ad-details',
  templateUrl: 'ad-details.html',
})
export class AdDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController) {
  }

  ionViewDidLoad() {
    this.menu.enable(true, 'loggedOutMenu');
    console.log('ionViewDidLoad AdDetailsPage');
  }

}

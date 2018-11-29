import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController ,Events } from 'ionic-angular';

/**
 * Generated class for the AfterSplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-after-splash',
  templateUrl: 'after-splash.html',
})
export class AfterSplashPage {
  public footerIsHidden: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public events: Events) {
    events.publish('hideFooter', { isHidden: true});
  }

  ionViewDidLoad() {
    this.menu.enable(false, 'loggedOutMenu');
    console.log('ionViewDidLoad AfterSplashPage');
  }
  
	onLogin() {
		this.navCtrl.push('LoginnewPage');
  }
  
  GoSignup() {
		this.navCtrl.push('SignupPage');
  }
  
}

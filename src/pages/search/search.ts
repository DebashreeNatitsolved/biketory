import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  showSearchbar: boolean = false;
  myInput:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  toggleSearchbar() { 
    this.showSearchbar = !this.showSearchbar;
    //this.content.resize();
  }
  search(value){
    console.log('here');
    console.log(this.myInput)
  }
  onCancel(value)
  {
    this.showSearchbar = !this.showSearchbar;
    this.myInput = '';
    console.log(this.myInput);
    console.log('cancel');
  }
}

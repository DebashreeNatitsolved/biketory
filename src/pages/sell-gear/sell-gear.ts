import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'
// import { Observable } from 'rxjs/Observable';
// import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SellGearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell-gear',
  templateUrl: 'sell-gear.html',
})
export class SellGearPage {
  // sellGear: Observable<any>;
  gearArray: any;
  imageUrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bikeService: BikeProvider) {


    
    this.bikeService.sellGear().subscribe((res:any) => {
      console.log('my data: ', res);

      if (res.Ack==1)
      {
        console.log('sell bike');
        this.gearArray=res.categories;
        console.log(this.gearArray);
        this.imageUrl=res.categoryimagepath;
        console.log(this.imageUrl);
      }
    });
  }

  goToGearResult(data)
  {
    this.navCtrl.push('GearResultPage', {param:data});
  }

  gearResult(data)
  {
    this.navCtrl.push('GearResultPage', {param:data});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SellGearPage');
  }

}
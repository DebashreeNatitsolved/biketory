import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'
/**
 * Generated class for the SellBikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sell-bike',
  templateUrl: 'sell-bike.html',
})
export class SellBikePage {
;
  bikeArray: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public bikeService: BikeProvider) {

    this.bikeService.sellBike().subscribe((res:any) => {
      console.log('my data: ', res);

      if (res.Ack==1)
      {
        console.log('sell bike');
        this.bikeArray=res.makes;
        console.log(this.bikeArray);
      }
    })

  }

  goToBikeResult(data)
  {
    this.navCtrl.push('BikeResultPage', {param:data});
  }

  bikeResult (data)
  {
    this.navCtrl.push('BikeResultPage', {param:data});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellBikePage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'
import {GeardetailsPage} from '../geardetails/geardetails'

/**
 * Generated class for the GearResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gear-result',
  templateUrl: 'gear-result.html',
  
})
export class GearResultPage {
  parameter: any;
  catIdSet: any;
  resultArray: any;
  imageUrl: any;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,public bikeService: BikeProvider) {
    this.parameter=navParams.get('param');
    this.catIdSet={"cat_id":this.parameter};
  }

  public filtr()
  {
    console.log('Going to Filter Page');
    // this.navCtrl.push ('FilterPage');
  }
  public sort()
  {
    console.log('Going to Sort Page');
  }

  public goToDetails(id)
  {
    this.navCtrl.push('GeardetailsPage',{'id':id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GearResultPage');

    this.bikeService.gearResult(this.catIdSet).subscribe(res => {
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
        console.log('Hello Bike List');
       
        this.resultArray=details.gears;
        console.log(this.resultArray);
        this.imageUrl=details.image_link;
        console.log(this.imageUrl);
      
   
  } 
  else{console.log('No Result');}
});
  }
  }



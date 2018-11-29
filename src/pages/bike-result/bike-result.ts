import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BikeProvider} from '../../providers/bike/bike'
import {DetailsPage} from '../details/details'

/**
 * Generated class for the BikeResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bike-result',
  templateUrl: 'bike-result.html',
})
export class BikeResultPage {
  parameter: any;
  makeIdSet:any;
  resultArray: any;
  imageUrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bikeService: BikeProvider) {
  this.parameter=navParams.get('param');
  console.log(this.parameter);
  this.makeIdSet={"make_id":this.parameter};
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
this.navCtrl.push ('DetailsPage',{'id':id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BikeResultPage');

    this.bikeService.bikeResult(this.makeIdSet).subscribe(res => {
      console.log(res);
      let details = res
      
      if(details.Ack == 1){
        
        console.log('Hello Bike List');
       
        this.resultArray=details.products;
        console.log(this.resultArray);
        this.imageUrl=details.bikeimagepath;
        console.log(this.imageUrl);
      
   
  } 
  else{console.log('No Result');}
});
  }

}

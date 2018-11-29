import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SearchVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-vehicle',
  templateUrl: 'search-vehicle.html',
})
export class SearchVehiclePage {
  showSearchbar: boolean = false;
  myInput:any;
  public searchdata:any;
  public bikelists:any;
  public imagelink:any;
  public no_bikelists:any;
  public sortby:any = 0;
  
  constructor(private builder: FormBuilder,
  public navCtrl: NavController,
  public alertCtrl: AlertController,
  public navParams: NavParams,
  public menu: MenuController,
  public bikeService: BikeProvider,
  private storage: Storage,
  public loadingCtrl: LoadingController,
  public authService: AuthServiceProvider,
  private myApp:MyApp) {
  }

  goToCartPage()
  {
    if ( JSON.parse(localStorage.getItem('userData')))
{
  console.log('looged user');
this.navCtrl.push ('CartPage');
}
else 
{
  const alert=this.alertCtrl.create  ({
    title: 'Please log-in to view your cart',
    buttons:['Ok']
  });
  alert.present();
}
  }


  ionViewDidLoad() {
    if(localStorage.getItem('searchdata'))
    {
      this.searchdata  = JSON.parse(localStorage.getItem('searchdata'));
      this.searchbikelist(this.searchdata);
    }
    else{
      this.searchdata  = '';
      this.searchbikelist(this.searchdata);
    }
    console.log( this.searchdata);
    console.log('ionViewDidLoad SearchVehiclePage');
  }
  
  searchbikelist(serdata)
  {
    // let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    // console.log(user_details)
    // let login_user = user_details.id;
    // let dataUserDet = {
    //   "uid": login_user
      
    // };
    this.bikeService.searchbikelist(serdata).subscribe(res=>{
      let details = res
      //console.log(res)
      if(details.Ack == 1){
        this.bikelists = details.bikes;
        this.imagelink = details.image_link;
       console.log( this.bikelists)
       this.no_bikelists = 0;
      }
      else{
        this.bikelists='';
        this.no_bikelists = 1;
      }
      
     },err=>{
      //console.log(err);
       const alert = this.alertCtrl.create({
         title: 'No bike is added in your account!',
         buttons: ['OK']
       });
       alert.present();
    });
  }

  public bikedetails(id)
  {  
    console.log(id);
   this.navCtrl.push('DetailsPage',{'id':id});
   
  }

	public filtr(){ 
    console.log('filtr');
		this.navCtrl.push('FilterPage');
  }
  
	public sort(){
    if(this.sortby == 1)
    {
      this.sortby = 0;
    }
    else{
      this.sortby = 1;
    }
    this.searchdata.sort_by = this.sortby;
    //this.navCtrl.push('SortPage');
    this.searchbikelist(this.searchdata);
  }
  

  toggleSearchbar() { 
    this.showSearchbar = !this.showSearchbar;
    //this.content.resize();
  }
  search(value){
    
    console.log('here');
    console.log(this.myInput)
    console.log(this.searchdata)
    this.searchdata.ser_val = this.myInput;
    this.searchbikelist(this.searchdata);
  }
  onCancel(value)
  {
    this.showSearchbar = !this.showSearchbar;
    this.myInput = '';
    console.log(this.myInput);
    console.log('cancel');
  }
}

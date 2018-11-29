import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController ,Events} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { Storage } from '@ionic/storage';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  public response:any;
  //public brandresult:any;
 responseData : any;
 public popularcategorylist:any;
 public categorylist:any;
public loguser:any;
public type:any;
// public ser_val:any;
// public postal_code:any;
// public make_id:any;
// public model_id:any;
// public min_price:any;
// public max_price:any;
// public min_cc:any;
// public max_cc:any;
// public min_year:any;
// public max_year:any;
// public min_milage:any;
// public max_milage:any;
// public color:any;
// public post_by:any;
// public fuel_tpe:any;
public distancearray=[];

category:any;
  model:any;
  make:any;
  colour:any;
  engin:any;
  years:any;

public form: FormGroup;


  constructor(private builder: FormBuilder,public navCtrl: NavController, public navParams: NavParams,public authService:AuthServiceProvider,
    public loadingCtrl: LoadingController,  public menu: MenuController, public myApp:MyApp,private storage: Storage,public events: Events) {
      events.publish('hideFooter', { isHidden: false});
      this.form = builder.group({
        'ser_val': ['',''],
        'distance':['',''],
        'make_id': ['',''],
        'model_id': ['',''],
        'min_price': ['',''],
        'max_price': ['',''],
        'min_cc': ['',''],
        'max_cc': ['',''],
        'min_year': ['',''],
        'max_year': ['',''],
        'min_milage': ['',''],
        'max_milage': ['',''],
        'color': ['',''],
        'post_by': ['',''],
        'fuel_tpe': ['',''],
        'postal_code':['','']
      });

      this.distancearray=['5 miles','10 miles','25 miles','50 miles ','100 miles','200 miles','Nationwide'];
  }

  ionViewDidLoad() {

    if(localStorage.getItem('searchdata'))
    {
      let serchdata = JSON.parse(localStorage.getItem('searchdata'));
      console.log(serchdata);
      console.log ('distance',serchdata.distance)
     
      this.form.controls['ser_val'].setValue(serchdata.ser_val);
      this.form.controls['distance'].setValue(serchdata.distance);
      this.form.controls['make_id'].setValue(serchdata.make_id);
      this.form.controls['model_id'].setValue(serchdata.model_id);
      this.form.controls['min_price'].setValue(serchdata.min_price);
      this.form.controls['max_price'].setValue(serchdata.max_price);
      this.form.controls['min_cc'].setValue(serchdata.min_cc);
      this.form.controls['max_cc'].setValue(serchdata.max_cc);
      this.form.controls['min_year'].setValue(serchdata.min_year);
      this.form.controls['max_year'].setValue(serchdata.max_year);
      this.form.controls['min_milage'].setValue(serchdata.min_milage);
      this.form.controls['max_milage'].setValue(serchdata.max_milage);
      this.form.controls['color'].setValue(serchdata.color);
      this.form.controls['post_by'].setValue(serchdata.post_by);
      this.form.controls['fuel_tpe'].setValue(serchdata.fuel_tpe);
      this.form.controls['postal_code'].setValue(serchdata.postal_code);
     
    }
   





    this.authService.getData('products/categories.json').then((result:any) => {
      //console.log(result)
     // this.details = JSON.stringify(result.category);
      //console.log(this.details)
       this.category = result.category;
         this.model =result.model;
         this.make = result.make;
          this.colour = result.colour;
          this.engin = result.engin;
       // console.log(this.engin);
         // console.log(this.category)
    }, (err) => {
      console.log(err);
      // Error log
    });
    console.log('ionViewDidLoad FilterPage');
  }

  public bikesearch(frmval)
  {
    console.log(frmval);
    localStorage.setItem('searchdata', JSON.stringify(frmval));
    this.navCtrl.push('SearchVehiclePage');
  }


}

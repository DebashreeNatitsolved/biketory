import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController ,AlertController, LoadingController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})
export class ReviewPage {
  public id:any;
  public rating:any;
  public review:any;
  public form: FormGroup;
  constructor(private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider) {
      this.id =  this.navParams.get('gearid');
      console.log(this.id)

      this.form = builder.group({
        'review': [null, Validators.required]
        
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewPage');
  }
  public onModelChange(val)
  {
    this.rating = val;
  }
  public add_review(formdata)
  {
  console.log(this.rating);
  if(this.rating > 0){

  let user_details:any =  JSON.parse(localStorage.getItem('userData'));
      console.log(user_details)
      let login_user = user_details.id;
    formdata.prod_id = this.id;
    formdata.user_id = login_user;
    formdata.rating = this.rating;
    console.log(formdata);
    let loading = this.loadingCtrl.create({
      spinner: 'show',
      content: 'Loading Please Wait...',
      duration: 5000
    });
    loading.present();
   //console.log(fromdata);
   this.bikeService.addreview(formdata).subscribe(res=>{
     let details = res
     if(details.Ack == 1){
      const alert = this.alertCtrl.create({
        title: 'Message Sussesfully Send To Seller!',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push('GeardetailsPage',{'id':this.id});
     }
     
    },err=>{
     //console.log(err);
      const alert = this.alertCtrl.create({
        title: 'Service Failed!',
        buttons: ['OK']
      });
      alert.present();
   });
    
  }
  else{
    const alert = this.alertCtrl.create({
            title: 'Please Select Ratting .',
            buttons: ['OK']
          });
          alert.present();
  }
  
  
  
    
  }
}

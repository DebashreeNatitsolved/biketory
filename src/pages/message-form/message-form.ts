import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController ,AlertController, LoadingController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MessageFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-form',
  templateUrl: 'message-form.html',
})
export class MessageFormPage {

  public response:any;
  //public brandresult:any;
 responseData : any;
 public popularcategorylist:any;
 public categorylist:any;
public loguser:any;
public type:any;
public name:any;
public email:any;
public message:any;
public phone:any;
public id:any;

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
      this.id =  this.navParams.get('bikeid');
      //console.log(this.id)
      this.form = builder.group({
        'name': [null, Validators.required],
        'email': [null, Validators.required],
        'phone': [null, Validators.required],
        'message': [null,Validators.required]
        
      });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessageFormPage');
  }
public send_message(formdata)
{

  let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    console.log(user_details)
    let login_user = user_details.id;
  formdata.prod_id = this.id;
  formdata.user_id = login_user;
  console.log(formdata);
  let loading = this.loadingCtrl.create({
    spinner: 'show',
    content: 'Loading Please Wait...',
    duration: 5000
  });
  loading.present();
 //console.log(fromdata);
 this.bikeService.sendmessage(formdata).subscribe(res=>{
   let details = res
   if(details.ack == 1){
    const alert = this.alertCtrl.create({
      title: 'Message Sussesfully Send To Seller!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.push('DetailsPage',{'id':this.id});
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
}

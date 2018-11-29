import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController ,Events} from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-loginnew',
  templateUrl: 'loginnew.html',
})
export class LoginnewPage {

public loguser:any;
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public device_type: AbstractControl;
  public device_token_id: AbstractControl;


  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  isLoggedIn: boolean = false;
  isValidEmail = true;
  users: any;
  userData:any;

 
 
  constructor(
    private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public authService: AuthServiceProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public events: Events,
    private myApp:MyApp) {

     
      this.events.publish("Msg", "Hello World");

      this.form = builder.group({
        'email': ['', Validators.compose([Validators.required])],
        'password': ['', Validators.compose([Validators.required])]
      });
      events.publish('hideFooter', { isHidden: true});
  }

  logIn() {
    this.events.publish('user:login');
    }

  ionViewDidLoad() {
  
    this.menu.enable(false, 'loggedOutMenu');
    console.log('ionViewDidLoad LoginnewPage');

  //  console.log("ABCDEFGHIJ", localStorage.getItem('userData'));
  }


  public checkEmail(values: Object): void {


    if (values != '' ) {
      this.isValidEmail = this.validateEmail(values);
     console.log(this.isValidEmail)
      

    } else {

    }
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  forgetpass(){
   
    this.navCtrl.push("ForgetpassPage");
  }


  loginNow(formData) { 
    //formData['device_token_id'] ='asdfa45645645646knllkjlkj4356546456';
    //formData['device_type']='android';
    console.log(formData);

    this.authService.login(formData).subscribe(res => {
      console.log(res);
      if(res.ack==1){
      /*const alert = this.alertCtrl.create({
        title: res.msg,
        buttons: ['OK']
      });
      alert.present();*/
        this.storage.ready().then(() => {
          this.userData=localStorage.setItem('userData', JSON.stringify(res.details));
           console.log("USERDATATATATATTATATTATA", JSON.stringify(res.details));
      //  this.storage.set('userType', res.userdetail.User['type']).then(() => {
            this.storage.set('first_Name', res.details['first_name']).then(() => {
              this.storage.set('last_Name', res.details['last_name']).then(() => {
                this.storage.set('uid', res.details['id']).then(() => {
         
                  this.navCtrl.setRoot('HomePage');

                  
                //  this.navCtrl.push ('OrderListingPage');

                 
                // this.storage.get('uid').then((res)=>{
                  
                //   console.log(res);
                // }).catch();
                
              });
            });
            });
        // });
        });
      
    }else{

      const alert = this.alertCtrl.create({
        title: 'Please enter correct credentials.',
        buttons: ['OK']
      });
      alert.present(); 
    }
    }, err => {
      console.log(err);
    });
  }
 

  onSignup() {
    this.navCtrl.push('SignupPage');
  }
  
  home() {
    this.navCtrl.setRoot('HomePage');
  }

}

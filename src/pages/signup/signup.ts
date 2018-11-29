import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController ,LoadingController ,Events } from 'ionic-angular';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  rForm: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isValidEmail = true;
  passwordmatch =true;
  checkEmailExist =true;
  constructor(
    private builder: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController,
    public events: Events,
     private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      'first_name': [null, Validators.required],
      'last_name': [null, Validators.required],
      //'address': [null, Validators.required],
      'email':[null, Validators.required],
      'password': [null, Validators.required],
      'con_password': [null, Validators.required],
      //'city': [null, Validators.required],
     // 'state': [null, Validators.required],
     // 'country': [null, Validators.required],
      'utype': [null, Validators.required]
      //'is_check':[null,null]
    });
    this.rForm.controls['utype'].setValue(1);
    events.publish('hideFooter', { isHidden: true});
  }
 public checkpassword(conpass,frmval)
  {
    console.log(frmval.password);
    console.log(conpass);
    if(frmval.password == conpass)
    {
     this.passwordmatch = true;
    }
    else{
      this.passwordmatch = false;
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  public checkEmail(values: Object): void {


    if (values != '' ) {
      this.isValidEmail = this.validateEmail(values);
      if (this.isValidEmail) {
        let signupCheckEmail = {
          "email": values
        };
        this.authService.userCheckEmail(signupCheckEmail)
          .subscribe(data => {
            let details = data.details;
            console.log(details.ack);
            if (details.ack == "1") {
              this.checkEmailExist = false;
              return false;
            } else {
              //alert('Invalid login');
              this.checkEmailExist = true;
              return false;
            }
          },
            error => {

            }
          );
      }
      

    } else {

    }
  }

  onSubmit(formData) {
    console.log(formData);
    console.log(this.rForm.valid);
    if (!this.rForm.valid) {
      const alert = this.alertCtrl.create({
        title: 'Signup Failed!',
        subTitle: "Please fill all the details.",
        buttons: ['OK']
      });
      alert.present();
    }
    else{
      let loading = this.loadingCtrl.create({
        content: 'Loading Please Wait...',
      });
      loading.present();
     console.log(formData);
     this.authService.signup(formData).subscribe(res=>{
       let details = res.details
       if(details.ack == 1){
         loading.dismiss();
        console.log(res);
         const alert = this.alertCtrl.create({
           title: 'Registration Successfully Done. Please Click On The Activation Link Sent On Your Mail',
           buttons: ['OK']
         });
       alert.present();
       this.navCtrl.push('LoginnewPage');
       }
       else{
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Email already registered. Please try another email id .',
          buttons: ['OK']
        });
      alert.present();
       }
      },err=>{
        loading.dismiss();
       console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Auth Failed!',
          buttons: ['OK']
        });
        alert.present();
     });
      
    }
  }

  terms()
  {
    const alert=this.alertCtrl.create({
      title: 'Terms and Condition',
      
      buttons:['ok']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  
  onLogin() {
    this.navCtrl.push('LoginnewPage');
  }
  
  home() {
    this.navCtrl.setRoot('HomePage');
  }

}

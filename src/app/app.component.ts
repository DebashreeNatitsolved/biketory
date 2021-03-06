import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Thumbnail } from 'ionic-angular/components/thumbnail/thumbnail';
import { BikeProvider } from '../providers/bike/bike'


export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
  user_exist: any;
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public isLarge = false;
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  userData: any;
  istype: any;
  user_id: any;
  user_exist: any;
  userImg: any;

  public footerIsHidden: boolean = false;
  public headerIsHidden: boolean = false;

  public path: any;

  public firstname: any;
  public loguser: any;
  public utype: any;

  constructor(platform: Platform,
    private storage: Storage, statusBar: StatusBar, public events: Events,
    public bikeService: BikeProvider, public alertCtrl: AlertController, ) {
    this.abc();



    platform.ready().then(() => {
      events.subscribe('hideFooter', (data) => {

        this.footerIsHidden = data.isHidden;

      })
      events.subscribe('hideHeader', (data) => {
        this.headerIsHidden = data.isHidden;
      })


      if (localStorage.getItem('userData')) {
        this.user_exist = 1;
        this.loguser = JSON.parse(localStorage.getItem('userData'));
        console.log(this.loguser);
        if (this.loguser) {
          this.user_exist = 1;
          this.firstname = this.loguser.first_name + ' ' + this.loguser.last_name;
          this.utype = this.loguser.utype
          this.userImg = this.loguser.image_url + this.loguser.pimg;
          console.log(this.utype)
          this.nav.push('HomePage');
        }
        else {

          this.user_exist = 0;
          this.nav.push('HomePage');
        }
      }
      else {
        this.user_exist = 0;
        this.nav.push('HomePage');
      }

    })

  }

  abc() {
    this.footerIsHidden = false;
    this.headerIsHidden = false;
    // alert("jdh")
    this.loguser = JSON.parse(localStorage.getItem('userData'));

    if (this.loguser) {

      // alert('ok');
      //console.log(this.loguser) ;
      this.user_exist = 1;

      this.firstname = this.loguser.first_name + ' ' + this.loguser.last_name;
      this.utype = this.loguser.utype
      this.user_id = this.loguser.id;

        if (this.loguser.utype == "1") {
        this.istype = 1;

      } else if (this.loguser.utype == "2") {
        this.istype = 2;

      } else {
        this.user_exist = 0;
      }
    }
    else {
      this.userImg = 'assets/imgs/avtar.png';
    }

  }


  myProfile() {
    if (this.user_exist == 0) {
      this.nav.push('AfterSplashPage')
    }

    else if (this.user_exist == 1) {
      if (this.istype == 1) {
        this.nav.push('BuyerProfilePage')
      }
      else if (this.istype == 2) {
        this.nav.push('ProfilePage')
      }
    }

  }

  ionViewDidLoad() {


    this.loguser = JSON.parse(localStorage.getItem('userData'));
    this.utype = this.loguser.utype
    console.log(this.utype)
    console.log('userid', this.loguser.id);
  }




  login() {
    this.nav.push('AfterSplashPage');
  }


  public home() {
    this.nav.push('HomePage');
  }
  public mylistedbikes() {
    this.nav.push('ListedBikesPage')
  }

  public mylistedgears() {
    this.nav.push('ListedGearsPage')
  }

  public termsAndCond()
  {
    this.nav.push ('TermsConditionsPage')
  }

  public faq()
  {
    this.nav.push ('FaqPage')
  }

  public privacyPolicy()
  {
    this.nav.push ('PrivacyPolicyPage')
  }
  

  public gogear() {

    if (this.user_exist == 0) {
      this.nav.push('AfterSplashPage')
    }

    else if (this.user_exist == 1) {
      if (this.istype == 2) {
        console.log('seller')
        let sellerSet = {
          "seller_id": this.loguser.id
        };
        console.log(sellerSet);
        this.bikeService.sellercheck(sellerSet).subscribe(res => {
          let details = res
          if (details.ack == 1) {
            this.nav.push('AddgearPage')
          }
          else if (details.ack == 0) {
            console.log('No')
            const alert = this.alertCtrl.create({
              title: 'Your Account is not acivated yet',
              subTitle: 'You will Get Notification Once the Verification is done',
              buttons: ['OK']
            });
            alert.present();
          }
        });

      }
      else if (this.istype == 1) {
        this.nav.push('AddgearPage')
      }
    }

  }

public about()
{
  this.nav.push('AboutPage');
}



  public myorder() {
    if (this.istype == 1) {
      this.nav.push('OrderListingPage');
    }
    else if (this.istype == 2) {
      this.nav.push('SellerOrderListPage');
    }
  }

  public mywishlist() {
    this.nav.push('FabouritePage');
  }


  public recentView() {
    if (this.istype == 1) {
      this.nav.push('BuyerProfilePage')
    }
    else if (this.istype == 2) {
      this.nav.push('ProfilePage')
    }
  }

  public sellbikeNew() {
    if (this.user_exist == 0) {
      this.nav.push('AfterSplashPage')
    }

    else if (this.user_exist == 1) {
      if (this.istype == 2) {
        console.log('seller')
        let sellerSet = {
          "seller_id": this.loguser.id
        };
        console.log(sellerSet);
        this.bikeService.sellercheck(sellerSet).subscribe(res => {
          let details = res
          if (details.ack == 1) {
            this.nav.push('SellbikeOnePage')
          }
          else if (details.ack == 0) {
            console.log('No')
            const alert = this.alertCtrl.create({
              title: 'Your Account is not acivated yet',
              subTitle: 'You will Get Notification Once the Verification is done',
              buttons: ['OK']
            });
            alert.present();
          }
        });

      }
      else if (this.istype == 1) {
        this.nav.push('SellbikeOnePage')
      }
    }


  }


  public homePage() {
    this.nav.push('HomePage')
  }


  public buyer_profile() {

    this.nav.push('BuyerProfilePage');
  }

  public seller_profile() {
    if (this.istype == 1) {
      this.nav.push('BuyerProfilePage')
    }
    else if (this.istype == 2) {
      this.nav.push('ProfilePage')
    }
  }

  public change_password() {
    this.nav.push('ChangepasswordPage');
  }

  goToEditPage() {

    if (this.istype == 1) {
      this.nav.push('EditBuyerProfilePage');
    }
    else if (this.istype == 2) {
      this.nav.push('EditSellerProfilePage');
    }
  }


  public logout() {
    this.storage.ready().then(() => {
      const data = localStorage.getItem("userData");
      localStorage.removeItem('userData');
      localStorage.removeItem('bike1_id');
      localStorage.removeItem('buyerimage');
      this.storage.set("uid", "");
      this.storage.set("first_name", "");
      this.storage.set("last_name", "");

      this.nav.setRoot('HomePage');
      this.user_exist = 0;

    });
  }



  public goToPage(page) {
    this.nav.setRoot(page);
  }




}


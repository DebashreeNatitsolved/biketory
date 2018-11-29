import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,AlertController} from 'ionic-angular';
import { BikeProvider } from '../../providers/bike/bike';
/**
 * Generated class for the ListedGearsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listed-gears',
  templateUrl: 'listed-gears.html',
})
export class ListedGearsPage {

  user_details:any;
  user_id:any
  gearlistarray:any;
  imagepath:any;
  disableBTN:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public bikeService: BikeProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl:AlertController,
    public toastCtrl:ToastController,) {
      this.user_details=  JSON.parse(localStorage.getItem('userData'));
   
      this.user_id=this.user_details.id;
      console.log('user_id',this.user_id);
      this.gearlist(this.user_id);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ListedGearsPage');
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  gearlist(userid)
  {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',   
    });
    loading.present();

    let dataset=
    {
      'user_id':userid
    }
    this.bikeService.mylistedgears(dataset).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
       loading.dismiss();
       
       
        this.gearlistarray = details.gears;
        
        this.imagepath = details.path;
      }
      else{
        loading.dismiss();
        this.gearlistarray = '';
      console.log('elsepart')
     
      }
      
     },err=>{
      loading.dismiss();
   this.presentToast('Something Went Wrong.');
    });
  }

  disablelist(id,index)
  {
    console.log(id)
    let loading = this.loadingCtrl.create({
      content: 'Loading...',   
    });
    loading.present();

    let dataset=
    {
      'id':id
    }
    console.log('dataset',dataset)

    this.bikeService.disablelist(dataset).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.ack == 1){
        loading.dismiss();
        if (details.is_active=='Y')
        {
          // this.disableBTN='Y';
          this.gearlistarray[index].is_active='Y';
 
        }
        else if (details.is_active=='N')
        {
          this.gearlistarray[index].is_active='N';
       
        }
        
      }
      else{
        loading.dismiss();
      console.log('elsepart')
     
      }
      
     },err=>{
      loading.dismiss();
   this.presentToast('Something Went Wrong.');
    });

  }

  deletelist(id)
  {
    console.log(id)
    let alert = this.alertCtrl.create({
      title: 'Remove Image',
      message: 'Are you sure to remove image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'icon-color',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          cssClass:'icon-color',
          handler: data => {
    
    let dataset=
    {
      'id':id
    }
    console.log('dataset',dataset)

    this.bikeService.deletelist(dataset).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
       
        this.gearlist(this.user_id)
      }
      else{
       
      console.log('elsepart')
     
      }
      
     },err=>{
     
   this.presentToast('Something Went Wrong.');
    });

  }
}
    
  ]
});

alert.present();
  }


}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,AlertController } from 'ionic-angular';
import { BikeProvider } from '../../providers/bike/bike';
/**
 * Generated class for the ListedBikesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listed-bikes',
  templateUrl: 'listed-bikes.html',
})
export class ListedBikesPage {
  user_details:any;
  user_id:any;
  bikelists:any;
  imagepath:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public bikeService: BikeProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl:ToastController,
    public alertCtrl:AlertController,
  ) {
    this.user_details=  JSON.parse(localStorage.getItem('userData'));
   
    this.user_id=this.user_details.id;
    console.log('user_id',this.user_id);
    this.bikelist(this.user_id);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListedBikesPage');
  }
  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  bikelist(userid)
  {
    let loading = this.loadingCtrl.create({
      content: 'Loading...',   
    });
    loading.present();

    let dataset=
    {
      'user_id':userid
    }
    this.bikeService.mylistedbikes(dataset).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.Ack == 1){
        loading.dismiss();
       
        this.bikelists = details.products;
        
        this.imagepath = details.path;
      //  console.log( this.gearlists)
       
      
      }
      else{
        loading.dismiss();
        this.bikelists = '';
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
       
        this.bikelists[index].is_active='Y';
 
        }
        else if (details.is_active=='N')
        {
          this.bikelists[index].is_active='N';
       
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
      message: 'Are you sure to remove this product?',
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
       
        this.bikelist(this.user_id)
      }
      else{
       
      console.log('elsepart')
     
      }
      
     },err=>{
     
   this.presentToast('Something Went Wrong.');
    });

  }
}]
});
alert.present();
  }

  editBike(id)
  {
    this.navCtrl.push('SellbikeOnePage',{'id':id})
  }

}

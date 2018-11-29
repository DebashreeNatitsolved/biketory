import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController,Platform,ToastController,LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import {ChangepasswordPage} from '../changepassword/changepassword'
import {EditSellerProfilePage} from '../edit-seller-profile/edit-seller-profile'
import { BikeProvider } from '../../providers/bike/bike';
import { Camera, CameraOptions,DestinationType } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the BuyerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-buyer-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public firstName:any;
  viewedArray: any;
  productImgPath:any;
  public user_details:any;
  uploadsuccess:any;
  lastImage:any;
  buyerimage:any;
  bfrLogin:any;
  userImg:any;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public camera:Camera, 
    public auth: AuthServiceProvider,
    public loadingCtrl:LoadingController,
    public platform: Platform,
    public bikeService:BikeProvider,
    private transfer: FileTransfer,
    public toastCtrl:ToastController,
    public storage:Storage,
    private file: File,) {
    this.user_details=  JSON.parse(localStorage.getItem('userData'));
    console.log(this.user_details)
    this.firstName = this.user_details.first_name+' '+this.user_details.last_name;
    // let lastName=user_details.last_name;
    console.log(this.firstName);

    this.bfrLogin=this.user_details.pimg;


    if (localStorage.getItem('buyerimage'))
    {
      this.userImg=JSON.parse(localStorage.getItem('buyerimage'));
    
    console.log('pimg null',this.bfrLogin)
    }

    else if (this.bfrLogin==null)
    {
      this.userImg='assets/imgs/avtar.png';
    
    console.log('pimg',this.bfrLogin)
    }

    // this.userImg=this.loginUser.image_url+this.loginUser.pimg
    
    
  else if (this.bfrLogin)
      {
        // this.userImg=this.user_details.image_url+this.user_details.pimg
        console.log(this.userImg)
        
      }

   
    this.bikeService.recentlyViewed ().subscribe((res:any) => {
      console.log(res)
      
      if (res.Ack==1)
      {
        console.log('my data: ');
        this.viewedArray=res.recentview;
        this.productImgPath=res.link;
        console.log(this.viewedArray); 
      }
});

  }

  goToChangePassPage()

  {
    this.navCtrl.push ('ChangepasswordPage');
  }

  goToEditPage ()
  {
    console.log('hi')
    this.navCtrl.push ('EditSellerProfilePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerProfilePage');

   
}


editProfilePic()
{
  console.log('edit profile picture')
  let actionSheet = this.actionSheetCtrl.create({
    enableBackdropDismiss: true,
    buttons: [
      {
        text: 'Take a picture',
        icon: 'camera',
        handler: () => {
          this.uploadFromCamera(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'From gallery',
        icon: 'images',
        handler: () => {
          this.uploadFromCamera(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }
    ]
  });
  actionSheet.present();
}


uploadFromCamera(sourceType){

  
  var options = {
    quality: 100,
    sourceType: sourceType,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
 
  // Get the data of an image
  this.camera.getPicture(options).then((imagePath) => {
    // Special handling for Android library
    if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
      this.filePath.resolveNativePath(imagePath)
        .then(filePath => {
          let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
          let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName(currentName));
        
          
        });

         
       
    } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName(currentName));
    }
  }, (err) => {
    this.presentToast('Error while selecting image.');
  });

}

private createFileName(currentName) {
  var d = new Date(),
  n = d.getTime(),
 // newFileName=n+".jpg";
  newFileName=currentName;

  return newFileName;
  
}

private copyFileToLocalDir(namePath, currentName, newFileName) {

 
 console.log("CURRENTFILENAME",currentName);
  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
    this.lastImage = newFileName;
    console.log("NEWFILENAMEEEEEE",this.lastImage);
    
    this.uploadImage(this.lastImage); 
  }, error => {
    this.presentToast('Error while storing file.');
  });
}

private presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}

public pathForImage(img) {
  // this.uploadImage();
  console.log("IMAGGGEGGEGGEGE",img);
  
  if (img === undefined) {

   
    return '';
   
  } 
  else {

    console.log('else')
    return cordova.file.dataDirectory + img;
  }
  
}

public uploadImage(lastimage) {

  let loading = this.loadingCtrl.create({
    content: 'Uploading Please Wait...'
  });
  loading.present();
  console.log('uploadImage')
  // if(JSON.parse(localStorage.getItem('userDetails')))
  // {
  //   this.loginuser = JSON.parse(localStorage.getItem('userDetails')); 
  //   this.userId=this.loginuser.id
  //        console.log ( this.userId)
  // }
  // Destination URL
  var url = "http://111.93.169.90/team6/bike/api/users/userimageupload.json";
 
  // File for Upload
  var targetPath = this.pathForImage(lastimage);
 
  // File name only
  var filename = this.lastImage;
 
  var options = {
    fileKey: "photo",
    photo: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {
    'pimg':filename,
    'id':this.user_details.id
     }
   // params : {'fileName': filename}
  };
  console.log("OPTIONS",options);
  console.log('targetPath',targetPath)
  const fileTransfer:FileTransferObject = this.transfer.create();
 
 console.log('create')
 
  // Use the FileTransfer to upload the image
  fileTransfer.upload(targetPath, url, options).then(data => {
    console.log('spandanUPLOADDDD',data.response);
    console.log('UPLOADDDD',JSON.parse(data.response));
    this.uploadsuccess=JSON.parse(data.response);
    if(this.uploadsuccess.ack==1){
      loading.dismiss();
      this.presentToast('Image succesful uploaded.');
console.log('image url',this.uploadsuccess.image_url+this.uploadsuccess.image_name)
console.log(this.uploadsuccess.image_name)

this.buyerimage=this.uploadsuccess.image_url+this.uploadsuccess.image_name

      this.storage.ready().then(() => {
      localStorage.setItem ('buyerimage',JSON.stringify(this.buyerimage))
      });
     
    }else{

      loading.dismiss();
      this.presentToast('Time out. Try again.');

    }

  }, err => {
    console.log("Error",err);
    loading.dismiss();
    this.presentToast('Error while uploading file.');
  });
}
}

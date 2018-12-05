import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'
import { ChangepasswordPage } from '../changepassword/changepassword'
import { EditBuyerProfilePage } from '../edit-buyer-profile/edit-buyer-profile'

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage'
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
  templateUrl: 'buyer-profile.html',
})
export class BuyerProfilePage {
  public firstName: any;
  base64Image: any;
  imageURL: any;
  lastImage: string = null;
  viewedArray: any;
  uploadsuccess: any;
  buyerimage: any;
  bfrLogin: any;
  userImg: any;

  public user_details
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public auth: AuthServiceProvider,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private transfer: FileTransfer,
    private file: File,
    public platform: Platform,
    private filePath: FilePath,
    public bikeService: BikeProvider,
    public storage: Storage) {
    this.user_details = JSON.parse(localStorage.getItem('userData'));
    console.log(this.user_details)
    this.firstName = this.user_details.first_name + ' ' + this.user_details.last_name;
    // let lastName=user_details.last_name;
    console.log(this.firstName);

    this.bfrLogin = this.user_details.pimg;


    if (localStorage.getItem('buyerimage')) {
      this.userImg = JSON.parse(localStorage.getItem('buyerimage'));

      console.log('pimg null', this.bfrLogin)
    }

    else if (this.bfrLogin == null) {
      this.userImg = 'assets/imgs/avtar.png';

      console.log('pimg', this.bfrLogin)
    }

    // this.userImg=this.loginUser.image_url+this.loginUser.pimg


    else if (this.bfrLogin) {
      console.log('this.bfrLogin')
      this.userImg = this.user_details.image_url + this.user_details.pimg
      console.log(this.userImg)

    }


    this.bikeService.recentlyViewed().subscribe((res: any) => {

      if (res.Ack == 1) {
        console.log('my data: ');
        this.viewedArray = res.recentview;
        console.log(this.viewedArray);
      }
      else {
        this.viewedArray = '';
      }
    }, err => {

      const alert = this.alertCtrl.create({
        title: 'Service Failed!',
        buttons: ['OK']
      });
      alert.present();
    });

  }



  goToEditPage() {
    console.log('hi')
    this.navCtrl.push('EditBuyerProfilePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyerProfilePage');


  }

  editProfilePic() {
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


  uploadFromCamera(sourceType) {


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
      newFileName = currentName;

    return newFileName;

  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {


    console.log("CURRENTFILENAME", currentName);
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      console.log("NEWFILENAMEEEEEE", this.lastImage);

      this.uploadImage('', this.lastImage);
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
    console.log("IMAGGGEGGEGGEGE", img);

    if (img === undefined) {
      console.log('Heeeeelllooo null')

      return this.userImg;

    }
    else {

      console.log('image')
      return cordova.file.dataDirectory + img;
    }

  }

  public uploadImage(data, lastimage) {
    console.log('data', data, lastimage)

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
      fileKey: "pimg",
      photo: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {
        'pimg': filename,
        'user_id': this.user_details.id
      }
      // params : {'fileName': filename}
    };
    console.log("OPTIONS", options);
    console.log('targetPath', targetPath)
    const fileTransfer: FileTransferObject = this.transfer.create();

    console.log('create')

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      console.log('data', data);
      console.log('UPLOADDDD', JSON.parse(data.response));
      this.uploadsuccess = JSON.parse(data.response);
      if (this.uploadsuccess.Ack == 1) {
        loading.dismiss();
        this.presentToast('Image succesful uploaded.');

        this.buyerimage = this.uploadsuccess.imagepath + this.uploadsuccess.imagename

        this.storage.ready().then(() => {
          localStorage.setItem('buyerimage', JSON.stringify(this.buyerimage))
          localStorage.setItem('userData', JSON.stringify(this.uploadsuccess.userdetails));
        });

        console.log('Deb userdata',JSON.parse(localStorage.getItem('userData')))
        console.log('Deb userdata',JSON.parse(localStorage.getItem('buyerimage')))

      } else {

        loading.dismiss();
        this.presentToast('Time out. Try again.');

      }

    }, err => {
      console.log("Error", err);
      loading.dismiss();
      this.presentToast('Error while uploading file.');
    });
  }


  editBannerImage() {
    console.log('banner')
  }



}

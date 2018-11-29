import { Component } from '@angular/core';
import { IonicPage,NavController,AlertController,NavParams,ToastController,LoadingController,Platform,ActionSheetController,Loading} from 'ionic-angular';
import { FormControl, AbstractControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { ProfessionalChemicalPage } from '../professional-chemical/professional-chemical';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { identifierModuleUrl } from '@angular/compiler';
import { BikeProvider } from '../../providers/bike/bike';
/**
 * Generated class for the SellbikeThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-sellbike-three',
  templateUrl: 'sellbike-three.html',
})
export class SellbikeThreePage {

  lastImage: string = null;
  loading: Loading;
  uploadsuccess:any;
  public form:FormGroup;
  photoarray=[];
  bike_image:any;
  formImage:any;
  bikeimagearray=[];
  array:any;
  //bikeimages = [];
  fromdata:{} = [];
  user_id:any;
  imagePath:any


  public bikeimages: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private file: File, 
    private filePath: FilePath,
    public platform: Platform,
    public alertCtrl: AlertController,
    public toastCtrl:ToastController,
    private camera: Camera,
    private actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    public loadingCtrl: LoadingController,
    public bikeService: BikeProvider,
    private builder: FormBuilder,
  ) {


  }

  ionViewDidLoad() {
    let user_details:any =  JSON.parse(localStorage.getItem('userData'));
    this.user_id=user_details.id;

    if( localStorage.getItem('bike1_id'))
    {
     let dataUserDet = {
       "id": localStorage.getItem('bike1_id')
       
     };
     this.bikeService.getbikeimagedetails(dataUserDet).subscribe(res=>{
       
       let details = res
       console.log(res)
       if(details.Ack == 1){
        this.bikeimages = details.productimage;

                }
       
      },err=>{
       console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Bike not fetch from your account!',
          buttons: ['OK']
        });
        alert.present();
     });
 
    }
    console.log('ionViewDidLoad SellbikeThreePage');
  }



  Sellbiketwo()
  {
    this.navCtrl.push('SellbikeTwoPage');
  }


  presentActionSheet()
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
         
           console.log('currentName',currentName);
          
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

    var url = "http://111.93.169.90/team6/bike/api/products/bikeimageinsert.json";
      //  var url = "http://192.168.1.118/team6/bike/api/products/bikeimageinsert.json";
  
    var targetPath = this.pathForImage(lastimage);
   
    var filename = this.lastImage;
   
    var options = {
      fileKey: "file",
      photo: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {
        'file':filename,
            'bike_id': localStorage.getItem('bike1_id')
       }
     // params : {'fileName': filename}
    };
    console.log("OPTIONS",options);
    console.log('targetPath',targetPath)
    const fileTransfer:FileTransferObject = this.transfer.create();
   
   console.log('create')
   
    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      console.log('dddd',data.response);
      console.log('UPLOADDDD',JSON.parse(data.response));
      this.uploadsuccess=JSON.parse(data.response);
      if(this.uploadsuccess.Ack==1){
        loading.dismiss();
        this.presentToast('Image succesful uploaded.');
        console.log('image url',this.uploadsuccess.imagepath+this.uploadsuccess.images)
        console.log(this.uploadsuccess.images)
       this.imagePath=this.uploadsuccess.imagepath;
        // this.bike_image=this.uploadsuccess.imagepath+this.uploadsuccess.images
        this.photoarray=this.uploadsuccess.images;
        // this.bikeimagearray.push(this.uploadsuccess.images)
        console.log('bikeimages array',this.photoarray);

        }  
      else{

        loading.dismiss();
        this.presentToast('Time out. Try again.');

      }

    }, err => {
      console.log("Error",err);
      loading.dismiss();
      this.presentToast('Error while uploading file.');
    });
  }


  Sellbikefour() {
  console.log('array',this.photoarray)
    // this.formImage= this.bikeimagearray.toString();
    console.log('formvalue',this.formImage)
      this.navCtrl.push('SellbikeFourPage');
    }

  remove_image(id)
  {
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
           
            let dataUserDet = {
              "id": id,
              "product_id":localStorage.getItem('bike1_id')
              
            };
            this.bikeService.removeimage(dataUserDet).subscribe(res=>{
              let details = res
              console.log(res)
              if(details.Ack == 1){
                
                this.photoarray=details.data;
              }
              
             },err=>{
              //console.log(err);
               const alert = this.alertCtrl.create({
                 title: 'Image Remove Failed!',
                 buttons: ['OK']
               });
               alert.present();
            });
         
          }
        }
      ]
    });

    alert.present();
    
  }
}




import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController,ActionSheetController,ToastController, LoadingController ,Platform} from 'ionic-angular';
import { FormControl,FormArray, AbstractControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BikeProvider } from '../../providers/bike/bike';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {MyApp} from '../../app/app.component';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file';
import { identifierModuleUrl } from '@angular/compiler';
/**
 * Generated class for the AddgearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-addgear',
  templateUrl: 'addgear.html',
})
export class AddgearPage {
  public form: FormGroup;
  myform: FormGroup;
  responseData: any;
  error: string;
  busy: boolean;
  isChecked: boolean;
  disabled: any;
  category:any;
  model:any;
  make:any;
  colour:any;
  engin:any;
  years:any;
  size:any;
  brand:any;
  category_id:any;
  photoArray=[];
  photoString:any;
  /* parameter to show fields against subcat*/
  clothing:boolean=false;
  showVVO:boolean=false;
  showVisVol:boolean=false;
  VVOD:boolean=false;
  showVol:boolean=false;
  
/* parameter to show fields against subcat*/


/*Extra fields array*/

sizeArray:any;
genderArray=[];
styleArray:any;
ceapprovedArray=[];

viscosityArray=[];
volumnArray=[];
dotArray=[];
oiltypeArray=[];
/*Extra fields array*/
imagePath:any;
  public loading:any;
  lastImage:any;
  imagename = [];
  public bikeimages = [];
  selectedValue=[];
  public id = '';
 condition=[];
 return_policy=[];
 subCatList:any;
 subCatListCondition:any;
 

 uploadsuccess:any;
 


  constructor(private builder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menu: MenuController,
    public bikeService: BikeProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public authService: AuthServiceProvider,
    private file: File, 
    private filePath: FilePath,
    public platform: Platform,
   
    public toastCtrl:ToastController,
    private camera: Camera,
    private actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    
    private myApp:MyApp) {
      this.form = builder.group({
        'product_name': ['', Validators.compose([Validators.required])],
        'brand_id': ['', Validators.compose([Validators.required])],      
        'price': ['', Validators.compose([Validators.required])],
        'category_id': ['', Validators.compose([Validators.required])],
        'description': ['', ''],
         'condition':['', Validators.compose([Validators.required])],
         'return_policy':['', Validators.compose([Validators.required])],
         'paypal_email':['', Validators.compose([Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        'postage_cost':['', Validators.compose([Validators.required])],
        'quantity':['', Validators.compose([Validators.required])],
          
          'subcat_id': ['', ''],
          'size_id': ['', ''],               
          'gender': ['', ''],
          'style': ['', ''],
          'ce_approved': ['', ''],
          'colour_id': ['', ''],
          'viscocity': ['', ''],
          'volume': ['', ''],
          'oil_type': ['', ''],
          'dot_rating': ['', ''],
      });

      this.clothing=false;
      this.showVVO=false;
      this.showVisVol=false;
      this.VVOD=false;
      this.showVol=false;
      this.condition=['New','Used','Newish'];
      this.return_policy=['No Return','Conditional Return']
      this.subCatListCondition=0;

      this.ceapprovedArray=['Yes','No'];
      this.genderArray=['Male','Female','Unisex'];

      this.dotArray=['DOT 3','DOT 4','DOT 5','DOT 5.1'];
      this.volumnArray=['10','20','30','40','50'];
      this.viscosityArray=['0W-20','0W-40','5W-30','5W-40','10W-40','15W-40','20W-50'];
      this.oiltypeArray=['Semi Synthetic','Fully Synthetic','Mineral Based']

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddgearPage');
    this.subCatList='';
    this.authService.getData('products/categories.json').then((result:any) => {
      console.log(result)
     // this.details = JSON.stringify(result.category);
      //console.log(this.details)
       this.category = result.category;
         this.size =result.size;
         this.brand = result.brand;
          this.colour = result.colour;
          
       // console.log(this.engin);
         // console.log(this.category)
    }, (err) => {
      console.log(err);
      // Error log
    });

    if( localStorage.getItem('gear_id'))
    {
      this.id = localStorage.getItem('gear_id')
     let dataUserDet = {
       "id": localStorage.getItem('gear_id')
       
     };
     this.bikeService.getgeardetails(dataUserDet).subscribe(res=>{
       let details = res
       console.log(res)
       if(details.Ack == 1){
         
         this.form.controls['product_name'].setValue(details.gear.product_name);
         this.form.controls['brand_id'].setValue(details.gear.brand_id);
         this.form.controls['size_id'].setValue(details.gear.size_id);
         this.form.controls['price'].setValue(details.gear.price);
         this.form.controls['item_location'].setValue(details.gear.item_location);
         this.form.controls['category_id'].setValue(details.gear.category_id);
         this.form.controls['description'].setValue(details.gear.description);
         this.bikeimages =details.gear.link; 
         this.selectedValue = details.gear.colour_id;
       }
       
      },err=>{
       console.log(err);
        const alert = this.alertCtrl.create({
          title: 'Gear not fetch from your account!',
          buttons: ['OK']
        });
        alert.present();
     });
 
    }




  }

  public addgear(formdata)
  {

    let user_details:any =  JSON.parse(localStorage.getItem('userData'));

  /* if(localStorage.getItem('gear_id'))
   {
     fromdata.id = localStorage.getItem('gear_id');
     fromdata.image =  '';
   }
   else
   {*/
    formdata.image =  this.photoString;
    formdata.user_id = user_details.id;
    console.log('formdata',formdata)

    let loading = this.loadingCtrl.create({
      content: 'Loading Please Wait...',
    });
    loading.present();

   this.bikeService.addgear(formdata).subscribe(res=>{
     let details = res
     if(details.ack == 1){
       loading.dismiss();
    // if(localStorage.getItem('gear_id'))
    // {
    //   const alert = this.alertCtrl.create({
    //     title: 'Gear Edited Successfully .',
    //     buttons: ['OK']
    //   });
    // alert.present();
    // }
    // else{
    //   const alert = this.alertCtrl.create({
    //     title: 'Gear Added Successfully .',
    //     buttons: ['OK']
    //   });
    // alert.present();
    // }

    this.navCtrl.push('ListedGearsPage');
     }
     else{
       
       loading.dismiss();
     }
     
    },err=>{
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: 'Service Failed!',
        buttons: ['OK']
      });
      alert.present();
   });
 
 
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

  var url = "http://111.93.169.90/team6/bike/api/products/gearimageinsert.json";
    //  var url = "http://192.168.1.118/team6/bike/api/products/gearimageinsert.json";

  var targetPath = this.pathForImage(lastimage);
 
  var filename = this.lastImage;
 
  var options = {
    fileKey: "file",
    photo: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {
      'file':filename,
     }
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
      console.log('image url',this.uploadsuccess.image_url+this.uploadsuccess.image_name)
      this.imagePath=this.uploadsuccess.image_url;
      console.log(this.uploadsuccess.image_name)
      this.photoArray.push(this.uploadsuccess.image_name)
      console.log('photoarray',this.photoArray)

      this.photoString=this.photoArray.toString();
    console.log('string',this.photoString);

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

  remove_image(id)
  {
   // alert(id)
   
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
            if(localStorage.getItem('gear_id'))
            {
            

            let dataUserDet = {
              "id": id,
              "gear_id":localStorage.getItem('gear_id')
              
            };
            console.log(dataUserDet)
            this.bikeService.removegearimage(dataUserDet).subscribe(res=>{
              let details = res
              console.log(res)
              if(details.Ack == 1){
                
                this.bikeimages = details.data;
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
          else{

            this.bikeimages.splice(id, 1);
            this.imagename.splice(id,1);           
          }
          }
        }
      ]
    });

    alert.present();
  }




  remove_image2(id)
  {
    
    this.bikeimages.splice(id, 1);
    this.imagename.splice(id,1);
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
              "gear_id":localStorage.getItem('bike1_id')
              
            };
            this.bikeService.removeimage(dataUserDet).subscribe(res=>{
              let details = res
              console.log(res)
              if(details.Ack == 1){
                
                this.bikeimages = details.data;
              }
              
             },err=>{
              //console.log(err);
               const alert = this.alertCtrl.create({
                 title: 'Image Remove Failed!',
                 buttons: ['OK']
               });
               alert.present();
            });
           // console.log('Items Removed!');
            //Call you API to remove Items here.
          }
        }
      ]
    });

    alert.present();
    
  }


  change(e, type){
    console.log(e);
    console.log(type);
    
    if(e){
      this.selectedValue.push(type.id);
    }
    else{
    //  let updateItem = this.selectedValue.find(this.findIndexToUpdate, type.id);
    //   console.log(updateItem)
     let index = this.selectedValue.indexOf(type.id);
//console.log(index);
     this.selectedValue.splice(index, 1);
    }
    console.log(this.selectedValue)
  }
  // findIndexToUpdate(type) { 
  //   return type.id === this;
  // }



  getSubcategory(data)
  {
    this.category_id=data;
    this.clothing=false;
    this.showVVO=false;
    this.showVisVol=false;
    this.VVOD=false;
    this.showVol=false;
    console.log('this.form.value.category_id',this.form.value.category_id)

   
    console.log('getsubcategory')
    console.log(data)
let dataSet=
{
  'cat_id':data
}

    this.bikeService.subCategory(dataSet).subscribe(res=>{
      let details = res
      console.log(res)
      if(details.ack == 1){
        
       this.subCatList=details.subcategories;
       this.subCatListCondition=0;
      }
      else
      {
        console.log('ack 0')
        this.subCatList='';
        this.subCatListCondition=1;
      }
      
     },err=>{
      console.log(err);
     });
    }

    onChange(data)
    {   
      let dataset=
      {
        'category_id':this.category_id,
        'subcat_id':data
      }

      this.bikeService.gearfields(dataset).subscribe(res=>{   
        console.log(res)
        if(res.Ack == 1){
          this.sizeArray=res.size;   
          this.styleArray=res.style;  
        }
        
        else
        {
          console.log('ack 0')
          this.sizeArray='';
          this.styleArray='';          
        }
        
       },err=>{
        console.log(err);
       });
  
      console.log(data)
      if (data=='27'|| data=='32'|| data=='33' || data=='35'|| data=='36'|| data=='37'|| data=='38'|| data=='39')
      {
        console.log('clothing')
        this.clothing=true;
      }

      else if (data=='40' || data=='42')
      {
        console.log('vis vol oil')
        this.showVVO=true;
        this.showVisVol=false;
        this.VVOD=false;
        this.showVol=false;
      }

     else if (data=='41')
      {
        console.log('vis,vol')
        this.showVisVol=true;
        this.showVVO=false;      
        this.VVOD=false;
        this.showVol=false;

      }

      else if (data=='43')
      {
        console.log('vis vol oil dot')
        this.VVOD=true;
        this.showVisVol=false;
        this.showVVO=false;      
        this.showVol=false;
      }

      else if (data=='44' || data=='45')
      {
        console.log('vol')

        this.showVol=false;
        this.VVOD=false;
        this.showVisVol=false;
        this.showVVO=false;      

      }
    }

}

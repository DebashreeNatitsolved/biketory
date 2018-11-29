webpackJsonp([4],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeThreePageModule", function() { return SellbikeThreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_three__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellbikeThreePageModule = /** @class */ (function () {
    function SellbikeThreePageModule() {
    }
    SellbikeThreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellbike_three__["a" /* SellbikeThreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_three__["a" /* SellbikeThreePage */]),
            ],
        })
    ], SellbikeThreePageModule);
    return SellbikeThreePageModule;
}());

//# sourceMappingURL=sellbike-three.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_compiler__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_bike_bike__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { ProfessionalChemicalPage } from '../professional-chemical/professional-chemical';






var SellbikeThreePage = /** @class */ (function () {
    function SellbikeThreePage(navCtrl, navParams, file, filePath, platform, alertCtrl, toastCtrl, camera, actionSheetCtrl, transfer, loadingCtrl, bikeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.file = file;
        this.filePath = filePath;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.bikeService = bikeService;
        this.lastImage = null;
        //bikeimages = [];
        this.fromdata = [];
    }
    SellbikeThreePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('bike1_id')) {
            var dataUserDet = {
                "id": localStorage.getItem('bike1_id')
            };
            this.bikeService.getbikeimagedetails(dataUserDet).subscribe(function (res) {
                var details = res;
                console.log(res);
                if (details.Ack == 1) {
                    _this.bikeimages = details.productimage;
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Bike not fetch from your account!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        console.log('ionViewDidLoad SellbikeThreePage');
    };
    SellbikeThreePage.prototype.Sellbikethree = function () {
        this.navCtrl.push('SellbikeFourPage');
        //  this.navCtrl.setRoot('SellbikeFourPage');
    };
    SellbikeThreePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: 'Take a picture',
                    icon: 'camera',
                    handler: function () {
                        _this.uploadFromCamera(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'From gallery',
                    icon: 'images',
                    handler: function () {
                        _this.uploadFromCamera(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SellbikeThreePage.prototype.uploadFromCamera = function (sourceType) {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            _this.loading = _this.loadingCtrl.create({
                content: 'Uploading...',
            });
            _this.loading.present();
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var curidentifierModuleUrlrentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(currentName));
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(currentName));
            }
            __WEBPACK_IMPORTED_MODULE_6__angular_compiler__["A" /* identifierModuleUrl */];
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    SellbikeThreePage.prototype.createFileName = function (currentName) {
        var d = new Date(), n = d.getTime(), 
        // newFileName=n+".jpg";
        newFileName = currentName;
        return newFileName;
    };
    SellbikeThreePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        console.log("CURRENTFILENAME", currentName);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            console.log("NEWFILENAMEEEEEE", _this.lastImage);
            _this.uploadImage(localStorage.getItem('bike1_id'));
        }, function (error) {
            console.log(error);
            _this.presentToast('Error while storing file.');
        });
    };
    SellbikeThreePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    SellbikeThreePage.prototype.pathForImage = function (img) {
        //console.log("IMAGGGEGGEGGEGE",img);
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    SellbikeThreePage.prototype.uploadImage = function (id) {
        var _this = this;
        // Destination URL
        var url = "http://111.93.169.90/team6/bike/api/products/bikeimageinsert.json";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            file: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: {
                'file': filename,
                'bike_id': id
            }
            // params : {'fileName': filename}
        };
        console.log("OPTIONS", options);
        var fileTransfer = this.transfer.create();
        console.log(targetPath);
        this.loading.dismissAll();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            console.log(data);
            var det = JSON.parse(data.response);
            console.log('UPLOADDDD', det);
            _this.bikeimages = det.data;
            _this.loading.dismissAll();
            _this.presentToast('Image succesful uploaded.');
            //this.navCtrl.push('HomePage');
        }, function (err) {
            console.log("Error", err);
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    SellbikeThreePage.prototype.remove_image = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove Image',
            message: 'Are you sure to remove image?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'icon-color',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'icon-color',
                    handler: function (data) {
                        var dataUserDet = {
                            "id": id,
                            "product_id": localStorage.getItem('bike1_id')
                        };
                        _this.bikeService.removeimage(dataUserDet).subscribe(function (res) {
                            var details = res;
                            console.log(res);
                            if (details.Ack == 1) {
                                _this.bikeimages = details.data;
                            }
                        }, function (err) {
                            //console.log(err);
                            var alert = _this.alertCtrl.create({
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
        //alert(id)
    };
    SellbikeThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-three',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-three/sellbike-three.html"*/'<!--\n  Generated template for the SellbikeThreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Sell Gear</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n  <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form>\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li>\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li>\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li class="active">\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li>\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col col-12>\n              <div class="round-image">\n                <img src="assets/imgs/bike.png" alt="" />\n              </div>\n              <h2 class="text-center m-b-20 m-t-15">Add up to 8 pictures</h2>\n            </ion-col>\n            <ion-col col-12>\n              <div class="dashed-area">\n                <a href="javascript:void()" (click)="presentActionSheet()" class="drag">\n                  <img src="assets/imgs/camera.png" alt="" />\n                  <p> click here to upload</p>\n                </a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n    <ul class="upload-list" *ngIf="bikeimages">\n      <!-- <li>\n          <img src="{{pathForImage(lastImage)}}"  *ngIf="lastImage" alt="Ionic File" width="300" />\n        </li> -->\n      <li *ngFor="let item of bikeimages">\n        <img src="{{item.link}}" alt="" />\n        <a href="javascript:void()" (click)="remove_image(item.id)"><ion-icon name="close-circle"></ion-icon></a>\n      </li>\n      <!--<li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>-->\n    </ul>\n    <button ion-button block class="text-uppercase" (click)="Sellbikethree()">Continue</button>\n  </form>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-three/sellbike-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_bike_bike__["a" /* BikeProvider */]])
    ], SellbikeThreePage);
    return SellbikeThreePage;
}());

//# sourceMappingURL=sellbike-three.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
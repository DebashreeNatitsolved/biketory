webpackJsonp([6],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeFourPageModule", function() { return SellbikeFourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_four__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellbikeFourPageModule = /** @class */ (function () {
    function SellbikeFourPageModule() {
    }
    SellbikeFourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellbike_four__["a" /* SellbikeFourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_four__["a" /* SellbikeFourPage */]),
            ],
        })
    ], SellbikeFourPageModule);
    return SellbikeFourPageModule;
}());

//# sourceMappingURL=sellbike-four.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the SellbikeFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellbikeFourPage = /** @class */ (function () {
    function SellbikeFourPage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.bikeService = bikeService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.myApp = myApp;
        this.form = builder.group({
            'postal_code': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
    }
    SellbikeFourPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('bike1_id')) {
            var dataUserDet = {
                "id": localStorage.getItem('bike1_id')
            };
            this.bikeService.getbikedetails(dataUserDet).subscribe(function (res) {
                var details = res;
                console.log(res);
                if (details.Ack == 1) {
                    _this.form.controls['postal_code'].setValue(details.product.postal_code);
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
        console.log('ionViewDidLoad SellbikeFourPage');
    };
    SellbikeFourPage.prototype.Sellbikefive = function (fromdata) {
        var _this = this;
        //  let bike1:any = JSON.parse(localStorage.getItem('bikesell1'));
        if (localStorage.getItem('bike1_id')) {
            fromdata.id = localStorage.getItem('bike1_id');
        }
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Bike add faild!',
                subTitle: "Please fill all the details.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'show',
                content: 'Loading Please Wait...',
                duration: 3000
            });
            loading.present();
            //console.log(fromdata);
            this.bikeService.addbike(fromdata).subscribe(function (res) {
                var details = res;
                if (details.ack == 1) {
                    localStorage.setItem('bike1_id', details.id);
                    //   console.log(res);
                    //    const alert = this.alertCtrl.create({
                    //      title: 'Bike Added Successfully .',
                    //      buttons: ['OK']
                    //    });
                    //  alert.present();
                    // this.navCtrl.setRoot('SellbikeThreePage');
                    _this.navCtrl.push('BikeSuccessPage');
                }
            }, function (err) {
                //console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Service Failed!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        //this.navCtrl.setRoot('BikeSuccessPage');
    };
    SellbikeFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-four',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-four/sellbike-four.html"*/'<!--\n  Generated template for the SellbikeFourPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sellbike_four</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n  <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form [formGroup]="form" (ngSubmit)="Sellbikefive(form.value)" #sellbike4="ngForm">\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li>\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li>\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li>\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li class="active">\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col col-12>\n              <div class="round-image">\n                <img src="assets/imgs/bike.png" alt="" />\n              </div>\n              <h2 class="text-center m-b-20 m-t-15">It’s FREE to list on biketory for a limited time</h2>\n            </ion-col>\n\n            <ion-col col-12>\n            	<ion-col col-12 class="sell-bike-box">\n            		<div class="euro-img">\n            		<img src="assets/imgs/euro.png" alt="" />\n             		</div>\n             		<p class="text-center">  Weeks on the website: 4</p>\n\n            	</ion-col>\n\n            	<ion-list class="margin-bottom10">\n						<ion-item class="margin-bottom10">\n						    <ion-input type="text" placeholder="Postalcode" formControlName="postal_code"></ion-input>\n						</ion-item>\n            <p *ngIf="!form.controls[\'postal_code\'].valid && form.controls[\'postal_code\'].touched" ion-text color="danger">Post Code is required </p>\n						<ion-item>\n					   		 <ion-label>Allow buyers to contact me by phone</ion-label>\n           					 <ion-checkbox></ion-checkbox>\n					  	</ion-item>\n\n				</ion-list>\n\n			 \n\n\n					      <button ion-button block class="text-uppercase" [disabled]="!form.valid ">Finish</button>\n\n     <!--          <div class="dashed-area">\n                <a href="" class="drag">\n                  <img src="assets/imgs/camera.png" alt="" />\n                  <p>Drag or click here to upload</p>\n                </a>\n              </div> -->\n            </ion-col>\n\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n   <!--  <ul class="upload-list">\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href=""><ion-icon name="close-circle"></ion-icon></a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n    </ul> -->\n\n\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-four/sellbike-four.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], SellbikeFourPage);
    return SellbikeFourPage;
}());

//# sourceMappingURL=sellbike-four.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
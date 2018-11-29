webpackJsonp([5],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeOnePageModule", function() { return SellbikeOnePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_one__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellbikeOnePageModule = /** @class */ (function () {
    function SellbikeOnePageModule() {
    }
    SellbikeOnePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellbike_one__["a" /* SellbikeOnePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_one__["a" /* SellbikeOnePage */]),
            ],
        })
    ], SellbikeOnePageModule);
    return SellbikeOnePageModule;
}());

//# sourceMappingURL=sellbike-one.module.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
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
 * Generated class for the SellbikeOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellbikeOnePage = /** @class */ (function () {
    function SellbikeOnePage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, myApp) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.bikeService = bikeService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.myApp = myApp;
        this.form = builder.group({
            'mileage': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'reg_number': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SellbikeOnePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('bike1_id')) {
            var dataUserDet = {
                "id": localStorage.getItem('bike1_id')
            };
            this.bikeService.getbikedetails(dataUserDet).subscribe(function (res) {
                var details = res;
                console.log(res);
                if (details.Ack == 1) {
                    _this.form.controls['mileage'].setValue(details.product.mileage);
                    _this.form.controls['reg_number'].setValue(details.product.reg_number);
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
        console.log('ionViewDidLoad SellbikeOnePage');
    };
    SellbikeOnePage.prototype.Sellbiketwo = function (fromdata) {
        var _this = this;
        var user_details = JSON.parse(localStorage.getItem('userData'));
        console.log(user_details);
        var login_user = user_details.id;
        //alert(login_user);
        console.log(login_user);
        //console.log(fromdata);
        fromdata.seller_id = login_user;
        console.log(fromdata);
        if (localStorage.getItem('bike1_id')) {
            fromdata.id = localStorage.getItem('bike1_id');
        }
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
                _this.navCtrl.push('SellbikeTwoPage');
            }
        }, function (err) {
            //console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Service Failed!',
                buttons: ['OK']
            });
            alert.present();
        });
        //localStorage.setItem('bikesell1', JSON.stringify(fromdata));
        //this.navCtrl.setRoot('SellbikeTwoPage');
        //this.navCtrl.push('SellbikeTwoPage');
    };
    SellbikeOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-one',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-one/sellbike-one.html"*/'<!--\n  Generated template for the SellbikeOnePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Sell Gear</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n    <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form [formGroup]="form" (ngSubmit)="Sellbiketwo(form.value)" #sellbike1="ngForm">\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li class="active">\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li>\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li>\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li>\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col>\n              <div class="round-image"><img src="assets/imgs/bike.png" alt="" /></div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        \n        <ion-list class="post-fields">\n          <ion-item>\n            <ion-input type="text" placeholder="Enter reg number" formControlName="reg_number"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'reg_number\'].valid && form.controls[\'reg_number\'].touched" ion-text color="danger">Registration number is required </p>\n          <ion-item>\n            <ion-input type="number" placeholder="Enter mileage" formControlName="mileage"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'mileage\'].valid && form.controls[\'mileage\'].touched" ion-text color="danger">Mileage is required and milage must be a number</p>\n        </ion-list>\n        <p class="text-center m-t-15 m-b-15"><b>OR</b></p>\n        <p class="text-center"><a href="">Click here</a> to enter details manually</p>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block  class="text-uppercase" [disabled]="!form.valid ">Start</button>\n  </form>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-one/sellbike-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], SellbikeOnePage);
    return SellbikeOnePage;
}());

//# sourceMappingURL=sellbike-one.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
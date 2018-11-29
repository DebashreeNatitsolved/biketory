webpackJsonp([3],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeTwoPageModule", function() { return SellbikeTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_two__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellbikeTwoPageModule = /** @class */ (function () {
    function SellbikeTwoPageModule() {
    }
    SellbikeTwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellbike_two__["a" /* SellbikeTwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_two__["a" /* SellbikeTwoPage */]),
            ],
        })
    ], SellbikeTwoPageModule);
    return SellbikeTwoPageModule;
}());

//# sourceMappingURL=sellbike-two.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(103);
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
 * Generated class for the SellbikeTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellbikeTwoPage = /** @class */ (function () {
    function SellbikeTwoPage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
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
            'mileage': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'reg_number': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SellbikeTwoPage.prototype.ionViewpublicDidLoad = function () {
        var _this = this;
        console.log('dfuijgudjf');
        //     this.bikeService.categories()
        //     .subscribe(data => {
        //       let details = data;
        //      console.log(details);
        //       this.categorys = details.categorys;
        //   this.models = details.models;
        //   this.makes = details.makes;
        //   this.colours = details.colours;
        //   this.engins = details.engins;
        // console.log(this.models)
        //     },error => {
        //       console.log('error');
        //       });
        this.authService.getData('products/categories.json').then(function (result) {
            console.log(result);
            _this.details = JSON.stringify(result);
            console.log(_this.details.category);
            _this.category = _this.details.category;
            _this.model = _this.details.model;
            _this.make = _this.details.make;
            _this.colour = _this.details.colour;
            _this.engin = _this.details.engin;
            console.log(_this.category);
        }, function (err) {
            console.log(err);
            // Error log
        });
        console.log('ionViewDidLoad SellbikeTwoPage');
    };
    SellbikeTwoPage.prototype.Sellbikethree = function () {
        this.navCtrl.setRoot('SellbikeThreePage');
    };
    SellbikeTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-two',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-two/sellbike-two.html"*/'<!--\n  Generated template for the SellbikeTwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <ion-title>Sell Gear</ion-title>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n  <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form>\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li>\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li class="active">\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li>\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li>\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col>\n              <div class="round-image">\n                <img src="assets/imgs/bike.png" alt="" />\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-list class="post-fields">\n          <ion-item>\n            <ion-label>Make</ion-label>\n            <ion-select >\n              <ion-option *ngFor="let item of make" value="{{item.id}}">{{item.name}}</ion-option>\n              <!-- <ion-option>Honda City</ion-option> -->\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Year</ion-label>\n            <ion-select>\n              <ion-option>2000</ion-option>\n              <ion-option>2001</ion-option>\n              <ion-option>2002</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Model</ion-label>\n            <ion-select>\n              <ion-option>civic</ion-option>\n              <ion-option>Magna</ion-option>\n              <ion-option>Sports</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-label>Engine size</ion-label>\n            <ion-select>\n              <ion-option>200Kg</ion-option>\n              <ion-option>230Kg</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Mileage"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Colour"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Asking Price"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Category</ion-label>\n            <ion-select>\n              <ion-option>Sedan</ion-option>\n              <ion-option>SUV</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item class="checkbox-holder">\n            <ion-label>Accept offers</ion-label>\n            <ion-checkbox></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Optional (Number of previous owners including yourself)"></ion-input>\n          </ion-item>\n          <ion-item>\n            <textarea placeholder="Descriptions"></textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="text" placeholder="Phone"></ion-input>\n          </ion-item>\n          <ion-item class="checkbox-holder mb-0">\n            <ion-label>Allow buyers to contact me by phone</ion-label>\n            <ion-checkbox></ion-checkbox>\n          </ion-item>\n          <ion-item class="checkbox-holder mb-0">\n            <ion-label>I have read and understood the Terms and Conditions for biketory private advertisers</ion-label>\n            <ion-checkbox></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block class="text-uppercase" (click)="Sellbikethree()">Continue</button>\n  </form>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-two/sellbike-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], SellbikeTwoPage);
    return SellbikeTwoPage;
}());

//# sourceMappingURL=sellbike-two.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
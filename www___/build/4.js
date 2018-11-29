webpackJsonp([4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeThreePageModule", function() { return SellbikeThreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_three__ = __webpack_require__(341);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_three__["a" /* SellbikeThreePage */]),
            ],
        })
    ], SellbikeThreePageModule);
    return SellbikeThreePageModule;
}());

//# sourceMappingURL=sellbike-three.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
 * Generated class for the SellbikeThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellbikeThreePage = /** @class */ (function () {
    function SellbikeThreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellbikeThreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellbikeThreePage');
    };
    SellbikeThreePage.prototype.Sellbikethree = function () {
        this.navCtrl.setRoot('SellbikeFourPage');
    };
    SellbikeThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-three',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-three/sellbike-three.html"*/'<!--\n  Generated template for the SellbikeThreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Sell Gear</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n  <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form>\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li>\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li>\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li class="active">\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li>\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col col-12>\n              <div class="round-image">\n                <img src="assets/imgs/bike.png" alt="" />\n              </div>\n              <h2 class="text-center m-b-20 m-t-15">Add up to 8 pictures</h2>\n            </ion-col>\n            <ion-col col-12>\n              <div class="dashed-area">\n                <a href="" class="drag">\n                  <img src="assets/imgs/camera.png" alt="" />\n                  <p>Drag or click here to upload</p>\n                </a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n\n    <ul class="upload-list">\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href=""><ion-icon name="close-circle"></ion-icon></a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n      <li>\n        <img src="assets/imgs/vehicle-1.jpg" alt="" />\n        <a href="">\n          <ion-icon name="close-circle"></ion-icon>\n        </a>\n      </li>\n    </ul>\n    <button ion-button block class="text-uppercase" (click)="Sellbikethree()">Continue</button>\n  </form>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-three/sellbike-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SellbikeThreePage);
    return SellbikeThreePage;
}());

//# sourceMappingURL=sellbike-three.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
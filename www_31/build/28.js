webpackJsonp([28],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerProfilePageModule", function() { return BuyerProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buyer_profile__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyerProfilePageModule = /** @class */ (function () {
    function BuyerProfilePageModule() {
    }
    BuyerProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__buyer_profile__["a" /* BuyerProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buyer_profile__["a" /* BuyerProfilePage */]),
            ],
        })
    ], BuyerProfilePageModule);
    return BuyerProfilePageModule;
}());

//# sourceMappingURL=buyer-profile.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the BuyerProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BuyerProfilePage = /** @class */ (function () {
    function BuyerProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BuyerProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuyerProfilePage');
    };
    BuyerProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-buyer-profile',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/buyer-profile/buyer-profile.html"*/'<ion-content class="grey-bg">\n  <div class="big-banner">\n    \n    <img src="../../assets/imgs/big-banner.png" alt="" />\n  </div>\n  <div class="detail-box">\n    <div class="user">\n      <div class="avatar">\n        <img src="../../assets/imgs/avtar.png" alt="" />\n      </div>\n      <div class="name">\n        <h2> John Doe</h2>\n        <p><span class="mobile">\n          <img src="../../assets/imgs/phone-icon.png" alt="" />\n        </span>\n           <b>+91-9831452698</b> Verified <img src="../../assets/imgs/verified.png" alt="" class="verify"/>\n          <span>\n            <button ion-button round block start><ion-icon name="create"></ion-icon>&nbsp; Edit</button>\n          </span>\n        </p>\n      </div>\n    </div>\n    <div>\n      <ion-segment [(ngModel)]="pet" class="custom-segment">\n        <ion-segment-button value="recent">Recent Product</ion-segment-button>\n        <ion-segment-button value="puppies">Past Product</ion-segment-button>\n      </ion-segment>\n    </div>\n    <div class="desc">\n      <div [ngSwitch]="pet" class="segment-body">\n        <ion-list *ngSwitchCase="\'recent\'">\n          <ion-item>\n            <h4 class="mt-0">BIKES</h4>\n            <div class="flex-wrapper">\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/motor-cycle.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/vehicle-1.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-item>\n          <ion-item>\n            <h4 class="mt-0">Gear</h4>\n            <div class="flex-wrapper">\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/motor-cycle.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/vehicle-1.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-item>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'puppies\'">\n          <ion-item>\n            <h4 class="mt-0">Gear</h4>\n            <div class="flex-wrapper">\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/helmet-1.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n              <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n                <img src="assets/imgs/helmet-2.jpg" alt="">\n                <ion-card-content>\n                  <h6>Harley-Davidson-Fat-Bob</h6>\n                  <p class="price">$30,000.00</p>\n                </ion-card-content>\n                <ion-card-content>\n                  <p class="model">Model:\n                    <b>Fat-Bob-9949 - M</b>\n                  </p>\n                  <p class="model">Make:\n                    <b>2017</b>\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/buyer-profile/buyer-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BuyerProfilePage);
    return BuyerProfilePage;
}());

//# sourceMappingURL=buyer-profile.js.map

/***/ })

});
//# sourceMappingURL=28.js.map
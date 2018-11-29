webpackJsonp([30],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeSuccessPageModule", function() { return BikeSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike_success__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BikeSuccessPageModule = /** @class */ (function () {
    function BikeSuccessPageModule() {
    }
    BikeSuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bike_success__["a" /* BikeSuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bike_success__["a" /* BikeSuccessPage */]),
            ],
        })
    ], BikeSuccessPageModule);
    return BikeSuccessPageModule;
}());

//# sourceMappingURL=bike-success.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeSuccessPage; });
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
 * Generated class for the BikeSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BikeSuccessPage = /** @class */ (function () {
    function BikeSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BikeSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BikeSuccessPage');
    };
    BikeSuccessPage.prototype.gohome = function () {
        localStorage.setItem('bike1_id', '');
        this.navCtrl.push('HomePage');
    };
    BikeSuccessPage.prototype.golist = function () {
        localStorage.setItem('bike1_id', '');
        this.navCtrl.push('BikelistPage');
    };
    BikeSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bike-success',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/bike-success/bike-success.html"*/'<!--\n  Generated template for the BikeSuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bike-Success</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	 <ion-grid class="top">\n\n  		 <ion-row center>\n	  		<div class="col text-center">\n		  		<ion-icon class="circle" name="checkmark-circle"></ion-icon>\n		  		<h1 class="title success-title">Thank You!</h1>\n		  		<h6 ion-text class="center">Your ad will be approved shortly.</h6>\n		  		<button ion-button class="text-uppercase" (click)="gohome()">Main Page</button>\n		  		<button ion-button color="dark" (click)="golist()">List Another</button>\n	  		</div>\n  	</ion-row>\n  </ion-grid>\n\n  </ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/bike-success/bike-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BikeSuccessPage);
    return BikeSuccessPage;
}());

//# sourceMappingURL=bike-success.js.map

/***/ })

});
//# sourceMappingURL=30.js.map
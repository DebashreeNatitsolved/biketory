webpackJsonp([31],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterSplashPageModule", function() { return AfterSplashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__after_splash__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AfterSplashPageModule = /** @class */ (function () {
    function AfterSplashPageModule() {
    }
    AfterSplashPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__after_splash__["a" /* AfterSplashPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__after_splash__["a" /* AfterSplashPage */]),
            ],
        })
    ], AfterSplashPageModule);
    return AfterSplashPageModule;
}());

//# sourceMappingURL=after-splash.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterSplashPage; });
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
 * Generated class for the AfterSplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterSplashPage = /** @class */ (function () {
    function AfterSplashPage(navCtrl, navParams, menu, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.events = events;
        events.publish('hideFooter', { isHidden: true });
    }
    AfterSplashPage.prototype.ionViewDidLoad = function () {
        this.menu.enable(false, 'loggedOutMenu');
        console.log('ionViewDidLoad AfterSplashPage');
    };
    AfterSplashPage.prototype.onLogin = function () {
        this.navCtrl.push('LoginnewPage');
    };
    AfterSplashPage.prototype.GoSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    AfterSplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-after-splash',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/after-splash/after-splash.html"*/'<ion-content padding class="after-splash">\n	<ion-grid>\n		<ion-row>\n			<ion-col col-12>\n				<img src="assets/imgs/after-splash-logo.png" alt="" class="logo">\n				<p class="text-center logo-text">Search Bike and Gear Near you</p>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n	<div class="text-wrapper">\n		<div class="text-area">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>\n	</div>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-6>\n				<button ion-button block (click)="onLogin()">SIGN IN</button>\n			</ion-col>\n			<ion-col col-6>\n				<button ion-button block color="white" class="signup-btn" (click)="GoSignup()">SIGN UP</button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/after-splash/after-splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], AfterSplashPage);
    return AfterSplashPage;
}());

//# sourceMappingURL=after-splash.js.map

/***/ })

});
//# sourceMappingURL=31.js.map
webpackJsonp([7],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellStep_1PageModule", function() { return SellStep_1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_step_1__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellStep_1PageModule = /** @class */ (function () {
    function SellStep_1PageModule() {
    }
    SellStep_1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sell_step_1__["a" /* SellStep_1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell_step_1__["a" /* SellStep_1Page */]),
            ],
        })
    ], SellStep_1PageModule);
    return SellStep_1PageModule;
}());

//# sourceMappingURL=sell-step-1.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellStep_1Page; });
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
 * Generated class for the SellStep_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellStep_1Page = /** @class */ (function () {
    function SellStep_1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellStep_1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellStep_1Page');
    };
    SellStep_1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sell-step-1',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sell-step-1/sell-step-1.html"*/'<!--\n  Generated template for the SellStep_1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sell Gear</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<h2>Choose your gear category</h2>\n	<ion-row padding>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>			\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-1.png" alt="" /></div>\n				<p>Clothing</p>			\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-2.png" alt="" /></div>\n				<p>Helmet</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-3.png" alt="" /></div>\n				<p>Oil & Lubricants</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-4.png" alt="" /></div>\n				<p>Luggage</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-5.png" alt="" /></div>\n				<p>Maintenance</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-6.png" alt="" /></div>\n				<p>Electronics</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-7.png" alt="" /></div>\n				<p>Tyres</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-8.png" alt="" /></div>\n				<p>Accessories</p>\n			</ion-card>\n		</a>\n		</ion-col>\n		<ion-col col-4>\n		<a href="">\n			<ion-card>\n				<div class="icon"><img src="../../assets/imgs/cat-icons/cat-9.png" alt="" /></div>\n				<p>Security</p>\n			</ion-card>\n		</a>\n		</ion-col>\n	</ion-row>\n	<div class="tabs-sell">\n		<ul>\n			<li>\n			<a href="">\n			<div class="icon">\n				<img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n			</div>\n			Profile\n			</a>\n			</li>\n			<li>\n			<a href="">\n			<div class="icon">\n				<img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n			</div>\n			Sell Bike\n			</a>\n			</li>\n			<li>\n			<a href=""><div class="icon">\n				<img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n			</div>\n			Sell Gear\n			</a>\n			</li>\n			<li>\n			<a href=""><div class="icon">\n				<img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n			</div>\n			Chats</a>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sell-step-1/sell-step-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SellStep_1Page);
    return SellStep_1Page;
}());

//# sourceMappingURL=sell-step-1.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
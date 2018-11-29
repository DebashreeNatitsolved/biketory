webpackJsonp([20],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(builder, navCtrl, navParams, authService, loadingCtrl, menu, myApp, storage, events) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.myApp = myApp;
        this.storage = storage;
        this.events = events;
        events.publish('hideFooter', { isHidden: false });
        this.form = builder.group({
            'ser_val': ['', '']
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.menu.enable(true, 'loggedOutMenu');
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.bikesearch = function (frmval) {
        console.log(frmval);
        localStorage.setItem('searchdata', JSON.stringify(frmval));
        this.navCtrl.push('SearchVehiclePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-2 class="p-0">\n					<ion-buttons start>\n						<button ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n				<ion-col col-8 class="p-0">\n					<p class="mb-0 text-center m-t-5 title">Home</p>\n				</ion-col>\n				<ion-col col-2 class="p-0">\n					<ion-buttons end>\n						<button ion-button icon-only><ion-icon name="search"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-slides pager class="home-slider">\n		<ion-slide style="background-image:url(\'assets/imgs/home-slide-1.jpg\'); background-size: cover; background-repeat: no-repeat; background-position: top center">\n			<div class="text-area">\n				<img src="assets/imgs/ad-logo.png" alt="" class="ad-logo">\n				<h5>BODY CLOTHING</h5>\n				<p>Cross of christ sports motocross motobike</p>\n				<button ion-button color="light">Buy Now</button>\n			</div>\n		</ion-slide>\n		<ion-slide style="background-image:url(\'assets/imgs/home-slide-1.jpg\'); background-size: cover; background-repeat: no-repeat; background-position: top center">\n			<div class="text-area">\n				<img src="assets/imgs/ad-logo.png" alt="" class="ad-logo">\n				<h5>BODY CLOTHING</h5>\n				<p>Cross of christ sports motocross motobike</p>\n				<button ion-button color="light">Buy Now</button>\n			</div>\n		</ion-slide>\n	</ion-slides>\n	\n	<ion-card class="m-0 w-100 search-bike">\n		<ion-card-content>\n			<h2>Search for bike</h2>\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n							<form [formGroup]="form" (ngSubmit)="bikesearch(form.value)" #BkForm="ngForm">\n						<ion-list class="search-wrapper m-b-20">\n							<ion-item class="input-field">\n								<ion-label fixed class="mr-0"><ion-icon name="search"></ion-icon></ion-label>\n								<ion-input type="text" value="" formControlName="ser_val"  placeholder="Search for bike" ></ion-input>\n							</ion-item>\n						</ion-list>\n						<p><button ion-button round >SEARCH</button></p>\n						</form>\n						<a class="plus"><ion-icon name="add"></ion-icon></a>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card class="m-0 w-100 shop-gear">\n		<ion-card-content>\n			<h2>Shop for Gear</h2>\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n						<ion-list class="search-wrapper m-b-10">\n							<ion-item class="input-field">\n								<ion-label fixed class="mr-0">\n									<ion-icon name="search"></ion-icon>\n								</ion-label>\n								<ion-input type="text" value="" placeholder="Shop for Gear"></ion-input>\n							</ion-item>\n						</ion-list>\n						\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n						<ul class="options-wrap">\n							<li>\n								<a href="">\n									<div class="round-image"><img src="assets/imgs/icon-clothing.png" alt=""></div>\n									<p>Clothing</p>\n								</a>\n							</li>\n							<li>\n								<a href="">\n									<div class="round-image"><img src="assets/imgs/icon-helmet.png" alt=""></div>\n									<p>Healmet</p>\n								</a>\n							</li>\n							<li>\n								<a href="">\n									<div class="round-image"><img src="assets/imgs/icon-oil.png" alt=""></div>\n									<p>Oil & Lubrications</p>\n								</a>\n							</li>\n							<li>\n								<a href="">\n									<div class="round-image"><img src="assets/imgs/icon-luggage.png" alt=""></div>\n									<p>Luggage</p>\n								</a>\n							</li>\n							<li>\n								<a href="">\n									<div class="round-image"><img src="assets/imgs/icon-maintainance.png" alt=""></div>\n									<p>Maintenance</p>\n								</a>\n							</li>\n						</ul>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=20.js.map
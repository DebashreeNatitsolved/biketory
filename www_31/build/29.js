webpackJsonp([29],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikelistPageModule", function() { return BikelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bikelist__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BikelistPageModule = /** @class */ (function () {
    function BikelistPageModule() {
    }
    BikelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bikelist__["a" /* BikelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bikelist__["a" /* BikelistPage */]),
            ],
        })
    ], BikelistPageModule);
    return BikelistPageModule;
}());

//# sourceMappingURL=bikelist.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikelistPage; });
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
 * Generated class for the BikelistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BikelistPage = /** @class */ (function () {
    function BikelistPage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
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
    }
    BikelistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('bike list ewre');
        var user_details = JSON.parse(localStorage.getItem('userData'));
        console.log(user_details);
        var login_user = user_details.id;
        var dataUserDet = {
            "id": login_user
        };
        this.bikeService.bikelist(dataUserDet).subscribe(function (res) {
            var details = res;
            console.log(res);
            if (details.Ack == 1) {
                //this.bikeimages = details.data;
            }
        }, function (err) {
            //console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Image Remove Failed!',
                buttons: ['OK']
            });
            alert.present();
        });
        console.log('ionViewDidLoad BikelistPage');
    };
    BikelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bikelist',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/bikelist/bikelist.html"*/'<!--\n  Generated template for the BikelistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>bikelist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="total">\n	<ion-item class="bike-listing">\n	 <h2 class="title list-titel">Carpets & Rugs</h2>\n	 <p class="list-para"><strong>Price:</strong> <span class="bold">$0</span></p>\n	 <p class="list-para">Donec feugiat justo sapien. Etiam tempus lacus ut sem laoreet venenatis.</p>\n	  <div class="button-area">\n	  	<button ion-button color="text-uppercase"><ion-icon name="create"></ion-icon></button> <button ion-button color="dark"><ion-icon name="trash"></ion-icon></button>\n	  </div>\n	</ion-item>\n	<div class="bike-list-image">\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n</div>\n\n\n<div class="total">\n	<ion-item class="bike-listing">\n	 <h2 class="title list-titel">Carpets & Rugs</h2>\n	 <p class="list-para"><strong>Price:</strong> <span class="bold">$0</span></p>\n	 <p class="list-para">Donec feugiat justo sapien. Etiam tempus lacus ut sem laoreet venenatis.</p>\n	  <div class="button-area">\n	  	<button ion-button color="text-uppercase"><ion-icon name="create"></ion-icon></button> <button ion-button color="dark"><ion-icon name="trash"></ion-icon></button>\n	  </div>\n	</ion-item>\n	<div class="bike-list-image">\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n</div>\n\n\n<div class="total">\n	<ion-item class="bike-listing">\n	 <h2 class="title list-titel">Carpets & Rugs</h2>\n	 <p class="list-para"><strong>Price:</strong> <span class="bold">$0</span></p>\n	 <p class="list-para">Donec feugiat justo sapien. Etiam tempus lacus ut sem laoreet venenatis.</p>\n	  <div class="button-area">\n	  	<button ion-button color="text-uppercase"><ion-icon name="create"></ion-icon></button> <button ion-button color="dark"><ion-icon name="trash"></ion-icon></button>\n	  </div>\n	</ion-item>\n	<div class="bike-list-image">\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n</div>\n\n<div class="total">\n	<ion-item class="bike-listing">\n	 <h2 class="title list-titel">Carpets & Rugs</h2>\n	 <p class="list-para"><strong>Price:</strong> <span class="bold">$0</span></p>\n	 <p class="list-para">Donec feugiat justo sapien. Etiam tempus lacus ut sem laoreet venenatis.</p>\n	  <div class="button-area">\n	  	<button ion-button color="text-uppercase"><ion-icon name="create"></ion-icon></button> <button ion-button color="dark"><ion-icon name="trash"></ion-icon></button>\n	  </div>\n	</ion-item>\n	<div class="bike-list-image">\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n</div>\n\n<div class="total">\n	<ion-item class="bike-listing">\n	 <h2 class="title list-titel">Carpets & Rugs</h2>\n	 <p class="list-para"><strong>Price:</strong> <span class="bold">$0</span></p>\n	 <p class="list-para">Donec feugiat justo sapien. Etiam tempus lacus ut sem laoreet venenatis.</p>\n	  <div class="button-area">\n	  	<button ion-button color="text-uppercase"><ion-icon name="create"></ion-icon></button> <button ion-button color="dark"><ion-icon name="trash"></ion-icon></button>\n	  </div>\n	</ion-item>\n	<div class="bike-list-image">\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/bikelist/bikelist.html"*/,
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
    ], BikelistPage);
    return BikelistPage;
}());

//# sourceMappingURL=bikelist.js.map

/***/ })

});
//# sourceMappingURL=29.js.map
webpackJsonp([23],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabouritePageModule", function() { return FabouritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fabourite__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FabouritePageModule = /** @class */ (function () {
    function FabouritePageModule() {
    }
    FabouritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fabourite__["a" /* FabouritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fabourite__["a" /* FabouritePage */]),
            ],
        })
    ], FabouritePageModule);
    return FabouritePageModule;
}());

//# sourceMappingURL=fabourite.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabouritePage; });
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
 * Generated class for the FabouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FabouritePage = /** @class */ (function () {
    function FabouritePage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.showSearchbar = false;
        events.publish('hideHeader', { isHidden: false });
    }
    FabouritePage.prototype.ionViewDidLoad = function () {
        // this.events.publish('hideHeader', { isHidden: false});
        console.log('ionViewDidLoad FabouritePage');
    };
    FabouritePage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        //this.content.resize();
    };
    FabouritePage.prototype.search = function (value) {
        console.log('here');
        console.log(this.myInput);
    };
    FabouritePage.prototype.onCancel = function (value) {
        this.showSearchbar = !this.showSearchbar;
        this.myInput = '';
        console.log(this.myInput);
        console.log('cancel');
    };
    FabouritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fabourite',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/fabourite/fabourite.html"*/'<!--\n  Generated template for the FabouritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>fabourite</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n<ion-header>\n	\n	<ion-toolbar *ngIf="showSearchbar">\n		<ion-searchbar  *ngIf="showSearchbar"\n	[showCancelButton]="true"\n  [(ngModel)]="myInput"\n  (input)="search($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n	</ion-toolbar>\n	\n	<ion-navbar *ngIf="!showSearchbar">\n	<ion-title style="text-align: center;">Favourites</ion-title>\n	<ion-buttons end >\n		<button  ion-button icon-only (click)="toggleSearchbar()">\n		  <ion-icon name="search"></ion-icon>\n		</button>\n	  </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 category-card">\n		<ion-card-content>\n			<ion-list class="fab-list">\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/img-1.jpg" alt="">\n						<a href="" class="fab-icon"><ion-icon name="heart"></ion-icon></a>\n					</ion-thumbnail>\n					<h2>Sahibinden Satılık - yatırımlık 1.500t kiracılı 2+1 465.000tl</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/img-1.jpg" alt="">\n						<a href="" class="fab-icon"><ion-icon name="heart"></ion-icon></a>\n					</ion-thumbnail>\n					<h2>Sahibinden Satılık - yatırımlık 1.500t kiracılı 2+1 465.000tl</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/img-1.jpg" alt="">\n						<a href="" class="fab-icon"><ion-icon name="heart"></ion-icon></a>\n					</ion-thumbnail>\n					<h2>Sahibinden Satılık - yatırımlık 1.500t kiracılı 2+1 465.000tl</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/img-1.jpg" alt="">\n						<a href="" class="fab-icon"><ion-icon name="heart"></ion-icon></a>\n					</ion-thumbnail>\n					<h2>Sahibinden Satılık - yatırımlık 1.500t kiracılı 2+1 465.000tl</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/img-1.jpg" alt="">\n						<a href="" class="fab-icon"><ion-icon name="heart"></ion-icon></a>\n					</ion-thumbnail>\n					<h2>Sahibinden Satılık - yatırımlık 1.500t kiracılı 2+1 465.000tl</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/fabourite/fabourite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], FabouritePage);
    return FabouritePage;
}());

//# sourceMappingURL=fabourite.js.map

/***/ })

});
//# sourceMappingURL=23.js.map
webpackJsonp([10],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showSearchbar = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        //this.content.resize();
    };
    SearchPage.prototype.search = function (value) {
        console.log('here');
        console.log(this.myInput);
    };
    SearchPage.prototype.onCancel = function (value) {
        this.showSearchbar = !this.showSearchbar;
        this.myInput = '';
        console.log(this.myInput);
        console.log('cancel');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n	<ion-toolbar *ngIf="showSearchbar">\n		<ion-searchbar  *ngIf="showSearchbar"\n	[showCancelButton]="true"\n  [(ngModel)]="myInput"\n  (input)="search($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n	</ion-toolbar>\n	\n	<ion-navbar *ngIf="!showSearchbar">\n	<ion-title style="text-align: center;">Search</ion-title>\n	<ion-buttons end >\n		<button  ion-button icon-only (click)="toggleSearchbar()">\n		  <ion-icon name="search"></ion-icon>\n		</button>\n	  </ion-buttons>\n  </ion-navbar>\n  \n	  <!-- <ion-toolbar *ngIf="showSearchbar">\n		<ion-searchbar></ion-searchbar>\n	  </ion-toolbar> -->\n	  <!-- <ion-searchbar *ngIf="showSearchbar"\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar> -->\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 category-card">\n		<ion-card-content>\n			<ion-list class="fab-list">\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/vehicle-1.jpg" alt="">\n					</ion-thumbnail>\n					<h2>Citroen C5 Otomatik 131.000 km Sahibinden - Acil -</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/vehicle-2.jpg" alt="">\n					</ion-thumbnail>\n					<h2>Citroen C5 Otomatik 131.000 km Sahibinden - Acil -</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/vehicle-3.jpg" alt="">\n					</ion-thumbnail>\n					<h2>Citroen C5 Otomatik 131.000 km Sahibinden - Acil -</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/vehicle-4.jpg" alt="">\n					</ion-thumbnail>\n					<h2>Citroen C5 Otomatik 131.000 km Sahibinden - Acil -</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n				<ion-item>\n					<ion-thumbnail item-start>\n						<img src="assets/imgs/vehicle-5.jpg" alt="">\n					</ion-thumbnail>\n					<h2>Citroen C5 Otomatik 131.000 km Sahibinden - Acil -</h2>\n					<b>54,500 TL</b>\n					<p><span>Ad no :</span>  528271812</p>\n					<p><span>Ad Date :</span> 13 February 2018</p>\n				</ion-item>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
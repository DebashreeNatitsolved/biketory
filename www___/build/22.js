webpackJsonp([22],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilterPageModule = /** @class */ (function () {
    function FilterPageModule() {
    }
    FilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
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
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="m-0 w-100">\n		<ion-card-content class="options-wrap">\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Category</ion-label>\n					<ion-select>\n						<ion-option value="">All</ion-option>\n						<ion-option value="">Cars (720)</ion-option>\n						<ion-option value="">Suv (897)</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<h6 class="sub-title">Options</h6>\n			<p class="heading">Address</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>City</ion-label>\n					<ion-select>\n						<ion-option value="a">Algiria</ion-option>\n						<ion-option value="b">Istanbul</ion-option>\n						<ion-option value="c">Bartin</ion-option>\n						<ion-option value="d">Bolu</ion-option>\n						<ion-option value="e">Hatay</ion-option>\n						<ion-option value="f">Kars</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Town</ion-label>\n					<ion-select>\n						<ion-option value="ada">Adalar</ion-option>\n						<ion-option value="alm">Almanya</ion-option>\n						<ion-option value="ang">Angola</ion-option>\n						<ion-option value="fat">Fatih</ion-option>\n						<ion-option value="ulu">Ulus</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Price</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Min TL</ion-label>\n					<ion-select>\n						<ion-option value="">$1</ion-option>\n						<ion-option value="">$2</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Max TL</ion-label>\n					<ion-select>\n						<ion-option value="">$10</ion-option>\n						<ion-option value="">$11</ion-option>\n					</ion-select>\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Currency</ion-label>\n					<ion-select>\n						<ion-option value="u">USD</ion-option>\n						<ion-option value="e">EUR</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Ad Date</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>All</ion-label>\n					<ion-select>\n						<ion-option value="24">Last 24 Hrs</ion-option>\n						<ion-option value="3">Last 3 Hrs</ion-option>\n						<ion-option value="7">Last 7 Hrs</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-12 class="pl-0">\n						<ion-item class="custom-checkbox">\n							<ion-label>Ads with Photo</ion-label>\n							<ion-checkbox color="dark"></ion-checkbox>\n						</ion-item>\n						<ion-item class="custom-checkbox">\n							<ion-label>Ads with Video</ion-label>\n							<ion-checkbox color="dark"></ion-checkbox>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n			\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block color="danger">Cancel</button></ion-col>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block>Apply</button></ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=22.js.map
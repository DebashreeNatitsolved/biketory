webpackJsonp([12],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchGearPageModule", function() { return SearchGearPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_gear__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchGearPageModule = /** @class */ (function () {
    function SearchGearPageModule() {
    }
    SearchGearPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_gear__["a" /* SearchGearPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_gear__["a" /* SearchGearPage */]),
            ],
        })
    ], SearchGearPageModule);
    return SearchGearPageModule;
}());

//# sourceMappingURL=search-gear.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGearPage; });
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
 * Generated class for the SearchGearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchGearPage = /** @class */ (function () {
    function SearchGearPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SearchGearPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchGearPage');
    };
    SearchGearPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-gear',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search-gear/search-gear.html"*/'<!--\n  Generated template for the SearchGearPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-1 class="p-0">\n					<ion-buttons start>\n						<button ion-button><ion-icon name="arrow-back"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n				<ion-col col-7 class="p-0">\n					<p class="mb-0 text-center m-t-5 title">All Gears<span>Street - 360, California C.A <ion-icon name="arrow-down"></ion-icon></span></p>\n				</ion-col>\n				<ion-col col-4 class="p-0">\n					<ion-buttons end>\n						<button ion-button icon-only><ion-icon name="search"></ion-icon></button>\n						<button ion-button icon-only><ion-icon name="cart"></ion-icon></button>\n						<button ion-button icon-only><ion-icon name="more"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n	<ion-grid class="filter-bar p-0">\n		<ion-row>\n			<ion-col col-6 class="p-0"><button ion-button block color="light"><img src="../../assets/imgs/icon-filter.png" alt=""> Filter</button></ion-col>\n			<ion-col col-6 class="p-0"><button ion-button block color="light"><img src="../../assets/imgs/icon-sort.png" alt=""> Sort By</button></ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-header>\n\n\n<ion-content class="flex-wrapper">\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-1.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-2.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-2.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-1.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-1.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder">\n		<img src="assets/imgs/helmet-2.jpg" alt="">\n		<ion-card-content>\n			<h6>Royal Enfield helmet</h6>\n			<p class="price">$300.00</p>\n		</ion-card-content>\n		<ion-card-content class="button-holder">\n			<ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-6 class="pl-0"><button block ion-button color="primary">Add to cart</button></ion-col>\n					<ion-col col-6 class="pr-0"><button block ion-button color="dark">View Details</button></ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<ion-title>Footer</ion-title>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search-gear/search-gear.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SearchGearPage);
    return SearchGearPage;
}());

//# sourceMappingURL=search-gear.js.map

/***/ })

});
//# sourceMappingURL=12.js.map
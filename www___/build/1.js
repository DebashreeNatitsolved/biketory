webpackJsonp([1],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPageModule", function() { return SortPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SortPageModule = /** @class */ (function () {
    function SortPageModule() {
    }
    SortPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sort__["a" /* SortPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sort__["a" /* SortPage */]),
            ],
        })
    ], SortPageModule);
    return SortPageModule;
}());

//# sourceMappingURL=sort.module.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
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
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortPage = /** @class */ (function () {
    function SortPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SortPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SortPage');
    };
    SortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sort',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sort/sort.html"*/'<!--\n  Generated template for the SortPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sort</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="m-0 w-100">\n		<ion-card-content class="options-wrap">\n			<p class="heading">Keyword or Ad Number</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-input type="text" value=""></ion-input>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Sort By</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Options</ion-label>\n					<ion-select>\n						<ion-option value="d">Decreasing by price</ion-option>\n						<ion-option value="i">Increasing by price</ion-option>\n						<ion-option value="aa">By address (A-Z)</ion-option>\n						<ion-option value="zz">By address (Z-A)</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block color="danger">Cancel</button></ion-col>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block>Apply</button></ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sort/sort.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
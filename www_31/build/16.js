webpackJsonp([16],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAdOnePageModule", function() { return PostAdOnePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_ad_one__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostAdOnePageModule = /** @class */ (function () {
    function PostAdOnePageModule() {
    }
    PostAdOnePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_ad_one__["a" /* PostAdOnePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_ad_one__["a" /* PostAdOnePage */]),
            ],
        })
    ], PostAdOnePageModule);
    return PostAdOnePageModule;
}());

//# sourceMappingURL=post-ad-one.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdOnePage; });
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
 * Generated class for the PostAdOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostAdOnePage = /** @class */ (function () {
    function PostAdOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostAdOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostAdOnePage');
    };
    PostAdOnePage.prototype.steptwo = function () {
        this.navCtrl.setRoot('PostAdTwoPage');
    };
    PostAdOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-ad-one',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-one/post-ad-one.html"*/'<!--\n  Generated template for the PostAdOnePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Post Ads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form>\n		<ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n			<ion-card-content>\n				<ion-grid class="p-0">\n					<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n						<ul class="step-holder">\n							<li class="active"><p>Basic Info</p></li>\n							<li><p>Ad Details</p></li>\n							<li><p>Add Photos</p></li>\n						</ul>\n					</ion-col>\n					</ion-row>\n				</ion-grid>\n				<h6 class="m-b-10">Basic Info</h6>\n				<ion-list class="post-fields">\n					<ion-item>\n						<ion-input type="text" placeholder="Vehicle Brand"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Ad Id"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Ad Posted Date"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Business Name"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Owner Name"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Address"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Nearest Location"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Contact No."></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label>Type Of Ad</ion-label>\n						<ion-select>\n							<ion-option>Commercial</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-label>Choose Plan</ion-label>\n						<ion-select>\n							<ion-option>Gold</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-list>\n			</ion-card-content>\n		</ion-card>\n		<button ion-button icon-right block (click)="steptwo()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-one/post-ad-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PostAdOnePage);
    return PostAdOnePage;
}());

//# sourceMappingURL=post-ad-one.js.map

/***/ })

});
//# sourceMappingURL=16.js.map
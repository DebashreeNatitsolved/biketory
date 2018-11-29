webpackJsonp([15],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAdThreePageModule", function() { return PostAdThreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_ad_three__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostAdThreePageModule = /** @class */ (function () {
    function PostAdThreePageModule() {
    }
    PostAdThreePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_ad_three__["a" /* PostAdThreePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_ad_three__["a" /* PostAdThreePage */]),
            ],
        })
    ], PostAdThreePageModule);
    return PostAdThreePageModule;
}());

//# sourceMappingURL=post-ad-three.module.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdThreePage; });
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
 * Generated class for the PostAdThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostAdThreePage = /** @class */ (function () {
    function PostAdThreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostAdThreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostAdThreePage');
    };
    PostAdThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-ad-three',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-three/post-ad-three.html"*/'<!--\n  Generated template for the PostAdThreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Post Ads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form>\n		<ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n			<ion-card-content>\n				<ion-grid class="p-0">\n					<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n						<ul class="step-holder">\n							<li class="active"><p>Basic Info</p></li>\n							<li class="active"><p>Ad Details</p></li>\n							<li class="active"><p>Add Photos</p></li>\n						</ul>\n					</ion-col>\n					</ion-row>\n				</ion-grid>\n				<h6 class="m-b-10">Add Photos</h6>\n				<ul class="up-photo">\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<img src="assets/imgs/upload.jpg" alt="">\n							<p>Upload  Photo</p>\n						</a>\n					</li>\n					<li>\n						<a href="">\n							<div class="icon" style="margin-top:9px; font-size:2.1rem"><ion-icon name="add-circle"></ion-icon></div>\n							<p>Add More</p>\n						</a>\n					</li>\n				</ul>\n\n\n			</ion-card-content>\n		</ion-card>\n		<button ion-button block (click)="stepthree()">Submit</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-three/post-ad-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PostAdThreePage);
    return PostAdThreePage;
}());

//# sourceMappingURL=post-ad-three.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
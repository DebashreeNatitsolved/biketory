webpackJsonp([14],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostAdTwoPageModule", function() { return PostAdTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_ad_two__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostAdTwoPageModule = /** @class */ (function () {
    function PostAdTwoPageModule() {
    }
    PostAdTwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__post_ad_two__["a" /* PostAdTwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__post_ad_two__["a" /* PostAdTwoPage */]),
            ],
        })
    ], PostAdTwoPageModule);
    return PostAdTwoPageModule;
}());

//# sourceMappingURL=post-ad-two.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAdTwoPage; });
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
 * Generated class for the PostAdTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostAdTwoPage = /** @class */ (function () {
    function PostAdTwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PostAdTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PostAdTwoPage');
    };
    PostAdTwoPage.prototype.stepthree = function () {
        this.navCtrl.setRoot('PostAdThreePage');
    };
    PostAdTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-post-ad-two',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-two/post-ad-two.html"*/'<!--\n  Generated template for the PostAdTwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Post Ads</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<form>\n		<ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n			<ion-card-content>\n				<ion-grid class="p-0">\n					<ion-row>\n					<ion-col col-12 class="pl-0 pr-0">\n						<ul class="step-holder">\n							<li class="active"><p>Basic Info</p></li>\n							<li class="active"><p>Ad Details</p></li>\n							<li><p>Add Photos</p></li>\n						</ul>\n					</ion-col>\n					</ion-row>\n				</ion-grid>\n				<h6 class="m-b-10">Ad Details</h6>\n				<ion-list class="post-fields m-b-10">\n					<ion-item>\n						<ion-input type="text" placeholder="Brand"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Series"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Model"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label>Year</ion-label>\n						<ion-select>\n							<ion-option>2000</ion-option>\n							<ion-option>2001</ion-option>\n							<ion-option>2003</ion-option>\n							<ion-option>2004</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Gear"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label>Fuel</ion-label>\n						<ion-select>\n							<ion-option>Petrol</ion-option>\n							<ion-option>Diesel</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="KM"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Case Type"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Engine Power"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Displacement"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Traction"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Color"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label>Guarantee</ion-label>\n						<ion-select>\n							<ion-option>1 year</ion-option>\n							<ion-option>2 year</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Nationality"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-input type="text" placeholder="Kimden"></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label>Swap</ion-label>\n						<ion-select>\n							<ion-option>1 year</ion-option>\n							<ion-option>2 year</ion-option>\n						</ion-select>\n					</ion-item>\n					<ion-item>\n						<ion-label>Situation</ion-label>\n						<ion-select>\n							<ion-option>1 year</ion-option>\n							<ion-option>2 year</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-list>\n				<h6 class="m-b-10">Features</h6>\n				<ion-grid class="p-0">\n					<ion-row>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>ABC</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Hill Start Assist</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>ABS</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Night Station</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>ASR ESP / VSA</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Separation from Strip </ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Airmatic</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Lane Change Assistant</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>EDL</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Airbag (Driver)</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>EBA</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Airbag (Passenger)</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>EBD</ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n						<ion-col col-6 class="pl-0">\n							<ion-item class="custom-checkbox">\n								<ion-label>Airbag (Side) Airbag (Knee) </ion-label>\n								<ion-checkbox color="dark"></ion-checkbox>\n							</ion-item>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</ion-card-content>\n		</ion-card>\n		<button ion-button icon-right block (click)="stepthree()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/post-ad-two/post-ad-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PostAdTwoPage);
    return PostAdTwoPage;
}());

//# sourceMappingURL=post-ad-two.js.map

/***/ })

});
//# sourceMappingURL=14.js.map
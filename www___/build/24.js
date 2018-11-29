webpackJsonp([24],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
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
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="grey-bg">\n	<div class="big-banner">\n		<div class="top">\n			<ion-row padding>\n				<ion-col col-9>\n					<div class="arrow-back"><ion-icon name="arrow-back"></ion-icon></div>\n				</ion-col>\n				<ion-col col-3>\n					<div class="fav"><ion-icon name="heart"></ion-icon></div>\n					<div class="share"><ion-icon ios="ios-share" md="md-share"></ion-icon></div>\n				</ion-col>\n			</ion-row>\n		</div>\n		<img src="../../assets/imgs/big-banner.png" alt="" />\n	</div>\n	<div class="detail-box">\n		<div class="user">\n			<div class="avatar">\n				<img src="../../assets/imgs/avtar.png" alt="" />		\n			</div>\n			<div class="name">\n				<h2>John Doe</h2>\n				<p>Ad posted 7 days ago <span><button ion-button round block>View Profile</button></span></p>\n			</div>\n		</div>\n		<div class="desc">\n			<div class="price">\n				<h2>$30,000.00</h2>\n				<p>2017 - Harley-Davidson-Fat-Bob, 22000 KM</p>\n			</div>\n			<div class="price new-price pl-0 pr-0">\n				<ul>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-make.png" alt="" /></div>\n						<div class="txt">\n							<p>Make\n							<span>Harley-Davidson</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-model.png" alt="" /></div>\n						<div class="txt">\n							<p>Model\n							<span>Fat Bob</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-cal.png" alt="" /></div>\n						<div class="txt">\n							<p>Year\n							<span>2017</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-km.png" alt="" /></div>\n						<div class="txt">\n							<p>KM Driven\n							<span>22000</span>\n							</p>\n						</div>\n					</li>\n				</ul>\n			</div>\n			<div class="price">\n			<div class="map"><img src="../../assets/imgs/map.jpg" alt="" /></div>\n			<h3>4 Km Away</h3>\n			<p>Citycenter, Salt lake City, California,</p>\n			</div>\n			<div style="height: 60px;"></div>\n		</div>\n	</div>\n\n	<div class="bottom-part">\n		<ul>\n			<li><ion-icon name="call"></ion-icon><a href=""> Call Owner</a></li>\n			<li><ion-icon name="mail"></ion-icon><a href=""> Message Owner</a></li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=24.js.map
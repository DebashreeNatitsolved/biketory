webpackJsonp([32],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdDetailsPageModule", function() { return AdDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ad_details__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdDetailsPageModule = /** @class */ (function () {
    function AdDetailsPageModule() {
    }
    AdDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ad_details__["a" /* AdDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ad_details__["a" /* AdDetailsPage */]),
            ],
        })
    ], AdDetailsPageModule);
    return AdDetailsPageModule;
}());

//# sourceMappingURL=ad-details.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdDetailsPage; });
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
 * Generated class for the AdDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdDetailsPage = /** @class */ (function () {
    function AdDetailsPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
    }
    AdDetailsPage.prototype.ionViewDidLoad = function () {
        this.menu.enable(true, 'loggedOutMenu');
        console.log('ionViewDidLoad AdDetailsPage');
    };
    AdDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ad-details',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/ad-details/ad-details.html"*/'<!--\n  Generated template for the AdDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ad Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="m-0 w-100 m-b-10">\n		<ion-slides class="details-slider">\n			<ion-slide style="background-image:url(\'../assets/imgs/vehicle-3.jpg\'); background-size: cover; background-repeat: no-repeat; background-position: top center">\n				<div class="tag"><img src="../assets/imgs/avtar.png" alt=""></div>\n			</ion-slide>\n			<ion-slide style="background-image:url(\'../assets/imgs/vehicle-3.jpg\'); background-size: cover; background-repeat: no-repeat; background-position: top center">\n				<div class="tag"><img src="../assets/imgs/avtar.png" alt=""></div>\n			</ion-slide>\n			<ion-slide style="background-image:url(\'../assets/imgs/vehicle-3.jpg\'); background-size: cover; background-repeat: no-repeat; background-position: top center">\n				<div class="tag"><img src="../assets/imgs/avtar.png" alt=""></div>\n			</ion-slide>\n		</ion-slides>\n		\n		<h6 class="car-title">AK Car Rental 2018 Camaro Europe Version Full Rental</h6>\n		\n		<ul class="links">\n			<li><a href=""><ion-icon name="call"></ion-icon> Call</a></li>\n			<li><a href="">Burak Toker</a></li>\n			<li><a href=""><ion-icon name="mail"></ion-icon> Ask a Question</a></li>\n		</ul>\n		\n		<ul class="bredcumb mb-0 m-t-5">\n			<li>Vehicle</li>\n			<li>Rental Cars</li>\n			<li>Car</li>\n			<li>Chevrolet</li>\n		</ul>\n		<p class="text-center location m-b-10"><ion-icon name="pin"></ion-icon> İstanbul , Esenyurt , Asik Veysel Mh</p>\n		\n		<div class="prod-dtls">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6><p>Price</p></ion-col>\n					<ion-col col-6><span>788 TL</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>ID Numder</p></ion-col>\n					<ion-col col-6><span>500875264</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Ad Date</p></ion-col>\n					<ion-col col-6><span>18 February 2018</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Brand</p></ion-col>\n					<ion-col col-6><span>Chevrolet</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Model</p></ion-col>\n					<ion-col col-6><span>Carmaro</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Weekly Price</p></ion-col>\n					<ion-col col-6><span>8.000</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Monthly Price</p></ion-col>\n					<ion-col col-6><span>17,500</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Year</p></ion-col>\n					<ion-col col-6><span>2017</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Engine Volume</p></ion-col>\n					<ion-col col-6><span>1801 - 2000 cm3</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Gear</p></ion-col>\n					<ion-col col-6><span>Automatic</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Fuel</p></ion-col>\n					<ion-col col-6><span>Gasoline</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Case Type </p></ion-col>\n					<ion-col col-6><span>Coupe</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Deposit</p></ion-col>\n					<ion-col col-6><span>Pre-Provision</span></ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-6><p>Payment Shape</p></ion-col>\n					<ion-col col-6><span>Cash</span></ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n	</ion-card>\n	\n	<ion-card class="m-0 w-100 m-b-10">\n		<ion-segment [(ngModel)]="pet">\n		    <ion-segment-button value="details">Announcement Details </ion-segment-button>\n		    <ion-segment-button value="location">Location</ion-segment-button>\n		</ion-segment>\n		\n		<div [ngSwitch]="pet">\n			<ion-card-content *ngSwitchCase="\'details\'" class="card-content">\n				<h6 class="m-b-10">Explanation :</h6>\n			</ion-card-content>\n\n			<ion-card-content *ngSwitchCase="\'location\'" class="card-content">\n				<h6 class="m-b-10">Explanation :</h6>\n				<b>AK CAR RENTAL , D FOR OTHER CARS to visit our page, AK CAR RENTAL Contact: <span>0850 340 00 25</span> </b>\n				<p>Ut metus. Maecenas dapibus nibh eu est. Proin faucibus pharetra nibh. Integer aliquet tellus in felis. Quisque mi pee, imperdiet a, dapibus vel, bibendum rhoncus, nulla. Sed eu velit. Maecenas molestie, ipsum nec nonummy mattis, ipm lectus imperdiet nibh, sit amet accumsan nunc nunc et lorem. Quisque at augue. Donec elit ligula, pellentesque id, feugiat sed, malesuada a, turpis. Donec nunc quam, commodo ut, venenatis ut, feugiat quis, tortor. Nunc id risus vestibulum turpis facilisis fringilla. Pellentesque turpis ipsum, ultrices at, consequat sit amet, sollicitudin at, pede. Suspendisse potenti. Fusce eu ante sit amet lacus cursus tempor. Donec bibendum, metus nec tristique mollis, metus felis pellentesque sapien, eu mattis turpis lorem quis quam. In ligula nibh, varius quis, elementum sed, pellentesque, lectus. Praesent erat orci, hendrerit bibendum, tristique et, consectetuer eget, elit. Mauris vel mi at dui commodo elementum.</p>\n				<p>Nunc id risus vestibulum turpis facilisis fringilla. Pellentesque turpis ipsum, ultrices at, consequat sit amet, sollicitudin at, pede. Suspendisse potenti. Fusce eu ante sit amet lacus cursus tempor. Donec bibendum, metus nec trique mollis.</p>\n				<h5 class="report text-center"><ion-icon name="flag"></ion-icon> Report this ad</h5>\n			</ion-card-content>\n		</div>\n	</ion-card>\n	<button ion-button block color="dark">Technical Specifications</button>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/ad-details/ad-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
    ], AdDetailsPage);
    return AdDetailsPage;
}());

//# sourceMappingURL=ad-details.js.map

/***/ })

});
//# sourceMappingURL=32.js.map
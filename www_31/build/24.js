webpackJsonp([24],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(329);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
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
    function DetailsPage(builder, navCtrl, alertCtrl, navParams, bikeService, storage, loadingCtrl) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.bikeService = bikeService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.id = this.navParams.get('id');
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DetailsPage');
        var dataUserDet = {
            "id": this.id
        };
        this.bikeService.getbikedetails(dataUserDet).subscribe(function (res) {
            _this.details34 = res.product;
            console.log(_this.details34);
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'Bike not fetch from your account!',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar>\n		<ion-buttons start>\n			<!-- <button ion-button icon-only>\n				<ion-icon name="arrow-back"></ion-icon>\n			</button> -->\n		</ion-buttons>\n		<ion-title>Details</ion-title>\n		<ion-buttons end>\n			<button ion-button icon-only>\n				<ion-icon name="heart"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-slides pager>\n	\n		<ion-slide>\n			<div class="big-banner">\n				<!-- <div class="top">\n					<ion-row padding>\n						<ion-col col-9>\n							<div class="arrow-back">\n								<ion-icon name="arrow-back"></ion-icon>\n							</div>\n						</ion-col>\n						<ion-col col-3>\n							<div class="fav">\n								<ion-icon name="heart"></ion-icon>\n							</div>\n							<div class="share">\n								<ion-icon ios="ios-share" md="md-share"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</div> -->\n				<img src="../../assets/imgs/avtar.png" alt="" />\n			</div>\n			<!-- <h2>Slide 1</h2> -->\n		</ion-slide>\n	\n		<ion-slide>\n			<div class="big-banner">\n				<!-- <div class="top">\n					<ion-row padding>\n						<ion-col col-9>\n							<div class="arrow-back">\n								<ion-icon name="arrow-back"></ion-icon>\n							</div>\n						</ion-col>\n						<ion-col col-3>\n							<div class="fav">\n								<ion-icon name="heart"></ion-icon>\n							</div>\n							<div class="share">\n								<ion-icon ios="ios-share" md="md-share"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</div> -->\n				<img src="../../assets/imgs/avtar.png" alt="" />\n			</div>\n			<!-- <h2>Slide 2</h2> -->\n		</ion-slide>\n	\n	</ion-slides>\n	\n	<div class="detail-box">\n		<div class="user">\n			<div class="pro-area">\n				<div class="avatar">\n					<img src="../../assets/imgs/avtar.png" alt="" />\n				</div>\n				<div class="name">\n					<!-- <h2 *ngIf="details.reg_number">{{details.reg_number}}</h2> -->\n					<p>Ad posted 7 days ago{{details34.reg_number }} </p>\n				</div>\n			</div>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-6>\n						<button ion-button round block>Request</button>\n					</ion-col>\n					<ion-col col-6>\n						<button ion-button outline round block> Message To Owner</button>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</div>\n		\n		\n		\n		<div class="desc">\n			<div class="price">\n				<h2>$30,000.00</h2>\n				<p>2017 - Harley-Davidson-Fat-Bob, 22000 KM</p>\n			</div>\n			<div class="price new-price pl-0 pr-0">\n				<ul>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-make.png" alt="" /></div>\n						<div class="txt">\n							<p>Make\n							<span>Harley-Davidson</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-model.png" alt="" /></div>\n						<div class="txt">\n							<p>Model\n							<span>Fat Bob</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-cal.png" alt="" /></div>\n						<div class="txt">\n							<p>Year\n							<span>2017</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon"><img src="../../assets/imgs/icon-km.png" alt="" /></div>\n						<div class="txt">\n							<p>KM Driven\n							<span>22000</span>\n							</p>\n						</div>\n					</li>\n					<li>\n						<div class="icon">\n							<img src="../../assets/imgs/iocn-4.png" alt="" />\n						</div>\n						<div class="txt">\n							<p>Category:</p>\n						</div>\n					</li>\n				</ul>\n			</div>\n			<div class="price">\n				<h5> <b>Details</b> </h5>\n				<ion-item class="pl-0">\n					 Reg Number:\n					<div class="m-0" item-end>ghjgh</div>\n				</ion-item>\n				<ion-item class="pl-0">\n					 CC:\n					<div class="m-0" item-end>ghjgh</div>\n				</ion-item>\n				<ion-item class="pl-0">\n					 Fuel Type:\n					<div class="m-0" item-end>Petrol</div>\n				</ion-item>\n				<ion-item class="pl-0">\n					 No Of Owner:\n					<div class="m-0" item-end>0</div>\n				</ion-item>\n\n			</div>\n			<div class="price">\n			<div class="map"><img src="../../assets/imgs/map.jpg" alt="" /></div>\n			<h3>4 Km Away</h3>\n			<p>Citycenter, Salt lake City, California,</p>\n			</div>\n			<div style="height: 60px;">\n				<!-- <ion-grid>\n					<ion-row>\n						<ion-col col-6>\n							<button ion-button round block>Call Owner</button>\n						</ion-col>\n						<ion-col col-6>\n							<button ion-button outline round block> Message Owner</button>\n						</ion-col>\n					</ion-row>\n				</ion-grid> -->\n			</div>\n		</div>\n		\n	</div>\n\n	<!-- <div class="bottom-part">\n		<ul>\n			<li><ion-icon name="call"></ion-icon><a href=""> Call Owner</a></li>\n			<li><ion-icon name="mail"></ion-icon><a href=""> Message Owner</a></li>\n		</ul>\n	</div> -->\n	\n</ion-content>\n<!-- <ion-footer>\n	<ion-toolbar>\n	  <ion-title>Footer</ion-title>\n	</ion-toolbar>\n  </ion-footer> -->\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _g || Object])
    ], DetailsPage);
    return DetailsPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=details.js.map

/***/ })

});
//# sourceMappingURL=24.js.map
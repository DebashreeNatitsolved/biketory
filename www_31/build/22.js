webpackJsonp([22],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(331);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */]),
            ],
        })
    ], FilterPageModule);
    return FilterPageModule;
}());

//# sourceMappingURL=filter.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
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
    function FilterPage(builder, navCtrl, navParams, authService, loadingCtrl, menu, myApp, storage, events) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.myApp = myApp;
        this.storage = storage;
        this.events = events;
        events.publish('hideFooter', { isHidden: false });
        this.form = builder.group({
            'ser_val': ['', ''],
            'make_id': ['', ''],
            'model_id': ['', ''],
            'min_price': ['', ''],
            'max_price': ['', ''],
            'min_cc': ['', ''],
            'max_cc': ['', ''],
            'min_year': ['', ''],
            'max_year': ['', ''],
            'min_milage': ['', ''],
            'max_milage': ['', ''],
            'color': ['', ''],
            'post_by': ['', ''],
            'fuel_tpe': ['', ''],
            'postal_code': ['', '']
        });
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('searchdata')) {
            var serchdata = JSON.parse(localStorage.getItem('searchdata'));
            console.log(serchdata);
            this.form.controls['ser_val'].setValue(serchdata.ser_val);
            this.form.controls['make_id'].setValue(serchdata.make_id);
            this.form.controls['model_id'].setValue(serchdata.model_id);
            this.form.controls['min_price'].setValue(serchdata.min_price);
            this.form.controls['max_price'].setValue(serchdata.max_price);
            this.form.controls['min_cc'].setValue(serchdata.min_cc);
            this.form.controls['max_cc'].setValue(serchdata.max_cc);
            this.form.controls['min_year'].setValue(serchdata.min_year);
            this.form.controls['max_year'].setValue(serchdata.max_year);
            this.form.controls['min_milage'].setValue(serchdata.min_milage);
            this.form.controls['max_milage'].setValue(serchdata.max_milage);
            this.form.controls['color'].setValue(serchdata.color);
            this.form.controls['post_by'].setValue(serchdata.post_by);
            this.form.controls['fuel_tpe'].setValue(serchdata.fuel_tpe);
            this.form.controls['postal_code'].setValue(serchdata.postal_code);
        }
        this.authService.getData('products/categories.json').then(function (result) {
            //console.log(result)
            // this.details = JSON.stringify(result.category);
            //console.log(this.details)
            _this.category = result.category;
            _this.model = result.model;
            _this.make = result.make;
            _this.colour = result.colour;
            _this.engin = result.engin;
            // console.log(this.engin);
            // console.log(this.category)
        }, function (err) {
            console.log(err);
            // Error log
        });
        console.log('ionViewDidLoad FilterPage');
    };
    FilterPage.prototype.bikesearch = function (frmval) {
        console.log(frmval);
        localStorage.setItem('searchdata', JSON.stringify(frmval));
        this.navCtrl.push('SearchVehiclePage');
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/filter/filter.html"*/'<!--\n  Generated template for the FilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Filter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="m-0 w-100">\n		<ion-card-content class="options-wrap">\n			<!-- <ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Category</ion-label>\n					<ion-select>\n						<ion-option value="">All</ion-option>\n						<ion-option value="">Cars (720)</ion-option>\n						<ion-option value="">Suv (897)</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list> -->\n			<form [formGroup]="form" (ngSubmit)="bikesearch(form.value)" #BkForm="ngForm">\n			<p class="heading">Keyword Serch</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					\n			<ion-input type="text" value="" formControlName="ser_val"  placeholder="Search By Keyword"></ion-input>\n			</ion-item>\n			</ion-list>\n			<h6 class="sub-title">Options</h6>\n			<p class="heading">Postal Code</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>PIN</ion-label>\n			<ion-input type="text" value="" formControlName="postal_code"  placeholder="Search By Postal Code"></ion-input>\n			</ion-item>\n			</ion-list>\n			<!-- <p class="heading">Distance</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>PIN</ion-label>\n			<ion-input type="text" value=""  placeholder="Search By Postal Code"></ion-input>\n			</ion-item>\n			</ion-list> -->\n			<p class="heading">Make</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Make</ion-label>\n					<ion-select formControlName="make_id">\n							<ion-option *ngFor="let item of make" value="{{item.id}}">{{item.make_name}}</ion-option>\n						\n					</ion-select>\n				</ion-item>\n				\n			</ion-list>\n			<p class="heading">Model</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Model</ion-label>\n					<ion-select formControlName="model_id">\n							<ion-option  *ngFor="let item of model" value="{{item.id}}">{{item.model_name}}</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Price</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Min </ion-label>\n					<ion-input type="text" value="" formControlName="min_price"  placeholder="Search By Min price"></ion-input>\n					<!-- <ion-select>\n						<ion-option value="">$1</ion-option>\n						<ion-option value="">$2</ion-option>\n					</ion-select> -->\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Max TL</ion-label>\n					<ion-input type="text" value="" formControlName="max_price"  placeholder="Search By Max Price"></ion-input>\n					<!-- <ion-select>\n						<ion-option value="">$10</ion-option>\n						<ion-option value="">$11</ion-option>\n					</ion-select> -->\n				</ion-item>\n				<!-- <ion-item class="pl-0">\n					<ion-label>Currency</ion-label>\n					<ion-select>\n						<ion-option value="u">USD</ion-option>\n						<ion-option value="e">EUR</ion-option>\n					</ion-select>\n				</ion-item> -->\n			</ion-list>\n			<p class="heading">Engine Capacity</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Min CC</ion-label>\n					<ion-input type="text" value="" formControlName="min_cc"  placeholder="Search By Min price"></ion-input>\n					\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Max CC</ion-label>\n					<ion-input type="text" value="" formControlName="max_cc"  placeholder="Search By Max Price"></ion-input>\n				</ion-item>\n				\n			</ion-list>\n\n			<p class="heading">Make year</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Min </ion-label>\n					<ion-input type="text" value="" formControlName="min_year"  placeholder="Search By Min price"></ion-input>\n					\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Max </ion-label>\n					<ion-input type="text" value="" formControlName="max_year"  placeholder="Search By Max Price"></ion-input>\n				</ion-item>\n				\n			</ion-list>\n			<p class="heading">Mileage</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Min </ion-label>\n					<ion-input type="text" value="" formControlName="min_milage" placeholder="Search By Min price"></ion-input>\n					\n				</ion-item>\n				<ion-item class="pl-0">\n					<ion-label>Max </ion-label>\n					<ion-input type="text" value="" formControlName="max_milage"  placeholder="Search By Max Price"></ion-input>\n				</ion-item>\n				\n			</ion-list>\n\n			<p class="heading">Color</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Color</ion-label>\n					<ion-select formControlName="color">\n							<ion-option *ngFor="let item of colour" value="{{item.id}}">{{item.name}}</ion-option>\n						  </ion-select>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Post By</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Post By</ion-label>\n					<ion-select formControlName="post_by">\n						<ion-option value="P">Private</ion-option>\n						<ion-option value="T">Trade</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<p class="heading">Fuel Type</p>\n			<ion-list class="m-b-10">\n				<ion-item class="pl-0">\n					<ion-label>Fuel Type</ion-label>\n					<ion-select formControlName="fuel_tpe">\n							<ion-option value="">Any</ion-option>\n						<ion-option value="P">Petrol</ion-option>\n						<ion-option value="D">Diesel</ion-option>\n						<ion-option value="E">Electric</ion-option>\n					</ion-select>\n				</ion-item>\n			</ion-list>\n			<p><button ion-button round >SEARCH</button></p>\n			</form>\n			<!-- <ion-grid class="p-0">\n				<ion-row>\n					<ion-col col-12 class="pl-0">\n						<ion-item class="custom-checkbox">\n							<ion-label>Ads with Photo</ion-label>\n							<ion-checkbox color="dark"></ion-checkbox>\n						</ion-item>\n						<ion-item class="custom-checkbox">\n							<ion-label>Ads with Video</ion-label>\n							<ion-checkbox color="dark"></ion-checkbox>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n			</ion-grid> -->\n			\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block color="danger">Cancel</button></ion-col>\n				<ion-col col-6 class="pt-0 pb-0"><button ion-button block>Apply</button></ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/filter/filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ })

});
//# sourceMappingURL=22.js.map
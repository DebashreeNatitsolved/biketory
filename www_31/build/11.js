webpackJsonp([11],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchVehiclePageModule", function() { return SearchVehiclePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_vehicle__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchVehiclePageModule = /** @class */ (function () {
    function SearchVehiclePageModule() {
    }
    SearchVehiclePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_vehicle__["a" /* SearchVehiclePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_vehicle__["a" /* SearchVehiclePage */]),
            ],
        })
    ], SearchVehiclePageModule);
    return SearchVehiclePageModule;
}());

//# sourceMappingURL=search-vehicle.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchVehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(200);
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
 * Generated class for the SearchVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchVehiclePage = /** @class */ (function () {
    function SearchVehiclePage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.bikeService = bikeService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.myApp = myApp;
        this.showSearchbar = false;
        this.sortby = 0;
    }
    SearchVehiclePage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('searchdata')) {
            this.searchdata = JSON.parse(localStorage.getItem('searchdata'));
            this.searchbikelist(this.searchdata);
        }
        else {
            this.searchdata = '';
            this.searchbikelist(this.searchdata);
        }
        console.log(this.searchdata);
        console.log('ionViewDidLoad SearchVehiclePage');
    };
    SearchVehiclePage.prototype.searchbikelist = function (serdata) {
        // let user_details:any =  JSON.parse(localStorage.getItem('userData'));
        // console.log(user_details)
        // let login_user = user_details.id;
        // let dataUserDet = {
        //   "uid": login_user
        var _this = this;
        // };
        this.bikeService.searchbikelist(serdata).subscribe(function (res) {
            var details = res;
            //console.log(res)
            if (details.Ack == 1) {
                _this.bikelists = details.bikes;
                _this.imagelink = details.image_link;
                console.log(_this.bikelists);
                _this.no_bikelists = 0;
            }
            else {
                _this.no_bikelists = 1;
            }
        }, function (err) {
            //console.log(err);
            var alert = _this.alertCtrl.create({
                title: 'No bike is added in your account!',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    SearchVehiclePage.prototype.bikedetails = function (id) {
        console.log(id);
        this.navCtrl.push('DetailsPage', { 'id': id });
    };
    SearchVehiclePage.prototype.filtr = function () {
        console.log('filtr');
        this.navCtrl.push('FilterPage');
    };
    SearchVehiclePage.prototype.sort = function () {
        if (this.sortby == 1) {
            this.sortby = 0;
        }
        else {
            this.sortby = 1;
        }
        this.searchdata.sort_by = this.sortby;
        //this.navCtrl.push('SortPage');
        this.searchbikelist(this.searchdata);
    };
    SearchVehiclePage.prototype.toggleSearchbar = function () {
        this.showSearchbar = !this.showSearchbar;
        //this.content.resize();
    };
    SearchVehiclePage.prototype.search = function (value) {
        console.log('here');
        console.log(this.myInput);
    };
    SearchVehiclePage.prototype.onCancel = function (value) {
        this.showSearchbar = !this.showSearchbar;
        this.myInput = '';
        console.log(this.myInput);
        console.log('cancel');
    };
    SearchVehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-vehicle',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search-vehicle/search-vehicle.html"*/'<!--\n  Generated template for the SearchVehiclePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n  <ion-navbar>\n    <ion-title>search-vehicle</ion-title>\n  </ion-navbar>\n\n</ion-header>-->\n\n<ion-header>\n	<!-- <ion-toolbar>\n		<ion-grid class="p-0">\n			<ion-row>\n				<ion-col col-1 class="p-0">\n					<ion-buttons start>\n						<button ion-button><ion-icon name="arrow-back"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n				<ion-col col-7 class="p-0">\n					<p class="mb-0 text-center m-t-5 title">All Bikes<span>Street - 360, California C.A <ion-icon name="arrow-down"></ion-icon></span></p>\n				</ion-col>\n				<ion-col col-4 class="p-0">\n					<ion-buttons end>\n						<button ion-button icon-only><ion-icon name="search"></ion-icon></button>\n						<button ion-button icon-only><ion-icon name="cart"></ion-icon></button>\n						<button ion-button icon-only><ion-icon name="more"></ion-icon></button>\n					</ion-buttons>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar> -->\n	<!--<ion-tabs class="tabs-icon-text">\n      <ion-tab tabIcon="funnel" tabTitle="Filter"></ion-tab>\n      <ion-tab tabIcon="reorder" tabTitle="Sort"></ion-tab>\n      <ion-tab tabIcon="bookmark" tabTitle="Saved Search"></ion-tab>\n    </ion-tabs>-->\n    <!--<ul class="tablist">\n		<li><a href="javascript:void(0)" (click)="filtr()"><ion-icon name="funnel"></ion-icon> <span>Filter</span></a></li>\n		<li><a href="javascript:void(0)" (click)="sort()"><ion-icon name="reorder"></ion-icon> <span>Sort</span></a></li>\n		<li><a href=""><ion-icon name="bookmark"></ion-icon> <span>Saved Search</span></a></li>\n	</ul>-->\n	<!--<ion-toolbar no-border-top>\n		<ion-segment [(ngModel)]="pet">\n			<ion-segment-button value="puppies">Puppies</ion-segment-button>\n			<ion-segment-button value="kittens">Kittens</ion-segment-button>\n			<ion-segment-button value="ducklings">Ducklings</ion-segment-button>\n		</ion-segment>\n	</ion-toolbar>-->\n\n	<ion-toolbar *ngIf="showSearchbar">\n		<ion-searchbar  *ngIf="showSearchbar"\n	[showCancelButton]="true"\n  [(ngModel)]="myInput"\n  (input)="search($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n	</ion-toolbar>\n	\n	<ion-navbar *ngIf="!showSearchbar">\n	<ion-title style="text-align: center;">Bike search</ion-title>\n	<ion-buttons end >\n		<button  ion-button icon-only (click)="toggleSearchbar()">\n		  <ion-icon name="search"></ion-icon>\n		</button>\n		<button ion-button icon-only><ion-icon name="cart"></ion-icon></button>\n	  </ion-buttons>\n  </ion-navbar>\n	<ion-grid class="filter-bar p-0">\n		<ion-row>\n			<ion-col col-6 class="p-0"><button ion-button block color="light" (click)="filtr()"><img src="../../assets/imgs/icon-filter.png" alt=""> Filter</button></ion-col>\n			<ion-col col-6 class="p-0"><button ion-button block color="light" (click)="sort()"><img src="../../assets/imgs/icon-sort.png" alt=""> Sort By Price</button></ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-header>\n\n\n<ion-content class="flex-wrapper">\n\n	<ion-list class="list-flex">\n	 <ion-card class="ml-0 mr-0 mt-0 w-100 product-holder" *ngFor="let item of bikelists" (click)="bikedetails(item.id)">\n		<!-- <img src="assets/imgs/motor-cycle.jpg" alt=""> -->\n		<ion-thumbnail item-start>\n				<img *ngIf="item.productsimages.length != 0" src="{{imagelink + item.productsimages[0].name}}" alt="">\n				<img *ngIf="item.productsimages.length == 0" src="assets/imgs/camera.png" alt="">\n			</ion-thumbnail>\n		<ion-card-content>\n			<h6>{{item.reg_number}}</h6>\n			<p class="price">$ {{item.price}}</p>\n		</ion-card-content>\n		<ion-card-content>\n				<p *ngIf="item.Bikemodels"><span>Model :</span> {{item.Bikemodels.model_name}}</p>\n					<p *ngIf="item.Makes"><span>Make :</span>{{item.Makes.make_name}}</p>\n		</ion-card-content>\n	</ion-card> \n	</ion-list>\n	\n	<ion-card class="ml-0 mr-0 mt-0 w-100 product-holder" *ngIf="no_bikelists">\n	\n		\n		<ion-card-content>\n			<h6>No Search Bike Available</h6>\n			<!-- <p class="price">$ {{item.price}}</p> -->\n		</ion-card-content>\n	\n	</ion-card>\n	\n</ion-content>\n<ion-footer>\n	<ion-toolbar>\n		<ion-title>Footer</ion-title>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/search-vehicle/search-vehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_bike_bike__["a" /* BikeProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], SearchVehiclePage);
    return SearchVehiclePage;
}());

//# sourceMappingURL=search-vehicle.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
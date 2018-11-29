webpackJsonp([17],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypostPageModule", function() { return MypostPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mypost__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MypostPageModule = /** @class */ (function () {
    function MypostPageModule() {
    }
    MypostPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mypost__["a" /* MypostPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mypost__["a" /* MypostPage */]),
            ],
        })
    ], MypostPageModule);
    return MypostPageModule;
}());

//# sourceMappingURL=mypost.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MypostPage; });
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
 * Generated class for the MypostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MypostPage = /** @class */ (function () {
    function MypostPage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
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
    }
    MypostPage.prototype.ionViewDidLoad = function () {
        //console.log('bike list ewre')
        this.bikelist();
        console.log('ionViewDidLoad MypostPage');
    };
    MypostPage.prototype.bikelist = function () {
        var _this = this;
        var user_details = JSON.parse(localStorage.getItem('userData'));
        console.log(user_details);
        var login_user = user_details.id;
        var dataUserDet = {
            "uid": login_user
        };
        this.bikeService.bikelist(dataUserDet).subscribe(function (res) {
            var details = res;
            //console.log(res)
            if (details.Ack == 1) {
                _this.bikelists = details.bikes;
                _this.imagelink = details.image_link;
                console.log(_this.bikelists);
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
    MypostPage.prototype.bikedelete = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Remove Bike',
            message: 'Are you sure to remove this Bike?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'icon-color',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'icon-color',
                    handler: function (data) {
                        var dataDet = {
                            "id": id
                        };
                        console.log(dataDet);
                        _this.bikeService.deletebike(dataDet).subscribe(function (res) {
                            var details = res;
                            //console.log(res)
                            if (details.Ack == 1) {
                                _this.bikelist();
                                console.log(_this.bikelists);
                            }
                        }, function (err) {
                            console.log(err);
                            var alert = _this.alertCtrl.create({
                                title: 'Bike not removed from your account!',
                                buttons: ['OK']
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MypostPage.prototype.bikeedit = function (id) {
        localStorage.setItem('bike1_id', id);
        this.navCtrl.push('SellbikeOnePage');
    };
    MypostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mypost',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/mypost/mypost.html"*/'<!--\n  Generated template for the MypostPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Mypost</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<ion-card class="ml-0 mr-0 mt-0 w-100 category-card">\n		<ion-card-content>\n			<ion-list class="fab-list" *ngIf="bikelists">\n				<ion-item *ngFor="let item of bikelists">\n					<ion-thumbnail item-start>\n						<img *ngIf="item.productsimages.length != 0" src="{{imagelink + item.productsimages[0].name}}" alt="">\n						<img *ngIf="item.productsimages.length == 0" src="assets/imgs/camera.png" alt="">\n					</ion-thumbnail>\n					<h2>{{item.reg_number}}</h2>\n					<b>{{item.price}}</b>\n					<p *ngIf="item.Bikemodels"><span>Model :</span> {{item.Bikemodels.model_name}}</p>\n					<p *ngIf="item.Makes"><span>Make :</span>{{item.Makes.make_name}}</p>\n					<button ion-button color="dark" icon-left (click)="bikeedit(item.id)"><ion-icon name="create"></ion-icon> Edit</button> \n					<button ion-button color="danger" icon-left (click)="bikedelete(item.id)"><ion-icon name="trash" ></ion-icon> Delete</button> \n				</ion-item>\n				\n				\n			\n			</ion-list>\n			<ion-list class="fab-list" *ngIf="!bikelists">\n				<ion-item >\n					\n					<h2>No bikes available.</h2>\n					\n					\n				</ion-item>\n				\n				\n			\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/mypost/mypost.html"*/,
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
    ], MypostPage);
    return MypostPage;
}());

//# sourceMappingURL=mypost.js.map

/***/ })

});
//# sourceMappingURL=17.js.map
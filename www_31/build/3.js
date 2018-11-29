webpackJsonp([3],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellbikeTwoPageModule", function() { return SellbikeTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellbike_two__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellbikeTwoPageModule = /** @class */ (function () {
    function SellbikeTwoPageModule() {
    }
    SellbikeTwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellbike_two__["a" /* SellbikeTwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellbike_two__["a" /* SellbikeTwoPage */]),
            ],
        })
    ], SellbikeTwoPageModule);
    return SellbikeTwoPageModule;
}());

//# sourceMappingURL=sellbike-two.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellbikeTwoPage; });
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
 * Generated class for the SellbikeTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellbikeTwoPage = /** @class */ (function () {
    function SellbikeTwoPage(builder, navCtrl, alertCtrl, navParams, menu, bikeService, storage, loadingCtrl, authService, myApp) {
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
        this.form = builder.group({
            'make_id': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'year': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'model_id': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'engine_size': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'price': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'color': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'cc': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'category_id': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'fuel_type': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'licence_type': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'no_of_owner': ['', ''],
            'description': ['', ''],
            'contact_email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'contact_number': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'is_allow_phone': ['', '']
        });
    }
    SellbikeTwoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (localStorage.getItem('bike1_id')) {
            var dataUserDet = {
                "id": localStorage.getItem('bike1_id')
            };
            this.bikeService.getbikedetails(dataUserDet).subscribe(function (res) {
                var details = res;
                console.log(res);
                if (details.Ack == 1) {
                    _this.form.controls['make_id'].setValue(details.product.make_id);
                    _this.form.controls['year'].setValue(details.product.year);
                    _this.form.controls['model_id'].setValue(details.product.model_id);
                    _this.form.controls['engine_size'].setValue(details.product.engine_size);
                    _this.form.controls['price'].setValue(details.product.price);
                    _this.form.controls['color'].setValue(details.product.color);
                    _this.form.controls['cc'].setValue(details.product.cc);
                    _this.form.controls['category_id'].setValue(details.product.category_id);
                    _this.form.controls['fuel_type'].setValue(details.product.fuel_type);
                    _this.form.controls['licence_type'].setValue(details.product.licence_type);
                    _this.form.controls['no_of_owner'].setValue(details.product.no_of_owner);
                    _this.form.controls['description'].setValue(details.product.description);
                    _this.form.controls['contact_email'].setValue(details.product.contact_email);
                    _this.form.controls['contact_number'].setValue(details.product.contact_number);
                    _this.form.controls['is_allow_phone'].setValue(details.product.is_allow_phone);
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Bike not fetch from your account!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        var year = new Date().getFullYear();
        var range = [];
        range.push(year);
        for (var i = 1; i < 15; i++) {
            range.push(year - i);
        }
        this.years = range;
        //console.log('dfuijgudjf')
        //     this.bikeService.categories()
        //     .subscribe(data => {
        //       let details = data;
        //      console.log(details);
        //       this.categorys = details.categorys;
        //   this.models = details.models;
        //   this.makes = details.makes;
        //   this.colours = details.colours;
        //   this.engins = details.engins;
        // console.log(this.models)
        //     },error => {
        //       console.log('error');
        //       });
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
        //console.log('ionViewDidLoad SellbikeTwoPage');
    };
    SellbikeTwoPage.prototype.Sellbikethree = function (fromdata) {
        var _this = this;
        //  let bike1:any = JSON.parse(localStorage.getItem('bikesell1'));
        if (localStorage.getItem('bike1_id')) {
            fromdata.id = localStorage.getItem('bike1_id');
        }
        //console.log(bike1);
        //console.log(fromdata);
        //fromdata.mileage = bike1.mileage;
        // fromdata.reg_number = bike1.reg_number;
        if (!this.form.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Bike add faild!',
                subTitle: "Please fill all the details.",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var loading = this.loadingCtrl.create({
                spinner: 'show',
                content: 'Loading Please Wait...',
                duration: 3000
            });
            loading.present();
            //console.log(fromdata);
            this.bikeService.addbike(fromdata).subscribe(function (res) {
                var details = res;
                if (details.ack == 1) {
                    localStorage.setItem('bike1_id', details.id);
                    //   console.log(res);
                    //    const alert = this.alertCtrl.create({
                    //      title: 'Bike Added Successfully .',
                    //      buttons: ['OK']
                    //    });
                    //  alert.present();
                    // this.navCtrl.setRoot('SellbikeThreePage');
                    _this.navCtrl.push('SellbikeThreePage');
                }
            }, function (err) {
                //console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Service Failed!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        //this.navCtrl.setRoot('SellbikeThreePage');
    };
    SellbikeTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellbike-two',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-two/sellbike-two.html"*/'<!--\n  Generated template for the SellbikeTwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n<ion-navbar>\n  <ion-title>Sell Gear</ion-title>\n</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="mb-0 text-center text-uppercase">Sell Bike</h4>\n  <p class="m-b-10 text-center mt-0">Sell your bike 4 easy steps</p>\n  <form [formGroup]="form" (ngSubmit)="Sellbikethree(form.value)" #sellbike2="ngForm">\n    <ion-card class="ml-0 mr-0 mt-0 w-100 step-card">\n      <ion-card-content class="pl-0 pr-0">\n        <ion-grid class="p-0">\n          <ion-row>\n            <ion-col col-12 class="pl-0 pr-0">\n              <ul class="step-holder">\n                <li>\n                  <div class="number">1</div>\n                  <p>Step 1</p>\n                </li>\n                <li class="active">\n                  <div class="number">2</div>\n                  <p>Step 2</p>\n                </li>\n                <li>\n                  <div class="number">3</div>\n                  <p>Step 3</p>\n                </li>\n                <li>\n                  <div class="number">4</div>\n                  <p>Step 4</p>\n                </li>\n              </ul>\n            </ion-col>\n            <ion-col>\n              <div class="round-image">\n                <img src="assets/imgs/bike.png" alt="" />\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-list class="post-fields">\n          <ion-item>\n            <ion-label>Make</ion-label>\n            <ion-select formControlName="make_id">\n              <ion-option *ngFor="let item of make" value="{{item.id}}">{{item.make_name}}</ion-option>\n              <!-- <ion-option>Honda City</ion-option> -->\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'make_id\'].valid && form.controls[\'make_id\'].touched" ion-text color="danger"> Make is required </p>\n          <ion-item>\n            <ion-label>Year</ion-label>\n            <ion-select formControlName="year">\n              <ion-option *ngFor="let year of years">{{year}}</ion-option>\n              <!-- <ion-option>2001</ion-option>\n              <ion-option>2002</ion-option> -->\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'year\'].valid && form.controls[\'year\'].touched" ion-text color="danger">Year is required </p>\n          <ion-item>\n            <ion-label>Model</ion-label>\n            <ion-select formControlName="model_id">\n              <ion-option  *ngFor="let item of model" value="{{item.id}}">{{item.model_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'model_id\'].valid && form.controls[\'model_id\'].touched" ion-text color="danger">Model is required </p>\n          <ion-item>\n            <ion-label>Engine size</ion-label>\n            <ion-select formControlName="engine_size">\n              <ion-option *ngFor="let item of engin" value="{{item.id}}">{{item.size}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'engine_size\'].valid && form.controls[\'engine_size\'].touched" ion-text color="danger">Engine size is required </p>\n          <!-- <ion-item>\n            <ion-input type="text" placeholder="Mileage"></ion-input>\n          </ion-item> -->\n          <ion-item>\n            <ion-input type="text" formControlName="price" placeholder="Asking Price ($)"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'price\'].valid && form.controls[\'price\'].touched" ion-text color="danger">Asking price is required </p>\n          <ion-item>\n            <ion-label>Colour</ion-label>\n            <ion-select formControlName="color">\n              <ion-option *ngFor="let item of colour" value="{{item.id}}">{{item.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'color\'].valid && form.controls[\'color\'].touched" ion-text color="danger">Colour is required </p>\n          <ion-item>\n            <ion-input type="text" formControlName="cc" placeholder="CC"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'cc\'].valid && form.controls[\'cc\'].touched" ion-text color="danger">CC is required </p>\n          <ion-item>\n            <ion-label>Category</ion-label>\n            <ion-select formControlName="category_id">\n              <ion-option *ngFor="let item of category" value="{{item.id}}">{{item.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'category_id\'].valid && form.controls[\'category_id\'].touched" ion-text color="danger">category is required </p>\n          <ion-item>\n            <ion-label>Fuel type</ion-label>\n            <ion-select formControlName="fuel_type">\n              <ion-option value="P">Petrol</ion-option>\n              <ion-option value="D">Diesel</ion-option>\n              <ion-option value="E">Electric</ion-option>\n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'fuel_type\'].valid && form.controls[\'fuel_type\'].touched" ion-text color="danger">Fuel type is required </p>\n          <ion-item>\n            <ion-label>Licence Type</ion-label>\n            <ion-select formControlName="licence_type">\n              <ion-option value="P">Private</ion-option>\n              <ion-option value="T">Trade</ion-option>\n             \n            </ion-select>\n          </ion-item>\n          <p *ngIf="!form.controls[\'licence_type\'].valid && form.controls[\'licence_type\'].touched" ion-text color="danger">Licence type is required </p>\n          <ion-item class="checkbox-holder">\n            <ion-label>Accept offers</ion-label>\n            <ion-checkbox ></ion-checkbox>\n          </ion-item>\n          <ion-item>\n            <ion-input type="number" formControlName="no_of_owner" placeholder="Optional (Number of previous owners including yourself)"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <textarea formControlName="description" placeholder="Descriptions"></textarea>\n          </ion-item>\n          <ion-item>\n            <ion-input type="email" formControlName="contact_email" placeholder="Email"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'contact_email\'].valid && form.controls[\'contact_email\'].touched" ion-text color="danger">Contact Email is required </p>\n          <ion-item>\n            <ion-input formControlName="contact_number" type="number" placeholder="Phone"></ion-input>\n          </ion-item>\n          <p *ngIf="!form.controls[\'contact_number\'].valid && form.controls[\'contact_number\'].touched" ion-text color="danger">Contact number is required </p>\n          <ion-item class="checkbox-holder mb-0">\n            <ion-label>Allow buyers to contact me by phone</ion-label>\n            <ion-checkbox formControlName="is_allow_phone"></ion-checkbox>\n          </ion-item>\n          <ion-item class="checkbox-holder mb-0">\n            <ion-label>I have read and understood the Terms and Conditions for biketory private advertisers</ion-label>\n            <ion-checkbox ></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n    <button ion-button block class="text-uppercase" [disabled]="!form.valid ">Continue</button>\n  </form>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <div class="tabs-sell">\n      <ul>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Profile\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/bike-h.png" alt="" />\n            </div>\n            Sell Bike\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/gear-h.png" alt="" />\n            </div>\n            Sell Gear\n          </a>\n        </li>\n        <li>\n          <a href="">\n            <div class="icon">\n              <img src="../../assets/imgs/tab-icon-sell/profile-h.png" alt="" />\n            </div>\n            Chats</a>\n        </li>\n      </ul>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/sellbike-two/sellbike-two.html"*/,
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
    ], SellbikeTwoPage);
    return SellbikeTwoPage;
}());

//# sourceMappingURL=sellbike-two.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
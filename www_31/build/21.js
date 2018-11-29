webpackJsonp([21],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpassPageModule", function() { return ForgetpassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgetpass__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetpassPageModule = /** @class */ (function () {
    function ForgetpassPageModule() {
    }
    ForgetpassPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgetpass__["a" /* ForgetpassPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgetpass__["a" /* ForgetpassPage */]),
            ],
        })
    ], ForgetpassPageModule);
    return ForgetpassPageModule;
}());

//# sourceMappingURL=forgetpass.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetpassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
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
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetpassPage = /** @class */ (function () {
    function ForgetpassPage(navCtrl, navParams, authService, builder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.forgetpassForm = builder.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    ForgetpassPage.prototype.forgetpassword = function (formData) {
        var _this = this;
        this.authService.forgetpass(formData).subscribe(function (res) {
            if (res.ACK == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: res.message,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: res.message,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ForgetpassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetpassPage');
    };
    ForgetpassPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgetpass',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/forgetpass/forgetpass.html"*/'<!--\n  Generated template for the ForgetpassPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Forget Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="dark-bg">\n  <div class="logo">\n    <img src="assets/imgs/after-splash-logo.png" alt="">\n  </div>\n  <!-- <form  [formGroup]="form" (ngSubmit)="loginNow(form.value)"> -->\n  <form [formGroup]="forgetpassForm"  #loginForm="ngForm">\n    <ion-list>\n      <!--<ion-item>\n        <ion-label>Enter Your Email</ion-label>\n        <ion-input type="text" formControlName="email" required>\n        </ion-input>\n      <div class="text-danger" *ngIf="!forgetpassForm.controls[\'email\'].valid && forgetpassForm.controls[\'email\'].touched">Password Required</div>\n      </ion-item>-->\n      <ion-item>\n		<ion-input type="text" placeholder="Enter Your Email"></ion-input>\n	</ion-item>\n     \n<div padding class="p-b-5">\n  <button ion-button class="sign-in-btn" (click)="forgetpassword(forgetpassForm.value)" type="submit" block>Send password</button>\n</div>\n\n </ion-list>\n\n    <!-- <ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row> -->\n  </form>\n\n</ion-content>\n\n\n<style>\n  .style{\n    width:35%;\n    margin-left:35%;\n  }\n</style>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/forgetpass/forgetpass.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ForgetpassPage);
    return ForgetpassPage;
}());

//# sourceMappingURL=forgetpass.js.map

/***/ })

});
//# sourceMappingURL=21.js.map
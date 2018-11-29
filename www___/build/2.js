webpackJsonp([2],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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




var SignupPage = /** @class */ (function () {
    function SignupPage(builder, navCtrl, navParams, authService, alertCtrl, loadingCtrl, fb) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fb = fb;
        this.isValidEmail = true;
        this.passwordmatch = true;
        this.checkEmailExist = true;
        this.rForm = fb.group({
            'first_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'last_name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            //'address': [null, Validators.required],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'con_password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            //'city': [null, Validators.required],
            // 'state': [null, Validators.required],
            // 'country': [null, Validators.required],
            'utype': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
            //'is_check':[null,null]
        });
        this.rForm.controls['utype'].setValue(1);
    }
    SignupPage.prototype.checkpassword = function (conpass, frmval) {
        console.log(frmval.password);
        console.log(conpass);
        if (frmval.password == conpass) {
            this.passwordmatch = true;
        }
        else {
            this.passwordmatch = false;
        }
    };
    SignupPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    SignupPage.prototype.checkEmail = function (values) {
        var _this = this;
        if (values != '') {
            this.isValidEmail = this.validateEmail(values);
            if (this.isValidEmail) {
                var signupCheckEmail = {
                    "email": values
                };
                this.authService.userCheckEmail(signupCheckEmail)
                    .subscribe(function (data) {
                    var details = data.details;
                    console.log(details.ack);
                    if (details.ack == "1") {
                        _this.checkEmailExist = false;
                        return false;
                    }
                    else {
                        //alert('Invalid login');
                        _this.checkEmailExist = true;
                        return false;
                    }
                }, function (error) {
                });
            }
        }
        else {
        }
    };
    SignupPage.prototype.onSubmit = function (formData) {
        var _this = this;
        console.log(formData);
        console.log(this.rForm.valid);
        if (!this.rForm.valid) {
            var alert_1 = this.alertCtrl.create({
                title: 'Signup Failed!',
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
            console.log(formData);
            this.authService.signup(formData).subscribe(function (res) {
                var details = res.details;
                if (details.ack == 1) {
                    console.log(res);
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Registration Successfully Done',
                        buttons: ['OK']
                    });
                    alert_2.present();
                    _this.navCtrl.push('LoginnewPage');
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: 'Email already registered. Please try another emil id .',
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Auth Failed!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.onLogin = function () {
        this.navCtrl.push('LoginnewPage');
    };
    SignupPage.prototype.home = function () {
        this.navCtrl.setRoot('HomePage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/signup/signup.html"*/'<ion-content padding class="login-bg">\n	<div class="logo">\n		<img src="assets/imgs/after-splash-logo.png" alt="">\n	</div>\n	<h5 class="page-title">Sign Up</h5>\n	\n	<form [formGroup]="rForm" novalidate>\n		<ion-grid radio-group formControlName="utype">\n				<ion-row class="sign-as-panel">\n						<ion-col col-12>\n						<ion-item>\n						  <ion-label>Personal</ion-label>\n						  <ion-radio value="1" checked="true"></ion-radio>\n						</ion-item>\n						<ion-item>\n						  <ion-label>Business</ion-label>\n						  <ion-radio value="2"></ion-radio>\n						</ion-item>\n						\n							</ion-col>\n						</ion-row>\n					  \n			\n		</ion-grid>\n		<ion-list>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="../../assets/imgs/user-icon.png" alt=""></ion-label>\n				<ion-input type="text" value="" formControlName="first_name" required placeholder="First Name"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'first_name\'].valid && rForm.controls[\'first_name\'].touched" ion-text color="danger" >First Name is required </p>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="../../assets/imgs/user-icon.png" alt=""></ion-label>\n				<ion-input type="text" value="" formControlName="last_name" required  placeholder="Last Name"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'last_name\'].valid && rForm.controls[\'last_name\'].touched" ion-text color="danger">Last Name is required </p>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="../../assets/imgs/email-icon.png" alt=""></ion-label>\n				<ion-input type="email" value="" placeholder="Email" formControlName="email" required (ngModelChange)="checkEmail($event)"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'email\'].valid && rForm.controls[\'email\'].touched" ion-text color="danger">Email is required </p>\n			\n			<p *ngIf="!isValidEmail" ion-text color="danger">Please enter valid email id. </p>\n\n			<p *ngIf="!checkEmailExist" ion-text color="danger">This email already exist. </p>\n			\n			\n			\n			<ion-item class="input-field">\n				<ion-label fixed><img src="../../assets/imgs/icon-password.png" alt=""></ion-label>\n				<ion-input type="password" value="" placeholder="Password" formControlName="password" required ></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'password\'].valid && rForm.controls[\'password\'].touched" ion-text color="danger">Password is required </p>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="../../assets/imgs/icon-password.png" alt=""></ion-label>\n				<ion-input type="password" value="" placeholder="Confirm Password" formControlName="con_password" required (ngModelChange)="checkpassword($event,rForm.value)"></ion-input>\n			</ion-item>\n			<p *ngIf="!rForm.controls[\'con_password\'].valid && rForm.controls[\'con_password\'].touched" ion-text color="danger">Confirm Password is required </p>\n			<p *ngIf="!passwordmatch" ion-text color="danger">Password and Confirm password not match </p>\n			\n			<ion-item class="remember">\n				<ion-label>I would like to receive news, offers and promotions from biketory</ion-label>\n				<ion-checkbox color="light"  checked="true"></ion-checkbox>\n			</ion-item>\n\n		</ion-list>\n    \n		\n					\n		<button ion-button type="submit" [disabled]="!rForm.valid || !passwordmatch || !isValidEmail || !checkEmailExist" block round (click)="onSubmit(rForm.value)">SIGN UP</button>\n			\n		<p class="dont text-center">By creating a biketory account, you agree to our<br> <a href="javascript:void(0)" >Terms & Conditions</a> and <a href="javascript:void(0)">Privacy Policy</a>.</p>\n\n      \n\n    \n\n\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
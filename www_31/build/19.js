webpackJsonp([19],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginnewPageModule", function() { return LoginnewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginnew__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginnewPageModule = /** @class */ (function () {
    function LoginnewPageModule() {
    }
    LoginnewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__loginnew__["a" /* LoginnewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__loginnew__["a" /* LoginnewPage */]),
            ],
        })
    ], LoginnewPageModule);
    return LoginnewPageModule;
}());

//# sourceMappingURL=loginnew.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginnewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginnewPage = /** @class */ (function () {
    function LoginnewPage(builder, navCtrl, alertCtrl, navParams, menu, authService, storage, loadingCtrl, events, myApp) {
        this.builder = builder;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.authService = authService;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.myApp = myApp;
        this.isLoggedIn = false;
        this.isValidEmail = true;
        this.form = builder.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
        events.publish('hideFooter', { isHidden: true });
    }
    LoginnewPage.prototype.ionViewDidLoad = function () {
        this.menu.enable(false, 'loggedOutMenu');
        console.log('ionViewDidLoad LoginnewPage');
        //  console.log("ABCDEFGHIJ", localStorage.getItem('userData'));
    };
    LoginnewPage.prototype.checkEmail = function (values) {
        if (values != '') {
            this.isValidEmail = this.validateEmail(values);
            console.log(this.isValidEmail);
        }
        else {
        }
    };
    LoginnewPage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    LoginnewPage.prototype.forgetpass = function () {
        this.navCtrl.push("ForgetpassPage");
    };
    LoginnewPage.prototype.loginNow = function (formData) {
        var _this = this;
        //formData['device_token_id'] ='asdfa45645645646knllkjlkj4356546456';
        //formData['device_type']='android';
        console.log(formData);
        this.authService.login(formData).subscribe(function (res) {
            console.log(res);
            if (res.ack == 1) {
                /*const alert = this.alertCtrl.create({
                  title: res.msg,
                  buttons: ['OK']
                });
                alert.present();*/
                _this.storage.ready().then(function () {
                    localStorage.setItem('userData', JSON.stringify(res.details));
                    console.log("USERDATATATATATTATATTATA", JSON.stringify(res.details));
                    //  this.storage.set('userType', res.userdetail.User['type']).then(() => {
                    _this.storage.set('first_Name', res.details['first_name']).then(function () {
                        _this.storage.set('last_Name', res.details['last_name']).then(function () {
                            _this.storage.set('uid', res.details['id']).then(function () {
                                _this.navCtrl.setRoot('HomePage');
                                // this.storage.get('uid').then((res)=>{
                                //   console.log(res);
                                // }).catch();
                            });
                        });
                    });
                    // });
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Please enter correct credentials.',
                    buttons: ['OK']
                });
                alert_1.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginnewPage.prototype.onSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginnewPage.prototype.home = function () {
        this.navCtrl.setRoot('HomePage');
    };
    LoginnewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginnew',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/loginnew/loginnew.html"*/'<!-- <ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header> -->\n\n<ion-content padding class="login-bg">\n	<div class="logo">\n		<img src="assets/imgs/after-splash-logo.png" alt="">\n	</div>\n	<h5 class="page-title">Sign In</h5>\n  \n  <form [formGroup]="form" (ngSubmit)="loginNow(form.value)" #loginForm="ngForm">\n		<ion-list>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="assets/imgs/user-icon.png" alt=""></ion-label>\n				<ion-input type="text" value="" formControlName="email" (ngModelChange)="checkEmail($event)" placeholder="Username or Email"></ion-input>\n			</ion-item>\n			<p *ngIf="!form.controls[\'email\'].valid && form.controls[\'email\'].touched" ion-text color="danger">Email is required </p>\n			\n			<p *ngIf="!isValidEmail" ion-text color="danger">Please enter valid email id. </p>\n			<ion-item class="input-field">\n				<ion-label fixed><img src="assets/imgs/icon-password.png" alt=""></ion-label>\n				<ion-input type="password" formControlName="password"  value="" placeholder="Password"></ion-input>\n			</ion-item>\n			<p *ngIf="!form.controls[\'password\'].valid && form.controls[\'password\'].touched" ion-text color="danger">Password is required </p>\n		</ion-list>\n		<ion-list no-lines>\n		  <ion-grid class="pl-0 pr-0">\n		    <ion-row>\n		      <ion-col col-6 class="pl-0">\n		        <ion-item class="remember">\n		        	<ion-label>Remember me</ion-label>\n					<ion-checkbox color="light" checked="true"></ion-checkbox>\n		        </ion-item>\n		      </ion-col>\n		      <ion-col col-6 class="pr-0">\n		        <ion-item>\n		        	<ion-label text-right (click)="forgetpass()" class="forgot mr-0">Forgot Password?</ion-label>\n		        </ion-item>\n		      </ion-col>\n		    </ion-row>\n		  </ion-grid>\n		 </ion-list>\n  \n			\n		<button ion-button round  block [disabled]="!form.valid || !isValidEmail">Sign In</button>\n		<h5 class="or text-center">OR</h5>\n		<button ion-button round outline (click)="onSignup()" block>Create an Account</button>\n		\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/loginnew/loginnew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */]])
    ], LoginnewPage);
    return LoginnewPage;
}());

//# sourceMappingURL=loginnew.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
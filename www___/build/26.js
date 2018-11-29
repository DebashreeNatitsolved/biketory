webpackJsonp([26],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(navCtrl, navParams, authService, storage, builder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.builder = builder;
        this.alertCtrl = alertCtrl;
        this.changeForm = builder.group({
            'current_password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            'new_password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            'con_password': [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    ChangepasswordPage.prototype.changepass = function (formData) {
        var _this = this;
        this.storage.get('uid').then(function (val) {
            console.log(val);
            formData['user_id'] = val;
        });
        console.log(formData);
        // return;
        this.authService.changepass(formData).subscribe(function (res) {
            if (res.ACK == 1) {
                var alert_1 = _this.alertCtrl.create({
                    title: res.msg,
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: res.msg,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changepassword',template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/changepassword/changepassword.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <form #loginForm="ngForm" [formGroup]="changeForm" novalidate>\n    <ion-list no-lines>\n      <ion-item>\n        <ion-label stacked color="primary">Current Password</ion-label>\n<ion-input name="current_password" formControlName="current_password" type="text" placeholder="Current password here" required>\n\n\n        </ion-input>\n      </ion-item>\n<p *ngIf="!changeForm.controls[\'current_password\'].valid && changeForm.controls[\'current_password\'].touched" ion-text color="danger"\n\n  padding-left>\n\n        Current Password is required </p>\n      <!-- <p ion-text color="danger" padding-left> Username is required </p> -->\n  \n      <ion-item>\n        <ion-label stacked color="primary">New Password</ion-label>\n<ion-input name="new_password" type="text" formControlName="new_password" placeholder="New password here" required>\n\n\n        </ion-input>\n      </ion-item>\n<p *ngIf="!changeForm.controls[\'new_password\'].valid && changeForm.controls[\'new_password\'].touched" ion-text color="danger"\n\n\n        padding-left>\n       New Password is required </p>\n  \n      <ion-item>\n        <ion-label stacked color="primary">Re-type Password</ion-label>\n<ion-input name="con_password" type="text" formControlName="con_password" placeholder="Re-type password" required>\n\n\n        </ion-input>\n      </ion-item>\n<p *ngIf="!changeForm.controls[\'con_password\'].valid && changeForm.controls[\'con_password\'].touched" ion-text color="danger"\n\n\n        padding-left>\n        Re-enter password </p>\n  \n  \n      <div padding class="p-b-5">\n        <button ion-button class="sign-in-btn" (click)="changepass(changeForm.value)" type="submit" block>Save Changes</button>\n      </div>\n  \n  \n    </ion-list>\n  \n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/pages/changepassword/changepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ })

});
//# sourceMappingURL=26.js.map
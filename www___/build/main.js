webpackJsonp([31],{

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ad-details/ad-details.module": [
		284,
		30
	],
	"../pages/after-splash/after-splash.module": [
		285,
		29
	],
	"../pages/buyer-profile/buyer-profile.module": [
		286,
		28
	],
	"../pages/carts/carts.module": [
		287,
		27
	],
	"../pages/changepassword/changepassword.module": [
		288,
		26
	],
	"../pages/chats/chats.module": [
		289,
		25
	],
	"../pages/details/details.module": [
		290,
		24
	],
	"../pages/fabourite/fabourite.module": [
		291,
		23
	],
	"../pages/filter/filter.module": [
		292,
		22
	],
	"../pages/forgetpass/forgetpass.module": [
		293,
		21
	],
	"../pages/home/home.module": [
		294,
		20
	],
	"../pages/loginnew/loginnew.module": [
		295,
		19
	],
	"../pages/modal-content/modal-content.module": [
		296,
		18
	],
	"../pages/mypost/mypost.module": [
		297,
		17
	],
	"../pages/post-ad-one/post-ad-one.module": [
		298,
		16
	],
	"../pages/post-ad-three/post-ad-three.module": [
		299,
		15
	],
	"../pages/post-ad-two/post-ad-two.module": [
		300,
		14
	],
	"../pages/profile/profile.module": [
		301,
		13
	],
	"../pages/search-gear/search-gear.module": [
		302,
		12
	],
	"../pages/search-vehicle/search-vehicle.module": [
		303,
		11
	],
	"../pages/search/search.module": [
		304,
		10
	],
	"../pages/sell-bike/sell-bike.module": [
		305,
		9
	],
	"../pages/sell-gear/sell-gear.module": [
		306,
		8
	],
	"../pages/sell-step-1/sell-step-1.module": [
		307,
		7
	],
	"../pages/sellbike-four/sellbike-four.module": [
		308,
		6
	],
	"../pages/sellbike-one/sellbike-one.module": [
		309,
		5
	],
	"../pages/sellbike-three/sellbike-three.module": [
		310,
		4
	],
	"../pages/sellbike-two/sellbike-two.module": [
		311,
		3
	],
	"../pages/signup/signup.module": [
		312,
		2
	],
	"../pages/sort/sort.module": [
		313,
		1
	],
	"../pages/tabs/tabs.module": [
		314,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].baseUrl;
        // console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.postData = function (credentials, type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        //console.log(credentials);
        //console.log(type);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.post(_this.apiUrl + type, JSON.stringify(credentials))
                .subscribe(function (res) {
                console.log(res);
                resolve(res.json());
                loading.dismiss();
            }, function (err) {
                console.log(err);
                reject(err);
                loading.dismiss();
            });
        });
    };
    AuthServiceProvider.prototype.signup = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'users/register.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.login = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'users/token.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.userCheckEmail = function (data) {
        console.log(data);
        return this.http.post(this.apiUrl + 'users/emailcheck.json', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.getdetails = function (data) {
        var requestoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this.apiUrl + 'users/getprofiledetails_api',
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
        // return this.http.post(this.apiUrl + 'users/getprofiledetails_api', data).map((res: Response) => {
        //   return res.json();
        // });
    };
    AuthServiceProvider.prototype.updateprofile = function (data) {
        return this.http.post(this.apiUrl + 'users/edituserprofile_api', data).map(function (res) {
            return res.json();
        });
    };
    AuthServiceProvider.prototype.changepass = function (data) {
        var requestchangeoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this.apiUrl + 'users/change_password_api',
            body: JSON.stringify(data)
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestchangeoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    AuthServiceProvider.prototype.forgetpass = function (data) {
        console.log(data);
        var requestforgetoptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this.apiUrl + 'users/apiforgot_password',
            body: JSON.stringify(data)
        });
        // console.log(requestfuserCheckEmailorgetoptions);
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](requestforgetoptions))
            .map(function (res) {
            if (res) {
                return res.json();
            }
        });
    };
    AuthServiceProvider.prototype.getData = function (type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        console.log(type);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            _this.http.get(_this.apiUrl + type)
                .subscribe(function (res) {
                // let dt = res;
                // console.log(dt)
                //console.log(dt.category)
                resolve(res.json());
                //loading.dismiss();
            }, function (err) {
                console.log(err);
                reject(err);
                // loading.dismiss(); 
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, storage, statusBar, events) {
        var _this = this;
        this.storage = storage;
        this.events = events;
        this.isLarge = false;
        //showSearchbar: boolean = false;
        //myInput:any;
        this.footerIsHidden = false;
        this.headerIsHidden = false;
        platform.ready().then(function () {
            events.subscribe('hideFooter', function (data) {
                _this.footerIsHidden = data.isHidden;
            });
            events.subscribe('hideHeader', function (data) {
                _this.headerIsHidden = data.isHidden;
            });
            _this.loguser = JSON.parse(localStorage.getItem('userData'));
            //console.log(this.loguser) ;
            if (_this.loguser) {
                _this.firstname = _this.loguser.first_name + ' ' + _this.loguser.last_name;
                _this.utype = _this.loguser.utype;
                _this.nav.setRoot('HomePage');
            }
            else {
                _this.nav.setRoot('AfterSplashPage');
            }
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
    };
    // toggleSearchbar() { 
    //   this.showSearchbar = !this.showSearchbar;
    //   //this.content.resize();
    // }
    // search_favourite(value){
    //   console.log('here');
    //   console.log(this.myInput)
    // }
    // onCancel(value)
    // {
    //   this.showSearchbar = !this.showSearchbar;
    //   this.myInput = '';
    //   console.log(this.myInput);
    //   console.log('cancel');
    // }
    MyApp.prototype.home = function () {
        this.nav.push('HomePage');
    };
    MyApp.prototype.fabourite = function () {
        this.nav.push('FabouritePage');
    };
    MyApp.prototype.post = function () {
        this.nav.push('MypostPage');
    };
    MyApp.prototype.search = function () {
        this.nav.push('SearchPage');
    };
    MyApp.prototype.sellbike = function () {
        this.nav.push('SellbikeOnePage');
    };
    MyApp.prototype.dtls = function () {
        this.nav.push('AdDetailsPage');
    };
    MyApp.prototype.searchvehicle = function () {
        this.nav.push('SearchVehiclePage');
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.storage.ready().then(function () {
            var data = localStorage.getItem("userData");
            localStorage.removeItem('userData');
            localStorage.setItem('userData', "");
            _this.storage.set("uid", "");
            _this.nav.setRoot('AfterSplashPage');
        });
    };
    MyApp.prototype.goToPage = function (page) {
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/nits-12/Desktop/ionic_project/Biketory/src/app/app.html"*/'<!-- <ion-nav [root]="rootPage"></ion-nav> -->\n<ion-split-pane when="isLarge">\n\n    \n    <ion-menu [content]="content" id="loggedOutMenu">\n  \n      <ion-header>\n        <ion-item class="side-bar-header">\n          <ion-thumbnail item-start>\n            <img src="https://cap.stanford.edu/profiles/viewImage?profileId=19141&type=square&ts=1509532892453">\n          </ion-thumbnail>\n          <h2>{{firstname}}</h2>\n          <p>Personal balance $0.00</p>\n        </ion-item>\n      </ion-header>\n     \n	<ion-content >\n		<ion-card class="sidepanel-list">\n			<ion-item menuClose (click)="home()">\n				<ion-icon namecontent="home" item-start ></ion-icon> Home\n			</ion-item>\n        	<ion-item menuClose (click)="sellbike()">\n				<ion-icon name="document" item-start ></ion-icon> Sell Bike\n			</ion-item>\n			<ion-item menuClose>\n				<ion-icon name="list-box" item-start ></ion-icon> Products\n			</ion-item>\n			<ion-item menuClose>\n				<ion-icon name="mail" item-start ></ion-icon> Inbox\n			</ion-item>\n			<ion-item menuClose (click)="fabourite()">\n				<ion-icon name="heart" item-start ></ion-icon> Fabourites\n			</ion-item>\n			<ion-item menuClcontentose (click)="post()">\n				 My Post\n			</ion-item>\n			<ion-item menuClose (click)="search()">\n				 Search\n			</ion-item>\n			<ion-item menuClose (click)="searchvehicle()">\n				 Search Vehicle\n			</ion-item>\n			<ion-item menuClose (click)="dtls()">\n				 Add Details\n			</ion-item>\n			<ion-item menuClose (click)="home()">\n				<ion-icon name="cog" item-start ></ion-icon> Settings\n			</ion-item>\n			<ion-item menuClose (click)="logout()">\n	            <ion-icon name="power" item-start></ion-icon> Log out\n	        </ion-item>\n        </ion-card>\n      </ion-content>\n\n      \n  \n    </ion-menu>\n  \n    <!-- <ion-header *ngIf="!headerIsHidden">\n       <ion-toolbar *ngIf="showSearchbar">\n        <ion-searchbar  *ngIf="showSearchbar"\n      [showCancelButton]="true"\n      [(ngModel)]="myInput"\n      (input)="search_favourite($event)"\n      (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n      </ion-toolbar> \n      \n      <ion-navbar *ngIf="!showSearchbar">\n      <ion-title style="text-align: center;">Favour</ion-title>\n      <ion-buttons end >\n        <button  ion-button icon-only (click)="toggleSearchbar()">\n          <ion-icon name="search"></ion-icon>\n        </button>\n        </ion-buttons>\n      </ion-navbar>\n    </ion-header> -->\n  \n    <!-- main navigation -->\n    <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n		\n  </ion-split-pane>\n  '/*ion-inline-end:"/home/nits-12/Desktop/ionic_project/Biketory/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BikeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BikeProvider = /** @class */ (function () {
    function BikeProvider(http, loadingCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].baseUrl;
        //console.log('Hello UserProvider Provider');
        //console.log(Config.baseUrl)
    }
    BikeProvider.prototype.categories = function () {
        return this.http.get(this.apiUrl + 'products/categories.json').map(function (res) {
            return res.json();
        });
    };
    BikeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
    ], BikeProvider);
    return BikeProvider;
}());

//# sourceMappingURL=bike.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_bike_bike__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/ad-details/ad-details.module#AdDetailsPageModule', name: 'AdDetailsPage', segment: 'ad-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/after-splash/after-splash.module#AfterSplashPageModule', name: 'AfterSplashPage', segment: 'after-splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buyer-profile/buyer-profile.module#BuyerProfilePageModule', name: 'BuyerProfilePage', segment: 'buyer-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carts/carts.module#CartsPageModule', name: 'CartsPage', segment: 'carts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fabourite/fabourite.module#FabouritePageModule', name: 'FabouritePage', segment: 'fabourite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgetpass/forgetpass.module#ForgetpassPageModule', name: 'ForgetpassPage', segment: 'forgetpass', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginnew/loginnew.module#LoginnewPageModule', name: 'LoginnewPage', segment: 'loginnew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-content/modal-content.module#ModalContentPageModule', name: 'ModalContentPage', segment: 'modal-content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mypost/mypost.module#MypostPageModule', name: 'MypostPage', segment: 'mypost', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-ad-one/post-ad-one.module#PostAdOnePageModule', name: 'PostAdOnePage', segment: 'post-ad-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-ad-three/post-ad-three.module#PostAdThreePageModule', name: 'PostAdThreePage', segment: 'post-ad-three', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post-ad-two/post-ad-two.module#PostAdTwoPageModule', name: 'PostAdTwoPage', segment: 'post-ad-two', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-gear/search-gear.module#SearchGearPageModule', name: 'SearchGearPage', segment: 'search-gear', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-vehicle/search-vehicle.module#SearchVehiclePageModule', name: 'SearchVehiclePage', segment: 'search-vehicle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-bike/sell-bike.module#SellBikePageModule', name: 'SellBikePage', segment: 'sell-bike', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-gear/sell-gear.module#SellGearPageModule', name: 'SellGearPage', segment: 'sell-gear', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell-step-1/sell-step-1.module#SellStep_1PageModule', name: 'SellStep_1Page', segment: 'sell-step-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellbike-four/sellbike-four.module#SellbikeFourPageModule', name: 'SellbikeFourPage', segment: 'sellbike-four', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellbike-one/sellbike-one.module#SellbikeOnePageModule', name: 'SellbikeOnePage', segment: 'sellbike-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellbike-three/sellbike-three.module#SellbikeThreePageModule', name: 'SellbikeThreePage', segment: 'sellbike-three', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellbike-two/sellbike-two.module#SellbikeTwoPageModule', name: 'SellbikeTwoPage', segment: 'sellbike-two', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sort/sort.module#SortPageModule', name: 'SortPage', segment: 'sort', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_bike_bike__["a" /* BikeProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProvider = /** @class */ (function () {
    function UserProvider(http) {
        this.http = http;
        console.log('Hello UserProvider Provider');
        console.log(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */].baseUrl);
    }
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
    baseUrl: 'http://111.93.169.90/team6/bike/api/'
};
//# sourceMappingURL=config.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
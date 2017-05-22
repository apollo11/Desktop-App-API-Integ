webpackJsonp([0,5],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositMethodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuickDepositMethodService = (function () {
    function QuickDepositMethodService(http) {
        this.http = http;
        this.urlGetQuickDepositMethod = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/PaymentMethods'; // This is the API Endpoint for getting the list for Player's Deposit Method
    }
    /**
     * @returns {Observable<QuickDepositMethod[]>}
     * GET Security Question
     */
    QuickDepositMethodService.prototype.getQuickDepositMethod = function () {
        return this.http
            .get(this.urlGetQuickDepositMethod, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    QuickDepositMethodService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    QuickDepositMethodService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuickDepositMethodService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuickDepositMethodService);
    return QuickDepositMethodService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-method.service.js.map

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(619);


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://uat.beachheadsolutionsinc.com/api/';
    AppSettings.GAME_API_ENDPOINT = 'http://uat.orange88.com/api/v1/';
    return AppSettings;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/app.config.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* unused harmony export DefaultRequestOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestOptionsProvider; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultRequestOptions = (function (_super) {
    __extends(DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        _super.call(this);
        // Set the default 'Content-Type' header
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('X-PANDORA-API-Key', localStorage.getItem('TokenId'));
        this.headers.set('X-PANDORA-FP', localStorage.getItem('Fingerprint'));
        this.headers.set('X-PANDORA-IP', localStorage.getItem('IPAddress'));
    }
    DefaultRequestOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], DefaultRequestOptions);
    return DefaultRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* BaseRequestOptions */]));
var requestOptionsProvider = { provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */], useClass: DefaultRequestOptions };
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/default-request-option.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositBankAccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuickDepositBankAccountService = (function () {
    function QuickDepositBankAccountService(http) {
        this.http = http;
        this.urlGetBankAccount = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/SuggestedBankAccount'; //with parameter paymentMethod  and bankId    // This is the API Endpoint for Get Bank Account Info
    }
    /**
     *
     * @param id
     * @returns {Observable<BankAccount[]>}
     */
    QuickDepositBankAccountService.prototype.getBankAccount = function (paymentMethodId, bankId) {
        return this.http
            .get(this.urlGetBankAccount + ("?paymentMethod=" + paymentMethodId + "&bankId=" + bankId), __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    QuickDepositBankAccountService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    QuickDepositBankAccountService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuickDepositBankAccountService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuickDepositBankAccountService);
    return QuickDepositBankAccountService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-bank-account.service.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasinoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CasinoService = (function () {
    function CasinoService(http, authService, translate) {
        this.http = http;
        this.authService = authService;
        this.translate = translate;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'casino/'; // This is the API Endpoint for getting the game list.
        this.URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'GameManager/GetGameUrl?';
    }
    CasinoService.prototype.getCasinos = function () {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    CasinoService.prototype.getGamesUrl = function (platform, category) {
        var lang = this.translate.currentLang;
        var url = "" + this.URL + ('GamePlatform=' + platform) + ('&GameType=' + category) + ('&Language=' + lang) + ('&isMobile=' + 1);
        return this.http
            .get(url, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    CasinoService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    CasinoService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CasinoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _c) || Object])
    ], CasinoService);
    return CasinoService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/casino.service.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessModalComponent = (function () {
    function SuccessModalComponent(router) {
        this.router = router;
        // MODAL
        this.modalId = 'modalSuccess';
    }
    SuccessModalComponent.prototype.onOk = function () {
        //this.closeModal();
        //this.destroy();
        location.replace('/home');
        //this.router.navigate(['/home']);
    };
    SuccessModalComponent.prototype.onOkChwd = function () {
        this.closeModal();
        this.destroy();
        this.router.navigate(['/login']);
    };
    SuccessModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "modal",
            template: __webpack_require__(893),
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__modal_module__["b" /* Modal */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], SuccessModalComponent);
    return SuccessModalComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/success-modal.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__email_verification__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_verification_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmailVerificationComponent = (function () {
    function EmailVerificationComponent(emailVerificationService, profileService, router) {
        this.emailVerificationService = emailVerificationService;
        this.profileService = profileService;
        this.router = router;
        this.emailVerifications = new __WEBPACK_IMPORTED_MODULE_3__email_verification__["a" /* EmailVerification */]();
        this.valid = false;
        this.buttonEnabled = '';
        this.dataError = [];
        this.hasSend = false;
        this.submitting = false;
        this.submittingResend = false;
        // MODAL
        this.modalId = 'modalVerifyEmail';
    }
    EmailVerificationComponent.prototype.verifyEmail = function (email) {
        var _this = this;
        this.submitted = true;
        this.submitting = true;
        email.UserName = localStorage.getItem('Username');
        this.emailVerificationService.verifyEmail(email)
            .subscribe(function (success) {
            var data = success;
            var status = data.Status;
            _this.success = success;
            if (status == 'SUCCESS') {
                _this.valid = true;
                _this.hasSend = true;
                _this.submitting = false;
            }
            else {
                _this.valid = false;
                _this.dataError = data.Messages;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    EmailVerificationComponent.prototype.resetEmail = function (email) {
        var _this = this;
        this.submitted = true;
        this.submittingResend = true;
        this.emailVerificationService.resetEmail(email)
            .subscribe(function (success) {
            // this.success = <any>success;
            var data = success;
            var status = data.Status;
            console.log(status);
            _this.success = success;
            if (status == 'SUCCESS') {
                _this.submittingResend = false;
                _this.valid = true;
                _this.onCancel();
            }
            else {
                _this.valid = false;
                _this.dataError = data.Messages;
                _this.submittingResend = false;
            }
        }, function (error) {
            _this.submitted = false;
            _this.submittingResend = false;
            _this.error = error;
        });
    };
    EmailVerificationComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profile) { return _this.profile = profile; }, function (error) { return _this.error = error; });
    };
    EmailVerificationComponent.prototype.goToProfile = function () {
        this.router.navigate(['/profile']);
    };
    EmailVerificationComponent.prototype.onCancel = function () {
        this.closeModal();
        this.destroy();
        this.router.navigate(['/profile']);
    };
    EmailVerificationComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    EmailVerificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__elements_modal_modal_module__["b" /* Modal */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-email-verification',
            template: __webpack_require__(894),
            styles: [__webpack_require__(855)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__email_verification_service__["a" /* EmailVerificationService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__email_verification_service__["a" /* EmailVerificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__email_verification_service__["a" /* EmailVerificationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__["a" /* ProfileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], EmailVerificationComponent);
    return EmailVerificationComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/email-verification.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_reset__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_reset_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__elements_modal_success_modal_component__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPasswordResetComponent = (function () {
    function ForgotPasswordResetComponent(forgotPasswordResetService, forgotPasswordService, modalService) {
        this.forgotPasswordResetService = forgotPasswordResetService;
        this.forgotPasswordService = forgotPasswordService;
        this.modalService = modalService;
        this.resetPassword = new __WEBPACK_IMPORTED_MODULE_2__forgot_password_reset__["a" /* ResetPassword */]();
        this.forgotPassword = new __WEBPACK_IMPORTED_MODULE_4__forgot_password_forgot_password__["a" /* ForgotPassword */]();
        this.dataError = [];
        // submit button default state
        this.submitting = false;
        this.submittingResend = false;
        // MODAL
        this.modalId = 'modalForgotPasswordReset';
    }
    /**
     *
     * @param reset
     * resending a new code to client side
     */
    ForgotPasswordResetComponent.prototype.sendResetCode = function (reset) {
        var _this = this;
        this.submittingResend = true;
        this.submitted = true;
        this.setUserName = localStorage.getItem('PasswordResetUserName');
        this.setEmail = localStorage.getItem('PasswordResetEmail');
        this.setMobileCountryCode = localStorage.getItem('PasswordResetMobileCountryCode');
        this.setMobileNo = localStorage.getItem('PasswordResetMobileNo');
        if (this.setEmail == 'undefined') {
            this.setEmail = '';
        }
        if (this.setMobileCountryCode == 'undefined') {
            this.setMobileCountryCode = '';
        }
        if (this.setMobileNo == 'undefined') {
            this.setMobileNo = '';
        }
        reset.UserName = this.setUserName;
        reset.Email = this.setEmail;
        reset.MobileCountryCode = this.setMobileCountryCode;
        reset.MobileNo = this.setMobileNo;
        this.forgotPasswordService.sendResetCode(reset)
            .subscribe(function (success) {
            _this.submittingResend = false;
            _this.successMessage = success;
            console.log(_this.successMessage);
        }, function (error) {
            _this.errorMessage = error;
            _this.submitting = false;
            _this.submittingResend = false;
        });
    };
    /**
     *
     * @param reset
     * requesting code to reset the password
     */
    ForgotPasswordResetComponent.prototype.setPassword = function (reset) {
        var _this = this;
        this.submitting = true;
        this.forgotPasswordResetService.setPassword(reset)
            .subscribe(function (success) {
            _this.submitted = true;
            _this.successMessage = success;
            var data = success;
            console.log(data);
            var status = data.Status;
            console.log(status);
            if (status == 'SUCCESS') {
                _this.submitting = false;
                _this.onOk();
            }
            else {
                _this.submitting = false;
                _this.dataError = data.Messages;
            }
        }, function (error) {
            _this.errorMessage = error;
            _this.submitting = false;
            _this.submittingResend = false;
        });
    };
    Object.defineProperty(ForgotPasswordResetComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.resetPassword);
        },
        enumerable: true,
        configurable: true
    });
    // Validate Form
    // validateForm() {
    //   // connect to api after validation
    //   this.setPassword;
    //
    //   // Close Modal
    //   this.closeModal();
    //   this.destroy();
    //
    //   // Open Next Modal
    //   this.openModal();
    // }
    // Open Next Modal; 
    // Show Secruity Questions Modal
    ForgotPasswordResetComponent.prototype.openModal = function () {
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_6__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_8__elements_modal_success_modal_component__["a" /* SuccessModalComponent */], {
            successType: 'changePassword'
        });
    };
    ForgotPasswordResetComponent.prototype.onCancel = function () {
        this.closeModal();
        this.destroy();
    };
    ForgotPasswordResetComponent.prototype.onOk = function () {
        this.closeModal();
        this.destroy();
        // this.ok =;
    };
    ForgotPasswordResetComponent.prototype.onSubmit = function (resetPassword) {
        console.log(resetPassword);
        console.log('ok');
        this.setPassword(resetPassword);
        //this.validateForm();
        this.submitted = true;
    };
    ForgotPasswordResetComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordResetComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password-reset',
            template: __webpack_require__(896),
            styles: [__webpack_require__(857)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__forgot_password_reset_service__["a" /* ForgotPasswordResetService */],
                __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_service__["a" /* ForgotPasswordService */]
            ]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["b" /* Modal */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__forgot_password_reset_service__["a" /* ForgotPasswordResetService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__forgot_password_reset_service__["a" /* ForgotPasswordResetService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_service__["a" /* ForgotPasswordService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_service__["a" /* ForgotPasswordService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["c" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["c" /* ModalService */]) === 'function' && _c) || Object])
    ], ForgotPasswordResetComponent);
    return ForgotPasswordResetComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password-reset.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forgot_password_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_country_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_reset_forgot_password_reset_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(forgotPasswordService, modalService, countriesService, route) {
        this.forgotPasswordService = forgotPasswordService;
        this.modalService = modalService;
        this.countriesService = countriesService;
        this.route = route;
        this.forgotPassword = new __WEBPACK_IMPORTED_MODULE_3__forgot_password__["a" /* ForgotPassword */]();
        this.dataError = [];
        this.submitted = false;
        // submit button default state
        this.submitting = false;
        // MODAL
        this.modalId = 'modalForgotPassword';
    }
    /**
     *
     * @param reset
     * requesting code to reset the password
     */
    ForgotPasswordComponent.prototype.sendResetCode = function (reset) {
        var _this = this;
        this.submitting = true;
        //save in local storage for faster retrieval of information for resent code
        localStorage.setItem('PasswordResetUserName', reset.UserName);
        localStorage.setItem('PasswordResetEmail', reset.Email);
        localStorage.setItem('PasswordResetMobileCountryCode', reset.MobileCountryCode);
        localStorage.setItem('PasswordResetMobileNo', reset.MobileNo);
        this.forgotPasswordService.sendResetCode(reset)
            .subscribe(function (success) {
            _this.submitting = false;
            _this.success = success;
            var data = success;
            //this.dataError = data.Messages;
            console.log(data);
            var status = data.Status;
            if (status == 'SUCCESS') {
                _this.valid = true;
                _this.onOk();
            }
            else {
                _this.valid = false;
                _this.submitting = false;
                _this.dataError = data.Messages;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    // Open Next Modal
    ForgotPasswordComponent.prototype.openModal = function () {
        // Close Existing Modal
        this.closeModal();
        this.destroy();
        // Call new modal
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_7__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_6__forgot_password_reset_forgot_password_reset_component__["a" /* ForgotPasswordResetComponent */], {});
    };
    /**
     * Get Countries
     */
    ForgotPasswordComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.error = error; });
    };
    Object.defineProperty(ForgotPasswordComponent.prototype, "diagnostic", {
        // validate to api
        // validateUsername(username: string): void {
        //     this.route.params
        //         .switchMap((params: Params) => this.forgotPasswordService.validateUsername(username))
        //         .subscribe(
        //         success => {
        //             if (localStorage.getItem('UsernameExist') == 'true') {
        //                 this.sendResetCode(this.forgotPassword);
        //                 this.openModal();
        //             } else {
        //             }
        //         },
        //         error => this.error = error
        //         );
        // }
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.forgotPassword);
        },
        enumerable: true,
        configurable: true
    });
    ForgotPasswordComponent.prototype.onCancel = function () {
        this.closeModal();
        this.destroy();
    };
    ForgotPasswordComponent.prototype.onOk = function () {
        this.closeModal();
        this.destroy();
        this.openModal();
    };
    ForgotPasswordComponent.prototype.onSubmit = function (forgotPassword) {
        this.sendResetCode(forgotPassword);
        console.log('ok');
        this.submitted = true;
        // this.ok = this.sendResetCode;
        //validate:
        // connect to api to validate username if valid or not
        //this.validateUsername(this.forgotPassword.UserName);
    };
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.forgotPassword.MobileCountryCode = '+86';
    };
    ForgotPasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(897),
            styles: [__webpack_require__(858)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__forgot_password_service__["a" /* ForgotPasswordService */],
                __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */]
            ]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__elements_modal_modal_module__["b" /* Modal */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__forgot_password_service__["a" /* ForgotPasswordService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__forgot_password_service__["a" /* ForgotPasswordService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__elements_modal_modal_module__["c" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__elements_modal_modal_module__["c" /* ModalService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPasswordService = (function () {
    function ForgotPasswordService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/SendResetPasswordCode'; // This is the API Endpoint to sending the reset password code
        this.urlValidateUsername = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Player/IsUserExists'; // This is the API Endpoint for registering user
    }
    /**
     *
     * @param username
     * @returns {Observable<ForgotPassword>}
     */
    ForgotPasswordService.prototype.validateUsername = function (username) {
        return this.http
            .get(this.urlValidateUsername + ("?username=" + username), __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractDataUsername)
            .catch(this.handleError);
    };
    /**
     *
     * @param reset
     * @returns {Observable<ForgotPassword>}
     * requesting for resetting the password
     */
    ForgotPasswordService.prototype.sendResetCode = function (reset) {
        return this.http
            .post(this.url, reset, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    ForgotPasswordService.prototype.extractDataUsername = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
            //trace if username is exist
            localStorage.setItem('UsernameExist', bodyData);
        }
        return rejectMsg || {};
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    ForgotPasswordService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return body || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    ForgotPasswordService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ForgotPasswordService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ForgotPasswordService);
    return ForgotPasswordService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password.service.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GamesService = (function () {
    function GamesService(http, translate, authService) {
        this.http = http;
        this.translate = translate;
        this.authService = authService;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'games/'; // This is the API Endpoint for getting the game list.
        this.URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'GameManager/GetGameUrl?';
    }
    // getGamesAll(): Observable<Games> {
    //     let lang = this.translate.currentLang;
    //     const url = `${this.GAMES_URL}${lang}`;
    //     return this.http
    //         .get(url, this.authService.contentBasicAuth())
    //         .map(this.extractData)
    //         .catch(this.handleError)
    // }
    GamesService.prototype.getGamesByCategory = function (category) {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang + "/" + category;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    GamesService.prototype.getGamesByPlatform = function (platform, category) {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang + "/" + platform + "/" + category;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    GamesService.prototype.getGamesUrl = function (platform, category) {
        var lang = this.translate.currentLang;
        var url = "" + this.URL + ('GamePlatform=' + platform) + ('&GameType=' + category) + ('&Language=' + lang) + ('&isMobile=' + 1);
        return this.http
            .get(url, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    GamesService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        // if (bodyData == null) {
        //     rejectMsg = {
        //         bodyStatus: body.Status,
        //         Error: body.Messages.Errors,
        //     }
        // } else {
        //     rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        // }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    GamesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    GamesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], GamesService);
    return GamesService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/games.service.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HeaderService = (function () {
    function HeaderService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.URL = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/Balance'; // This is the API Endpoint for POST Deposit
    }
    /**
     * @param onlineDeposit
     * @returns {Observable<OnlineDeposit>}
     * POST Deposit Bank
     */
    HeaderService.prototype.getBalance = function () {
        return this.http
            .get(this.URL, __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param onlineDeposit
     * @returns {Observable<OnlineDeposit>}
     * POST Deposit Bank
     */
    // getIP(): Observable<Header> {
    //     return this.http
    //         .get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
    //         .map(this.extractData)
    //         .catch(this.handleError)
    // }
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    HeaderService.prototype.extractData = function (res) {
        var body = res.json();
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
            url: body.Data.Url
        };
        return body || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    HeaderService.prototype.handleError = function (error) {
        if (error.status == 403) {
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    HeaderService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], HeaderService);
    return HeaderService;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/header.service.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var LoginService = (function () {
    function LoginService(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.URL = __WEBPACK_IMPORTED_MODULE_9__app_config__["a" /* AppSettings */].API_ENDPOINT + 'User/Login'; // This is the API Endpoint for registering user
    }
    /**
     * @param login
     * @returns {Observable<Login>}
     * POST user login
     */
    LoginService.prototype.login = function (login) {
        return this.http
            .post(this.URL, login, __WEBPACK_IMPORTED_MODULE_10__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            localStorage.setItem('TokenId', bodyData.TokenId);
            localStorage.setItem('Username', bodyData.UserName);
            localStorage.setItem('Roles', bodyData.Roles);
            localStorage.setItem('SignalRTokenId', bodyData.SignalRTokenId);
            localStorage.setItem('Expiration', bodyData.Expirration);
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    LoginService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].throw(errMsg);
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginService);
    return LoginService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/login.service.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mobile_verification__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mobile_verification_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__country_country_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileVerificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MobileVerificationComponent = (function () {
    function MobileVerificationComponent(mobileVerificationService, profileService, countriesService, router) {
        this.mobileVerificationService = mobileVerificationService;
        this.profileService = profileService;
        this.countriesService = countriesService;
        this.router = router;
        this.mobileVerifications = new __WEBPACK_IMPORTED_MODULE_3__mobile_verification__["a" /* MobileVerification */]();
        this.valid = false;
        this.submitted = false;
        this.buttonEnabled = '';
        this.dataError = [];
        this.hasSend = false;
        this.submitting = false;
        this.submittingResend = false;
        // MODAL
        this.modalId = 'modalVerifyMobile';
    }
    MobileVerificationComponent.prototype.verifyMobile = function (email) {
        var _this = this;
        this.submitted = true;
        this.submitting = true;
        email.UserName = localStorage.getItem('Username');
        this.mobileVerificationService.verifyMobile(email)
            .subscribe(function (success) {
            var data = success;
            var status = data.Status;
            _this.success = success;
            if (status == 'SUCCESS') {
                _this.valid = true;
                _this.hasSend = true;
                _this.submitting = false;
            }
            else {
                _this.valid = false;
                _this.dataError = data.Messages;
                _this.submitting = false;
            }
        }, function (error) {
            _this.submitted = false;
            _this.submitting = false;
            _this.error = error;
        });
    };
    MobileVerificationComponent.prototype.resetMobile = function (email) {
        var _this = this;
        this.submittingResend = true;
        this.mobileVerificationService.resetMobile(email)
            .subscribe(function (success) {
            // this.success = <any>success;
            var data = success;
            var status = data.Status;
            console.log(status);
            _this.success = success;
            if (status == 'SUCCESS') {
                _this.submittingResend = false;
                _this.valid = true;
                _this.onCancel();
            }
            else {
                _this.valid = false;
                _this.dataError = data.Messages;
                _this.submittingResend = false;
            }
        }, function (error) {
            _this.submitted = false;
            _this.submittingResend = false;
            _this.error = error;
        });
    };
    MobileVerificationComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profile) { return _this.profile = profile; }, function (error) { return _this.error = error; });
    };
    /**
     * Get Countries
     */
    MobileVerificationComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.error = error; });
    };
    MobileVerificationComponent.prototype.goToProfile = function () {
        console.log('start');
        this.router.navigate(['/profile']);
        console.log('end');
    };
    MobileVerificationComponent.prototype.onCancel = function () {
        this.closeModal();
        this.destroy();
        this.router.navigate(['/profile']);
    };
    MobileVerificationComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.getCountries();
    };
    MobileVerificationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["b" /* Modal */])(),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mobile-verification',
            template: __webpack_require__(903),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__mobile_verification_service__["a" /* MobileVerificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__mobile_verification_service__["a" /* MobileVerificationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_profile_service__["a" /* ProfileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__country_country_service__["a" /* CountryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__country_country_service__["a" /* CountryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], MobileVerificationComponent);
    return MobileVerificationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/mobile-verification.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineDepositBankService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OnlineDepositBankService = (function () {
    function OnlineDepositBankService(http) {
        this.http = http;
        this.urlPostOnlineDepositBank = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'OnlineDeposit/GetOnlineDepositThirdPartyBanks'; // This is the API Endpoint for getting the list for Online Bank
    }
    /**
     * @returns {Observable<OnlineDepositBank[]>}
     * GET Security Question
     */
    OnlineDepositBankService.prototype.getOnlineDepositBank = function () {
        return this.http
            .get(this.urlPostOnlineDepositBank, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    OnlineDepositBankService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    OnlineDepositBankService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    OnlineDepositBankService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], OnlineDepositBankService);
    return OnlineDepositBankService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/online-deposit-bank.service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositGenerateUdaIdService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuickDepositGenerateUdaIdService = (function () {
    function QuickDepositGenerateUdaIdService(http) {
        this.http = http;
        this.urlPostUdaId = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/ReserveUDA'; //with parameter paymentMethod  and amount   // This is the API Endpoint to Generate UDA ID Info
    }
    QuickDepositGenerateUdaIdService.prototype.getUdaId = function (udaId) {
        return this.http
            .post(this.urlPostUdaId, udaId, __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    // /**
    //  *
    //  * @param id
    //  * @returns {Observable<UdaId[]>}
    //  */
    // getUdaId(paymentMethodId: string,amount: string): Observable<UdaId[]> {
    //     return this.http
    //         .post(this.urlPostUdaId +`?PaymentMethodId=${paymentMethodId}&DepositAmount=${amount}`, requestOptionsProvider)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    /**
     *
     * @param res
     * @returns {any}
     */
    QuickDepositGenerateUdaIdService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    QuickDepositGenerateUdaIdService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuickDepositGenerateUdaIdService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuickDepositGenerateUdaIdService);
    return QuickDepositGenerateUdaIdService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-generate-uda-id.service.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_country_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__elements_modal_success_modal_component__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var RegistrationComponent = (function () {
    function RegistrationComponent(regService, modalService, route, countriesService) {
        this.regService = regService;
        this.modalService = modalService;
        this.route = route;
        this.countriesService = countriesService;
        this.dataError = [];
        this.submitted = false;
        this.registration = new __WEBPACK_IMPORTED_MODULE_3__registration__["a" /* Registration */]();
        // submit button default state
        this.submitting = false;
        // MODAL
        this.modalId = 'modalRegister';
    }
    // Validate Form
    RegistrationComponent.prototype.validateForm = function () {
        this.addUser(this.registration);
    };
    // Add User Service Call
    RegistrationComponent.prototype.addUser = function (reg) {
        var _this = this;
        this.submitting = true;
        this.regService.create(reg)
            .subscribe(function (success) {
            _this.success = success;
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            if (!bodyData) {
                _this.openModal();
            }
        }, function (error) {
            _this.error = error,
                _this.submitting = false;
        });
    };
    // Get Countries Service Call
    RegistrationComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.error = error; });
    };
    Object.defineProperty(RegistrationComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.registration);
        },
        enumerable: true,
        configurable: true
    });
    // Open Next Modal;
    // Show Secruity Questions Modal
    RegistrationComponent.prototype.openModal = function () {
        // Close Existing Modal
        this.closeModal();
        this.destroy();
        // Call new modal
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_6__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_8__elements_modal_success_modal_component__["a" /* SuccessModalComponent */], {
            successType: 'register'
        });
    };
    RegistrationComponent.prototype.onCancel = function () {
        this.closeModal();
        this.destroy();
    };
    RegistrationComponent.prototype.onOk = function () {
        this.closeModal();
        this.destroy();
        // this.ok = this.addUser;
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.validateForm();
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.getCountries();
        this.registration.MobileCountryCodeNumber = '+86';
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(914),
            styles: [__webpack_require__(874)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */]]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["b" /* Modal */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__registration_service__["a" /* RegistrationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__registration_service__["a" /* RegistrationService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["c" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__elements_modal_modal_module__["c" /* ModalService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */]) === 'function' && _d) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/registration.component.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityQuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SecurityQuestionService = (function () {
    function SecurityQuestionService(http) {
        this.http = http;
        this.urlGetSecurityQuestions = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PandoraCommon/GetSecurityQuestions'; // This is the API Endpoint for getting the list for Security Question
    }
    /**
     * @returns {Observable<SecurityQuestion[]>}
     * GET Security Question
     */
    SecurityQuestionService.prototype.getSecurityQuestion = function () {
        return this.http
            .get(this.urlGetSecurityQuestions, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    SecurityQuestionService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    SecurityQuestionService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SecurityQuestionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SecurityQuestionService);
    return SecurityQuestionService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/security-question.service.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvinceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StateProvinceService = (function () {
    function StateProvinceService(http) {
        this.http = http;
        this.urlGetStateProvince = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PandoraCommon/GetStateProvinceByCountry/CN'; // This is the API Endpoint for getting the list of State Province
    }
    /**
     * @returns {Observable<StateProvince[]>}
     * GET State Province
     */
    StateProvinceService.prototype.getStateProvince = function () {
        return this.http
            .get(this.urlGetStateProvince, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {data}
     * Extract Body Response
     */
    StateProvinceService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    StateProvinceService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    StateProvinceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], StateProvinceService);
    return StateProvinceService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/state-province.service.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalTransactionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WithdrawalTransactionService = (function () {
    function WithdrawalTransactionService(http) {
        this.http = http;
        this.urlGetWithdrawalTransaction = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/MyWallet'; // This is the API Endpoint for getting the list for Withdrawal Transaction per User
    }
    /**
     * @returns {Observable<WithdrawalTransaction[]>}
     * GET Withdrawal Transaction
     */
    WithdrawalTransactionService.prototype.getWithdrawalTransaction = function () {
        return this.http
            .get(this.urlGetWithdrawalTransaction, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    WithdrawalTransactionService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    WithdrawalTransactionService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WithdrawalTransactionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], WithdrawalTransactionService);
    return WithdrawalTransactionService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/withdrawal-transaction.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService() {
        this.isLoggedIn = false;
        this.tokenId = localStorage.getItem('TokenId');
        this.username = localStorage.getItem('TokenId');
    }
    AuthService.prototype.login = function () {
        var token;
        if (this.tokenId) {
            this.isLoggedIn = true;
            token = true;
        }
        return token;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('TokenId');
        this.isLoggedIn = false;
    };
    AuthService.prototype.contentBasicAuth = function () {
        var username = 'webmaster';
        var password = 'changepass123';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return options;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AuthService);
    return AuthService;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/auth.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLogin();
    };
    AuthGuard.prototype.checkLogin = function () {
        // Store the attempted URL for redirecting
        // /this.authService.redirectUrl = url;
        if (!this.authService.login()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/auth-guard.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bank_add__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bank_add_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BankAddComponent = (function () {
    function BankAddComponent(bankAddService, quickDepositPreferredBankService, location, mScrollbarService) {
        this.bankAddService = bankAddService;
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
        this.bankAdd = new __WEBPACK_IMPORTED_MODULE_3__bank_add__["a" /* BankAdd */]();
        this.dataError = [];
        this.submitted = false;
        // submit button default state
        this.submitting = false;
    }
    /**
     * Get Quick Deposit Banks
     */
    BankAddComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.error = error; });
    };
    /**
    * @param bankDetail
    * Create Bank Information
    */
    BankAddComponent.prototype.create = function (bankAdd) {
        var _this = this;
        this.submitted = true;
        this.submitting = true;
        this.bankAddService.create(bankAdd)
            .subscribe(function (success) {
            _this.success = success;
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            if (bodyData == 'SUCCESS') {
                _this.valid = true;
                console.log(_this.valid);
            }
            else {
                _this.valid = false;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error,
                _this.submitting = false;
        });
    };
    Object.defineProperty(BankAddComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.bankAdd);
        },
        enumerable: true,
        configurable: true
    });
    // Go back to previous location
    BankAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    BankAddComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    BankAddComponent.prototype.ngOnInit = function () {
        this.getQuickDepositPreferredBank();
        this.bankAdd.BankAccountName = localStorage.getItem('Username');
    };
    BankAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bank-add',
            template: __webpack_require__(884),
            styles: [__webpack_require__(846)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__bank_add_service__["a" /* BankAddService */],
                __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__bank_add_service__["a" /* BankAddService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__bank_add_service__["a" /* BankAddService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _d) || Object])
    ], BankAddComponent);
    return BankAddComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank-add.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAddService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BankAddService = (function () {
    function BankAddService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/CreateBankAccount';
    }
    /**
    *
    * @param bankAdd
    * @returns {Observable<BankAdd>}
    */
    BankAddService.prototype.create = function (bankAdd) {
        bankAdd.AccountName = localStorage.getItem('Username');
        return this.http
            .post(this.url, bankAdd, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    BankAddService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };
        return rejectMsg || {};
    };
    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    BankAddService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BankAddService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BankAddService);
    return BankAddService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank-add.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bank_detail_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BankDetailComponent = (function () {
    function BankDetailComponent(bankDetailService, route, quickDepositPreferredBankService, location, mScrollbarService) {
        this.bankDetailService = bankDetailService;
        this.route = route;
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
    }
    /**
     * Get Quick Deposit Banks
     */
    BankDetailComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Get user bank list with ID Parameter
     */
    BankDetailComponent.prototype.modifyBank = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.bankDetailService.modifyBank(params['id']); })
            .subscribe(function (bankDetails) { return _this.bankDetails = bankDetails; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * @param bankDetail
     * Update Bank Information
     */
    BankDetailComponent.prototype.bankUpdate = function (bankDetail) {
        var _this = this;
        this.bankDetailService.bankUpdate(bankDetail)
            .subscribe(function (success) { return _this.successMessage = success; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(BankDetailComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.bankDetails);
        },
        enumerable: true,
        configurable: true
    });
    // Go back to previous location
    BankDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BankDetailComponent.prototype.ngOnInit = function () {
        this.modifyBank();
        this.getQuickDepositPreferredBank();
    };
    BankDetailComponent.prototype.ngAfterViewChecked = function () {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    BankDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bank-detail',
            template: __webpack_require__(885),
            styles: [__webpack_require__(847)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__bank_detail_service__["a" /* BankDetailService */],
                __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__bank_detail_service__["a" /* BankDetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__bank_detail_service__["a" /* BankDetailService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _e) || Object])
    ], BankDetailComponent);
    return BankDetailComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank-detail.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BankDetailService = (function () {
    function BankDetailService(http) {
        this.http = http;
        this.urlGetBank = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/GetBankAccount'; //with parameter ID    // This is the API Endpoint for Get Banks Info
        this.urlPostBank = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/UpdateBankAccount'; // This is the API Endpoint for Update Banks
    }
    /**
     *
     * @param id
     * @returns {Observable<BankDetail[]>}
     */
    BankDetailService.prototype.modifyBank = function (id) {
        return this.http
            .get(this.urlGetBank + ("?id=" + id), __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param bankDetail
     * @returns {Observable<BankDetail>}
     * POST update bankDetail
     */
    BankDetailService.prototype.bankUpdate = function (bankDetail) {
        return this.http
            .post(this.urlPostBank, bankDetail, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    BankDetailService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    BankDetailService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BankDetailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], BankDetailService);
    return BankDetailService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank-detail.service.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BankComponent = (function () {
    function BankComponent(profileService, mScrollbarService) {
        this.profileService = profileService;
        this.mScrollbarService = mScrollbarService;
    }
    /**
     *Get Profile Information
     */
    BankComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profiles) { return _this.profiles = profiles; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(BankComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.banks);
        },
        enumerable: true,
        configurable: true
    });
    BankComponent.prototype.ngAfterViewChecked = function () {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    BankComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    BankComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bank',
            template: __webpack_require__(886),
            styles: [__webpack_require__(848)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__["a" /* ProfileService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__profile_profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _b) || Object])
    ], BankComponent);
    return BankComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__banner_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games_games_service__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerComponent = (function () {
    function BannerComponent(bannerService, gameService) {
        this.bannerService = bannerService;
        this.gameService = gameService;
    }
    BannerComponent.prototype.getBanner = function () {
        var _this = this;
        this.bannerService.getBanner()
            .subscribe(function (success) { return _this.banner = success; }, function (error) { return _this.errorMessages = error; });
    };
    BannerComponent.prototype.playGames = function (platform, category) {
        var _this = this;
        this.gameService.getGamesUrl(platform, category)
            .subscribe(function (success) {
            _this.success = success;
            var body = success;
            var url = body.Data.Url;
            var frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url + '"></iframe>';
            if (body.Status == 'SUCCESS') {
                // this.gameUrl = url;
                $('.fullscreen-container').show().html(frame);
            }
            else {
                $('.fullscreen-container').show().html('Sorry. Error loading game');
            }
        }, function (error) {
            _this.errorMessages = error;
            $('.fullscreen-container').show().html('Oops! Sorry. Error loading game');
        });
    };
    BannerComponent.prototype.loadiframe = function (platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    };
    BannerComponent.prototype.ngOnInit = function () {
        this.getBanner();
    };
    BannerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(887),
            styles: [__webpack_require__(849)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__banner_service__["a" /* BannerService */], __WEBPACK_IMPORTED_MODULE_2__games_games_service__["a" /* GamesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__banner_service__["a" /* BannerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__banner_service__["a" /* BannerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__games_games_service__["a" /* GamesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__games_games_service__["a" /* GamesService */]) === 'function' && _b) || Object])
    ], BannerComponent);
    return BannerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/banner.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var BannerService = (function () {
    function BannerService(http, authService, translate) {
        this.http = http;
        this.authService = authService;
        this.translate = translate;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'banner/'; // This is the API Endpoint for getting the game list.
        this.URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'GameManager/GetGameUrl?';
    }
    BannerService.prototype.getBanner = function () {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    BannerService.prototype.getBannerUrl = function (platform, category) {
        var lang = this.translate.currentLang;
        var url = "" + this.URL + ('GamePlatform=' + platform) + ('&GameType=' + category) + ('&Language=' + lang) + ('&isMobile=' + 1);
        return this.http
            .get(url, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    BannerService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    BannerService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BannerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _c) || Object])
    ], BannerService);
    return BannerService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/banner.service.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__casino_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CasinoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CasinoComponent = (function () {
    function CasinoComponent(casinoService, mScrollbarService) {
        this.casinoService = casinoService;
        this.mScrollbarService = mScrollbarService;
    }
    CasinoComponent.prototype.getCasinos = function () {
        var _this = this;
        this.casinoService.getCasinos()
            .subscribe(function (success) { return _this.casinos = success; }, function (error) { return _this.error = error; });
    };
    CasinoComponent.prototype.playGames = function (platform, category) {
        var _this = this;
        this.casinoService.getGamesUrl(platform, category)
            .subscribe(function (success) {
            _this.success = success;
            var body = success;
            var url = body.Data.Url;
            var frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url + '"></iframe>';
            if (body.Status == 'SUCCESS') {
                // this.gameUrl = url;
                $('.fullscreen-container').show().html(frame);
            }
            else {
                $('.fullscreen-container').show().html('Sorry. Something went wrong while loading Casino');
            }
        }, function (error) {
            _this.error = error;
            $('.fullscreen-container').show().html('Sorry. Error loading Casino.');
        });
    };
    CasinoComponent.prototype.loadiframe = function (platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    };
    CasinoComponent.prototype.ngOnInit = function () {
        this.getCasinos();
    };
    CasinoComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    CasinoComponent.prototype.ngOnDestroy = function () {
        this.mScrollbarService.destroy('#scrollable');
    };
    CasinoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-casino',
            template: __webpack_require__(888),
            styles: [__webpack_require__(850)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__casino_service__["a" /* CasinoService */], __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__casino_service__["a" /* CasinoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__casino_service__["a" /* CasinoService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _b) || Object])
    ], CasinoComponent);
    return CasinoComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/casino.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__country_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryComponent = (function () {
    function CountryComponent(countriesService) {
        this.countriesService = countriesService;
    }
    /**
     * Get Countries
     */
    CountryComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(CountryComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.getCountries);
        },
        enumerable: true,
        configurable: true
    });
    CountryComponent.prototype.ngOnInit = function () {
        this.getCountries();
    };
    CountryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(889),
            styles: [__webpack_require__(851)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__country_service__["a" /* CountryService */]) === 'function' && _a) || Object])
    ], CountryComponent);
    return CountryComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/country.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deposit_transaction_service__ = __webpack_require__(405);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositTransactionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DepositTransactionComponent = (function () {
    function DepositTransactionComponent(depositTransactionService) {
        this.depositTransactionService = depositTransactionService;
    }
    /**
     * Get Deposit Transaction
     */
    DepositTransactionComponent.prototype.getDepositTransaction = function () {
        var _this = this;
        this.depositTransactionService.getDepositTransaction()
            .subscribe(function (depositTransactions) { return _this.depositTransactions = depositTransactions; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(DepositTransactionComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.depositTransactions);
        },
        enumerable: true,
        configurable: true
    });
    DepositTransactionComponent.prototype.ngOnInit = function () {
        this.getDepositTransaction();
    };
    DepositTransactionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deposit-transaction',
            template: __webpack_require__(890),
            styles: [__webpack_require__(852)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__deposit_transaction_service__["a" /* DepositTransactionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__deposit_transaction_service__["a" /* DepositTransactionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__deposit_transaction_service__["a" /* DepositTransactionService */]) === 'function' && _a) || Object])
    ], DepositTransactionComponent);
    return DepositTransactionComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/deposit-transaction.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositTransactionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DepositTransactionService = (function () {
    function DepositTransactionService(http) {
        this.http = http;
        this.urlGetDepositTransaction = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/MyWallet'; // This is the API Endpoint for getting the list for Withdrawal Transaction per User
    }
    /**
     * @returns {Observable<DepositTransaction[]>}
     * GET Withdrawal Transaction
     */
    DepositTransactionService.prototype.getDepositTransaction = function () {
        return this.http
            .get(this.urlGetDepositTransaction, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    DepositTransactionService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData.Deposits; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    DepositTransactionService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    DepositTransactionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DepositTransactionService);
    return DepositTransactionService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/deposit-transaction.service.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EmailVerificationService = (function () {
    function EmailVerificationService(http) {
        this.http = http;
        this.ResetEmailCode = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/ResetEmailByCode';
        this.senEmailResetCode = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/SendEmailResetCode';
    }
    EmailVerificationService.prototype.verifyEmail = function (user) {
        return this.http
            .post(this.senEmailResetCode, user, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmailVerificationService.prototype.resetEmail = function (user) {
        return this.http
            .post(this.ResetEmailCode, user, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    EmailVerificationService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };
        return body || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    EmailVerificationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    EmailVerificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], EmailVerificationService);
    return EmailVerificationService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/email-verification.service.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedGamesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FeaturedGamesService = (function () {
    function FeaturedGamesService(http, translate, authService) {
        this.http = http;
        this.translate = translate;
        this.authService = authService;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'games/'; // This is the API Endpoint for getting the game list.
        this.URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'GameManager/GetGameUrl?';
    }
    FeaturedGamesService.prototype.getGames = function () {
        var category = 'Featured Games';
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang + "/" + category;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    FeaturedGamesService.prototype.getGamesUrl = function (platform, category) {
        var lang = this.translate.currentLang;
        var url = "" + this.URL + ('GamePlatform=' + platform) + ('&GameType=' + category) + ('&Language=' + lang) + ('&isMobile=' + 1);
        return this.http
            .get(url, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    FeaturedGamesService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        // if (bodyData == null) {
        //     rejectMsg = {
        //         bodyStatus: body.Status,
        //         Error: body.Messages.Errors,
        //     }
        // } else {
        //     rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        // }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    FeaturedGamesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    FeaturedGamesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FeaturedGamesService);
    return FeaturedGamesService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/featured-games.service.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordResetService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ForgotPasswordResetService = (function () {
    function ForgotPasswordResetService(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/ResetPasswordByCode'; // This is the API Endpoint to reset the password using reset code
    }
    /**
     *
     * @param reset
     * @returns {Observable<ResetPassword>}
     * resetting the password
     */
    ForgotPasswordResetService.prototype.setPassword = function (reset) {
        return this.http
            .post(this.url, reset, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    ForgotPasswordResetService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
            //remove all the local storage regarding for resent code
            localStorage.removeItem('PasswordResetUserName');
            localStorage.removeItem('PasswordResetEmail');
            localStorage.removeItem('PasswordResetMobileCountryCode');
            localStorage.removeItem('PasswordResetMobileNo');
        }
        return body || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    ForgotPasswordResetService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ForgotPasswordResetService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ForgotPasswordResetService);
    return ForgotPasswordResetService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password-reset.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
var ForgotPassword = (function () {
    function ForgotPassword() {
    }
    return ForgotPassword;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__games__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__games_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GamesComponent = (function () {
    function GamesComponent(gameService, route, location, mScrollbarService) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
        this.gameFilter = { title: '', game_platform: '' };
        this.isActive = true;
        this.filter = new __WEBPACK_IMPORTED_MODULE_5__games__["a" /* Games */]();
    }
    // getGamesAll(): void {
    //     this.gameService.getGamesAll()
    //         .subscribe(
    //         success => this.games = success,
    //         error => this.errorMessages = error
    //         );
    // }
    GamesComponent.prototype.getGamesByCategory = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.gameService.getGamesByCategory(params['category']); })
            .subscribe(function (success) { return _this.games = success; }, function (error) { return _this.errorMessages = error; });
    };
    GamesComponent.prototype.getActivePlatform = function (platform) {
        this.isActive = false;
        this.filter.game_platform = platform;
        // if(!this.filter.game_platform || filter.title ) {
        //     this.filter = '';
        // }
    };
    GamesComponent.prototype.getGamesByPlatform = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.gameService.getGamesByPlatform(params['platform'], params['category']); })
            .subscribe(function (success) { return _this.gamesPlatform = success; }, function (error) { return _this.errorMessages = error; });
    };
    GamesComponent.prototype.playGames = function (platform, category) {
        var _this = this;
        this.gameService.getGamesUrl(platform, category)
            .subscribe(function (success) {
            _this.success = success;
            var body = success;
            var url = body.Data.Url;
            var frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url + '"></iframe>';
            if (body.Status == 'SUCCESS') {
                // this.gameUrl = url;
                $('.fullscreen-container').show().html(frame);
            }
            else {
                $('.fullscreen-container').show().html('Sorry. Error loading game');
            }
        }, function (error) {
            _this.errorMessages = error;
            $('.fullscreen-container').show().html('Ooops! Sorry. Error loading game');
        });
    };
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGamesByCategory();
        this.getGamesByPlatform();
        this.route.params.subscribe(function (params) {
            _this.parameter = params;
        });
    };
    GamesComponent.prototype.ngAfterViewChecked = function () {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    GamesComponent.prototype.ngOnDestroy = function () {
        this.mScrollbarService.destroy('#scrollable');
    };
    GamesComponent.prototype.nextPage = function () {
        console.log('Reached Bottom!!');
    };
    GamesComponent.prototype.loadiframe = function (platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    };
    GamesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(898),
            styles: [__webpack_require__(859)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__games_service__["a" /* GamesService */], __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__games_service__["a" /* GamesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__games_service__["a" /* GamesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _d) || Object])
    ], GamesComponent);
    return GamesComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/games.component.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casino_casino_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_signalR, casinoService, mScrollbarService) {
        this._signalR = _signalR;
        this.casinoService = casinoService;
        this.mScrollbarService = mScrollbarService;
        //console.log($('body'));
        // this.someFunction();
    }
    HomeComponent.prototype.getCasinos = function () {
        var _this = this;
        this.casinoService.getCasinos()
            .subscribe(function (success) { return _this.casinos = success; }, function (error) { return _this.error = error; });
    };
    HomeComponent.prototype.playGames = function (platform, category) {
        var _this = this;
        this.casinoService.getGamesUrl(platform, category)
            .subscribe(function (success) {
            _this.success = success;
            var body = success;
            var url = body.Data.Url;
            var frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url + '"></iframe>';
            if (body.Status == 'SUCCESS') {
                // this.gameUrl = url;
                $('.fullscreen-container').show().html(frame);
            }
            else {
                $('.fullscreen-container').show().html('Sorry. Something went wrong while loading Casino');
            }
        }, function (error) {
            _this.errorMessages = error;
            $('.fullscreen-container').show().html('Sorry. Error loading Casino.');
        });
    };
    HomeComponent.prototype.loadiframe = function (platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick',
            setHeight: true,
            advanced: {
                updateOnContentResize: true,
                updateOnImageLoad: true
            }
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getCasinos();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(899),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__["c" /* SignalR */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__["c" /* SignalR */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__casino_casino_service__["a" /* CasinoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__casino_casino_service__["a" /* CasinoService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _c) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/home.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password_component__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import 'assets/js/index.min.js'
// declare var getFringerprint: any;
var LoginComponent = (function () {
    function LoginComponent(loginService, authService, modalService) {
        this.loginService = loginService;
        this.authService = authService;
        this.modalService = modalService;
        this.login = new __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]();
        this.dataError = [];
        this.submitted = false;
        // submit button default state
        this.submitting = false;
        this.display = false;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    /**
     * @param login
     * Get Login Credential
     */
    LoginComponent.prototype.loginUser = function (login) {
        var _this = this;
        this.submitted = true; // if submitted login is true
        this.submitting = true;
        this.loginService.login(login)
            .subscribe(function (success) {
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            if (!bodyData) {
                _this.valid = true;
                location.replace('/home');
                _this.submitting = false;
            }
            else {
                _this.valid = false;
                _this.error = success;
                _this.submitted = false;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.login);
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.showDialog = function () {
        this.display = true;
    };
    LoginComponent.prototype.openModalRegistration = function () {
        var modal$ = this.modalService.create(__WEBPACK_IMPORTED_MODULE_5__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_7__registration_registration_component__["a" /* RegistrationComponent */], {});
    };
    LoginComponent.prototype.openModalForgotPassword = function () {
        var modal$ = this.modalService.create(__WEBPACK_IMPORTED_MODULE_5__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_8__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */], {});
    };
    LoginComponent.prototype.ngOnInit = function () {
        var storedUsername = localStorage.getItem('Username');
        if (storedUsername) {
            this.login.UserName = storedUsername;
            this.login.RememberMe = true;
        }
        else {
            this.login.RememberMe = false;
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(902),
            // styleUrls: ['./login.component.css'],
            providers: [__WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__elements_modal_modal_module__["c" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__elements_modal_modal_module__["c" /* ModalService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/login.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileVerificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MobileVerificationService = (function () {
    function MobileVerificationService(http) {
        this.http = http;
        this.sendMobileCode = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/SendMobileResetCode';
        this.resetMobileCode = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/ResetMobileByCode';
    }
    MobileVerificationService.prototype.verifyMobile = function (user) {
        return this.http
            .post(this.sendMobileCode, user, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    MobileVerificationService.prototype.resetMobile = function (user) {
        return this.http
            .post(this.resetMobileCode, user, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    MobileVerificationService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };
        return body || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    MobileVerificationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    MobileVerificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MobileVerificationService);
    return MobileVerificationService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/mobile-verification.service.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__online_deposit_bank_service__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineDepositBankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnlineDepositBankComponent = (function () {
    function OnlineDepositBankComponent(onlineDepositBankService) {
        this.onlineDepositBankService = onlineDepositBankService;
    }
    /**
     * Get Online Deposit Banks
     */
    OnlineDepositBankComponent.prototype.getOnlineDepositBank = function () {
        var _this = this;
        this.onlineDepositBankService.getOnlineDepositBank()
            .subscribe(function (successMessage) { return _this.successMessage = successMessage; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(OnlineDepositBankComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.onlineDepositBanks);
        },
        enumerable: true,
        configurable: true
    });
    OnlineDepositBankComponent.prototype.ngOnInit = function () {
        this.getOnlineDepositBank();
    };
    OnlineDepositBankComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(904),
            styles: [__webpack_require__(864)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__online_deposit_bank_service__["a" /* OnlineDepositBankService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__online_deposit_bank_service__["a" /* OnlineDepositBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__online_deposit_bank_service__["a" /* OnlineDepositBankService */]) === 'function' && _a) || Object])
    ], OnlineDepositBankComponent);
    return OnlineDepositBankComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/online-deposit-bank.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__online_deposit__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__online_deposit_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__online_deposit_bank_online_deposit_bank_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineDepositComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OnlineDepositComponent = (function () {
    function OnlineDepositComponent(onlineDepositService, onlineDepositBankService, mScrollbarService) {
        this.onlineDepositService = onlineDepositService;
        this.onlineDepositBankService = onlineDepositBankService;
        this.mScrollbarService = mScrollbarService;
        this.onlineDeposit = new __WEBPACK_IMPORTED_MODULE_2__online_deposit__["a" /* OnlineDeposit */]();
        this.dataError = [];
        this.submitted = false;
        // submit button default state
        this.submitting = false;
    }
    OnlineDepositComponent.prototype.getOnlineDepositBank = function () {
        var _this = this;
        this.onlineDepositBankService.getOnlineDepositBank()
            .subscribe(function (onlineDepositBanks) { return _this.onlineDepositBanks = onlineDepositBanks; }, function (error) { return _this.error = error; });
    };
    /**
     * @param onlineDeposit
     */
    OnlineDepositComponent.prototype.depositBank = function (onlineDeposit) {
        var _this = this;
        this.submitted = true;
        this.submitting = true;
        this.onlineDepositService.depositBank(onlineDeposit)
            .subscribe(function (success) {
            _this.success = success;
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            if (bodyData == 'SUCCESS') {
                _this.valid = true;
                console.log(_this.valid);
                _this.submitting = false;
            }
            else {
                _this.valid = false;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    OnlineDepositComponent.prototype.onCancel = function () {
        this.submitted = false;
    };
    OnlineDepositComponent.prototype.resetForm = function () {
        this.submitted = false;
        // this.OnlineDepositBankForm.reset();
    };
    OnlineDepositComponent.prototype.proceedLink = function (url) {
        console.log(url);
        window.open(url, '_blank', 'location=yes,scrollbars=yes,status=yes');
        this.resetForm();
    };
    Object.defineProperty(OnlineDepositComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.onlineDeposit);
        },
        enumerable: true,
        configurable: true
    });
    OnlineDepositComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    OnlineDepositComponent.prototype.ngOnInit = function () {
        this.getOnlineDepositBank();
    };
    OnlineDepositComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-online-deposit',
            template: __webpack_require__(905),
            styles: [__webpack_require__(865)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__online_deposit_service__["a" /* OnlineDepositService */],
                __WEBPACK_IMPORTED_MODULE_4__online_deposit_bank_online_deposit_bank_service__["a" /* OnlineDepositBankService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__online_deposit_service__["a" /* OnlineDepositService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__online_deposit_service__["a" /* OnlineDepositService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__online_deposit_bank_online_deposit_bank_service__["a" /* OnlineDepositBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__online_deposit_bank_online_deposit_bank_service__["a" /* OnlineDepositBankService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _c) || Object])
    ], OnlineDepositComponent);
    return OnlineDepositComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/online-deposit.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineDepositService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OnlineDepositService = (function () {
    function OnlineDepositService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'OnlineDeposit/DepositThirdPartyBank'; // This is the API Endpoint for POST Deposit
    }
    /**
     * @param onlineDeposit
     * @returns {Observable<OnlineDeposit>}
     * POST Deposit Bank
     */
    OnlineDepositService.prototype.depositBank = function (onlineDeposit) {
        return this.http
            .post(this.URL, onlineDeposit, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    OnlineDepositService.prototype.extractData = function (res) {
        var body = res.json();
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
            url: body.Data.Url
        };
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    OnlineDepositService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    OnlineDepositService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], OnlineDepositService);
    return OnlineDepositService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/online-deposit.service.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__security_question_security_question_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__country_country_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_province_state_province_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__email_verification_email_verification_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mobile_verification_mobile_verification_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileComponent = (function () {
    /**
     * @param profileService
     * @param securityQuestion
     * @param countriesService
     */
    function ProfileComponent(profileService, securityQuestion, countriesService, stateProvinceService, mScrollbarService, modalService) {
        this.profileService = profileService;
        this.securityQuestion = securityQuestion;
        this.countriesService = countriesService;
        this.stateProvinceService = stateProvinceService;
        this.mScrollbarService = mScrollbarService;
        this.modalService = modalService;
        this.data = new __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* Profile */]();
        this.submitted = false;
        // submit button default state
        this.submitting = false;
        this.dataError = [];
        this.myDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            //"0001-01-01T00:00:00"
            showSelectorArrow: false,
            //inputAutoFill: false,
            showTodayBtn: false,
            editableDateField: false,
            showClearDateBtn: false,
            openSelectorOnInputClick: true,
            height: 'auto',
            selectionTxtFontSize: '12px'
        };
    }
    ProfileComponent.prototype.onDateChanged = function (event) {
        this.date = event.formatted;
    };
    /**
     *Get Profile Information
     */
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profile) {
            _this.profile = profile;
            var data = profile;
            _this.accountAtivated = data.IsAccountActivated;
            _this.dateGet = data.BirthDate.substring(0, 10);
            if (_this.dateGet == '0001-01-01') {
                var now = new Date();
                now.setFullYear(now.getFullYear() - 18);
                _this.dateGet = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
            }
        }, function (error) { return _this.error = error; });
    };
    /**
     * Get Security Question
     */
    ProfileComponent.prototype.getSecurityQuestion = function () {
        var _this = this;
        this.securityQuestion.getSecurityQuestion()
            .subscribe(function (securityInfo) { return _this.securityQuestionInfo = securityInfo; }, function (error) { return _this.error = error; });
    };
    /**
     * Get Countries
     */
    ProfileComponent.prototype.getCountries = function () {
        var _this = this;
        this.countriesService.getCountries()
            .subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.error = error; });
    };
    /**
     * Get StateProvince
     */
    ProfileComponent.prototype.getStateProvince = function () {
        var _this = this;
        this.stateProvinceService.getStateProvince()
            .subscribe(function (stateProvinces) { return _this.stateProvinces = stateProvinces; }, function (error) { return _this.error = error; });
    };
    /**
     * @param profile
     * Update Profile Information
     */
    ProfileComponent.prototype.updateProfile = function (profile) {
        var _this = this;
        if (this.date == 'undefined') {
            profile.BirthDate = this.date;
        }
        else {
            profile.BirthDate = this.dateGet;
        }
        console.log(profile);
        this.submitted = true;
        this.submitting = true;
        this.profileService.profileUpdate(profile)
            .subscribe(function (success) {
            var data = success;
            var bodyData = data.Status;
            console.log(data);
            if (bodyData == 'SUCCESS') {
                _this.valid = true;
                _this.submitting = false;
                _this.success = success;
                _this.dataError = data.Messages;
                console.log(_this.dataError);
            }
            else {
                _this.valid = false;
                _this.submitted = false;
                _this.submitting = false;
                _this.error = success;
            }
        }, function (error) {
            _this.valid = false;
            _this.submitting = false;
            _this.error = error;
        });
    };
    Object.defineProperty(ProfileComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.profile);
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.openModalVerifyMobile = function () {
        var modal$ = this.modalService.create(__WEBPACK_IMPORTED_MODULE_10__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_8__mobile_verification_mobile_verification_component__["a" /* MobileVerificationComponent */], {});
    };
    ProfileComponent.prototype.openModalVerifyEmail = function () {
        var modal$ = this.modalService.create(__WEBPACK_IMPORTED_MODULE_10__app_module__["a" /* AppModule */], __WEBPACK_IMPORTED_MODULE_7__email_verification_email_verification_component__["a" /* EmailVerificationComponent */], {});
    };
    ProfileComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.getSecurityQuestion();
        this.getCountries();
        this.getStateProvince();
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(906),
            styles: [__webpack_require__(866)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_4__security_question_security_question_service__["a" /* SecurityQuestionService */],
                __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */],
                __WEBPACK_IMPORTED_MODULE_6__state_province_state_province_service__["a" /* StateProvinceService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__profile_service__["a" /* ProfileService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__security_question_security_question_service__["a" /* SecurityQuestionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__security_question_security_question_service__["a" /* SecurityQuestionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__country_country_service__["a" /* CountryService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__state_province_state_province_service__["a" /* StateProvinceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__state_province_state_province_service__["a" /* StateProvinceService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__elements_modal_modal_module__["c" /* ModalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_11__elements_modal_modal_module__["c" /* ModalService */]) === 'function' && _f) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/profile.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promotion_detail_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PromotionDetailComponent = (function () {
    function PromotionDetailComponent(promotionDetailService, route, location, mScrollbarService) {
        this.promotionDetailService = promotionDetailService;
        this.route = route;
        this.location = location;
        this.mScrollbarService = mScrollbarService;
    }
    PromotionDetailComponent.prototype.getPromotionDetail = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.promotionDetailService.getPromotionDetail(params['category'], params['id']); })
            .subscribe(function (success) { return _this.promotionDetails = success; }, function (error) { return _this.errorMessages = error; });
    };
    PromotionDetailComponent.prototype.ngOnInit = function () {
        this.getPromotionDetail();
    };
    PromotionDetailComponent.prototype.ngAfterViewChecked = function () {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    PromotionDetailComponent.prototype.ngOnDestroy = function () {
        this.mScrollbarService.destroy('#scrollable');
    };
    PromotionDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PromotionDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-promotion-detail',
            template: __webpack_require__(907),
            styles: [__webpack_require__(867)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__promotion_detail_service__["a" /* PromotionDetailService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__promotion_detail_service__["a" /* PromotionDetailService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__promotion_detail_service__["a" /* PromotionDetailService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _d) || Object])
    ], PromotionDetailComponent);
    return PromotionDetailComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/promotion-detail.component.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionDetailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PromotionDetailService = (function () {
    function PromotionDetailService(http, translate, authService) {
        this.http = http;
        this.translate = translate;
        this.authService = authService;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_7_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'promotion/'; // This is the API Endpoint for getting the game list.
        this.LANG_CODE = translate.currentLang;
    }
    PromotionDetailService.prototype.getPromotionDetail = function (category, id) {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang + "/" + category + "/" + id;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    PromotionDetailService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    PromotionDetailService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    PromotionDetailService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], PromotionDetailService);
    return PromotionDetailService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/promotion-detail.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promotion__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__promotion_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PromotionComponent = (function () {
    function PromotionComponent(promotionService, route, translate, mScrollbarService) {
        this.promotionService = promotionService;
        this.route = route;
        this.translate = translate;
        this.mScrollbarService = mScrollbarService;
        this.gameFilter = { title: '', game_platform: '' };
        this.filter = new __WEBPACK_IMPORTED_MODULE_5__promotion__["a" /* Promotion */]();
        //console.log(route);
    }
    // getPromotion(): void {
    //       this.promotionService.getPromotion()
    //       .subscribe(
    //           success => this.promo = success,
    //           error => this.errorMessages = error
    //       );
    // }
    PromotionComponent.prototype.getPromotionAll = function () {
        var _this = this;
        this.promotionService.getPromotionAll()
            .subscribe(function (success) { return _this.promotions = success; }, function (error) { return _this.errorMessages = error; });
    };
    PromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getPromotion();
        this.getPromotionAll();
        this.route.params.subscribe(function (params) {
            _this.parameter = params;
        });
    };
    PromotionComponent.prototype.ngAfterViewChecked = function () {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick',
            setHeight: true,
            advanced: {
                updateOnContentResize: true,
                updateOnImageLoad: true
            }
        });
    };
    PromotionComponent.prototype.ngOnDestroy = function () {
        this.mScrollbarService.destroy('#scrollable');
    };
    PromotionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(908),
            styles: [__webpack_require__(868)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__promotion_service__["a" /* PromotionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__promotion_service__["a" /* PromotionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__promotion_service__["a" /* PromotionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _d) || Object])
    ], PromotionComponent);
    return PromotionComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/promotion.component.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PromotionService = (function () {
    function PromotionService(http, translate, authService) {
        this.http = http;
        this.translate = translate;
        this.authService = authService;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_8_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'promotion/'; // This is the API Endpoint for getting the game list.
    }
    PromotionService.prototype.getPromotion = function () {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    PromotionService.prototype.getPromotionAll = function () {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    PromotionService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    PromotionService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    PromotionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], PromotionService);
    return PromotionService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/promotion.service.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_deposit_bank_account_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quick_deposit_method_quick_deposit_method_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositBankAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuickDepositBankAccountComponent = (function () {
    function QuickDepositBankAccountComponent(quickDepositBankAccountService, quickDepositMethodService, quickDepositPreferredBankService) {
        this.quickDepositBankAccountService = quickDepositBankAccountService;
        this.quickDepositMethodService = quickDepositMethodService;
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
    }
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositBankAccountComponent.prototype.getQuickDepositMethod = function () {
        var _this = this;
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(function (quickDepositMethods) { return _this.quickDepositMethods = quickDepositMethods; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositBankAccountComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Get user bank list with ID Parameter
     */
    QuickDepositBankAccountComponent.prototype.getBankAccount = function (paymentMethodId, bankId) {
        var _this = this;
        this.quickDepositBankAccountService.getBankAccount(paymentMethodId, bankId)
            .subscribe(function (bankAccounts) { return _this.bankAccounts = bankAccounts; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(QuickDepositBankAccountComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.bankAccounts);
        },
        enumerable: true,
        configurable: true
    });
    QuickDepositBankAccountComponent.prototype.ngOnInit = function () {
        this.getQuickDepositMethod();
        this.getQuickDepositPreferredBank();
    };
    QuickDepositBankAccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-deposit-bank-account',
            template: __webpack_require__(909),
            styles: [__webpack_require__(869)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */],
                __WEBPACK_IMPORTED_MODULE_3__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */],
                __WEBPACK_IMPORTED_MODULE_4__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _c) || Object])
    ], QuickDepositBankAccountComponent);
    return QuickDepositBankAccountComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-bank-account.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_deposit_generate_uda_id__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quick_deposit_generate_uda_id_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositGenerateUdaIdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuickDepositGenerateUdaIdComponent = (function () {
    function QuickDepositGenerateUdaIdComponent(quickDepositGenerateUdaIdService, quickDepositMethodService, quickDepositPreferredBankService, quickDepositBankAccountService) {
        this.quickDepositGenerateUdaIdService = quickDepositGenerateUdaIdService;
        this.quickDepositMethodService = quickDepositMethodService;
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
        this.quickDepositBankAccountService = quickDepositBankAccountService;
        this.udaId = new __WEBPACK_IMPORTED_MODULE_2__quick_deposit_generate_uda_id__["a" /* UdaId */]();
    }
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositGenerateUdaIdComponent.prototype.getQuickDepositMethod = function () {
        var _this = this;
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(function (quickDepositMethods) { return _this.quickDepositMethods = quickDepositMethods; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositGenerateUdaIdComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * Get user bank list with ID Parameter
     */
    QuickDepositGenerateUdaIdComponent.prototype.getBankAccount = function (paymentMethodId, bankId) {
        var _this = this;
        this.getPaymentMethodId = paymentMethodId;
        this.quickDepositBankAccountService.getBankAccount(paymentMethodId, bankId)
            .subscribe(function (bankAccounts) { return _this.bankAccounts = bankAccounts; }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * @param udaId
     * Get UDA id
     */
    QuickDepositGenerateUdaIdComponent.prototype.getUdaId = function (udaId) {
        var _this = this;
        udaId.PaymentMethodId = this.getPaymentMethodId;
        this.quickDepositGenerateUdaIdService.getUdaId(udaId)
            .subscribe(function (success) { return _this.udaIds = success; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(QuickDepositGenerateUdaIdComponent.prototype, "diagnostic", {
        // /**
        //  * Get user bank list with ID Parameter
        //  */
        // getUdaId(paymentMethodId: string,amount: string){
        //   this.quickDepositGenerateUdaIdService.getUdaId(paymentMethodId,amount)
        //       .subscribe(
        //           udaIds => this.udaIds = udaIds,
        //           error => this.errorMessage = <any>error);
        // }
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.udaIds);
        },
        enumerable: true,
        configurable: true
    });
    QuickDepositGenerateUdaIdComponent.prototype.ngOnInit = function () {
        this.getQuickDepositMethod();
        this.getQuickDepositPreferredBank();
    };
    QuickDepositGenerateUdaIdComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-deposit-generate-uda-id',
            template: __webpack_require__(910),
            styles: [__webpack_require__(870)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */],
                __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */],
                __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */],
                __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */]) === 'function' && _d) || Object])
    ], QuickDepositGenerateUdaIdComponent);
    return QuickDepositGenerateUdaIdComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-generate-uda-id.component.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UdaId; });
var UdaId = (function () {
    function UdaId() {
    }
    return UdaId;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-generate-uda-id.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_deposit_method_service__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositMethodComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickDepositMethodComponent = (function () {
    function QuickDepositMethodComponent(quickDepositMethodService) {
        this.quickDepositMethodService = quickDepositMethodService;
    }
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositMethodComponent.prototype.getQuickDepositMethod = function () {
        var _this = this;
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(function (quickDepositMethods) { return _this.quickDepositMethods = quickDepositMethods; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(QuickDepositMethodComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.getQuickDepositMethod);
        },
        enumerable: true,
        configurable: true
    });
    QuickDepositMethodComponent.prototype.ngOnInit = function () {
        this.getQuickDepositMethod();
    };
    QuickDepositMethodComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-deposit-bank',
            template: __webpack_require__(911),
            styles: [__webpack_require__(871)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__quick_deposit_method_service__["a" /* QuickDepositMethodService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quick_deposit_method_service__["a" /* QuickDepositMethodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__quick_deposit_method_service__["a" /* QuickDepositMethodService */]) === 'function' && _a) || Object])
    ], QuickDepositMethodComponent);
    return QuickDepositMethodComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-method.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositPreferredBankComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickDepositPreferredBankComponent = (function () {
    function QuickDepositPreferredBankComponent(quickDepositPreferredBankService) {
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
    }
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositPreferredBankComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(QuickDepositPreferredBankComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.getQuickDepositPreferredBank);
        },
        enumerable: true,
        configurable: true
    });
    QuickDepositPreferredBankComponent.prototype.ngOnInit = function () {
        this.getQuickDepositPreferredBank();
    };
    QuickDepositPreferredBankComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-deposit-preferred-bank',
            template: __webpack_require__(912),
            styles: [__webpack_require__(872)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _a) || Object])
    ], QuickDepositPreferredBankComponent);
    return QuickDepositPreferredBankComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-preferred-bank.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quick_deposit__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quick_deposit_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuickDepositComponent = (function () {
    function QuickDepositComponent(quickDepositMethodService, quickDepositService, quickDepositPreferredBankService, quickDepositBankAccountService, quickDepositGenerateUdaIdService, mScrollbarService) {
        this.quickDepositMethodService = quickDepositMethodService;
        this.quickDepositService = quickDepositService;
        this.quickDepositPreferredBankService = quickDepositPreferredBankService;
        this.quickDepositBankAccountService = quickDepositBankAccountService;
        this.quickDepositGenerateUdaIdService = quickDepositGenerateUdaIdService;
        this.mScrollbarService = mScrollbarService;
        this.udaId = new __WEBPACK_IMPORTED_MODULE_7__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id__["a" /* UdaId */]();
        this.quickDeposits = new __WEBPACK_IMPORTED_MODULE_2__quick_deposit__["a" /* QuickDeposit */]();
        this.dataError = [];
        // submit button default state
        this.submitting = false;
    }
    /**
     * Get Quick Deposit Banks
     */
    QuickDepositComponent.prototype.getQuickDepositMethod = function () {
        var _this = this;
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(function (quickDepositMethods) {
            _this.quickDepositMethods = quickDepositMethods;
        }, function (error) { return _this.error = error; });
    };
    /**
     * Get Quick Deposit Preferred Bank
     */
    QuickDepositComponent.prototype.getQuickDepositPreferredBank = function () {
        var _this = this;
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(function (quickDepositPreferredBanks) { return _this.quickDepositPreferredBanks = quickDepositPreferredBanks; }, function (error) { return _this.error = error; });
    };
    /**
     * @param quickDeposit
     * Insert Quick Deposit
     */
    QuickDepositComponent.prototype.quickDeposit = function (quickDeposit, generatedUdaId) {
        var _this = this;
        this.submitting = true;
        quickDeposit.UDAId = generatedUdaId;
        quickDeposit.PaymentMethodId = this.getPaymentMethodId;
        quickDeposit.DepositAmount = this.getDepositAmount;
        quickDeposit.BankAccountId = this.getBankAccountId;
        this.quickDepositService.quickDeposit(quickDeposit)
            .subscribe(function (success) {
            _this.success = success;
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            if (bodyData == 'SUCCESS') {
                _this.valid = true;
                _this.submitting = false;
                console.log(_this.valid);
            }
            else {
                _this.valid = false;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    /**
     * Get user bank list with ID Parameter
     */
    QuickDepositComponent.prototype.getBankAccount = function (paymentMethodId, bankId) {
        var _this = this;
        this.getPaymentMethodId = paymentMethodId;
        this.quickDepositBankAccountService.getBankAccount(paymentMethodId, bankId)
            .subscribe(function (bankAccounts) {
            _this.bankAccounts = bankAccounts;
            var data = bankAccounts;
            _this.getBankAccountId = data.Id;
        }, function (error) { return _this.error = error; });
    };
    /**
     * @param udaId
     * Get UDA id
     */
    QuickDepositComponent.prototype.getUdaId = function (udaId) {
        var _this = this;
        udaId.PaymentMethodId = this.getPaymentMethodId;
        this.getDepositAmount = udaId.DepositAmount;
        this.quickDepositGenerateUdaIdService.getUdaId(udaId)
            .subscribe(function (success) { return _this.udaIds = success; }, function (error) { return _this.error = error; });
    };
    Object.defineProperty(QuickDepositComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.quickDeposits);
        },
        enumerable: true,
        configurable: true
    });
    QuickDepositComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    QuickDepositComponent.prototype.ngOnInit = function () {
        this.getQuickDepositMethod();
        this.getQuickDepositPreferredBank();
    };
    QuickDepositComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-deposit',
            template: __webpack_require__(913),
            styles: [__webpack_require__(873)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__quick_deposit_service__["a" /* QuickDepositService */],
                __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */],
                __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */],
                __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */],
                __WEBPACK_IMPORTED_MODULE_8__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__quick_deposit_service__["a" /* QuickDepositService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__quick_deposit_service__["a" /* QuickDepositService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _f) || Object])
    ], QuickDepositComponent);
    return QuickDepositComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit.component.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuickDepositService = (function () {
    function QuickDepositService(http) {
        this.http = http;
        this.urlPostQuickDeposit = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/Deposit'; // This is the API Endpoint for POST Deposit
    }
    /**
     * @param quickDeposit
     * @returns {Observable<QuickDeposit>}
     * POST Deposit Bank
     */
    QuickDepositService.prototype.quickDeposit = function (quickDeposit) {
        return this.http
            .post(this.urlPostQuickDeposit, quickDeposit, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    QuickDepositService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    QuickDepositService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuickDepositService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuickDepositService);
    return QuickDepositService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit.service.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegistrationService = (function () {
    function RegistrationService(http, translate) {
        this.http = http;
        this.translate = translate;
        this.url = __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppSettings */].API_ENDPOINT + 'v1/Player/Register'; // This is the API Endpoint for registering user
        $.getJSON("https://jsonip.com?callback=?", function (data) {
            this.IPAddress = data.ip;
            // alert("Your IP address is :- " + this.IPAddress);
        });
    }
    /**
     * @param reg
     * @returns {Observable<R>}
     * POST registering user
     */
    RegistrationService.prototype.create = function (reg) {
        var lang = this.translate.currentLang;
        reg.IPAddress = '192.168.3.123';
        reg.BrandCode = 'O88';
        reg.LanguageCode = lang;
        reg.ConfirmPassword = reg.Password;
        return this.http
            .post(this.url, reg, __WEBPACK_IMPORTED_MODULE_9__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    RegistrationService.prototype.extractDataUsername = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
            //trace if username is exist
            localStorage.setItem('UsernameExist', bodyData);
        }
        return rejectMsg || {};
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    RegistrationService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            localStorage.setItem('TokenId', bodyData.TokenId);
            localStorage.setItem('Username', bodyData.UserName);
            localStorage.setItem('Roles', bodyData.Roles);
            localStorage.setItem('SignalRTokenId', bodyData.SignalRTokenId);
            localStorage.setItem('Expiration', bodyData.Expirration);
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
            console.log(rejectMsg);
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body reponse
     */
    RegistrationService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RegistrationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object])
    ], RegistrationService);
    return RegistrationService;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/registration.service.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security_question_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SecurityQuestionComponent = (function () {
    function SecurityQuestionComponent(securityQuestionService) {
        this.securityQuestionService = securityQuestionService;
    }
    /**
     * Get Security Questions
     */
    SecurityQuestionComponent.prototype.getSecurityQuestion = function () {
        var _this = this;
        this.securityQuestionService.getSecurityQuestion()
            .subscribe(function (securityQuestions) { return _this.securityQuestions = securityQuestions; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(SecurityQuestionComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.securityQuestions);
        },
        enumerable: true,
        configurable: true
    });
    SecurityQuestionComponent.prototype.ngOnInit = function () {
        this.getSecurityQuestion();
    };
    SecurityQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-security-question',
            template: __webpack_require__(915),
            styles: [__webpack_require__(875)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__security_question_service__["a" /* SecurityQuestionService */]]
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__elements_modal_modal_module__["b" /* Modal */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__security_question_service__["a" /* SecurityQuestionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__security_question_service__["a" /* SecurityQuestionService */]) === 'function' && _a) || Object])
    ], SecurityQuestionComponent);
    return SecurityQuestionComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/security-question.component.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sports_service__ = __webpack_require__(432);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SportsComponent = (function () {
    function SportsComponent(sportsService, route, location, translate) {
        this.sportsService = sportsService;
        this.route = route;
        this.location = location;
        this.translate = translate;
    }
    SportsComponent.prototype.getSportsBook = function () {
        var _this = this;
        this.sportsService.getSports()
            .subscribe(function (success) { return _this.sports = success; }, function (error) { return _this.error = error; });
    };
    SportsComponent.prototype.playGames = function (lang, platform, category) {
        var _this = this;
        this.sportsService.getSportsUrl(lang, platform, category).
            subscribe(function (success) { return _this.success = success; }, function (error) { return _this.error = error; });
    };
    SportsComponent.prototype.loadiframe = function (langCode, platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(langCode, platformCode, gameCode);
    };
    SportsComponent.prototype.ngOnInit = function () {
        this.getSportsBook();
    };
    SportsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sports',
            template: __webpack_require__(916),
            styles: [__webpack_require__(876)],
            providers: [__WEBPACK_IMPORTED_MODULE_6__sports_service__["a" /* SportsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__sports_service__["a" /* SportsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__sports_service__["a" /* SportsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _d) || Object])
    ], SportsComponent);
    return SportsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/sports.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SportsService = (function () {
    function SportsService(http, authService, translate) {
        this.http = http;
        this.authService = authService;
        this.translate = translate;
        this.GAMES_URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].GAME_API_ENDPOINT + 'sports/'; // This is the API Endpoint for getting the game list.
        this.URL = __WEBPACK_IMPORTED_MODULE_9_app_app_config__["a" /* AppSettings */].API_ENDPOINT + 'GameManager/GetGameUrl?';
    }
    SportsService.prototype.getSports = function () {
        var lang = this.translate.currentLang;
        var url = "" + this.GAMES_URL + lang;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError);
    };
    SportsService.prototype.getSportsUrl = function (lang, platform, category) {
        var url = "" + this.URL + ('GamePlatform=' + platform) + ('&GameType=' + category) + ('&Language=' + lang) + ('&isMobile=' + 1);
        return this.http
            .get(url, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    SportsService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return body;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    SportsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(errMsg);
    };
    SportsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _c) || Object])
    ], SportsService);
    return SportsService;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/sports.service.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_province_service__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvinceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StateProvinceComponent = (function () {
    function StateProvinceComponent(stateProvinceService) {
        this.stateProvinceService = stateProvinceService;
    }
    /**
     * Get StateProvince
     */
    StateProvinceComponent.prototype.getStateProvince = function () {
        var _this = this;
        this.stateProvinceService.getStateProvince()
            .subscribe(function (stateProvinces) { return _this.stateProvinces = stateProvinces; }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(StateProvinceComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.getStateProvince);
        },
        enumerable: true,
        configurable: true
    });
    StateProvinceComponent.prototype.ngOnInit = function () {
        this.getStateProvince();
    };
    StateProvinceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-state-province',
            template: __webpack_require__(917),
            styles: [__webpack_require__(877)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__state_province_service__["a" /* StateProvinceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__state_province_service__["a" /* StateProvinceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__state_province_service__["a" /* StateProvinceService */]) === 'function' && _a) || Object])
    ], StateProvinceComponent);
    return StateProvinceComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/state-province.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wechat__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wechat_service__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WechatComponent = (function () {
    function WechatComponent(wechatService, mScrollbarService) {
        this.wechatService = wechatService;
        this.mScrollbarService = mScrollbarService;
        this.wechat = new __WEBPACK_IMPORTED_MODULE_2__wechat__["a" /* Wechat */]();
        // valid: boolean = true;
        this.submitted = false;
        // submit button default state
        this.submitting = false;
    }
    /**
     * @param weChat
     * wechat payment
     */
    WechatComponent.prototype.weChatPayment = function (wechat) {
        var _this = this;
        this.valAmount = parseInt(wechat.Amount);
        if (this.valAmount == 0 || this.valAmount >= 3001) {
            this.submitted = true;
            this.submitting = false;
        }
        else {
            this.submitted = true;
            this.submitting = true;
            this.wechatService.weChatPayment(wechat)
                .subscribe(
            // success => this.success = <any>success,
            function (success) {
                _this.success = success;
                _this.submitting = false;
                _this.submitted = true;
            }, function (error) {
                _this.error = error;
                _this.submitting = false;
                // this.submitted = false;
            });
        }
    };
    WechatComponent.prototype.onCancel = function () {
        this.success = '';
    };
    Object.defineProperty(WechatComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.wechat);
        },
        enumerable: true,
        configurable: true
    });
    WechatComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    WechatComponent.prototype.ngOnInit = function () {
    };
    WechatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-weChat',
            template: __webpack_require__(918),
            styles: [__webpack_require__(878)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__wechat_service__["a" /* WechatService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__wechat_service__["a" /* WechatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__wechat_service__["a" /* WechatService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _b) || Object])
    ], WechatComponent);
    return WechatComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/wechat.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WechatService = (function () {
    function WechatService(http) {
        this.http = http;
        this.URL = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'DaddyPay/DaddyPayDepositWeChat'; // This is the API Endpoint for deposit using WeChat
    }
    /**
     * @param weChat
     * @returns {Observable<WeChat>}
     * POST update profile
     */
    WechatService.prototype.weChatPayment = function (wechat) {
        return this.http
            .post(this.URL, wechat, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    WechatService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    WechatService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WechatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], WechatService);
    return WechatService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/wechat.service.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdrawal_transaction_service__ = __webpack_require__(262);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalTransactionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithdrawalTransactionComponent = (function () {
    function WithdrawalTransactionComponent(withdrawalTransactionService) {
        this.withdrawalTransactionService = withdrawalTransactionService;
    }
    /**
     * Get Withdrawal Transaction
     */
    WithdrawalTransactionComponent.prototype.getWithdrawalTransaction = function () {
        var _this = this;
        this.withdrawalTransactionService.getWithdrawalTransaction()
            .subscribe(function (withdrawalTransactions) {
            var transaction = withdrawalTransactions;
            _this.withdrawalTransactions = transaction.Withdrawals;
        }, function (error) { return _this.errorMessage = error; });
    };
    Object.defineProperty(WithdrawalTransactionComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.getWithdrawalTransaction);
        },
        enumerable: true,
        configurable: true
    });
    WithdrawalTransactionComponent.prototype.ngOnInit = function () {
        this.getWithdrawalTransaction();
    };
    WithdrawalTransactionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-withdrawal-transaction',
            template: __webpack_require__(919),
            styles: [__webpack_require__(879)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__withdrawal_transaction_service__["a" /* WithdrawalTransactionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__withdrawal_transaction_service__["a" /* WithdrawalTransactionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__withdrawal_transaction_service__["a" /* WithdrawalTransactionService */]) === 'function' && _a) || Object])
    ], WithdrawalTransactionComponent);
    return WithdrawalTransactionComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/withdrawal-transaction.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__withdrawal__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__withdrawal_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__withdrawal_transaction_withdrawal_transaction_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WithdrawalComponent = (function () {
    function WithdrawalComponent(withdrawalService, profileService, withdrawalTransactionService, location, router, mScrollbarService) {
        this.withdrawalService = withdrawalService;
        this.profileService = profileService;
        this.withdrawalTransactionService = withdrawalTransactionService;
        this.location = location;
        this.router = router;
        this.mScrollbarService = mScrollbarService;
        this.withdraw = new __WEBPACK_IMPORTED_MODULE_4__withdrawal__["a" /* Withdrawal */]();
        this.dataError = [];
        this.submitted = false;
        // submit button default state
        this.submitting = false;
    }
    /**
     *Get Profile Information
     */
    WithdrawalComponent.prototype.getProfile = function () {
        var _this = this;
        this.profileService.getProfile()
            .subscribe(function (profile) {
            _this.profile = profile;
            var data = profile;
            _this.accountAtivated = data.IsAccountActivated;
            _this.bankAccount = data.PlayerBankAccounts;
            for (var _i = 0, _a = _this.bankAccount; _i < _a.length; _i++) {
                var bank = _a[_i];
                if (!bank.Id) {
                    _this.router.navigate(['/profile']);
                }
            }
            if (_this.accountAtivated === false) {
                _this.router.navigate(['/profile']);
            }
        }, function (error) { return _this.error = error; });
    };
    /**
     * Get Withdrawal Transaction
     */
    WithdrawalComponent.prototype.getWithdrawalTransaction = function () {
        var _this = this;
        this.withdrawalTransactionService.getWithdrawalTransaction()
            .subscribe(function (withdrawalTransactions) {
            var history = withdrawalTransactions;
            _this.lockedAmount = history.TotalLockAmountAmount;
            _this.WithdrawalAmt = history.WithdrawableAmount;
            _this.withdrawalTransactions = history.Withdrawals;
        }, function (error) { return _this.error = error; });
    };
    /**
     * @param withdrawal
     * Make Withdrawal
     */
    WithdrawalComponent.prototype.makeWithrawal = function (withdrawal) {
        var _this = this;
        this.submitted = true;
        this.submitting = true;
        this.withdrawalService.makeWithrawal(withdrawal)
            .subscribe(function (success) {
            _this.success = success;
            var data = success;
            var bodyData = data.bodyStatus;
            _this.dataError = data.Error;
            if (bodyData == 'SUCCESS') {
                _this.valid = true;
                console.log(_this.valid);
            }
            else {
                _this.valid = false;
                _this.submitting = false;
            }
        }, function (error) {
            _this.error = error;
            _this.submitting = false;
        });
    };
    // Go back to previous location
    WithdrawalComponent.prototype.goBack = function () {
        this.location.back();
    };
    Object.defineProperty(WithdrawalComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () {
            return JSON.stringify(this.withdraw);
        },
        enumerable: true,
        configurable: true
    });
    WithdrawalComponent.prototype.ngAfterViewChecked = function () {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    };
    WithdrawalComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.getWithdrawalTransaction();
    };
    WithdrawalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-withdrawal',
            template: __webpack_require__(920),
            styles: [__webpack_require__(880)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__withdrawal_service__["a" /* WithdrawalService */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_7__withdrawal_transaction_withdrawal_transaction_service__["a" /* WithdrawalTransactionService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__withdrawal_service__["a" /* WithdrawalService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__withdrawal_service__["a" /* WithdrawalService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__withdrawal_transaction_withdrawal_transaction_service__["a" /* WithdrawalTransactionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__withdrawal_transaction_withdrawal_transaction_service__["a" /* WithdrawalTransactionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */]) === 'function' && _f) || Object])
    ], WithdrawalComponent);
    return WithdrawalComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/withdrawal.component.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var WithdrawalService = (function () {
    function WithdrawalService(http) {
        this.http = http;
        this.urlPostWalletWithdraw = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/Withdraw'; // This is the API Endpoint for Wallet Withdrawal
    }
    /**
     * @param withdrawal
     * @returns {Observable<Withdrawal>}
     * POST Wallet Withdrawal
     */
    WithdrawalService.prototype.makeWithrawal = function (withdrawal) {
        return this.http
            .post(this.urlPostWalletWithdraw, withdrawal, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     *
     * @param res
     * @returns {any}
     */
    WithdrawalService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    WithdrawalService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    WithdrawalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], WithdrawalService);
    return WithdrawalService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/withdrawal.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ModalService; });
/* unused harmony export ModalPlaceholderComponent */
/* unused harmony export ModalContainer */
/* harmony export (immutable) */ __webpack_exports__["b"] = Modal;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// the modalservice
var ModalService = (function () {
    function ModalService(compiler) {
        this.compiler = compiler;
        this.activeInstances = 0;
    }
    ModalService.prototype.registerViewContainerRef = function (vcRef) {
        this.vcRef = vcRef;
    };
    ModalService.prototype.registerInjector = function (injector) {
        this.injector = injector;
    };
    ModalService.prototype.create = function (module, component, parameters) {
        var _this = this;
        var componentRef$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"]();
        this.compiler.compileModuleAndAllComponentsAsync(module)
            .then(function (factory) {
            var componentFactory = factory.componentFactories.filter(function (item) { return item.componentType === component; })[0];
            var childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate([], _this.injector);
            var componentRef = _this.vcRef.createComponent(componentFactory, 0, childInjector);
            Object.assign(componentRef.instance, parameters); // pass the @Input parameters to the instance
            _this.activeInstances++;
            componentRef.instance["componentIndex"] = _this.activeInstances;
            componentRef.instance["destroy"] = function () {
                _this.activeInstances--;
                componentRef.destroy();
            };
            componentRef$.next(componentRef);
            componentRef$.complete();
        });
        return componentRef$.asObservable();
    };
    ModalService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Compiler"]) === 'function' && _a) || Object])
    ], ModalService);
    return ModalService;
    var _a;
}());
// this is the modal-placeholder, it will container the created modals
var ModalPlaceholderComponent = (function () {
    function ModalPlaceholderComponent(modalService, injector) {
        this.modalService = modalService;
        this.injector = injector;
    }
    ModalPlaceholderComponent.prototype.ngOnInit = function () {
        this.modalService.registerViewContainerRef(this.viewContainerRef);
        this.modalService.registerInjector(this.injector);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("modalplaceholder", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }), 
        __metadata('design:type', Object)
    ], ModalPlaceholderComponent.prototype, "viewContainerRef", void 0);
    ModalPlaceholderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "modal-placeholder",
            template: "<div #modalplaceholder></div>"
        }), 
        __metadata('design:paramtypes', [ModalService, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === 'function' && _a) || Object])
    ], ModalPlaceholderComponent);
    return ModalPlaceholderComponent;
    var _a;
}());
// These 2 items will make sure that you can annotate
// a modalcomponent with @Modal()
var ModalContainer = (function () {
    function ModalContainer() {
    }
    ModalContainer.prototype.closeModal = function () {
        this.destroy();
    };
    return ModalContainer;
}());
function Modal() {
    return function (target) {
        Object.assign(target.prototype, ModalContainer.prototype);
    };
}
// module definition
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [ModalPlaceholderComponent],
            exports: [ModalPlaceholderComponent],
            providers: [ModalService]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/modal.module.js.map

/***/ }),

/***/ 618:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 618;


/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/main.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgot_password_reset_forgot_password_reset_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__security_question_security_question_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__country_country_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__state_province_state_province_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__online_deposit_online_deposit_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__online_deposit_bank_online_deposit_bank_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__quick_deposit_quick_deposit_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__quick_deposit_method_quick_deposit_method_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__quick_deposit_preferred_bank_quick_deposit_preferred_bank_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__quick_deposit_bank_account_quick_deposit_bank_account_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__wechat_wechat_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__withdrawal_withdrawal_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__withdrawal_transaction_withdrawal_transaction_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__bank_bank_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bank_detail_bank_detail_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__bank_add_bank_add_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__deposit_transaction_deposit_transaction_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__games_games_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__casino_casino_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__promotion_promotion_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__promotion_detail_promotion_detail_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__banner_banner_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sports_sports_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__home_home_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__email_verification_email_verification_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__mobile_verification_mobile_verification_component__ = __webpack_require__(256);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


































var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_31__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: 'forgotPassword', component: __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */] },
    { path: 'resetPassword', component: __WEBPACK_IMPORTED_MODULE_6__forgot_password_reset_forgot_password_reset_component__["a" /* ForgotPasswordResetComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'security-question', component: __WEBPACK_IMPORTED_MODULE_8__security_question_security_question_component__["a" /* SecurityQuestionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'country', component: __WEBPACK_IMPORTED_MODULE_9__country_country_component__["a" /* CountryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'state-province', component: __WEBPACK_IMPORTED_MODULE_10__state_province_state_province_component__["a" /* StateProvinceComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'online-deposit', component: __WEBPACK_IMPORTED_MODULE_11__online_deposit_online_deposit_component__["a" /* OnlineDepositComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'online-deposit-bank', component: __WEBPACK_IMPORTED_MODULE_12__online_deposit_bank_online_deposit_bank_component__["a" /* OnlineDepositBankComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'quick-deposit', component: __WEBPACK_IMPORTED_MODULE_13__quick_deposit_quick_deposit_component__["a" /* QuickDepositComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'quick-deposit-method', component: __WEBPACK_IMPORTED_MODULE_14__quick_deposit_method_quick_deposit_method_component__["a" /* QuickDepositMethodComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'quick-deposit-preferred-bank', component: __WEBPACK_IMPORTED_MODULE_15__quick_deposit_preferred_bank_quick_deposit_preferred_bank_component__["a" /* QuickDepositPreferredBankComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'quick-deposit-bank-account', component: __WEBPACK_IMPORTED_MODULE_16__quick_deposit_bank_account_quick_deposit_bank_account_component__["a" /* QuickDepositBankAccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'quick-deposit-generate-uda-id', component: __WEBPACK_IMPORTED_MODULE_17__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_component__["a" /* QuickDepositGenerateUdaIdComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'wechat', component: __WEBPACK_IMPORTED_MODULE_18__wechat_wechat_component__["a" /* WechatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'withdrawal', component: __WEBPACK_IMPORTED_MODULE_19__withdrawal_withdrawal_component__["a" /* WithdrawalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'withdrawal-transaction', component: __WEBPACK_IMPORTED_MODULE_20__withdrawal_transaction_withdrawal_transaction_component__["a" /* WithdrawalTransactionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'bank', component: __WEBPACK_IMPORTED_MODULE_21__bank_bank_component__["a" /* BankComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'bank/:id', component: __WEBPACK_IMPORTED_MODULE_22__bank_detail_bank_detail_component__["a" /* BankDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'bank-add', component: __WEBPACK_IMPORTED_MODULE_23__bank_add_bank_add_component__["a" /* BankAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'games/:category', component: __WEBPACK_IMPORTED_MODULE_25__games_games_component__["a" /* GamesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    //{path: 'games/:platform/:category', component: GamesComponent, canActivate: [AuthGuard]},
    { path: 'casino', component: __WEBPACK_IMPORTED_MODULE_26__casino_casino_component__["a" /* CasinoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'promotion', component: __WEBPACK_IMPORTED_MODULE_27__promotion_promotion_component__["a" /* PromotionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'promotion/:category', component: __WEBPACK_IMPORTED_MODULE_27__promotion_promotion_component__["a" /* PromotionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'details/:category/:id', component: __WEBPACK_IMPORTED_MODULE_28__promotion_detail_promotion_detail_component__["a" /* PromotionDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'banner', component: __WEBPACK_IMPORTED_MODULE_29__banner_banner_component__["a" /* BannerComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'sports', component: __WEBPACK_IMPORTED_MODULE_30__sports_sports_component__["a" /* SportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'deposit-history', component: __WEBPACK_IMPORTED_MODULE_24__deposit_transaction_deposit_transaction_component__["a" /* DepositTransactionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'email-verification', component: __WEBPACK_IMPORTED_MODULE_32__email_verification_email_verification_component__["a" /* EmailVerificationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'mobile-verification', component: __WEBPACK_IMPORTED_MODULE_33__mobile_verification_mobile_verification_component__["a" /* MobileVerificationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/app-routing.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_header_header_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_idle_keepalive__ = __webpack_require__(390);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(router, authService, idle, keepalive, headerService) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this.idle = idle;
        this.keepalive = keepalive;
        this.headerService = headerService;
        this.logged = false;
        this.idleNow = false;
        this.timedOut = false;
        this.lastPing = null;
        this.userDetails = {
            username: localStorage.getItem('Username')
        };
        if (localStorage.getItem('TokenId')) {
            this.logged = true;
            // sets an idle timeout of 5 seconds, for testing purposes.
            idle.setIdle(900);
            // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
            idle.setTimeout(15);
            // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
            idle.setInterrupts(__WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["c" /* DEFAULT_INTERRUPTSOURCES */]);
            idle.onIdleStart.subscribe(function () {
                _this.idleState = 'You\'ve gone idle!';
                _this.idleNow = true;
            });
            idle.onIdleEnd.subscribe(function () {
                // this.idleState = 'No longer idle.';
                _this.idleNow = false;
            });
            idle.onTimeout.subscribe(function () {
                _this.idleState = 'Timed out!';
                _this.timedOut = true;
                _this.logout();
            });
            idle.onTimeoutWarning.subscribe(function (countdown) { return _this.idleState = 'You will be logged out in ' + countdown + ' seconds!'; });
            // sets the ping interval to 15 seconds
            keepalive.interval(15);
            keepalive.onPing.subscribe(function () { return _this.lastPing = new Date(); });
            this.reset();
        }
    }
    // getIpAddr() {
    //     this.headerService.getIP()
    //         .subscribe(
    //             success => {
    //                 this.success = <any>success;
    //                 //console.log(this.success.ip);
    //             },
    //             error => this.error = <any>error,
    //         )
    // }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.logged = false;
        location.replace('/login');
    };
    AppComponent.prototype.reset = function () {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    };
    AppComponent.prototype.reload = function () {
        location.reload();
    };
    AppComponent.prototype.openFullScreenWindow = function () {
        var fullwindow = $('.fullscreen-window');
        fullwindow.addClass('is-open');
    };
    AppComponent.prototype.closeFullscreenWindow = function () {
        var resizeTimer, fullwindow = $('.fullscreen-window');
        fullwindow.removeClass('is-open').addClass('is-closed');
        $('.fullscreen-container').hide().html('');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            fullwindow.removeClass('is-closed');
        }, 250);
    };
    AppComponent.prototype.addOnlineDeposit = function () {
        this.router.navigateByUrl('/online-deposit');
        this.closeFullscreenWindow();
    };
    AppComponent.prototype.addWechatDeposit = function () {
        this.router.navigateByUrl('/wechat');
        this.closeFullscreenWindow();
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.getIpAddr();
        if (this.logged) {
            $('#page').addClass('is-main');
        }
        else {
            $('#page').removeClass('is-main');
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(883),
            styles: [__webpack_require__(845)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["d" /* Idle */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__ng_idle_core__["d" /* Idle */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ng_idle_keepalive__["b" /* Keepalive */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__ng_idle_keepalive__["b" /* Keepalive */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__layout_header_header_service__["a" /* HeaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__layout_header_header_service__["a" /* HeaderService */]) === 'function' && _e) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/app.component.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAdd; });
var BankAdd = (function () {
    function BankAdd() {
        this.IsActiveAccount = 'true';
    }
    return BankAdd;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/bank-add.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlickSliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlickSliderComponent = (function () {
    function SlickSliderComponent(el) {
        this.el = el;
        this.defaultOptions = {
            infinite: true,
            slidesToScroll: 1,
        };
    }
    SlickSliderComponent.prototype.ngAfterContentInit = function () {
        for (var key in this.options) {
            this.defaultOptions[key] = this.options[key];
        }
        this.$element = jQuery(this.el.nativeElement).slick(this.defaultOptions);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SlickSliderComponent.prototype, "options", void 0);
    SlickSliderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slick-slider',
            template: "\n        <ng-content></ng-content>\n    "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], SlickSliderComponent);
    return SlickSliderComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/carousel.component.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageComponent = (function () {
    function LanguageComponent(translate, el) {
        this.translate = translate;
        this.el = el;
        this.showLangOptns = false;
        this.langCode = !localStorage.getItem('lang') ? 'zh-hans' : localStorage.getItem('lang');
        translate.addLangs(["en", "zh-hans"]);
        translate.setDefaultLang('en');
        var browserLang = this.langCode;
        translate.use(browserLang.match(/en|zh-hans/) ? browserLang : 'zh-hans');
        translate.onLangChange.subscribe(function () {
            console.log(translate.currentLang);
            localStorage.setItem('lang', translate.currentLang);
        });
    }
    LanguageComponent.prototype.toggleLangOptns = function () {
        if (this.showLangOptns) {
            this.showLangOptns = false;
        }
        else {
            this.showLangOptns = true;
        }
    };
    LanguageComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.showLangOptns = false;
        }
        // console.log('lang ' + this.showLangOptns);
    };
    LanguageComponent.prototype.changeLang = function () {
        location.reload();
    };
    LanguageComponent.prototype.ngOnInit = function () {
    };
    LanguageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[language-selector]',
            template: __webpack_require__(891),
            styles: [__webpack_require__(853)],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], LanguageComponent);
    return LanguageComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/language.component.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(authService, translate, el, renderer) {
        this.authService = authService;
        this.translate = translate;
        this.el = el;
        this.renderer = renderer;
        this.showNavOptns = false;
    }
    MenuComponent.prototype.navSubLink = function () {
        this.showNavOptns = true;
        console.log('menu Sub ' + this.showNavOptns);
    };
    MenuComponent.prototype.navLink = function () {
        if (this.showNavOptns) {
            this.showNavOptns = false;
        }
        console.log('menu sub link ' + this.showNavOptns);
    };
    MenuComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.showNavOptns = false;
            $('.c-nav').find('.is-active').removeClass('is-active');
        }
        console.log('menu doc ' + this.showNavOptns);
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(892),
            styles: [__webpack_require__(854)],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _d) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/menu.component.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailVerification; });
var EmailVerification = (function () {
    function EmailVerification() {
    }
    return EmailVerification;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/email-verification.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__featured_games_featured_games_service__ = __webpack_require__(407);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedGamesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeaturedGamesComponent = (function () {
    function FeaturedGamesComponent(gameService, route, location) {
        this.gameService = gameService;
        this.route = route;
        this.location = location;
    }
    FeaturedGamesComponent.prototype.getGames = function () {
        var _this = this;
        this.gameService.getGames()
            .subscribe(function (success) { return _this.games = success; }, function (error) { return _this.errorMessages = error; });
    };
    FeaturedGamesComponent.prototype.playGames = function (platform, category) {
        var _this = this;
        this.gameService.getGamesUrl(platform, category)
            .subscribe(function (success) {
            _this.success = success;
            var body = success;
            var url = body.Data.Url;
            var frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url + '"></iframe>';
            if (body.Status == 'SUCCESS') {
                // this.gameUrl = url;
                $('.fullscreen-container').show().html(frame);
            }
            else {
                $('.fullscreen-container').show().html('Sorry. Error loading game');
            }
        }, function (error) {
            _this.errorMessages = error;
            $('.fullscreen-container').show().html('Sorry. Error loading game');
        });
    };
    FeaturedGamesComponent.prototype.loadiframe = function (platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    };
    FeaturedGamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getGames();
        this.route.params.subscribe(function (params) {
            _this.parameter = params;
        });
    };
    FeaturedGamesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-featured-games',
            template: __webpack_require__(895),
            styles: [__webpack_require__(856)],
            providers: [__WEBPACK_IMPORTED_MODULE_5__featured_games_featured_games_service__["a" /* FeaturedGamesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__featured_games_featured_games_service__["a" /* FeaturedGamesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__featured_games_featured_games_service__["a" /* FeaturedGamesService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === 'function' && _c) || Object])
    ], FeaturedGamesComponent);
    return FeaturedGamesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/featured-games.component.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword; });
var ResetPassword = (function () {
    function ResetPassword() {
    }
    return ResetPassword;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/forgot-password-reset.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Games; });
var Games = (function () {
    function Games() {
    }
    return Games;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/games.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(translate) {
        this.translate = translate;
        this.lang = this.translate.currentLang;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-footer]',
            template: __webpack_require__(900),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/footer.component.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(loginService, authService, router, headerService, ngZone, _signalR, el) {
        this.loginService = loginService;
        this.authService = authService;
        this.router = router;
        this.headerService = headerService;
        this.ngZone = ngZone;
        this._signalR = _signalR;
        this.el = el;
        this.showWindowOptns = false;
        this.userDetails = {
            username: localStorage.getItem('Username'),
            date: new Date(),
        };
        this.someFunction();
    }
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        location.replace('/login');
        // Redirect the user
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'login';
        //this.router.navigate([redirect]);
    };
    HeaderComponent.prototype.someFunction = function () {
        var _this = this;
        this._signalR.connect().then(function (c) {
            var onMessageSent$ = c.listenFor('myBalance');
            onMessageSent$.subscribe(function () {
                _this.getBalance();
            });
            c.invoke('getBalance').then(function (data) {
                console.log(data);
            });
            var kickPlayer$ = c.listenFor('kickPlayer');
            kickPlayer$.subscribe(function () {
                alert('You have been kicked!');
                _this.logout();
            });
            var notifyPlayer$ = c.listenFor('notifyPlayer');
            notifyPlayer$.subscribe(function () {
                console.log('Nofify player');
            });
        });
    };
    HeaderComponent.prototype.getBalance = function () {
        var _this = this;
        this.headerService.getBalance()
            .subscribe(function (success) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    _this.success = success;
                    var data = success;
                    var balance = data.Data.Balance;
                    if (data.Status == 'SUCCESS') {
                        _this.balance = balance;
                    }
                });
            });
        }, function (error) {
            _this.error = error;
        });
    };
    HeaderComponent.prototype.currentBalance = function () {
        var _this = this;
        this.headerService.getBalance()
            .subscribe(function (success) {
            _this.ngZone.runOutsideAngular(function () {
                _this.ngZone.run(function () {
                    _this.success = success;
                    var data = success;
                    var balance = data.Data.Balance;
                    if (data.Status == 'SUCCESS') {
                        _this.currentBal = balance;
                    }
                });
            });
        });
    };
    HeaderComponent.prototype.toggleWindowOptns = function () {
        if (this.showWindowOptns) {
            this.showWindowOptns = false;
        }
        else {
            this.showWindowOptns = true;
        }
    };
    HeaderComponent.prototype.onClick = function (event) {
        if (!this.el.nativeElement.contains(event.target)) {
            this.showWindowOptns = false;
        }
        // console.log('window ' + this.showWindowOptns);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.currentBalance();
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: '[app-header]',
            template: __webpack_require__(901),
            styles: [__webpack_require__(862)],
            providers: [__WEBPACK_IMPORTED_MODULE_4__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */]],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__login_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__login_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__header_service__["a" /* HeaderService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__["c" /* SignalR */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_signalr__["c" /* SignalR */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _g) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/header.component.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var Login = (function () {
    function Login() {
    }
    return Login;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/login.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDepositPreferredBankService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuickDepositPreferredBankService = (function () {
    function QuickDepositPreferredBankService(http) {
        this.http = http;
        this.urlGetQuickDepositPreferredBank = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'Wallet/OfflineDepositBanks'; // This is the API Endpoint for getting the list for Player's Deposit Preferred Bank
    }
    /**
     * @returns {Observable<R>}
     * GET Security Question
     */
    QuickDepositPreferredBankService.prototype.getQuickDepositPreferredBank = function () {
        return this.http
            .get(this.urlGetQuickDepositPreferredBank, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string{}}
     * Extract Body Response
     */
    QuickDepositPreferredBankService.prototype.extractData = function (res) {
        var body = res.json();
        var data = body.Data;
        var rejectMsg;
        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        }
        else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }
        return data;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body reponse
     */
    QuickDepositPreferredBankService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    QuickDepositPreferredBankService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuickDepositPreferredBankService);
    return QuickDepositPreferredBankService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit-preferred-bank.service.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileVerification; });
var MobileVerification = (function () {
    function MobileVerification() {
    }
    return MobileVerification;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/mobile-verification.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlineDeposit; });
var OnlineDeposit = (function () {
    function OnlineDeposit() {
        this.DepositPageUsed = 'DP';
        this.Platform = 'DES';
    }
    return OnlineDeposit;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/online-deposit.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/profile.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promotion; });
var Promotion = (function () {
    function Promotion() {
    }
    return Promotion;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/promotion.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickDeposit; });
var QuickDeposit = (function () {
    function QuickDeposit() {
        this.Platform = 'DES';
        this.DepositPageUsed = 'DP';
    }
    return QuickDeposit;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/quick-deposit.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = (function () {
    function Registration() {
        this.Platform = 'DES';
    }
    return Registration;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/registration.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoHeightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoHeightDirective = (function () {
    function AutoHeightDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    AutoHeightDirective.prototype.changeHeight = function () {
        // console.log(this.el.nativeElement.offsetHeight);
        this.renderer.setElementAttribute(this.el.nativeElement, 'height', null);
        this.renderer.setElementStyle(this.el.nativeElement, 'height', this.el.nativeElement.offsetHeight + 'px');
    };
    AutoHeightDirective.prototype.onResize = function () {
        this.changeHeight();
    };
    AutoHeightDirective.prototype.ngOnInit = function () {
        this.changeHeight();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AutoHeightDirective.prototype, "onResize", null);
    AutoHeightDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[autoheight]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], AutoHeightDirective);
    return AutoHeightDirective;
    var _a, _b;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/autoheight.directive.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameFilterPipe = (function () {
    function GameFilterPipe() {
    }
    GameFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        //filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    GameFilterPipe.prototype.applyFilter = function (game, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (game[field].toLocaleLowerCase().indexOf(filter[field].toLocaleLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (game[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    GameFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'gameFilter',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], GameFilterPipe);
    return GameFilterPipe;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/game-filter.pipe.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autoheight_directive__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__elements_carousel_carousel_component__ = __webpack_require__(750);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__autoheight_directive__["a" /* AutoHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_2__elements_carousel_carousel_component__["a" /* SlickSliderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__autoheight_directive__["a" /* AutoHeightDirective */],
                __WEBPACK_IMPORTED_MODULE_2__elements_carousel_carousel_component__["a" /* SlickSliderComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/shared.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wechat; });
var Wechat = (function () {
    function Wechat() {
        this.DepositPageUsed = 'DP';
        this.Platform = 'DES';
    }
    return Wechat;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/wechat.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Withdrawal; });
var Withdrawal = (function () {
    function Withdrawal() {
    }
    return Withdrawal;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/withdrawal.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/environment.js.map

/***/ }),

/***/ 830:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 463,
	"./af.js": 463,
	"./ar": 470,
	"./ar-dz": 464,
	"./ar-dz.js": 464,
	"./ar-kw": 465,
	"./ar-kw.js": 465,
	"./ar-ly": 466,
	"./ar-ly.js": 466,
	"./ar-ma": 467,
	"./ar-ma.js": 467,
	"./ar-sa": 468,
	"./ar-sa.js": 468,
	"./ar-tn": 469,
	"./ar-tn.js": 469,
	"./ar.js": 470,
	"./az": 471,
	"./az.js": 471,
	"./be": 472,
	"./be.js": 472,
	"./bg": 473,
	"./bg.js": 473,
	"./bn": 474,
	"./bn.js": 474,
	"./bo": 475,
	"./bo.js": 475,
	"./br": 476,
	"./br.js": 476,
	"./bs": 477,
	"./bs.js": 477,
	"./ca": 478,
	"./ca.js": 478,
	"./cs": 479,
	"./cs.js": 479,
	"./cv": 480,
	"./cv.js": 480,
	"./cy": 481,
	"./cy.js": 481,
	"./da": 482,
	"./da.js": 482,
	"./de": 485,
	"./de-at": 483,
	"./de-at.js": 483,
	"./de-ch": 484,
	"./de-ch.js": 484,
	"./de.js": 485,
	"./dv": 486,
	"./dv.js": 486,
	"./el": 487,
	"./el.js": 487,
	"./en-au": 488,
	"./en-au.js": 488,
	"./en-ca": 489,
	"./en-ca.js": 489,
	"./en-gb": 490,
	"./en-gb.js": 490,
	"./en-ie": 491,
	"./en-ie.js": 491,
	"./en-nz": 492,
	"./en-nz.js": 492,
	"./eo": 493,
	"./eo.js": 493,
	"./es": 495,
	"./es-do": 494,
	"./es-do.js": 494,
	"./es.js": 495,
	"./et": 496,
	"./et.js": 496,
	"./eu": 497,
	"./eu.js": 497,
	"./fa": 498,
	"./fa.js": 498,
	"./fi": 499,
	"./fi.js": 499,
	"./fo": 500,
	"./fo.js": 500,
	"./fr": 503,
	"./fr-ca": 501,
	"./fr-ca.js": 501,
	"./fr-ch": 502,
	"./fr-ch.js": 502,
	"./fr.js": 503,
	"./fy": 504,
	"./fy.js": 504,
	"./gd": 505,
	"./gd.js": 505,
	"./gl": 506,
	"./gl.js": 506,
	"./gom-latn": 507,
	"./gom-latn.js": 507,
	"./he": 508,
	"./he.js": 508,
	"./hi": 509,
	"./hi.js": 509,
	"./hr": 510,
	"./hr.js": 510,
	"./hu": 511,
	"./hu.js": 511,
	"./hy-am": 512,
	"./hy-am.js": 512,
	"./id": 513,
	"./id.js": 513,
	"./is": 514,
	"./is.js": 514,
	"./it": 515,
	"./it.js": 515,
	"./ja": 516,
	"./ja.js": 516,
	"./jv": 517,
	"./jv.js": 517,
	"./ka": 518,
	"./ka.js": 518,
	"./kk": 519,
	"./kk.js": 519,
	"./km": 520,
	"./km.js": 520,
	"./kn": 521,
	"./kn.js": 521,
	"./ko": 522,
	"./ko.js": 522,
	"./ky": 523,
	"./ky.js": 523,
	"./lb": 524,
	"./lb.js": 524,
	"./lo": 525,
	"./lo.js": 525,
	"./lt": 526,
	"./lt.js": 526,
	"./lv": 527,
	"./lv.js": 527,
	"./me": 528,
	"./me.js": 528,
	"./mi": 529,
	"./mi.js": 529,
	"./mk": 530,
	"./mk.js": 530,
	"./ml": 531,
	"./ml.js": 531,
	"./mr": 532,
	"./mr.js": 532,
	"./ms": 534,
	"./ms-my": 533,
	"./ms-my.js": 533,
	"./ms.js": 534,
	"./my": 535,
	"./my.js": 535,
	"./nb": 536,
	"./nb.js": 536,
	"./ne": 537,
	"./ne.js": 537,
	"./nl": 539,
	"./nl-be": 538,
	"./nl-be.js": 538,
	"./nl.js": 539,
	"./nn": 540,
	"./nn.js": 540,
	"./pa-in": 541,
	"./pa-in.js": 541,
	"./pl": 542,
	"./pl.js": 542,
	"./pt": 544,
	"./pt-br": 543,
	"./pt-br.js": 543,
	"./pt.js": 544,
	"./ro": 545,
	"./ro.js": 545,
	"./ru": 546,
	"./ru.js": 546,
	"./sd": 547,
	"./sd.js": 547,
	"./se": 548,
	"./se.js": 548,
	"./si": 549,
	"./si.js": 549,
	"./sk": 550,
	"./sk.js": 550,
	"./sl": 551,
	"./sl.js": 551,
	"./sq": 552,
	"./sq.js": 552,
	"./sr": 554,
	"./sr-cyrl": 553,
	"./sr-cyrl.js": 553,
	"./sr.js": 554,
	"./ss": 555,
	"./ss.js": 555,
	"./sv": 556,
	"./sv.js": 556,
	"./sw": 557,
	"./sw.js": 557,
	"./ta": 558,
	"./ta.js": 558,
	"./te": 559,
	"./te.js": 559,
	"./tet": 560,
	"./tet.js": 560,
	"./th": 561,
	"./th.js": 561,
	"./tl-ph": 562,
	"./tl-ph.js": 562,
	"./tlh": 563,
	"./tlh.js": 563,
	"./tr": 564,
	"./tr.js": 564,
	"./tzl": 565,
	"./tzl.js": 565,
	"./tzm": 567,
	"./tzm-latn": 566,
	"./tzm-latn.js": 566,
	"./tzm.js": 567,
	"./uk": 568,
	"./uk.js": 568,
	"./ur": 569,
	"./ur.js": 569,
	"./uz": 571,
	"./uz-latn": 570,
	"./uz-latn.js": 570,
	"./uz.js": 571,
	"./vi": 572,
	"./vi.js": 572,
	"./x-pseudo": 573,
	"./x-pseudo.js": 573,
	"./yo": 574,
	"./yo.js": 574,
	"./zh-cn": 575,
	"./zh-cn.js": 575,
	"./zh-hk": 576,
	"./zh-hk.js": 576,
	"./zh-tw": 577,
	"./zh-tw.js": 577
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 830;


/***/ }),

/***/ 845:
/***/ (function(module, exports) {

module.exports = "\n.fullscreen-window {\n    /*display: none;*/\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    width: 100%;\n    height: 100%;\n    margin: auto;\n    background: #111;\n    z-index: 999;\n    -webkit-transform: translate(0, -100%);\n            transform: translate(0, -100%);\n}\n\n.fullscreen-bar {\n    padding: 10px 20px;\n    position: fixed;\n    top: 0; left: 0;\n    width: 100%;\n    height: 50px;\n    background: #1b1b1b;\n    z-index: 99;\n}\n\n.fullscreen-container {\n    display: none;\n    position: absolute;\n    top: 0; right: 0; bottom: 0; left: 0;\n    width: 100%;\n    height: 100%;\n    padding-top: 50px;\n    margin: auto;\n}\n\n.fullscreen-utils {\n    float: left;\n}\n\n\n.fullscreen-close {\n    float: right;\n    padding: 10px;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 1;\n    color: #999;\n    text-transform: uppercase;  \n    cursor: pointer;\n}\n\n.fullscreen-window.is-open {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    -webkit-animation: openwindow .3s ease-in;\n            animation: openwindow .3s ease-in;\n}\n.fullscreen-window.is-closed {    \n    -webkit-transform: translateY(-100%);    \n            transform: translateY(-100%);\n    -webkit-animation: closewindow .3s ease-out;\n            animation: closewindow .3s ease-out;\n    \n}\n\n@-webkit-keyframes openwindow {\n  0% { \n      -webkit-transform: translate(0, -100%); \n              transform: translate(0, -100%);\n      opacity: 0;      \n    }\n  100% { \n      -webkit-transform: translate(0, 0); \n              transform: translate(0, 0); \n      opacity: 1;\n    }\n}\n\n@keyframes openwindow {\n  0% { \n      -webkit-transform: translate(0, -100%); \n              transform: translate(0, -100%);\n      opacity: 0;      \n    }\n  100% { \n      -webkit-transform: translate(0, 0); \n              transform: translate(0, 0); \n      opacity: 1;\n    }\n}\n\n@-webkit-keyframes closewindow {\n  0% { -webkit-transform: translate(0, 0); transform: translate(0, 0); opacity: 1; }\n  100% { -webkit-transform: translate(0, -100%); transform: translate(0, -100%); opacity: 0; }\n}\n\n@keyframes closewindow {\n  0% { -webkit-transform: translate(0, 0); transform: translate(0, 0); opacity: 1; }\n  100% { -webkit-transform: translate(0, -100%); transform: translate(0, -100%); opacity: 0; }\n}"

/***/ }),

/***/ 846:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 847:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 848:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 849:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 850:
/***/ (function(module, exports) {

module.exports = ".p-casino {\n\n}\n\n.p-casino__list {\n    padding: 0;\n    overflow: hidden;\n}\n.p-casino__list > li {\n        float: left;\n        width: 33.333%\n}\n\n.c-block--casino {\n    min-height: 250px;\n    padding: 20px;\n}\n.c-block--casino .c-block__logo {\n        margin-bottom: 1rem;\n}\n.c-block--casino .c-block__logo img {\n        max-width: 200px;\n}\n.c-block--casino .c-block__text {\n        font-family: \"Lasiver Bold\", Helvetica, Arial, sans-serif ;\n        text-transform: uppercase;\n}"

/***/ }),

/***/ 851:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = "/*:host {\n    overflow: hidden;\n    overflow-y: auto;\n    position: relative;\n}\n.scrollable-content {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n}\n.total-padding {\n    width: 1px;\n    opacity: 0;\n}\n*/\n"

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "\n\n/*.promo-detail .c-panel__body__wrapper {\n    position: relative;       \n}\n.promo-detail [class^=\"col-md-\"] {\n    float: left;\n}\n.promo-detail .col-md-8 {\n    width: 60%;\n    padding-right: 20px;\n}\n\n.promo-detail .col-md-4 {\n    width: 40%;\n}\n\n.promo__title {\n    text-transform: uppercase;\n    padding: 20px;\n    margin-bottom: 2rem;\n    background: rgba(0,0,0, .8);\n}\n*/\n"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 875:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 876:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 877:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 878:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"l-page__container g-grid\" *ngIf=\"authService.tokenId\">\n\n    <header app-header class=\"l-header\"></header>\n    \n    <div class=\"l-roller\">\n        <div class=\"c-newstream\">\n            <div class=\"c-newstream__wrapper\">\n                <span>1 You spin me right round, baby. Like a record, baby.</span>\n                <span>2 You spin me right round, baby. Like a record, baby.</span>\n                <span>3 You spin me right round, baby. Like a record, baby.</span>\n            </div>\n        </div>\n\n        <div class=\"o-divider o-divider--vertrical\"></div>\n\n        <div language-selector></div>\n\n    </div>\n\n    <div class=\"l-sidebar\">\n\n        <div class=\"l-sidebar__nav\">\n            <app-menu></app-menu>\n        </div>\n\n    </div>\n\n\t<div class=\"l-main\">\n\t\t<div class=\"l-main__container\">\n            \n            <router-outlet></router-outlet>\n\n            <!--<router-outlet name=\"aux\"></router-outlet>-->\n\n\t\t</div>\n\t</div>\n\n    <footer app-footer class=\"l-footer\"></footer>\n\n</div>\n\n<div class=\"c-dialog\" *ngIf=\"idleNow\">\n    <p><strong>{{idleState}}</strong></p>\n    <p *ngIf=\"lastPing\"><small>Last active <strong>{{lastPing | amTimeAgo}}</strong></small></p>\n    <!--<button (click)=\"reset()\" *ngIf=\"timedOut\" class=\"o-buttton o-button--action o-button--tiny\">Restart</button>-->\n</div>\n\n<div class=\"fullscreen-window\">\n    <div class=\"fullscreen-bar\">\n        <div class=\"fullscreen-utils\">\n            <button class=\"o-button o-button--tiny\"><strong>{{userDetails.username}}</strong></button>\n            <button (click)=\"addOnlineDeposit()\" class=\"o-button o-button--action o-button--tiny\">Online Deposit</button>\n            <button (click)=\"addWechatDeposit()\" class=\"o-button o-button--action o-button--tiny\">WeChat Deposit</button>\n        </div>\n        <div class=\"fullscreen-close\" (click)=\"closeFullscreenWindow()\"><i class=\"icon icon-cancel\"></i> Close</div>\n    </div>\n    <div class=\"loader align-center\"> \n        <div class=\"spinner\"></div>\n        <div>{{ 'Loading Game...' }}</div>\n    </div>\n    <div class=\"fullscreen-container\"></div>    \n</div>\n\n<router-outlet *ngIf=\"!authService.tokenId\"></router-outlet>\n\n<modal-placeholder></modal-placeholder>"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!bankAdd\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div *ngIf=\"success\" class=\"c-alert hidden\">\n    <div *ngIf=\"valid\" class=\"c-alert__wrapper align-center\">\n        <h4  class=\"c-alert__title\">\n        <i class=\"icon icon-info-circled\"></i> {{ 'BANKACCOUNTS.Success' | translate }}\n        </h4>\n        <p class=\"c-alert__desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nam nemo, quisquam praesentium adipisci, quia ratione sunt! Placeat earum eius impedit nulla recusandae maxime deleniti. Possimus ab rem doloremque praesentium!</p>\n    </div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"bankAdd\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">{{ 'BANKACCOUNTS.AddBankAccount' | translate }}</h2>\n              <p class=\"c-article__desc\">{{ 'BANKACCOUNTS.AddNewBankAccountDetails' | translate }}</p>\n            </div>\n\n            <div *ngIf=\"success && !valid \" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n                <div *ngFor=\"let error of dataError\">\n                    <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                </div>\n            </div>\n\n            <form name=\"bankAdd\" autocomplete=\"off\" novalidate #BankAddForm=\"ngForm\" class=\"c-form\">\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\">{{ 'BANKACCOUNTS.AccountName' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"accountName\"\n                          required disabled\n                          name=\"accountName\" [(ngModel)]=\"bankAdd.BankAccountName\"\n                          placeholder=\"{{ 'BANKACCOUNTS.AccountName' | translate }}\" #accountName=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\">{{ 'BANKACCOUNTS.AccountNumber' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"addAccountNumber\"\n                          required\n                          name=\"addAccountNumber\" [(ngModel)]=\"bankAdd.AccountNumber\" [value]=\" bankAdd.AccountNumber \"\n                          placeholder=\"{{ 'BANKACCOUNTS.AccountNumber' | translate }}\" #addAccountNumber=\"ngModel\">\n                    <div [hidden]=\"addAccountNumber.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'BANKACCOUNTS.ErrorAccountNumber' | translate }}\n                    </div>\n                </div>\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"preferredBanks\">{{ 'BANKACCOUNTS.PreferredBanks' | translate }}</label>\n                    <div class=\"c-form__select__wrapper\">\n                        <select class=\"c-form__input c-form__select\" id=\"preferredBanks\"\n                                #preferredBanks=\"ngModel\" name=\"preferredBanks\"\n                                [(ngModel)]=\"bankAdd.BankId\">\n                            <option disabled value=\"0\">{{ 'BANKACCOUNTS.ChooseYourBank' | translate }}</option>\n                            <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                                    [ngValue]=\"quickDepositPreferredBank.Id\">\n                                {{ quickDepositPreferredBank.BankName }}\n                            </option>\n                        </select>\n                        <div [hidden]=\"preferredBanks.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                            {{ 'BANKACCOUNTS.ErrorPreferredBanks' | translate }}\n                        </div>\n                    </div>\n                </div>\n\n              <div class=\"c-form__group\">\n                <label class=\"c-form__label invisible\">{{ 'BANKACCOUNTS.BranchName' | translate }}</label>\n                <input type=\"text\" class=\"c-form__input\" id=\"addBranchName\"\n                      required\n                      name=\"addBranchName\" [(ngModel)]=\"bankAdd.BranchName\" [value]=\" bankAdd.BranchName \"\n                      placeholder=\"{{ 'BANKACCOUNTS.BranchName' | translate }}\" #addBranchName=\"ngModel\">\n                  <div [hidden]=\"addBranchName.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                      {{ 'BANKACCOUNTS.ErrorBranchName' | translate }}\n                  </div>\n              </div>\n\n              <div class=\"c-form__group\">\n                <label class=\"c-form__label invisible\">{{ 'BANKACCOUNTS.City' | translate }}</label>\n                <input type=\"text\" class=\"c-form__input\" id=\"addCity\"\n                      required\n                      name=\"addCity\" [(ngModel)]=\"bankAdd.City\" [value]=\" bankAdd.City \"\n                      placeholder=\"{{ 'BANKACCOUNTS.City' | translate }}\" #addCity=\"ngModel\">\n                  <div [hidden]=\"addCity.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                      {{ 'BANKACCOUNTS.ErrorCity' | translate }}\n                  </div>\n              </div>\n\n              <div class=\"c-form__group\">\n                <label class=\"c-form__label invisible\">{{ 'BANKACCOUNTS.Province' | translate }}</label>\n                <input type=\"text\" class=\"c-form__input\" id=\"addProvince\"\n                      required\n                      name=\"addProvince\" [(ngModel)]=\"bankAdd.Province\" [value]=\" bankAdd.Province \"\n                      placeholder=\"{{ 'BANKACCOUNTS.Province' | translate }}\" #addProvince=\"ngModel\">\n                  <div [hidden]=\"addProvince.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                      {{ 'BANKACCOUNTS.ErrorProvince' | translate }}\n                  </div>\n              </div>\n\n              <div class=\"c-form__group\">\n                <button class=\"o-button\" (click)=\"goBack()\">{{ 'BANKACCOUNTS.Cancel' | translate }}</button>\n                <button type=\"submit\" (click)=\"create(bankAdd)\" class=\"o-button o-button--action\">\n                    <span *ngIf=\"!submitting\">{{ 'BANKACCOUNTS.Add' | translate }}</span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                </button>\n              </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!bankDetails\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"c-alert hidden\" style=\"display: none\">\n    <div class=\"c-alert__wrapper align-center\">\n        <h4 class=\"c-alert__title\">\n        <i class=\"icon icon-info-circled\"></i> Success\n        </h4>\n        <p class=\"c-alert__desc\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nam nemo, quisquam praesentium adipisci, quia ratione sunt! Placeat earum eius impedit nulla recusandae maxime deleniti. Possimus ab rem doloremque praesentium!</p>\n        {{ errorMessage | json}} {{successMessage | json}}\n    </div>\n</div>\n\n<div id=\"bankDetailPage\" class=\"grid c-article\" *ngIf=\"bankDetails\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\" id=\"scrollable\" autoheight>\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">Edit Bank Account</h2>\n              <p class=\"c-article__desc\">Modify existing bank account details.</p>\n            </div>\n\n            <form name=\"bankDetails\" autocomplete=\"off\" novalidate #BankDetailForm=\"ngForm\" class=\"c-form\">\n\n                <div class=\"c-form__group\">\n                  <label for=\"status\" class=\"c-form__label invisible\">Status</label>\n                  <div class=\"c-form__select__wrapper\">\n                    <select class=\"c-form__input c-form__select\" id=\"status\" name=\"status\" [(ngModel)]=\"bankDetails.IsActiveAccount\">\n                      <option value=\"\" disabled>Choose your Bank Status</option>\n                      <option value=\"true\">Active</option>\n                      <option value=\"false\">Inactive</option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"accountName\" class=\"c-form__label invisible\">AccountName</label>\n                  <input type=\"text\" class=\"c-form__input\" id=\"accountName\"\n                        required disabled\n                        name=\"username\" [(ngModel)]=\"bankDetails.AccountName\" [value]=\" bankDetails.AccountName \"\n                        placeholder=\"* Account Name\" #accountName=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"AccountNumber\" class=\"c-form__label invisible\">Account Number</label>\n                  <input type=\"text\" class=\"c-form__input\" id=\"AccountNumber\"\n                        required\n                        name=\"AccountNumber\" [(ngModel)]=\"bankDetails.AccountNumber\" [value]=\" bankDetails.AccountNumber \"\n                        placeholder=\"* Account Number\" #AccountNumber=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"preferredBanks\" class=\"c-form__label invisible\">Preferred Banks</label>\n\n                  <div class=\"c-form__select__wrapper\">\n                    <select  class=\"c-form__input c-form__select\" id=\"preferredBanks\" name=\"preferredBanks\" [(ngModel)]=\"bankDetails.BankId\">\n                      <option value=\"\" disabled>Choose your Bank</option>\n                      <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                              [ngValue]=\"quickDepositPreferredBank.Id\">\n                        {{ quickDepositPreferredBank.BankName }}\n                      </option>\n                    </select>\n                  </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"branchName\" class=\"c-form__label invisible\">BranchName</label>\n                  <input type=\"text\" class=\"c-form__input\" id=\"branchName\"\n                        required\n                        name=\"branchName\" [(ngModel)]=\"bankDetails.BranchName\" [value]=\" bankDetails.BranchName \"\n                        placeholder=\"* Branch Name\" #branchName=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"city\" class=\"c-form__label invisible\">City</label>\n                  <input type=\"text\" class=\"c-form__input\" id=\"city\"\n                        required\n                        name=\"city\" [(ngModel)]=\"bankDetails.City\" [value]=\" bankDetails.City \"\n                        placeholder=\"* City\" #city=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                  <label for=\"province\" class=\"c-form__label invisible\">Province</label>\n                  <input type=\"text\" class=\"c-form__input\" id=\"province\"\n                        required\n                        name=\"province\" [(ngModel)]=\"bankDetails.Province\" [value]=\" bankDetails.Province \"\n                        placeholder=\"* Province\" #province=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                  <button class=\"o-button\" (click)=\"goBack()\">Back</button>\n                  <button type=\"submit\" (click)=\"bankUpdate(bankDetails)\" class=\"o-button o-button--action\"\n                          [disabled]=\"!BankDetailForm.form.valid\">Save</button>\n                </div>\n                \n            </form>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!profiles\"> \n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"profiles\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">{{ 'BANKACCOUNTS.BankAccounts' | translate }}</h2>\n              <p class=\"c-article__desc\">{{ 'BANKACCOUNTS.AddAsMyWithdrawal' | translate }}</p>\n            </div>\n\n            <table class=\"c-table\">\n                <thead>\n                    <tr>\n                        <th>{{ 'BANKACCOUNTS.AccountName' | translate }}</th>\n                        <th>{{ 'BANKACCOUNTS.AccountNo' | translate }}</th>\n                        <th>{{ 'BANKACCOUNTS.BankName' | translate }}</th>\n                        <th>{{ 'BANKACCOUNTS.Status' | translate }}</th>\n                        <th>{{ 'BANKACCOUNTS.Edit' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody id=\"list-withdrawal-transaction\">\n                    <tr *ngFor=\"let profile of profiles.PlayerBankAccounts\">\n                        <td>{{ profile.BankAccountName }}</td>\n                        <td>{{ profile.AccountNumber }}</td>\n                        <td>{{ profile.BranchName }}</td>\n                        <td>{{ profile.IsActiveAccount === true ? 'Active' : 'Inactive'}}</td>\n                        <td>\n                            <div class=\"c-table__action\" routerLink=\"/bank/{{profile.Id}}\">\n                                <i class=\"icon icon-pencil\"></i>\n                            </div>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <hr/>\n            <button routerLink=\"/bank-add\" class=\"o-button o-button--action\">\n                {{ 'BANKACCOUNTS.AddBankAccount' | translate }}\n            </button>\n\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"banner\" class=\"c-carousel c-carousel--single grid grid--container grid--no-gutters js-carousel\">\n    <div class=\"row row--no-gutters\">\n    <!--<slick-slider>-->\n    <div *ngFor=\"let game of banner | slice:1:3\" class=\"c-carousel__item col col--sm-12 col--no-gutters\">\n        <div class=\"c-block c-block--banner\" [ngStyle]=\"{'background-image': 'url(' + game.thumb_image.src + ')'}\">   \n            <div class=\"c-block__content\">\n                <h1>{{ game.title }}</h1>                        \n                <a (click)=\"loadiframe(game.game_platform_code, game.game_code)\" class=\"o-button o-button--action\">\n                     {{ 'CASINO.PlayNow' | translate }}\n                </a>\n            </div>\n            \n        </div>\n    </div>\n    <!--</slick-slider>-->\n    </div>\n</div>\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!casinos\">\n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"c-panel\" *ngIf=\"casinos\">\n  <div class=\"c-panel__header\">            \n        <div class=\"c-panel__title\">\n            <span>{{ 'CASINO.Casino' | translate }}</span>\n        </div> \n    </div>\n  <div class=\"c-panel__body\" autoheight>\n    <div id=\"scrollable\" class=\"c-panel__body__wrapper\" autoheight>         \n      <ul class=\"c-panel__list c-list row\">\n        <li *ngFor=\"let casino of casinos\" class=\"col col--xs-4\">\n          <div class=\"c-block c-block--casino\" [ngStyle]=\"{'background-image': 'url(' + casino.thumb_image.src + ')'}\">\n            <div class=\"c-block__logo\">\n              <img src=\"{{ casino.logo.src }}\" alt=\"{{ casino.logo.alt }}\">\n            </div>\n            <div class=\"c-block__text\">\n              <p>{{ casino.title }}</p>\n            </div>\n            <a (click)=\"loadiframe(casino.game_platform_code, casino.game_code)\" class=\"o-button o-button--action\">{{ 'BANNER.PlayNow' | translate }}</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"errorMessage\">\n            <pre>\n                 {{ errorMessage }}\n            </pre>\n\n</section>\n\n<div class=\"container\">\n    <h1>Country Form </h1>\n    <form name=\"Countries\" #CountriesForm=\"ngForm\">\n        <section *ngIf=\"countries\">\n\n            <div class=\"form-group\">\n                <label for=\"Country\">Country</label>\n                <select name=\"state\" ngModel>\n                    <option value=\"\" disabled>Choose your Country</option>\n                    <option *ngFor=\"let country of countries\" [ngValue]=\"country.CountryCode\">\n                        {{ country.CountryName }}\n                    </option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"Mobile Country Code\">Mobile Country Code</label>\n                <select name=\"countryCode\" ngModel>\n                    <option value=\"\" disabled>Choose your Mobile Country Code </option>\n                    <option *ngFor=\"let country of countries\" [ngValue]=\"country.CountryCode\" >\n                        {{ country.CountryCallCode}}\n                    </option>\n\n                </select>\n            </div>\n\n        </section>\n    </form>\n</div>"

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_signalr__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forgot_password_forgot_password_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forgot_password_reset_forgot_password_reset_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__security_question_security_question_component__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__country_country_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__state_province_state_province_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__online_deposit_online_deposit_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__online_deposit_bank_online_deposit_bank_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__quick_deposit_quick_deposit_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__quick_deposit_method_quick_deposit_method_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__quick_deposit_preferred_bank_quick_deposit_preferred_bank_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__quick_deposit_bank_account_quick_deposit_bank_account_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__wechat_wechat_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__withdrawal_withdrawal_component__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__withdrawal_transaction_withdrawal_transaction_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__bank_bank_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__bank_detail_bank_detail_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bank_add_bank_add_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__deposit_transaction_deposit_transaction_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__email_verification_email_verification_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__mobile_verification_mobile_verification_component__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__games_games_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__casino_casino_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__promotion_promotion_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__promotion_detail_promotion_detail_component__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__banner_banner_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sports_sports_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__home_home_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__featured_games_featured_games_component__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__registration_registration_service__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__login_login_service__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__forgot_password_forgot_password_service__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__forgot_password_reset_forgot_password_reset_service__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__profile_profile_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__security_question_security_question_service__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__country_country_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__state_province_state_province_service__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__online_deposit_online_deposit_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__online_deposit_bank_online_deposit_bank_service__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__quick_deposit_quick_deposit_service__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__quick_deposit_method_quick_deposit_method_service__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__quick_deposit_bank_account_quick_deposit_bank_account_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__wechat_wechat_service__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__withdrawal_withdrawal_service__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__withdrawal_transaction_withdrawal_transaction_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__bank_detail_bank_detail_service__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__bank_add_bank_add_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__deposit_transaction_deposit_transaction_service__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__layout_header_header_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__email_verification_email_verification_service__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__mobile_verification_mobile_verification_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__games_games_service__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__casino_casino_service__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__promotion_promotion_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__promotion_detail_promotion_detail_service__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__banner_banner_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__sports_sports_service__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__featured_games_featured_games_service__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__default_request_option_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__auth_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__auth_auth_guard_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__layout_header_header_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__layout_footer_footer_component__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__elements_menu_menu_component__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__elements_language_language_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__elements_modal_modal_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__elements_modal_success_modal_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__shared_shared_module__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83_ngx_malihu_scrollbar__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__shared_game_filter_pipe__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85_mydatepicker__ = __webpack_require__(837);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85_mydatepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_85_mydatepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ng_idle_keepalive__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87_angular2_moment__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_87_angular2_moment__);
/* unused harmony export createTranslateLoader */
/* unused harmony export createConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
























































































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
// v2.0.0
function createConfig() {
    var c = new __WEBPACK_IMPORTED_MODULE_7_ng2_signalr__["a" /* SignalRConfiguration */]();
    c.hubName = 'walletBalance';
    c.url = 'http://uat.beachheadsolutionsinc.com/';
    //c.jsonp = true;
    //c.qs = 'myBalance';
    //c.createHubProxy('walletBalance');
    c.logging = true;
    //console.log(c);
    //c.qs = { SignalRTokenId: localStorage.getItem('SignalRTokenId') };
    return c;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_13__forgot_password_reset_forgot_password_reset_component__["a" /* ForgotPasswordResetComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__security_question_security_question_component__["a" /* SecurityQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__country_country_component__["a" /* CountryComponent */],
                __WEBPACK_IMPORTED_MODULE_17__state_province_state_province_component__["a" /* StateProvinceComponent */],
                __WEBPACK_IMPORTED_MODULE_18__online_deposit_online_deposit_component__["a" /* OnlineDepositComponent */],
                __WEBPACK_IMPORTED_MODULE_19__online_deposit_bank_online_deposit_bank_component__["a" /* OnlineDepositBankComponent */],
                __WEBPACK_IMPORTED_MODULE_20__quick_deposit_quick_deposit_component__["a" /* QuickDepositComponent */],
                __WEBPACK_IMPORTED_MODULE_21__quick_deposit_method_quick_deposit_method_component__["a" /* QuickDepositMethodComponent */],
                __WEBPACK_IMPORTED_MODULE_22__quick_deposit_preferred_bank_quick_deposit_preferred_bank_component__["a" /* QuickDepositPreferredBankComponent */],
                __WEBPACK_IMPORTED_MODULE_23__quick_deposit_bank_account_quick_deposit_bank_account_component__["a" /* QuickDepositBankAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_24__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_component__["a" /* QuickDepositGenerateUdaIdComponent */],
                __WEBPACK_IMPORTED_MODULE_25__wechat_wechat_component__["a" /* WechatComponent */],
                __WEBPACK_IMPORTED_MODULE_26__withdrawal_withdrawal_component__["a" /* WithdrawalComponent */],
                __WEBPACK_IMPORTED_MODULE_27__withdrawal_transaction_withdrawal_transaction_component__["a" /* WithdrawalTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_28__bank_bank_component__["a" /* BankComponent */],
                __WEBPACK_IMPORTED_MODULE_29__bank_detail_bank_detail_component__["a" /* BankDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__games_games_component__["a" /* GamesComponent */],
                __WEBPACK_IMPORTED_MODULE_35__casino_casino_component__["a" /* CasinoComponent */],
                __WEBPACK_IMPORTED_MODULE_36__promotion_promotion_component__["a" /* PromotionComponent */],
                __WEBPACK_IMPORTED_MODULE_30__bank_add_bank_add_component__["a" /* BankAddComponent */],
                __WEBPACK_IMPORTED_MODULE_37__promotion_detail_promotion_detail_component__["a" /* PromotionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_78__elements_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_38__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_39__sports_sports_component__["a" /* SportsComponent */],
                __WEBPACK_IMPORTED_MODULE_76__layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_77__layout_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_79__elements_language_language_component__["a" /* LanguageComponent */],
                __WEBPACK_IMPORTED_MODULE_40__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_41__featured_games_featured_games_component__["a" /* FeaturedGamesComponent */],
                __WEBPACK_IMPORTED_MODULE_81__elements_modal_success_modal_component__["a" /* SuccessModalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__deposit_transaction_deposit_transaction_component__["a" /* DepositTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_32__email_verification_email_verification_component__["a" /* EmailVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_33__mobile_verification_mobile_verification_component__["a" /* MobileVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_84__shared_game_filter_pipe__["a" /* GameFilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_7_ng2_signalr__["b" /* SignalRModule */].forRoot(createConfig),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_80__elements_modal_modal_module__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_83_ngx_malihu_scrollbar__["a" /* MalihuScrollbarModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_82__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_85_mydatepicker__["MyDatePickerModule"],
                __WEBPACK_IMPORTED_MODULE_87_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_86__ng_idle_keepalive__["a" /* NgIdleKeepaliveModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_42__registration_registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_43__login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_44__forgot_password_forgot_password_service__["a" /* ForgotPasswordService */],
                __WEBPACK_IMPORTED_MODULE_45__forgot_password_reset_forgot_password_reset_service__["a" /* ForgotPasswordResetService */],
                __WEBPACK_IMPORTED_MODULE_46__profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_47__security_question_security_question_service__["a" /* SecurityQuestionService */],
                __WEBPACK_IMPORTED_MODULE_48__country_country_service__["a" /* CountryService */],
                __WEBPACK_IMPORTED_MODULE_49__state_province_state_province_service__["a" /* StateProvinceService */],
                __WEBPACK_IMPORTED_MODULE_50__online_deposit_online_deposit_service__["a" /* OnlineDepositService */],
                __WEBPACK_IMPORTED_MODULE_51__online_deposit_bank_online_deposit_bank_service__["a" /* OnlineDepositBankService */],
                __WEBPACK_IMPORTED_MODULE_52__quick_deposit_quick_deposit_service__["a" /* QuickDepositService */],
                __WEBPACK_IMPORTED_MODULE_53__quick_deposit_method_quick_deposit_method_service__["a" /* QuickDepositMethodService */],
                __WEBPACK_IMPORTED_MODULE_54__quick_deposit_preferred_bank_quick_deposit_preferred_bank_service__["a" /* QuickDepositPreferredBankService */],
                __WEBPACK_IMPORTED_MODULE_55__quick_deposit_bank_account_quick_deposit_bank_account_service__["a" /* QuickDepositBankAccountService */],
                __WEBPACK_IMPORTED_MODULE_56__quick_deposit_generate_uda_id_quick_deposit_generate_uda_id_service__["a" /* QuickDepositGenerateUdaIdService */],
                __WEBPACK_IMPORTED_MODULE_57__wechat_wechat_service__["a" /* WechatService */],
                __WEBPACK_IMPORTED_MODULE_58__withdrawal_withdrawal_service__["a" /* WithdrawalService */],
                __WEBPACK_IMPORTED_MODULE_59__withdrawal_transaction_withdrawal_transaction_service__["a" /* WithdrawalTransactionService */],
                __WEBPACK_IMPORTED_MODULE_60__bank_detail_bank_detail_service__["a" /* BankDetailService */],
                __WEBPACK_IMPORTED_MODULE_61__bank_add_bank_add_service__["a" /* BankAddService */],
                __WEBPACK_IMPORTED_MODULE_63__layout_header_header_service__["a" /* HeaderService */],
                __WEBPACK_IMPORTED_MODULE_64__email_verification_email_verification_service__["a" /* EmailVerificationService */],
                __WEBPACK_IMPORTED_MODULE_65__mobile_verification_mobile_verification_service__["a" /* MobileVerificationService */],
                __WEBPACK_IMPORTED_MODULE_73__default_request_option_service__["a" /* requestOptionsProvider */],
                __WEBPACK_IMPORTED_MODULE_66__games_games_service__["a" /* GamesService */],
                __WEBPACK_IMPORTED_MODULE_67__casino_casino_service__["a" /* CasinoService */],
                __WEBPACK_IMPORTED_MODULE_68__promotion_promotion_service__["a" /* PromotionService */],
                __WEBPACK_IMPORTED_MODULE_69__promotion_detail_promotion_detail_service__["a" /* PromotionDetailService */],
                __WEBPACK_IMPORTED_MODULE_70__banner_banner_service__["a" /* BannerService */],
                __WEBPACK_IMPORTED_MODULE_71__sports_sports_service__["a" /* SportsService */],
                __WEBPACK_IMPORTED_MODULE_72__featured_games_featured_games_service__["a" /* FeaturedGamesService */],
                __WEBPACK_IMPORTED_MODULE_75__auth_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_74__auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_83_ngx_malihu_scrollbar__["b" /* MalihuScrollbarService */],
                __WEBPACK_IMPORTED_MODULE_62__deposit_transaction_deposit_transaction_service__["a" /* DepositTransactionService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/app.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!depositTransactions\">\n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div id=\"depositTransactionsPage\" class=\"grid c-article\" *ngIf=\"depositTransactions\">\n  <div class=\"row\">\n    <div class=\"col col--xs-12\">\n\n      <div class=\"c-article__header\">\n        <h2 class=\"c-article__title\">{{ 'DEPOSITTRANSACTION.DepositTransaction' | translate }}</h2>\n        <p class=\"c-article__desc\">{{ 'DEPOSITTRANSACTION.WeWillProcess' | translate }}</p>\n      </div>\n\n      <table class=\"c-table\">\n        <thead>\n        <tr>\n          <th>{{ 'DEPOSITTRANSACTION.DateTimeRequested' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.Method' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.TransactionNumber' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.Status' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.RequestedAmount' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.CreditedAmount' | translate }}</th>\n          <th>{{ 'DEPOSITTRANSACTION.BonusAmount' | translate }}</th>\n        </tr>\n        </thead>\n        <tbody id=\"list-deposit-transaction\">\n        <tr *ngFor=\"let depositTransaction of depositTransactions\">\n          <td>{{ depositTransaction.DepositDate + '+0800' | date: 'MM/dd/yyyy hh:mm:ss a' }}</td>\n          <td>{{ depositTransaction.PaymentMethodName }}</td>\n          <td>{{ depositTransaction.TransactionNo }}</td>\n          <td>{{ depositTransaction.Status }}</td>\n          <td>{{ depositTransaction.DepositAmount }}</td>\n          <td>{{ depositTransaction.CreditAmount }}</td>\n          <td>{{ depositTransaction.BonusAmount }}</td>\n        </tr>\n        </tbody>\n      </table>\n      <hr/>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<div class=\"c-language align-center\">\n    <div class=\"c-language__selected\">\n      <div (click)=\"toggleLangOptns()\">\n        <img src=\"assets/images/lang/lang-{{translate.currentLang}}.png\" alt=\"\" />\n        <span>{{ translate.currentLang }}</span>\n      </div>\n    </div>\n    <ul class=\"c-language__options\" [ngClass]=\"!showLangOptns ? 'is-close' : 'is-open'\">\n        <li *ngFor=\"let lang of translate.getLangs()\">\n          <div (click)=\"translate.use(lang); changeLang($event)\">\n            <img src=\"assets/images/lang/lang-{{ lang }}.png\" alt=\"{{ lang }}\" />\n            <span>{{ lang }}</span>\n          </div>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "\n<nav id=\"mainNav\" class=\"c-nav\" [ngClass]=\"!showNavOptns ? 'is-toggled-close' : 'is-toggled-open'\">\n\n    <ul class=\"c-nav__list c-nav__list--main\">\n        <li class=\"c-nav__item\" routerLinkActive=\"is-current\">\n            <a [routerLink]=\"['/home']\" title=\"{{ 'MENU.HOME' | translate }}\">\n                <i class=\"icon icon-home\"></i>\n                <span>{{ 'MENU.HOME' | translate }}</span>\n            </a>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a [routerLink]=\"['/casino']\" title=\"{{ 'MENU.CASINO' | translate }}\">\n                <i class=\"icon icon-casino\"></i>\n                <span>{{ 'MENU.CASINO' | translate }}</span>\n            </a>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a title=\"{{ 'MENU.GAMES' | translate }}\" (click)=\"navSubLink()\">\n                <i class=\"icon icon-games\"></i>\n                <span>{{ 'MENU.GAMES' | translate }}</span>\n            </a>\n            <div class=\"menu-sub-toggler js-menuSubToggler\">\n                <i class=\"icon icon-angle-down\"></i>\n            </div>\n            <ul class=\"c-nav__list c-nav__list--sub\">\n                <li>\n                    <a [routerLink]=\"['/games/Featured Games']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-gamesmini\"></i>\n                        <span>{{ 'MENU.FeaturedGames' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/games/jackpot']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-gamesmini\"></i>\n                        <span>{{ 'MENU.Jackpot' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/games/slots']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-gamesmini\"></i>\n                        <span>{{ 'MENU.Slots' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/games/Table Games']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-gamesmini\"></i>\n                        <span>{{ 'MENU.TableGames' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/games/Video Poker']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-gamesmini\"></i>\n                        <span>{{ 'MENU.VideoPoker' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a [routerLink]=\"['/sports']\" title=\"{{ 'MENU.SportsBook' | translate }}\">\n                <i class=\"icon icon-soccer-ball\"></i>\n                <span>{{ 'MENU.SportsBook' | translate }}</span>\n            </a>\n        </li>\n        <li>\n            <div class=\"o-divider o-divider--horizontal\"></div>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a [routerLink]=\"['/promotion']\" title=\"{{ 'MENU.Promotions' | translate }}\">\n                <i class=\"icon icon-gift\"></i>\n                <span>{{ 'MENU.Promotions' | translate }}</span>\n            </a>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a href=\"http://aff.orange88.com\" target=\"_blank\" title=\"{{ 'MENU.Affiliate' | translate }}\">\n                <i class=\"icon icon-promotions\"></i>\n                <span>{{ 'MENU.Affiliate' | translate }}</span>\n            </a>\n        </li>\n        <li>\n            <div class=\"o-divider o-divider--horizontal\"></div>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <!--<a [routerLink]=\"['/', { outlets: { 'aux': 'bank' } }]\" title=\"Bank Accounts\">-->\n            <a href=\"javascript:void();\" title=\"{{ 'MENU.BankAccounts' | translate }}\" (click)=\"navSubLink()\">\n                <i class=\"icon icon-bank\"></i>\n                <span>{{ 'MENU.BankAccounts' | translate }}</span>\n            </a>\n            <div class=\"menu-sub-toggler js-menuSubToggler\">\n                <i class=\"icon icon-angle-down\"></i>\n            </div>\n            <ul class=\"c-nav__list c-nav__list--sub\">\n                <li>\n                    <a [routerLink]=\"['/bank']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-book\"></i>\n                        <span>{{ 'MENU.BankAccountsList' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/bank-add']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-bank\"></i>\n                        <span>{{ 'MENU.AddBankAccounts' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a href=\"javascript:void();\" title=\"{{ 'MENU.Deposit' | translate }}\" (click)=\"navSubLink()\">\n                <i class=\"icon icon-deposit\"></i>\n                <span>{{ 'MENU.Deposit' | translate }}</span>\n            </a>\n            <div class=\"menu-sub-toggler js-menuSubToggler\">\n                <i class=\"icon icon-angle-down\"></i>\n            </div>\n            <ul class=\"c-nav__list c-nav__list--sub\">\n                <li>\n                    <a [routerLink]=\"['/online-deposit']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-globe\"></i>\n                        <span>{{ 'MENU.OnlineDeposit' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/quick-deposit']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-angle-double-right\"></i>\n                        <span>{{ 'MENU.QuickDeposit' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/wechat']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-wechat\"></i>\n                        <span>{{ 'MENU.WeChatDeposit' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/deposit-history']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-clock\"></i>\n                        <span>{{ 'MENU.DepositHistory' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a href=\"javascript:void();\" title=\"{{ 'MENU.Withdrawal' | translate }}\" (click)=\"navSubLink()\">\n                <i class=\"icon icon-withdrawal\"></i>\n                <span>{{ 'MENU.Withdrawal' | translate }}</span>\n            </a>\n            <div class=\"menu-sub-toggler js-menuSubToggler\">\n                <i class=\"icon icon-angle-down\"></i>\n            </div>\n            <ul class=\"c-nav__list c-nav__list--sub\">\n                <li>\n                    <a [routerLink]=\"['/withdrawal']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-upload\"></i>\n                        <span>{{ 'MENU.CreateWithdrawal' | translate }}</span>\n                    </a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/withdrawal-transaction']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-clock\"></i>\n                        <span>{{ 'MENU.WithdrawalHistory' | translate }}</span>\n                    </a>\n                </li>\n            </ul>\n        </li>\n        <li>\n            <div class=\"o-divider o-divider--horizontal\"></div>\n        </li>\n        <li class=\"c-nav__item \" routerLinkActive=\"is-current\">\n            <a href=\"javascript:void();\" title=\"{{ 'MENU.Settings' | translate }}\" (click)=\"navSubLink()\">\n                <i class=\"icon icon-cog\"></i>\n                <span>{{ 'MENU.Settings' | translate }}</span>\n            </a>\n            <div class=\"menu-sub-toggler js-menuSubToggler\">\n                <i class=\"icon icon-angle-down\"></i>\n            </div>\n            <ul class=\"c-nav__list c-nav__list--sub\">\n                <li>\n                    <a [routerLink]=\"['/profile']\" (click)=\"navLink()\">\n                        <i class=\"icon icon-user\"></i>\n                        <span>{{ 'MENU.EditProfile' | translate }}</span>\n                    </a>\n                </li>\n                <!--<li>-->\n                    <!--<a [routerLink]=\"['/security']\">-->\n                        <!--<i class=\"icon icon-lock\"></i>-->\n                        <!--<span>{{ 'MENU.SecuritySettings' | translate }}</span>-->\n                    <!--</a>-->\n                <!--</li>-->\n            </ul>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"{{modalId}}\" class=\"c-modal\">\n    <div class=\"c-modal__wrapper\">\n\n      <div class=\"c-modal__body\">\n          <div class=\"c-modal__title align-center\">\n              <h3 class=\"uppercase\">{{ 'SUCCESS.Success' | translate }}</h3>\n              <div [ngSwitch]=\"successType\">\n                <p *ngSwitchCase=\"'register'\">{{ 'SUCCESS.SuccessfullyCreated' | translate }}</p>\n                <p *ngSwitchCase=\"'changePassword'\">{{ 'SUCCESS.ModifiedPassword' | translate }}</p>\n              </div>\n          </div>\n      </div>\n      <div class=\"c-modal__footer\">\n\n        <div [ngSwitch]=\"successType\">\n          <button *ngSwitchCase=\"'register'\" type=\"button\" (click)=\"onOk()\" class=\"c-form__submit o-button o-button--success\">\n              {{ 'SUCCESS.PlayNow' | translate }}\n          </button>\n          <button *ngSwitchCase=\"'changePassword'\" type=\"button\" (click)=\"onOkChwd()\" class=\"c-form__submit o-button o-button--success\">\n              {{ 'SUCCESS.LoginNow' | translate }}\n          </button>\n        </div>\n\n      </div>\n\n    </div>\n</div>"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div id=\"{{modalId}}\" class=\"c-modal\">\n  <div class=\"c-modal__wrapper\">\n    <button type=\"button\" class=\"c-modal__close\" aria-label=\"Close\" (click)=\"onCancel()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n      <div class=\"loader align-center\" *ngIf=\"!profile\">\n          <div class=\"spinner\"></div>\n          <div>{{ 'Loading...' }}</div>\n      </div>\n\n      <form *ngIf=\"profile\" name=\"emailVerification\" #emailVerification=\"ngForm\" class=\"c-form\">\n        <div class=\"c-modal__body\">\n            <div class=\"c-modal__title align-center\">\n                <h3>Verify / Change Email Account</h3>\n                <p>This step is necessary to verify your identity. Follow the instruction below.</p>\n            </div>\n\n            <div *ngIf=\"success && !valid\" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n                <div *ngFor=\"let error of dataError.Errors\">\n                    <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                </div>\n            </div>\n\n            <div *ngIf=\"submitted && valid && verifyEmailto\" class=\"c-alert c-alert--inline\">\n                <i class=\"icon icon-info-circled\"></i>Verification code has been sent to your Email Address.\n            </div>\n\n            <div class=\"c-form__group\">\n                <label class=\"c-form__label invisible\">{{ 'PROFILE.EmailAddress' | translate }}</label>\n                <input type=\"email\" class=\"c-form__input\" id=\"emailAddress\" required [(ngModel)]=\"profile.Email\" name=\"Email\" placeholder=\"Email Address\"\n                #Email=\"ngModel\">\n            </div>\n\n            <div class=\"c-form__group\">\n                <label class=\"c-form__label invisible\"> Code </label>\n                <input type=\"text\" class=\"c-form__input\" id=\"code\" [(ngModel)]=\"profile.EmailResetCode\" name=\"EmailResetCode\" placeholder=\"Code\"\n                #EmailResetCode=\"ngModel\" minlength=\"6\" maxlength=\"6\" onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n            </div>\n\n            <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                <span><i class=\"icon icon-angle-up\"></i></span>\n            </div>\n            <div *ngIf=\"!hasSend\" class=\"c-form__group\">\n                <button type=\"submit\" (click)=\"verifyEmail(profile)\" class=\"o-button o-button--action o-button--med\">\n                    <span *ngIf=\"!submitting\">GET CODE</span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                </button>\n            </div>\n            <div *ngIf=\"hasSend\" class=\"c-form__group\">\n                <button type=\"submit\" (click)=\"verifyEmail(profile)\" class=\"o-button o-button--action o-button--med\">\n                    <span *ngIf=\"!submitting\">RESEND CODE</span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                </button>\n            </div>\n        </div>\n        <div class=\"c-modal__footer\">\n            <button id=\"goBack\" type=\"submit\" (click)=\"resetEmail(profile)\" class=\"c-form__submit o-button\" [class.o-button--action]=\"hasSend\">\n                <span *ngIf=\"!submittingResend\">SUBMIT</span>\n                <span *ngIf=\"submittingResend\" class=\"spinner-bar\"></span>\n            </button>\n        </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<div class=\"c-carousel c-carousel--multi grid\" *ngIf=\"games\">\n    <div class=\"row js-carousel\">\n        <!--<slick-slider>-->\n            <div *ngFor=\"let game of games | slice:0:6\" class=\"c-carousel__item col col--xs-4 col--lg-2\">\n                <div class=\"c-block c-block--game\" [ngStyle]=\"{'background-image': 'url(' + game.thumb_image.src + ')'}\">  \n                    <a (click)=\"loadiframe(game.game_platform_code, game.game_code)\" class=\"o-button o-button--action o-button--med\">\n                        {{ 'LANDINGPAGE.PlayNow' | translate }}\n                    </a>\n                </div>\n                <!--<p> {{ game.game_platform }} {{ game.title}}</p>    -->\n            </div>\n        <!--</slick-slider>-->\n\n        <!--<owl-carousel\n            [options]=\"{dots: false, navigation: true}\"\n            [items]=\"games\"\n            [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">-->                    \n        <!--</owl-carousel>-->\n    </div>\n</div>"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div id=\"{{modalId}}\" class=\"c-modal\">\n    <div class=\"c-modal__wrapper\">\n\n        <button type=\"button\" class=\"c-modal__close\" aria-label=\"Close\" (click)=\"onCancel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n\n        <form name=\"resetPassword\" autocomplete=\"off\" novalidate (ngSubmit)=\"onSubmit()\" #ResetPasswordForm=\"ngForm\"\n              class=\"c-form\">\n            <div class=\"c-modal__body\">\n                <div class=\"c-modal__title align-center\">\n                    <h3>Quick Security Check</h3>\n                    <p>Please provide necessary information to continue.</p>\n                </div>\n                <!--<div *ngIf=\"errorMessage\">-->\n                <!--<pre>-->\n                <!--{{ errorMessage | json }} -->\n                <!--{{ successMessage | json }}-->\n\n                <!--</pre>-->\n                <!--</div>-->\n\n                <div *ngIf=\"successMessage && !valid\" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n                    <div *ngFor=\"let error of dataError.Errors\">\n                        <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                    </div>\n                    <!--{{ dataError.Errors | json }}-->\n                </div>\n                <div class=\"c-form__group\">\n                    <label for=\"ResetCode\" class=\"c-form__label invisible\">Send Code</label>\n                    <div class=\"row\">\n                        <div class=\"col col--xs-7\">\n                            <input type=\"text\" class=\"c-form__input\" id=\"resetCode\"\n                                   [(ngModel)]=\"resetPassword.ResetCode\"\n                                   name=\"resetCode\" placeholder=\"Reset Code\"\n                                   #resetCode=\"ngModel\" minlength=\"6\" maxlength=\"6\">\n                        </div>\n                        <div class=\"col col--xs-5\">\n                            <button type=\"button\" (click)=\"sendResetCode(forgotPassword)\"\n                                    class=\"o-button o-button--action o-button--med\">\n                                <span *ngIf=\"!submittingResend\">Resend Code</span>\n                                <span *ngIf=\"submittingResend\" class=\"spinner-bar\"></span>\n                            </button>\n                        </div>\n                        <!--<div [hidden]=\"resetCode.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">-->\n                            <!--Reset Code is required-->\n                        <!--</div>-->\n\n                    </div>\n                </div>\n                <div class=\"c-form__group\">\n                    <label for=\"Password\" class=\"c-form__label invisible\">Password</label>\n                    <input type=\"password\" class=\"c-form__input\" id=\"password\"\n                           required [(ngModel)]=\"resetPassword.Password\"\n                           #password=\"ngModel\"\n                           name=\"password\" placeholder=\"Password\" minlength=\"6\" maxlength=\"30\">\n                    <div [hidden]=\"password.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        Password is required\n                    </div>\n                    <!--<div [hidden]=\"!password.errors.minlength\" *ngIf=\"submitted\">-->\n                        <!--Name must be at least 6 characters long.-->\n                    <!--</div>-->\n                </div>\n                <div class=\"c-form__group\">\n                    <label for=\"ConfirmPassword\" class=\"c-form__label invisible\">Confirm Password</label>\n                    <input type=\"password\" class=\"c-form__input\" id=\"confirmPassword\" required\n                           [(ngModel)]=\"resetPassword.ConfirmPassword\" name=\"confirmPassword\"\n                           placeholder=\"Confirm Password\" #confirmPassword=\"ngModel\" minlength=\"6\" maxlength=\"30\">\n                    <div [hidden]=\"confirmPassword.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        Confirm Password is required\n                    </div>\n                    <!--<div [hidden]=\"!confirmPassword.errors.minlength\" *ngIf=\"submitted\">-->\n                        <!--Name must be at least 6 characters long.-->\n                    <!--</div>-->\n                    <div *ngIf=\"submitted\">\n                        <span *ngIf=\"resetPassword.Password != resetPassword.ConfirmPassword\"\n                              class=\"alert alert-danger\">\n                        Password did not match\n                    </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"c-modal__footer\">\n                <button (click)=\"onSubmit(resetPassword)\" type=\"submit\"\n                        [disabled]=\"ResetPasswordForm.invalid\" class=\"c-form__submit o-button o-button--action\">\n                    <span *ngIf=\"!submitting\"> Submit </span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                </button>\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<div id=\"{{modalId}}\" class=\"c-modal\">\n    <div class=\"c-modal__wrapper\">\n\n        <button type=\"button\" class=\"c-modal__close\" aria-label=\"Close\" (click)=\"onCancel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <form autocomplete=\"off\" novalidate name=\"resetPassword\" #ForgotPasswordForm=\"ngForm\" class=\"c-form\">\n            <div class=\"c-modal__body\">\n                <div class=\"c-modal__title align-center\">\n                    <h3>{{ 'FORGOTPASSWORD.Header' | translate }}</h3>\n                    <p>{{ 'FORGOTPASSWORD.Info' | translate }}</p>\n                </div>\n                <div *ngIf=\"success && !valid\" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n                    <div *ngFor=\"let error of dataError.Errors\">\n                        <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                    </div>\n                    <!--{{ dataError.Errors | json }}-->\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"username\">\n                        <span>{{ 'FORGOTPASSWORD.Username' | translate }}</span>\n                    </label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"username\"\n                           required\n                        [(ngModel)]=\"forgotPassword.UserName\" #username=\"ngModel\" \n                        name=\"username\" placeholder=\"{{ 'FORGOTPASSWORD.Username' | translate }}\">\n                    <div [hidden]=\"username.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'FORGOTPASSWORD.ErrorUsername' | translate }}\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"emailAddress\">\n                        <span>{{ 'FORGOTPASSWORD.Email' | translate }}</span>\n                    </label>\n                    <input type=\"email\" class=\"c-form__input\" id=\"emailAddress\"\n                           required\n                        [(ngModel)]=\"forgotPassword.Email\" #emailAddress=\"ngModel\" \n                        name=\"emailAddress\" placeholder=\"{{ 'FORGOTPASSWORD.Email' | translate }}\" >\n                    <div [hidden]=\"emailAddress.valid\"  *ngIf=\"emailAddress.errors?.email || submitted\"\n                         class=\"alert alert-danger\">\n                        {{ 'FORGOTPASSWORD.ErrorEmail' | translate }}\n                    </div>\n                </div>\n                <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                    <span>{{ 'FORGOTPASSWORD.Or' | translate }}</span>\n                </div>\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"mobileCode\">\n                        <span>{{ 'Mobile Number' | translate }}</span>\n                    </label>\n                    <div class=\"c-form__input-group\">\n                        <div class=\"c-form__input-group-add\">\n                            <div class=\"c-form__select__wrapper\">\n                                <select class=\"c-form__input c-form__select\" id=\"mobileCode\"\n                                    [(ngModel)]=\"forgotPassword.MobileCountryCode\" name=\"mobileCode\" #mobileCode=\"ngModel\">\n                                    <option disabled value=\"0\">{{ 'FORGOTPASSWORD.CountryCode' | translate }}</option>\n                                    <option *ngFor=\"let country of countries\" [ngValue]=\"country.CountryCallCode\">\n                                            {{ country.CountryCallCode }}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"c-form__input\" id=\"mobileNumber\"\n                            [(ngModel)]=\"forgotPassword.MobileNo\" #mobileNumber=\"ngModel\" \n                            name=\"mobileNumber\" placeholder=\"{{ 'FORGOTPASSWORD.MobileNumber' | translate }}\"\n                            minlength=\"10\" maxlength=\"10\"\n                            onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\"/>\n                    </div>\n                    <!--<div [hidden]=\"mobileNumber.valid\"  *ngIf=\"submitted\" class=\"alert alert-danger\">-->\n                        <!--<span *ngIf=\"!submitting\">{{ 'FORGOTPASSWORD.ErrorMobile' | translate }}</span>-->\n                        <!--<span *ngIf=\"submitting\" class=\"spinner-bar\"></span>-->\n                    <!--</div>-->\n                </div>\n            </div>\n            <div class=\"c-modal__footer\">\n                <button (click)=\"onSubmit(forgotPassword)\" type=\"submit\" class=\"c-form__submit o-button o-button--action\">\n                    <span *ngIf=\"!submitting\">{{ 'FORGOTPASSWORD.Submit' | translate }}</span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n\n                </button>\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!games\"> \n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"c-panel\" *ngIf=\"games\">\n    <div class=\"c-panel__header\">            \n        <div class=\"c-panel__title\">\n            <span>{{ 'FILTERATION.Games' | translate }}</span>\n        </div>            \n        <div class=\"c-panel__utils\">\n            <ul class=\"o-sorter\">\n                <li><a (click)=\"getActivePlatform('')\">{{ 'FILTERATION.All' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('GD')\">{{ 'FILTERATION.GD' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('TGP')\">{{ 'FILTERATION.TGP' | translate }}</a></li>\n                <!--<li><a (click)=\"getActivePlatform('HG')\">{{ 'FILTERATION.HG' | translate }}</a></li>-->\n                <li><a (click)=\"getActivePlatform('PT')\">{{ 'FILTERATION.PT' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('AG')\">{{ 'FILTERATION.AG' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('Betsoft')\">{{ 'FILTERATION.BETSOFT' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('MG')\">{{ 'FILTERATION.MG' | translate }}</a></li>\n                <li><a (click)=\"getActivePlatform('TTG')\">{{ 'FILTERATION.TTG' | translate }}</a></li>\n            </ul>\n            <div class=\"o-search\">\n                <div class=\"o-search__wrapper\">\n                    <i class=\"icon icon-search float-right\"></i>\n                    <input type=\"text\" [(ngModel)]=\"filter.title\" placeholder=\"{{ 'FILTERATION.Search' | translate }}\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"c-panel__body\">\n        <div id=\"scrollable\" class=\"c-panel__body__wrapper\" autoheight>    \n            <div class=\"c-panel__list c-list row\">\n                <div *ngFor=\"let game of games | gameFilter: filter\" class=\"col col--md-3 col--lg-2\">\n                    <div class=\"c-block c-block--game\" [ngStyle]=\"{'background-image': 'url(' + game.thumb_image.src + ')'}\">\n                        <!--<div class=\"c-block__text\">\n                            <p>{{ game.id }}</p>\n                            <p>{{ game.game_platform }} {{ game.title}}</p>\n                        </div>-->\n                        <a (click)=\"loadiframe(game.game_platform_code, game.game_code)\" class=\"o-button o-button--action o-button--med\">\n                            {{ 'FILTERATION.PlayNow' | translate }}\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div class=\"g-grid g-gap g-rowrepeat-3s\">\n\n    <div id=\"homeFeaturedBanners\" class=\"grid \">\n        <div class=\"row\">\n            <div class=\"col col--xs-6\">\n                <div class=\"c-panel c-panel--carousel\">\n                    <!--<div class=\"c-carousel c-carousel--single\">\n                        <div class=\"c-block c-block--banner\">\n                            <div class=\"c-block__content\">\n                                <h1>{{ 'LANDINGPAGE.SportsBook' | translate }}</h1>\n                                <h3>{{ 'LANDINGPAGE.StayInTheGame' | translate }}</h3>\n                                <a href=\"#\" class=\"o-button\">{{ 'LANDINGPAGE.BetNow' | translate }}</a>\n                            </div>\n                        </div>\n                    </div>-->\n                    <app-banner></app-banner>\n                </div>\n            </div>\n            <div class=\"col col--xs-6\">\n                <div class=\"c-block c-block--banner\" style=\"background-image: url('assets/images/main-deposit-banner.jpg')\">\n                    <div class=\"c-block__content\">\n                        <h1>{{ 'LANDINGPAGE.Header1' | translate }}</h1>\n                        <a [routerLink]=\"['/online-deposit']\" class=\"o-button o-button--action o-button--med\">{{ 'LANDINGPAGE.DepositNow' | translate }}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col col--xs-6\">\n                <div class=\"c-block c-block--banner\" style=\"background-image: url('assets/images/main-sports-book-banner.jpg')\">\n                    <div class=\"c-block__content\">\n                        <h1>{{ 'LANDINGPAGE.SportsBook' | translate }}</h1>\n                        <h3>{{ 'LANDINGPAGE.StayInTheGame' | translate }}</h3>\n                        <a [routerLink]=\"['/sports']\" class=\"o-button o-button--action o-button--med\">{{ 'LANDINGPAGE.BetNow' | translate }}</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col col--xs-6\">\n                <div class=\"c-panel c-panel--mini c-panel--carousel\" style=\"background-image: url('assets/images/main-livecasino-bg.png')\">\n                    <div class=\"c-panel__header\">\n                        <div class=\"c-panel__title\">\n                            <span>{{ 'LANDINGPAGE.LiveCasino' | translate }}</span>\n                        </div>\n                        <div class=\"c-panel__utils\">\n                            <div class=\"return-link\">\n                                <a [routerLink]=\"['/games/slots']\" [ngStyle]=\"{'color': '#f5f5f5'}\">{{ 'LANDINGPAGE.More' | translate }}</a>\n                                <i class=\"icon  icon-right-open\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"c-panel__body grid\">\n                        <div class=\"row\">\n                            <div *ngFor=\"let casino of casinos | slice:0:3\" class=\"col col--xs-4\">\n                                <div class=\"c-block c-block--game c-block--mini\" [ngStyle]=\"{'background-image': 'url(' + casino.thumb_image.src + ')'}\">\n                                    <div class=\"c-block__logo\">\n                                        <img src=\"{{ casino.logo.src }}\" alt=\"{{ casino.logo.alt }}\">\n                                    </div>\n                                    <a (click)=\"loadiframe(casino.game_platform_code, casino.game_code)\" class=\"o-button o-button--action\">{{ 'LANDINGPAGE.PlayNow' | translate }}</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"homeFeaturedGames\" class=\"grid\">\n        <div class=\"row\">\n            <div class=\"col col--xs-12\">\n                <div class=\"c-panel c-panel--mini c-panel--carousel\">\n                    <div class=\"c-panel__header\">            \n                        <div class=\"c-panel__title\">\n                            <span>{{ 'LANDINGPAGE.FeaturedSlotGames' | translate }}</span>\n                        </div>            \n                        <div class=\"c-panel__utils\">\n                            <div class=\"return-link\">\n                                <a href=\"javascript:void();\" [routerLink]=\"['/games/slots']\">{{ 'LANDINGPAGE.MoreGames' | translate }}</a>\n                                <i class=\"icon  icon-right-open\"></i>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"c-panel__body\">\n                        <app-featured-games></app-featured-games>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div> \n"

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
        this.urlGetCountries = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PandoraCommon/GetCountries'; // This is the API Endpoint for getting the list of Countries
    }
    /**
     * @returns {Observable<Countries[]>}
     * GET Security Question
     */
    CountryService.prototype.getCountries = function () {
        return this.http
            .get(this.urlGetCountries, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    CountryService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (body.Data == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData;
        }
        return rejectMsg;
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body reponse
     */
    CountryService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    CountryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CountryService);
    return CountryService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/country.service.js.map

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<!--<footer class=\"l-footer\">-->\n  <div class=\"l-footer__top\">\n    <ul class=\"c-footer-links list--unstyled\">\n      <li>\n        <a href=\"http://orange88.com/{{lang}}/about-us\" target=\"_blank\" title=\"{{ 'FOOTER.AboutOrange88' | translate }}\">{{ 'FOOTER.AboutOrange88' | translate }}</a>\n      </li>\n      <li>\n        <a href=\"http://orange88.com/{{lang}}/privacy-policy\" target=\"_blank\" title=\"{{ 'FOOTER.Privacy' | translate }}\">{{ 'FOOTER.Privacy' | translate }}</a>\n      </li>\n      <li>\n        <a href=\"http://orange88.com/{{lang}}/terms-and-conditions\" target=\"_blank\" title=\"{{ 'FOOTER.Terms' | translate }}\">{{ 'FOOTER.Terms' | translate }}</a>\n      </li>\n      <li>\n        <a href=\"http://orange88.com/index.php/{{lang}}/faq\" target=\"_blank\" title=\"{{ 'FOOTER.Help' | translate }}\">{{ 'FOOTER.Help' | translate }}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"l-footer__bottom\">\n    <div>{{ 'FOOTER.Copyright' | translate }}</div>\n  </div>\n<!--</footer>-->"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"o-logo\">\n        <a routerLink=\"/home\" title=\"{{ 'HEADER.Home' | translate }}\">\n            <img src=\"assets/images/logo-en.png\" alt=\"logo\">\n        </a>\n    </div>\n\n    <div class=\"c-utilities\">\n        <div class=\"c-overview-user\">\n            <div class=\"c-overview-name\">\n                <i class=\"icon icon-user\"></i>\n                <a [routerLink]=\"['/profile']\"><span>{{userDetails.username}}</span></a>\n            </div>\n            <div class=\"o-divider o-divider--vertical\">&nbsp;</div>\n            <div class=\"c-overview-balance\">\n                <i class=\"icon icon-database\"></i>\n                <span *ngIf=\"!balance\">{{ currentBal | number : '1.2-2' }}</span>\n                <span *ngIf=\"balance\">{{ balance | number : '1.2-2' }}</span>\n            </div>\n        </div>\n        <div class=\"c-date\">\n            {{ userDetails.date | date:'EEEE, MMM, d, y, h:m' }}\n        </div>\n        <div class=\"o-divider o-divider--vertical\">&nbsp;</div>\n        <div class=\"c-controls\">\n            <button (click)=\"logout()\">\n                <i class=\"icon icon-logout\"></i>\n                <span>{{ 'HEADER.Logout' | translate }}</span>\n            </button>\n            <div>\n                <div class=\"o-dropselect align-center\" [ngClass]=\"!showWindowOptns ? 'is-close' : 'is-open'\">\n                    <button class=\"o-dropselect__toggler\" (click)=\"toggleWindowOptns()\">\n                        <i class=\"icon icon-ellipsis-vert\"></i>\n                        <span>{{ 'HEADER.More' | translate }}</span>\n                    </button>\n                    <ul class=\"o-dropselect__options\">\n                        <li id=\"minWwindow\"><i class=\"icon icon-window-minimize\"></i></li>\n                        <li id=\"maxWindow\"><i class=\"icon icon-window-maximize\"></i></li>\n                        <li id=\"closeWindow\"><i class=\"icon icon-cancel\"></i></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    "

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" class=\"c-access c-login center-absolute\">\n\n    <div class=\"o-logo\">\n        <a href=\"/\" title=\"Orange88\">\n            <img src=\"assets/images/logo-en.png\" alt=\"logo\">\n        </a>\n    </div>\n\n    <div *ngIf=\"!submitted && !valid \" >\n        <div *ngFor=\"let error of dataError\" class=\"c-alert c-alert--inline\">\n            <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n        </div>\n    </div>\n\n    <form class=\"c-form\" autocomplete=\"off\" novalidate name=\"login\" #LoginForm=\"ngForm\">\n        <div class=\"c-form__group\">\n            <label class=\"c-form__label invisible\" for=\"Username\">>\n                <span>{{ 'LOGIN.Username' | translate }}</span>\n            </label>\n            <input type=\"text\" class=\"c-form__input c-login__user\" name=\"username\" value=\"\" placeholder=\" {{ 'LOGIN.Username' | translate }}\" id=\"username\"\n                    required\n                    [(ngModel)]=\"login.UserName\"\n                    #username=\"ngModel\"\n                   minlength=\"5\" maxlength=\"30\">\n            <div [hidden]=\"username.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                {{ 'LOGIN.ErrorUsername' | translate }}\n            </div>\n        </div>\n        <div class=\"c-form__group\">\n            <label for=\"password\" class=\"c-form__label invisible\">\n                <span>{{ 'LOGIN.Password' | translate }}</span>\n            </label>\n            <input type=\"password\" class=\"c-form__input c-login__password\" name=\"password\" value=\"\" placeholder=\"{{ 'LOGIN.Password' | translate }}\" id=\"password\"\n                    required\n                    [(ngModel)]=\"login.Password\"\n                    #password=\"ngModel\"\n                    minlength=\"6\" maxlength=\"30\">\n            <div [hidden]=\"password.valid\" *ngIf=\"submitted\"\n                 class=\"alert alert-danger\">\n                {{ 'LOGIN.ErrorPassword' | translate }}\n            </div>\n        </div>\n        <div class=\"c-form__group padding-horizontal\">\n            <div class=\"c-form__control c-form__control--checkbox\">\n                <label class=\"c-form__label\">\n                    {{ 'LOGIN.RememberUsername' | translate }}\n                    <input type=\"checkbox\" name=\"rememberme\" [(ngModel)]=\"login.RememberMe\">\n                    <div class=\"c-form__control-pseudo\"></div>\n                </label>\n            </div>\n            <div (click)=\"openModalForgotPassword()\" title=\"Forgot Password\" class=\"float-right\">{{ 'LOGIN.ForgotPassword' | translate }}</div>\n        </div>\n        <div class=\"c-form__group\">\n            <button type=\"submit\" class=\"c-form__submit o-button o-button--action o-button--full\" (click)=\"loginUser(login)\" [disabled]=\"LoginForm.invalid\">\n                <span *ngIf=\"!submitting\">{{ 'LOGIN.Submit' | translate }}</span>\n                <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n            </button>\n        </div>\n    </form>\n\n    <div class=\"c-access__cta align-center\">\n        <p (click)=\"openModalRegistration()\">{{ 'LOGIN.NewUser' | translate }} <span>{{ 'LOGIN.SignUp' | translate }}</span></p>\n    </div>\n\n    <div language-selector></div>\n\n</div>\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<div id=\"{{modalId}}\" class=\"c-modal\">\n  <div class=\"c-modal__wrapper\">\n\n    <button type=\"button\" class=\"c-modal__close\" aria-label=\"Close\" (click)=\"onCancel()\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n      <div class=\"loader align-center\" *ngIf=\"!profile\">\n          <div class=\"spinner\"></div>\n          <div>{{ 'Loading...' }}</div>\n      </div>\n\n    <form *ngIf=\"profile\" name=\"mobileVerification\" #mobileVerification=\"ngForm\" class=\"c-form\">\n      <div class=\"c-modal__body\">\n        <div class=\"c-modal__title align-center\">\n          <h3>Verify / Change Mobile Account</h3>\n          <p>This step is necessary to verify your identity. Follow the instruction below.</p>\n        </div>\n\n          <div *ngIf=\"success && !valid\" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n              <div *ngFor=\"let error of dataError.Errors\">\n                  <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n              </div>\n          </div>\n\n        <div *ngIf=\"submitted && valid && verifyMobileto\" class=\"c-alert c-alert--inline\">\n          <i class=\"icon icon-info-circled\"></i>Verification code has been sent to your Mobile.\n        </div>\n\n        <div class=\"c-form__group\">\n          <label class=\"c-form__label invisible\" for=\"countryCode\">\n                <span>{{ 'Mobile Number' | translate }}</span>\n            </label>\n          <div class=\"c-form__input-group\">\n            <div class=\"c-form__input-group-add\">\n              <div class=\"c-form__select__wrapper\">\n                <select class=\"c-form__input c-form__select\" id=\"countryCode\" #countryCode=\"ngModel\" name=\"countryCode\" [(ngModel)]=\"profile.MobileCountryCodeNumber\">\n                                <option disabled value=\"0\">{{ 'PROFILE.ChooseYourMobileCountryCode' | translate }}</option>\n                                <option *ngFor=\"let country of countries\" [ngValue]=\"country.CountryCallCode\">\n                                    {{ country.CountryCallCode }}\n                                </option>\n                            </select>\n              </div>\n            </div>\n            <input type=\"text\" class=\"c-form__input\" id=\"mobile-number\" required [(ngModel)]=\"profile.MobileNumber\" name=\"mobileNumber\"\n              placeholder=\"{{ 'PROFILE.MobileNumber' | translate }}\" #mobileNumber=\"ngModel\" minlength=\"10\" maxlength=\"10\"\n              onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n          </div>\n          <div [hidden]=\"mobileNumber.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n            {{ 'PROFILE.ErrorMobile' | translate }}\n          </div>\n        </div>\n\n        <div class=\"c-form__group\">\n          <label class=\"c-form__label invisible\"> Code </label>\n          <input type=\"text\" class=\"c-form__input\" id=\"code\" [(ngModel)]=\"profile.MobileResetCode\" name=\"MobileResetCode\" placeholder=\"Code\"\n            #MobileResetCode=\"ngModel\" minlength=\"6\" maxlength=\"6\" onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n        </div>\n        <div role=\"separator\" class=\"c-form__group c-form__divider\">\n            <span><i class=\"icon icon-angle-up\"></i></span>\n        </div>\n        <div *ngIf=\"!hasSend\" class=\"c-form__group\">\n          <button type=\"submit\" (click)=\"verifyMobile(profile)\" class=\"o-button o-button--action o-button--med\">\n              <span *ngIf=\"!submitting\">GET CODE</span>\n              <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n            </button>\n        </div>\n        <div *ngIf=\"hasSend\" class=\"c-form__group\">\n          <button type=\"submit\" (click)=\"verifyMobile(profile)\" class=\"o-button o-button--action o-button--med\">\n              <span *ngIf=\"!submitting\">RESEND CODE</span>\n              <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n        </button>\n        </div>\n      </div>\n      <div class=\"c-modal__footer\">\n        <button id=\"goBack\" type=\"submit\" (click)=\"resetMobile(profile)\" class=\"c-form__submit o-button\" [class.o-button--action]=\"hasSend\">\n            <span *ngIf=\"!submittingResend\">SUBMIT</span>\n            <span *ngIf=\"submittingResend\" class=\"spinner-bar\"></span>\n            </button>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<pre>\n     {{ errorMessage | json}} {{successMessage | json}}\n</pre>\n\n<div class=\"container\">\n    <h1>Online Deposit Bank Form</h1>\n    <form autocomplete=\"off\" novalidate name=\"onlineDepositBank\" #OnlineDepositBankForm=\"ngForm\">\n        <section *ngIf=\"onlineDepositBanks\">\n            <div class=\"form-group\">\n                <label for=\"OnlineDepositBank\">OnlineDepositBank</label>\n                <select name=\"onlineDepositBank\" [(ngModel)]=\"onlineDepositBanks.Id\">\n                    <option value=\"\" disabled>Choose your Online Deposit Bank</option>\n                    <option *ngFor=\"let onlineDepositBank of onlineDepositBanks\" [ngValue]=\"onlineDepositBank.Id\">\n                        {{ onlineDepositBank.BankNameEn }}\n                    </option>\n                </select>\n            </div>\n        </section>\n    </form>\n</div>\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!onlineDepositBanks\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div *ngIf=\"submitted && valid\" class=\"c-alert hidden\" style=\"display: block\">\n    <div class=\"c-alert__wrapper align-center\">\n        <h4 class=\"c-alert__title\">\n            <i class=\"icon icon-info-circled\"></i> {{ 'ONLINEDEPOSIT.ConfirmDepositAmount' | translate }}\n        </h4>\n        <p class=\"c-alert__desc uppercase\" style=\"font-size: 1.2rem\">{{ 'ONLINEDEPOSIT.DepositAmount' | translate }}: <strong>{{ onlineDeposit.Amount\n            }}</strong></p>\n        <div>\n            <a (click)=\"proceedLink(success.url)\" target=\"_blank\" class=\"o-button o-button--success\">{{ 'ONLINEDEPOSIT.Proceed' | translate }}</a>\n            <button (click)=\"onCancel()\" class=\"o-button o-button--action\">{{ 'ONLINEDEPOSIT.Cancel' | translate }}</button>\n        </div>\n    </div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"onlineDepositBanks\" [ngClass]=\"submitted ? 'is-temporary-disabled' : ''\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n                <h2 class=\"c-article__title\">{{ 'ONLINEDEPOSIT.OnlineDeposit' | translate }}</h2>\n                <p class=\"c-article__desc\">{{ 'ONLINEDEPOSIT.OnlineDepositIsAnOnline' | translate }}</p>\n            </div>\n            <div *ngIf=\"success && !valid \" class=\"c-alert c-alert--inline\">\n                <div *ngFor=\"let error of dataError\">\n                    <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                </div>\n            </div>\n\n            <div class=\"c-alert c-alert--inline\">\n                <i class=\"icon icon-info-circled\"></i>{{ 'ONLINEDEPOSIT.MinimumAndMaximumDeposit' | translate }}\n            </div>\n\n            <form name=\"onlineDeposit\" autocomplete=\"off\" novalidate #OnlineDepositBankForm=\"ngForm\" class=\"c-form\">\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\">{{ 'ONLINEDEPOSIT.OnlineDepositBank' | translate }}</label>\n                    <div class=\"c-form__select__wrapper\">\n                        <select class=\"c-form__input c-form__select\" id=\"onlineDepositBank\" name=\"onlineDepositBank\"\n                                [(ngModel)]=\"onlineDeposit.BankId\" #onlineDepositBank=\"ngModel\"\n                                required>\n                            <option value=\"\" disabled>{{ 'ONLINEDEPOSIT.ChooseYourOnlineDepositBank' | translate }}</option>\n                            <option *ngFor=\"let onlineDepositBank of onlineDepositBanks\"\n                                    [ngValue]=\"onlineDepositBank.Id\">\n                                {{ onlineDepositBank.BankNameEn }}\n                            </option>\n                        </select>\n                    </div>\n                    <div [hidden]=\"onlineDepositBank.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'ONLINEDEPOSIT.ErrorOnlineDepositBank' | translate }}\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"depositAmount\">{{ 'ONLINEDEPOSIT.DepositAmount' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"depositAmount\"\n                           name=\"depositAmount\"\n                           required\n                           [(ngModel)]=\"onlineDeposit.Amount\"\n                           name=\"depositAmount\"\n                           placeholder=\"{{ 'ONLINEDEPOSIT.DepositAmount' | translate }}\" #depositAmount=\"ngModel\"\n                           onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n                    <div [hidden]=\"depositAmount.valid\"  *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'ONLINEDEPOSIT.ErrorOnlineDepositAmount' | translate }}\n\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\">{{ 'ONLINEDEPOSIT.Bonus' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"bonusCode\"\n                           [(ngModel)]=\"onlineDeposit.BonusCode\" name=\"bonusCode\"\n                           placeholder=\"{{ 'ONLINEDEPOSIT.Bonus' | translate }}\" #bonusCode=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                    <button type=\"submit\" (click)=\"depositBank(onlineDeposit)\" class=\"o-button o-button--action\">\n                        <span *ngIf=\"!submitting\">{{ 'ONLINEDEPOSIT.Deposit' | translate }}</span>\n                        <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                    </button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!profile\">\n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"profile\">\n   \n  <div class=\"c-article__header\">\n    <div *ngIf=\"successMessage\">\n      <div class=\"c-alert c-alert--inline\">\n        <i class=\"icon icon-info-circled\"></i> {{ successMessage | json }}\n      </div>\n    </div>\n\n    <h2 class=\"c-article__title\">{{ 'PROFILE.Profile' | translate }}</h2>\n    <p class=\"c-article__desc\">{{ 'PROFILE.ManageProfile' | translate }}</p>\n  </div>\n  <div class=\"c-alert c-alert--inline\">\n    <i class=\"icon icon-info-circled\"></i> {{ 'PROFILE.PleaseComplete' | translate }}\n    <!--<a [routerLink]=\"['/email-verification']\" class=\"o-button o-button--action o-button--tiny\"> <span *ngIf=\"!profile.IsMobileVerified\">Verify Email </span> <span *ngIf=\"profile.IsMobileVerified\">{{ 'PROFILE.ChangeEmail' | translate }}</span>      </a>\n    <a [routerLink]=\"['/mobile-verification']\" class=\"o-button o-button--action o-button--tiny\"> <span *ngIf=\"!profile.IsMobileVerified\">Verify Mobile </span> <span *ngIf=\"profile.IsMobileVerified\">{{ 'PROFILE.Change Mobile' | translate }}</span></a>-->\n  </div>\n  <div *ngIf=\"!profile.PlayerBankAccounts\" class=\"c-alert c-alert--inline\">\n    <i class=\"icon icon-info-circled\"></i>{{ 'PROFILE.YouNeedToHave' | translate }}\n    <a class=\"o-button o-button--action o-button--tiny\" [routerLink]=\"['/bank-add']\">{{ 'PROFILE.Create' | translate }}</a>\n  </div>\n  <div>\n    <form name=\"profile\" autocomplete=\"off\" novalidate #ProfileForm=\"ngForm\" class=\"c-form\">\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"fullname\">{{ 'PROFILE.Fullname' | translate }}</label>\n        <input type=\"text\" class=\"c-form__input\" id=\"fullname\" required name=\"fullname\" [(ngModel)]=\"profile.FullName\" [value]=\"profile.FullName\"\n          placeholder=\"* {{ 'PROFILE.Fullname' | translate }}\" #fullname=\"ngModel\">\n        <div [hidden]=\"fullname.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorFullName' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"birthdate\">{{ 'PROFILE.BirthDate' | translate }}</label>\n        <my-date-picker name=\"birthdate\" [options]=\"myDatePickerOptions\" [(ngModel)]=\"profile.BirthDate\" required class=\"c-form__input\"\n          placeholder=\"{{ 'PROFILE.BirthDate' | translate }}\" #birthdate=\"ngModel\" (dateChanged)=\"onDateChanged($event)\" [selDate]=\"dateGet\">\n\n        </my-date-picker>\n\n        <div [hidden]=\"birthdate.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorBirthDate' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\">{{ 'PROFILE.EmailAddress' | translate }}</label>\n        <div class=\"row\">\n          <div class=\"col col--xs-10\">\n            <input type=\"email\" class=\"c-form__input\" id=\"emailAddress\" required [(ngModel)]=\"profile.Email\" name=\"emailAddress\" placeholder=\"{{ 'PROFILE.EmailAddress' | translate }}\"\n              #emailAddress=\"ngModel\" [value]=\"profile.Email\">\n          </div>\n          <div class=\"col col--xs\">\n            <button (click)=\"openModalVerifyEmail()\" class=\"o-button o-button--action o-button--tiny o-button--full\"> \n                <span *ngIf=\"!profile.IsMobileVerified\">Verify Email </span> \n                <span *ngIf=\"profile.IsMobileVerified\">{{ 'PROFILE.ChangeEmail' | translate }}</span>\n            </button>\n          </div>\n        </div>\n\n        <div [hidden]=\"emailAddress.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorEmail' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"countryCode\">\n            <span>{{ 'Mobile Number' | translate }}</span>\n        </label>\n        <div class=\"row\">\n            <div class=\"col col--xs-10\">            \n                <div class=\"c-form__input-group\">\n                <div class=\"c-form__input-group-add\">\n                    <div class=\"c-form__select__wrapper\">\n                    <select class=\"c-form__input c-form__select\" id=\"countryCode\" #countryCode=\"ngModel\" name=\"countryCode\" [(ngModel)]=\"profile.CountryCode\">\n                            <option disabled value=\"0\">{{ 'PROFILE.ChooseYourMobileCountryCode' | translate }}\n                            </option>\n                            <option *ngFor=\"let country of countries\" [ngValue]=\"country.CountryCallCode\">\n                                {{ country.CountryCallCode }}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <input type=\"text\" class=\"c-form__input\" id=\"mobile-number\" required [(ngModel)]=\"profile.MobileNumber\" name=\"mobileNumber\"\n                    placeholder=\"{{ 'PROFILE.MobileNumber' | translate }}\" #mobileNumber=\"ngModel\" minlength=\"10\" maxlength=\"10\" [value]=\"profile.MobileNumber\"\n                    onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n\n                </div>\n            </div>\n            <div class=\"col col--xs-2\">\n                <button (click)=\"openModalVerifyMobile()\" class=\"o-button o-button--action o-button--tiny o-button--full\">\n                    <span *ngIf=\"!profile.IsMobileVerified\">Verify Mobile </span> \n                    <span *ngIf=\"profile.IsMobileVerified\">{{ 'PROFILE.ChangeMobile' | translate }}</span>\n                </button>\n            </div>\n        </div>\n        <div [hidden]=\"mobileNumber.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorMobile' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"securityQuestion\">{{ 'PROFILE.SecurityQuestion' | translate }}</label>\n        <div class=\"c-form__select__wrapper\">\n          <select class=\"c-form__input c-form__select\" id=\"securityQuestion\" #securityQuestion=\"ngModel\" name=\"securityQuestion\" [(ngModel)]=\"profile.SecurityQuestionId1\">\n              <option disabled value=\"0\">{{ 'PROFILE.ChooseYourSecurityQuestion' | translate }}</option>\n              <option *ngFor=\"let securityQuestion of securityQuestionInfo\"\n                      [ngValue]=\"securityQuestion.Id\">\n                  {{ securityQuestion.SecurityQuestionDesc }}\n              </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\">{{ 'PROFILE.SecurityQuestionAnswer' | translate }}</label>\n        <input type=\"password\" class=\"c-form__input\" id=\"securityQuestionAnswer\" required [(ngModel)]=\"profile.SecurityQuestionAnswer1\"\n          name=\"securityQuestionAnswer\" placeholder=\"{{ 'PROFILE.SecurityQuestionAnswer' | translate }}\" #securityQuestionAnswer=\"ngModel\">\n        <div [hidden]=\"securityQuestionAnswer.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorSecurityQuestionAnswer' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"country\">{{ 'PROFILE.Country' | translate }}</label>\n        <div class=\"c-form__select__wrapper\">\n          <select class=\"c-form__input c-form__select\" id=\"country\" #country=\"ngModel\" name=\"country\" [(ngModel)]=\"profile.Country\">\n              <option disabled value=\"0\">{{ 'PROFILE.ChooseYourCountry' | translate }}</option>\n              <option *ngFor=\"let country of countries\"\n                      [ngValue]=\"country.CountryCode\">\n                  {{ country.CountryName }}\n              </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"stateProvince\">{{ 'PROFILE.StateProvince' | translate }}</label>\n        <div class=\"c-form__select__wrapper\">\n          <select class=\"c-form__input c-form__select\" name=\"stateProvince\" id=\"stateProvince\" #stateProvince=\"ngModel\" [(ngModel)]=\"profile.StateProvinceId\">\n              <option disabled value=\"0\">{{ 'PROFILE.ChooseYourStateProvince' | translate }}</option>\n              <option *ngFor=\"let stateProvince of stateProvinces\" [ngValue]=\"stateProvince.Id\">\n                  {{ stateProvince.StateProvinceName }}\n              </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\" for=\"city\">{{ 'PROFILE.City' | translate }}</label>\n        <input type=\"text\" class=\"c-form__input\" id=\"city\" required [(ngModel)]=\"profile.City\" name=\"city\" placeholder=\"{{ 'PROFILE.City' | translate }}\"\n          #city=\"ngModel\">\n        <div [hidden]=\"city.valid\" *ngIf=\"submitted\" class=\"alert alert-danger\">\n          {{ 'PROFILE.ErrorCity' | translate }}\n        </div>\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\">{{ 'PROFILE.WebChatUserName' | translate }}</label>\n        <input type=\"text\" class=\"c-form__input\" id=\"webChatUserName\" [(ngModel)]=\"profile.WebChatUserName\" name=\"webChatUserName\"\n          placeholder=\"{{ 'PROFILE.WechatId' | translate }}\" #webChatUserName=\"ngModel\">\n      </div>\n\n      <div class=\"c-form__group\">\n        <label class=\"c-form__label invisible\">{{ 'PROFILE.QQUserName' | translate }}</label>\n        <input type=\"text\" class=\"c-form__input\" id=\"qqUserName\" [(ngModel)]=\"profile.QQUserName\" name=\"qqUserName\" placeholder=\"{{ 'PROFILE.QQId' | translate }}\"\n          #qqUserName=\"ngModel\">\n      </div>\n\n      <div class=\"c-form__group\">\n        <button type=\"submit\" (click)=\"updateProfile(profile)\" class=\"c-form__submit o-button o-button--action\">\n            <span *ngIf=\"!submitting\">{{ 'PROFILE.Submit' | translate }}</span>\n            <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n        </button>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!promotionDetails\">\n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div id=\"promotionsDetailPage\" class=\"c-panel promo-detail\" *ngIf=\"promotionDetails\">\n\n    <div class=\"c-panel__header\">\n        <div class=\"c-panel__title\">\n          <span>{{ 'Promotions' }}</span>\n        </div>\n        <div class=\"c-panel__utils\">\n          <div class=\"return-link\">\n            <i class=\"icon  icon-left-open\"></i>\n            <a href=\"javascript:void();\" (click)=\"goBack()\">{{ 'Back' }}</a>\n          </div>\n        </div>\n    </div>\n    <div class=\"c-panel__body\" autoheight>\n      <div id=\"scrollable\" class=\"c-panel__body__wrapper\" autoheight>\n\n        <div *ngFor=\"let detail of promotionDetails\">\n            <div class=\"promo__title\">\n            <h3>{{ detail.title }}</h3>\n                <span>{{ detail.subtitle }}</span>\n            </div>\n            <div class=\"promo__body\" [innerHTML]=\"detail.body\"></div>\n        </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!promotions\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"g-grid g-gap g-rowrepeat-3s\">\n\n    <div class=\"g-row g-row-one-third\">\n        <div class=\"grid\">\n            <div class=\"row\">\n                <div class=\"col col--xs-6\">\n                    <div class=\"c-panel c-panel--carousel\">\n                        <app-banner></app-banner>\n                    </div>\n                </div>\n                <div class=\"col col--xs-6\">\n                    <div class=\"c-block c-block--banner\" style=\"background-image: url('assets/images/main-deposit-banner.jpg')\">\n                        <div class=\"c-block__content\">\n                            <h1>{{ 'PROMOTIONS.Header1' | translate }}</h1>\n                            <a [routerLink]=\"['/online-deposit']\" class=\"o-button o-button--action o-button--med\">{{ 'PROMOTIONS.DepositNow' | translate }}</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"g-row g-row-two-third\">\n        <div class=\"c-panel\" *ngIf=\"promotions\">\n            <div class=\"c-panel__header\">\n                <div class=\"c-panel__title\"><span>{{ 'PROMOTIONS.Promotions' | translate }}</span></div>\n                <div class=\"c-panel__utils\">\n                    <div class=\"o-search\">\n                        <div class=\"o-search__wrapper\">\n                            <i class=\"icon icon-search float-right\"></i>\n                            <input type=\"text\" [(ngModel)]=\"filter.title\" placeholder=\"{{ 'PROMOTIONS.Search' | translate }}\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"c-panel__body\" autoheight>\n                <div id=\"scrollable\" class=\"c-panel__body__wrapper\" autoheight>\n                    <ul class=\"c-panel__list c-list row\">\n                        <li *ngFor=\"let promotion of promotions  | gameFilter: filter\" class=\"col col--xs-4\">\n\n                            <div class=\"c-block c-block--promotion\">\n                                <div class=\"c-block__body\">\n                                    <div class=\"c-block__title\">\n                                        {{promotion.title}}\n                                    </div>\n                                    <div class=\"c-block__text\">\n                                        {{promotion.subtitle}}\n                                    </div>\n                                    <a routerLink=\"/details/{{promotion.category}}/{{promotion.id}}\"\n                                       class=\"c-block__link\">{{ 'PROMOTIONS.MoreInformation' | translate }}</a>\n                                </div>\n                                <div class=\"c-block__image\">\n                                    <img src=\"{{ promotion.thumb_image.src }}\" alt=\"{{ promotion.title }}\"/>\n                                </div>\n                            </div>\n\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 909:
/***/ (function(module, exports) {

module.exports = "<p>\n  quick-deposit-bank-account works!\n</p>\n<section *ngIf=\"errorMessage\">\n        <pre>\n             {{ errorMessage }}\n        </pre>\n</section>\n<div class=\"container\">\n  <h1>Quick Deposit Bank Account Form ({{mode}}) </h1>\n  <form name=\"QuickDepositBankAccount\" autocomplete=\"off\" novalidate #QuickDepositBankAccountForm=\"ngForm\">\n\n    <section *ngIf=\"quickDepositMethods && quickDepositPreferredBanks\">\n      <div class=\"form-group\">\n        <label for=\"Quick Deposit Method\">Quick Deposit Method</label>\n        <select name=\"quickDepositMethod\" [(ngModel)]=\"quickDepositMethods.Id\">\n          <option value=\"\" disabled>Choose your Quick Deposit Method</option>\n          <option *ngFor=\"let quickDepositMethod of quickDepositMethods\" [ngValue]=\"quickDepositMethod.Id\">\n            {{ quickDepositMethod.PaymentMethodName }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Quick Deposit Preferred Banks\">Quick Deposit Preferred Banks</label>\n        <select name=\"quickDepositPreferredBanks\" [(ngModel)]=\"quickDepositPreferredBanks.Id\">\n          <option value=\"\" disabled>Choose your Bank</option>\n          <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                  [ngValue]=\"quickDepositPreferredBank.Id\">\n            {{ quickDepositPreferredBank.BankName }}\n          </option>\n        </select>\n      </div>\n\n    </section>\n\n    <section *ngIf=\"bankAccounts\">\n    <div class=\"form-group\">\n      <label for=\"Bank Name\">Bank Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"bankName\"\n             name=\"bankName\" disabled\n             placeholder=\"Bank Name\"\n             [(ngModel)]=\"bankAccounts.BankAccountName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Account Name\">Account Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"accountName\"\n             name=\"accountName\" disabled\n             placeholder=\"Account Name\"\n             [(ngModel)]=\"bankAccounts.AccountName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Account Number\">Account Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"accountNumber\"\n             name=\"accountNumber\" disabled\n             placeholder=\"Account Number\"\n             [(ngModel)]=\"bankAccounts.AccountNo\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"Bonus Code\">Bonus Code</label>\n      <input type=\"text\" class=\"form-control\" id=\"bonusCode\"\n             [(ngModel)]=\"bankAccounts.BonusCode\" name=\"bonusCode\"\n             placeholder=\"Bonus Code\" #bonusCode=\"ngModel\">\n    </div>\n\n    </section>\n    <button type=\"submit\" (click)=\"getBankAccount(quickDepositMethods.Id,quickDepositPreferredBanks.Id)\" class=\"btn btn-success\"\n            [disabled]=\"!QuickDepositBankAccountForm.form.valid\">\n      Submit\n    </button>\n\n  </form>\n</div>"

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.urlGetProfile = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/MyProfile'; // This is the API Endpoint for getting the list of Profile
        this.urlUpdateProfile = __WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppSettings */].API_ENDPOINT + 'PlayerAccount/UpdateProfile'; // This is the API Endpoint for updating Profile
    }
    /**
     * @returns {Observable<Profile[]>}
     * GET user profile
     */
    ProfileService.prototype.getProfile = function () {
        return this.http
            .get(this.urlGetProfile, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * @param profile
     * @returns {Observable<Profile>}
     * POST update profile
     */
    ProfileService.prototype.profileUpdate = function (profile) {
        return this.http
            .post(this.urlUpdateProfile, profile, __WEBPACK_IMPORTED_MODULE_8__default_request_option_service__["a" /* requestOptionsProvider */])
            .map(this.extractDataUpdate)
            .catch(this.handleError);
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    ProfileService.prototype.extractDataUpdate = function (res) {
        var body = res.json();
        var bodyData = body.Status;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return body || {};
    };
    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    ProfileService.prototype.extractData = function (res) {
        var body = res.json();
        var bodyData = body.Data;
        var rejectMsg;
        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        }
        else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }
        return rejectMsg || {};
    };
    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    ProfileService.prototype.handleError = function (error) {
        if (error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ProfileService);
    return ProfileService;
    var _a;
}());
//# sourceMappingURL=/home/apollo/code/orange88-desktop-app/src/profile.service.js.map

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = "<p>\n  quick-deposit-generate-uda-id works!\n</p>\n<section *ngIf=\"errorMessage\">\n        <pre>\n             {{ errorMessage }}\n        </pre>\n</section>\n<div class=\"container\">\n  <h1>Quick Deposit Generate UDA Id Form ({{mode}}) </h1>\n  <form name=\"QuickDepositGenerateUdaId\" autocomplete=\"off\" novalidate #QuickDepositGenerateUdaIdForm=\"ngForm\">\n\n    <section *ngIf=\"quickDepositMethods && quickDepositPreferredBanks\">\n      <div class=\"form-group\">\n        <label for=\"Quick Deposit Method\">Quick Deposit Method</label>\n        <select name=\"quickDepositMethod\" [(ngModel)]=\"quickDepositMethods.Id\">\n          <option value=\"\" disabled>Choose your Quick Deposit Method</option>\n          <option *ngFor=\"let quickDepositMethod of quickDepositMethods\" [ngValue]=\"quickDepositMethod.Id\">\n            {{ quickDepositMethod.PaymentMethodName }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Quick Deposit Preferred Banks\">Quick Deposit Preferred Banks</label>\n        <select name=\"quickDepositPreferredBanks\" [(ngModel)]=\"quickDepositPreferredBanks.Id\" (change)=\"getBankAccount(quickDepositMethods.Id,quickDepositPreferredBanks.Id)\" >\n          <option value=\"\" disabled>Choose your Bank</option>\n          <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                  [ngValue]=\"quickDepositPreferredBank.Id\">\n            {{ quickDepositPreferredBank.BankName }}\n          </option>\n        </select>\n      </div>\n\n    </section>\n\n    <section *ngIf=\"bankAccounts\">\n\n      <div class=\"form-group\">\n        <label for=\"Player's Deposit Amount\">Player's Deposit Amount</label>\n        <input type=\"text\" class=\"form-control\" id=\"playersDepositAmount\"\n               required\n               [(ngModel)]=\"udaId.DepositAmount\"\n               name=\"playersDepositAmount\"\n               placeholder=\"* Player's Deposit Amount\" #playersDepositAmount=\"ngModel\"\n               #depositAmount\n               (keyup.enter)=\"getUdaId(udaId)\"\n               (blur)=\"getUdaId(udaId)\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Bank Name\">Bank Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"bankName\"\n               name=\"bankName\" disabled\n               placeholder=\"Bank Name\"\n               [(ngModel)]=\"bankAccounts.BankAccountName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Account Name\">Account Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"accountName\"\n               name=\"accountName\" disabled\n               placeholder=\"Account Name\"\n               [(ngModel)]=\"bankAccounts.AccountName\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Account Number\">Account Number</label>\n        <input type=\"text\" class=\"form-control\" id=\"accountNumber\"\n               name=\"accountNumber\" disabled\n               placeholder=\"Account Number\"\n               [(ngModel)]=\"bankAccounts.AccountNo\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Bonus Code\">Bonus Code</label>\n        <input type=\"text\" class=\"form-control\" id=\"bonusCode\"\n               [(ngModel)]=\"bankAccounts.BonusCode\" name=\"bonusCode\"\n               placeholder=\"Bonus Code\" #bonusCode=\"ngModel\">\n      </div>\n\n    </section>\n\n      <section *ngIf=\"udaIds\">\n\n        <div class=\"form-group\">\n          <label for=\"Unique Deposit Amount\">Unique Deposit Amount</label>\n          <input type=\"text\" class=\"form-control\" id=\"uniqueDepositAmount\"\n                 name=\"uniqueDepositAmount\" disabled\n                 placeholder=\"Unique Deposit Amount\"\n                 [(ngModel)]=\"udaIds.GeneratedUDA\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"Please deposit this amount\">Please deposit this amount</label>\n          <input type=\"text\" class=\"form-control\" id=\"pleaseDepositThisAmount\"\n                 name=\"pleaseDepositThisAmount\" disabled\n                 placeholder=\"Please deposit this amount\"\n                 [(ngModel)]=\"udaIds.GeneratedUDA\">\n        </div>\n\n      </section>\n\n\n    <!--<button type=\"submit\" (click)=\"getBankAccount(quickDepositMethods.Id,quickDepositPreferredBanks.Id)\" class=\"btn btn-success\"-->\n            <!--[disabled]=\"!QuickDepositGenerateUdaId.form.valid\">-->\n      <!--Submit-->\n    <!--</button>-->\n\n  </form>\n</div>\n"

/***/ }),

/***/ 911:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"errorMessage\">\n        <pre>\n             {{ errorMessage }}\n        </pre>\n</section>\n\n<div class=\"container\">\n    <h1>Quick Deposit Method Form ({{mode}}) </h1>\n    <form name=\"QuickDepositMethod\" autocomplete=\"off\" novalidate #QuickDepositMethodForm=\"ngForm\">\n        <section *ngIf=\"quickDepositMethods\">\n            <div class=\"form-group\">\n                <label for=\"Quick Deposit Method\">Quick Deposit Method</label>\n                <select name=\"quickDepositMethod\">\n                    <option value=\"\" disabled>Choose your Quick Deposit Method</option>\n                    <option *ngFor=\"let quickDepositMethod of quickDepositMethods\" [ngValue]=\"quickDepositMethod.Id\">\n                        {{ quickDepositMethod.PaymentMethodName }}\n                    </option>\n                </select>\n            </div>\n\n        </section>\n    </form>\n</div>\n"

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"errorMessage\">\n        <pre>\n             {{ errorMessage }}\n        </pre>\n</section>\n\n<div class=\"container\">\n    <h1>Quick Deposit Preferred Bank Form ({{mode}}) </h1>\n    <form name=\"QuickDepositPreferredBank\"  autocomplete=\"off\" novalidate #QuickDepositPreferredBankForm=\"ngForm\">\n        <section *ngIf=\"quickDepositPreferredBanks\">\n            <div class=\"form-group\">\n                <label for=\"Quick Deposit Preferred Banks\">Quick Deposit Preferred Banks</label>\n                <select name=\"quickDepositMethod\">\n                    <option value=\"\" disabled>Choose your Quick Deposit Method</option>\n                    <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                            [ngValue]=\"quickDepositPreferredBank.Id\">\n                        {{ quickDepositPreferredBank.BankName }}\n                    </option>\n                </select>\n            </div>\n        </section>\n    </form>\n</div>\n\n"

/***/ }),

/***/ 913:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!quickDepositMethods\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div *ngIf=\"success\">\n    <div *ngIf=\"valid\" class=\"c-alert hidden\" style=\"display: block\">\n        <div class=\"c-alert__wrapper align-center\">\n            <h4 class=\"c-alert__title\">\n                <i class=\"icon icon-info-circled\"></i> {{ 'QUICKDEPOSIT.Success' | translate }}\n            </h4>\n            <p class=\"c-alert__desc\">{{ 'QUICKDEPOSIT.Successfully' | translate }}</p>\n        </div>\n    </div>\n</div>\n\n<div id=\"scrollable\" class=\"grid c-article\" *ngIf=\"quickDepositMethods && quickDepositPreferredBanks\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n                <h2 class=\"c-article__title\">{{ 'QUICKDEPOSIT.QuickDeposit' | translate }}</h2>\n            </div>\n\n            <div *ngIf=\"success && !valid \" class=\"c-alert c-alert--inline\">\n                <div *ngFor=\"let error of dataError\">\n                    <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                </div>\n            </div>\n\n            <div class=\"c-alert c-alert--inline\">\n                <i class=\"icon icon-info-circled\"></i>{{ 'QUICKDEPOSIT.MinimumAndMaximumDeposit' | translate }}\n            </div>\n\n            <form name=\"QuickDeposit\" autocomplete=\"off\" novalidate #QuickDepositForm=\"ngForm\" class=\"c-form\">\n                <fieldset>\n\n                    <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                        <span>{{ 'QUICKDEPOSIT.Step1' | translate }}</span>\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.QuickDepositMethod' | translate }}</label>\n                        <div class=\"c-form__select__wrapper\">\n                            <select class=\"c-form__input c-form__select\" name=\"quickDepositMethod\"\n                                    [(ngModel)]=\"quickDepositMethods.Id\">\n                                <option disabled value=\"0\">{{ 'QUICKDEPOSIT.ChooseYourQuickDepositMethod' | translate }}</option>\n                                <option *ngFor=\"let quickDepositMethod of quickDepositMethods\"\n                                        [ngValue]=\"quickDepositMethod.Id\">\n                                    {{ quickDepositMethod.PaymentMethodName }}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.QuickDepositPreferredBanks' | translate }}</label>\n                        <div class=\"c-form__select__wrapper\">\n                            <select class=\"c-form__input c-form__select\" name=\"quickDepositPreferredBanks\"\n                                    [(ngModel)]=\"quickDepositPreferredBanks.Id\"\n                                    (change)=\"getBankAccount(quickDepositMethods.Id,quickDepositPreferredBanks.Id)\">\n                                <option  disabled value=\"0\">{{ 'QUICKDEPOSIT.ChooseYourBank' | translate }}</option>\n                                <option *ngFor=\"let quickDepositPreferredBank of quickDepositPreferredBanks\"\n                                        [ngValue]=\"quickDepositPreferredBank.Id\">\n                                    {{ quickDepositPreferredBank.BankName }}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                </fieldset>\n\n                <fieldset *ngIf=\"bankAccounts\">\n\n                    <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                        <span>{{ 'QUICKDEPOSIT.Step2' | translate }}</span>\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.PlayerDepositAmount' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"playersDepositAmount\"\n                               required\n                               [(ngModel)]=\"udaId.DepositAmount\"\n                               name=\"playersDepositAmount\"\n                               placeholder=\"* {{ 'QUICKDEPOSIT.PlayerDepositAmount' | translate }}\" #playersDepositAmount=\"ngModel\"\n                               #fieldsedepositAmount\n                               (keyup)=\"getUdaId(udaId)\"\n                               (blur)=\"getUdaId(udaId)\">\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.BankName' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"bankName\"\n                               name=\"bankName\" disabled\n                               placeholder=\"{{ 'QUICKDEPOSIT.BankName' | translate }}\"\n                               [(ngModel)]=\"bankAccounts.BankAccountName\">\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.AccountName' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"accountName\"\n                               name=\"accountName\" disabled\n                               placeholder=\"{{ 'QUICKDEPOSIT.AccountName' | translate }}\"\n                               [(ngModel)]=\"bankAccounts.AccountName\">\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.AccountNumber' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"accountNumber\"\n                               name=\"accountNumber\" disabled\n                               placeholder=\"{{ 'QUICKDEPOSIT.AccountNumber' | translate }}\"\n                               [(ngModel)]=\"bankAccounts.AccountNo\">\n                    </div>\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.BonusCode' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"bonusCode\"\n                               [(ngModel)]=\"quickDeposits.BonusCode\" name=\"bonusCode\"\n                               placeholder=\"{{ 'QUICKDEPOSIT.BonusCode' | translate }}\" #bonusCode=\"ngModel\">\n                    </div>\n\n                </fieldset>\n\n                <fieldset *ngIf=\"udaIds\">\n\n                    <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                        <span>{{ 'QUICKDEPOSIT.Step3' | translate }}</span>\n                    </div>\n\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'QUICKDEPOSIT.PleaseDepositThisAmount' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"pleaseDepositThisAmount\"\n                               name=\"pleaseDepositThisAmount\" disabled\n                               placeholder=\"{{ 'QUICKDEPOSIT.PleaseDepositThisAmount' | translate }}\"\n                               [(ngModel)]=\"udaIds.GeneratedUDA\">\n\n                        <p>Please use this amount when making a deposit. This will help us to easily identify your deposit.</p>\n                    </div>\n                    <div class=\"c-form__group\">\n                        <button type=\"submit\" (click)=\"quickDeposit(quickDeposits,udaIds.Id)\"\n                                class=\"o-button o-button--action\"\n                                [disabled]=\"!QuickDepositForm.form.valid\">                            \n                            <span *ngIf=\"!submitting\">{{ 'QUICKDEPOSIT.Deposit' | translate }}</span>\n                            <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                        </button>\n                    </div>\n                </fieldset>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"{{modalId}}\" class=\"c-modal\">\n    <div class=\"c-modal__wrapper\">\n        <button type=\"button\" class=\"c-modal__close\" aria-label=\"Close\" (click)=\"onCancel()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <form autocomplete=\"off\" novalidate name=\"registration\" #RegistrationForm=\"ngForm\" class=\"c-form\">\n            <div class=\"c-modal__body\">\n                <div class=\"c-modal__title align-center\">\n                    <h3>{{ 'SIGNUP.Header' | translate }}</h3>\n                    <p>{{ 'SIGNUP.Info' | translate }}</p>\n                </div>\n\n                <div *ngIf=\"success\" class=\"c-alert c-alert--inline hidden\" style=\"display: block\">\n                    <div *ngFor=\"let error of dataError\">\n                        <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"regUsername\">{{ 'SIGNUP.Username' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"regUsername\"\n                        required\n                        [(ngModel)]=\"registration.UserName\" name=\"regUsername\"\n                        placeholder=\"{{ 'SIGNUP.Username' | translate }}\" #regUsername=\"ngModel\"\n                        minlength=\"5\" maxlength=\"30\">\n\n                    <div [hidden]=\"regUsername.valid\" *ngIf=\"submitted\"\n                         class=\"alert alert-danger\">\n                        {{ 'SIGNUP.ErrorUsername' | translate }}\n                    </div>\n\n                </div>\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"regPassword\">{{ 'SIGNUP.Password' | translate }}</label>\n                    <input type=\"password\" class=\"c-form__input\" id=\"regPassword\"\n                           required\n                           [(ngModel)]=\"registration.Password\"\n                           [(ngModel)]=\"registration.ConfirmPassword\" name=\"regPassword\"\n                           #regPassword=\"ngModel\"\n                           name=\"regPassword\" placeholder=\"{{ 'SIGNUP.Password' | translate }}\"\n                           minlength=\"6\" maxlength=\"30\">\n\n                    <div [hidden]=\"regPassword.valid\" *ngIf=\"submitted\"\n                         class=\"alert alert-danger\">\n                        {{ 'SIGNUP.ErrorPassword' | translate }}\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"regEmail\">\n                        <span>{{ 'SIGNUP.Email' | translate }}</span>\n                    </label>\n                    <input type=\"text\" class=\"c-form__input\"\n                           [(ngModel)]=\"registration.EmailAddress\" name=\"regEmail\" id=\"regEmail\"\n                           placeholder=\"{{ 'SIGNUP.Email' | translate }}\"\n                           #regEmail=\"ngModel\" email/>\n\n                    <div [hidden]=\"regEmail.valid\" *ngIf=\"regEmail.errors?.email || submitted\"\n                         class=\"alert alert-danger\">\n                        {{ 'SIGNUP.ErrorEmail' | translate }}\n                    </div>\n                </div>\n\n                <div role=\"separator\" class=\"c-form__group c-form__divider\">\n                    <span>{{ 'SIGNUP.Or' | translate }}</span>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"mobile-country-code-number\">\n                        <span>{{ 'SIGNUP.MobileNumber' | translate }}</span>\n                    </label>\n                    <div class=\"c-form__input-group\">\n                        <div class=\"c-form__input-group-add\">\n                            <div class=\"c-form__select__wrapper\">\n                                <select class=\"c-form__input c-form__select\" id=\"mobile-country-code-number\"\n                                        [(ngModel)]=\"registration.MobileCountryCodeNumber\" name=\"mobileCode\" #mobileCode=\"ngModel\">\n                                    <option disabled value=\"0\">{{ 'SIGNUP.CountryCode' | translate }}</option>\n                                    <option *ngFor=\"let country of countries\"\n                                            [ngValue]=\"country.CountryCallCode\" selected>\n                                        {{ country.CountryCallCode }}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <input type=\"text\" class=\"c-form__input\" id=\"regMobileNumber\"\n                            [(ngModel)]=\"registration.MobileNumber\" name=\"regMobileNumber\"\n                            placeholder=\"{{ 'SIGNUP.MobileNumber' | translate }}\" #regMobileNumber=\"ngModel\"\n                            minlength=\"10\" maxlength=\"10\"\n                            onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n                    </div>\n                    <div [hidden]=\"regMobileNumber.valid\"  *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'SIGNUP.ErrorMobile' | translate }}\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"c-modal__footer\">\n                <button (click)=\"onSubmit()\" type=\"submit\" class=\"c-form__submit o-button o-button--action\" >\n                    <span *ngIf=\"!submitting\">{{ 'SIGNUP.Submit' | translate }}</span>\n                    <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                </button>\n                <p (click)=\"onCancel()\" class=\"tiny\">{{ 'SIGNUP.SignIn' | translate }}</p>\n            </div>\n        </form>\n\n    </div>\n</div>"

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = "\n<select name=\"securityQuestion\" ngModel>\n    <option value=\"\" disabled>Choose your Security Question</option>\n    <option *ngFor=\"let securityQuestion of securityQuestions\" [ngValue]=\"securityQuestion.Id\">\n        {{ securityQuestion.SecurityQuestionDesc }}\n    </option>\n</select>\n"

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!sports\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div class=\"g-grid g-gap g-rowrepeat-2s\" *ngIf=\"sports\">\n    <div class=\"g-row g-row-first-half\">\n\n        <div class=\"c-panel\">\n            <div class=\"c-panel__header\">\n                <div class=\"c-panel__title\"><span>{{ 'SPORTSBOOK.Sports' | translate }}</span></div>\n                <!--<div class=\"c-panel__utils\">\n                    <div class=\"o-search\">\n                        <div class=\"o-search__wrapper\">\n                            <i class=\"icon icon-search float-right\"></i>\n                            <input type=\"text\" [(ngModel)]=\"filter.title\" placeholder=\"Search\">\n                        </div>\n                    </div>\n                </div>-->\n            </div>\n            <div class=\"c-panel__body\">\n                <div class=\"c-panel__body__wrapper\">\n                    <ul class=\"c-panel__list c-list row\">\n                        <li *ngFor=\"let sport of sports\" class=\"col col--md-3 col--lg-2\">\n\n                            <div class=\"c-block c-block--sports\" [ngStyle]=\"{'background-image': 'url(' + sport.thumb_image.src + ')'}\">\n                                <div class=\"c-block__body\">\n                                    <div class=\"c-block__title\">\n                                        {{sport.title}}\n                                    </div>\n                                    <a (click)=\"loadiframe(sport.langcode, sport.game_platform_code, sport.game_code)\"\n                                      class=\"o-button o-button--action  o-button--med\">{{ 'SPORTSBOOK.BetNow' | translate }}</a>\n                                </div>\n                            </div>\n\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "<select name=\"state\" ngModel>\n    <option value=\"\" disabled>Choose your State Province</option>\n    <option *ngFor=\"let stateProvince of stateProvinces\" [ngValue]=\"stateProvince.Id\">\n        {{ stateProvince.StateProvinceName }}\n    </option>\n</select>\n"

/***/ }),

/***/ 918:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!wechat\">\n    <div class=\"spinner\"></div>\n    <div>{{ 'Loading...' }}</div>\n</div>\n\n<div *ngIf=\"success\">\n    <div *ngIf=\"success.Url\" class=\"c-alert hidden\" style=\"display: block\">\n        <div class=\"c-alert__wrapper align-center\">\n            <h4 class=\"c-alert__title\">\n                <i class=\"icon icon-info-circled\"></i> {{ 'WECHATDEPOSIT.ConfirmDepositAmount' | translate }}\n            </h4>\n            <p class=\"c-alert__desc uppercase\" style=\"font-size: 1.2rem\">{{ 'WECHATDEPOSIT.DepositAmount' | translate }}: <strong>{{ wechat.Amount }}</strong></p>\n            <div>\n                <a href=\"{{ success.Url }}\" target=\"_blank\" class=\"o-button o-button--success\">{{ 'WECHATDEPOSIT.Proceed' | translate }}</a>\n                <button (click)=\"onCancel()\" class=\"o-button o-button--action\">{{ 'WECHATDEPOSIT.Cancel' | translate }}</button>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"!success.Url || error \" class=\"c-alert hidden\" style=\"display: block\">\n        <div class=\"c-alert__wrapper align-center\">\n            <h4 class=\"c-alert__title\">\n                <i class=\"icon icon-info-circled\"></i>  {{ 'WECHATDEPOSIT.BankIsNotAvailable' | translate }}\n            </h4>\n        </div>\n    </div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"wechat\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">{{ 'WECHATDEPOSIT.WechatDeposit' | translate }}</h2>\n            </div>\n\n            <div class=\"c-alert c-alert--inline\">\n                <i class=\"icon icon-info-circled\"></i>{{ 'WECHATDEPOSIT.MinimumAndMaximumDeposit' | translate }}\n            </div>\n\n            <form name=\"wechat\"  autocomplete=\"off\" novalidate #WechatForm=\"ngForm\" class=\"c-form\">\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"depositAmount\">{{ 'WECHATDEPOSIT.DepositAmount' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"depositAmount\"\n                        name=\"depositAmount\"\n                        required\n                        [(ngModel)]=\"wechat.Amount\"\n                           name=\"depositAmount\"\n                        placeholder=\"{{ 'WECHATDEPOSIT.DepositAmount' | translate }}\" #depositAmount=\"ngModel\"\n                           onkeyup=\"this.value=this.value.replace(/[^\\d]/,'')\">\n\n                    <div *ngIf=\"submitted\" class=\"alert alert-danger\">\n                        {{ 'WECHATDEPOSIT.ErrorDepositAmount' | translate }}\n                    </div>\n                </div>\n\n                <div class=\"c-form__group\">\n                    <label class=\"c-form__label invisible\" for=\"bonusCode\">{{ 'WECHATDEPOSIT.BonusCode' | translate }}</label>\n                    <input type=\"text\" class=\"c-form__input\" id=\"bonusCode\"\n                        [(ngModel)]=\"wechat.BonusCode\" name=\"bonusCode\"\n                        placeholder=\"{{ 'WECHATDEPOSIT.BonusCode' | translate }}\" #bonusCode=\"ngModel\">\n                </div>\n\n                <div class=\"c-form__group\">\n                    <button type=\"submit\" (click)=\"weChatPayment(wechat)\" class=\"o-button o-button--action\">       \n                        <span *ngIf=\"!submitting\">{{ 'WECHATDEPOSIT.Deposit' | translate }}</span>\n                        <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                    </button>\n                </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!withdrawalTransactions\"> \n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n\n<div id=\"withdrawalTransactionPage\" class=\"grid c-article\" *ngIf=\"withdrawalTransactions\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">{{ 'WITHDRAWALTRANSACTION.WithdrawalTransaction' | translate }}</h2>\n              <p class=\"c-article__desc\">{{ 'WITHDRAWALTRANSACTION.WeWillProcess' | translate }}</p>\n            </div>\n\n            <table class=\"c-table\">\n                <thead>\n                    <tr>\n                        <th>{{ 'WITHDRAWALTRANSACTION.DateTimeRequested' | translate }}</th>\n                        <th>{{ 'WITHDRAWALTRANSACTION.TransactionId' | translate }}</th>\n                        <th>{{ 'WITHDRAWALTRANSACTION.Status' | translate }}</th>\n                        <th>{{ 'WITHDRAWALTRANSACTION.Amount' | translate }}</th>\n                    </tr>\n                </thead>\n                <tbody id=\"list-withdrawal-transaction\">\n                    <tr *ngFor=\"let withdrawalTransaction of withdrawalTransactions\">\n                        <td>{{ withdrawalTransaction.WithdrawalDate + '+0800' | date: 'MM/dd/yyyy hh:mm:ss a' }}</td>\n                        <td>{{ withdrawalTransaction.TransactionNo }}</td>\n                        <td>{{ withdrawalTransaction.Status }}</td>\n                        <td>{{ withdrawalTransaction.WithdrawalAmount }}</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <hr/>\n            <button routerLink=\"/withdrawal\" class=\"o-button o-button--action\">{{ 'WITHDRAWALTRANSACTION.CreateWithdrawal' | translate }}</button>\n    \n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "<div class=\"loader align-center\" *ngIf=\"!profile\"> \n  <div class=\"spinner\"></div>\n  <div>{{ 'Loading...' }}</div>\n</div>\n<pre>\n    {{ bankAccount | json }}\n</pre>\n<div *ngIf=\"!bankAccount\">\n    <h1>Test</h1>\n</div>\n<div *ngIf=\"success\" class=\"c-alert hidden\" style=\"display: block\">\n    <div *ngIf=\"valid\" class=\"c-alert__wrapper align-center\">\n        <h4 class=\"c-alert__title\">\n        <i class=\"icon icon-info-circled\"></i> {{ 'WITHDRAWAL.Success' | translate }}\n        </h4>\n        <p class=\"c-alert__desc\">{{ 'WITHDRAWAL.Message' | translate }}</p>\n    </div>\n</div>\n\n<div class=\"grid c-article\" *ngIf=\"profile\">\n    <div class=\"row\">\n        <div class=\"col col--xs-12\">\n\n            <div class=\"c-article__header\">\n              <h2 class=\"c-article__title\">{{ 'WITHDRAWAL.Withdrawal' | translate }}</h2>\n              <p class=\"c-article__desc\">{{ 'WITHDRAWAL.WeWillProcess' | translate }}</p>\n            </div>\n\n            <div *ngIf=\"success && !valid \" class=\"c-alert c-alert--inline\">\n                <div *ngFor=\"let error of dataError\">\n                    <i class=\"icon icon-info-circled\"></i> {{ error.Description }}\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col col--xs-6\">\n                    {{ 'WITHDRAWAL.WithdrawalBalance' | translate }}: <span style=\"color: #f5f5f5\">{{ WithdrawalAmt | number }}</span>\n                </div>\n                <div class=\"col col--xs-6 align-right\">\n                            <i class=\"icon icon-help-circled alert-color\"></i>\n                    {{ 'WITHDRAWAL.LockedAmount' | translate }}: <span style=\"color: #f5f5f5\">{{ lockedAmount | number }}</span>\n                </div>\n            </div>\n\n            <hr/>\n\n            <form name=\"withdraw\" autocomplete=\"off\" novalidate #WithdrawableForm=\"ngForm\" class=\"c-form\">\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'WITHDRAWAL.BankAccount' | translate }}</label>\n                        <div class=\"c-form__select__wrapper\">\n                            <select class=\"c-form__input c-form__select\" name=\"quickDepositMethod\" [(ngModel)]=\"withdraw.PlayerBankAcountId\">\n                                <option disabled>{{ 'WITHDRAWAL.SelectYourBankAccount' | translate }}</option>\n                                <option *ngFor=\"let playerBankAccount of profile.PlayerBankAccounts\"\n                                        [ngValue]=\"playerBankAccount.Id\">\n                                    {{ playerBankAccount.BankAccountName }}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"c-form__group\">\n                        <label class=\"c-form__label invisible\">{{ 'WITHDRAWAL.WithdrawAmount' | translate }}</label>\n                        <input type=\"text\" class=\"c-form__input\" id=\"withdrawAmount\"\n                            required\n                            [(ngModel)]=\"withdraw.WithdrawAmount\" name=\"withdrawAmount\"\n                            placeholder=\"{{ 'WITHDRAWAL.WithdrawAmount' | translate }}\" #withdrawAmount=\"ngModel\">\n                        <div [hidden]=\"withdrawAmount.valid\"  *ngIf=\"submitted\" class=\"alert alert-danger\">\n                            {{ 'WITHDRAWAL.ErrorWithdrawAmount' | translate }}\n                        </div>\n                    </div>\n\n                    <div class=\"c-form__group\">\n                        <label for=\"Password\" class=\"c-form__label invisible\">{{ 'WITHDRAWAL.Password' | translate }}</label>\n                        <input type=\"password\" class=\"c-form__input\" id=\"password\"\n                            required\n                            [(ngModel)]=\"withdraw.Password\" name=\"password\"\n                            placeholder=\"{{ 'WITHDRAWAL.Password' | translate }}\" #password=\"ngModel\"\n                            minlength=\"6\" maxlength=\"30\">\n                        <div [hidden]=\"withdrawAmount.valid\"  *ngIf=\"submitted\" class=\"alert alert-danger\">\n                            {{ 'WITHDRAWAL.ErrorPassword' | translate }}\n                        </div>\n                    </div>\n\n                    <div class=\"c-form__group\">\n                        <button class=\"o-button\" (click)=\"goBack()\">{{ 'WITHDRAWAL.Cancel' | translate }}</button>\n                        <button type=\"submit\" (click)=\"makeWithrawal(withdraw)\" class=\"o-button o-button--action\">  \n                            <span *ngIf=\"!submitting\">{{ 'WITHDRAWAL.Withdraw' | translate }}</span>\n                            <span *ngIf=\"submitting\" class=\"spinner-bar\"></span>\n                        </button>\n                    </div>\n\n            </form>\n\n        </div>\n    </div>\n</div>\n"

/***/ })

},[1175]);
//# sourceMappingURL=main.bundle.map
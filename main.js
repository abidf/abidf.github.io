(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbarp></app-navbarp>\n<br>\n<br>\n<br>\n\n<app-itemadd></app-itemadd>\n\n\n\n\n\n<!--<router-outlet></router-outlet>-->\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bizapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_itemadd_itemadd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/itemadd/itemadd.component */ "./src/app/components/itemadd/itemadd.component.ts");
/* harmony import */ var _components_navbarp_navbarp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbarp/navbarp.component */ "./src/app/components/navbarp/navbarp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_itemadd_itemadd_component__WEBPACK_IMPORTED_MODULE_4__["ItemaddComponent"],
                _components_navbarp_navbarp_component__WEBPACK_IMPORTED_MODULE_5__["NavbarpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/itemadd/itemadd.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/itemadd/itemadd.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label class=\"col-form-label\">Item Code:</label>\n          <input type=\"text\" class=\"form-control\" id=\"itemcode\" placeholder=\"\">\n        </div>\n\n\n      </div>\n      <br>\n\n      <!-- Second Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label class=\"col-form-label\">Item Name:</label>\n          <input type=\"text\" class=\"form-control float-left\" id=\"itemname\" placeholder=\"\">\n        </div>\n      </div>\n\n      <br>\n      <!-- Third Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label>Category:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">Select..</option>\n            <option value=\"1\">Drink</option>\n            <option value=\"2\">Food</option>\n            <option value=\"3\">Electrical</option>\n          </select>\n        </div>\n        \n          <div class=\"col-md-4\">\n            <label>Ave. Cost:</label>\n            <input type=\"text\" class=\"form-control\" id=\"avgcost\" placeholder=\"\">\n          </div>\n\n      </div>\n      <br>\n      <!-- Fourth Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label>Sub Category:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">Select..</option>\n            <option value=\"\">Item 1</option>\n          </select>\n\n        </div>\n\n        <div class=\"col-md-4\">\n            <label>Price:</label>\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"\">\n          </div>\n\n      </div>\n      <br>\n\n      <!-- Fifth Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label>Product Group:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">-Select-</option>\n            <option value=\"\">Item 1</option>\n          </select>\n\n        </div>\n\n        <div class=\"col-md-4\">\n            <label>Sales Tax:</label>\n            <input type=\"text\" class=\"form-control\" id=\"price\" placeholder=\"\">\n          </div>\n      </div>\n\n      <br>\n      <!-- Sixth Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label>Brand:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">-Select-</option>\n            <option value=\"\">Item 1</option>\n          </select>\n\n        </div>\n\n        <div class=\"col-md-4\">\n            <label>Minimum Qty:</label>\n            <input type=\"text\" class=\"form-control\" id=\"minqty\" placeholder=\"\">\n          </div>\n\n      </div>\n\n      <br>\n      <!-- Seventh Row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n          <label>Product Gender:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">-Select-</option>\n            <option value=\"\">Male</option>\n            <option value=\"\">Female</option>\n            <option value=\"\">Unisex</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-4\">\n            <label>Maximum Qty:</label>\n            <input type=\"text\" class=\"form-control\" id=\"minqty\" placeholder=\"\">\n          </div>\n\n      </div>\n      <br>\n      <!-- Eigth Row -->\n      <div class=\"row\">\n  \n        <div class=\"col-md-4\">\n          <label>Purchase Type:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">-Select-</option>\n            <option value=\"\">Local</option>\n            <option value=\"\">Imported</option>\n            <option value=\"\">Unknown</option>\n          </select>\n        </div>\n  \n        <div class=\"col-md-4\">\n            <label>Expiry:</label>\n            <input type=\"text\" class=\"form-control\" id=\"expiry\" placeholder=\"\">\n          </div>\n  \n      </div>\n      \n      <br>\n      <!-- Ninth Row -->\n      <div class=\"row\">\n  \n        <div class=\"col-md-4\">\n          <label>Supplier:</label>\n          <select class=\"custom-select form-control\">\n            <option value=\"\">-Select-</option>\n            <option value=\"\">ABC Trading</option>\n            <option value=\"\">Best Products</option>\n            <option value=\"\">World Items</option>\n          </select>\n        </div>\n  \n        <div class=\"col-md-4\">\n            <label>Active:</label>\n            <input type=\"text\" class=\"form-control\" id=\"active\" placeholder=\"\">\n          </div>\n  \n      </div>\n  \n  \n\n    </div>\n\n\n\n    <div class=\"col-md-4\">\n        <div class=\"row\">\n          <div class=\"col-md-4 item-list-img\">\n          <img class=\"\" src=\"../../../assets/prodimg/pepsiCanWildCherry.png\">\n          \n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4 custom-file\">\n                \n                  <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\">\n                  <label class=\"custom-file-label\" for=\"inputGroupFile02\" aria-describedby=\"inputGroupFileAddon02\">Choose file</label>\n                \n                \n              \n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"input-group-append\">\n                <span class=\"input-group-text bg-primary\" id=\"inputGroupFileAddon02\">Upload</span>\n              </div>\n        </div>\n      </div>\n    </div>\n \n  </div>\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/components/itemadd/itemadd.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/itemadd/itemadd.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-list-img img {\n  overflow: hidden;\n  padding: 10px;\n  height: 100px;\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtYWRkL0M6XFxBbmdMZWFyblxcYml6YXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpdGVtYWRkXFxpdGVtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixjQUFhO0VBQ2IsYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pdGVtYWRkL2l0ZW1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1saXN0LWltZyBpbWcge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/itemadd/itemadd.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/itemadd/itemadd.component.ts ***!
  \*********************************************************/
/*! exports provided: ItemaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemaddComponent", function() { return ItemaddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemaddComponent = /** @class */ (function () {
    function ItemaddComponent() {
    }
    ItemaddComponent.prototype.ngOnInit = function () {
    };
    ItemaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itemadd',
            template: __webpack_require__(/*! ./itemadd.component.html */ "./src/app/components/itemadd/itemadd.component.html"),
            styles: [__webpack_require__(/*! ./itemadd.component.scss */ "./src/app/components/itemadd/itemadd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemaddComponent);
    return ItemaddComponent;
}());



/***/ }),

/***/ "./src/app/components/navbarp/navbarp.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/navbarp/navbarp.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Biz App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Products <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Customer</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Purchase</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbarp/navbarp.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/navbarp/navbarp.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFycC9uYXZiYXJwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbarp/navbarp.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/navbarp/navbarp.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarpComponent", function() { return NavbarpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarpComponent = /** @class */ (function () {
    function NavbarpComponent() {
    }
    NavbarpComponent.prototype.ngOnInit = function () {
    };
    NavbarpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbarp',
            template: __webpack_require__(/*! ./navbarp.component.html */ "./src/app/components/navbarp/navbarp.component.html"),
            styles: [__webpack_require__(/*! ./navbarp.component.scss */ "./src/app/components/navbarp/navbarp.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarpComponent);
    return NavbarpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AngLearn\bizapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
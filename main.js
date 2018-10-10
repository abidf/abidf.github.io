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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbarp></app-navbarp>\n<br>\n<app-shell></app-shell>\n\n\n\n\n\n<!--<router-outlet></router-outlet>-->\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_itemadd_itemadd_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/itemadd/itemadd.component */ "./src/app/components/itemadd/itemadd.component.ts");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-barcode */ "./node_modules/ngx-barcode/index.js");
/* harmony import */ var _components_navbarp_navbarp_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbarp/navbarp.component */ "./src/app/components/navbarp/navbarp.component.ts");
/* harmony import */ var _components_shell_shell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shell/shell.component */ "./src/app/components/shell/shell.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_itemadd_itemadd_component__WEBPACK_IMPORTED_MODULE_8__["ItemaddComponent"],
                _components_navbarp_navbarp_component__WEBPACK_IMPORTED_MODULE_10__["NavbarpComponent"],
                _components_shell_shell_component__WEBPACK_IMPORTED_MODULE_11__["ShellComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestoreModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_9__["NgxBarcodeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n\n<form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\" style=\"background-color: #eee;\">\n      <br>\n          <div class=\"row\">\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-2\">\n              <label for=\"title\">Item ID</label>\n            </div>\n            <div class=\"col-sm-3\">\n               <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.itemid\" name=\"title\" aria-label=\"Title\">\n            </div>\n            <div class=\"col-sm-2\">\n              <label for=\"title\">Barcode</label>\n            </div>\n            <div class=\"col-md-3\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.barcode\" name=\"barcode\" >\n\n            </div>\n          </div>\n          <br>\n          <!--Row 2-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"name\">Item Name</label>\n              </div>\n            <div class=\"col-sm-3\">\n              \n              <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.name\" name=\"name\" >\n            </div>\n            <div class=\"col-sm-2\">\n                <label for=\"name\">Brand Name</label>\n            </div>\n            <div class=\"col-sm-3\">\n                  <select class=\"form-control\" placeholder=\"Brand\" [(ngModel)]=\"selectedValue\" name=\"brand\" >\n                    <option *ngFor=\"let brand of brands\" [value]=\"brand.name\">\n                      {{brand.name}}\n                    </option>\n                  </select>\n            </div>           \n          </div>\n          <br>\n          <!--Row 3-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"category\">Category</label>\n              </div>\n            <div class=\"col-sm-3\">\n                \n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.category\" name=\"category\" >\n            </div>\n            <div class=\"col-sm-2\">\n                <label for=\"category\">Unit</label>\n            </div>\n            <div class=\"col-sm-3\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.unit\" name=\"unit\" >\n            </div>\n          </div>\n          <br>\n          <!--Row 4-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"curstock\">Initial Stock</label>\n              </div>\n            <div class=\"col-sm-3\">\n                \n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.curstock\" name=\"curstock\" >\n            </div>\n            <div class=\"col-sm-2\">\n                <label for=\"avgcost\">Item Price</label>\n            </div>\n            <div class=\"col-sm-3\">\n                \n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.avgcost\" name=\"avgcost\" >\n            </div>\n          </div>\n          <br>\n          <!--Row 5-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"minstklevel\">Stock Level (min.)</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.minstklevel\" name=\"minstklevel\" >\n              </div>\n              <div class=\"col-sm-2\">\n                  <label for=\"discount\">Discount</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.discount\" name=\"discount\" >\n              </div>\n            </div>\n            <br>\n          <!--Row 6-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"shelfloc\">Shelf/Location</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.shelfloc\" name=\"shelfloc\" >\n              </div>\n              <div class=\"col-sm-2\">\n                  <label for=\"expires\">Expires?</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <div class=\"radio\">\n                      <label><input type=\"radio\" name=\"expires\" checked=\"\">Yes</label>\n                      &nbsp;&nbsp;\n                      <label><input type=\"radio\" name=\"expires\">No</label>\n                    </div>\n                  <!--<input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.expires\" name=\"expires\" >-->\n              </div>\n            </div>\n            <br>\n          <!--Row 7-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n                  <label for=\"invaccount\">Inventory Account</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.invaccount\" name=\"invaccount\" >\n              </div>\n              <div class=\"col-sm-2\">\n                  <label for=\"incomeaccount\">Income Account</label>\n              </div>\n              <div class=\"col-sm-3\">\n                  \n                  <input type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"item.incomeaccount\" name=\"incomeaccount\" >\n              </div>\n            </div>\n            <br>\n            <br>\n              <!--Row 8-->\n          <div class=\"row\">\n              <div class=\"col-sm-1\"></div>\n              <div class=\"col-sm-2\">\n\n              </div>\n            <div class=\"col-md-4\">\n                <button type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">Submit</button> &nbsp;\n                <button type=\"submit\" class=\"btn btn-secondary\" value=\"Reset\">&nbsp;Reset&nbsp; </button>\n            </div>\n            <div class=\"col-md-3\">\n            </div>\n            <div class=\"col-md-2\">\n  \n          \n          </div>\n            <!--<p> Selected value: {{selectedValue}} </p>-->\n            \n          </div>\n  \n        <br>\n      </div>\n  \n  \n    </form>\n  \n  </div>\n\n  <!-- Left Section -->\n    <div class=\"col-md-5\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n              \n      <div class=\"row\">\n          <div class=\"col-sm-1\"></div>\n          <div class=\"col-md-5 item-list-img\">\n          <img class=\"\" src=\"../../../assets/prodimg/pepsiCanWildCherry.png\">\n          </div>\n      </div>\n      <div class=\"row\">\n          \n        <form>\n            <div class=\"col-sm-1\"></div>\n          \n            <div class=\"form-group\">\n                \n              <input type=\"file\" class=\"form-control-file\" id=\"filetoul\" placeholder=\"Select image to upload.\">\n            </div>\n         \n          </form>\n        \n      </div>\n      <br>\n\n      <div class=\"row\">\n        \n          <div class=\"col-sm-1\"></div>\n        <div class=\"col-md-2\">\n          <ngx-barcode #barcode bc-element-type=\"svg\" bc-height=\"100\" bc-width=\"2\" [bc-value]=\"item.barcode\" [bc-display-value]=\"true\" class=\"rotate\">\n          </ngx-barcode>\n        </div>\n        \n      </div>\n      \n            </div>\n          </div>\n\n    </div>\n\n    <!-- End of Left Section -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/itemadd/itemadd.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/itemadd/itemadd.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-list-img img {\n  overflow: hidden;\n  padding: 10px;\n  height: 200px;\n  width: 200px; }\n\n.example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\n.example-right-align {\n  text-align: right; }\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none; }\n\ninput.example-right-align {\n  -moz-appearance: textfield; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtYWRkL0M6XFxBbmdMZWFyblxcYml6YXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxpdGVtYWRkXFxpdGVtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixjQUFhO0VBQ2IsYUFBWSxFQUNmOztBQUVEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGtCQUFpQixFQUNsQjs7QUFFRDs7RUFFRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2l0ZW1hZGQvaXRlbWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWxpc3QtaW1nIGltZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtY29udGFpbmVyID4gKiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ246Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBpbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4gIH1cclxuICAiXX0= */"

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
/* harmony import */ var _services_additem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/additem.service */ "./src/app/services/additem.service.ts");
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
    function ItemaddComponent(additemservice) {
        this.additemservice = additemservice;
        this.item = {
            title: '',
            description: '',
            itemid: null,
            stockval: null,
            barcode: '0'
        };
    }
    ItemaddComponent.prototype.ngOnInit = function () {
    };
    ItemaddComponent.prototype.onSubmit = function () {
        //if(this.item.itemid != '' && this.item.barcode != '') {
        //this.item.brand = this.selectedValue ;
        this.additemservice.addItem(this.item);
        //this.item.title = '';
        //this.item.description = '';
        //this.item.itemid = null;
        //this.item.barcode = '';
        //this.item.stockval = null;
        //}
    };
    ItemaddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itemadd',
            template: __webpack_require__(/*! ./itemadd.component.html */ "./src/app/components/itemadd/itemadd.component.html"),
            styles: [__webpack_require__(/*! ./itemadd.component.scss */ "./src/app/components/itemadd/itemadd.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_additem_service__WEBPACK_IMPORTED_MODULE_1__["AdditemService"]])
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

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/shell/shell.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/shell/shell.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-itemadd></app-itemadd>\n\n\n<!--<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-7\">\n        <app-itemadd></app-itemadd>\n      </div>\n      <div class=\"col-md-5\">\n          <app-settings></app-settings>\n        \n      </div>\n    </div>\n  </div>-->"

/***/ }),

/***/ "./src/app/components/shell/shell.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/shell/shell.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/shell/shell.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/shell/shell.component.ts ***!
  \*****************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
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

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () {
    };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/components/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/components/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/services/additem.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/additem.service.ts ***!
  \*********************************************/
/*! exports provided: AdditemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemService", function() { return AdditemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/rx */ "./node_modules/rxjs/rx.js");
/* harmony import */ var rxjs_rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_rx__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdditemService = /** @class */ (function () {
    function AdditemService(afs) {
        this.afs = afs;
        //this.items = this.afs.collection('items').valueChanges();
        this.itemsCollection = this.afs.collection('items', function (ref) { return ref.orderBy('title', 'asc'); });
        this.items = this.itemsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    AdditemService.prototype.getItems = function () {
        return this.items;
    };
    AdditemService.prototype.addItem = function (item) {
        this.itemsCollection.add(item);
    };
    AdditemService.prototype.deleteItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.delete();
    };
    AdditemService.prototype.updateItem = function (item) {
        this.itemDoc = this.afs.doc("items/" + item.id);
        this.itemDoc.update(item);
    };
    AdditemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], AdditemService);
    return AdditemService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDSF-6wNin6cNoEvB-7qVFgXuAWo0Q3IBM",
        authDomain: "fs1prod-a2275.firebaseapp.com",
        databaseURL: "https://fs1prod-a2275.firebaseio.com",
        projectId: "fs1prod-a2275",
        storageBucket: "fs1prod-a2275.appspot.com",
        messagingSenderId: "1063645530023"
    }
};


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
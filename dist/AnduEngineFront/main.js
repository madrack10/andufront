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
/* harmony import */ var _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/auth/signin/signin.component */ "./src/app/ui/auth/signin/signin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ui_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui-routing.module */ "./src/app/ui/ui-routing.module.ts");
/* harmony import */ var _ui_auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/auth/register/register.component */ "./src/app/ui/auth/register/register.component.ts");
/* harmony import */ var _ui_qcm_qcm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/qcm/qcm.component */ "./src/app/ui/qcm/qcm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _ui_auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"] },
    { path: 'register', component: _ui_auth_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'anduengine/qcm', component: _ui_qcm_qcm_component__WEBPACK_IMPORTED_MODULE_6__["QcmComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ui_ui_routing_module__WEBPACK_IMPORTED_MODULE_4__["UiRoutingModule"]],
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

module.exports = "\n<app-header></app-header>\n<app-layout></app-layout>\n<router-outlet></router-outlet>\n"

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
        this.title = 'AnduEngineFront';
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
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
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
                _ui_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ui/auth/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ui/auth/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link href=\"assets/css/floating-labels.css\" type=\"text/css\" rel=\"stylesheet\"> -->\n<form class=\"form-signin\">\n  <div class=\"text-center mb-4\">\n    <div class=\"text-center mb-4\">\n        <img class=\"mb-4\" src=\"/assets/thumbnails/image.png\" alt=\"\" width=\"72\" height=\"72\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">S'incrire</h1>    \n      </div>\n  </div>\n\n  <div class=\"form-label-group\">\n    <input type=\"text\" id=\"inputName\" class=\"form-control\" placeholder=\"Nom\" required>\n    <label for=\"inputNom\">Nom</label>\n  </div>\n\n  <div class=\"form-label-group\">\n    <input type=\"text\" id=\"inputPrenom\" class=\"form-control\" placeholder=\"Prenom\" required>\n    <label for=\"inputPrenom\">Prenom</label>\n  </div>\n\n  <div class=\"form-label-group\">\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Addresse Email\" required>\n    <label for=\"inputEmail\">Addresse Email</label>\n  </div>\n\n  <div class=\"form-label-group\">\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Mot de passe\" required>\n    <label for=\"inputPassword\">Mot de passe</label>\n  </div>\n\n  <!-- <div class=\"form-label-group\">\n    <input type=\"text\" id=\"inputDomaine\" class=\"form-control\" placeholder=\"Votre domaine\" required>\n    <label for=\"inputDomaine\">Domaine</label>\n  </div> -->\n\n\n  <div class=\"form-label-group\">\n        <select class=\"custom-select\" id=\"inputGroupSelect01\">\n          <option selected>Choisir votre domaine...</option>\n          <option value=\"1\">Marketing</option>\n          <option value=\"2\">Programmation</option>\n          <option value=\"3\">Sécurité</option>\n        </select>\n  </div>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onSubmit()\">S'inscrire</button>\n  <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2017-2018</p>\n</form>"

/***/ }),

/***/ "./src/app/ui/auth/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/ui/auth/register/register.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%; }\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5; }\n\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: .75rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem; }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777; }\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none; }\n  .form-label-group input::-ms-input-placeholder {\n    color: #777; } }\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none; }\n  .form-label-group input:-ms-input-placeholder {\n    color: #777; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZHJhY2svQW5kdUVuZ2luZS9hbmR1ZnJvbnQvc3JjL2FwcC91aS9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQVksRUFDYjs7QUFFRDtFQUVFLGNBQWE7RUFFYixvQkFBbUI7RUFDbkIsa0JBQWlCO0VBQ2pCLHFCQUFvQjtFQUNwQiwwQkFBeUIsRUFDMUI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsb0JBQW1CLEVBQ3BCOztBQUVEOztFQUVFLGlCQUFnQjtFQUNoQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLGVBQWM7RUFDZCxZQUFXO0VBQ1gsaUJBQWdCO0VBQUUsdUNBQXVDO0VBQ3pELGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QscUJBQW9CO0VBQ3BCLGFBQVk7RUFBRSxxQ0FBcUM7RUFDbkQsOEJBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQixnQ0FBK0IsRUFDaEM7O0FBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBTUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBTUQ7RUFDRSxtQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxxQkFBb0I7RUFDcEIsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHVCQUFzQjtFQUN0QixnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtxREFDcUQ7O0FBQ3RCO0VBQzdCO0lBQ0UsY0FBYSxFQUNkO0VBQ0Q7SUFDRSxZQUFXLEVBQ1osRUFBQTs7QUFHSDtxREFDcUQ7O0FBQ3JEO0VBQ0U7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLFlBQVcsRUFDWixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLmZvcm0tc2lnbmluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwID4gaW5wdXQsXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgaGVpZ2h0OiAzLjEyNXJlbTtcbiAgcGFkZGluZzogLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMDsgLyogT3ZlcnJpZGUgZGVmYXVsdCBgPGxhYmVsPmAgbWFyZ2luICovXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiB0ZXh0OyAvKiBNYXRjaCB0aGUgaW5wdXQgdW5kZXIgdGhlIGxhYmVsICovXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcbiAgcGFkZGluZy10b3A6IDEuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gbGFiZWwge1xuICBwYWRkaW5nLXRvcDogLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNzc3O1xufVxuXG4vKiBGYWxsYmFjayBmb3IgRWRnZVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzc3O1xuICB9XG59XG5cbi8qIEZhbGxiYWNrIGZvciBJRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSksICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5mb3JtLWxhYmVsLWdyb3VwID4gbGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/ui/auth/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ui/auth/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route) {
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/register';
        this.route.navigate(['anduengine/qcm']);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/ui/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/ui/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/ui/auth/signin/signin.component.html":
/*!******************************************************!*\
  !*** ./src/app/ui/auth/signin/signin.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <link href=\"assets/css/floating-labels.css\" type=\"text/css\" rel=\"stylesheet\"> -->\n<!-- <script src=\"assets/js/core/jquery.min.js\" type=\"text/javascript\"></script> -->\n\n<form class=\"form-signin\">\n  <div class=\"text-center mb-4\">\n    <img class=\"mb-4\" src=\"/assets/thumbnails/image.png\" alt=\"\" width=\"72\" height=\"72\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">Connexion</h1>\n\n  </div>\n\n  <div class=\"form-label-group\">\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Addresse Email\" required autofocus>\n    <label for=\"inputEmail\">Addresse Email</label>\n  </div>\n  <div class=\"form-label-group\">\n      <input type=\"tel\" id=\"inputTelephone\" class=\"form-control\" placeholder=\"Numéro téléphone\" required>\n      <label for=\"inputTelephone\">Numéro téléphone</label>\n    </div>\n\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onSubmit()\" >Se Connecter</button>\n  <!-- <a class=\"btn btn-lg btn-primary btn-block\" (click)=\"onSubmit()\" [routerLink]=\"['register']\" routerLinkActive=\"active\">S'inscrire</a> -->\n  <p class=\"mt-5 mb-3 text-muted text-center\">&copy; 2018-2019</p>\n</form>\n"

/***/ }),

/***/ "./src/app/ui/auth/signin/signin.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ui/auth/signin/signin.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody {\n  height: 100%; }\n\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5; }\n\n.form-signin {\n  width: 100%;\n  max-width: 420px;\n  padding: 15px;\n  margin: auto; }\n\n.form-label-group {\n  position: relative;\n  margin-bottom: 1rem; }\n\n.form-label-group > input,\n.form-label-group > label {\n  height: 3.125rem;\n  padding: .75rem; }\n\n.form-label-group > label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  margin-bottom: 0;\n  /* Override default `<label>` margin */\n  line-height: 1.5;\n  color: #495057;\n  pointer-events: none;\n  cursor: text;\n  /* Match the input under the label */\n  border: 1px solid transparent;\n  border-radius: .25rem;\n  transition: all .1s ease-in-out; }\n\n.form-label-group input::-webkit-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::-ms-input-placeholder {\n  color: transparent; }\n\n.form-label-group input::placeholder {\n  color: transparent; }\n\n.form-label-group input:not(:placeholder-shown) {\n  padding-top: 1.25rem;\n  padding-bottom: .25rem; }\n\n.form-label-group input:not(:placeholder-shown) ~ label {\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  font-size: 12px;\n  color: #777; }\n\n/* Fallback for Edge\n-------------------------------------------------- */\n\n@supports (-ms-ime-align: auto) {\n  .form-label-group > label {\n    display: none; }\n  .form-label-group input::-ms-input-placeholder {\n    color: #777; } }\n\n/* Fallback for IE\n-------------------------------------------------- */\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .form-label-group > label {\n    display: none; }\n  .form-label-group input:-ms-input-placeholder {\n    color: #777; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZHJhY2svQW5kdUVuZ2luZS9hbmR1ZnJvbnQvc3JjL2FwcC91aS9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBWSxFQUNiOztBQUVEO0VBRUUsY0FBYTtFQUViLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFDakIscUJBQW9CO0VBQ3BCLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDcEI7O0FBRUQ7O0VBRUUsaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixRQUFPO0VBQ1AsZUFBYztFQUNkLFlBQVc7RUFDWCxpQkFBZ0I7RUFBRSx1Q0FBdUM7RUFDekQsaUJBQWdCO0VBQ2hCLGVBQWM7RUFDZCxxQkFBb0I7RUFDcEIsYUFBWTtFQUFFLHFDQUFxQztFQUNuRCw4QkFBNkI7RUFDN0Isc0JBQXFCO0VBQ3JCLGdDQUErQixFQUNoQzs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFNRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFNRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLHFCQUFvQjtFQUNwQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsdUJBQXNCO0VBQ3RCLGdCQUFlO0VBQ2YsWUFBVyxFQUNaOztBQUVEO3FEQUNxRDs7QUFDdEI7RUFDN0I7SUFDRSxjQUFhLEVBQ2Q7RUFDRDtJQUNFLFlBQVcsRUFDWixFQUFBOztBQUdIO3FEQUNxRDs7QUFDckQ7RUFDRTtJQUNFLGNBQWEsRUFDZDtFQUNEO0lBQ0UsWUFBVyxFQUNaLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91aS9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5mb3JtLXNpZ25pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3JtLWxhYmVsLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCA+IGlucHV0LFxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIGhlaWdodDogMy4xMjVyZW07XG4gIHBhZGRpbmc6IC43NXJlbTtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDA7IC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogdGV4dDsgLyogTWF0Y2ggdGhlIGlucHV0IHVuZGVyIHRoZSBsYWJlbCAqL1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uZm9ybS1sYWJlbC1ncm91cCBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IGxhYmVsIHtcbiAgcGFkZGluZy10b3A6IC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3Nztcbn1cblxuLyogRmFsbGJhY2sgZm9yIEVkZ2Vcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5Ac3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgLmZvcm0tbGFiZWwtZ3JvdXAgPiBsYWJlbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxufVxuXG4vKiBGYWxsYmFjayBmb3IgSUVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuZm9ybS1sYWJlbC1ncm91cCA+IGxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM3Nzc7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/auth/signin/signin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ui/auth/signin/signin.component.ts ***!
  \****************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(route) {
        this.route = route;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function () {
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/register';
        this.route.navigate(['/register']);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/ui/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/ui/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-dark bg-dark mt-5 fixed-bottom\"> -->\n    <nav class=\"navbar navbar-dark mt-5 fixed-bottom\" style=\"background-color: rgb(12, 128, 136);\">\n    <div class=\"navbar-expand m-auto navbar-text\">\n      Made with <i class=\"fa fa-heart\"></i> by <a href=\"https://volkeno.com\">Volkeno</a>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/ui/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-dark bg-dark mb-5\"> -->\n<nav class=\"navbar navbar-dark\" style=\"background-color: rgb(12, 128, 136);\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">AnduEngine</a>\n  <div class=\"navbar-expand mr-auto\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"#\"></a>\n      <a class=\"nav-item nav-link\" href=\"#\"></a>\n      <a class=\"nav-item nav-link\" href=\"#\"></a>\n    </div>\n  </div>\n  <div class=\"navbar-expand ml-auto navbar-nav\" routerLinkActive=\"active\">\n    <div class=\"navbar-nav\">\n      <!-- <a class=\"nav-item nav-link\"  [routerLink]=\"['login']\">\n        <i class=\"fa fa-sign-in\" > SE CONNECTER</i>\n      </a> -->\n      <!-- <a class=\"nav-item nav-link\"  [routerLink]=\"['register']\">\n        <i class=\"fa fa-user-plus\"> S'INSCRIRE</i>\n      </a> -->\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-signin></app-signin> -->\n<!-- <app-header></app-header> -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ui/qcm/qcm.component.html":
/*!*******************************************!*\
  !*** ./src/app/ui/qcm/qcm.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h2>TEST: DEVELOPPEMENT</h2>\n    <p>\n      Répondre aux questions suivantes pour valider votre test\n    </p>\n  </div>\n  <br>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Question #1\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">C'est quoi la programmation ? </p>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          c'est un langage\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Question #2\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">C'est quoi la programmation ? </p>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          c'est un langage\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n    </div>\n  </div>\n  <br>\n\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Question #3\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">C'est quoi le \"blockChainning\"? </p>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          c'est un langage\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n    </div>\n  </div>\n  <br>\n\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Question #4\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">C'est quoi la programmation ? </p>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          c'est un langage\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n    </div>\n  </div>\n  <br>\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Question #5\n    </div>\n    <div class=\"card-body\">\n      <p class=\"card-text\">C'est quoi la programmation ? </p>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          c'est un langage\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          Communiquer avec la machine\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          First radio\n        </label>\n      </div>\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios\">\n        <label class=\"form-check-label\" for=\"gridRadios\">\n          Lorenzo Wendy\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div class=\"container\">\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" href=\"\">VALIDER</button>\n</div>"

/***/ }),

/***/ "./src/app/ui/qcm/qcm.component.scss":
/*!*******************************************!*\
  !*** ./src/app/ui/qcm/qcm.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3FjbS9xY20uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/qcm/qcm.component.ts":
/*!*****************************************!*\
  !*** ./src/app/ui/qcm/qcm.component.ts ***!
  \*****************************************/
/*! exports provided: QcmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QcmComponent", function() { return QcmComponent; });
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

var QcmComponent = /** @class */ (function () {
    function QcmComponent() {
    }
    QcmComponent.prototype.ngOnInit = function () {
    };
    QcmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qcm',
            template: __webpack_require__(/*! ./qcm.component.html */ "./src/app/ui/qcm/qcm.component.html"),
            styles: [__webpack_require__(/*! ./qcm.component.scss */ "./src/app/ui/qcm/qcm.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QcmComponent);
    return QcmComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ui/ui-routing.module.ts ***!
  \*****************************************/
/*! exports provided: UiRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiRoutingModule", function() { return UiRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/ui/auth/signin/signin.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/ui/auth/register/register.component.ts");
/* harmony import */ var _qcm_qcm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qcm/qcm.component */ "./src/app/ui/qcm/qcm.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/ui/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'login', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
    { path: 'register', component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'anduengine/qcm', component: _qcm_qcm_component__WEBPACK_IMPORTED_MODULE_5__["QcmComponent"] },
    { path: 'ui/header', component: _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"] },
];
var UiRoutingModule = /** @class */ (function () {
    function UiRoutingModule() {
    }
    UiRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], UiRoutingModule);
    return UiRoutingModule;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/ui/auth/signin/signin.component.ts");
/* harmony import */ var _qcm_qcm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./qcm/qcm.component */ "./src/app/ui/qcm/qcm.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/ui/auth/register/register.component.ts");
/* harmony import */ var _ui_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-routing.module */ "./src/app/ui/ui-routing.module.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ui_routing_module__WEBPACK_IMPORTED_MODULE_7__["UiRoutingModule"],
                ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"],
            ],
            declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _auth_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _qcm_qcm_component__WEBPACK_IMPORTED_MODULE_5__["QcmComponent"]],
            exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]]
        })
    ], UiModule);
    return UiModule;
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

module.exports = __webpack_require__(/*! /home/madrack/AnduEngine/andufront/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
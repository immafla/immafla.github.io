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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navegacion></app-navegacion>\n<app-header></app-header>\n<app-body></app-body>\n<app-footer></app-footer>"

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
        this.title = 'appLienzo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/body/body.component */ "./src/app/components/body/body.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navegacion_navegacion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navegacion/navegacion.component */ "./src/app/components/navegacion/navegacion.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _components_body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_navegacion_navegacion_component__WEBPACK_IMPORTED_MODULE_6__["NavegacionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/body/body.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/body/body.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 360px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    body {\r\n        padding-top: 56px;\r\n    }\r\n}\r\n\r\n.bg-image-full {\r\n    background: no-repeat center top scroll;\r\n    background-size: cover;\r\n    -o-background-size: cover;\r\n}\r\n\r\n/* \r\n.img-fluid {\r\n    max-width: 100%;\r\n    height: auto;\r\n} */\r\n\r\n#frase p {\r\n    color: rgb(75, 75, 75);\r\n    margin: 40px;\r\n    padding: 40px;\r\n    font-size: 2.2em;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.tt1 {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: black;\r\n    text-align: left;\r\n    /*     top: 1100px;\r\n    left: 150px; */\r\n    /*     -webkit-transform: translate3d(-50%, -30%, 0);\r\n    transform: translate3d(-50%, -30%, 0); */\r\n    text-transform: uppercase;\r\n    font-size: 8.2em;\r\n    line-height: 100px;\r\n}\r\n\r\n.tt2 {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: black;\r\n    text-align: right;\r\n    /*     top: 1100px;\r\n    left: 1160px;\r\n    -webkit-transform: translate3d(-50%, -30%, 0);\r\n    transform: translate3d(-50%, -30%, 0); */\r\n    text-transform: uppercase;\r\n    font-size: 8.2em;\r\n    line-height: 110px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSTtRQUNJLGtCQUFrQjtLQUNyQjtDQUNKOztBQUVEO0lBQ0ksd0NBQXdDO0lBR3hDLHVCQUF1QjtJQUN2QiwwQkFBMEI7Q0FDN0I7O0FBR0Q7Ozs7SUFJSTs7QUFFSjtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCO21CQUNlO0lBQ2Y7NkNBQ3lDO0lBQ3pDLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjs7OzZDQUd5QztJQUN6QywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzNjBweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJnLWltYWdlLWZ1bGwge1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciB0b3Agc2Nyb2xsO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBcclxuLmltZy1mbHVpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0gKi9cclxuXHJcbiNmcmFzZSBwIHtcclxuICAgIGNvbG9yOiByZ2IoNzUsIDc1LCA3NSk7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAyLjJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnR0MSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIC8qICAgICB0b3A6IDExMDBweDtcclxuICAgIGxlZnQ6IDE1MHB4OyAqL1xyXG4gICAgLyogICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtMzAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTMwJSwgMCk7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiA4LjJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnR0MiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAvKiAgICAgdG9wOiAxMTAwcHg7XHJcbiAgICBsZWZ0OiAxMTYwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTMwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC0zMCUsIDApOyAqL1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogOC4yZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/body/body.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/body/body.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <div class=\"row\" id=\"frase\">\r\n        <div class=\"col text-center\">\r\n            <p class=\"frase\">TODO COMIENZA CON PASIÓN <br/>Y AMOR A LO QUE HACES.</p>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"card-group\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">SOBRE MI</h5>\r\n                    <p class=\"card-text\">¿Qué te puedo contar de mi?, me llamo Iván Mauricio Mafla, soy Ingeniero Electrónico de la Universidad Nacional de Colombia, developer, me gusta enseñar lo que aprendo a otras personas y seguir aprendiendo lo que me queda por saber.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">MI MOTIVACION</h5>\r\n                    <p class=\"card-text\">Trabajando y desarrollando mi pasión. Dentro y fuera del mundo del software. Practica, metas claras y trabajo gratificante mientras se gana la vida.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title\">¡VEN TE MUESTRO!</h5>\r\n                    <p class=\"card-text\">Ven y te muestro algunos mis proyectos, algunos desarrollasods en la universidad, otros en mi tiempo libre.</p>\r\n                    <a href=\"#\" class=\"card-link\">Click aqui!</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\"><br /><br /><br /></div>\r\n\r\n</div>\r\n\r\n\r\n<section class=\"py-5 bg-image-full\" style=\"background-image: url('../../../assets/img/img.jpg');\">\r\n    <div class=\"content\">\r\n        <!--  <div style=\"height: 200px;\">\r\n            <h1 class=\"tt1\"><strong>DE</strong><br /><strong>SA</strong><br />RRO<br />LLO</h1>\r\n            <h1 class=\"tt2\"><strong>IN</strong><br /><strong>NO</strong><br />VA<br />CIÓN</h1>\r\n        </div> -->\r\n    </div>\r\n\r\n</section>\r\n\r\n\r\n\r\n<!-- <div class=\"banner\">\r\n    \r\n    \r\n\r\n    <img src=\"../../../assets/img/img.jpg\" class=\"img-fluid\" alt=\"Responsive image\">\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/body/body.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/body/body.component.ts ***!
  \***************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
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

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/components/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/components/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nfooter {\r\n    width: 100%;\r\n    background: #202020;\r\n    color: white;\r\n}\r\n\r\n.container-footer-all {\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    padding: 40px;\r\n}\r\n\r\n.container-body {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.colum1 {\r\n    max-width: 400px;\r\n}\r\n\r\n.colum1 h1 {\r\n    font-size: 22px;\r\n}\r\n\r\n.colum1 p {\r\n    font-size: 14px;\r\n    color: #C7C7C7;\r\n    margin-top: 20px;\r\n}\r\n\r\n.colum2 {\r\n    max-width: 400px;\r\n}\r\n\r\n.colum2 h1 {\r\n    font-size: 22px;\r\n}\r\n\r\n.row {\r\n    margin-top: 20px;\r\n    display: flex;\r\n}\r\n\r\n.row img {\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.row label {\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    color: #C7C7C7;\r\n}\r\n\r\n.colum3 {\r\n    max-width: 400px;\r\n}\r\n\r\n.colum3 h1 {\r\n    font-size: 22px;\r\n}\r\n\r\n.row2 {\r\n    margin-top: 20px;\r\n    display: flex;\r\n}\r\n\r\n.row2 img {\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.row2 label {\r\n    margin-top: 10px;\r\n    margin-left: 20px;\r\n    max-width: 140px;\r\n}\r\n\r\n.container-footer {\r\n    width: 100%;\r\n    background: #101010;\r\n}\r\n\r\n.footer {\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 20px;\r\n}\r\n\r\n.copyright {\r\n    color: #C7C7C7;\r\n}\r\n\r\n.copyright a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\n.information a {\r\n    text-decoration: none;\r\n    color: #C7C7C7;\r\n}\r\n\r\n@media screen and (max-width: 1100px) {\r\n    .container-body {\r\n        flex-wrap: wrap;\r\n    }\r\n    .colum1 {\r\n        max-width: 100%;\r\n    }\r\n    .colum2,\r\n    .colum3 {\r\n        margin-top: 40px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksY0FBYztJQUNkLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsY0FBYztDQUNqQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0NBQ2xCOztBQUVEO0lBQ0k7UUFDSSxnQkFBZ0I7S0FDbkI7SUFDRDtRQUNJLGdCQUFnQjtLQUNuQjtJQUNEOztRQUVJLGlCQUFpQjtLQUNwQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjAyMDIwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZvb3Rlci1hbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29sdW0xIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jb2x1bTEgaDEge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY29sdW0xIHAge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNDN0M3Qzc7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29sdW0yIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5jb2x1bTIgaDEge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucm93IGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLnJvdyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI0M3QzdDNztcclxufVxyXG5cclxuLmNvbHVtMyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY29sdW0zIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLnJvdzIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yb3cyIGltZyB7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLnJvdzIgbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mb290ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTAxMDEwO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgY29sb3I6ICNDN0M3Qzc7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNDN0M3Qzc7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gICAgLmNvbnRhaW5lci1ib2R5IHtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgICAuY29sdW0xIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29sdW0yLFxyXG4gICAgLmNvbHVtMyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\n    <div class=\"container-footer-all\">\n\n        <div class=\"container-body\">\n\n\n\n            <div class=\"colum2\">\n\n                <h1>Redes Sociales</h1>\n\n                <div class=\"row\">\n                    <img src=\"../../../assets/icon/facebook.png\">\n                    <label href=\"\">Sigume en Facebook</label>\n                </div>\n                <div class=\"row\">\n                    <img src=\"../../../assets/icon/twitter.png\">\n                    <label>Sigueme en Twitter</label>\n                </div>\n\n\n            </div>\n\n            <div class=\"colum3\">\n\n                <h1>Información Contacto</h1>\n\n                <div class=\"row2\">\n                    <img src=\"../../../assets/icon/smartphone.png\">\n                    <label>+57 318 387 9421</label>\n                </div>\n\n                <div class=\"row2\">\n                    <img src=\"../../../assets/icon/contact.png\">\n                    <label>mauroms_@live.com</label>\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class=\"container-footer\">\n        <div class=\"footer\">\n            <div class=\"copyright\">\n                ©{{ anio}} Todos los Derechos Reservados | <a href=\"\">Ivan Mauricio Mafla S.</a>\n            </div>\n\n        </div>\n\n    </div>\n\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
        this.anio = new Date().getFullYear();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n    padding: 60px;\r\n}\r\n\r\n.main-title {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #f9f1e9;\r\n    text-align: center;\r\n    font-size: 5.6em;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.sub-title {\r\n    position: relative;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #f9f1e9;\r\n    text-align: center;\r\n    font-size: 2.1em;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n.btn {\r\n    position: relative;\r\n    top: 30px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1em;\r\n}\r\n\r\n/*\r\n\r\n.menu {\r\n    position: absolute;\r\n    margin: 20px;\r\n}\r\n.navbar-nav {\r\n    position: relative;\r\n    left: 750px;\r\n} */\r\n\r\nbody {\r\n    padding-top: 54px;\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    body {\r\n        padding-top: 56px;\r\n    }\r\n}\r\n\r\n.bg-image-full {\r\n    background: no-repeat center center scroll;\r\n    background-size: cover;\r\n    -o-background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsc0JBQXNCO0NBQ3pCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsc0JBQXNCO0NBQ3pCOztBQUdEOzs7Ozs7Ozs7SUFTSTs7QUFFSjtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJO1FBQ0ksa0JBQWtCO0tBQ3JCO0NBQ0o7O0FBRUQ7SUFDSSwyQ0FBMkM7SUFHM0MsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtDQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNjBweDtcclxufVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiAjZjlmMWU5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA1LjZlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6ICNmOWYxZTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuMWVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcblxyXG4vKlxyXG5cclxuLm1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbi5uYXZiYXItbmF2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDc1MHB4O1xyXG59ICovXHJcblxyXG5ib2R5IHtcclxuICAgIHBhZGRpbmctdG9wOiA1NHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIGJvZHkge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1NnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmctaW1hZ2UtZnVsbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBzY3JvbGw7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header class=\"py-5 bg-image-full\" style=\"background-image: url('../../../assets/img/w.jpg');\">\r\n    <<!-- img class=\"img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200&text=Logo\" alt=\"\"> -->\r\n        <div class=\"content\">\r\n            <h1 class=\"main-title\">IVAN <strong class=\"thin\">MAFLA</strong></h1>\r\n            <h5 class=\"sub-title\">Ingeniería | sistemas | electrónica</h5>\r\n            <button onclick=\"window.location.href='http://immafla.github.io/HV2019-01.pdf'\" type=\"button\" class=\"btn btn-light btn-lg mx-auto d-block\">Ver\r\n            curriculum</button>\r\n        </div>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/navegacion/navegacion.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navegacion/navegacion.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    position: absolute;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    top: 20px;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.menu {\r\n    position: relative;\r\n    /* IMPORTANTE */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZlZ2FjaW9uL25hdmVnYWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztDQUNaOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2ZWdhY2lvbi9uYXZlZ2FjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiBJTVBPUlRBTlRFICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/navegacion/navegacion.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navegacion/navegacion.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<div class=\"container\">\n    <div class=\"menu\">\n        <nav class=\"navbar navbar-expand-lg navbar-dark\">\n\n            <div class=\"container\">\n\n                <a class=\"navbar-brand\" href=\"#\">\n                    <img src=\"../../../assets/img/logo.png\" width=\"87\" height=\"100\" alt=\"\">\n                </a>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n                </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n\n                    <ul class=\"navbar-nav ml-auto\">\n\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" href=\"#\">INICIO<span class=\"sr-only\">(current)</span></a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">SOBRE MI</a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">PROYECTOS</a>\n                        </li>\n\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" href=\"#\">CONTACTO</a>\n                        </li>\n\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navegacion/navegacion.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navegacion/navegacion.component.ts ***!
  \***************************************************************/
/*! exports provided: NavegacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavegacionComponent", function() { return NavegacionComponent; });
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

var NavegacionComponent = /** @class */ (function () {
    function NavegacionComponent() {
    }
    NavegacionComponent.prototype.ngOnInit = function () {
    };
    NavegacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navegacion',
            template: __webpack_require__(/*! ./navegacion.component.html */ "./src/app/components/navegacion/navegacion.component.html"),
            styles: [__webpack_require__(/*! ./navegacion.component.css */ "./src/app/components/navegacion/navegacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavegacionComponent);
    return NavegacionComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\Lienzo en Angular\appLienzo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
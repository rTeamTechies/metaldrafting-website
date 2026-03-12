function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: ':page',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! animate.css */
    "./node_modules/animate.css/animate.css");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/__ivy_ngcc__/fesm2015/ng-image-slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var animate_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! animate.css */
    "./node_modules/animate.css/animate.css");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./info-modal/info-modal.component */
    "./src/app/info-modal/info-modal.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientJsonpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_17__["InfoModalComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientJsonpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_17__["InfoModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientJsonpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"]],
          entryComponents: [_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_17__["InfoModalComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts": function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! animate.css */
    "./node_modules/animate.css/animate.css");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function HomeComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are expertised in Detailing, Fabrication and Erection of Structural Steel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are expertised in Detailing, Fabrication and Erection of Structural Steel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are expertised in Detailing, Fabrication and Erection of Structural Steel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are expertised in Detailing, Fabrication and Erection of Structural Steel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are expertised in Detailing, Fabrication and Erection of Structural Steel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(document, router, http, formBuilder, route, dialog, vps, el) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.http = http;
        this.formBuilder = formBuilder;
        this.route = route;
        this.dialog = dialog;
        this.vps = vps;
        this.el = el;
        this.currentYear = new Date().getFullYear();
        this.imageObject = [{
          image: 'assets/images/mdImages/home1.jpg',
          thumbImage: 'assets/images/mdImages/home1.jpg'
        }, {
          image: 'assets/images/mdImages/home2.jpeg',
          thumbImage: 'assets/images/mdImages/home2.jpeg'
        }];
        this.counter = 1;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var self = this;
          setInterval(this.opensnack, 7000, self);
          this.route.params.subscribe(function (params) {
            _this.currentPage = params.page;
          });
        }
      }, {
        key: "opensnack",
        value: function opensnack(self) {
          if (self.counter == 5) {
            self.counter = 1;
          } else {
            self.counter = self.counter + 1;
          }
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll(e) {
          if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
            //For Mobile Devices
            if (window.pageYOffset < 400) {
              this.currentPage = "home";
            } else if (window.pageYOffset > 401 && window.pageYOffset < 2400) {
              this.currentPage = "ourjourney";
            } else if (window.pageYOffset > 2401 && window.pageYOffset < 4700) {
              this.currentPage = "menu";
            } else if (window.pageYOffset > 4701 && window.pageYOffset < 5600) {
              this.currentPage = "gallery";
            } else if (window.pageYOffset > 5601 && window.pageYOffset < 6000) {
              this.currentPage = "homedelivery";
            } else if (window.pageYOffset > 6001 && window.pageYOffset < 8100) {
              this.currentPage = "eventCatering";
            } else if (window.pageYOffset > 8101 && window.pageYOffset < 8800) {
              this.currentPage = "findus";
            } else if (window.pageYOffset > 8801) {
              this.currentPage = "reservation";
            }
          } else {
            //For Desktops
            if (window.pageYOffset < 400) {
              this.currentPage = "home";
            } else if (window.pageYOffset > 401 && window.pageYOffset < 1600) {
              this.currentPage = "ourjourney";
            } else if (window.pageYOffset > 1601 && window.pageYOffset < 3100) {
              this.currentPage = "menu";
            } else if (window.pageYOffset > 3101 && window.pageYOffset < 3600) {
              this.currentPage = "gallery";
            } else if (window.pageYOffset > 3601 && window.pageYOffset < 4200) {
              this.currentPage = "homedelivery";
            } else if (window.pageYOffset > 4201 && window.pageYOffset < 5400) {
              this.currentPage = "eventCatering";
            } else if (window.pageYOffset > 5401 && window.pageYOffset < 6100) {
              this.currentPage = "findus";
            } else if (window.pageYOffset > 6101) {
              this.currentPage = "reservation";
            }
          }

          if (window.pageYOffset > 200) {
            var element = document.getElementById('menu-bar');
            element.classList.add('sticky');
          } else {
            var _element = document.getElementById('menu-bar');

            _element.classList.remove('sticky');
          }
        }
      }, {
        key: "scroll",
        value: function scroll(sectionId) {
          var el = document.getElementById(sectionId);
          if (!el) return;
          var menuBar = document.getElementById('menu-bar');
          var offset = menuBar ? menuBar.offsetHeight : 0;
          var top = el.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: top,
            behavior: 'smooth'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      hostBindings: function HomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 287,
      vars: 6,
      consts: [["id", "home", 1, "hero-wrap", "container-fluid"], [1, "row", "h-100", "align-items-center"], [1, "col-sm-12", "p-0"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img1", "class", "slider-img", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img2", "class", "slider-img", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img3", "class", "slider-img", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img4", "class", "slider-img", 4, "ngIf"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img5", "class", "slider-img", 4, "ngIf"], ["id", "menu-bar"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-sm-4", "d-flex", "align-items-center"], [1, "logo-revolve"], ["src", "assets/images/mdImages/md_logo-removebg.png", "width", "75", "alt", "Metal Drafting"], [1, "text-uppercase", "m-0", "md-font", "ml-3"], [1, "col-sm-8"], [1, "navbar", "float-right"], [1, "menu-list"], [3, "click"], ["id", "aboutus", "data-aos", "fade-right", 1, "container"], [1, "row"], [1, "col-sm-12", "section-heading"], [1, "section-title"], [1, "title-underline"], [1, "col-sm-12"], [1, "section-desc"], ["id", "why-choose-us", 1, "why-choose-section"], [1, "container"], ["data-aos", "fade-up", 1, "col-sm-12", "section-heading"], [1, "row", "why-choose-list"], ["data-aos", "fade-up", "data-aos-delay", "50", 1, "col-sm-12", "col-md-6", "col-lg-4"], [1, "why-choose-item"], [1, "why-choose-num"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-aos", "fade-up", "data-aos-delay", "150", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-aos", "fade-up", "data-aos-delay", "250", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-sm-12", "col-md-6", "col-lg-4"], ["id", "services", "data-aos", "fade-right", 1, "services-section"], ["data-aos", "fade-up", 1, "row"], [1, "col-sm-6"], [1, "content-box"], ["aria-hidden", "true", 1, "fa", "fa-building"], ["data-aos", "fade-up", 1, "row", "mt-5"], ["data-aos", "fade-up", 1, "hr-divider"], ["id", "projects", 1, "container"], ["data-aos", "fade-right", 1, "row"], [1, "row", "mt-5"], [1, "col-sm-3"], [1, "projects-div"], ["src", "assets/images/mdImages/projects/p1.png", "width", "200", 1, "project-img"], ["src", "assets/images/mdImages/projects/p2.png", "width", "200", 1, "project-img"], ["src", "assets/images/mdImages/projects/p3.png", "width", "200", 1, "project-img"], ["src", "assets/images/mdImages/projects/p4.png", "width", "200", 1, "project-img"], ["id", "courses", 1, "container"], [1, "row", "mt-5", "text-center"], ["id", "steelcourses-table", 1, "table", "text-left"], ["data-aos", "fade-right"], [1, "fas", "fa-cog", "mr-2"], ["data-aos", "fade-left"], ["id", "contact", 1, "contact-section"], [1, "row", "contact-row"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "contact-card"], [1, "contact-card__icon"], [1, "fas", "fa-map-marker-alt"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-4"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-md-4"], ["data-aos", "fade-up", "data-aos-delay", "150", 1, "row", "contact-info-row"], [1, "col-sm-12", "col-md-6", "contact-info-item"], [1, "fas", "fa-envelope"], ["href", "mailto:info@metaldrafting.com"], [1, "fas", "fa-phone-alt"], ["href", "tel:+19294325545"], [1, "footer-section"], [1, "row", "footer-row"], [1, "col-md-6", "footer-brand"], [1, "col-md-6", "footer-credit", "text-md-right"], [1, "fas", "fa-heartbeat", "heart-pulse"], [1, "col-sm-12", "footer-copy", "text-center"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img1", 1, "slider-img"], [1, "col-sm-12", "col-md-9", "col-lg-8", "title-section"], [1, "hero-text-panel"], ["data-aos", "fade-right", "data-aos-duration", "500", 1, "text-uppercase", "landing-title"], [1, "col-sm-0", "col-md-3", "col-lg-4"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img2", 1, "slider-img"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img3", 1, "slider-img"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img4", 1, "slider-img"], ["data-aos", "fade-left", "data-aos-duration", "1000", "id", "slider-img5", 1, "slider-img"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 7, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 7, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_5_Template, 7, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_6_Template, 7, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_7_Template, 7, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Metal Drafting Engineering Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_19_listener() {
            return ctx.scroll("home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_23_listener() {
            return ctx.scroll("aboutus");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_27_listener() {
            return ctx.scroll("services");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "build");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_31_listener() {
            return ctx.scroll("projects");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "layers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Softwares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_35_listener() {
            return ctx.scroll("courses");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "school");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_39_listener() {
            return ctx.scroll("contact");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "phone_in_talk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Metal Drafting is a steel detailing group consisting of detailers and a project manager all dedicated to meeting and exceeding the detailing needs of our clients. In order to meet these needs, we use a combination of the latest technology coupled with the standards of the AISC,CISC and NISD in order to produce complete and precise drawings and details. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " We specialize in all aspects of steel detailing with our core strengths being Buildings ,Structural Steel and Hybrid Structures. We will also detail your miscellaneous steel, embedded steel, and anchor bolts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " We strive to be a high quality, dependable team striving to go above and beyond to ensure our customers meet their schedule demands, with cost effect. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Why Choose Us?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Expertise in steel detailing with over 20+ years of experience.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Quality and Timely Project Delivery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "24x7 Dedicated Client support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Well trained and Qualified workforce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Most Competitive Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "High customer satisfaction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "section", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Our Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Our customized steel detailing solutions is reperesntative of our commitment to quality and best results. The core focus here is quality drawings and designs for fabrication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Structural Steel Detailing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Using Tekla Structures and SDS/2,we produce high quality shop and erection drawings for a wide range of steel structures. Because we employ the use of BIM (Building Information Modeling) tools for the 3D modeling and detailing of every project, we are able to gain a full understanding of the structure and avoid potential erection and field issues through 3D visualization. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Miscellaneous Steel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Metal Drafting team has experience in miscellaneous steel detailing and has detailed many staircases, ladders, hand rails, mezzanines, platforms and other miscellaneous structural elements. We coordinate closely with our clients to ensure that we adhere to their standards ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "CNC Capablilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Tekla Structures and SDS/2 are programmed to generate a wide range of CNC files, in any of the formats commonly available in the industry. We can instantly generate .DWG, .DXF and other NC files for plates, and can produce CNC files for beam-lines and other automated fabrication lines. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " We produce a wide range of electronic reports such as Shipping Lists, Advanced Bill of Materials, Bolts (Shop and Field) Summaries, Point to Point Field Bolt Lists and many more material management lists. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "hr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Softwares");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "hr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "section", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Steel Courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " You will learn fundamentals of detailing, basic connection design, interpretation of structural and architectural drawings, welding symbols, preparation of anchor bolt plan, shop drawings and erection drawings. This course will also cover theoretical and basic training in most advanced detailing software ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "table", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Basic Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Introduction to Tekla Structures");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Basic 3D Modeling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "System Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Interactive Modeling & Building Custom Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Modeling Techniques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Structural Profiles and Materials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Numbering and reports");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Principles of working with drawings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Creating General Arrangement Drawings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Creating Assembly Drawings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Creating Single Part Drawings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Creating Anchor Bolt Plans");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Multi Drawings and multi numbering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "hr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "section", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Chennai Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "No 16, Second Floor, New Thandavarayan Street West, Purasawalkam,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Chennai - 600 007.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "US Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "209 Huron Ave., Suite 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Port Huron, MI 48060");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Canada Office");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "946 Cathcart Blvd.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Sarnia, Ontario Canada N7V 2N9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "info@metaldrafting.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "a", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "+1 (929) 432 5545");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "footer", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "Metal Drafting Engineering Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Private Limited ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Developed with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, " by R-Team Digital Solutions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter == 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.counter == 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", ctx.currentYear, " All rights reserved. ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      styles: [".hero-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  overflow-x: hidden;\n  padding-top: 0;\n}\n.hero-wrap[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  padding-top: 90px;\n  \n}\n.hero-wrap[_ngcontent-%COMP%]   .slider-img[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n#slider-img1[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('1.jpg');\n  height: 100%;\n  min-height: 100vh;\n  background-repeat: no-repeat !important;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n}\n#slider-img2[_ngcontent-%COMP%], #slider-img3[_ngcontent-%COMP%], #slider-img4[_ngcontent-%COMP%], #slider-img5[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  min-height: 100vh;\n  background-repeat: no-repeat !important;\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n}\n#slider-img2[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('2.jpeg');\n}\n#slider-img3[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('3.jpg');\n}\n#slider-img4[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('4.jpg');\n}\n#slider-img5[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35)), url('5.jpg');\n}\n.landing-section[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url('1.jpg');\n  height: 100%;\n  background-repeat: no-repeat !important;\n  background-size: cover;\n  width: 100%;\n}\n#header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  line-height: 1;\n  display: block;\n  padding: 5px 0;\n}\nlabel.heading1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #efba55;\n}\n#header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #efba55;\n  font-size: 25px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  border: none !important;\n}\n\n.logo-revolve[_ngcontent-%COMP%] {\n  display: inline-flex;\n  perspective: 400px;\n}\n.logo-revolve[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-animation: logoRevolve 8s linear infinite;\n          animation: logoRevolve 8s linear infinite;\n  transform-style: preserve-3d;\n}\n@-webkit-keyframes logoRevolve {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n@keyframes logoRevolve {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(360deg);\n  }\n}\n#menu-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  color: black;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.97);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n}\n#menu-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  padding: 15px;\n  margin: 0;\n}\n.hero-text-panel[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.65);\n  border-radius: 10px;\n  padding: 22px 28px;\n  max-width: 100%;\n  width: 100%;\n  min-width: 0;\n}\n.landing-title[_ngcontent-%COMP%] {\n  font-size: 37px;\n  font-weight: bold;\n  line-height: 1.5;\n  color: #ffffff;\n  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);\n}\n.title-section[_ngcontent-%COMP%] {\n  padding: 50px 40px;\n  margin-top: 0;\n}\n.read-more-btn[_ngcontent-%COMP%] {\n  background-color: #3b3b3b;\n  color: #ffffff;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 500;\n  margin: 0;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.title-underline[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 5%;\n  display: inline-block;\n  margin-bottom: 5px;\n  background-color: #ffa700;\n  border-radius: 5px;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.section-desc[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-size: 20px;\n  text-align: justify;\n}\n\n.why-choose-section[_ngcontent-%COMP%] {\n  padding: 50px 0 60px;\n  background: #fdf8ee;\n}\n.why-choose-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #4b3621;\n}\n.why-choose-section[_ngcontent-%COMP%]   .title-underline[_ngcontent-%COMP%] {\n  background-color: #d59c33;\n}\n.why-choose-list[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  row-gap: 1.25rem;\n}\n.why-choose-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem 1.1rem;\n  background: #fff;\n  border-radius: 12px;\n  border: 1px solid rgba(213, 156, 51, 0.25);\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);\n  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;\n  height: 100%;\n}\n.why-choose-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4b3621;\n  font-size: 1rem;\n  line-height: 1.5;\n  flex: 1;\n}\n.why-choose-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(213, 156, 51, 0.15);\n  border-color: rgba(213, 156, 51, 0.5);\n}\n.why-choose-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #d59c33, #f3c775);\n  color: #fff;\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.services-section[_ngcontent-%COMP%] {\n  padding: 50px 0 60px;\n  background: #fff7e1;\n}\n.services-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #2A365D;\n}\n.services-section[_ngcontent-%COMP%]   .title-underline[_ngcontent-%COMP%] {\n  background-color: #d59c33;\n}\n.services-section[_ngcontent-%COMP%]   .section-desc[_ngcontent-%COMP%] {\n  color: #495057;\n}\n.content-box[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  background: #fff;\n  border-radius: 12px;\n  min-height: 260px;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.content-box[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%], .content-box[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  color: #d59c33;\n}\n.content-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #4b3621;\n  font-size: 1.35rem;\n  margin-bottom: 10px;\n}\n.content-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #495057;\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.content-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(33, 116, 180, 0.15);\n  border-color: rgba(213, 156, 51, 0.4);\n}\n.content-box[_ngcontent-%COMP%]   .svg-inline--fa[_ngcontent-%COMP%], .content-box[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  font-size: 28px !important;\n  display: inline-block;\n  margin-right: 8px;\n  vertical-align: middle;\n}\n.content-box[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 0 !important;\n  vertical-align: middle;\n}\n.ng-image-slider[_ngcontent-%COMP%]   .ng-image-slider-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .main-inner[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%] {\n  margin: 50px 0;\n}\nul.menu-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  margin: 0 5px;\n}\n.landing-section[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url('1.jpg');\n  height: 100%;\n  background-repeat: no-repeat !important;\n  background-size: cover;\n  width: 100%;\n}\n#header[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n  line-height: 1;\n  display: block;\n  padding: 5px 0;\n}\nlabel.heading1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #efba55;\n}\n#header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #efba55;\n  font-size: 25px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 0px;\n  border: none !important;\n}\n#menu-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  padding: 15px;\n  margin: 0;\n  color: #666363;\n  position: relative;\n  overflow: hidden;\n}\n.landing-title[_ngcontent-%COMP%] {\n  font-size: 37px;\n  font-weight: bold;\n  line-height: 1.5;\n  color: #ffa700;\n}\n.title-section[_ngcontent-%COMP%] {\n  padding: 50px;\n}\n.read-more-btn[_ngcontent-%COMP%] {\n  background-color: #3b3b3b;\n  color: #ffffff;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 500;\n  margin: 0;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.title-underline[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 5%;\n  display: inline-block;\n  margin-bottom: 5px;\n  background-color: #ffa700;\n  border-radius: 5px;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\n.section-desc[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  font-size: 20px;\n}\n.ng-image-slider[_ngcontent-%COMP%]   .ng-image-slider-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .main-inner[_ngcontent-%COMP%]   .img-div[_ngcontent-%COMP%] {\n  margin: 50px 0;\n}\nul.menu-list[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  margin: 0 5px;\n}\n.md-font[_ngcontent-%COMP%] {\n  font-family: \"Metro\", Arial, Helvetica, sans-serif;\n  font-size: 17px;\n  line-height: 1.5;\n  color: #d59c33;\n}\n.project-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  \n}\n#steelcourses-table[_ngcontent-%COMP%] {\n  width: 75%;\n  margin: auto;\n}\n\n.contact-section[_ngcontent-%COMP%] {\n  padding: 50px 0 60px;\n  background: #fff2d5;\n}\n.contact-section[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  color: #2A365D;\n}\n.contact-section[_ngcontent-%COMP%]   .title-underline[_ngcontent-%COMP%] {\n  background-color: #d59c33;\n}\n.contact-row[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.contact-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px 20px;\n  height: 100%;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  text-align: center;\n}\n.contact-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #4b3621;\n  font-size: 1.15rem;\n  margin-bottom: 12px;\n}\n.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #495057;\n  font-size: 0.95rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.contact-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 28px rgba(33, 116, 180, 0.12);\n}\n.contact-card__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #d59c33, #f3c775);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.contact-info-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 20px;\n}\n.contact-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 14px 20px;\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #dee2e6;\n  transition: transform 0.25s ease, border-color 0.25s ease;\n}\n.contact-info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d59c33;\n  font-size: 1.2rem;\n}\n.contact-info-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4b3621;\n  font-weight: 500;\n  text-decoration: none;\n}\n.contact-info-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  border-color: #d59c33;\n}\n\n.footer-section[_ngcontent-%COMP%] {\n  padding: 28px 0 24px;\n  background: #2A365D;\n  color: #cbd5e0;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-row[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n  font-size: 0.95rem;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-credit[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #94a3b8;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-copy[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.footer-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbd5e0;\n}\n.heart-pulse[_ngcontent-%COMP%] {\n  -webkit-animation: heartPulse 1.2s ease-in-out infinite;\n          animation: heartPulse 1.2s ease-in-out infinite;\n  color: #f87171 !important;\n}\n@-webkit-keyframes heartPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.9;\n  }\n}\n@keyframes heartPulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.9;\n  }\n}\n\n.project-img[_ngcontent-%COMP%] {\n  transition: transform 0.4s ease;\n}\n.projects-div[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\n.projects-div[_ngcontent-%COMP%]:hover   .project-img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.section-heading[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  -webkit-animation: fadeInUp 0.6s ease-out;\n          animation: fadeInUp 0.6s ease-out;\n}\n@-webkit-keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: color 0.2s ease, transform 0.2s ease;\n}\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  bottom: 8px;\n  height: 2px;\n  background: linear-gradient(90deg, #df6301, #d59c33);\n  transform: scaleX(0);\n  transform-origin: left center;\n  transition: transform 0.25s ease-out;\n}\n.menu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::after {\n  transform: scaleX(1);\n}\n.read-more-btn[_ngcontent-%COMP%] {\n  transition: transform 0.25s ease, background-color 0.25s ease;\n}\n.read-more-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nb3V0aGFtc2FpZS9Eb2N1bWVudHMvUi1UZWFtL01ldGFsX0RyYWZ0aW5nX1ByaXZhdGVfTGltaXRlZC9tZXRhbGRyYWZ0aW5nLXdlYnNpdGUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBd0IsaUJBQUE7QUFDQSxjQUFBO0FBQ0EsaUNBQUE7QUFDQSxpQkFBQTtBQUNBLG9CQUFBO0FBRXhCLG9EQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FERUE7RUFDRSxpQkFBQTtFQUFtQix5QkFBQTtBQ0VyQjtBREFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0dGO0FEREM7RUFDRyxrQkFBQTtFQUNBLHlGQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FEREE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNJSjtBREZDO0VBQ0csMEZBQUE7QUNLSjtBREhBO0VBQ0kseUZBQUE7QUNNSjtBREpBO0VBQ0kseUZBQUE7QUNPSjtBRExBO0VBQ0kseUZBQUE7QUNRSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ09KO0FESEE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ01KO0FESEE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNNSjtBREhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNNSjtBREhBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQ01KO0FESEEsOEJBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUNNRjtBRExFO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLDRCQUFBO0FDT0o7QURKQTtFQUNFO0lBQU8sd0JBQUE7RUNRUDtFRFBBO0lBQUssMEJBQUE7RUNVTDtBQUNGO0FEYkE7RUFDRTtJQUFPLHdCQUFBO0VDUVA7RURQQTtJQUFLLDBCQUFBO0VDVUw7QUFDRjtBRFJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDBDQUFBO0FDVUo7QURQQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNVSjtBRFBDO0VBQ0csK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVUo7QURQQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FDVUo7QURQQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ1VKO0FEUEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNVSjtBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ1VKO0FEUEE7RUFDSSxnQkFBQTtBQ1VKO0FEUEE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDVUo7QURQQTtFQUNJLGNBQUE7QUNVSjtBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNVSjtBRFBBLDBCQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0FDVUY7QURURTtFQUFpQixjQTdLTDtBQ3lMZDtBRFhFO0VBQW1CLHlCQWxMUDtBQ2dNZDtBRFpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ2VGO0FEYkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSwwQ0FBQTtFQUNBLGdGQUFBO0VBQ0EsWUFBQTtBQ2dCRjtBRGZFO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FDaUJKO0FEZkU7RUFDRSwyQkFBQTtFQUNBLCtDQUFBO0VBQ0EscUNBQUE7QUNpQko7QURkQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNpQkY7QURkQSwyQ0FBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQ2lCRjtBRGhCRTtFQUFpQixjQUFBO0FDbUJuQjtBRGxCRTtFQUFtQix5QkFuT1A7QUN3UGQ7QURwQkU7RUFBZ0IsY0FBQTtBQ3VCbEI7QURwQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMENBQUE7RUFDQSxxREFBQTtBQ3VCSjtBRHRCSTtFQUF1QixjQS9PYjtBQ3dRZDtBRHhCSTtFQUNFLGNBN09RO0VBOE9SLGtCQUFBO0VBQ0EsbUJBQUE7QUMwQk47QUR4Qkk7RUFBUSxjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGtCQUFBO0FDNkI5QztBRDVCSTtFQUNFLDJCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxxQ0FBQTtBQzhCTjtBRDFCQTs7RUFFRywwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQzZCSDtBRDFCQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQzZCSjtBRDFCQTtFQUNJLGNBQUE7QUM2Qko7QUR0QkE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUN5Qko7QUR0QkE7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDeUJKO0FEckJBO0VBQ0ksMkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN3Qko7QURyQkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUN3Qko7QURyQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3dCSjtBRHJCQTtFQUNJLGlCQUFBO0VBQ0EsdUJBQUE7QUN3Qko7QURyQkE7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN3Qko7QURyQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUN3Qko7QURyQkE7RUFDSSxhQUFBO0FDd0JKO0FEckJBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDd0JKO0FEckJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ3dCSjtBRHJCQTtFQUNJLGdCQUFBO0FDd0JKO0FEckJBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3dCSjtBRHJCQTtFQUNJLGNBQUE7QUN3Qko7QURyQkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUN3Qko7QURyQkE7RUFDSSxjQUFBO0FDd0JKO0FEckJBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FDd0JKO0FEckJBO0VBQ0ksa0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDd0JKO0FEckJFO0VBQ0UscUJBQUE7RUFBdUIscUZBQUE7QUN5QjNCO0FEdEJFO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUN5Qk47QUR0QkEsdUJBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUN5QkY7QUR4QkU7RUFBaUIsY0FBQTtBQzJCbkI7QUQxQkU7RUFBbUIseUJBM1lQO0FDd2FkO0FEM0JBO0VBQWUsbUJBQUE7QUMrQmY7QUQ5QkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7QUNpQ0Y7QURoQ0U7RUFBSyxjQW5aTztFQW1aYyxrQkFBQTtFQUFvQixtQkFBQTtBQ3FDaEQ7QURwQ0U7RUFBSSxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLFNBQUE7QUMwQzVEO0FEekNFO0VBQ0UsMkJBQUE7RUFDQSxnREFBQTtBQzJDSjtBRHhDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUMyQ0Y7QUR6Q0E7RUFDRSx1QkFBQTtFQUNBLFNBQUE7QUM0Q0Y7QUQxQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlEQUFBO0FDNkNGO0FENUNFO0VBQUksY0F4YlE7RUF3YmEsaUJBQUE7QUNnRDNCO0FEL0NFO0VBQUksY0FyYlE7RUFxYmEsZ0JBQUE7RUFBa0IscUJBQUE7QUNvRDdDO0FEbkRFO0VBQ0Usc0JBQUE7RUFDQSxxQkE1YlU7QUNpZmQ7QURqREEsV0FBQTtBQUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNvREY7QURuREU7RUFBYyxtQkFBQTtBQ3NEaEI7QURyREU7RUFBZ0IsY0FBQTtFQUFnQixrQkFBQTtBQ3lEbEM7QUR4REU7RUFBaUIsaUJBQUE7RUFBbUIsY0FBQTtBQzREdEM7QUQzREU7RUFBZSxrQkFBQTtFQUFvQixjQUFBO0FDK0RyQztBRDlERTtFQUFJLGNBQUE7QUNpRU47QUQvREE7RUFDRSx1REFBQTtVQUFBLCtDQUFBO0VBQ0EseUJBQUE7QUNrRUY7QURoRUE7RUFDRTtJQUFXLG1CQUFBO0lBQXFCLFVBQUE7RUNxRWhDO0VEcEVBO0lBQU0sc0JBQUE7SUFBd0IsWUFBQTtFQ3dFOUI7QUFDRjtBRDNFQTtFQUNFO0lBQVcsbUJBQUE7SUFBcUIsVUFBQTtFQ3FFaEM7RURwRUE7SUFBTSxzQkFBQTtJQUF3QixZQUFBO0VDd0U5QjtBQUNGO0FEdEVBLHFCQUFBO0FBQ0E7RUFDRSwrQkFBQTtBQ3dFRjtBRHRFQTtFQUNFLCtCQUFBO0FDeUVGO0FEeEVFO0VBQ0Usc0JBQUE7QUMwRUo7QUR2RUE7RUFDRSx5Q0FBQTtVQUFBLGlDQUFBO0FDMEVGO0FEeEVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUMyRUY7RUR6RUE7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUMyRUY7QUFDRjtBRG5GQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDMkVGO0VEekVBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VDMkVGO0FBQ0Y7QUR6RUE7RUFDRSxnREFBQTtBQzJFRjtBRDFFRTtFQUNFLDBCQUFBO0FDNEVKO0FEeEVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FDMkVGO0FEeEVBO0VBQ0Usb0JBQUE7QUMyRUY7QUR6RUE7RUFDRSw2REFBQTtBQzRFRjtBRDNFRTtFQUNFLDJCQUFBO0FDNkVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2UtY29sb3IxOiAjZDU5YzMzOyAgLyogcHJpbWFyeSBnb2xkICovXG4kYmFzZS1jb2xvcjI6ICNmM2M3NzU7ICAvKiBzb2Z0IGdvbGQgKi9cbiRiYXNlLWNvbG9yMzogI2RmNjMwMTsgIC8qIGFjY2VudCBvcmFuZ2UgKG1hdGNoZXMgc2l0ZSkgKi9cbiRiYXNlLWNvbG9yNDogI2Y3YzVhYzsgIC8qIGxpZ2h0IGFjY2VudCAqL1xuJGJhc2UtY29sb3I1OiAjNGIzNjIxOyAgLyogZGVlcCBicm93biB0ZXh0ICovXG5cbi8qIEhlcm86IGZ1bGwgdmlld3BvcnQgaGVpZ2h0IGFuZCBjZW50ZXJlZCBjb250ZW50ICovXG4uaGVyby13cmFwIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uaGVyby13cmFwID4gLnJvdyB7XG4gIHBhZGRpbmctdG9wOiA5MHB4OyAvKiBjbGVhciBmaXhlZCBtZW51LWJhciAqL1xufVxuLmhlcm8td3JhcCAuc2xpZGVyLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4gI3NsaWRlci1pbWcxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC41NSksIHJnYmEoMCwwLDAsMC4zNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21kSW1hZ2VzLzEuanBnXCIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiNzbGlkZXItaW1nMiwgI3NsaWRlci1pbWczLCAjc2xpZGVyLWltZzQsICNzbGlkZXItaW1nNSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4gI3NsaWRlci1pbWcyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjU1KSwgcmdiYSgwLDAsMCwwLjM1KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMi5qcGVnXCIpO1xufVxuI3NsaWRlci1pbWczIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjU1KSwgcmdiYSgwLDAsMCwwLjM1KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMy5qcGdcIik7XG59XG4jc2xpZGVyLWltZzQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNTUpLCByZ2JhKDAsMCwwLDAuMzUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tZEltYWdlcy80LmpwZ1wiKTtcbn1cbiNzbGlkZXItaW1nNSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC41NSksIHJnYmEoMCwwLDAsMC4zNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21kSW1hZ2VzLzUuanBnXCIpO1xufVxuXG5cbi5sYW5kaW5nLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tZEltYWdlcy8xLmpwZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7ICAgXG59XG5cblxuI2hlYWRlciBsYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG5sYWJlbC5oZWFkaW5nMSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNlZmJhNTU7XG59XG5cbiNoZWFkZXIgbWF0LWljb24ge1xuICAgIGNvbG9yOiAjZWZiYTU1O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBMb2dvIDNEIHJldm9sdmUgYW5pbWF0aW9uICovXG4ubG9nby1yZXZvbHZlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBlcnNwZWN0aXZlOiA0MDBweDtcbiAgaW1nIHtcbiAgICBhbmltYXRpb246IGxvZ29SZXZvbHZlIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvZ29SZXZvbHZlIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpOyB9XG59XG5cbiNtZW51LWJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLDAsMCwwLjA4KTtcbn1cblxuI21lbnUtYmFyIGxpIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuIC5oZXJvLXRleHQtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMnB4IDI4cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMDtcbiB9XG5cbi5sYW5kaW5nLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMzdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwwLjcpO1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNTBweCA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5yZWFkLW1vcmUtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7ICAgXG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5zZWN0aW9uLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi50aXRsZS11bmRlcmxpbmUge1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmE3MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmF2YmFyIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnNlY3Rpb24tZGVzYyB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLyogV2h5IENob29zZSBVcyBzZWN0aW9uICovXG4ud2h5LWNob29zZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAwIDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZGY4ZWU7XG4gIC5zZWN0aW9uLXRpdGxlIHsgY29sb3I6ICRiYXNlLWNvbG9yNTsgfVxuICAudGl0bGUtdW5kZXJsaW5lIHsgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3IxOyB9XG59XG4ud2h5LWNob29zZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcm93LWdhcDogMS4yNXJlbTtcbn1cbi53aHktY2hvb3NlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuMXJlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTMsIDE1NiwgNTEsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNHB4IHJnYmEoMCwwLDAsMC4wNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3gtc2hhZG93IDAuMjVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjI1cyBlYXNlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzRiMzYyMTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmbGV4OiAxO1xuICB9XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMjEzLCAxNTYsIDUxLCAwLjE1KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoJGJhc2UtY29sb3IxLCAwLjUpO1xuICB9XG59XG4ud2h5LWNob29zZS1udW0ge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkYmFzZS1jb2xvcjEsICRiYXNlLWNvbG9yMik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBPdXIgU2VydmljZXMgc2VjdGlvbiAtIGltcHJvdmVkIGNvbG9ycyAqL1xuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4IDAgNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjdlMTtcbiAgLnNlY3Rpb24tdGl0bGUgeyBjb2xvcjogIzJBMzY1RDsgfVxuICAudGl0bGUtdW5kZXJsaW5lIHsgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3IxOyB9XG4gIC5zZWN0aW9uLWRlc2MgeyBjb2xvcjogIzQ5NTA1NzsgfVxufVxuXG4uY29udGVudC1ib3gge1xuICAgIHBhZGRpbmc6IDI4cHggMjRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWluLWhlaWdodDogMjYwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4wNik7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gICAgLnN2Zy1pbmxpbmUtLWZhLCAuZmEgeyBjb2xvcjogJGJhc2UtY29sb3IxOyB9XG4gICAgaDEge1xuICAgICAgY29sb3I6ICRiYXNlLWNvbG9yNTtcbiAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIGxhYmVsIHsgY29sb3I6ICM0OTUwNTc7IGxpbmUtaGVpZ2h0OiAxLjY7IGZvbnQtc2l6ZTogMC45NXJlbTsgfVxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgYm94LXNoYWRvdzogMCAxMnB4IDI4cHggcmdiYSgzMywgMTE2LCAxODAsIDAuMTUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRiYXNlLWNvbG9yMSwgMC40KTtcbiAgICB9XG59XG5cbi5jb250ZW50LWJveCAuc3ZnLWlubGluZS0tZmEsXG4uY29udGVudC1ib3ggLmZhIHtcbiAgIGZvbnQtc2l6ZTogMjhweCAhaW1wb3J0YW50O1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGVudC1ib3ggaDEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5uZy1pbWFnZS1zbGlkZXIgLm5nLWltYWdlLXNsaWRlci1jb250YWluZXIgLm1haW4gLm1haW4taW5uZXIgLmltZy1kaXYge1xuICAgIG1hcmdpbjogNTBweCAwO1xufVxuXG4vLyAuZm9vdGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyB9XG5cbnVsLm1lbnUtbGlzdCBtYXQtaWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBtYXJnaW46IDAgNXB4O1xufSAgIFxuXG4ubGFuZGluZy1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMS5qcGdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlOyAgIFxufVxuXG5cbiNoZWFkZXIgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cblxubGFiZWwuaGVhZGluZzEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjZWZiYTU1O1xufVxuXG4jaGVhZGVyIG1hdC1pY29uIHtcbiAgICBjb2xvcjogI2VmYmE1NTtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI21lbnUtYmFyIGxpIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzY2NjM2MztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhbmRpbmctdGl0bGV7XG4gICAgZm9udC1zaXplOiAzN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNmZmE3MDA7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4O1xufVxuXG4ucmVhZC1tb3JlLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiOyAgIFxuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udGl0bGUtdW5kZXJsaW5lIHtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5hdmJhciB7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zZWN0aW9uLWRlc2Mge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubmctaW1hZ2Utc2xpZGVyIC5uZy1pbWFnZS1zbGlkZXItY29udGFpbmVyIC5tYWluIC5tYWluLWlubmVyIC5pbWctZGl2IHtcbiAgICBtYXJnaW46IDUwcHggMDtcbn1cblxudWwubWVudS1saXN0IG1hdC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgIG1hcmdpbjogMCA1cHg7XG59XG5cbi5tZC1mb250e1xuICAgIGZvbnQtZmFtaWx5OiBcIk1ldHJvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICNkNTljMzM7XG4gIH1cblxuICAucHJvamVjdC1pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbiAgfVxuXG4gICNzdGVlbGNvdXJzZXMtdGFibGUge1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4vKiBDb250YWN0IFVzIHNlY3Rpb24gKi9cbi5jb250YWN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4IDAgNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjJkNTtcbiAgLnNlY3Rpb24tdGl0bGUgeyBjb2xvcjogIzJBMzY1RDsgfVxuICAudGl0bGUtdW5kZXJsaW5lIHsgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3IxOyB9XG59XG4uY29udGFjdC1yb3cgeyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4uY29udGFjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjA2KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDMgeyBjb2xvcjogJGJhc2UtY29sb3I1OyBmb250LXNpemU6IDEuMTVyZW07IG1hcmdpbi1ib3R0b206IDEycHg7IH1cbiAgcCB7IGNvbG9yOiAjNDk1MDU3OyBmb250LXNpemU6IDAuOTVyZW07IGxpbmUtaGVpZ2h0OiAxLjY7IG1hcmdpbjogMDsgfVxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDI4cHggcmdiYSgzMywgMTE2LCAxODAsIDAuMTIpO1xuICB9XG59XG4uY29udGFjdC1jYXJkX19pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkYmFzZS1jb2xvcjEsICRiYXNlLWNvbG9yMik7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uY29udGFjdC1pbmZvLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4uY29udGFjdC1pbmZvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcbiAgaSB7IGNvbG9yOiAkYmFzZS1jb2xvcjE7IGZvbnQtc2l6ZTogMS4ycmVtOyB9XG4gIGEgeyBjb2xvcjogJGJhc2UtY29sb3I1OyBmb250LXdlaWdodDogNTAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICBib3JkZXItY29sb3I6ICRiYXNlLWNvbG9yMTtcbiAgfVxufVxuXG4vKiBGb290ZXIgKi9cbi5mb290ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI4cHggMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMkEzNjVEO1xuICBjb2xvcjogI2NiZDVlMDtcbiAgLmZvb3Rlci1yb3cgeyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XG4gIC5mb290ZXItYnJhbmQgeyBjb2xvcjogI2UyZThmMDsgZm9udC1zaXplOiAwLjk1cmVtOyB9XG4gIC5mb290ZXItY3JlZGl0IHsgZm9udC1zaXplOiAwLjlyZW07IGNvbG9yOiAjOTRhM2I4OyB9XG4gIC5mb290ZXItY29weSB7IGZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6ICM5NGEzYjg7IH1cbiAgYSB7IGNvbG9yOiAjY2JkNWUwOyB9XG59XG4uaGVhcnQtcHVsc2Uge1xuICBhbmltYXRpb246IGhlYXJ0UHVsc2UgMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgY29sb3I6ICNmODcxNzEgIWltcG9ydGFudDtcbn1cbkBrZXlmcmFtZXMgaGVhcnRQdWxzZSB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpOyBvcGFjaXR5OiAwLjk7IH1cbn1cblxuLyogQW5pbWF0ZWQgdmlzdWFscyAqL1xuLnByb2plY3QtaW1nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcbn1cbi5wcm9qZWN0cy1kaXYge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAmOmhvdmVyIC5wcm9qZWN0LWltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcbiAgfVxufVxuLnNlY3Rpb24taGVhZGluZyAuc2VjdGlvbi10aXRsZSB7XG4gIGFuaW1hdGlvbjogZmFkZUluVXAgMC42cyBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5tZW51LWxpc3QgbGkge1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICB9XG59XG5cbi5tZW51LWxpc3QgbGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiA4cHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRiYXNlLWNvbG9yMywgJGJhc2UtY29sb3IxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XG59XG5cbi5tZW51LWxpc3QgbGk6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG4ucmVhZC1tb3JlLWJ0biB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxufSIsIi8qIHByaW1hcnkgZ29sZCAqL1xuLyogc29mdCBnb2xkICovXG4vKiBhY2NlbnQgb3JhbmdlIChtYXRjaGVzIHNpdGUpICovXG4vKiBsaWdodCBhY2NlbnQgKi9cbi8qIGRlZXAgYnJvd24gdGV4dCAqL1xuLyogSGVybzogZnVsbCB2aWV3cG9ydCBoZWlnaHQgYW5kIGNlbnRlcmVkIGNvbnRlbnQgKi9cbi5oZXJvLXdyYXAge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmhlcm8td3JhcCA+IC5yb3cge1xuICBwYWRkaW5nLXRvcDogOTBweDtcbiAgLyogY2xlYXIgZml4ZWQgbWVudS1iYXIgKi9cbn1cblxuLmhlcm8td3JhcCAuc2xpZGVyLWltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiNzbGlkZXItaW1nMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41NSksIHJnYmEoMCwgMCwgMCwgMC4zNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21kSW1hZ2VzLzEuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNzbGlkZXItaW1nMiwgI3NsaWRlci1pbWczLCAjc2xpZGVyLWltZzQsICNzbGlkZXItaW1nNSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc2xpZGVyLWltZzIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjU1KSwgcmdiYSgwLCAwLCAwLCAwLjM1KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMi5qcGVnXCIpO1xufVxuXG4jc2xpZGVyLWltZzMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjU1KSwgcmdiYSgwLCAwLCAwLCAwLjM1KSksIHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMy5qcGdcIik7XG59XG5cbiNzbGlkZXItaW1nNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNTUpLCByZ2JhKDAsIDAsIDAsIDAuMzUpKSwgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9tZEltYWdlcy80LmpwZ1wiKTtcbn1cblxuI3NsaWRlci1pbWc1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41NSksIHJnYmEoMCwgMCwgMCwgMC4zNSkpLCB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21kSW1hZ2VzLzUuanBnXCIpO1xufVxuXG4ubGFuZGluZy1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL21kSW1hZ2VzLzEuanBnXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNoZWFkZXIgbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbmxhYmVsLmhlYWRpbmcxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZWZiYTU1O1xufVxuXG4jaGVhZGVyIG1hdC1pY29uIHtcbiAgY29sb3I6ICNlZmJhNTU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qIExvZ28gM0QgcmV2b2x2ZSBhbmltYXRpb24gKi9cbi5sb2dvLXJldm9sdmUge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGVyc3BlY3RpdmU6IDQwMHB4O1xufVxuLmxvZ28tcmV2b2x2ZSBpbWcge1xuICBhbmltYXRpb246IGxvZ29SZXZvbHZlIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuQGtleWZyYW1lcyBsb2dvUmV2b2x2ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbiNtZW51LWJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpO1xuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbiNtZW51LWJhciBsaSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5oZXJvLXRleHQtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMnB4IDI4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmxhbmRpbmctdGl0bGUge1xuICBmb250LXNpemU6IDM3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCA0MHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4ucmVhZC1tb3JlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnRpdGxlLXVuZGVybGluZSB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnNlY3Rpb24tZGVzYyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLyogV2h5IENob29zZSBVcyBzZWN0aW9uICovXG4ud2h5LWNob29zZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAwIDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZGY4ZWU7XG59XG4ud2h5LWNob29zZS1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICM0YjM2MjE7XG59XG4ud2h5LWNob29zZS1zZWN0aW9uIC50aXRsZS11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU5YzMzO1xufVxuXG4ud2h5LWNob29zZS1saXN0IHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgcm93LWdhcDogMS4yNXJlbTtcbn1cblxuLndoeS1jaG9vc2UtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS4xcmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMywgMTU2LCA1MSwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2U7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53aHktY2hvb3NlLWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0YjM2MjE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZmxleDogMTtcbn1cbi53aHktY2hvb3NlLWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgyMTMsIDE1NiwgNTEsIDAuMTUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjEzLCAxNTYsIDUxLCAwLjUpO1xufVxuXG4ud2h5LWNob29zZS1udW0ge1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDU5YzMzLCAjZjNjNzc1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIE91ciBTZXJ2aWNlcyBzZWN0aW9uIC0gaW1wcm92ZWQgY29sb3JzICovXG4uc2VydmljZXMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggMCA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmN2UxO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLnNlY3Rpb24tdGl0bGUge1xuICBjb2xvcjogIzJBMzY1RDtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC50aXRsZS11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU5YzMzO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLnNlY3Rpb24tZGVzYyB7XG4gIGNvbG9yOiAjNDk1MDU3O1xufVxuXG4uY29udGVudC1ib3gge1xuICBwYWRkaW5nOiAyOHB4IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xufVxuLmNvbnRlbnQtYm94IC5zdmctaW5saW5lLS1mYSwgLmNvbnRlbnQtYm94IC5mYSB7XG4gIGNvbG9yOiAjZDU5YzMzO1xufVxuLmNvbnRlbnQtYm94IGgxIHtcbiAgY29sb3I6ICM0YjM2MjE7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jb250ZW50LWJveCBsYWJlbCB7XG4gIGNvbG9yOiAjNDk1MDU3O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uY29udGVudC1ib3g6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMzMsIDExNiwgMTgwLCAwLjE1KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIxMywgMTU2LCA1MSwgMC40KTtcbn1cblxuLmNvbnRlbnQtYm94IC5zdmctaW5saW5lLS1mYSxcbi5jb250ZW50LWJveCAuZmEge1xuICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRlbnQtYm94IGgxIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmctaW1hZ2Utc2xpZGVyIC5uZy1pbWFnZS1zbGlkZXItY29udGFpbmVyIC5tYWluIC5tYWluLWlubmVyIC5pbWctZGl2IHtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbnVsLm1lbnUtbGlzdCBtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5sYW5kaW5nLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbWRJbWFnZXMvMS5qcGdcIik7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2hlYWRlciBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxubGFiZWwuaGVhZGluZzEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNlZmJhNTU7XG59XG5cbiNoZWFkZXIgbWF0LWljb24ge1xuICBjb2xvcjogI2VmYmE1NTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4udGFibGUgdGQsIC50YWJsZSB0aCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuI21lbnUtYmFyIGxpIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM2NjYzNjM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhbmRpbmctdGl0bGUge1xuICBmb250LXNpemU6IDM3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI2ZmYTcwMDtcbn1cblxuLnRpdGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4ucmVhZC1tb3JlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnRpdGxlLXVuZGVybGluZSB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uYXZiYXIge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnNlY3Rpb24tZGVzYyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm5nLWltYWdlLXNsaWRlciAubmctaW1hZ2Utc2xpZGVyLWNvbnRhaW5lciAubWFpbiAubWFpbi1pbm5lciAuaW1nLWRpdiB7XG4gIG1hcmdpbjogNTBweCAwO1xufVxuXG51bC5tZW51LWxpc3QgbWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4ubWQtZm9udCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1ldHJvXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICNkNTljMzM7XG59XG5cbi5wcm9qZWN0LWltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbn1cblxuI3N0ZWVsY291cnNlcy10YWJsZSB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLyogQ29udGFjdCBVcyBzZWN0aW9uICovXG4uY29udGFjdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweCAwIDYwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmYyZDU7XG59XG4uY29udGFjdC1zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcbiAgY29sb3I6ICMyQTM2NUQ7XG59XG4uY29udGFjdC1zZWN0aW9uIC50aXRsZS11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU5YzMzO1xufVxuXG4uY29udGFjdC1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uY29udGFjdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMjRweCAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWNhcmQgaDMge1xuICBjb2xvcjogIzRiMzYyMTtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLmNvbnRhY3QtY2FyZCBwIHtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRhY3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI4cHggcmdiYSgzMywgMTE2LCAxODAsIDAuMTIpO1xufVxuXG4uY29udGFjdC1jYXJkX19pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZDU5YzMzLCAjZjNjNzc1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmNvbnRhY3QtaW5mby1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uY29udGFjdC1pbmZvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLCBib3JkZXItY29sb3IgMC4yNXMgZWFzZTtcbn1cbi5jb250YWN0LWluZm8taXRlbSBpIHtcbiAgY29sb3I6ICNkNTljMzM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmNvbnRhY3QtaW5mby1pdGVtIGEge1xuICBjb2xvcjogIzRiMzYyMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmNvbnRhY3QtaW5mby1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgYm9yZGVyLWNvbG9yOiAjZDU5YzMzO1xufVxuXG4vKiBGb290ZXIgKi9cbi5mb290ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDI4cHggMCAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjMkEzNjVEO1xuICBjb2xvcjogI2NiZDVlMDtcbn1cbi5mb290ZXItc2VjdGlvbiAuZm9vdGVyLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4uZm9vdGVyLXNlY3Rpb24gLmZvb3Rlci1icmFuZCB7XG4gIGNvbG9yOiAjZTJlOGYwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uZm9vdGVyLXNlY3Rpb24gLmZvb3Rlci1jcmVkaXQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6ICM5NGEzYjg7XG59XG4uZm9vdGVyLXNlY3Rpb24gLmZvb3Rlci1jb3B5IHtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBjb2xvcjogIzk0YTNiODtcbn1cbi5mb290ZXItc2VjdGlvbiBhIHtcbiAgY29sb3I6ICNjYmQ1ZTA7XG59XG5cbi5oZWFydC1wdWxzZSB7XG4gIGFuaW1hdGlvbjogaGVhcnRQdWxzZSAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBjb2xvcjogI2Y4NzE3MSAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGhlYXJ0UHVsc2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cbi8qIEFuaW1hdGVkIHZpc3VhbHMgKi9cbi5wcm9qZWN0LWltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG5cbi5wcm9qZWN0cy1kaXYge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuLnByb2plY3RzLWRpdjpob3ZlciAucHJvamVjdC1pbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xufVxuXG4uc2VjdGlvbi1oZWFkaW5nIC5zZWN0aW9uLXRpdGxlIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjZzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG4ubWVudS1saXN0IGxpIHtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xufVxuLm1lbnUtbGlzdCBsaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xufVxuXG4ubWVudS1saXN0IGxpOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogOHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZGY2MzAxLCAjZDU5YzMzKTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XG59XG5cbi5tZW51LWxpc3QgbGk6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG59XG5cbi5yZWFkLW1vcmUtYnRuIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZTtcbn1cbi5yZWFkLW1vcmUtYnRuOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xufSJdfQ== */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(300)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])])]
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
          }]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        onWindowScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/info-modal/info-modal.component.ts": function srcAppInfoModalInfoModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoModalComponent", function () {
      return InfoModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var InfoModalComponent = /*#__PURE__*/function () {
      function InfoModalComponent(dialogRef) {
        _classCallCheck(this, InfoModalComponent);

        this.dialogRef = dialogRef;
        dialogRef.disableClose = true;
      }

      _createClass(InfoModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InfoModalComponent;
    }();

    InfoModalComponent.ɵfac = function InfoModalComponent_Factory(t) {
      return new (t || InfoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
    };

    InfoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoModalComponent,
      selectors: [["app-info-modal"]],
      decls: 4,
      vars: 0,
      consts: [["mat-dialog-close", "", 1, "close-notify"], [1, "mat-typography"], ["src", "assets/images/QuickNote.jpg", 1, "notification-img"]],
      template: function InfoModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tbW9kYWwvaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-info-modal',
          templateUrl: './info-modal.component.html',
          styleUrls: ['./info-modal.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gouthamsaie/Documents/R-Team/Metal_Drafting_Private_Limited/metaldrafting-website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
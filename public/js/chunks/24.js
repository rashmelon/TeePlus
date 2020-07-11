(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _combination_ShowSingle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combination/ShowSingle */ "./resources/js/src/views/combination/ShowSingle.vue");
/* harmony import */ var _criteria_ShowSingle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../criteria/ShowSingle */ "./resources/js/src/views/criteria/ShowSingle.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit",
  data: function data() {
    return {
      form: {},
      uploadedImage: null,
      is_requesting: false,
      combinations: [],
      criterias: []
    };
  },
  components: {
    ShowCombinations: _combination_ShowSingle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ShowCriterias: _criteria_ShowSingle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getCategory();
  },
  methods: {
    getCategory: function getCategory() {
      var _this = this;

      // this.$vs.loading({container: this.$refs.loadingContainer.$el, scale: 0.5});
      this.$store.dispatch('category/view', this.$route.params.id).then(function (response) {
        _this.form = response.data.data; // preview used image

        if (_this.form.image) {
          _this.uploadedImage = _this.form.image.url;
        }

        _this.getCombinations();

        _this.getCriterias();
      }).catch(function (error) {
        console.log(error);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getCombinations: function getCombinations() {
      var _this2 = this;

      this.$store.dispatch('combination/getData', "?category=".concat(this.$route.params.id)).then(function (response) {
        _this2.combinations = response.data.data;
      }).catch(function (error) {
        console.log(error);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getCriterias: function getCriterias() {
      var _this3 = this;

      this.$store.dispatch('criteria/getData', "?category=".concat(this.$route.params.id)).then(function (response) {
        _this3.criterias = response.data.data;
      }).catch(function (error) {
        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.can("view-category")
      ? _c("div", { staticClass: "w-full mb-base" }, [
          _c(
            "div",
            { ref: "loadingContainer" },
            [
              _c(
                "vx-card",
                { staticClass: "my-5", attrs: { "collapse-action": "" } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c("div", { staticClass: "vx-col md:w-6/6 w-full mb-3" }, [
                      _c(
                        "div",
                        {
                          staticClass: "image-preview",
                          staticStyle: { display: "inline-flex" }
                        },
                        [
                          _c("img", {
                            staticClass: "preview-large",
                            attrs: {
                              src: _vm.uploadedImage
                                ? _vm.uploadedImage
                                : "/images/no-image-found.png",
                              alt: "photo"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col sm:w-2/2 w-full mb-3" }, [
                      _c("h3", [_vm._v(_vm._s(this.form.name))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/1 w-full mt-3" }, [
                      _c("p", [_vm._v(_vm._s(this.form.description))])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "show-single-category-compinations" },
                [
                  _c(
                    "vx-card",
                    {
                      staticClass: "my-5",
                      attrs: {
                        "collapse-action": "",
                        title: "Category Combinations"
                      }
                    },
                    [
                      _c(
                        "vs-table",
                        {
                          attrs: { data: _vm.combinations },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(
                                    combination,
                                    index
                                  ) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(combination.combination) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(combination.price) +
                                              "\n                                "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  })
                                }
                              }
                            ],
                            null,
                            false,
                            1281192424
                          )
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _c("vs-th", [_vm._v("Combination")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Price")])
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "show-single-criteria-compinations" },
                [
                  _c(
                    "vx-card",
                    {
                      staticClass: "my-5",
                      attrs: {
                        "collapse-action": "",
                        title: "Category Printing Criteria"
                      }
                    },
                    [
                      _c(
                        "vs-table",
                        {
                          attrs: { data: _vm.criterias },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(
                                    criteria,
                                    index
                                  ) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(criteria.criteria) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(criteria.price) +
                                              "\n                                "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  })
                                }
                              }
                            ],
                            null,
                            false,
                            1558127240
                          )
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _c("vs-th", [_vm._v("Criteria")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Price")])
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/category/view.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/category/view.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=4f90e108& */ "./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/category/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/category/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=4f90e108& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/return.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../filters/filters */ "./resources/js/src/filters/filters.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: "return",
  mounted: function mounted() {
    this.getOrder();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  data: function data() {
    return {
      form: {},
      notes: '',
      tempProducts: [],
      order: {
        orderProducts: []
      },
      is_requesting: false
    };
  },
  props: {
    payload: {
      required: false,
      default: ''
    }
  },
  methods: {
    returnProd: function returnProd() {
      var _this = this;

      console.log(this.form);
      this.$vs.loading();
      this.form.user_id = this.order.seller_id;
      this.form.notes = this.notes;
      var form_data = new FormData();

      for (var key in this.form) {
        form_data.append(key, this.form[key]);
      }

      this.$store.dispatch('restoredItem/create', form_data).then(function (response) {
        _this.order = response.data.data;

        _this.$router.push({
          name: 'returned'
        });
      }).catch(function (error) {
        for (var _i = 0, _Object$entries = Object.entries(error.response.data.errors); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              _key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          _this.$vs.notify({
            title: _key,
            text: value[0],
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      }).then(function () {
        _this.$vs.loading.close();
      });
    },
    getOrder: function getOrder() {
      var _this2 = this;

      this.$vs.loading();
      this.$store.dispatch('order/view', this.$route.params.id).then(function (response) {
        _this2.order = response.data.data;
        console.log(_this2.order); // this.tempProducts = this.order.order_products

        for (var j = 0; j < _this2.order.order_products.length; j++) {
          for (var i = 0; i < _this2.order.order_products[j].quantity; i++) {
            // counter variable to make every object different
            _this2.tempProducts.push(_objectSpread({}, _this2.order.order_products[j], {
              loopIdentifier: "".concat(_this2.order.order_products[j].id, "-").concat(i + 1)
            }));
          }
        }
      }).catch(function (error) {
        console.log(error);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }).then(function () {
        _this2.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-expand-users .con-btns-user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}[dir] .con-expand-users .con-btns-user {\n  padding: 10px;\n  padding-bottom: 0px;\n}\n.single-design {\n  position: relative;\n}\n[dir] .single-design img {\n  border: 1px solid #888;\n  padding: 5px;\n  border-radius: 10px;\n}\n.single-design input {\n  display: none;\n}\n.single-design .overlay {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[dir] .single-design .overlay {\n  border-radius: 10px;\n  background: rgba(24, 100, 120, 0.65);\n}\n[dir=ltr] .single-design .overlay {\n  right: 15px;\n  left: 15px;\n}\n[dir=rtl] .single-design .overlay {\n  left: 15px;\n  right: 15px;\n}\n.single-design .overlay svg {\n  width: 100px;\n  height: 100px;\n  color: white;\n}\n.single-design input:checked ~ .overlay {\n  opacity: 1 !important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./return.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: " w-full mb-base" }, [
      _c(
        "div",
        { ref: "edit", attrs: { title: "Create product" } },
        [
          _vm.tempProducts.length
            ? _c(
                "vx-card",
                { ref: "cart", staticClass: "mt-4" },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: { data: _vm.tempProducts },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var data = ref.data
                              return _vm._l(data, function(item, index) {
                                return _c(
                                  "vs-tr",
                                  { key: index, attrs: { data: item } },
                                  [
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: {
                                          data:
                                            item.design_print_price.design
                                              .images[0].url
                                        }
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "preview-large",
                                          attrs: {
                                            src:
                                              item.design_print_price.design
                                                .images[0].url
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.loopIdentifier) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.product.category.name) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            item.design_print_price.design.name
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            item.price_combination.combination
                                          ) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.product.name) +
                                          "\n\t\t\t\t\t\t\t"
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
                        3839398361
                      ),
                      model: {
                        value: _vm.form,
                        callback: function($$v) {
                          _vm.form = $$v
                        },
                        expression: "form"
                      }
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", { attrs: { width: "200px" } }, [
                            _vm._v("Image")
                          ]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Identifier")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Category")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Design")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Price Combination")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Product")])
                        ],
                        1
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("vs-textarea", {
                    staticClass: "mb-0",
                    attrs: { label: "Notes", name: "notes" },
                    model: {
                      value: _vm.notes,
                      callback: function($$v) {
                        _vm.notes = $$v
                      },
                      expression: "notes"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center mt-4" },
            [
              _c(
                "vs-button",
                {
                  attrs: {
                    disabled: !_vm.form.id,
                    color: "primary",
                    type: "filled"
                  },
                  on: { click: _vm.returnProd }
                },
                [_vm._v("Return selected products")]
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/order/return.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/order/return.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./return.vue?vue&type=template&id=68cc789b& */ "./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b&");
/* harmony import */ var _return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./return.vue?vue&type=script&lang=js& */ "./resources/js/src/views/order/return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./return.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/order/return.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/order/return.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/order/return.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./return.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./return.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./return.vue?vue&type=template&id=68cc789b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/return.vue?vue&type=template&id=68cc789b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_return_vue_vue_type_template_id_68cc789b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    payload: {
      required: false,
      default: ''
    }
  },
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      is_requesting: false,
      products: [],
      productsToSell: []
    };
  },
  mounted: function mounted() {
    this.getProducts();
    this.getUserProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      this.$store.dispatch('product/getData', this.payload).then(function (response) {
        _this.products = response.data.data;
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
    getUserProducts: function getUserProducts() {
      var _this2 = this;

      this.$store.dispatch('product/getData', "?seller=".concat(this.$route.params.id)).then(function (response) {
        _this2.productsToSell = response.data.data;

        for (var i = 0; i < _this2.productsToSell.length; i++) {
          _this2.productsToSell[i] = _this2.productsToSell[i].id;
        }

        console.log(_this2.productsToSell);
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
    update: function update() {
      var _this3 = this;

      this.$store.dispatch('userProduct/update', {
        id: this.$route.params.id,
        data: {
          'productsToSell': JSON.stringify(this.productsToSell)
        }
      }).then(function (response) {
        _this3.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });

        _this3.$router.push({
          name: 'user'
        });
      }).catch(function (error) {
        console.log(error);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("edit-seller-product")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "div",
            { staticClass: "centerx" },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-type": "flex",
                        "vs-justify": "center",
                        "vs-align": "center",
                        "vs-w": "9"
                      }
                    },
                    [
                      _c("b", { staticClass: "text-left vx-col w-full" }, [
                        _vm._v(
                          _vm._s(_vm.products.length) +
                            " results found in " +
                            _vm._s(_vm.resultTime) +
                            "ms"
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vx-card",
            { ref: "browse" },
            [
              _c(
                "vs-table",
                {
                  attrs: {
                    pagination: "",
                    search: "",
                    "max-items": "50",
                    data: _vm.products
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(product, index) {
                            return _c(
                              "vs-tr",
                              {
                                key: index,
                                attrs: {
                                  state: _vm.productsToSell.includes(product.id)
                                    ? "success"
                                    : ""
                                }
                              },
                              [
                                _c(
                                  "vs-td",
                                  { attrs: { data: product.id } },
                                  [
                                    _c("vs-checkbox", {
                                      attrs: { "vs-value": product.id },
                                      model: {
                                        value: _vm.productsToSell,
                                        callback: function($$v) {
                                          _vm.productsToSell = $$v
                                        },
                                        expression: "productsToSell"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("vs-td", [
                                  product.image
                                    ? _c("img", {
                                        staticClass: "preview-large",
                                        attrs: { src: product.image.url }
                                      })
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c("vs-td", { attrs: { data: product.name } }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(product.name) +
                                      "\n\t\t\t\t\t"
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: product.description } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(product.description) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: product.base_price } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(product.base_price) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          })
                        }
                      }
                    ],
                    null,
                    false,
                    2752973887
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("Assign")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Image")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Description")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Base price")])
                    ],
                    1
                  )
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center mt-4" },
                [
                  _c(
                    "vs-button",
                    {
                      attrs: { color: "primary", type: "filled" },
                      on: { click: _vm.update }
                    },
                    [_vm._v("Update")]
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/user_product/edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/user_product/edit.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=6d94e684&scoped=true& */ "./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d94e684",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/user_product/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_product/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=6d94e684&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/user_product/edit.vue?vue&type=template&id=6d94e684&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_6d94e684_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
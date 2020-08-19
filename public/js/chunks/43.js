(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
  name: "browse",
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      is_requesting: false,
      invoice: {}
    };
  },
  mounted: function mounted() {
    this.getInvoice();
  },
  computed: {
    totalProductsPrice: function totalProductsPrice() {
      var total = 0;
      this.invoice.order.order_products.forEach(function (item) {
        total += Number(item.product.base_price) + Number(item.design_print_price.price) + Number(item.price_combination.price) * item.quantity;
      });
      return total;
    }
  },
  methods: {
    getInvoice: function getInvoice() {
      var _this = this;

      console.log('id= ', this.$route.params.id);
      this.$vs.loading();
      this.$store.dispatch('invoice/view', this.$route.params.id).then(function (response) {
        _this.invoice = response.data.data;
        console.log(_this.invoice);
      }).catch(function (error) {
        console.log(error);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }).then(function () {
        _this.$vs.loading.close();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("view-invoice")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c("img", {
            attrs: { src: __webpack_require__(/*! ../../../../assets/images/logo/logo.png */ "./resources/assets/images/logo/logo.png") }
          }),
          _vm._v(" "),
          _vm.invoice.order
            ? _c(
                "vx-card",
                { ref: "cart", staticClass: "my-4" },
                [
                  _c(
                    "vs-table",
                    {
                      attrs: { data: _vm.invoice.order.order_products },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var data = ref.data
                              return _vm._l(data, function(item, index) {
                                return _c(
                                  "vs-tr",
                                  { key: index },
                                  [
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(item.product.name) +
                                          "(" +
                                          _vm._s(item.product.base_price) +
                                          ")\n\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(
                                            item.design_print_price.design.name
                                          ) +
                                          "\t- " +
                                          _vm._s(
                                            item.design_print_price
                                              .print_criteria.criteria
                                          ) +
                                          "(" +
                                          _vm._s(
                                            item.design_print_price.price
                                          ) +
                                          ")\n\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(
                                            item.price_combination.combination
                                          ) +
                                          " (" +
                                          _vm._s(item.price_combination.price) +
                                          ")\n\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t" +
                                          _vm._s(item.quantity) +
                                          "\n\t\t\t\t\t"
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
                        407361485
                      )
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Design")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Price Combination")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Quantity")])
                        ],
                        1
                      )
                    ],
                    2
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.invoice.order
            ? _c(
                "vs-table",
                { attrs: { data: _vm.invoice } },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Details")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  [
                    _c(
                      "vs-tr",
                      [
                        _c("vs-td", [
                          _vm._v("\n\t\t\t\t\tOrder products\n\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("b", [_vm._v(_vm._s(_vm.totalProductsPrice))])
                        ]),
                        _vm._v(" "),
                        _c("vs-td")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tr",
                      [
                        _c("vs-td", [
                          _vm._v("\n\t\t\t\t\tShipping price\n\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("b", [
                            _vm._v(
                              _vm._s(_vm.invoice.order.shipping_price.price)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.invoice.order.shipping_price.city.name
                              ) +
                              " - " +
                              _vm._s(
                                _vm.invoice.order.shipping_price.shipping_method
                                  .name
                              ) +
                              "\n\t\t\t\t"
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tr",
                      { attrs: { state: "danger" } },
                      [
                        _c("vs-td", [
                          _vm._v("\n\t\t\t\t\tAdditional Fees\n\t\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("b", [
                            _vm._v(_vm._s(_vm.invoice.order.additional_fees))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _vm._v(
                            "\n\t\t\t\t\t" +
                              _vm._s(
                                _vm.invoice.order.additional_fees_details
                              ) +
                              "\n\t\t\t\t"
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tr",
                      { attrs: { state: "success" } },
                      [
                        _c("vs-td", [_vm._v("\n\t\t\t\t\tDiscount\n\t\t\t\t")]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("b", [
                            _vm._v("- " + _vm._s(_vm.invoice.order.discount))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("vs-td")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tr",
                      { attrs: { state: "primary" } },
                      [
                        _c("vs-td", [
                          _c("b", [
                            _vm._v(
                              "Total: " +
                                _vm._s(_vm.invoice.order.payment_type.name)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("b", [
                            _vm._v(_vm._s(_vm.invoice.order.total_price))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("vs-td")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-tr",
                      [
                        _c("vs-td", { attrs: { colspan: "3" } }, [
                          _c("b", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.invoice.order.total_price_info
                              )
                            }
                          })
                        ])
                      ],
                      1
                    )
                  ]
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.invoice.order
            ? _c(
                "vx-card",
                { ref: "view", staticClass: "shadow-none mt-5" },
                [
                  _c(
                    "vs-row",
                    [
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-justify": "center",
                            "vs-align": "center",
                            "vs-w": "6"
                          }
                        },
                        [
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tCustomer: "),
                            _c("b", [
                              _vm._v(_vm._s(_vm.invoice.order.customer_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tPhone: "),
                            _c("b", [
                              _vm._v(_vm._s(_vm.invoice.order.phone_number))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tPhone 2: "),
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.invoice.order.additional_number)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tAddress: "),
                            _c("b", [_vm._v(_vm._s(_vm.invoice.order.address))])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          attrs: {
                            "vs-justify": "center",
                            "vs-align": "center",
                            "vs-w": "6"
                          }
                        },
                        [
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tInternal Tracking Number: "),
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.invoice.order.internal_tracking)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tShipment Tracking Number: "),
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.invoice.order.external_tracking)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tShipment method: "),
                            _c("b", [
                              _vm._v(
                                _vm._s(
                                  _vm.invoice.order.shipping_price
                                    .shipping_method.name
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _vm._v("\n\t\t\t\t\tCity: "),
                            _c("b", [
                              _vm._v(
                                _vm._s(
                                  _vm.invoice.order.shipping_price.city.name
                                )
                              )
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-col",
                        {
                          staticClass: "my-6",
                          attrs: {
                            "vs-justify": "center",
                            "vs-align": "center",
                            "vs-w": "12"
                          }
                        },
                        [
                          _c("vs-divider"),
                          _vm._v("\n\t\t\t\tNotes:"),
                          _c("b", [
                            _vm._v(_vm._s(_vm.invoice.order.shipping_note))
                          ])
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
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/images/logo/logo.png":
/*!***********************************************!*\
  !*** ./resources/assets/images/logo/logo.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.png?79b3ac9e9a66c22fa84086edee0f7106";

/***/ }),

/***/ "./resources/js/src/views/invoice/view.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/invoice/view.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=74fcc6d1&scoped=true& */ "./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "74fcc6d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/invoice/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=74fcc6d1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/view.vue?vue&type=template&id=74fcc6d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_74fcc6d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
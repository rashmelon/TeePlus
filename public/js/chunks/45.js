(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse",
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      is_requesting: false,
      invoices: []
    };
  },
  mounted: function mounted() {
    this.getInvoices();
  },
  methods: {
    getInvoices: function getInvoices() {
      var _this = this;

      console.log('id= ', this.$route.params.id);
      this.$vs.loading();
      this.$store.dispatch('invoice/getData', "?seller=".concat(this.$route.params.id)).then(function (response) {
        _this.invoices = response.data.data;
        console.log(response);
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
    },
    viewInvoice: function viewInvoice(id) {
      this.$router.push({
        name: 'view-invoice',
        params: {
          'id': id
        }
      });
    },
    confirmDeleteInvoice: function confirmDeleteInvoice(item) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteInvoice,
        parameters: item
      });
    },
    deleteInvoice: function deleteInvoice(item) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(item.id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('invoice/delete', item.id).then(function (response) {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(item.id, " > .con-vs-loading"));

        _this2.invoices = _this2.invoices.filter(function (type) {
          return type.id !== item.id;
        });

        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(item.id, " > .con-vs-loading"));

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }).then(function () {
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-delete-".concat(item.id, " > .con-vs-loading"));
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-invoice")
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
                          _vm._s(_vm.invoices.length) +
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
                    data: _vm.invoices
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(invoice, index) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c("vs-td", { attrs: { data: invoice.id } }, [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(invoice.id) +
                                      "\n\t\t\t\t\t"
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: invoice.amount } },
                                  [
                                    _c(
                                      "vs-chip",
                                      {
                                        attrs: {
                                          color:
                                            invoice.amount >= 0
                                              ? "success"
                                              : "danger"
                                        }
                                      },
                                      [
                                        _c(
                                          "h3",
                                          { staticClass: "text-white" },
                                          [_vm._v(_vm._s(invoice.amount))]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: invoice.description } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(invoice.description) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _vm.can("view-invoice")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/2 mx-2" },
                                              [
                                                _c("vs-button", {
                                                  staticClass:
                                                    "vs-con-loading__container",
                                                  attrs: {
                                                    id:
                                                      "btn-view-" + invoice.id,
                                                    radius: "",
                                                    color: "primary",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-eye"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.viewInvoice(
                                                        invoice.id
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.can("delete-invoice")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/2 mx-3" },
                                              [
                                                _c("vs-button", {
                                                  staticClass:
                                                    "vs-con-loading__container",
                                                  attrs: {
                                                    id:
                                                      "btn-delete-" +
                                                      invoice.id,
                                                    radius: "",
                                                    color: "danger",
                                                    type: "border",
                                                    "icon-pack": "feather",
                                                    icon: "icon-trash"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      _vm.is_requesting
                                                        ? _vm.$store.dispatch(
                                                            "viewWaitMessage",
                                                            _vm.$vs
                                                          )
                                                        : _vm.confirmDeleteInvoice(
                                                            invoice
                                                          )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ])
                                  ],
                                  1
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
                    2682573518
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("ID")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Description")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Actions")])
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/invoice/browse.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/invoice/browse.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=65e7f994&scoped=true& */ "./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "65e7f994",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/invoice/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=65e7f994&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/invoice/browse.vue?vue&type=template&id=65e7f994&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_65e7f994_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
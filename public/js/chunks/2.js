(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse",
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      is_requesting: false,
      transactions: []
    };
  },
  mounted: function mounted() {
    this.getTransactions();
  },
  methods: {
    getTransactions: function getTransactions() {
      var _this = this;

      this.$vs.loading();
      var seller = '';

      if (this.$route.params.id) {
        seller = "?seller=".concat(this.$route.params.id);
      } else if (this.$store.state.auth.AppActiveUser.roles[0].name === 'Seller') {
        seller = "?seller=".concat(this.$store.state.auth.AppActiveUser.id);
      }

      this.$store.dispatch('transaction/getData', seller).then(function (response) {
        _this.transactions = response.data.data;
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
    viewTransaction: function viewTransaction(id) {
      this.$router.push({
        name: 'view-transaction',
        params: {
          'id': id
        }
      });
    },
    editTransaction: function editTransaction(id) {
      this.$router.push({
        name: 'edit-transaction',
        params: {
          'id': id
        }
      });
    },
    confirmDeleteTransaction: function confirmDeleteTransaction(item) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteTransaction,
        parameters: item
      });
    },
    deleteTransaction: function deleteTransaction(item) {
      var _this2 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(item.id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('transaction/delete', item.id).then(function (response) {
        _this2.transactions = _this2.transactions.filter(function (type) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _vm.can("browse-transaction")
    ? _c(
        "div",
        [
          _c(
            "div",
            { staticClass: "centerx mb-5" },
            [
              _c(
                "vs-row",
                [
                  _c(
                    "vs-col",
                    {
                      attrs: {
                        "vs-align": "center",
                        "vs-justify": "center",
                        "vs-type": "flex",
                        "vs-w": "9"
                      }
                    },
                    [
                      _c("b", { staticClass: "text-left vx-col w-full" }, [
                        _vm._v(
                          _vm._s(_vm.transactions.length) +
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
                    data: _vm.transactions
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(data, function(transaction, index) {
                            return _c(
                              "vs-tr",
                              {
                                key: index,
                                attrs: {
                                  state:
                                    transaction.type === "withdraw"
                                      ? "warning"
                                      : "success"
                                }
                              },
                              [
                                _c(
                                  "vs-td",
                                  { attrs: { data: transaction.date } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(transaction.date) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t" +
                                      _vm._s(
                                        transaction.seller
                                          ? transaction.seller.name
                                          : ""
                                      ) +
                                      "\n\t\t\t\t\t"
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: transaction.type } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(transaction.type) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: transaction.amount } },
                                  [
                                    _c("b", [
                                      _vm._v(_vm._s(transaction.amount))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: transaction.created_at } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(transaction.created_at) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: transaction.updated_at } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t" +
                                        _vm._s(transaction.updated_at) +
                                        "\n\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("vs-td", [
                                  _c(
                                    "div",
                                    { staticClass: "flex justify-between" },
                                    [
                                      _vm.can("edit-transaction")
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c(
                                                "vx-tooltip",
                                                {
                                                  attrs: {
                                                    position: "top",
                                                    text: "Update Transaction"
                                                  }
                                                },
                                                [
                                                  _c("vs-button", {
                                                    staticClass:
                                                      "vs-con-loading__container",
                                                    attrs: {
                                                      id:
                                                        "btn-edit-" +
                                                        transaction.id,
                                                      radius: "",
                                                      color: "warning",
                                                      type: "border",
                                                      "icon-pack": "feather",
                                                      icon: "icon-edit"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.editTransaction(
                                                          transaction.id
                                                        )
                                                      }
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _vm.can("delete-transaction")
                                        ? _c(
                                            "span",
                                            {
                                              staticClass: "flex items-center"
                                            },
                                            [
                                              _c(
                                                "vx-tooltip",
                                                {
                                                  attrs: {
                                                    position: "top",
                                                    text: "Delete Transaction"
                                                  }
                                                },
                                                [
                                                  _c("vs-button", {
                                                    staticClass:
                                                      "vs-con-loading__container",
                                                    attrs: {
                                                      id:
                                                        "btn-delete-" +
                                                        transaction.id,
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
                                                          : _vm.confirmDeleteTransaction(
                                                              transaction
                                                            )
                                                      }
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
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
                    2412076505
                  )
                },
                [
                  _vm.can("create-transaction")
                    ? _c(
                        "template",
                        { slot: "header" },
                        [
                          _c(
                            "vs-button",
                            {
                              attrs: {
                                to: { name: "create-transaction" },
                                color: "primary",
                                type: "filled",
                                "icon-pack": "feather",
                                icon: "icon-plus"
                              }
                            },
                            [_vm._v("Create transaction\n\t\t\t\t")]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Seller")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Amount")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Created at")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Updated at")]),
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

/***/ "./resources/js/src/views/transaction/browse.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/transaction/browse.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=c88ebc36&scoped=true& */ "./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c88ebc36",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/transaction/browse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=c88ebc36&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/browse.vue?vue&type=template&id=c88ebc36&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_c88ebc36_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
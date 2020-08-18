(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  data: function data() {
    return {
      form: {
        type: 'deposit',
        amount: 0,
        date: '',
        seller_id: undefined
      },
      users: [],
      operations: [{
        name: 'Deposit',
        value: 'deposit'
      }, {
        name: 'Withdraw',
        value: 'withdraw'
      }]
    };
  },
  mounted: function mounted() {
    if (this.$route.params.id) {
      this.form.seller_id = this.$route.params.id;
    }

    this.getUsers();
    var today = new Date(); // set the date = today

    this.form.date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      this.$vs.loading();
      this.$store.dispatch('user/getData', '').then(function (response) {
        _this.users = response.data.data;
        console.log(_this.users);
      }).catch(function (error) {
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
    create: function create() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.$vs.loading(); // create new object for sending object without extra data


          var form_data = new FormData();

          for (var key in _this2.form) {
            form_data.append(key, _this2.form[key]);
          }

          _this2.$store.dispatch('transaction/create', form_data).then(function (response) {
            _this2.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            if (_this2.$route.params.id) {
              _this2.$router.push({
                name: 'browse-user-transactions',
                params: {
                  id: _this2.$route.params.id
                }
              });
            } else {
              _this2.$router.push({
                name: 'browse-transaction'
              });
            }

            _this2.is_requesting = false;
          }).catch(function (error) {
            console.log(error);

            _this2.$vs.notify({
              title: 'Error',
              text: error.response.data,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            _this2.is_requesting = false;
          }).then(function () {
            _this2.$vs.loading.close();
          });
        } else {
          _this2.$vs.notify({
            title: 'Error',
            text: 'Fix form validation errors',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true& ***!
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
  return _vm.can("create-transaction")
    ? _c(
        "div",
        [
          _vm.users.length
            ? _c(
                "vx-card",
                [
                  !_vm.form.seller_id
                    ? _c(
                        "vs-select",
                        {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required",
                              expression: "'required'"
                            }
                          ],
                          staticClass: "w-full mt-5",
                          attrs: {
                            label: "Seller",
                            items: "users",
                            placeholder: "Seller",
                            name: "seller"
                          },
                          model: {
                            value: _vm.form.seller_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "seller_id", $$v)
                            },
                            expression: "form.seller_id"
                          }
                        },
                        [
                          _c("vs-select-item", {
                            attrs: {
                              selected: "",
                              value: null,
                              text: "Choose seller"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.users, function(item, index) {
                            return _c("vs-select-item", {
                              key: item.id,
                              attrs: { text: item.name, value: item.id }
                            })
                          })
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("seller"),
                          expression: "errors.has('seller')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("seller")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-select",
                    {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "w-full mt-5",
                      attrs: {
                        label: "Operation",
                        placeholder: "Operation",
                        name: "type"
                      },
                      model: {
                        value: _vm.form.type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "type", $$v)
                        },
                        expression: "form.type"
                      }
                    },
                    _vm._l(_vm.operations, function(item) {
                      return _c("vs-select-item", {
                        key: item.value,
                        attrs: { text: item.name, value: item.value }
                      })
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("type"),
                          expression: "errors.has('type')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("type")))]
                  ),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min_value:1",
                        expression: "'required|min_value:1'"
                      }
                    ],
                    staticClass: "w-full mt-5",
                    attrs: { label: "Amount", name: "amount", type: "number" },
                    model: {
                      value: _vm.form.amount,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "amount", $$v)
                      },
                      expression: "form.amount"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("amount"),
                          expression: "errors.has('amount')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("amount")))]
                  ),
                  _vm._v(" "),
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    staticClass: "w-full mt-5",
                    attrs: { label: "Date", name: "date", type: "date" },
                    model: {
                      value: _vm.form.date,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "date", $$v)
                      },
                      expression: "form.date"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.errors.has("date"),
                          expression: "errors.has('date')"
                        }
                      ],
                      staticClass: "text-danger text-sm"
                    },
                    [_vm._v(_vm._s(_vm.errors.first("date")))]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "mt-5 ml-auto",
                      attrs: {
                        color: "primary",
                        icon: "icon-save",
                        "icon-pack": "feather",
                        type: "filled"
                      },
                      on: { click: _vm.create }
                    },
                    [_vm._v("Create\n\t\t")]
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

/***/ "./resources/js/src/views/transaction/create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/transaction/create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=11bbd952&scoped=true& */ "./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11bbd952",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/transaction/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=11bbd952&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/transaction/create.vue?vue&type=template&id=11bbd952&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_11bbd952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
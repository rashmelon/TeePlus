(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../filters/filters */ "./resources/js/src/filters/filters.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {
    this.getCategories();
    this.getDesigns();
    this.getOrder();
    this.getStatuses();
    this.getShippingPrice();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
    }
  },
  data: function data() {
    return {
      combinations: [],
      categories: [],
      products: [],
      designs: [],
      cartItem: {
        quantity: 0,
        category: {},
        product: {},
        priceCombination: {},
        design: {}
      },
      tempProducts: [],
      order: {
        orderProducts: []
      },
      statuses: [],
      shippingPrices: [],
      is_requesting: false
    };
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"]
  },
  props: {
    payload: {
      required: false,
      default: ''
    }
  },
  methods: {
    edit: function edit() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this.is_requesting = true;

          var sentObject = _objectSpread({}, _this.order); // edit new object for sending object without extra data


          var form_data = new FormData();

          for (var key in sentObject) {
            if (key === 'orderProducts') {
              form_data.append(key, JSON.stringify(sentObject[key]));
            } else {
              form_data.append(key, sentObject[key]);
            }
          }

          _this.$store.dispatch('order/update', {
            id: _this.$route.params.id,
            data: form_data
          }).then(function (response) {
            _this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            }); // this.$router.push({name: 'order'});


            _this.is_requesting = false;

            _this.$router.push({
              name: 'order'
            });
          }).catch(function (error) {
            console.log(error);

            _this.$vs.notify({
              title: 'Error',
              text: error.response.data,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });

            _this.is_requesting = false;
          });
        } else {
          _this.$vs.notify({
            title: 'Error',
            text: 'Fix form validation errors',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger'
          });
        }
      });
    },
    addToCart: function addToCart() {
      this.tempProducts.push(this.cartItem);
      this.cartItem = {
        quantity: 0,
        category: {},
        product: {},
        priceCombination: {},
        design: {}
      };
    },
    getOrder: function getOrder() {
      var _this2 = this;

      this.$store.dispatch('order/view', this.$route.params.id).then(function (response) {
        _this2.order = response.data.data;
        console.log('order: ', _this2.order); // get current order products

        _this2.tempProducts = _this2.order.order_products; // set current design

        _this2.cartItem.design = _this2.order.order_products[0].design;
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
    getShippingPrice: function getShippingPrice() {
      var _this3 = this;

      this.$vs.loading({
        container: this.$refs.edit.$el,
        scale: 0.5
      });
      this.$store.dispatch('shippingPrice/getData', this.payload).then(function (response) {
        _this3.shippingPrices = response.data.data;
      }).catch(function (error) {
        console.log(error);

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }).then(function () {
        _this3.$vs.loading.close(_this3.$refs.edit.$el);
      });
    },
    getCategories: function getCategories() {
      var _this4 = this;

      // get all categories
      this.$store.dispatch('category/getData', this.payload).then(function (response) {
        _this4.categories = response.data.data;
      }).catch(function (error) {
        console.log(error); // this.$vs.loading.close(this.$refs.browse);

        _this4.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getProducts: function getProducts() {
      var _this5 = this;

      this.$store.dispatch('product/getData', "?category=".concat(this.cartItem.category.id)).then(function (response) {
        _this5.products = response.data.data;
        console.log(_this5.products);
      }).catch(function (error) {
        console.log(error);

        _this5.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getCombinations: function getCombinations() {
      var _this6 = this;

      console.log('asasd');
      this.$store.dispatch('combination/getData', "?category=".concat(this.cartItem.category.id)).then(function (response) {
        _this6.combinations = response.data.data;
        console.log(_this6.combinations);
      }).catch(function (error) {
        console.log(error);

        _this6.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    getStatuses: function getStatuses() {
      var _this7 = this;

      this.$vs.loading({
        container: this.$refs.edit.$el,
        scale: 0.5
      });
      this.$store.dispatch('status/getData', this.payload).then(function (response) {
        _this7.statuses = response.data.data;
      }).catch(function (error) {
        _this7.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      }).then(function () {
        _this7.$vs.loading.close(_this7.$refs.edit.$el);
      });
    },
    getDesigns: function getDesigns() {
      var _this8 = this;

      this.$vs.loading({
        container: this.$refs.edit.$el,
        scale: 0.5
      });
      var payload = this.payload;

      if (this.$store.getters['auth/userData'].roles[0].name === 'Seller') {
        payload = '?seller=' + this.$store.getters['auth/userData'].id;
      }

      this.$store.dispatch('design/getData', payload).then(function (response) {
        _this8.designs = response.data.data;
        console.log(_this8.designs);

        _this8.$vs.loading.close(_this8.$refs.edit.$el);
      }).catch(function (error) {
        _this8.$vs.loading.close(_this8.$refs.edit.$el);

        _this8.$vs.notify({
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".single-design {\n  position: relative;\n}\n[dir] .single-design img {\n  border: 1px solid #888;\n  padding: 5px;\n  border-radius: 10px;\n}\n.single-design input {\n  display: none;\n}\n.single-design .overlay {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[dir] .single-design .overlay {\n  border-radius: 10px;\n  background: rgba(24, 100, 120, 0.65);\n}\n[dir=ltr] .single-design .overlay {\n  right: 15px;\n  left: 15px;\n}\n[dir=rtl] .single-design .overlay {\n  left: 15px;\n  right: 15px;\n}\n.single-design .overlay svg {\n  width: 100px;\n  height: 100px;\n  color: white;\n}\n.single-design input:checked ~ .overlay {\n  opacity: 1 !important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("vx-card", [
            _c(
              "div",
              [
                _vm.cartItem.quantity &&
                _vm.cartItem.priceCombination.id &&
                _vm.cartItem.design.id
                  ? _c(
                      "vs-button",
                      {
                        staticClass: "mb-4",
                        attrs: {
                          color: "primary",
                          icon: "icon-save",
                          "icon-pack": "feather",
                          type: "filled"
                        },
                        on: { click: _vm.addToCart }
                      },
                      [_vm._v("Add to cart\n\t\t\t\t\t")]
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
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
                                  { key: index },
                                  [
                                    _c("vs-td", [
                                      _c("img", {
                                        staticClass: "preview-large",
                                        attrs: {
                                          src: item.design.images[0].url
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.product.name) +
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
                                          _vm._s(item.design.name) +
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
                                          _vm._s(item.quantity) +
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
                        4099654862
                      )
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
                          _c("vs-th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Category")]),
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
          _c("vx-card", { ref: "order", staticClass: "mt-4" }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Customer name" },
                    model: {
                      value: _vm.order.customer_name,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "customer_name", $$v)
                      },
                      expression: "order.customer_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Phone number" },
                    model: {
                      value: _vm.order.phone_number,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "phone_number", $$v)
                      },
                      expression: "order.phone_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Additional number" },
                    model: {
                      value: _vm.order.additional_number,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "additional_number", $$v)
                      },
                      expression: "order.additional_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Address" },
                    model: {
                      value: _vm.order.address,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "address", $$v)
                      },
                      expression: "order.address"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Shipping notes" },
                    model: {
                      value: _vm.order.shipping_note,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "shipping_note", $$v)
                      },
                      expression: "order.shipping_note"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      "label-placeholder": "discount",
                      min: "0",
                      value: "0",
                      type: "number"
                    },
                    model: {
                      value: _vm.order.discount,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "discount", $$v)
                      },
                      expression: "order.discount"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      "label-placeholder": "Additional fees",
                      min: "0",
                      value: "0",
                      type: "number"
                    },
                    model: {
                      value: _vm.order.additional_fees,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "additional_fees", $$v)
                      },
                      expression: "order.additional_fees"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "Additional fees details" },
                    model: {
                      value: _vm.order.additional_fees_details,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "additional_fees_details", $$v)
                      },
                      expression: "order.additional_fees_details"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      "label-placeholder": "Internal tracking number",
                      disabled: "",
                      value: _vm.order.internal_tracking
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { "label-placeholder": "External tracking number" },
                    model: {
                      value: _vm.order.external_tracking,
                      callback: function($$v) {
                        _vm.$set(_vm.order, "external_tracking", $$v)
                      },
                      expression: "order.external_tracking"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full",
                      attrs: {
                        label: "Status",
                        autocomplete: "",
                        "label-placeholder": "Status",
                        "icon-pack": "feather",
                        icon: "icon-chevron-down",
                        color: "primary"
                      },
                      model: {
                        value: _vm.order.status_id,
                        callback: function($$v) {
                          _vm.$set(_vm.order, "status_id", $$v)
                        },
                        expression: "order.status_id"
                      }
                    },
                    _vm._l(_vm.statuses, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: { value: item.id, text: item.name }
                      })
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
                [
                  _c(
                    "vs-select",
                    {
                      staticClass: "w-full",
                      attrs: {
                        label: "Shipping",
                        autocomplete: "",
                        "label-placeholder": "Shipping",
                        "icon-pack": "feather",
                        icon: "icon-chevron-down",
                        color: "primary"
                      },
                      model: {
                        value: _vm.order.shipping_price_id,
                        callback: function($$v) {
                          _vm.$set(_vm.order, "shipping_price_id", $$v)
                        },
                        expression: "order.shipping_price_id"
                      }
                    },
                    _vm._l(_vm.shippingPrices, function(item, index) {
                      return _c("vs-select-item", {
                        key: index,
                        attrs: {
                          value: item.id,
                          text:
                            item.shipping_method.name +
                            " - " +
                            item.city.name +
                            " - " +
                            item.price
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            ])
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c(
          "vs-button",
          {
            staticClass: "mb-4",
            attrs: {
              color: "primary",
              icon: "icon-save",
              "icon-pack": "feather",
              type: "filled"
            },
            on: { click: _vm.edit }
          },
          [_vm._v("Update order\n\t\t")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/order/edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/src/views/order/edit.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.vue?vue&type=template&id=5e1dc535& */ "./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535&");
/* harmony import */ var _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/order/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__["render"],
  _edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/order/edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/order/edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/order/edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./edit.vue?vue&type=template&id=5e1dc535& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/edit.vue?vue&type=template&id=5e1dc535&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_template_id_5e1dc535___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
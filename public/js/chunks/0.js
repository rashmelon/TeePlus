(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\TeePlus\\resources\\js\\src\\views\\order\\create.vue: Unexpected token (398:64)\n\n\u001b[0m \u001b[90m 396 | \u001b[39m            filterDesigns(){\u001b[0m\n\u001b[0m \u001b[90m 397 | \u001b[39m                \u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdesigns\u001b[33m.\u001b[39mfilter(design \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 398 | \u001b[39m                    let searchedText \u001b[33m=\u001b[39m \u001b[32m`${design.design.name} ${}`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                                                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 399 | \u001b[39m                    \u001b[36mif\u001b[39m (toString()\u001b[33m.\u001b[39mtoLowerCase()\u001b[33m.\u001b[39mindexOf(\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msearchText\u001b[33m.\u001b[39mtoLowerCase()) \u001b[33m>=\u001b[39m \u001b[35m0\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m 400 | \u001b[39m                        \u001b[36mreturn\u001b[39m design\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 401 | \u001b[39m                    }\u001b[0m\n    at Parser.raise (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:7012:17)\n    at Parser.unexpected (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:8405:16)\n    at Parser.parseExprAtom (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9661:20)\n    at Parser.parseExprSubscripts (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExpression (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:8965:23)\n    at Parser.parseTemplate (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9953:34)\n    at Parser.parseExprAtom (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9624:21)\n    at Parser.parseExprSubscripts (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseVar (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:11341:26)\n    at Parser.parseVarStatement (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:11160:10)\n    at Parser.parseStatementContent (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:10757:21)\n    at Parser.parseStatement (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:11266:25)\n    at Parser.parseBlockBody (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:11253:10)\n    at Parser.parseBlock (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:11237:10)\n    at Parser.parseFunctionBody (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:10256:24)\n    at Parser.parseArrowExpression (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:10197:10)\n    at Parser.parseExprAtom (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9535:18)\n    at Parser.parseExprSubscripts (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9237:23)\n    at Parser.parseMaybeUnary (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9217:21)\n    at Parser.parseExprOps (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9083:23)\n    at Parser.parseMaybeConditional (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9056:23)\n    at Parser.parseMaybeAssign (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9015:21)\n    at Parser.parseExprListItem (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:10331:18)\n    at Parser.parseCallExpressionArguments (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9434:22)\n    at Parser.parseSubscript (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9342:29)\n    at Parser.parseSubscripts (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9258:19)\n    at Parser.parseExprSubscripts (D:\\TeePlus\\node_modules\\@babel\\parser\\lib\\index.js:9247:17)");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".single-design {\n  position: relative;\n  height: 120px;\n}[dir=ltr] .single-design {\n  margin-right: 10px;\n}[dir=rtl] .single-design {\n  margin-left: 10px;\n}\n.single-design img {\n  width: auto;\n  height: 100px;\n}\n[dir] .single-design img {\n  border: 1px solid #888;\n  padding: 5px;\n  border-radius: 10px;\n}\n.single-design input {\n  display: none;\n}\n.single-design .overlay {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  bottom: 0;\n  opacity: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n[dir] .single-design .overlay {\n  border-radius: 10px;\n  background: rgba(24, 100, 120, 0.65);\n}\n[dir=ltr] .single-design .overlay {\n  right: 0;\n  left: 0;\n}\n[dir=rtl] .single-design .overlay {\n  left: 0;\n  right: 0;\n}\n.single-design .overlay svg {\n  width: 100px;\n  height: 100px;\n  color: white;\n}\n.single-design input:checked ~ .overlay {\n  opacity: 1 !important;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667& ***!
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
        { ref: "create", attrs: { title: "Create product" } },
        [
          _c(
            "vs-row",
            {
              staticClass: "mb-5",
              attrs: {
                "vs-align": "flex-start",
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-w": "12"
              }
            },
            [
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "2"
                  }
                },
                [
                  _c("label", { attrs: { for: "source" } }, [
                    _c("h2", [_vm._v("Returned")])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "2"
                  }
                },
                [
                  _c("vs-switch", {
                    attrs: { id: "source" },
                    model: {
                      value: _vm.sourceOfProducts,
                      callback: function($$v) {
                        _vm.sourceOfProducts = $$v
                      },
                      expression: "sourceOfProducts"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-col",
                {
                  attrs: {
                    "vs-type": "flex",
                    "vs-justify": "center",
                    "vs-align": "center",
                    "vs-w": "2"
                  }
                },
                [
                  _c("label", { attrs: { for: "source" } }, [
                    _c("h2", [_vm._v("New")])
                  ])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          !_vm.sourceOfProducts
            ? _c(
                "vx-card",
                [
                  _c(
                    "vs-table",
                    {
                      attrs: {
                        pagination: "",
                        search: "",
                        "max-items": "100",
                        data: _vm.returns
                      },
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
                                      { attrs: { data: item.product.id } },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.id) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      item.design_print_price.design.images[0]
                                        .url
                                        ? _c("img", {
                                            staticClass: "preview-large",
                                            attrs: {
                                              src:
                                                item.design_print_price.design
                                                  .images[0].url
                                            }
                                          })
                                        : _vm._e()
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: item.product.name } },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.product.name) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: {
                                          data: item.product.description
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.product.description) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: { data: item.product.base_price }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.product.base_price) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      {
                                        attrs: { data: item.product.quantity }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.product.quantity) +
                                            "\n\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      { attrs: { data: item.created_at } },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t" +
                                            _vm._s(item.created_at) +
                                            "\n\t\t\t\t\t\t\t"
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
                        3847007176
                      ),
                      model: {
                        value: _vm.selectedFromStock,
                        callback: function($$v) {
                          _vm.selectedFromStock = $$v
                        },
                        expression: "selectedFromStock"
                      }
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("#")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Image")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Name")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Description")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Base price")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Quantity")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Created At")])
                        ],
                        1
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "my-4",
                      attrs: {
                        disabled: !_vm.selectedFromStock.id,
                        color: "primary",
                        icon: "icon-save",
                        "icon-pack": "feather",
                        type: "filled"
                      },
                      on: { click: _vm.selectFromStock }
                    },
                    [_vm._v("Add to cart\n\t\t\t\t")]
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.sourceOfProducts
            ? _c("vx-card", [
                _c("div", { staticClass: "vx-row" }, [
                  _vm.categories.length
                    ? _c(
                        "div",
                        { staticClass: "vx-col md:w-12/12 w-full my-3" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full",
                              attrs: { label: "Category", name: "category" },
                              on: {
                                change: function(e) {
                                  this.getProducts()
                                  this.getDesigns()
                                }.bind(this)
                              },
                              model: {
                                value: _vm.cartItem.category,
                                callback: function($$v) {
                                  _vm.$set(_vm.cartItem, "category", $$v)
                                },
                                expression: "cartItem.category"
                              }
                            },
                            _vm._l(_vm.categories, function(category) {
                              return _c("vs-select-item", {
                                key: category.id,
                                attrs: {
                                  text:
                                    category.name +
                                    " - " +
                                    category.description,
                                  value: category
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.products.length
                    ? _c(
                        "div",
                        { staticClass: "vx-col md:w-12/12 w-full my-3" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full",
                              attrs: { label: "Product", name: "product" },
                              on: { change: _vm.getCombinations },
                              model: {
                                value: _vm.cartItem.product,
                                callback: function($$v) {
                                  _vm.$set(_vm.cartItem, "product", $$v)
                                },
                                expression: "cartItem.product"
                              }
                            },
                            _vm._l(_vm.products, function(product) {
                              return _c("vs-select-item", {
                                key: product.id,
                                attrs: {
                                  text:
                                    product.base_price +
                                    " - " +
                                    product.name +
                                    " - " +
                                    product.description,
                                  value: product
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "vx-col md:w-12/12 w-full my-3" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-center p font-weight-bold w-full"
                            },
                            [_vm._v("No products to show in this category")]
                          )
                        ]
                      ),
                  _vm._v(" "),
                  _vm.combinations.length
                    ? _c(
                        "div",
                        { staticClass: "vx-col md:w-12/12 w-full my-3" },
                        [
                          _c(
                            "vs-select",
                            {
                              staticClass: "w-full",
                              attrs: {
                                label: "Combinations",
                                "label-placeholder": "Combinations"
                              },
                              model: {
                                value: _vm.cartItem.priceCombination,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.cartItem,
                                    "priceCombination",
                                    $$v
                                  )
                                },
                                expression: "cartItem.priceCombination"
                              }
                            },
                            _vm._l(_vm.combinations, function(item) {
                              return _c("vs-select-item", {
                                key: item.id,
                                attrs: {
                                  text: item.price + " - " + item.combination,
                                  value: item
                                }
                              })
                            }),
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.combinations.length
                    ? _c(
                        "div",
                        { staticClass: "vx-col md:w-12/12 w-full my-3" },
                        [
                          _c(
                            "div",
                            { staticClass: "centerx pt-6" },
                            [
                              _c("vs-input-number", {
                                attrs: { min: "1", label: "Quantity:" },
                                model: {
                                  value: _vm.cartItem.quantity,
                                  callback: function($$v) {
                                    _vm.$set(_vm.cartItem, "quantity", $$v)
                                  },
                                  expression: "cartItem.quantity"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.cartItem.category.id
                    ? _c(
                        "div",
                        {
                          staticClass:
                            "designs vx-col md:w-12/12 w-full mt-3 mb-5"
                        },
                        [
                          _c("vs-input", {
                            staticClass: "w-full my-5",
                            attrs: { "label-placeholder": "Search Designs" },
                            model: {
                              value: _vm.searchText,
                              callback: function($$v) {
                                _vm.searchText = $$v
                              },
                              expression: "searchText"
                            }
                          }),
                          _vm._v(" "),
                          _vm.designs.length
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "designs-container flex flex-wrap"
                                },
                                _vm._l(_vm.filterDesigns, function(
                                  item,
                                  index
                                ) {
                                  return _c(
                                    "div",
                                    {
                                      key: item.id,
                                      staticClass: "single-design"
                                    },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass: "w-full ",
                                          attrs: { for: "design-" + item.id }
                                        },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.cartItem
                                                    .design_print_price,
                                                expression:
                                                  "cartItem.design_print_price"
                                              }
                                            ],
                                            attrs: {
                                              type: "radio",
                                              id: "design-" + item.id,
                                              name: "design"
                                            },
                                            domProps: {
                                              value: item,
                                              checked: _vm._q(
                                                _vm.cartItem.design_print_price,
                                                item
                                              )
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.$set(
                                                  _vm.cartItem,
                                                  "design_print_price",
                                                  item
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "overlay" },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "feather-icon feather-check-circle"
                                                },
                                                [
                                                  _c(
                                                    "svg",
                                                    {
                                                      staticClass:
                                                        "feather feather-check-circle ",
                                                      attrs: {
                                                        xmlns:
                                                          "http://www.w3.org/2000/svg",
                                                        width: "24px",
                                                        height: "24px",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        "stroke-width": "2",
                                                        "stroke-linecap":
                                                          "round",
                                                        "stroke-linejoin":
                                                          "round"
                                                      }
                                                    },
                                                    [
                                                      _c("path", {
                                                        attrs: {
                                                          d:
                                                            "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                        }
                                                      }),
                                                      _c("polyline", {
                                                        attrs: {
                                                          points:
                                                            "22 4 12 14.01 9 11.01"
                                                        }
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("img", {
                                            attrs: {
                                              src: item.design.images[0].url,
                                              alt: ""
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(item.design.name) +
                                                  " - " +
                                                  _vm._s(
                                                    item.print_criteria.criteria
                                                  ) +
                                                  " - " +
                                                  _vm._s(item.price)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _c(
                                "div",
                                {
                                  staticClass:
                                    "text-center p font-weight-bold w-full"
                                },
                                [_vm._v("No designs to show in this category")]
                              )
                        ],
                        1
                      )
                    : _vm._e()
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
                          type: "filled",
                          disabled: !(
                            _vm.cartItem.quantity &&
                            _vm.cartItem.priceCombination.id &&
                            _vm.cartItem.design_print_price.id
                          )
                        },
                        on: { click: _vm.addToCart }
                      },
                      [_vm._v("Add to cart\n\t\t\t\t\t")]
                    )
                  ],
                  1
                )
              ])
            : _vm._e(),
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
                                  {
                                    key: index,
                                    attrs: {
                                      state: item.id ? "success" : "primary"
                                    }
                                  },
                                  [
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.id ? "Returned" : "New") +
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
                                            item.priceCombination.combination
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
                                    ]),
                                    _vm._v(" "),
                                    _c("vs-td", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(item.quantity || 1) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "vs-td",
                                      [
                                        _c("vs-button", {
                                          attrs: {
                                            radius: "",
                                            color: "danger",
                                            type: "border",
                                            "icon-pack": "feather",
                                            icon: "icon-trash"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeFromCart(
                                                item,
                                                index
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
                              })
                            }
                          }
                        ],
                        null,
                        false,
                        3890692423
                      )
                    },
                    [
                      _c(
                        "template",
                        { slot: "thead" },
                        [
                          _c("vs-th", [_vm._v("Source")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Design")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Price Combination")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Product")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Quantity")]),
                          _vm._v(" "),
                          _c("vs-th", [_vm._v("Remove")])
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
          _vm.tempProducts.length
            ? _c("vx-card", { ref: "order", staticClass: "mt-4" }, [
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
                        attrs: {
                          "label-placeholder": "Additional fees details"
                        },
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
                          "label-placeholder": "External tracking number"
                        },
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
            : _vm._e()
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
              disabled: !_vm.tempProducts.length,
              color: "primary",
              icon: "icon-save",
              "icon-pack": "feather",
              type: "filled"
            },
            on: { click: _vm.create }
          },
          [_vm._v("Create order\n\t\t")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/order/create.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/views/order/create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6ab51667& */ "./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/order/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/order/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/order/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/order/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=6ab51667& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/order/create.vue?vue&type=template&id=6ab51667&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6ab51667___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
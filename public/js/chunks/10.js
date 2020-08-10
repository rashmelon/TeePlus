(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        name: '',
        description: '',
        priceCombinations: [],
        printCriterias: [],
        image: null
      },
      uploadedImage: null,
      is_requesting: false
    };
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  },
  methods: {
    addAttribute: function addAttribute() {
      this.form.priceCombinations.push({
        combination: '',
        price: ''
      });
    },
    removeAttribute: function removeAttribute(index) {
      this.form.priceCombinations.splice(index, 1);
    },
    addPrintingCriteria: function addPrintingCriteria() {
      this.form.printCriterias.push({
        criteria: '',
        price: ''
      });
    },
    removePrintingCriteria: function removePrintingCriteria(index) {
      this.form.printCriterias.splice(index, 1);
    },
    previewImage: function previewImage(event) {
      var _this = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this.uploadedImage = e.target.result;
          _this.form.image = input.files[0];
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    create: function create() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this2.is_requesting = true;

          _this2.$vs.loading();

          var form_data = new FormData();

          for (var key in _this2.form) {
            if (key === 'priceCombinations' || key === 'printCriterias') {
              form_data.append(key, JSON.stringify(_this2.form[key]));
            } else {
              form_data.append(key, _this2.form[key]);
            }
          }

          _this2.$store.dispatch('category/create', form_data).then(function (response) {
            _this2.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            _this2.$router.push({
              name: 'category'
            });

            _this2.is_requesting = false;
          }).catch(function (error) {
            for (var _i = 0, _Object$entries = Object.entries(error.response.data.errors); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  _key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              _this2.$vs.notify({
                title: _key,
                text: value[0],
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger'
              });
            }

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _vm.can("create-category")
      ? _c("div", { staticClass: "vx-col w-full mb-base" }, [
          _c(
            "div",
            { ref: "create", attrs: { title: "Create Category" } },
            [
              _c(
                "form-wizard",
                {
                  attrs: {
                    subtitle: null,
                    title: null,
                    color: "rgb(var(--vs-primary))",
                    finishButtonText: "Submit"
                  },
                  on: { "on-complete": _vm.create }
                },
                [
                  _c(
                    "tab-content",
                    { staticClass: "mb-5", attrs: { title: "Category data" } },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-6/6 w-full mb-3" },
                          [
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
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-block mt-3" },
                              [
                                _c("input", {
                                  attrs: {
                                    accept: "image/*",
                                    id: "img-upload",
                                    type: "file"
                                  },
                                  on: { change: _vm.previewImage }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      icon: "icon-upload",
                                      "icon-pack": "feather",
                                      onclick:
                                        "document.getElementById('img-upload').click()",
                                      size: "small",
                                      type: "gradient"
                                    }
                                  },
                                  [_vm._v("Upload Photo\n\t\t\t\t\t\t\t\t\t")]
                                )
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col sm:w-2/2 w-full mb-3" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: { label: "Category Name", name: "name" },
                              model: {
                                value: _vm.form.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "name", $$v)
                                },
                                expression: "form.name"
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
                                    value: _vm.errors.has("name"),
                                    expression: "errors.has('name')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("name")))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c("vs-textarea", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              staticClass: "mb-0",
                              attrs: {
                                label: "Description",
                                name: "description"
                              },
                              model: {
                                value: _vm.form.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "description", $$v)
                                },
                                expression: "form.description"
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
                                    value: _vm.errors.has("description"),
                                    expression: "errors.has('description')"
                                  }
                                ],
                                staticClass: "text-danger text-sm"
                              },
                              [_vm._v(_vm._s(_vm.errors.first("description")))]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    { staticClass: "mb-5", attrs: { title: "Combinations" } },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  color: "primary",
                                  icon: "icon-plus",
                                  "icon-pack": "feather",
                                  size: "small",
                                  type: "filled"
                                },
                                on: { click: _vm.addAttribute }
                              },
                              [_vm._v("Add Combination\n\t\t\t\t\t\t\t\t")]
                            ),
                            _vm._v(" "),
                            _c(
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              [
                                _c(
                                  "div",
                                  { key: 1 },
                                  _vm._l(_vm.form.priceCombinations, function(
                                    attr,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "vx-row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-8/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "combination-" + index,
                                                label: "Combination"
                                              },
                                              model: {
                                                value: attr.combination,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    attr,
                                                    "combination",
                                                    $$v
                                                  )
                                                },
                                                expression: "attr.combination"
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
                                                    value: _vm.errors.has(
                                                      "combination-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('combination-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "combination-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required|min_value:0",
                                                  expression:
                                                    "'required|min_value:0'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "price-" + index,
                                                label: "Price",
                                                type: "number"
                                              },
                                              model: {
                                                value: attr.price,
                                                callback: function($$v) {
                                                  _vm.$set(attr, "price", $$v)
                                                },
                                                expression: "attr.price"
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
                                                    value: _vm.errors.has(
                                                      "price-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('price-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "price-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "attribute-actions mt-5"
                                              },
                                              [
                                                index || (!index && index > 1)
                                                  ? _c("vs-button", {
                                                      staticClass: "ml-2",
                                                      attrs: {
                                                        color: "danger",
                                                        icon: "icon-minus",
                                                        "icon-pack": "feather",
                                                        radius: "",
                                                        type: "border"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removeAttribute(
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: { title: "Printing Criteria" }
                    },
                    [
                      _c("vx-card", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                          [
                            _c(
                              "vs-button",
                              {
                                staticClass: "mb-4",
                                attrs: {
                                  color: "primary",
                                  icon: "icon-plus",
                                  "icon-pack": "feather",
                                  size: "small",
                                  type: "filled"
                                },
                                on: { click: _vm.addPrintingCriteria }
                              },
                              [
                                _vm._v(
                                  "Add Printing Criteria\n\t\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              [
                                _c(
                                  "div",
                                  { key: 2 },
                                  _vm._l(_vm.form.printCriterias, function(
                                    criteria,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      { staticClass: "vx-row" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-8/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required",
                                                  expression: "'required'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "criteria-" + index,
                                                label: "Criteria"
                                              },
                                              model: {
                                                value: criteria.criteria,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    criteria,
                                                    "criteria",
                                                    $$v
                                                  )
                                                },
                                                expression: "criteria.criteria"
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
                                                    value: _vm.errors.has(
                                                      "criteria-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('criteria-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "criteria-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c("vs-input", {
                                              directives: [
                                                {
                                                  name: "validate",
                                                  rawName: "v-validate",
                                                  value: "required|min_value:0",
                                                  expression:
                                                    "'required|min_value:0'"
                                                }
                                              ],
                                              staticClass: "w-full",
                                              attrs: {
                                                name: "criteria-price-" + index,
                                                label: "Price",
                                                type: "number",
                                                W: ""
                                              },
                                              model: {
                                                value: criteria.price,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    criteria,
                                                    "price",
                                                    $$v
                                                  )
                                                },
                                                expression: "criteria.price"
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
                                                    value: _vm.errors.has(
                                                      "criteria-price-" + index
                                                    ),
                                                    expression:
                                                      "errors.has('criteria-price-'+index)"
                                                  }
                                                ],
                                                staticClass:
                                                  "text-danger text-sm"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.errors.first(
                                                      "criteria-price-" + index
                                                    )
                                                  )
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "vx-col md:w-2/12 w-full mb-3"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "attribute-actions mt-5"
                                              },
                                              [
                                                index || (!index && index > 1)
                                                  ? _c("vs-button", {
                                                      staticClass: "ml-2",
                                                      attrs: {
                                                        color: "danger",
                                                        icon: "icon-minus",
                                                        "icon-pack": "feather",
                                                        radius: "",
                                                        type: "border"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.removePrintingCriteria(
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ],
                          1
                        )
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
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/category/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/category/create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=afbe82da& */ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/category/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=afbe82da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
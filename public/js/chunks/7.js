(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../filters/filters */ "./resources/js/src/filters/filters.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./resources/js/src/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mounted: function mounted() {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== '';
    },
    categories: function categories() {
      return [{
        id: 1000,
        name: 'T-shirt',
        combinations: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 1',
          price: '150'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 2',
          price: '100'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 3',
          price: '120'
        }],
        printingCriteria: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'B/W',
          price: '15'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'Color',
          price: '30'
        }]
      }, {
        id: 1001,
        name: 'Hoodie',
        combinations: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 8',
          price: '150'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 7',
          price: '100'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Combination 5',
          price: '120'
        }],
        printingCriteria: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'B/W',
          price: '15'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'Color',
          price: '30'
        }]
      }, {
        id: 1002,
        name: 'Mug',
        combinations: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Magic',
          price: '50'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: 'Normal',
          price: '25'
        }],
        printingCriteria: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'B/W',
          price: '15'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'Color',
          price: '30'
        }]
      }, {
        id: 1003,
        name: 'Mouse Pad',
        combinations: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: '15*30',
          price: '50'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          combination: '30*50',
          price: '100'
        }],
        printingCriteria: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'B/W',
          price: '15'
        }, {
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])(),
          criteria: 'Color',
          price: '30'
        }]
      }];
    }
  },
  data: function data() {
    return {
      form: {
        name: '',
        description: '',
        category: '',
        basePrice: 0,
        combinations: [],
        printingCriteria: []
      },
      uploadedImage: null,
      is_requesting: false
    };
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"]
  },
  methods: {
    resetCombinationAndPrinting: function resetCombinationAndPrinting() {
      this.form.combinations = [];
      this.form.printingCriteria = [];
    },
    uploadImages: function uploadImages(e) {
      var selectedImages = e.target.files;

      if (!selectedImages.length) {
        return false;
      }

      this.form.images = [];

      for (var i = 0; i < selectedImages.length; i++) {
        this.form.images.push(selectedImages[i]);
      }
    },
    create: function create() {
      console.log(this.form);
      this.$vs.notify({
        title: 'Error',
        text: 'not yet handled',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
      });
      /*this.is_requesting=true;
      let form_data = new FormData();
      for (let key in this.form ) {
      if ((key === 'images') && this.form.hasOwnProperty(key)){
      for (let i=0; i<this.form[key].length; i++){
      		form_data.append(key+'[]', this.form[key][i]);
      }
      }
      else {
      form_data.append(key, this.form[key]);
      }
      }
      */
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
          _this.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4& ***!
  \****************************************************************************************************************************************************************************************************************/
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
      ? _c("div", { staticClass: " w-full mb-base" }, [
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
                    { staticClass: "mb-5", attrs: { title: "Product data" } },
                    [
                      _c("vx-card", [
                        _c("div", { staticClass: "vx-row" }, [
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
                            { staticClass: "vx-col md:w-4/12 mt-1" },
                            [
                              _c(
                                "vs-select",
                                {
                                  staticClass: "w-full",
                                  attrs: { label: "Category" },
                                  on: {
                                    change: _vm.resetCombinationAndPrinting
                                  },
                                  model: {
                                    value: _vm.form.category,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "category", $$v)
                                    },
                                    expression: "form.category"
                                  }
                                },
                                _vm._l(_vm.categories, function(category) {
                                  return _c("vs-select-item", {
                                    key: category.id,
                                    attrs: {
                                      text: category.name,
                                      value: category
                                    }
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
                            { staticClass: "vx-col md:w-6/12 mb-3" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: { label: "Product Name" },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-2/12 mb-3" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  type: "number",
                                  label: "Product Base Price"
                                },
                                model: {
                                  value: _vm.form.basePrice,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "basePrice", $$v)
                                  },
                                  expression: "form.basePrice"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-6/6 w-full mt-3" },
                            [
                              _c("vs-textarea", {
                                attrs: { label: "Description" },
                                model: {
                                  value: _vm.form.description,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "description", $$v)
                                  },
                                  expression: "form.description"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "tab-content",
                    {
                      staticClass: "mb-5",
                      attrs: { title: "Product Attributes" }
                    },
                    [
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full" },
                          [
                            _c("vx-card", { staticClass: "vx-row" }, [
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                                [
                                  _c(
                                    "vs-select",
                                    {
                                      staticClass: "w-full",
                                      attrs: {
                                        label: "Combinations",
                                        multiple: "",
                                        placeholder: "Combinations"
                                      },
                                      model: {
                                        value: _vm.form.combinations,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "combinations",
                                            $$v
                                          )
                                        },
                                        expression: "form.combinations"
                                      }
                                    },
                                    _vm._l(
                                      _vm.form.category.combinations,
                                      function(item, index) {
                                        return _c("vs-select-item", {
                                          key: index,
                                          attrs: {
                                            text: item.combination,
                                            value: item
                                          }
                                        })
                                      }
                                    ),
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-list",
                                    [
                                      _c("vs-list-header", {
                                        attrs: {
                                          icon: "supervisor_account",
                                          title: "Selected Combinations"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "transition-group",
                                        {
                                          attrs: {
                                            mode: "out-in",
                                            name: "slide-down"
                                          }
                                        },
                                        _vm._l(_vm.form.combinations, function(
                                          combination
                                        ) {
                                          return _c("vs-list-item", {
                                            key: combination.id,
                                            attrs: {
                                              icon: "check",
                                              title: combination.combination,
                                              subtitle: combination.price
                                            }
                                          })
                                        }),
                                        1
                                      )
                                    ],
                                    1
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
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full" },
                          [
                            _c("vx-card", { staticClass: "vx-row" }, [
                              _c(
                                "div",
                                { staticClass: "vx-col md:w-1/1 w-full mt-3" },
                                [
                                  _c(
                                    "vs-select",
                                    {
                                      staticClass: "w-full",
                                      attrs: {
                                        label: "Printing Criteria",
                                        multiple: "",
                                        placeholder: "Printing Criteria"
                                      },
                                      model: {
                                        value: _vm.form.printingCriteria,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "printingCriteria",
                                            $$v
                                          )
                                        },
                                        expression: "form.printingCriteria"
                                      }
                                    },
                                    _vm._l(
                                      _vm.form.category.printingCriteria,
                                      function(item, index) {
                                        return _c("vs-select-item", {
                                          key: index,
                                          attrs: {
                                            text: item.criteria,
                                            value: item
                                          }
                                        })
                                      }
                                    ),
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-list",
                                    [
                                      _c("vs-list-header", {
                                        attrs: {
                                          icon: "supervisor_account",
                                          title: "Selected Printing Criteria"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "transition-group",
                                        {
                                          attrs: {
                                            mode: "out-in",
                                            name: "slide-down"
                                          }
                                        },
                                        _vm._l(
                                          _vm.form.printingCriteria,
                                          function(item) {
                                            return _c("vs-list-item", {
                                              key: item.id,
                                              attrs: {
                                                icon: "check",
                                                title: item.criteria,
                                                subtitle: item.price
                                              }
                                            })
                                          }
                                        ),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ]
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

/***/ "./resources/js/src/utils.js":
/*!***********************************!*\
  !*** ./resources/js/src/utils.js ***!
  \***********************************/
/*! exports provided: uuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
function uuid() {
  return Math.random().toString(16).slice(2);
}

/***/ }),

/***/ "./resources/js/src/views/product/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/product/create.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6504c4b4& */ "./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/product/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/product/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=6504c4b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
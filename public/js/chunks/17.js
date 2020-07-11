(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../filters/filters */ "./resources/js/src/filters/filters.js");
<<<<<<< HEAD
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
=======
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD


=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  mounted: function mounted() {
<<<<<<< HEAD
    this.getCategories();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== '';
=======
    this.getPrintCriterias();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any();
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
    }
  },
  data: function data() {
    return {
<<<<<<< HEAD
      combinations: [],
      categories: [],
      form: {
        name: '',
        description: '',
        category: '',
        base_price: 0,
        priceCombinations: []
      },
      uploadedImage: null,
=======
      printCriterias: [],
      form: {
        name: '',
        prices: []
      },
      uploadedImages: null,
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
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
<<<<<<< HEAD
    resetCombinations: function resetCombinations() {
      this.form.priceCombinations = [];
    },
    create: function create() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this.is_requesting = true; // create new object for sending object without extra data

          var sentObject = _objectSpread({}, _this.form);

          sentObject.category_id = sentObject.category.id;
          var form_data = new FormData();

          for (var key in sentObject) {
            if (key === 'priceCombinations') {
              form_data.append(key, JSON.stringify(sentObject[key]));
            } else if (key === 'image') {
              form_data.append(key, sentObject[key][0]);
            } else {
              form_data.append(key, sentObject[key]);
            }
          }

          _this.$store.dispatch('product/create', form_data).then(function (response) {
            _this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            _this.$router.push({
              name: 'product'
            });

            _this.is_requesting = false;
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
    previewImage: function previewImage(event) {
      var _this2 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this2.uploadedImage = e.target.result;
          _this2.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    },
    getCategories: function getCategories() {
      var _this3 = this;

      // get all categories
      this.$vs.loading({
        container: this.$refs.create.$el,
        scale: 0.5
      });
      this.$store.dispatch('category/getData', this.payload).then(function (response) {
        _this3.categories = response.data.data;

        _this3.$vs.loading.close(_this3.$refs.create.$el);
=======
    combinationNameFromId: function combinationNameFromId(id) {
      for (var i = 0; i < this.printCriterias.length; i++) {
        if (this.printCriterias[i].id === id) {
          return this.printCriterias[i].criteria;
        }
      }
    },
    getPrintCriterias: function getPrintCriterias() {
      var _this = this;

      this.$store.dispatch('criteria/getData', this.payload).then(function (response) {
        _this.printCriterias = response.data.data;
        console.log(_this.printCriterias);
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
      }).catch(function (error) {
        console.log(error); // this.$vs.loading.close(this.$refs.browse);

        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
<<<<<<< HEAD
    getCombinations: function getCombinations(category) {
      var _this4 = this;

      this.$store.dispatch('combination/getData', "?category=".concat(category.id)).then(function (response) {
        _this4.combinations = response.data.data;
      }).catch(function (error) {
        console.log(error);

        _this4.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
=======
    create: function create() {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          // if form have no errors
          _this2.is_requesting = true; // create new object for sending object without extra data

          var form_data = new FormData();

          for (var key in _this2.form) {
            if (key === 'images' && _this2.form.hasOwnProperty(key)) {
              for (var i = 0; i < _this2.form[key].length; i++) {
                form_data.append(key + '[]', _this2.form[key][i]);
              }
            } else {
              form_data.append(key, _this2.form[key]);
            }
          }

          _this2.$store.dispatch('design/create', form_data).then(function (response) {
            _this2.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });

            _this2.$router.push({
              name: 'design'
            });

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
    previewImage: function previewImage(event) {
      var _this3 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this3.uploadedImage = e.target.result;
          _this3.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4& ***!
  \****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53& ***!
  \***************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
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
<<<<<<< HEAD
        { ref: "create", attrs: { title: "Create product" } },
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
                        { staticClass: "vx-col md:w-4/12" },
                        [
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
                              staticClass: "w-full",
                              attrs: { label: "Category", name: "category" },
                              on: { change: _vm.getCombinations },
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
                                attrs: { text: category.name, value: category }
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
                                  value: _vm.errors.has("category"),
                                  expression: "errors.has('category')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("category")))]
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
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required",
                                expression: "'required'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: { label: "Product Name", name: "name" },
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
                        { staticClass: "vx-col md:w-2/12 mb-3" },
                        [
                          _c("vs-input", {
                            directives: [
                              {
                                name: "validate",
                                rawName: "v-validate",
                                value: "required|min_value:0",
                                expression: "'required|min_value:0'"
                              }
                            ],
                            staticClass: "w-full",
                            attrs: {
                              label: "Product Base Price",
                              name: "base price",
                              type: "number"
                            },
                            model: {
                              value: _vm.form.base_price,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "base_price", $$v)
                              },
                              expression: "form.base_price"
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
                                  value: _vm.errors.has("base price"),
                                  expression: "errors.has('base price')"
                                }
                              ],
                              staticClass: "text-danger text-sm"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("base price")))]
                          )
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
                  attrs: { title: "Product Combinations" }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-2/2 w-full" },
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
                                    items: "combinations",
                                    placeholder: "Combinations"
                                  },
                                  model: {
                                    value: _vm.form.priceCombinations,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "priceCombinations",
                                        $$v
                                      )
                                    },
                                    expression: "form.priceCombinations"
                                  }
                                },
                                _vm._l(_vm.combinations, function(item, index) {
                                  return _c("vs-select-item", {
                                    key: index,
                                    attrs: {
                                      text: item.combination,
                                      value: item.id
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ])
=======
        { ref: "create", attrs: { title: "Create design" } },
        [
          _c("vx-card", [
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col md:w-12/12 w-full mb-3" }, [
                _c(
                  "div",
                  {
                    staticClass: "image-preview",
                    staticStyle: { display: "inline-flex" }
                  },
                  _vm._l(_vm.uploadedImages, function(image) {
                    return _vm.uploadedImages.length
                      ? _c("img", {
                          staticClass: "preview-large",
                          attrs: { src: image.url }
                        })
                      : _vm._e()
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "d-block mt-3" },
                  [
                    _c("input", {
                      staticClass: "form-control d-none",
                      attrs: { type: "file", id: "img-upload", multiple: "" },
                      on: { change: _vm.uploadImages }
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
                      [_vm._v("Upload Photos\n\t\t\t\t\t\t\t")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-12/12 w-full mb-3" },
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
                    attrs: { label: "Name", name: "name" },
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
                { staticClass: "vx-col md:w-12/12 w-full" },
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
                              label: "Prices",
                              multiple: "",
                              items: "combinations",
                              placeholder: "Combinations"
                            },
                            model: {
                              value: _vm.form.prices,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "prices", $$v)
                              },
                              expression: "form.prices"
                            }
                          },
                          _vm._l(_vm.printCriterias, function(item) {
                            return _c("vs-select-item", {
                              key: item.id,
                              attrs: {
                                text: item.criteria,
                                value: { id: item.id }
                              }
                            })
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-list",
                          [
                            _c(
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              _vm._l(_vm.form.prices, function(price, index) {
                                return _c(
                                  "vs-list-item",
                                  {
                                    key: index + 1,
                                    attrs: {
                                      icon: "check",
                                      title: _vm.combinationNameFromId(price.id)
                                    }
                                  },
                                  [
                                    _c("vs-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required|min_value:0",
                                          expression: "'required|min_value:0'"
                                        }
                                      ],
                                      staticClass: "w-full",
                                      attrs: {
                                        label: "Price",
                                        name: "price-" + index,
                                        type: "number"
                                      },
                                      model: {
                                        value: price.price,
                                        callback: function($$v) {
                                          _vm.$set(price, "price", $$v)
                                        },
                                        expression: "price.price"
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
                                        staticClass: "text-danger text-sm"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("price-" + index)
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/1 w-full mt-4" },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "mb-4 ml-auto",
                            attrs: {
                              color: "primary",
                              icon: "icon-save",
                              "icon-pack": "feather",
                              type: "filled"
                            },
                            on: { click: _vm.create }
                          },
                          [_vm._v("Create\n\t\t\t\t\t\t\t\t")]
                        )
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
                      ],
                      1
                    )
                  ])
<<<<<<< HEAD
                ]
              )
            ],
            1
          )
=======
                ],
                1
              )
            ])
          ])
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/product/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/product/create.vue ***!
  \***************************************************/
=======
/***/ "./resources/js/src/views/design/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/design/create.vue ***!
  \**************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=6504c4b4& */ "./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/product/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=3846bd53& */ "./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/design/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
<<<<<<< HEAD
  _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/product/create.vue"
=======
component.options.__file = "resources/js/src/views/design/create.vue"
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/product/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
=======
/***/ "./resources/js/src/views/design/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/design/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=script&lang=js&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
=======
/***/ "./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4& ***!
  \**********************************************************************************/
=======
/***/ "./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53& ***!
  \*********************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=6504c4b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/product/create.vue?vue&type=template&id=6504c4b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_6504c4b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=3846bd53& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/design/create.vue?vue&type=template&id=3846bd53&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_3846bd53___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5



/***/ })

}]);
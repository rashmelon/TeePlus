(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
//
//
//
//
//
//
//
//
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
/* harmony import */ var _combination_ShowSingle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combination/ShowSingle */ "./resources/js/src/views/combination/ShowSingle.vue");
/* harmony import */ var _criteria_ShowSingle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../criteria/ShowSingle */ "./resources/js/src/views/criteria/ShowSingle.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import {FormWizard, TabContent} from 'vue-form-wizard'
// import 'vue-form-wizard/dist/vue-form-wizard.min.css'
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  mounted: function mounted() {
    this.getFoods();
    this.getCities();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.title !== "" && this.form.date !== '' && this.form.price !== '' && this.form.days !== '' && this.form.nights !== '' && this.form.season !== '' && this.form.description !== '' && this.form.food_id !== '' && this.form.total_tickets !== '' && this.form.start_city !== '' && this.form.end_city !== '' && this.form.currency !== '';
    }
  },
  data: function data() {
    return {
      roles: [],
      food: [],
      cities: [],
      form: {
        home_page: false,
        title: '',
        date: '',
        price: 0,
        currency: '',
        days: 0,
        nights: 0,
        season: '',
        description: '',
        images: [],
        schedule: [],
        inclusions: [],
        exclusions: [],
        accommodations: [],
        food_id: 0,
        total_tickets: 0,
        start_city_id: 0,
        end_city_id: 0
      },
=======


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "edit",
  data: function data() {
    return {
      form: {},
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
      uploadedImage: null,
      is_requesting: false,
      combinations: [],
      criterias: []
    };
  },
  components: {
<<<<<<< HEAD
    FormWizard: FormWizard,
    TabContent: TabContent
  },
  methods: {
    getFoods: function getFoods() {
      var _this = this;

      this.$store.dispatch('food/getData', '').then(function (response) {
        _this.food = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    getCities: function getCities() {
      var _this2 = this;

      this.$store.dispatch('city/getData', '?country=egypt').then(function (response) {
        _this2.cities = response.data.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    addSchedule: function addSchedule() {
      this.form.schedule.push({
        day_number: this.form.schedule.length,
        description: ''
      });
    },
    removeSchedule: function removeSchedule(index) {
      if (this.form.schedule.length > 0) {
        this.form.schedule.splice(index, 1);
      }
    },
    addInclusion: function addInclusion() {
      this.form.inclusions.push({
        name: ''
      });
    },
    removeInclusion: function removeInclusion(index) {
      if (this.form.inclusions.length > 0) {
        this.form.inclusions.splice(index, 1);
      }
    },
    addExclusion: function addExclusion() {
      this.form.exclusions.push({
        name: ''
      });
    },
    removeExclusion: function removeExclusion(index) {
      if (this.form.exclusions.length > 0) {
        this.form.exclusions.splice(index, 1);
      }
    },
    addAccommodation: function addAccommodation() {
      this.form.accommodations.push({
        city: '',
        hotel: '',
        rate: 1,
        nights: 1,
        dbl: 0,
        sgl: 0,
        child: 0
      });
    },
    removeAccommodation: function removeAccommodation(index) {
      if (this.form.accommodations.length > 0) {
        this.form.accommodations.splice(index, 1);
      }
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
      var _this3 = this;

      this.is_requesting = true;
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'images' && this.form.hasOwnProperty(key)) {
          for (var i = 0; i < this.form[key].length; i++) {
            form_data.append(key + '[]', this.form[key][i]);
          }
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('package/create', form_data).then(function (response) {
        _this3.$router.push("/dashboard/package");

        _this3.$vs.notify({
          title: 'Success',
          text: response.data.message,
=======
    ShowCombinations: _combination_ShowSingle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ShowCriterias: _criteria_ShowSingle__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getCategory();
  },
  methods: {
    getCategory: function getCategory() {
      var _this = this;

      // this.$vs.loading({container: this.$refs.loadingContainer.$el, scale: 0.5});
      this.$store.dispatch('category/view', this.$route.params.id).then(function (response) {
        _this.form = response.data.data; // preview used image

        if (_this.form.image) {
          _this.uploadedImage = _this.form.image.url;
        }

        _this.getCombinations();

        _this.getCriterias();
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
    getCombinations: function getCombinations() {
      var _this2 = this;

      this.$store.dispatch('combination/getData', "?category=".concat(this.$route.params.id)).then(function (response) {
        _this2.combinations = response.data.data;
      }).catch(function (error) {
        console.log(error);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
<<<<<<< HEAD
      }).catch(function (error) {
        console.log(error);

=======
      });
    },
    getCriterias: function getCriterias() {
      var _this3 = this;

      this.$store.dispatch('criteria/getData', "?category=".concat(this.$route.params.id)).then(function (response) {
        _this3.criterias = response.data.data;
      }).catch(function (error) {
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
        _this3.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    previewImage: function previewImage(event) {
      var _this4 = this;

      // Reference to the DOM input element
      var input = event.target; // Ensure that you have a file before attempting to read it

      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader(); // Define a callback function to run, when FileReader finishes its job

        reader.onload = function (e) {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          _this4.uploadedImage = e.target.result;
          _this4.form.image = input.files;
        }; // Start the reader job - read file as a data url (base64 format)


        reader.readAsDataURL(input.files[0]);
      }
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n", ""]);
=======
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108& ***!
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
<<<<<<< HEAD
    _vm.can("create-package")
      ? _c(
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              { ref: "create", attrs: { title: "Create Package" } },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { label: "Package Title" },
                        model: {
                          value: _vm.form.title,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "title", $$v)
                          },
                          expression: "form.title"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder"
                      },
                      [
                        _c("div", { staticClass: "vs-con-input" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date,
                                expression: "form.date"
                              }
                            ],
                            staticClass:
                              "vs-inputx vs-input--input normal hasIcon hasValue dob-input",
                            staticStyle: {
                              border: "1px solid rgba(0, 0, 0, 0.2)"
                            },
                            attrs: { required: "", type: "date" },
                            domProps: { value: _vm.form.date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "date", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label"
                            },
                            [
                              _vm._v(
                                "\n                                    Date\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("i", {
                            staticClass:
                              "vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"
                          })
                        ]),
                        _vm._v(" "),
                        _c("span")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Price:" },
                          model: {
                            value: _vm.form.price,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "price", $$v)
                            },
                            expression: "form.price"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.currency,
                          expression: "form.currency"
                        }
                      ],
                      attrs: { type: "radio", name: "currency", value: "LE" },
                      domProps: { checked: _vm._q(_vm.form.currency, "LE") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "currency", "LE")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("LE")]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.currency,
                          expression: "form.currency"
                        }
                      ],
                      attrs: { type: "radio", name: "currency", value: "$" },
                      domProps: { checked: _vm._q(_vm.form.currency, "$") },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.form, "currency", "$")
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", [_vm._v("$")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Days:" },
                          model: {
                            value: _vm.form.days,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "days", $$v)
                            },
                            expression: "form.days"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Nights:" },
                          model: {
                            value: _vm.form.nights,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "nights", $$v)
                            },
                            expression: "form.nights"
                          }
                        })
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { label: "Season" },
                        model: {
                          value: _vm.form.season,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "season", $$v)
                          },
                          expression: "form.season"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: { type: "file", multiple: "" },
                      on: { change: _vm.uploadImages }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c("ul", { staticClass: "switch-container" }, [
                      _c(
                        "li",
                        [
                          _c("label", [_vm._v("Is Featured")]),
                          _vm._v(" "),
                          _c("vs-switch", {
                            model: {
                              value: _vm.form.home_page,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "home_page", $$v)
                              },
                              expression: "form.home_page"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mt-5" },
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Food",
                            autocomplete: "",
                            "label-placeholder": "Food",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.food_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "food_id", $$v)
                            },
                            expression: "form.food_id"
                          }
                        },
                        _vm._l(_vm.food, function(item, index) {
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
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Start City",
                            autocomplete: "",
                            "label-placeholder": "Start City",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.start_city_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "start_city_id", $$v)
                            },
                            expression: "form.start_city_id"
                          }
                        },
                        _vm._l(_vm.cities, function(item, index) {
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
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "End City",
                            autocomplete: "",
                            "label-placeholder": "End City",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.end_city_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "end_city_id", $$v)
                            },
                            expression: "form.end_city_id"
                          }
                        },
                        _vm._l(_vm.cities, function(item, index) {
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
                  _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                    _c(
                      "div",
                      { staticClass: "centerx pt-6" },
                      [
                        _c("vs-input-number", {
                          attrs: { label: "Total Tickets:" },
                          model: {
                            value: _vm.form.total_tickets,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "total_tickets", $$v)
                            },
                            expression: "form.total_tickets"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "vs-row",
                  {
                    attrs: {
                      "vs-align": "center",
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
                          "vs-w": "12"
                        }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            attrs: {
                              id: "btn-create",
                              disabled: !_vm.validateForm,
                              "icon-pack": "feather",
                              icon: "icon-save",
                              type: "gradient"
                            },
                            on: {
                              click: function($event) {
                                _vm.is_requesting
                                  ? _vm.$store.dispatch(
                                      "viewWaitMessage",
                                      _vm.$vs
                                    )
                                  : _vm.create()
                              }
                            }
                          },
                          [_vm._v("Create Package")]
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
          ],
          1
        )
=======
    _vm.can("view-category")
      ? _c("div", { staticClass: "w-full mb-base" }, [
          _c(
            "div",
            { ref: "loadingContainer" },
            [
              _c(
                "vx-card",
                { staticClass: "my-5", attrs: { "collapse-action": "" } },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c("div", { staticClass: "vx-col md:w-6/6 w-full mb-3" }, [
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
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col sm:w-2/2 w-full mb-3" }, [
                      _c("h3", [_vm._v(_vm._s(this.form.name))])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-col md:w-1/1 w-full mt-3" }, [
                      _c("p", [_vm._v(_vm._s(this.form.description))])
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "show-single-category-compinations" },
                [
                  _c(
                    "vx-card",
                    {
                      staticClass: "my-5",
                      attrs: {
                        "collapse-action": "",
                        title: "Category Combinations"
                      }
                    },
                    [
                      _c(
                        "vs-table",
                        {
                          attrs: { data: _vm.combinations },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(
                                    combination,
                                    index
                                  ) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(combination.combination) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(combination.price) +
                                              "\n                                "
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
                            1281192424
                          )
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _c("vs-th", [_vm._v("Combination")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Price")])
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
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "show-single-criteria-compinations" },
                [
                  _c(
                    "vx-card",
                    {
                      staticClass: "my-5",
                      attrs: {
                        "collapse-action": "",
                        title: "Category Printing Criteria"
                      }
                    },
                    [
                      _c(
                        "vs-table",
                        {
                          attrs: { data: _vm.criterias },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "default",
                                fn: function(ref) {
                                  var data = ref.data
                                  return _vm._l(data, function(
                                    criteria,
                                    index
                                  ) {
                                    return _c(
                                      "vs-tr",
                                      { key: index },
                                      [
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(criteria.criteria) +
                                              "\n                                "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _vm._v(
                                            "\n                                    " +
                                              _vm._s(criteria.price) +
                                              "\n                                "
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
                            1558127240
                          )
                        },
                        [
                          _c(
                            "template",
                            { slot: "thead" },
                            [
                              _c("vs-th", [_vm._v("Criteria")]),
                              _vm._v(" "),
                              _c("vs-th", [_vm._v("Price")])
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
            ],
            1
          )
        ])
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/create.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/package/create.vue ***!
  \***************************************************/
=======
/***/ "./resources/js/src/views/category/view.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/category/view.vue ***!
  \**************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=14a1ec22& */ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=4f90e108& */ "./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&");
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/package/create.vue"
=======
component.options.__file = "resources/js/src/views/category/view.vue"
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
=======
/***/ "./resources/js/src/views/category/view.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22& ***!
  \**********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108& ***!
  \*********************************************************************************/
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=14a1ec22& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/create.vue?vue&type=template&id=14a1ec22&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_14a1ec22___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./view.vue?vue&type=template&id=4f90e108& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/view.vue?vue&type=template&id=4f90e108&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_view_vue_vue_type_template_id_4f90e108___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 1e7f1c5ffa3ecb58bed3588ef67a6589920686b5



/***/ })

}]);
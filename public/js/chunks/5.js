(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./resources/js/src/utils.js");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-agency",
  mounted: function mounted() {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== "" && this.form.email !== '' && this.form.address !== '' && this.form.phone !== '' && this.form.image !== '' && this.form.description !== '' && this.form.working_hours !== '' && this.form.location_embed !== '' && this.form.phone !== '';
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  mounted: function mounted() {},
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== '';
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
    }
  },
  data: function data() {
    return {
<<<<<<< HEAD
      roles: [],
      form: {
        name: '',
        email: '',
        address: '',
        phone: '',
        image: null,
        description: '',
        working_hours: '',
        homepage: false,
        location_embed: ''
=======
      form: {
        name: '',
        description: '',
        attributes: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])(),
          combination: '',
          price: ''
        }],
        printingCriteria: [{
          id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])(),
          criteria: '',
          price: ''
        }]
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
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
<<<<<<< HEAD
    create: function create() {
      var _this = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create",
        color: 'primary',
        scale: 0.45
      });
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'image' && this.form.hasOwnProperty(key)) {
          if (this.form[key]) {
            for (var i = 0; i < this.form[key].length; i++) {
              form_data.append(key, this.form[key][i]);
            }
          }
        } else if (key === 'location_embed') {
          form_data.append(key, this.encodeIframe(this.form[key]));
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('agency/create', form_data).then(function (response) {
        _this.is_requesting = false;

        _this.$vs.loading.close("#btn-create > .con-vs-loading");

        _this.$router.push("/dashboard/agency/".concat(response.data.data.id));

        _this.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this.is_requesting = false;

        _this.$vs.loading.close("#btn-create > .con-vs-loading");

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
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
    encodeIframe: function encodeIframe() {
      var test = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var temp = "";

      for (var i = 0; i < test.length; i++) {
        temp += String.fromCharCode(test.charCodeAt(i) + 1);
      }

      return temp;
=======
    addAttribute: function addAttribute() {
      this.form.attributes.push({
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])(),
        name: '',
        values: ''
      });
    },
    removeAttribute: function removeAttribute(index) {
      this.form.attributes.splice(index, 1);
    },
    addPrintingCriteria: function addPrintingCriteria() {
      this.form.printingCriteria.push({
        id: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])(),
        criteria: '',
        price: ''
      });
    },
    removePrintingCriteria: function removePrintingCriteria(index) {
      this.form.printingCriteria.splice(index, 1);
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
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n", ""]);
=======
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n.vs-input-number {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.attribute-actions {\n  -webkit-box-align: baseline;\n          align-items: baseline;\n  display: -webkit-box;\n  display: flex;\n}\n", ""]);
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17

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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac& ***!
  \***************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \*****************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
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
    _c(
      "div",
      { staticClass: "vx-col w-full mb-base" },
      [
        _c(
          "vx-card",
          { ref: "create", attrs: { title: "Agency Information" } },
          [
            _c("div", { staticClass: "vx-row" }, [
              _c("div", { staticClass: "vx-col sm:w-1/2 w-full mb-6" }, [
                _c(
                  "div",
                  {
                    staticClass: "image-preview",
                    staticStyle: { display: "inline-flex" }
                  },
                  [
                    _c("img", {
                      staticClass: "preview",
                      attrs: {
                        alt: "agency photo",
                        src: _vm.uploadedImage
                          ? _vm.uploadedImage
                          : "/images/avatar-s-11.png"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "inline-flex",
                      position: "relative",
                      top: "-15px"
                    }
                  },
                  [
                    _c("input", {
                      attrs: {
                        id: "img-upload",
                        type: "file",
                        accept: "image/*"
                      },
                      on: { change: _vm.previewImage }
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-button",
                      {
                        attrs: {
                          size: "small",
                          "icon-pack": "feather",
                          icon: "icon-upload",
                          type: "gradient",
                          onclick:
                            "document.getElementById('img-upload').click()"
                        }
                      },
                      [_vm._v("Upload Agency Photo")]
                    )
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "name",
                      danger: _vm.errors.has("name"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("name"),
                      "icon-pack": "feather",
                      icon: "icon-user",
                      "label-placeholder": "Agency Name"
                    },
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
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|email",
                        expression: "'required|email'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "email",
                      danger: _vm.errors.has("email"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("email"),
                      "icon-pack": "feather",
                      icon: "icon-mail",
                      "label-placeholder": "Email"
                    },
                    model: {
                      value: _vm.form.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "email", $$v)
                      },
                      expression: "form.email"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "address",
                      danger: _vm.errors.has("address"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("address"),
                      "icon-pack": "feather",
                      icon: "icon-at-sign",
                      "label-placeholder": "Agency Address"
                    },
                    model: {
                      value: _vm.form.address,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "address", $$v)
                      },
                      expression: "form.address"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "phone",
                      danger: _vm.errors.has("phone"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("phone"),
                      "icon-pack": "feather",
                      icon: "icon-phone",
                      "label-placeholder": "Phone Number"
                    },
                    model: {
                      value: _vm.form.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "phone", $$v)
                      },
                      expression: "form.phone"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "working_hours",
                      danger: _vm.errors.has("working_hours"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("working_hours"),
                      "icon-pack": "feather",
                      icon: "icon-clock",
                      "label-placeholder": "Working Hours"
                    },
                    model: {
                      value: _vm.form.working_hours,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "working_hours", $$v)
                      },
                      expression: "form.working_hours"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col sm:w-1/2 w-full mb-6" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|min:3",
                        expression: "'required|min:3'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      name: "location_embed",
                      danger: _vm.errors.has("location_embed"),
                      "val-icon-danger": "clear",
                      "danger-text": _vm.errors.first("location_embed"),
                      "icon-pack": "feather",
                      icon: "icon-map-pin",
                      "label-placeholder":
                        "Location *copy embed from google maps*"
                    },
                    model: {
                      value: _vm.form.location_embed,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "location_embed", $$v)
                      },
                      expression: "form.location_embed"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col md:w-1/2 w-full mt-5" }, [
                _c("ul", { staticClass: "switch-container" }, [
                  _c(
                    "li",
                    [
                      _c("label", [_vm._v("Show in homepage")]),
                      _vm._v(" "),
                      _c("vs-switch", {
                        model: {
                          value: _vm.form.homepage,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "homepage", $$v)
                          },
                          expression: "form.homepage"
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-row m-2" },
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
                              ? _vm.$store.dispatch("viewWaitMessage", _vm.$vs)
                              : _vm.create()
                          }
                        }
                      },
                      [_vm._v("Create Agency")]
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
    _vm.can("create-employee")
      ? _c("div", { staticClass: "vx-col w-full mb-base" }, [
          _c(
            "div",
            { ref: "create", attrs: { title: "Create Category" } },
            [
              _c(
                "form-wizard",
                {
                  attrs: {
                    color: "rgb(var(--vs-primary))",
                    title: null,
                    subtitle: null,
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
                          { staticClass: "vx-col sm:w-2/2 w-full mb-3" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "image-preview",
                                staticStyle: { display: "inline-flex" }
                              },
                              [
                                _c("img", {
                                  staticClass: "preview",
                                  attrs: {
                                    alt: "photo",
                                    src: _vm.uploadedImage
                                      ? _vm.uploadedImage
                                      : "/images/no-image-found.png"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  display: "inline-flex",
                                  position: "relative",
                                  top: "-15px"
                                }
                              },
                              [
                                _c("input", {
                                  attrs: {
                                    id: "img-upload",
                                    type: "file",
                                    accept: "image/*"
                                  },
                                  on: { change: _vm.previewImage }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      size: "small",
                                      "icon-pack": "feather",
                                      icon: "icon-upload",
                                      type: "gradient",
                                      onclick:
                                        "document.getElementById('img-upload').click()"
                                    }
                                  },
                                  [_vm._v("Upload Photo")]
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
                              staticClass: "w-full",
                              attrs: { label: "Category Name" },
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
                          { staticClass: "vx-col md:w-1/1 w-full mt-3" },
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
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              _vm._l(_vm.form.attributes, function(
                                attr,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { key: attr.id, staticClass: "vx-row" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "vx-col md:w-8/12 w-full mb-3"
                                      },
                                      [
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: { label: "Combination" },
                                          model: {
                                            value: attr.combination,
                                            callback: function($$v) {
                                              _vm.$set(attr, "combination", $$v)
                                            },
                                            expression: "attr.combination"
                                          }
                                        })
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
                                          staticClass: "w-full",
                                          attrs: {
                                            type: "number",
                                            label: "Price"
                                          },
                                          model: {
                                            value: attr.price,
                                            callback: function($$v) {
                                              _vm.$set(attr, "price", $$v)
                                            },
                                            expression: "attr.price"
                                          }
                                        })
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
                                                    "icon-pack": "feather",
                                                    icon: "icon-minus",
                                                    color: "danger",
                                                    type: "border",
                                                    radius: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeAttribute(
                                                        index
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            index ===
                                            _vm.form.attributes.length - 1
                                              ? _c("vs-button", {
                                                  staticClass: "ml-2",
                                                  attrs: {
                                                    "icon-pack": "feather",
                                                    icon: "icon-plus",
                                                    color: "primary",
                                                    type: "border",
                                                    radius: ""
                                                  },
                                                  on: {
                                                    click: _vm.addAttribute
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
                              "transition-group",
                              { attrs: { mode: "out-in", name: "slide-down" } },
                              _vm._l(_vm.form.printingCriteria, function(
                                criteria,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { key: criteria.id, staticClass: "vx-row" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "vx-col md:w-8/12 w-full mb-3"
                                      },
                                      [
                                        _c("vs-input", {
                                          staticClass: "w-full",
                                          attrs: { label: "Criteria" },
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
                                        })
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
                                          staticClass: "w-full",
                                          attrs: {
                                            type: "number",
                                            label: "Price"
                                          },
                                          model: {
                                            value: criteria.price,
                                            callback: function($$v) {
                                              _vm.$set(criteria, "price", $$v)
                                            },
                                            expression: "criteria.price"
                                          }
                                        })
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
                                                    "icon-pack": "feather",
                                                    icon: "icon-minus",
                                                    color: "danger",
                                                    type: "border",
                                                    radius: ""
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removePrintingCriteria(
                                                        index
                                                      )
                                                    }
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            index ===
                                            _vm.form.printingCriteria.length - 1
                                              ? _c("vs-button", {
                                                  staticClass: "ml-2",
                                                  attrs: {
                                                    "icon-pack": "feather",
                                                    icon: "icon-plus",
                                                    color: "primary",
                                                    type: "border",
                                                    radius: ""
                                                  },
                                                  on: {
                                                    click:
                                                      _vm.addPrintingCriteria
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
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/agency/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/agency/create.vue ***!
  \**************************************************/
=======
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

/***/ "./resources/js/src/views/category/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/category/create.vue ***!
  \****************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=235800ac& */ "./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/agency/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=afbe82da& */ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
<<<<<<< HEAD
  _create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/agency/create.vue"
=======
component.options.__file = "resources/js/src/views/category/create.vue"
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/agency/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/agency/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
=======
/***/ "./resources/js/src/views/category/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=script&lang=js&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
=======
/***/ "./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac& ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da& ***!
  \***********************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=235800ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/create.vue?vue&type=template&id=235800ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_235800ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=afbe82da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/create.vue?vue&type=template&id=afbe82da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_afbe82da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17



/***/ })

}]);
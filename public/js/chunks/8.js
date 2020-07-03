(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
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
<<<<<<< HEAD
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "add-employee",
  mounted: function mounted() {
    this.getRoles();
  },
  computed: {
    validateForm: function validateForm() {
      return !this.errors.any() && this.form.name !== "" && this.form.email !== '' && this.form.password !== '' && this.form.confirm_password !== '';
    }
  },
  data: function data() {
    return {
      roles: [],
      form: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        image: null,
        role: ''
      },
      uploadedImage: null,
=======


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Agency",
  mounted: function mounted() {
    this.getAgenciesData(Date.now());
  },
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
      agencies: [],
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      is_requesting: false
    };
  },
  methods: {
<<<<<<< HEAD
    //Get A List Of All Roles.
    getRoles: function getRoles() {
=======
    getAgenciesData: function getAgenciesData(InitialTime) {
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      var _this = this;

      this.$vs.loading({
        container: this.$refs.create.$refs.content,
        scale: 0.5
      });
<<<<<<< HEAD
      this.$store.dispatch('rolesAndPermissions/getRoles', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.roles = response.data.data;
        _this.form.role = _this.roles[0].name;
=======
      this.$store.dispatch('agency/getData', '').then(function (response) {
        _this.$vs.loading.close(_this.$refs.browse);

        _this.resultTime = Date.now() - InitialTime;
        _this.agencies = response.data.data;
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      }).catch(function (error) {
        console.log(error);

        _this.$vs.loading.close(_this.$refs.create.$refs.content);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
<<<<<<< HEAD
    create: function create() {
=======
    confirmDeleteAgency: function confirmDeleteAgency(type) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
        accept: this.deleteAgency,
        parameters: [type]
      });
    },
    deleteAgency: function deleteAgency(params) {
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      var _this2 = this;

      if (!this.validateForm) return;
      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-create",
        color: 'primary',
        scale: 0.45
      });
<<<<<<< HEAD
      var form_data = new FormData();

      for (var key in this.form) {
        if (key === 'image' && this.form.hasOwnProperty(key)) {
          if (this.form[key]) {
            for (var i = 0; i < this.form[key].length; i++) {
              form_data.append(key, this.form[key][i]);
            }
          }
        } else if (key === 'phones') {
          form_data.append(key, JSON.stringify(this.form[key]));
        } else if (key === 'agency_id') {
          if (this.form[key]) {
            form_data.append(key, this.form[key]);
          }
        } else {
          form_data.append(key, this.form[key]);
        }
      }

      this.$store.dispatch('employee/create', form_data).then(function (response) {
=======
      this.$store.dispatch('agency/delete', params[0].id).then(function (response) {
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
        _this2.is_requesting = false;

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

<<<<<<< HEAD
        _this2.$router.push("/dashboard/employee/".concat(response.data.data.id));
=======
        _this2.agencies = _this2.agencies.filter(function (type) {
          return type.id !== params[0].id;
        });
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17

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

        _this2.$vs.loading.close("#btn-create > .con-vs-loading");

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
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
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-preview {\n  font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  top: 6px;\n  position: relative;\n}[dir=ltr] .image-preview {\n  padding-right: 20px;\n}[dir=rtl] .image-preview {\n  padding-left: 20px;\n}\n#img-upload {\n  display: none;\n}\nimg.preview {\n  width: 55px;\n  height: 55px;\n}\n[dir] img.preview {\n  border-radius: 50%;\n  background-color: white;\n  border: 1px solid #DDD;\n  padding: 5px;\n}\n", ""]);

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3& ***!
  \*****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c& ***!
  \***************************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
  return _c("div", [
    _vm.can("create-employee")
      ? _c(
=======
  return _vm.can("browse-agency")
    ? _c("div", [
        _c(
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
          "div",
          { staticClass: "vx-col w-full mb-base" },
          [
            _c(
              "vx-card",
              { ref: "create", attrs: { title: "Personal Information" } },
              [
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full mb-6" },
                    [
                      _c(
                        "vs-select",
                        {
                          staticClass: "w-full",
                          attrs: {
                            label: "Employee Role",
                            autocomplete: "",
                            "label-placeholder": "Employee Role",
                            "icon-pack": "feather",
                            icon: "icon-chevron-down",
                            color: "primary"
                          },
                          model: {
                            value: _vm.form.role,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "role", $$v)
                            },
                            expression: "form.role"
                          }
                        },
                        _vm._l(_vm.roles, function(item, index) {
                          return _c("vs-select-item", {
                            key: index,
                            attrs: { value: item.name, text: item.name }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
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
                            alt: "employee photo",
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
                          [_vm._v("Upload Employee Photo")]
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
                          "label-placeholder": "Employee Name"
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
                            value: "required|min:6|max:10",
                            expression: "'required|min:6|max:10'"
                          }
                        ],
                        ref: "password",
                        staticClass: "w-full",
                        attrs: {
                          name: "password",
                          danger: _vm.errors.has("password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("password"),
                          type: "password",
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Password"
                        },
                        model: {
                          value: _vm.form.password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "password", $$v)
                          },
                          expression: "form.password"
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
                            value: "min:6|max:10|confirmed:password",
                            expression: "'min:6|max:10|confirmed:password'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          type: "password",
                          name: "confirm_password",
                          danger: _vm.errors.has("confirm_password"),
                          "val-icon-danger": "clear",
                          "danger-text": _vm.errors.first("confirm_password"),
                          "icon-pack": "feather",
                          icon: "icon-lock",
                          "label-placeholder": "Confirm Password"
                        },
                        model: {
                          value: _vm.form.confirm_password,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "confirm_password", $$v)
                          },
                          expression: "form.confirm_password"
                        }
                      })
                    ],
                    1
                  )
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
<<<<<<< HEAD
                    _c(
=======
                    _c("b", { staticClass: "text-left vx-col w-full" }, [
                      _vm._v(
                        _vm._s(_vm.agencies.length) +
                          " results found in " +
                          _vm._s(_vm.resultTime) +
                          "ms"
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm.can("create-agency")
                  ? _c(
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
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
<<<<<<< HEAD
                              id: "btn-create",
                              disabled: !_vm.validateForm,
=======
                              to: "/dashboard/agency/create",
                              "vs-w": "3",
                              color: "primary",
                              type: "filled",
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
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
<<<<<<< HEAD
                          [_vm._v("Create Employee")]
=======
                          [_vm._v("  Add Agency")]
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
                        )
                      ],
                      1
                    )
<<<<<<< HEAD
=======
                  : _vm._e()
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { ref: "browse", staticClass: "vx-row" },
          _vm._l(_vm.agencies, function(agency) {
            return _c(
              "div",
              { staticClass: "vx-col w-full sm:w-1/2 md:w-1/3 mb-base" },
              [
                _c(
                  "vx-card",
                  { staticClass: "p-2" },
                  [
                    _c("vs-avatar", {
                      staticClass: "mx-auto mb-6 block",
                      attrs: {
                        size: "80px",
                        src:
                          agency.image && agency.image.url
                            ? agency.image.url
                            : "/images/avatar-s-11.png"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center" }, [
                      _c("h4", [_vm._v(_vm._s(agency.name))])
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-left vx-col w-full" }, [
                      _c("i", { staticClass: "fas fa-envelope" }),
                      _vm._v(
                        " " +
                          _vm._s(_vm.$t("Email") || "Email") +
                          "\n                        "
                      ),
                      _c(
                        "p",
                        {
                          staticClass: "text-grey txt-hover",
                          on: {
                            click: function($event) {
                              return _vm.copyToClipboard(agency.email)
                            }
                          }
                        },
                        [_vm._v(_vm._s(agency.email))]
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "template",
                      { slot: "footer" },
                      [
                        _c("vs-divider"),
                        _vm._v(" "),
                        _c("div", { staticClass: "flex justify-between" }, [
                          _vm.can("delete-agency")
                            ? _c(
                                "span",
                                { staticClass: "flex items-center" },
                                [
                                  _c(
                                    "vx-tooltip",
                                    {
                                      attrs: {
                                        color: "danger",
                                        text: _vm.$t("Delete") || "Delete"
                                      }
                                    },
                                    [
                                      _c("vs-button", {
                                        staticClass:
                                          "vs-con-loading__container",
                                        attrs: {
                                          id: "btn-delete-" + agency.id,
                                          color: "danger",
                                          type: "filled",
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
                                              : _vm.confirmDeleteAgency(agency)
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
                          _vm.can("edit-agency") ||
                          _vm.$store.getters["auth/userData"].id ===
                            _vm.$route.params.id
                            ? _c(
                                "span",
                                { staticClass: "flex items-center" },
                                [
                                  _c("vs-button", {
                                    attrs: {
                                      to:
                                        "/dashboard/agency/" +
                                        agency.id +
                                        "/edit",
                                      color: "warning",
                                      type: "filled",
                                      "icon-pack": "feather",
                                      icon: "icon-edit"
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.can("view-agency") ||
                          _vm.$store.getters["auth/userData"].id ===
                            _vm.$route.params.id
                            ? _c(
                                "span",
                                { staticClass: "flex items-center" },
                                [
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: {
                                        to: "/dashboard/agency/" + agency.id,
                                        type: "gradient",
                                        "icon-pack": "feather",
                                        icon: "icon-eye"
                                      }
                                    },
                                    [_vm._v("View")]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ])
                      ],
                      1
                    )
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/employee/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue ***!
  \****************************************************/
=======
/***/ "./resources/js/src/views/agency/browse.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/agency/browse.vue ***!
  \**************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=4d9ea6e3& */ "./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=7022e18c& */ "./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/employee/create.vue"
=======
component.options.__file = "resources/js/src/views/agency/browse.vue"
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
=======
/***/ "./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3& ***!
  \***********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c& ***!
  \*********************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=4d9ea6e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/employee/create.vue?vue&type=template&id=4d9ea6e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_4d9ea6e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=7022e18c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/agency/browse.vue?vue&type=template&id=7022e18c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_7022e18c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17



/***/ })

}]);
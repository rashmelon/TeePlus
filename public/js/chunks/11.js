(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/browse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/browse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
//
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "browse",
  mounted: function mounted() {
    this.getPackages();
  },
=======
/* harmony default export */ __webpack_exports__["default"] = ({
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
  data: function data() {
    return {
      searchText: "",
      resultTime: 0,
<<<<<<< HEAD
      packages: [],
=======
      categories: [{
        id: 1,
        image: '#',
        name: 'T-Shirt',
        description: 'here some text about t-shirt!',
        created_at: '18 jan 2020'
      }],
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      is_requesting: false
    };
  },
  props: {
    payload: {
      required: false,
      default: ''
    }
  },
<<<<<<< HEAD
  methods: {
    getPackages: function getPackages() {
      var _this = this;

      // this.$vs.loading({container: this.$refs.browse, scale: 0.5});
      this.$store.dispatch('package/getData', this.payload).then(function (response) {
        // this.$vs.loading.close(this.$refs.browse);
        _this.packages = response.data.data;
        console.log(_this.packages);
      }).catch(function (error) {
        console.log(error); // this.$vs.loading.close(this.$refs.browse);

        _this.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    adminClose: function adminClose(index) {
      var _this2 = this;

      console.log('data ' + !this.packages[index].admin_close); // taking not because the library triggers on click before changing value

      this.$store.dispatch('package/update', {
        id: this.packages[index].id,
        data: {
          'admin_close': !this.packages[index].admin_close
        }
      }).then(function (response) {
        _this2.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error); // this.$vs.loading.close(this.$refs.browse);

        _this2.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
      });
    },
    agencyClose: function agencyClose(index) {
      var _this3 = this;

      console.log('data ' + !this.packages[index].agency_close); // taking not because the library triggers on click before changing value

      this.$store.dispatch('package/update', {
        id: this.packages[index].id,
        data: {
          'agency_close': !this.packages[index].agency_close
        }
      }).then(function (response) {
        _this3.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
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
    confirmDeletePackage: function confirmDeletePackage(type) {
=======
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    getCategories: function getCategories() {
      return this.categories;
    },
    editCategory: function editCategory(id) {
      this.$router.push({
        name: 'edit-category',
        params: {
          'id': id
        }
      });
    },
    confirmDeleteCategory: function confirmDeleteCategory(type) {
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Are you sure!",
        text: 'This data can not be retrieved again.',
<<<<<<< HEAD
        accept: this.deletePackage,
        parameters: [type]
      });
    },
    deletePackage: function deletePackage(params) {
      var _this4 = this;

      this.is_requesting = true;
      this.$vs.loading({
        container: "#btn-delete-".concat(params[0].id),
        color: 'danger',
        scale: 0.45
      });
      this.$store.dispatch('package/delete', params[0].id).then(function (response) {
        _this4.is_requesting = false;

        _this4.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this4.packages = _this4.packages.filter(function (type) {
          return type.id !== params[0].id;
        });

        _this4.$vs.notify({
          title: 'Success',
          text: response.data.message,
          iconPack: 'feather',
          icon: 'icon-check',
          color: 'success'
        });
      }).catch(function (error) {
        console.log(error);
        _this4.is_requesting = false;

        _this4.$vs.loading.close("#btn-delete-".concat(params[0].id, " > .con-vs-loading"));

        _this4.$vs.notify({
          title: 'Error',
          text: error.response.data.error,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });
=======
        accept: this.deleteCategory,
        parameters: [type]
      });
    },
    deleteCategory: function deleteCategory(params) {
      this.$vs.notify({
        title: 'Error',
        text: 'not yet handled',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
      });
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".txt-hover:hover{\n  color: black !important;\n}[dir] .txt-hover:hover{\n  cursor: pointer;\n}\n\n", ""]);

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06& ***!
  \****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21& ***!
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
<<<<<<< HEAD
  return _vm.can("browse-package")
    ? _c(
        "div",
        { staticClass: "vx-col w-full mb-base" },
        [
          _c(
            "vx-card",
            {
              ref: "browse",
              attrs: {
                title: "Packages List",
                "collapse-action": "",
                refreshContentAction: ""
              },
              on: { refresh: _vm.getPackages }
            },
            [
              _c(
                "vs-table",
                {
                  attrs: { search: "", data: _vm.packages },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(ref) {
                          var data = ref.data
                          return _vm._l(_vm.packages, function(
                            packageData,
                            index
                          ) {
                            return _c(
                              "vs-tr",
                              { key: index },
                              [
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.id } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.id) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.title } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.title) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$store.state.auth.AppActiveUser.roles[0]
                                  .name == "Super Admin"
                                  ? _c("vs-td", [
                                      packageData.agency
                                        ? _c(
                                            "span",
                                            {
                                              attrs: {
                                                data: packageData.agency.name
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                            " +
                                                  _vm._s(
                                                    packageData.agency.name
                                                  ) +
                                                  "\n                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.date } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.date) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.price } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.price) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.home_page } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.home_page) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$store.state.auth.AppActiveUser.roles[0]
                                  .name == "Agency Admin"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "vx-col md:w-1/2 w-full mt-5"
                                      },
                                      [
                                        _c(
                                          "ul",
                                          { staticClass: "switch-container" },
                                          [
                                            _c(
                                              "li",
                                              [
                                                _c(
                                                  "vs-switch",
                                                  {
                                                    attrs: { color: "danger" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.agencyClose(
                                                          index
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        packageData.agency_close,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          packageData,
                                                          "agency_close",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "packageData.agency_close"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        attrs: { slot: "on" },
                                                        slot: "on"
                                                      },
                                                      [_vm._v("Disabled")]
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.$store.state.auth.AppActiveUser.roles[0]
                                  .name == "Super Admin"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "vx-col md:w-1/2 w-full mt-5"
                                      },
                                      [
                                        _c(
                                          "ul",
                                          { staticClass: "switch-container" },
                                          [
                                            _c(
                                              "li",
                                              [
                                                _c(
                                                  "vs-switch",
                                                  {
                                                    attrs: { color: "danger" },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.adminClose(
                                                          index
                                                        )
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        packageData.admin_close,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          packageData,
                                                          "admin_close",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "packageData.admin_close"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        attrs: { slot: "on" },
                                                        slot: "on"
                                                      },
                                                      [_vm._v("Disabled")]
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  { attrs: { data: packageData.created_at } },
                                  [
                                    _vm._v(
                                      "\n                        " +
                                        _vm._s(packageData.created_at) +
                                        "\n                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "vs-td",
                                  [
                                    _c("vs-row", [
                                      _c("div", { staticClass: "flex mb-4" }, [
                                        _vm.can("delete-package")
                                          ? _c(
                                              "div",
                                              { staticClass: "w-1/3 ml-5" },
                                              [
                                                _c("vs-button", {
                                                  staticClass:
                                                    "vs-con-loading__container",
                                                  attrs: {
                                                    id:
                                                      "btn-delete-" +
                                                      packageData.id,
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
                                                        : _vm.confirmDeletePackage(
                                                            packageData
                                                          )
                                                    }
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ])
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
                    2809482667
                  )
                },
                [
                  _c(
                    "template",
                    { slot: "header" },
                    [
                      _vm.can("browse-package")
                        ? _c(
                            "vs-button",
                            {
                              attrs: {
                                to: "/dashboard/package/create",
                                size: "small",
                                "icon-pack": "feather",
                                icon: "icon-plus"
                              }
                            },
                            [_vm._v("Create Package")]
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "thead" },
                    [
                      _c("vs-th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _vm.$store.state.auth.AppActiveUser.roles[0].name ==
                      "Super Admin"
                        ? _c("vs-th", [_vm._v("Agency")])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Price")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Is Featured")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Reservation Status")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Created At")]),
                      _vm._v(" "),
                      _c("vs-th", [_vm._v("Action")])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
=======
  return _c(
    "div",
    { staticClass: "vx-col w-full mb-base" },
    [
      _c(
        "vx-card",
        {
          ref: "browse",
          attrs: { title: "categories List", "collapse-action": "" }
        },
        [
          _c(
            "vs-table",
            {
              attrs: {
                pagination: "",
                search: "",
                "max-items": "50",
                data: _vm.categories
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(category, index) {
                      return _c(
                        "vs-tr",
                        { key: index },
                        [
                          _c("vs-td", { attrs: { data: category.id } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(category.id) +
                                "\n\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: category.image } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(category.image) +
                                "\n\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: category.name } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t" +
                                _vm._s(category.name) +
                                "\n\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: category.description } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t" +
                                  _vm._s(category.description) +
                                  "\n\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: category.created_at } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t" +
                                  _vm._s(category.created_at) +
                                  "\n\t\t\t\t\t"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("vs-row", [
                                _c("div", { staticClass: "flex mb-4" }, [
                                  _vm.can("edit-employee")
                                    ? _c(
                                        "div",
                                        { staticClass: "w-1/2 mx-2" },
                                        [
                                          _c("vs-button", {
                                            staticClass:
                                              "vs-con-loading__container",
                                            attrs: {
                                              id: "btn-edit-" + category.id,
                                              radius: "",
                                              color: "warning",
                                              type: "border",
                                              "icon-pack": "feather",
                                              icon: "icon-edit"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.editCategory(
                                                  category.id
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.can("delete-employee")
                                    ? _c(
                                        "div",
                                        { staticClass: "w-1/2 mx-3" },
                                        [
                                          _c("vs-button", {
                                            staticClass:
                                              "vs-con-loading__container",
                                            attrs: {
                                              id: "btn-delete-" + category.id,
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
                                                  : _vm.confirmDeleteCategory(
                                                      category
                                                    )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
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
                  _c("vs-th", [_vm._v("Created At")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
          )
        ],
        1
      )
<<<<<<< HEAD
    : _vm._e()
=======
    ],
    1
  )
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/browse.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/package/browse.vue ***!
  \***************************************************/
=======
/***/ "./resources/js/src/views/category/browse.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/category/browse.vue ***!
  \****************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=cb74cf06& */ "./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/package/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browse.vue?vue&type=template&id=4cb74d21& */ "./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21&");
/* harmony import */ var _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse.vue?vue&type=script&lang=js& */ "./resources/js/src/views/category/browse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./browse.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
<<<<<<< HEAD
  _browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/src/views/package/browse.vue"
=======
component.options.__file = "resources/js/src/views/category/browse.vue"
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/browse.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/package/browse.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
=======
/***/ "./resources/js/src/views/category/browse.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/category/browse.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=script&lang=js&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
=======
/***/ "./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06& ***!
  \**********************************************************************************/
=======
/***/ "./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21& ***!
  \***********************************************************************************/
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=cb74cf06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/package/browse.vue?vue&type=template&id=cb74cf06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_cb74cf06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./browse.vue?vue&type=template&id=4cb74d21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/category/browse.vue?vue&type=template&id=4cb74d21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_browse_vue_vue_type_template_id_4cb74d21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 4d0facaa3420b62c4a22ea52903616dc837f0b17



/***/ })

}]);
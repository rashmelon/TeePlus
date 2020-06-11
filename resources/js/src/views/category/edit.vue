<template>
    <div>
        <div v-if="can('edit-category')" class="w-full mb-base">
            <div ref="loadingContainer">

                <vx-card class="my-5" collapse-action>
                    <div class="vx-row">
                        <div class="vx-col md:w-6/6 w-full mb-3">
                            <div class="image-preview" style="display: inline-flex;">
                                <img :src="uploadedImage?uploadedImage:'/images/no-image-found.png'" alt="photo" class="preview-large">
                            </div>
                            <div class="d-block mt-3">
                                <input @change="previewImage" accept="image/*" id="img-upload" type="file">
                                <vs-button icon="icon-upload" icon-pack="feather" onclick="document.getElementById('img-upload').click()" size="small"
                                           type="gradient">Upload Photo
                                </vs-button>
                            </div>
                        </div>
                        <div class="vx-col sm:w-2/2 w-full mb-3">
                            <vs-input
                              class="w-full"
                              label="Category Name"
                              name="name"
                              v-model="form.name"
                              v-validate="'required'"
                            />
                            <span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
                        </div>
                        <div class="vx-col md:w-1/1 w-full mt-3">
                            <vs-textarea
                              class="mb-0"
                              label="Description"
                              name="description"
                              v-model="form.description"
                              v-validate="'required'"
                            />
                            <span class="text-danger text-sm" v-show="errors.has('description')">{{ errors.first('description')
                                    }}</span>

                        </div>
                    </div>
                </vx-card>

                <ShowSingle :catId="$route.params.id"/>

            </div>
        </div>
    </div>
</template>

<script>
    import ShowSingle from '../Combination/ShowSingle'

    export default {
        name: "edit",
        data: function () {
            return {
                form: {},
                uploadedImage: null,
                is_requesting: false
            }
        },
        components: {
            ShowSingle
        },
        mounted(){
            this.getCategory()
        },
        methods: {
            addAttribute() {
                this.form.priceCombinations.push({
                    combination: '',
                    price: ''
                })
            },
            removeAttribute(index) {
                this.form.priceCombinations.splice(index, 1);
            },
            addPrintingCriteria() {
                this.form.printCriterias.push({
                    criteria: '',
                    price: ''
                })
            },
            removePrintingCriteria(index) {
                this.form.printCriterias.splice(index, 1);
            },
            previewImage: function(event) {
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        this.uploadedImage = e.target.result;
                        this.form.image = input.files;
                    };
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                }
            },

            getCategory(){
                // this.$vs.loading({container: this.$refs.loadingContainer.$el, scale: 0.5});
                this.$store.dispatch('category/view', this.$route.params.id)
                  .then(response => {
                      this.form = response.data.data;

                      // preview used image
                      if (this.form.image){
                          this.uploadedImage = this.form.image.url
                      }
                  })
                  .catch(error => {
                      console.log(error);
                      this.$vs.notify({
                          title: 'Error',
                          text: error.response.data.error,
                          iconPack: 'feather',
                          icon: 'icon-alert-circle',
                          color: 'danger'
                      });
                  })

            },

            edit() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;
                        let form_data = new FormData();

                        for (let key in this.form) {
                            if ((key === 'image') && this.form.hasOwnProperty(key)) {
                                if (this.form[key]) {
                                    for (let i = 0; i < this.form[key].length; i++) {
                                        form_data.append(key, this.form[key][i]);
                                    }
                                }
                            } else {
                                form_data.append(key, this.form[key]);
                            }
                        }

                        this.$store.dispatch('category/update', {id: this.$route.params.id, data: form_data})
                          .then(response => {
                              this.$vs.notify({
                                  title: 'Success',
                                  text: response.data.message,
                                  iconPack: 'feather',
                                  icon: 'icon-check',
                                  color: 'success'
                              });
                              this.$router.push({name: 'category'});

                          })
                          .catch(error => {
                              this.$vs.notify({
                                  title: 'Error',
                                  text: error.response.data.error,
                                  iconPack: 'feather',
                                  icon: 'icon-alert-circle',
                                  color: 'danger'
                              });
                          });
                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Fix form validation errors',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    }

                })
            },


        }
    }
</script>

<style>
    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    #img-upload {
        display: none;
    }


    .vs-input-number {
        width: fit-content;
    }

    .attribute-actions {
        align-items: baseline;
        display: flex;
    }
</style>

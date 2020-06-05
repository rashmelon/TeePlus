<template>
    <div>
        <div v-if="can('create-employee')" class="vx-col w-full mb-base">
            <vx-card ref="create" title="Create Package">
                <div class="vx-row">
                    <div class="vx-col sm:w-1/1 w-full mb-3">
                        <div class="image-preview" style="display: inline-flex;">
                            <img alt="employee photo" class="preview" :src="uploadedImage?uploadedImage:'/images/no-image-found.png'">
                        </div>
                        <div style="display: inline-flex;position: relative;top: -15px;">
                            <input id="img-upload" type="file" @change="previewImage" accept="image/*">
                            <vs-button size="small" icon-pack="feather" icon="icon-upload" type="gradient" onclick="document.getElementById('img-upload').click()">Upload Photo</vs-button>
                        </div>
                    </div>


                    <div class="vx-col md:w-1/1 attributes">
                        <div class="vx-row single-attribute"
                             v-for="(attr,index) in form.attributes"
                             :key="index"
                        >
                            <div class="vx-col md:w-1/2 w-full">
                                <vs-input label="Category Name" v-model="form.attributes[index].name" class="w-full" />
                            </div>

                            <div class="vx-col sm:w-1/2 w-full">
                                <vs-input label="Attribute Name" v-model="form.attributes[index].values" class="w-full" />
                            </div>
                        </div>
                    </div>


                    <div class="vx-col sm:w-1/2 w-full mb-3">
                        <vs-input label="Attribute" v-model="form.name" class="w-full" />
                    </div>

                    <div class="vx-col md:w-1/1 w-full mt-3">
                        <div class="vx-col w-full mt-3">
                            <vs-textarea label="Description" v-model="form.description" />
                        </div>
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button
                          id="btn-create"
                          :disabled="!validateForm"
                          @click="is_requesting?$store.dispatch('viewWaitMessage',$vs):create()"
                          icon-pack="feather"
                          icon="icon-save"
                          type="gradient"
                        >Create Category</vs-button>
                    </vs-col>
                </vs-row>

            </vx-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create",
        mounted() {

        },
        computed: {
            validateForm() {
                return !this.errors.any()
                && this.form.name !== ''
            }
        },
        data: function () {
            return {
                form: {
                    name: '',
                    description: '',
                    attributes:[]
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        components: {

        },
        methods: {
            uploadImages(e)
            {
                let selectedImages = e.target.files;
                if (!selectedImages.length) {
                    return false;
                }
                this.form.images = [];
                for (let i = 0; i < selectedImages.length; i++) {
                    this.form.images.push(selectedImages[i]);
                }
            },

            create() {
                this.is_requesting=true;
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
                this.$vs.notify({
                    title: 'Error',
                    text: 'not yet handled',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });

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
            }
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

    img.preview {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }

    .vs-input-number {
        width: fit-content;
    }
</style>

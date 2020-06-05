<template>
    <div>
        <div v-if="can('create-employee')" class="vx-col w-full mb-base">
            <vx-card ref="create" title="Create Package">
                <div class="vx-row">
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <vs-input label="Package Title" v-model="form.title" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary is-label-placeholder">
                            <div class="vs-con-input">
                                <input v-model="form.date" required type="date" class="vs-inputx vs-input--input normal hasIcon hasValue dob-input" style="border: 1px solid rgba(0, 0, 0, 0.2);">
                                <span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                    Date
                                </span>
                                <i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon-calendar null"></i>
                            </div>
                            <span></span>
                        </div>
                    </div>

                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <div class="centerx pt-6">
                            <vs-input-number v-model="form.price" label="Price:"/>
                        </div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <input type="radio" name="currency" v-model="form.currency" value="LE"/>
                        <label>LE</label>
                        <input type="radio" name="currency" v-model="form.currency" value="$"/>
                        <label>$</label>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <div class="centerx pt-6">
                            <vs-input-number v-model="form.days" label="Days:"/>
                        </div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <div class="centerx pt-6">
                            <vs-input-number v-model="form.nights" label="Nights:"/>
                        </div>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <vs-input label="Season" v-model="form.season" class="w-full" />
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <input type="file" class="form-control" @change="uploadImages" multiple>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <ul class="switch-container">
                            <li>
                                <label>Is Featured</label>
                                <vs-switch v-model="form.home_page" />
                            </li>
                        </ul>
                    </div>
                    <div class="vx-col w-full mt-5">
                        <vs-textarea label="Description" v-model="form.description" />
                    </div>
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Food" autocomplete label-placeholder="Food" icon-pack="feather" icon="icon-chevron-down"  color="primary" class="w-full" v-model="form.food_id">
                            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in food" />
                        </vs-select>
                    </div>
                    <div class="vx-col w-full mb-6">
                        <vs-select label="Start City" autocomplete label-placeholder="Start City" icon-pack="feather" icon="icon-chevron-down"
                                   color="primary" class="w-full" v-model="form.start_city_id">
                            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in cities" />
                        </vs-select>
                    </div>
                    <div class="vx-col w-full mb-6">
                        <vs-select label="End City" autocomplete label-placeholder="End City" icon-pack="feather" icon="icon-chevron-down"
                                   color="primary" class="w-full" v-model="form.end_city_id">
                            <vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in cities" />
                        </vs-select>
                    </div>
                    <div class="vx-col md:w-1/2 w-full mt-5">
                        <div class="centerx pt-6">
                            <vs-input-number v-model="form.total_tickets" label="Total Tickets:"/>
                        </div>
                    </div>
                </div>

                <vs-row vs-align="center" vs-type="flex" vs-justify="center" vs-w="12">
                    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                        <vs-button id="btn-create" :disabled="!validateForm" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):create()" icon-pack="feather" icon="icon-save" type="gradient">Create Package</vs-button>
                    </vs-col>
                </vs-row>

            </vx-card>
        </div>
    </div>
</template>

<script>
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    export default {
        name: "create",
        mounted() {

        },
        computed: {
            validateForm() {
                return !this.errors.any()
                    && this.form.title !== ""
                    && this.form.date !== ''
            }
        },
        data: function () {
            return {
                roles: [],
                food: [],
                cities: [],
                form: {
                    home_page: false,
                    title: '',
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

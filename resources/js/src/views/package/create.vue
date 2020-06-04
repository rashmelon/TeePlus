<template>
    <div>
        <div v-if="can('create-package')" class="vx-col w-full mb-base">
            <vx-card ref="create" title="Create Package">
<!--                <form-wizard color="rgba(var(&#45;&#45;vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="create">-->
<!--                    <tab-content title="Package Details" class="mb-5">-->

                        <!-- tab 1 content -->
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
<!--                    </tab-content>-->

<!--                    &lt;!&ndash; tab 2 content &ndash;&gt;-->
<!--                    <tab-content title="Schedule" class="mb-5">-->
<!--                        <div class="vx-row">-->
<!--                            <vs-button @click="addSchedule" size="small" icon-pack="feather" icon="icon-add">Add Row</vs-button>-->
<!--                        </div>-->
<!--                        <div class="vx-row" v-for="(section, index) in form.schedule">-->
<!--                            <div class="vx-col md:w-1/2 w-full">-->
<!--                                <div class="centerx pt-6">-->
<!--                                    <vs-input-number v-model="section.day_number" label="Day Number:"/>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="vx-col md:w-1/2 w-full">-->
<!--                                <vs-textarea label="Description" v-model="section.description" />-->
<!--                            </div>-->
<!--                            <div class="vx-col w-full">-->
<!--                                <vs-button class="mt-5" @click="removeSchedule(index)" size="small" icon-pack="feather" color="danger" icon="icon-trash">Remove Row</vs-button>-->
<!--                            </div>-->
<!--                            <vs-divider></vs-divider>-->
<!--                        </div>-->
<!--                    </tab-content>-->

<!--                    &lt;!&ndash; tab 3 content &ndash;&gt;-->
<!--                    <tab-content title="Inclusions & Exclusions" class="mb-5">-->
<!--                        <div class="vx-row">-->
<!--                            <vs-button @click="addInclusion" size="small" icon-pack="feather" icon="icon-add">Add Inclusion</vs-button>-->
<!--                        </div>-->
<!--                        <div class="vx-row" v-for="(inclusion, index) in form.inclusions">-->
<!--                            <div class="vx-col w-full">-->
<!--                                <vs-input :label="`Inclusion ${index+1}`" v-model="inclusion.name" class="w-full mt-5" />-->
<!--                                <vs-button class="mt-5" @click="removeInclusion(index)" size="small" icon-pack="feather" color="danger" icon="icon-trash">Remove Inclusion</vs-button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <vs-divider></vs-divider>-->
<!--                        <div class="vx-row">-->
<!--                            <vs-button @click="addExclusion" size="small" icon-pack="feather" icon="icon-add">Add Exclusion</vs-button>-->
<!--                        </div>-->
<!--                        <div class="vx-row" v-for="(inclusion, index) in form.exclusions">-->
<!--                            <div class="vx-col w-full">-->
<!--                                <vs-input :label="`Exclusion ${index+1}`" v-model="inclusion.name" class="w-full mt-5" />-->
<!--                                <vs-button class="mt-5" @click="removeExclusion(index)" size="small" icon-pack="feather" color="danger" icon="icon-trash">Remove Exclusion</vs-button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </tab-content>-->

<!--                    &lt;!&ndash; tab 4 content &ndash;&gt;-->
<!--                    <tab-content title="Accommodation" class="mb-5">-->
<!--                        <div class="vx-row">-->
<!--                            <vs-button @click="addAccommodation" size="small" icon-pack="feather" icon="icon-add">Add Accommodation</vs-button>-->
<!--                        </div>-->
<!--                        <div class="vx-row" v-for="(accommodation, index) in form.accommodations">-->
<!--                            <div class="vx-col md:w-1/2 w-full mt-5">-->
<!--                                <vs-input :label="`City`" v-model="accommodation.city" class="w-full mt-5" />-->
<!--                            </div>-->
<!--                            <div class="vx-col md:w-1/2 w-full mt-5">-->
<!--                                <vs-input :label="`Hotel`" v-model="accommodation.hotel" class="w-full mt-5" />-->
<!--                            </div>-->
<!--                            <div class="vx-col md:w-1/2 w-full mt-5">-->
<!--                                <div class="centerx pt-6">-->
<!--                                    <vs-input-number v-model="accommodation.nights" label="Nights:"/>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="vx-col md:w-1/2 w-full mt-5">-->
<!--                                <div class="centerx pt-6">-->
<!--                                    <vs-input-number v-model="accommodation.rate" label="Rate:"/>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="vx-col w-full">-->
<!--                                <vs-button class="mt-5" @click="removeAccommodation(index)" size="small" icon-pack="feather" color="danger" icon="icon-trash">Remove Row</vs-button>-->
<!--                            </div>-->
<!--                            <vs-divider></vs-divider>-->
<!--                        </div>-->
<!--                    </tab-content>-->
<!--                </form-wizard>-->

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
            this.getFoods();
            this.getCities();
        },
        computed: {
            validateForm() {
                return !this.errors.any()
                    && this.form.title !== ""
                    && this.form.date !== ''
                    && this.form.price !== ''
                    && this.form.days !== ''
                    && this.form.nights !== ''
                    && this.form.season !== ''
                    && this.form.description !== ''
                    && this.form.food_id !== ''
                    && this.form.total_tickets !== ''
                    && this.form.start_city !== ''
                    && this.form.end_city !== ''
                    && this.form.currency !== '';
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
                    date: '',
                    price: 0,
                    currency: '',
                    days: 0,
                    nights: 0,
                    season: '',
                    description: '',
                    images: [],
                    schedule: [
                    ],
                    inclusions: [
                    ],
                    exclusions: [
                    ],
                    accommodations: [
                    ],
                    food_id: 0,
                    total_tickets: 0,
                    start_city_id: 0,
                    end_city_id: 0,
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        components: {
            FormWizard,
            TabContent
        },
        methods: {
            getFoods(){
                this.$store.dispatch('food/getData', '')
                    .then(response => {
                        this.food = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            getCities(){
                this.$store.dispatch('city/getData', '?country=egypt')
                    .then(response => {
                        this.cities = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            addSchedule()
            {
                this.form.schedule.push({
                    day_number:  this.form.schedule.length,
                    description: ''
                });
            },

            removeSchedule(index)
            {
                if (this.form.schedule.length>0){
                    this.form.schedule.splice(index, 1);
                }
            },

            addInclusion()
            {
                this.form.inclusions.push({
                    name: ''
                });
            },

            removeInclusion(index)
            {
                if (this.form.inclusions.length>0){
                    this.form.inclusions.splice(index, 1);
                }
            },

            addExclusion()
            {
                this.form.exclusions.push({
                    name: ''
                });
            },

            removeExclusion(index)
            {
                if (this.form.exclusions.length>0){
                    this.form.exclusions.splice(index, 1);
                }
            },

            addAccommodation()
            {
                this.form.accommodations.push({
                    city: '',
                    hotel: '',
                    rate: 1,
                    nights: 1,
                    dbl: 0,
                    sgl: 0,
                    child: 0,
                });
            },

            removeAccommodation(index)
            {
                if (this.form.accommodations.length>0){
                    this.form.accommodations.splice(index, 1);
                }
            },

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
                this.$store.dispatch('package/create', form_data)
                    .then(response => {
                        this.$router.push(`/dashboard/package`);
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
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

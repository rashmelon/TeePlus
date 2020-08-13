<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="create" title="Create product">

				<form-wizard :subtitle="null" :title="null" @on-complete="create" color="rgb(var(--vs-primary))" finishButtonText="Submit">
					<tab-content class="mb-5" title="Product data">
						<vx-card>
							<div class="vx-row">
								<div class="vx-col md:w-6/6 w-full mb-3">
									<div class="image-preview" style="display: inline-flex;">
										<img :src="uploadedImage?uploadedImage:'/images/no-image-found.png'" alt="photo" class="preview-large">
									</div>
									<div class="d-block mt-3">
										<input @change="previewImage" accept="image/*" id="img-upload" type="file"
										       name="Image"
										       v-validate="'required'">
										<vs-button
											icon="icon-upload"
											icon-pack="feather"
											onclick="document.getElementById('img-upload').click()"
											size="small"
											type="gradient"
										>Upload Photo
										</vs-button>
										<span class="text-danger text-sm" v-show="errors.has('Image')">{{ errors.first('Image') }}</span>
									
									</div>
								</div>
								<div class="vx-col md:w-4/12">
									<vs-select
										@change="getCombinations"
										class="w-full"
										label="Category"
										name="category"
										v-model="form.category"
										v-validate="'required'"

									>
										<vs-select-item :key="category.id" :text="category.name" :value="category" v-for="category in categories"/>
									</vs-select>
									<span class="text-danger text-sm" v-show="errors.has('category')">{{ errors.first('category') }}</span>

								</div>
								<div class="vx-col md:w-5/12 mb-3">
									<vs-input
										class="w-full"
										label="Product Name"
										name="name"
										v-model="form.name"
										v-validate="'required'"/>
									<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
								</div>
								<div class="vx-col md:w-3/12 mb-3">
									<vs-input
										class="w-full"
										label="Product Base Price"
										name="base price"
										type="number"
										v-model="form.base_price"
										min="0"
										v-validate="'required|min_value:0'"/>
									<span class="text-danger text-sm" v-show="errors.has('base price')">{{ errors.first('base price') }}</span>

								</div>
								<div class="vx-col md:w-2/12 mb-3">
									<vs-input class="w-full" label="Quantity" name="quantity" type="number"
									          v-model="form.quantity"
									          v-validate="'required|min_value:0'"/>
									<span class="text-danger text-sm" v-show="errors.has('quantity')">{{ errors.first('quantity') }}</span>

								</div>
								<div class="vx-col md:w-6/6 w-full mt-3">
									<vs-textarea
										name="Description"
										v-validate="'required'"
										label="Description"
										v-model="form.description"/>
									<span class="text-danger text-sm" v-show="errors.has('Description')">{{ errors.first('Description') }}</span>
								
								</div>
							</div>
						</vx-card>
					</tab-content>

					<tab-content class="mb-5" title="Product Combinations">
						<div class="vx-row">
							<div class="vx-col md:w-2/2 w-full">
								<vx-card class="vx-row">
									<div class="vx-col md:w-1/1 w-full mt-3">
										<vs-select
											class="w-full"
											label="Combinations"
											multiple
											items="combinations"
											placeholder="Combinations"
											v-model="form.priceCombinations"
										>
											<vs-select-item
												:key="index"
												:text='item.combination'
												:value="item.id"
												v-for="(item,index) in combinations"/>
										</vs-select>

										<!--<vs-list>
											<vs-list-header icon="supervisor_account" title="Selected Combinations"></vs-list-header>
											<transition-group mode="out-in" name="slide-down">
												<vs-list-item
													v-for="(combination,index) in form.priceCombinations"
													:key="index+1"
													icon="check" :title="combination.combination" :subtitle="combination.price.toString()"></vs-list-item>
											</transition-group>
										</vs-list>-->
									</div>
								</vx-card>
							</div>
						</div>
					</tab-content>
				</form-wizard>

			</div>
		</div>
	</div>
</template>

<script>
    import './../../filters/filters'
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'

    export default {
        name: "create",
        mounted() {
            this.getCategories()
        },
        computed: {
            validateForm() {
                return !this.errors.any()
                    && this.form.name !== ''
            },
        },
        data: function () {
            return {
                combinations: [],
                categories: [],
                form: {
                    name: '',
                    description: '',
                    category: '',
                    base_price: 0,
                    priceCombinations: [],
                },
                uploadedImage: null,
                is_requesting: false
            }
        },
        components: {
            FormWizard,
            TabContent
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {
            resetCombinations() {
                this.form.priceCombinations = []
            },
            create() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();


                        // if form have no errors
                        this.is_requesting = true;


                        // create new object for sending object without extra data
                        let sentObject = {...this.form}
                        sentObject.category_id = sentObject.category.id

                        let form_data = new FormData();

                        for (let key in sentObject) {
                            if (key === 'priceCombinations') {
                                form_data.append(key, JSON.stringify(sentObject[key]));
                            } else if (key === 'image') {
                                form_data.append(key, sentObject[key][0]);
                            } else {
                                form_data.append(key, sentObject[key]);
                            }
                        }

                        this.$store.dispatch('product/create', form_data)
                            .then(response => {
                                this.$vs.notify({
                                    title: 'Success',
                                    text: response.data.message,
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    color: 'success'
                                });
                                this.$router.push({name: 'product'});
                                this.is_requesting = false;

                            })
                            .catch(error => {
                                console.log(error);
                                for (const [key, value] of Object.entries(error.response.data.errors)){
                                    this.$vs.notify({
                                        title: key,
                                        text: value[0],
                                        iconPack: 'feather',
                                        icon: 'icon-alert-circle',
                                        color: 'danger'
                                    });
                                }
                                this.is_requesting = false;
                            }).then(()=>{
                            this.$vs.loading.close()
                        })
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

            previewImage: function (event) {
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

            getCategories() {
                // get all categories
                this.$vs.loading({container: this.$refs.create.$el});
                this.$store.dispatch('category/getData', this.payload)
                    .then(response => {
                        this.categories = response.data.data

                        this.$vs.loading.close(this.$refs.create.$el);
                    })
                    .catch(error => {
                        console.log(error);
                        // this.$vs.loading.close(this.$refs.browse);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },
            getCombinations(category) {
                this.$store.dispatch('combination/getData', `?category=${category.id}`)
                    .then(response => {
                        this.combinations = response.data.data
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
                    });
            },

        }
    }
</script>

<style>
	.image-preview {
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

	.attribute-actions {
		align-items: baseline;
		display: flex;
	}
</style>

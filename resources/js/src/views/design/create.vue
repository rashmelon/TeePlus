<template>
	<div v-if="can('create-design')">
		<div class=" w-full mb-base">
			<div ref="create" title="Create design">

				<vx-card>
					<div class="vx-row">
						<div class="vx-col md:w-12/12 w-full mb-3">
							<div class="image-preview" >
								<div class="vx-row">
									<img
										:src="image.url"
										class="preview-large img-fluid vx-col md:w-3/12 w-full mb-2 px-2"
										v-for="image in uploadedImages"
										v-if="uploadedImages"
									>
								</div>
							</div>
							<div class="d-block mt-3">
								<input type="file" class="form-control d-none" @change="uploadImages" id="img-upload" multiple>
								<vs-button icon="icon-upload" icon-pack="feather" onclick="document.getElementById('img-upload').click()" size="small"
								           type="gradient">Upload Photos
								</vs-button>
							</div>
						</div>

						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								class="w-full"
								label="Name"
								name="name"
								v-model="form.name"
								v-validate="'required'"/>
							<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
						</div>


						<div class="vx-col md:w-12/12 w-full mt-4" v-if="can('create-design-price')">
							<vx-card >
								<div class="vx-col md:w-1/1 w-full mt-3">
									<vs-select
										class="w-full"
										label="Prices"
										multiple
										items="combinations"
										placeholder="Combinations"
										v-model="form.designPrintPrice"
									>
										<vs-select-item
											:key="item.id"
											:text='item.category.name+" - "+item.criteria'
											:value="item"
											v-for="(item,index) in printCriterias"/>
									</vs-select>

									<vs-list>
										<transition-group mode="out-in" name="slide-down">
											<vs-list-item
												v-for="(price,index) in form.designPrintPrice"
												:key="index+1"
												icon="check"
											:title="price.category.name+' - '+price.criteria">

												<vs-input
													class="w-full"
													label="Price"
													:name="'price-'+index"
													v-model="price.price"
													type="number"
													v-validate="'required|min_value:0'"
												/>
												<span class="text-danger text-sm" v-show="errors.has('price-'+index)">{{ errors.first('price-'+index) }}</span>

											</vs-list-item>
										</transition-group>
									</vs-list>
								</div>

								<div class="vx-col md:w-1/1 w-full mt-4">

								</div>
							</vx-card>
						</div>


						<vs-button
							@click="create"
							class="mb-4 ml-auto"
							color="primary"
							icon="icon-save"
							icon-pack="feather"
							type="filled"
						>Create
						</vs-button>

					</div>

				</vx-card>


			</div>
		</div>
	</div>
</template>

<script>
    import './../../filters/filters'

    export default {
        name: "create",
        mounted() {
            this.getPrintCriterias();
        },
        computed: {
            validateForm() {
                return !this.errors.any()
            },
        },
        data: function () {
            return {
                printCriterias: [],
                form: {
                    name: '',
                    designPrintPrice: [],
                },
                uploadedImages: null,
                is_requesting: false
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {
            getPrintCriterias(){
                this.$store.dispatch('criteria/getData', this.payload)
                    .then(response => {
                        console.log(response)
                        this.printCriterias = response.data.data;
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
            },
            create() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;


	                    // assign print_criteria_id to each criteriarequest
	                    this.form.designPrintPrice.forEach(item=>{
	                        item.print_criteria_id = item.id;
                        });


                        // create new object for sending object without extra data

                        let form_data = new FormData();

                        for (let key in this.form) {
                            if ((key === 'images') && this.form.hasOwnProperty(key)){
                                for (let i=0; i<this.form[key].length; i++){
                                    form_data.append(key+'[]', this.form[key][i]);
                                }
                            } else if (key === 'designPrintPrice'){
                                form_data.append(key, JSON.stringify(this.form[key]));
                            }
                            else {
                                form_data.append(key, this.form[key]);
                            }
                        }

                        this.$store.dispatch('design/create', form_data)
                            .then(response => {
                                this.$vs.notify({
                                    title: 'Success',
                                    text: response.data.message,
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    color: 'success'
                                });
                                this.$router.push({name: 'design'});
                                this.is_requesting = false;

                            })
                            .catch(error => {
                                console.log(error);
                                this.$vs.notify({
                                    title: 'Error',
                                    text: error.response.data,
                                    iconPack: 'feather',
                                    icon: 'icon-alert-circle',
                                    color: 'danger'
                                });
                                this.is_requesting = false;
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


            uploadImages(e)
            {

                this.uploadedImages = [];
                let selectedImages = e.target.files;
                if (!selectedImages.length) {
                    return false;
                }
                this.form.images = [];
                for (let i = 0; i < selectedImages.length; i++) {
                    this.form.images.push(selectedImages[i]);

                    this.uploadedImages.push({url: URL.createObjectURL(selectedImages[i])});
                }
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

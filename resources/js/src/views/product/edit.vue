<template>
	<div  >
		<div class=" w-full mb-base">
			<div ref="edit" title="Edit Product">

				<vx-card>
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
						<div class="vx-col md:w-4/12 mt-1">
							<vs-input
								class="w-full"
								disabled
								label="Category"
								name="category"
								v-model="form.category_id"
								v-validate="'required'"
							/>
							<span class="text-danger text-sm" v-show="errors.has('category')">{{ errors.first('category') }}</span>

						</div>
						<div class="vx-col md:w-6/12 mb-3">
							<vs-input
								class="w-full"
								label="Product Name"
								name="name"
								v-model="form.name"
								v-validate="'required'"/>
							<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
						</div>
						<div class="vx-col md:w-2/12 mb-3">
							<vs-input class="w-full" label="Product Base Price" name="base price" type="number"
							          v-model="form.base_price"
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
							<vs-textarea label="Description" v-model="form.description"/>
						</div>
					</div>

					<vs-select
						label="Combinations"
						multiple
						options="combinations"
						placeholder="Combinations"
						v-model="form.priceCombinations"
						class="w-full my-3"
					>
						<vs-select-item
							:key="index"
							:text='item.combination'
							:value="item.id"
							v-for="(item,index) in combinations"/>
					</vs-select>


					<div class="text-center mt-4">
						<vs-button @click="edit" color="primary" type="filled">Edit Product</vs-button>
					</div>
				</vx-card>



			</div>


		</div>
	</div>
</template>

<script>


    export default {
        name: "edit",
        mounted() {
            this.getProduct()
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
                form: {},
                uploadedImage: null,
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
            getCombinations() {
                this.$store.dispatch('combination/getData', `?category=${this.form.category_id}`)
                    .then(response => {
                        this.combinations = response.data.data
                    })
                    .catch(error => {this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },
            getProduct() {
                this.$store.dispatch('product/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;

                        // preview used image
                        if (this.form.image) {
                            this.uploadedImage = this.form.image.url
                        }

                        // get category combinations that will be available for this product
                        this.getCombinations()

                        for (let i = 0; i < this.form.priceCombinations.length; i++) {
                            this.form.priceCombinations[i] = this.form.priceCombinations[i].id
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


                        // edit new object for sending object without extra data

                        let form_data = new FormData();

                        for (let key in this.form) {
                            if (key === 'priceCombinations') {
                                form_data.append(key, JSON.stringify(this.form[key]));
                            } else if (key === 'image') {
                                form_data.append(key, this.form[key][0]);
                            } else {
                                form_data.append(key, this.form[key]);
                            }
                        }
                        console.log()

                        this.$store.dispatch('product/update', {id: this.$route.params.id, data: form_data})
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
            previewImage: function (event) {
                // Reference to the DOM input element
                var input = event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    // edit a new FileReader to read this image and convert to base64 format
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

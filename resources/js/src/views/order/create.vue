<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="create" title="Create product">

				<vx-card>
					<div class="vx-row">
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="categories.length">
							<vs-select
								@change="getProducts"
								class="w-full"
								label="Category"
								name="category"
								v-model="cartItem.category"
								v-validate="'required'"

							>
								<vs-select-item :key="category.id" :text="`${category.name} - ${category.description}`" :value="category" v-for="category in categories"/>
							</vs-select>
							<span class="text-danger text-sm" v-show="errors.has('category')">{{ errors.first('category') }}</span>

						</div>
						
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="products.length">
							<vs-select
								@change="getCombinations"
								class="w-full"
								label="Product"
								name="product"
								v-model="cartItem.product"
								v-validate="'required'"
							
							>
								<vs-select-item :key="product.id" :text="`${product.base_price} - ${product.name} - ${product.description}`" :value="product" v-for="product in products"/>
							</vs-select>
							<span class="text-danger text-sm" v-show="errors.has('product')">{{ errors.first('product') }}</span>
						
						</div>
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="combinations.length">
							<vs-select
								class="w-full"
								label="Combinations"
								placeholder="Combinations"
								v-model="cartItem.priceCombination"
							>
								<vs-select-item
									:key="item.id"
									:text='`${item.price} - ${item.combination}`'
									:value="item"
									v-for="item in combinations"/>
							</vs-select>
						
						</div>
					
					</div>
				</vx-card>

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
            },
        },
        data: function () {
            return {
                combinations: [],
                categories: [],
	            products: [],
	            cartItem: {
                    category:{},
		            product:{},
		            priceCombination:{}
	            },
                order: [],
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
            create() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;


                        // create new object for sending object without extra data
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

                        this.$store.dispatch('order/create', form_data)
                            .then(response => {
                                this.$vs.notify({
                                    title: 'Success',
                                    text: response.data.message,
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    color: 'success'
                                });
                                // this.$router.push({name: 'order'});
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
                    } else {this.$vs.notify({title: 'Error', text: 'Fix form validation errors', iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});}

                })


            },


            getCategories() {
                // get all categories
                this.$store.dispatch('category/getData', this.payload)
                    .then(response => {
                        this.categories = response.data.data
						console.log(this.categories)
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
	        getProducts(){

                this.$store.dispatch('product/getData', `?category=${this.cartItem.category.id}`)
                    .then(response => {
                        this.products = response.data.data
	                    console.log(this.products)
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
            getCombinations() {
                console.log('asasd')
                this.$store.dispatch('combination/getData', `?category=${this.cartItem.category.id}`)
                    .then(response => {
                        this.combinations = response.data.data;
	                    console.log(this.combinations)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
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

<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="create" title="Create product">
				
				<vs-row
					class="mb-5"
					vs-align="flex-start"
					vs-type="flex" vs-justify="center" vs-w="12">
					<vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
						<label for="source"><h2>Returned</h2></label>
					</vs-col>
					<vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
						<vs-switch id="source" v-model="sourceOfProducts"/>
					</vs-col>
					<vs-col  vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
						<label for="source"><h2>New</h2></label>
					</vs-col>
				</vs-row>
				
				
				<vx-card v-if="!sourceOfProducts">
					
					<vs-table
						pagination
						search
						max-items="100"
						v-model="selectedFromStock"
						:data="returns"
					>
						
						
						<template slot="thead">
							<vs-th>#</vs-th>
							<vs-th>Image</vs-th>
							<vs-th>Name</vs-th>
							<vs-th>Description</vs-th>
							<vs-th>Base price</vs-th>
							<vs-th>Quantity</vs-th>
							<vs-th>Created At</vs-th>
						</template>
						
						<template slot-scope="{data}">
							<vs-tr :data="item" :key="index" v-for="(item, index) in data">
								<vs-td :data="item.product.id">
									{{ item.id }}
								</vs-td>
								
								<vs-td>
									<img
										v-if="item.design.images[0].url"
										:src="item.design.images[0].url"
										class="preview-large">
								</vs-td>
								
								<vs-td :data="item.product.name">
									{{ item.product.name}}
								</vs-td>
								
								<vs-td :data="item.product.description">
									{{ item.product.description}}
								</vs-td>
								
								<vs-td :data="item.product.base_price">
									{{ item.product.base_price}}
								</vs-td>
								
								<vs-td :data="item.product.quantity">
									{{ item.product.quantity}}
								</vs-td>
								
								<vs-td :data="item.created_at">
									{{ item.created_at}}
								</vs-td>
							
							</vs-tr>
						</template>
					</vs-table>
					
					
					<vs-button
						:disabled="!selectedFromStock.id"
						@click="selectFromStock"
						class="my-4"
						color="primary"
						icon="icon-save"
						icon-pack="feather"
						type="filled"
					>Add to cart
					</vs-button>
				
				</vx-card>
				
				<vx-card v-if="sourceOfProducts">
					<div class="vx-row">
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="categories.length">
							<vs-select
								@change="function(e) {this.getProducts();this.getDesigns()}.bind(this)"
								class="w-full"
								label="Category"
								name="category"
								v-model="cartItem.category"
							>
								<vs-select-item :key="category.id" :text="`${category.name} - ${category.description}`" :value="category" v-for="category in categories"/>
							</vs-select>

						</div>
						
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="products.length">
							<vs-select
								@change="getCombinations"
								class="w-full"
								label="Product"
								name="product"
								v-model="cartItem.product"
							
							>
								<vs-select-item :key="product.id" :text="`${product.base_price} - ${product.name} - ${product.description}`" :value="product" v-for="product in products"/>
							</vs-select>
						</div>
						<div class="vx-col md:w-12/12 w-full my-3" v-else >
							<div class="text-center p font-weight-bold w-full">No products to show in this category</div>
						</div>
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="combinations.length">
							<vs-select
								class="w-full"
								label="Combinations"
								label-placeholder="Combinations"
								v-model="cartItem.priceCombination"
							>
								<vs-select-item
									:key="item.id"
									:text='`${item.price} - ${item.combination}`'
									:value="item"
									v-for="item in combinations"/>
							</vs-select>
						</div>
						
						
						<div class="vx-col md:w-12/12 w-full my-3" v-if="combinations.length">
							<div class="centerx pt-6">
								<vs-input-number v-model="cartItem.quantity" min="1" label="Quantity:"/>
							</div>
						</div>
						
						<div
							v-if="cartItem.category.id"
							class="designs vx-col md:w-12/12 w-full mt-3 mb-5">
							<div
								v-if="designs.length"
								class="vx-row">
								<div
									class="vx-col md:w-4/12 lg:w-3/12  single-design"
									v-for="(item,index) in designs"
									:key="item.id"
								>
									<label :for="`design-${item.id}`" class="w-full ">
										<input type="radio" v-model="cartItem.design" :value="item" :id="`design-${item.id}`" name="design">
										<span class="overlay">
											<span class="feather-icon feather-check-circle">
												<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle "><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
											</span>
										</span>
										<img :src="item.images[0].url" class="w-full h-full"  alt="">
										<p class="text-center">{{item.name}}</p>
									</label>
								</div>
							</div>
							<div v-else class="text-center p font-weight-bold w-full">No designs to show in this category</div>
						</div>
					
					</div>
					
					
					<div>
						<vs-button
							@click="addToCart"
							class="mb-4"
							color="primary"
							icon="icon-save"
							icon-pack="feather"
							type="filled"
							:disabled="!(cartItem.quantity && cartItem.priceCombination.id && cartItem.design.id)"
						>Add to cart
						</vs-button>
					</div>
					
				</vx-card>
				
				
				
				
				<vx-card ref="cart" v-if="tempProducts.length" class="mt-4">
					<vs-table
						:data="tempProducts"
					>
						
						<template slot="thead">
							<vs-th>Source</vs-th>
							<vs-th>Design</vs-th>
							<vs-th>Price Combination</vs-th>
							<vs-th>Product</vs-th>
							<vs-th>Quantity</vs-th>
							<vs-th>Remove</vs-th>
						</template>
						
						<template slot-scope="{data}">
							<vs-tr
								:key="index"
								v-for="(item, index) in data"
								:state="item.id?'success':'primary'"
							>
								<vs-td>
									{{ item.id?'Returned':'New'}}
								</vs-td>
								
								<vs-td>
									{{ item.design.name  }}
								</vs-td>
								
								<vs-td>
									{{ item.priceCombination.combination }}
								</vs-td>
								
								<vs-td>
									{{ item.product.name }}
								</vs-td>
								
								<vs-td>
									{{ item.quantity  || 1}}
								</vs-td>
								
								<vs-td>
									<vs-button
							           radius color="danger" type="border"
							           icon-pack="feather" icon="icon-trash"
							           @click="removeFromCart(item,index)"></vs-button>
								
								</vs-td>
								
							</vs-tr>
						</template>
					</vs-table>
				</vx-card>

				
				
				<vx-card ref="order" v-if="tempProducts.length" class="mt-4">
					<div class="vx-row">
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Customer name"
								class="w-full"
								v-model="order.customer_name"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Phone number"
								class="w-full"
								v-model="order.phone_number"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Additional number"
								class="w-full"
								v-model="order.additional_number"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Address"
								class="w-full"
								v-model="order.address"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Shipping notes"
								class="w-full"
								v-model="order.shipping_note"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="discount"
								min="0"
								value="0"
								type="number"
								class="w-full"
								v-model="order.discount"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Additional fees"
								min="0"
								value="0"
								type="number"
								class="w-full"
								v-model="order.additional_fees"
							/>
						</div>
						
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="Additional fees details"
								class="w-full"
								v-model="order.additional_fees_details"
							/>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								label-placeholder="External tracking number"
								class="w-full"
								v-model="order.external_tracking"
							/>
						</div>
						
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							
							<vs-select
								label="Status"
								autocomplete
								label-placeholder="Status"
								icon-pack="feather"
								icon="icon-chevron-down"
								color="primary"
								class="w-full"
								v-model="order.status_id">
								<vs-select-item :key="index" :value="item.id" :text="item.name" v-for="(item, index) in statuses" />
							</vs-select>
							
						</div>
						<div class="vx-col md:w-12/12 w-full mb-3">
							
							<vs-select
								label="Shipping"
								autocomplete
								label-placeholder="Shipping"
								icon-pack="feather"
								icon="icon-chevron-down"
								color="primary"
								class="w-full"
								v-model="order.shipping_price_id">
								<vs-select-item :key="index" :value="item.id" :text="`${item.shipping_method.name} - ${item.city.name} - ${item.price}`" v-for="(item, index) in shippingPrices" />
							</vs-select>
							
						</div>
						
					</div>
				</vx-card>

			</div>
		</div>
		
		
		<div>
			<vs-button
				:disabled="!tempProducts.length"
				@click="create"
				class="mb-4"
				color="primary"
				icon="icon-save"
				icon-pack="feather"
				type="filled"
			>Create order
			</vs-button>
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
            this.getCategories();
	        this.getStatuses();
	        this.getShippingPrice();

            this.getReturned();

        },
        computed: {
            validateForm() {
                return !this.errors.any()
            },
        },
        data: function () {
            return {
                selectedFromStock: {},
                resultTime: 0,
                searchText: "",
                returns: [],
                sourceOfProducts: false,
                combinations: [],
                categories: [],
	            products: [],
	            designs: [],
	            cartItem: {
                    quantity: 0,
                    category:{},
		            product:{},
		            priceCombination:{},
                    design: {}
	            },
                tempProducts: [],
	            
	            order: {
                    orderProducts: [],
                    customer_name: 'Customer Name Here',
                    phone_number: '0151684201316163',
                    additional_number: '05656568',
                    address: 'Mansoura',
                    shipping_note: 'Behind the street',
                    discount: 125,
                    additional_fees: 255,
                    additional_fees_details: 'additional fee details here',
                    external_tracking: 'ARAMEX-102'
	            },
	            statuses: [],
                shippingPrices: [],
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
	        
	        
	        

            selectFromStock(){
                console.log(this.selectedFromStock)
                this.selectedFromStock.priceCombination = this.selectedFromStock.price_combination;


                this.tempProducts.push(this.selectedFromStock)

                this.returns = this.returns.filter(item =>item.id !== this.selectedFromStock.id);

                this.selectedFromStock = {}
            },
            addToCart(){
                this.tempProducts.push(this.cartItem);
                this.designs = []
                this.cartItem= {
                    quantity: 0,
                    category:'',
                    product:'',
                    priceCombination:'',
                    design: null
                }
                
	        },
			removeFromCart(item,index){
                // from Returns products
                if (item.id){
                    this.returns.push(item)
                }
                this.tempProducts.splice(index,1)
			},
	        
	        
            getReturned() {
                this.$vs.loading();
                this.$store.dispatch('restoredItem/getData', this.payload)
                    .then(response => {
                        this.returns = response.data.data;
                        console.log(this.returns);
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(()=>{
                    this.$vs.loading.close();
                })
            },
            getShippingPrice() {
                this.$vs.loading();
                this.$store.dispatch('shippingPrice/getData', this.payload)
                    .then(response => {
                        this.shippingPrices = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
                    .then(() => {this.$vs.loading.close();});
            },
            getCategories() {
                this.$vs.loading();

                this.designs = [];
                
                // get all categories
                this.$store.dispatch('category/getData', this.payload)
                    .then(response => {
                        this.categories = response.data.data
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
                    }).then(()=>{this.$vs.loading.close()})
            },
	        getProducts(){
                this.$vs.loading();

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
                    }).then(()=>{this.$vs.loading.close()})
                
            },
            getCombinations() {
                this.$vs.loading();
                this.$store.dispatch('combination/getData', `?category=${this.cartItem.category.id}`)
                    .then(response => {
                        this.combinations = response.data.data;
	                    console.log(this.combinations)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})
                    }).then(()=>{this.$vs.loading.close()})

            },
            getStatuses() {
                this.$vs.loading();
                this.$store.dispatch('status/getData', this.payload)
                    .then(response => {
                        this.statuses = response.data.data;
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
                    .then(()=>{this.$vs.loading.close()})
            },
            getDesigns() {
                this.$vs.loading();
                let payload = this.payload;
                if (this.$store.getters['auth/userData'].roles[0].name==='Seller'){
                    payload = `?seller=${this.$store.getters['auth/userData'].id}&category=${this.cartItem.category}`
                } else {
                    payload = `?category=${this.cartItem.category.id}`
                }
                this.$store.dispatch('design/getData', payload)
                    .then(response => {
                        this.designs = response.data.data;
                        console.log('designs: ',this.designs)
                        
                        this.$vs.loading.close(this.$refs.create.$el);
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.create.$el);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    })
	                .then(()=>{this.$vs.loading.close()})
            },


            create() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();

                        // if form have no errors
                        this.is_requesting = true;

                        // empty item before appending new items again ( in case of fail )
                        this.order.orderProducts = [];
                        
                        for (let i = 0; i < this.tempProducts.length; i++) {
                            let item = {};
                            if (this.tempProducts[i].id){
                                item.id = this.tempProducts[i].id;
                            }
                            item.quantity = this.tempProducts[i].quantity?this.tempProducts[i].quantity:1;
                            item.product_id = this.tempProducts[i].product.id;
                            item.price_combination_id = this.tempProducts[i].priceCombination.id;
                            item.design_id = this.tempProducts[i].design.id;

                            this.order.orderProducts.push(item);
                        }




                        let sentObject = {...this.order}

                        // create new object for sending object without extra data
                        let form_data = new FormData();

                        for (let key in sentObject) {
                            if (key === 'orderProducts') {
                                form_data.append(key, JSON.stringify(sentObject[key]));
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
                                this.$router.push({name: 'order'})

                            })
                            .catch(error => {
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
                            })
                            .then(() => {
                                this.$vs.loading.close();
                            });
                    } else {this.$vs.notify({title: 'Error', text: 'Fix form validation errors', iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});}

                })


            },
        }
    }
</script>

<style lang="scss">
	.single-design {
		position: relative;
		
		img{
			border: 1px solid #888;
			padding: 5px;
			border-radius: 10px
		}
		
		input{
			display: none;
		}
		
		.overlay{
			position: absolute;
			z-index: 1;
			top: 0;
			right: 15px;
			left: 15px;
			border-radius: 10px;
			bottom: 0;
			background: rgba(24, 100, 120, 0.65);
			opacity: 0;
			display: flex;
			justify-content: center;
	
			svg{
				width: 100px;
				height: 100px;
				color: white;
			}
		}
		
		
		
		
		input:checked  ~  .overlay{
			opacity: 1!important;
		}
	}
	.vs-input-number {
		width: fit-content;
	}

	.attribute-actions {
		align-items: baseline;
		display: flex;
	}
</style>

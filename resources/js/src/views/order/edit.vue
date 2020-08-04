<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="edit" title="Create product">

				<vx-card>
					<div>
						<vs-button
							@click="addToCart"
							class="mb-4"
							color="primary"
							icon="icon-save"
							icon-pack="feather"
							type="filled"
							v-if="cartItem.quantity && cartItem.priceCombination.id && cartItem.design.id"
						>Add to cart
						</vs-button>
					</div>
					
				</vx-card>
				
				
				
				
				<vx-card ref="cart" v-if="tempProducts.length" class="mt-4">
					<vs-table
						:data="tempProducts"
					>
						
						<template slot="thead">
							<vs-th width="200px">Image</vs-th>
							<vs-th>Product</vs-th>
							<vs-th>Category</vs-th>
							<vs-th>Design</vs-th>
							<vs-th>Price Combination</vs-th>
							<vs-th>Quantity</vs-th>
						</template>
						
						<template slot-scope="{data}">
							<vs-tr :key="index" v-for="(item, index) in data">
								<vs-td>
									<img
										:src="item.design.images[0].url"
										class="preview-large">
								</vs-td>
								<vs-td>
									{{ item.product.name }}
								</vs-td>
								
								<vs-td>
									{{ item.product.category.name }}
								</vs-td>
								
								<vs-td>
									{{ item.design.name }}
								</vs-td>
								
								<vs-td>
									{{ item.price_combination.combination}}
								</vs-td>
								
								<vs-td>
									{{ item.quantity }}
								</vs-td>
								
							</vs-tr>
						</template>
					</vs-table>
				</vx-card>

				
				
				<vx-card ref="order" class="mt-4">
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
								label-placeholder="Internal tracking number"
								class="w-full"
								disabled
								:value="order.internal_tracking"
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
				@click="edit"
				class="mb-4"
				color="primary"
				icon="icon-save"
				icon-pack="feather"
				type="filled"
			>Update order
			</vs-button>
		</div>
	
	</div>
</template>

<script>
    import './../../filters/filters'
    import {FormWizard, TabContent} from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'

    export default {
        name: "edit",
        mounted() {

            this.getCategories();
            this.getDesigns();
            
            this.getOrder();
            this.getStatuses();
            this.getShippingPrice();
            
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
                    orderProducts: []
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
            edit() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;
                        
                        
                        
                        let sentObject = {...this.order}

                        // edit new object for sending object without extra data
                        let form_data = new FormData();

                        for (let key in sentObject) {
                            if (key === 'orderProducts') {
                                form_data.append(key, JSON.stringify(sentObject[key]));
                            } else {
                                form_data.append(key, sentObject[key]);
                            }
                        }

                        this.$store.dispatch('order/update', {id: this.$route.params.id, data: form_data})
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
	        
	        addToCart(){
                this.tempProducts.push(this.cartItem);
                
                this.cartItem= {
                    quantity: 0,
                    category:{},
                    product:{},
                    priceCombination:{},
                    design: {}
                }
                
	        },



            getOrder() {
                this.$store.dispatch('order/view', this.$route.params.id)
                    .then(response => {
                        this.order = response.data.data;
                        console.log('order: ',this.order)
	                    
	                    
	                    // get current order products
	                    this.tempProducts = this.order.order_products;
	                    
	                    
	                    // set current design
                        this.cartItem.design = this.order.order_products[0].design;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },
	        
	        
            getShippingPrice() {
                this.$vs.loading({container: this.$refs.edit.$el, scale: 0.5});
                this.$store.dispatch('shippingPrice/getData', this.payload)
                    .then(response => {
                        this.shippingPrices = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
                    .then(() => {
                        this.$vs.loading.close(this.$refs.edit.$el);
                    });
            },
            getCategories() {
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
            getStatuses() {
                this.$vs.loading({container: this.$refs.edit.$el, scale: 0.5});
                this.$store.dispatch('status/getData', this.payload)
                    .then(response => {
                        this.statuses = response.data.data;
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
                    .then(()=>{this.$vs.loading.close(this.$refs.edit.$el);});
            },
            getDesigns() {
                this.$vs.loading({container: this.$refs.edit.$el, scale: 0.5});
                let payload = this.payload;
                if (this.$store.getters['auth/userData'].roles[0].name==='Seller'){
                    payload = '?seller='+this.$store.getters['auth/userData'].id
                }
                this.$store.dispatch('design/getData', payload)
                    .then(response => {
                        this.designs = response.data.data;
                        console.log(this.designs)
                        
                        this.$vs.loading.close(this.$refs.edit.$el);
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.edit.$el);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
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

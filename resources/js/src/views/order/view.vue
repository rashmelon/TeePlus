<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="edit" title="Create product">
				
				<vx-card ref="cart" v-if="tempProducts.length" class="mt-4">
					<vs-table
						:data="tempProducts"
					>
						
						<template slot="thead">
							<vs-th width="200px">Image</vs-th>
							<vs-th>Category</vs-th>
							<vs-th>Design</vs-th>
							<vs-th>Price Combination</vs-th>
							<vs-th>Product</vs-th>
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
									{{ item.product.category.name }}
								</vs-td>
								
								<vs-td>
									{{ item.design.name }}
								</vs-td>
								
								<vs-td>
									{{ item.price_combination.combination}}
								</vs-td>
								
								<vs-td>
									{{ item.product.name }}
								</vs-td>
								
								<vs-td>
									{{ item.quantity }}
								</vs-td>
								
							</vs-tr>
						</template>
					</vs-table>
				</vx-card>

				
				
				<vx-card ref="order" class="mt-4" v-if="order">
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
						
						
						
						<div class="vx-col md:w-12/12 w-full mb-3" v-if="order.status">
							<vs-input
								label-placeholder="Status"
								class="w-full"
								v-model="order.status.name"
							/>
						</div
						>
						
						
						
						<div class="vx-col md:w-12/12 w-full mb-3" v-if="order.shipping_price">
							<vs-input
								label-placeholder="Shipping"
								class="w-full"
								:value="`${order.shipping_price.shipping_method.name} - ${order.shipping_price.city.name} - ${order.shipping_price.price}`"
							/>
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
        name: "show",
        mounted() {

            this.getOrder();
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



            getOrder() {
                this.$store.dispatch('order/view', this.$route.params.id)
                    .then(response => {
                        this.order = response.data.data;
                        console.log('order: ',this.order)
	                    
	                    
	                    // get current order products
	                    this.tempProducts = this.order.order_products;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
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

<template>
	<div>
		<div class=" w-full mb-base px-5" v-if="can('view-invoice')">
			<div ref="edit" class="mt-5">
				<div class="d-block text-center">
					<img  class="d-block mx-auto img-fluid" src="../../../../assets/images/logo/logo.png"/>
				</div>
				
				<vs-button class="no-print" @click="printInvoice" color="primary" icon="icon-printer" icon-pack="feather" type="filled">Print</vs-button>
				
				
				
				<vs-table
						v-if="tempProducts.length" class="my-4"
						:data="tempProducts"
					>
						
						<template slot="thead">
							<vs-th>Product</vs-th>
							<vs-th>Design</vs-th>
							<vs-th>Price Combination</vs-th>
							<vs-th>Quantity</vs-th>
						</template>
						
						<template slot-scope="{data}">
							<vs-tr :key="index" v-for="(item, index) in data">
								<vs-td>
									{{ item.product?item.product.name:'Deleted' }}({{item.product?item.product.base_price:0}})
								</vs-td>
								
								<vs-td>
									{{ item.design_print_price.design.name }}	- {{ item.design_print_price.print_criteria.criteria}}({{ item.design_print_price.price}})
								</vs-td>
								
								<vs-td>
									{{ item.price_combination.combination}} ({{ item.price_combination.price}})
								</vs-td>
								
								
								<vs-td>
									{{ item.quantity }}
								</vs-td>
							
							</vs-tr>
						</template>
					</vs-table>
				
				
				<vs-table v-if="order.payment_type" :data="order">
					<template slot="thead">
						<vs-th>Type</vs-th>
						<vs-th>Amount</vs-th>
						<vs-th>Details</vs-th>
					</template>
					
					<template >
						
						<!-- Order Cost -->
						<vs-tr>
							<vs-td>
								Order products
							</vs-td>
							<vs-td>
								<b>{{totalProductsPrice}}</b>
							</vs-td>
							<vs-td>
							
							</vs-td>
						</vs-tr>
						
						
						
						
						<!-- shipping method -->
						<vs-tr>
							<vs-td>
								Shipping price
							</vs-td>
							<vs-td>
								<b>{{order.shipping_price.price}}</b>
							</vs-td>
							<vs-td>
								{{ order.shipping_price.city.name }} - {{ order.shipping_price.shipping_method.name }}
							</vs-td>
						</vs-tr>
						
						
						<!-- Additional Fees -->
						<vs-tr state="danger" >
							<vs-td>
								Additional Fees
							</vs-td>
							<vs-td>
								<b>{{order.additional_fees}}</b>
							</vs-td>
							<vs-td>
								{{order.additional_fees_details}}
							</vs-td>
						</vs-tr>
						
						
						<!-- Discount -->
						<vs-tr state="success">
							<vs-td>
								Discount
							</vs-td>
							<vs-td>
								<b>- {{order.discount}}</b>
							</vs-td>
							<vs-td>
							</vs-td>
						</vs-tr>
						
						
						
						
						
						
						
						<!-- Total -->
						<vs-tr state="primary" >
							<vs-td>
								<b>Total: {{order.payment_type.name}}</b>
							</vs-td>
							<vs-td>
								<b>{{order.total_price}}</b>
							</vs-td>
							<vs-td>
							</vs-td>
						</vs-tr>
						
						<vs-tr>
							<vs-td colspan="3">
								<div class="small-print">
									<b v-html="order.total_price_info"></b>
								</div>
							</vs-td>
						</vs-tr>
					</template>
				</vs-table>
				
				
				<vx-card ref="view" class="shadow-none mt-5" v-if="order.customer_name">
					<vs-row>
						<vs-col vs-justify="center" vs-align="center" vs-w="6">
							<div>
								Customer: <b>{{order.customer_name}}</b>
							</div>
							<div>
								Phone: <b>{{order.phone_number}}</b>
							</div>
							<div>
								Phone 2: <b>{{order.additional_number || ''}}</b>
							</div>
							<div>
								Address: <b>{{order.address}}</b>
							</div>
						
						</vs-col>
						<vs-col vs-justify="center" vs-align="center" vs-w="6">
							<div>
								Internal Tracking Number: <b>{{order.internal_tracking}}</b>
							</div>
							<div>
								Shipment Tracking Number: <b>{{order.external_tracking}}</b>
							</div>
							<div>
								Shipment method: <b>{{order.shipping_price.shipping_method.name}}</b>
							</div>
							<div>
								City: <b>{{order.shipping_price.city.name}}</b>
							</div>
						</vs-col>
						
						
						<vs-col vs-justify="center" vs-align="center" vs-w="12" class="my-6">
							<vs-divider/>
							<div class="small-print">
							Notes:<b>{{order.shipping_note}}</b>
							</div>
						</vs-col>
					</vs-row>
				
				</vx-card>
				
			</div>
		</div>


	</div>
</template>

<script>

    export default {
        name: "print-invoice",
        mounted() {

            this.getOrder();
            
        },

        computed:{
            totalProductsPrice(){
                let total = 0;
                this.tempProducts.forEach(item=>{
                    total += (Number(item.product?item.product.base_price:0)+Number(item.design_print_price.price)+Number(item.price_combination.price) * item.quantity)
                });
                return total
            }
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
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {
            printInvoice(){
                window.print();
            },


            getOrder() {
                this.$store.dispatch('order/view', this.$route.params.id)
                    .then(response => {
                        this.order = response.data.data;
                        console.log('order: ',this.order)


	                    // get current order products
	                    this.tempProducts = this.order.order_products;
                        
                        setTimeout(()=>{
                            this.printInvoice()
                        },500)
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
	
	
	
	
	@media print {
		@page {
			margin-top: 0;
			margin-bottom: 0;
		}
		body {
			padding-top: 26px;
			padding-bottom: 26px ;
		}
		.no-print{
			display: none;
		}
		*{
			font-size: small;
		}
		
		img{
			height: 60px;
		}
		
		.tr-table-state-*{
			color: inherit;
			box-shadow: transparent!important;
			background: transparent;
		}
		
		.small-print b{
			font-size: smaller;
			font-weight: 400;
			line-height: 18px;
		}
	}
</style>

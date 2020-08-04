<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="edit" title="Create product">
				
				<vx-card ref="cart" v-if="tempProducts.length" class="mt-4">
					<vs-table
						:data="tempProducts"
						multiple
						v-model="returnProducts"
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
							<vs-tr :data="item"  :key="index" v-for="(item, index) in data">
								<vs-td :data="item.design.images[0].url">
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
				
				
				
				<div class="text-center mt-4">
					<vs-button @click="returnProd" color="primary" type="filled" :disabled="!returnProducts.length">Return selected products</vs-button>
				</div>
			
			
			</div>
		</div>
		
		
	</div>
</template>

<script>
    import './../../filters/filters'

    export default {
        name: "return",
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
                returnProducts: [],
                tempProducts: [],
	            order: {
                    orderProducts: []
	            },
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
            returnProd(){
              console.log(this.returnProducts)
            },


            getOrder() {
                this.$store.dispatch('order/view', this.$route.params.id)
                    .then(response => {
                        this.order = response.data.data;

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
	.con-expand-users{
		.con-btns-user{
			display: flex;
			padding: 10px;
			padding-bottom: 0px;
			align-items: center;
			justify-content: space-between;
		}
	}
	
	
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

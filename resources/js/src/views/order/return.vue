<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="edit" title="Create product">

				<vx-card class="mt-4" ref="cart" v-if="tempProducts.length">
					<vs-table
						:data="tempProducts"

						v-model="form"
					>

						<template slot="thead">
							<vs-th width="200px">Image</vs-th>
							<vs-th>Identifier</vs-th>
							<vs-th>Category</vs-th>
							<vs-th>Design</vs-th>
							<vs-th>Price Combination</vs-th>
							<vs-th>Product</vs-th>
						</template>

						<template slot-scope="{data}">
							<vs-tr :data="item" :key="index" v-for="(item, index) in data">
								<vs-td :data="item.design_print_price.design.images[0].url">
									<img
										:src="item.design_print_price.design.images[0].url"
										class="preview-large">
								</vs-td>

								<vs-td>
									{{ item.loopIdentifier }}
								</vs-td>

								<vs-td>
									{{ item.product.category.name }}
								</vs-td>

								<vs-td>
									{{ item.design_print_price.design.name }}
								</vs-td>

								<vs-td>
									{{ item.price_combination.combination}}
								</vs-td>

								<vs-td>
									{{ item.product.name }}
								</vs-td>


							</vs-tr>
						</template>
					</vs-table>

					<vs-textarea
						class="mb-0"
						label="Notes"
						name="notes"
						v-model="notes"
					/>
				</vx-card>


				<div class="text-center mt-4">
					<vs-button :disabled="!form.id" @click="returnProd" color="primary" type="filled">Return selected products</vs-button>
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
                form: {},
                notes: '',
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
            returnProd() {
                console.log(this.form)
                this.$vs.loading();

	            this.form.user_id = this.order.seller_id;
	            this.form.notes = this.notes;

                let form_data = new FormData();


                for (let key in this.form) {
                    form_data.append(key, this.form[key]);
                }

                this.$store.dispatch('restoredItem/create', form_data)
                    .then(response => {
                        this.order = response.data.data;

                        this.$router.push({name: 'returned'})
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
                    }).then(()=>{
                    this.$vs.loading.close()
                })
            },


            getOrder() {
                this.$vs.loading();
                this.$store.dispatch('order/view', this.$route.params.id)
                    .then(response => {
                        this.order = response.data.data;
                        console.log(this.order)
                        // this.tempProducts = this.order.order_products
	                     for (let j = 0; j < this.order.order_products.length; j++) {
                            for (let i = 0; i < this.order.order_products[j].quantity; i++) {
                                // counter variable to make every object different
	                            this.tempProducts.push({
		                            ...this.order.order_products[j],
		                            loopIdentifier: `${this.order.order_products[j].id}-${i+1}`
	                            })
                            }
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(()=>{
                    this.$vs.loading.close()
                })
            },
        }
    }
</script>

<style lang="scss">
	.con-expand-users {
		.con-btns-user {
			display: flex;
			padding: 10px;
			padding-bottom: 0px;
			align-items: center;
			justify-content: space-between;
		}
	}


	.single-design {
		position: relative;

		img {
			border: 1px solid #888;
			padding: 5px;
			border-radius: 10px
		}

		input {
			display: none;
		}

		.overlay {
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

			svg {
				width: 100px;
				height: 100px;
				color: white;
			}
		}


		input:checked ~ .overlay {
			opacity: 1 !important;
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

<template>
	<div class="vx-col w-full mb-base" v-if="can('view-invoice')">
		<img src="../../../../assets/images/logo/logo.png"/>
		
		<vs-table v-if="invoice.order" :data="invoice">
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
						<b>{{invoice.order.products}}</b>
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
						<b>{{invoice.order.shipping_price.price}}</b>
					</vs-td>
					<vs-td>
						{{ invoice.order.shipping_price.city.name }} - {{ invoice.order.shipping_price.shipping_method.name }}
					</vs-td>
				</vs-tr>
				
				
				<!-- Additional Fees -->
				<vs-tr state="danger" >
					<vs-td>
						Additional Fees
					</vs-td>
					<vs-td>
						<b>{{invoice.order.additional_fees}}</b>
					</vs-td>
					<vs-td>
						{{invoice.order.additional_fees_details}}
					</vs-td>
				</vs-tr>
				
				
				<!-- Discount -->
				<vs-tr state="success">
					<vs-td>
						Discount
					</vs-td>
					<vs-td>
						<b>- {{invoice.order.discount}}</b>
					</vs-td>
					<vs-td>
					</vs-td>
				</vs-tr>
				
				
				
				
				
				
				
				<!-- Total -->
				<vs-tr state="primary" >
					<vs-td>
						<b>Total: {{invoice.order.payment_type.name}}</b>
					</vs-td>
					<vs-td>
						<b>{{invoice.order.total_price}}</b>
					</vs-td>
					<vs-td>
					</vs-td>
				</vs-tr>
				
				<vs-tr>
					<vs-td colspan="3">
						<div v-html="invoice.order.total_price_info"></div>
					</vs-td>
				</vs-tr>
			</template>
		</vs-table>
		
		<vx-card ref="view" class="shadow-none mt-5" v-if="invoice.order">
			<vs-row>
				<vs-col vs-justify="center" vs-align="center" vs-w="6">
					<div>
						Customer: <b>{{invoice.order.customer_name}}</b>
					</div>
					<div>
						Phone: <b>{{invoice.order.phone_number}}</b>
					</div>
					<div>
						Phone 2: <b>{{invoice.order.additional_number}}</b>
					</div>
					<div>
						Address: <b>{{invoice.order.address}}</b>
					</div>

				</vs-col>
				<vs-col vs-justify="center" vs-align="center" vs-w="6">
					<div>
						Internal Tracking Number: <b>{{invoice.order.internal_tracking}}</b>
					</div>
					<div>
						Shipment Tracking Number: <b>{{invoice.order.external_tracking}}</b>
					</div>
				</vs-col>
				
				
				<vs-col vs-justify="center" vs-align="center" vs-w="12" class="my-6">
					<vs-divider/>
					Notes:<b>{{invoice.order.shipping_note}}</b>
				
				</vs-col>
			</vs-row>
			
		</vx-card>
	</div>

</template>

<script>
    export default {
        name: "browse",
        data() {
            return {
                searchText: "",
                resultTime: 0,
                is_requesting: false,
                invoice: {},
            }
        },
        mounted() {
            this.getInvoice();
        },
        methods: {
            getInvoice() {
                console.log('id= ', this.$route.params.id);

                this.$vs.loading();

                this.$store.dispatch('invoice/view', this.$route.params.id)
                    .then(response => {
                        this.invoice = response.data.data;

                        console.log(this.invoice)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(() => {
                    this.$vs.loading.close();
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

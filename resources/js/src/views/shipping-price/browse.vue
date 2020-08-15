<template>
	<div class="vx-col w-full mb-base" v-if="can('browse-shipping-price')">

		<div class="centerx">
			<vs-row>
				<vs-col vs-align="center" vs-justify="center" vs-type="flex" vs-w="9">
					<b class="text-left vx-col w-full">{{shippingPrices.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse">
			<vs-table
				:data="shippingPrices"
				max-items="50"
				pagination
				search
			>

				<template slot="header" v-if="can('create-shipping-price')">
					<vs-button :to="{name: 'create-shipping-price'}" color="primary" icon="icon-plus" icon-pack="feather" type="filled"
					           vs-w="3">Add Shipping Price
					</vs-button>
				</template>

				<template slot="thead">
					<vs-th>#</vs-th>
					<vs-th>Shipping Method</vs-th>
					<vs-th>City</vs-th>
					<vs-th>Days</vs-th>
					<vs-th>Price</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(shipping, index) in data">
						<vs-td :data="shipping.id">
							{{ shipping.id }}
						</vs-td>


						<vs-td :data="shipping.shipping_method.name">
							{{ shipping.shipping_method.name}}
						</vs-td>

						<vs-td :data="shipping.city.name">
							{{ shipping.city.name }}
						</vs-td>


						<vs-td :data="shipping.days">
							{{ shipping.days}}
						</vs-td>
						<vs-td :data="shipping.price">
							{{ shipping.price}}
						</vs-td>



						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/3 mx-2" v-if="can('view-shipping-price')">
										<vs-button :id="`btn-view-${shipping.id}`" @click=viewShippingPrice(shipping.id) class="vs-con-loading__container" color="primary"
										           icon="icon-eye"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
									<div class="w-1/3 mx-2" v-if="can('edit-shipping-price')">
										<vs-button :id="`btn-edit-${shipping.id}`" @click=editShippingPrice(shipping.id) class="vs-con-loading__container" color="warning"
										           icon="icon-edit"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
									<div class="w-1/3 mx-3" v-if="can('delete-shipping-price')">
										<vs-button :id="`btn-delete-${shipping.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteShippingPrice(shipping)"
										           class="vs-con-loading__container"
										           color="danger"
										           icon="icon-trash"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
								</div>
							</vs-row>
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>
		</vx-card>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: "",
                resultTime: 0,
                shippingPrices: [],
                is_requesting: false,
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            }
        },
        mounted() {
            this.getShippingPrice();
        },

        methods: {
            getShippingPrice() {
                this.$vs.loading({container: this.$refs.browse.$el});
                this.$store.dispatch('shippingPrice/getData', this.payload)
                    .then(response => {
                        this.shippingPrices = response.data.data;

                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})

                    })
                    .then(() => {
                        this.$vs.loading.close(this.$refs.browse.$el);
                    });
            },

            viewShippingPrice(id) {
                this.$router.push({name: 'view-shipping-price', params: {'id': id}})
            },
            editShippingPrice(id) {
                this.$router.push({name: 'edit-shipping-price', params: {'id': id}})
            },
            confirmDeleteShippingPrice(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteShippingPrice,
                    parameters: item
                });
            },

            deleteShippingPrice(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('shippingPrice/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.shippingPrices = this.shippingPrices.filter(type => {
                            return type.id !== item.id
                        });
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },
        }
    }
</script>

<style>
	.txt-hover:hover {
		cursor: pointer;
		color: black !important;
	}

</style>

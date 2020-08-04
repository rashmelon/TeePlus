<template>
	<div>
		<div class=" w-full mb-base" v-if="form">
			<vx-card ref="edit"  title="Edit Shipping Method">

				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-3">

						<vs-input
							class="w-full"
							label="Shipping Method"
							v-model="form.city.name"
							disabled
						/>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-input
							class="w-full"
							label="Shipping Method"
							v-model="form.shipping_method.name"
							disabled
						/>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-input
							class="w-full"
							label="Price"
							v-model="form.price"
							disabled
						/>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-input
							class="w-full"
							label="Days"
							v-model="form.days"
							disabled
						/>
					</div>
				</div>

			</vx-card>
		</div>
	</div>
</template>

<script>

    export default {
        name: "edit",
        mounted() {
            this.getShippingPrice();
        },
        data: function () {
            return {
                form: null,
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
            getShippingPrice(){
                this.$store.dispatch('shippingPrice/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;

                        console.log(this.form)
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'})
                    })
            }
        }
    }
</script>

<style>
	.vs-input-number {
		width: fit-content;
	}

	.attribute-actions {
		align-items: baseline;
		display: flex;
	}
</style>

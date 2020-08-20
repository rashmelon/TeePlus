<template>
	<div>
		<div class=" w-full mb-base">
			<vx-card ref="create"  title="Create Shipping Method">

				<div class="vx-row">
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-select
							v-if="cities.length"
							class="w-full"
							label="City"
							name="city"
							v-model="form.city_id"
							v-validate="'required'"
						>
							<vs-select-item :key="city.id" :text="city.name" :value="city.id" v-for="city in cities"/>
						</vs-select>
						<span class="text-danger text-sm" v-show="errors.has('city')">{{ errors.first('city') }}</span>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-select
							v-if="shipping.length"
							class="w-full"
							label="Shipping Method"
							name="method"
							v-model="form.shipping_method_id"
							v-validate="'required'"
						>
							<vs-select-item :key="method.id" :text="method.name" :value="method.id" v-for="method in shipping"/>
						</vs-select>
						<span class="text-danger text-sm" v-show="errors.has('method')">{{ errors.first('method') }}</span>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-input
							class="w-full"
							label="Price"
							type="number"
							name="price"
							v-model="form.price"
							v-validate="'required|min_value:0'"
						/>
						<span class="text-danger text-sm" v-show="errors.has('price')">{{ errors.first('price') }}</span>
					</div>
					<div class="vx-col sm:w-1/2 w-full mb-3">
						<vs-input
							class="w-full"
							label="Days"
							type="number"
							name="days"
							v-model="form.days"
							v-validate="'required|min_value:0'"
						/>
						<span class="text-danger text-sm" v-show="errors.has('days')">{{ errors.first('days') }}</span>
					</div>
				</div>


				<div class="mt-4 ">
					<vs-button
						@click="create"
						class="mb-4 ml-auto"
						color="primary"
						icon="icon-save"
						icon-pack="feather"
						type="filled"
					>Create
					</vs-button>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>

    export default {
        name: "create",
        mounted() {
            this.$vs.loading();

            Promise.all([
                this.getCities(),
                this.getShippingMethod()
            ])
            .then(()=>{
                this.$vs.loading.close()
            })
	        
        },
        data: function () {
            return {
                form: {},
                cities:[],
                shipping:[],
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
            getCities(){
                this.$store.dispatch('city/getData', this.payload)
                    .then(response => {
                        this.cities = response.data.data;
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
                    })
            },
	        getShippingMethod(){
                this.$store.dispatch('shipping/getData', this.payload)
                    .then(response => {
                        this.shipping = response.data.data;
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
                    })

            },
            create(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();

                        // if form have no errors
                        this.is_requesting = true;


                        let form_data = new FormData();

                        for (let key in this.form) {
                            form_data.append(key, this.form[key]);
                        }

                        this.$store.dispatch('shippingPrice/create', form_data)
                            .then(response => {
                                this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});
                                this.$router.push({name: 'shipping-price'});
                                this.is_requesting = false;

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

                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Fix form validation errors',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });

                    }
                });

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

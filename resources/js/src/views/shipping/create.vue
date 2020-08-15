<template>
	<div>
		<div class=" w-full mb-base">
			<vx-card ref="create"  title="Create Shipping Method">

				<div class="vx-col sm:w-2/2 w-full mb-3">
					<vs-input
						class="w-full"
						label="Shipping Name"
						name="name"
						v-model="form.name"
						v-validate="'required'"
					/>
					<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
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

        },
        computed: {
            validateForm() {
                return !this.errors.any()
                    && this.form.name !== ''
            },
        },
        data: function () {
            return {
                form: {
                },
                is_requesting: false
            }
        },
        components: {
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {
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
                        this.$store.dispatch('shipping/create', form_data)
                            .then(response => {
                                this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});
                                this.$router.push({name: 'shipping'});
                                this.is_requesting = false;

                            })
                            .catch(error => {
                                for (const [key, value] of Object.entries(error.response.data.errors)) {
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

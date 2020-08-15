<template>
	<div>
		<div class=" w-full mb-base">
			<vx-card ref="edit" title="Edit Status">

				<div class="vx-col sm:w-2/2 w-full mb-3">
					<vs-input
						class="w-full"
						label="Status Name"
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
					>Edit
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
        data: function () {
            return {
                form: {},
                is_requesting: false
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        created() {
            this.getStatus();
        },
        methods: {
            getStatus() {
                this.$vs.loading();
                this.$store.dispatch('status/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(()=>{
                    this.$vs.loading.close()
                })

            },
            create() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();
                        // if form have no errors
                        this.is_requesting = true;


                        let form_data = new FormData();

                        for (let key in this.form) {
                            form_data.append(key, this.form[key]);
                        }
                        this.$store.dispatch('status/update', {id: this.$route.params.id,data:form_data})
                            .then(response => {
                                this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});
                                this.$router.push({name: 'status'});
                                this.is_requesting = false;
                            })
                            .catch(error => {
                                this.$vs.notify({title: 'Error', text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                                this.is_requesting = false;
                            }).then(()=>{
                            this.$vs.loading.close()
                        })
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

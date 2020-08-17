<template>
	<div  v-if="can('edit-transaction')">
		<vx-card v-if="form.amount">


			<vs-input
				v-if="form.seller"
				class="w-full mt-5"
				label="Seller"
				disabled
				v-model="form.seller.name"
			/>



			<vs-input
				class="w-full mt-5"
				label="Operation"
				disabled
				v-model="form.type"
			/>



			<vs-input
				class="w-full mt-5"
				label="Amount"
				name="amount"
				v-model="form.amount"
				type="number"
				v-validate="'required|min_value:1'"
			/>
			<span class="text-danger text-sm" v-show="errors.has('amount')">{{ errors.first('amount') }}</span>



			<vs-input
				class="w-full mt-5"
				label="Date"
				disabled
				v-model="form.date"
			/>



			<vs-button
				@click="edit"
				class="mt-5 ml-auto"
				color="primary"
				icon="icon-save"
				icon-pack="feather"
				type="filled"
			>Edit
			</vs-button>

		</vx-card>

	</div>
</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                is_requesting: false,
	            form:{
                    type: 'deposit',
                    amount: undefined,
                    date: '',
                    seller_id: undefined
                },
            }
        },
        mounted() {
			this.getTransaction();

        },
        methods: {
            getTransaction(){
                this.is_requesting = true;
                this.$store.dispatch('transaction/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;
                        this.is_requesting = false;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                        this.is_requesting = false;
                    }).then(()=>{this.$vs.loading.close();})

            },
            edit(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();
                        // edit new object for sending object without extra data
                        let form_data = new FormData();

                        form_data.append('amount', this.form['amount']);



                        this.$store.dispatch('transaction/update', {id: this.$route.params.id,data: form_data})
                            .then(response => {
                                this.$vs.notify({
                                    title: 'Success',
                                    text: response.data.message,
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    color: 'success'
                                });
                                this.$router.push({name: 'browse-user-transactions', params:{id:this.form.seller_id}});
                                this.is_requesting = false;

                            })
                            .catch(error => {
                                console.log(error);
                                this.$vs.notify({
                                    title: 'Error',
                                    text: error.response.data,
                                    iconPack: 'feather',
                                    icon: 'icon-alert-circle',
                                    color: 'danger'
                                });
                                this.is_requesting = false;
                            }).then(()=>{this.$vs.loading.close();})

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

<style lang="scss" scoped>

</style>

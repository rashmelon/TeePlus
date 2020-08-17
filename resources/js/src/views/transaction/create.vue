<template>
	<div  v-if="can('create-transaction')">
		<vx-card v-if="users.length">

			<vs-select v-if="!form.seller_id"
				class="w-full mt-5"
				label="Seller"
				items="users"
				placeholder="Seller"
				v-model="form.seller_id"
				name="seller"
				v-validate="'required'"
			>
				<vs-select-item
					selected
					:value="null"
					text='Choose seller'
				/>
				<vs-select-item
					:key="item.id"
					:text='item.name'
					:value="item.id"
					v-for="(item,index) in users"/>
			</vs-select>
			<span class="text-danger text-sm" v-show="errors.has('seller')">{{ errors.first('seller') }}</span>


			<vs-select
				class="w-full mt-5"
				label="Operation"
				placeholder="Operation"
				v-model="form.type"
				name="type"
				v-validate="'required'"
			>
				<vs-select-item
					:key="item.value"
					:text='item.name'
					:value="item.value"
					v-for="item in operations"/>
			</vs-select>

			<span class="text-danger text-sm" v-show="errors.has('type')">{{ errors.first('type') }}</span>


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
				name="date"
				v-model="form.date"
				type="date"
				v-validate="'required'"
			/>
			<span class="text-danger text-sm" v-show="errors.has('date')">{{ errors.first('date') }}</span>



			<vs-button
				@click="create"
				class="mt-5 ml-auto"
				color="primary"
				icon="icon-save"
				icon-pack="feather"
				type="filled"
			>Create
			</vs-button>

		</vx-card>

	</div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                form:{
                    type: 'deposit',
                    amount: 0,
                    date: '',
                    seller_id: undefined
                },
	            users: [],
	            operations:[
                    {
                        name: 'Deposit',
                        value: 'deposit'
                    },
                    {
                        name: 'Withdraw',
                        value: 'withdraw'
                    },
	            ]
            }
        },
        mounted() {
            if (this.$route.params.id){
                this.form.seller_id =  this.$route.params.id;
            }
			this.getUsers();
        },
        methods: {
            getUsers(){
                this.$vs.loading();
                this.$store.dispatch('user/getData', '')
                    .then(response => {
                        this.users = response.data.data;
                        console.log(this.users)
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});})
	                .then(()=>{this.$vs.loading.close();})
            },



            create(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$vs.loading();
                        // create new object for sending object without extra data
                        let form_data = new FormData();

                        for (let key in this.form) {
                            form_data.append(key, this.form[key]);
                        }


                        this.$store.dispatch('transaction/create', form_data)
                            .then(response => {
                                this.$vs.notify({
                                    title: 'Success',
                                    text: response.data.message,
                                    iconPack: 'feather',
                                    icon: 'icon-check',
                                    color: 'success'
                                });
                                if (this.$route.params.id){
                                    this.$router.push({name: 'browse-user-transactions', params:{id:this.$route.params.id}});
                                }
                                else{
                                    this.$router.push({name: 'browse-transaction'});
                                }
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

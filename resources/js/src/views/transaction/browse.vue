<template>
	<div v-if="can('browse-transaction')">
		<div class="centerx mb-5">
			<vs-row>
				<vs-col vs-align="center" vs-justify="center" vs-type="flex" vs-w="9">
					<b class="text-left vx-col w-full">{{transactions.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>
		
		
		<vx-card ref="browse">
			<vs-table
				pagination
				search
				max-items="50"
				:data="transactions"
			>
				
				<template slot="header"  v-if="can('create-transaction')">
					<vs-button :to="{name: 'create-transaction'}"  color="primary" type="filled" icon-pack="feather"
					           icon="icon-plus">Create transaction
					</vs-button>
				</template>
				
				<template slot="thead">
					<vs-th>Date</vs-th>
					<vs-th>Seller</vs-th>
					<vs-th>Type</vs-th>
					<vs-th>Amount</vs-th>
					<vs-th>Created at</vs-th>
					<vs-th>Updated at</vs-th>
					<vs-th>Actions</vs-th>
				</template>
				
				<template slot-scope="{data}">
					<vs-tr
						:state="transaction.type === 'withdraw'?'warning':'success'"
						
						:key="index" v-for="(transaction, index) in data">
						
						<vs-td :data="transaction.date">
							{{ transaction.date}}
						</vs-td>
						<vs-td>
							{{ transaction.seller?transaction.seller.name:''}}
						</vs-td>
						<vs-td :data="transaction.type">
							{{ transaction.type}}
						</vs-td>
						<vs-td :data="transaction.amount">
							<b>{{transaction.amount}}</b>
						</vs-td>
						<vs-td :data="transaction.created_at">
							{{transaction.created_at}}
						</vs-td>
						<vs-td :data="transaction.updated_at">
							{{transaction.updated_at}}
						</vs-td>
						<vs-td>
							<div class="flex justify-between">
	                            <!--<span class="flex items-center" v-if="can('view-transaction')">
	                                <vx-tooltip position="top" text="View Transaction">
										<vs-button :id="`btn-view-${transaction.id}`" class="vs-con-loading__container" radius color="primary" type="border"
										           icon-pack="feather" icon="icon-eye"
										           @click="viewTransaction(transaction.id)"></vs-button>
	                                </vx-tooltip>
	                            </span>-->
								
								<span class="flex items-center" v-if="can('edit-transaction')">
	                                <vx-tooltip position="top" text="Update Transaction">
									<vs-button :id="`btn-edit-${transaction.id}`" class="vs-con-loading__container" radius color="warning" type="border"
									           icon-pack="feather" icon="icon-edit"
									           @click=editTransaction(transaction.id)></vs-button>
	                                </vx-tooltip>
	                            </span>
								
								<span class="flex items-center" v-if="can('delete-transaction')">
	                                <vx-tooltip position="top" text="Delete Transaction">
										<vs-button :id="`btn-delete-${transaction.id}`" class="vs-con-loading__container" radius color="danger" type="border"
										           icon-pack="feather" icon="icon-trash"
										           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteTransaction(transaction)"></vs-button>
	                                </vx-tooltip>
	                            </span>
							</div>
						</vs-td>
					
					</vs-tr>
				</template>
			</vs-table>
		
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
                transactions: [],
            }
        },
        mounted() {
            this.getTransactions();
        },
        methods: {

            getTransactions() {

                this.$vs.loading();

                let seller = '';
                if (this.$route.params.id){
                    seller = `?seller=${this.$route.params.id}`
                } else if (this.$store.state.auth.AppActiveUser.roles[0].name === 'Seller') {
                    seller = `?seller=${this.$store.state.auth.AppActiveUser.id}`
                }
                
                this.$store.dispatch('transaction/getData', seller)
                    .then(response => {
                        this.transactions = response.data.data;

                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(() => {
                    this.$vs.loading.close();
                })
            },

            viewTransaction(id){
                this.$router.push({name:'view-transaction',params:{'id':id}})
            },

            editTransaction(id){
                this.$router.push({name: 'edit-transaction', params: {'id': id}})
            },
            confirmDeleteTransaction(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteTransaction,
                    parameters: item
                });
            },
            deleteTransaction(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('transaction/delete', item.id)
                    .then(response => {
                        this.transactions = this.transactions.filter(type => {
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
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    })
	                .then(()=>{
                    this.is_requesting=false;
                    this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

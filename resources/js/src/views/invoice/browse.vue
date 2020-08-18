<template>
	<div class="vx-col w-full mb-base" v-if="can('browse-invoice')">

		<div class="centerx">
			<vs-row>
				<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
					<b class="text-left vx-col w-full">{{invoices.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse">
			<vs-table
				pagination
				search
				max-items="50"
				:data="invoices"
			>

				<template slot="thead">
					<vs-th>ID</vs-th>
					<vs-th>Amount</vs-th>
					<vs-th>Description</vs-th>
					<vs-th>Actions</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(invoice, index) in data">

						<vs-td :data="invoice.id">
							{{ invoice.id}}
						</vs-td>
						<vs-td :data="invoice.amount">
							<vs-chip :color="invoice.amount >= 0? 'success':'danger'">
								<h3 class="text-white">{{invoice.amount}}</h3>
							</vs-chip>
						</vs-td>
						<vs-td :data="invoice.description">
							{{ invoice.description}}
						</vs-td>
						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/2 mx-2" v-if="can('view-invoice')">
										<vs-button :id="`btn-view-${invoice.id}`" class="vs-con-loading__container" radius color="primary" type="border"
										           icon-pack="feather" icon="icon-eye"
										           @click="viewInvoice(invoice.id)"></vs-button>
									</div>
									<div class="w-1/2 mx-3" v-if="can('delete-invoice')">
										<vs-button :id="`btn-delete-${invoice.id}`" class="vs-con-loading__container" radius color="danger" type="border"
										           icon-pack="feather" icon="icon-trash"
										           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteInvoice(invoice)"></vs-button>
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
        name: "browse",
        data() {
            return {
                searchText: "",
                resultTime: 0,
                is_requesting: false,
                invoices: [],
            }
        },
        mounted() {
            this.getInvoices();
        },
        methods: {
            getInvoices() {
                console.log('id= ', this.$route.params.id)

                this.$vs.loading();

                this.$store.dispatch('invoice/getData', `?seller=${this.$route.params.id}`)
                    .then(response => {
                        this.invoices = response.data.data;

                        console.log(response)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(() => {
                    this.$vs.loading.close();
                })
            },

            viewInvoice(id){
                this.$router.push({name:'view-invoice',params:{'id':id}})
            },

            confirmDeleteInvoice(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteInvoice,
                    parameters: item
                });
            },
            deleteInvoice(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('invoice/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.invoices = this.invoices.filter(type => {
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
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(()=>{
                    this.is_requesting=false;
                    this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

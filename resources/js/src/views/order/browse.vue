<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-order')">

        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{orders.length}} results found in {{resultTime}}ms</b>
                </vs-col>
            </vs-row>
        </div>

        <vx-card ref="browse">
            <vs-table
                pagination
                search
                max-items="50"
                :data="orders"
            >

                <template slot="header"  v-if="can('create-order')">
                    <vs-button :to="{name: 'create-order'}" vs-w="3" color="primary" type="filled" icon-pack="feather"
                               icon="icon-plus">Add Order
                    </vs-button>
                </template>

                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Shipping method</vs-th>
                    <vs-th>Customer name</vs-th>
                    <vs-th>address</vs-th>
                    <vs-th>Phone number</vs-th>
                    <vs-th>Internal tracking</vs-th>
                    <vs-th>External tracking</vs-th>
                    <vs-th>Create date</vs-th>
                    <vs-th>Update date</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">

                    <vs-tr
                        :key="index"
                        v-for="(order, index) in data"
                        :state="order.status.name === 'pending' || order.status.name === 'printing' || order.status.name === 'ready for shipping'?'warning':
                                order.status.name === 'canceled before printing' || order.status.name === 'canceled after printing' || order.status.name === 'returned'?'danger':
                                order.status.name === 'shipped' || order.status.name === 'delivered'?'success':''"
                    >
                        <vs-td :data="order.id">
                            {{ order.id }}
                        </vs-td>

                        <vs-td :data="order.status.name" class="text-capitalize">
                            {{ order.status.name }}
                        </vs-td>


                        <vs-td :data="order.shipping_price.shipping_method.name" class="text-capitalize">
                            {{ order.shipping_price.shipping_method.name }}
                        </vs-td>


                        <vs-td :data="order.customer_name" class="text-capitalize">
                            {{ order.customer_name }}
                        </vs-td>


                        <vs-td :data="order.address" class="text-capitalize">
                            {{ order.address }}
                        </vs-td>


                        <vs-td :data="order.phone_number" class="text-capitalize">
                            {{ order.phone_number }}/ {{order.additional_number}}
                        </vs-td>

                        <vs-td :data="order.internal_tracking" class="text-capitalize">
                            {{ order.internal_tracking }}
                        </vs-td>


                        <vs-td :data="order.external_tracking" class="text-capitalize">
                            {{ order.external_tracking }}
                        </vs-td>


                        <vs-td :data="order.created_at" class="text-capitalize">
                            {{ order.created_at }}
                        </vs-td>


                        <vs-td :data="order.updated_at" class="text-capitalize">
                            {{ order.updated_at }}
                        </vs-td>


                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/4 mx-2">
                                        <vs-button
                                            v-if="can('view-order')"
                                            :id="`btn-view-${order.id}`" class="vs-con-loading__container" radius color="success" type="border"
                                           icon-pack="feather" icon="icon-eye"
                                           @click=viewOrder(order.id)></vs-button>
                                    </div>
                                    <div class="w-1/4 mx-2">
                                        <vs-button :id="`btn-edit-${order.id}`" class="vs-con-loading__container"
                                                   v-if="can('edit-order')"
                                                   radius color="warning" type="border"
                                                   icon-pack="feather" icon="icon-edit"
                                                   @click=editOrder(order.id)></vs-button>
                                    </div>
                                    <div class="w-1/4 mx-2"><!--v-if="can('edit-order')"-->
                                        <vs-button :id="`btn-return-${order.id}`" class="vs-con-loading__container"
                                                   radius color="primary" type="border"
                                                   icon-pack="feather" icon="icon-corner-left-down"
                                                   @click=returnOrder(order.id)></vs-button>
                                    </div>
                                    <div class="w-1/4 mx-3">
                                        <vs-button :id="`btn-delete-${order.id}`" class="vs-con-loading__container"
                                                   v-if="can('delete-order')"
                                                   radius color="danger" type="border"
                                                   icon-pack="feather" icon="icon-trash"
                                                   @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteOrder(order)"></vs-button>
                                    </div>
                                </div>
                            </vs-row>
                        </vs-td>

                        <template slot="expand">
                            <div>
                                Total Price: <span v-html="order.total_price"></span><br>
                                Total Price Info: <br><span v-html="order.total_price_info"></span>
                            </div>
                        </template>
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
                orders: [],
                is_requesting: false
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            }
        },
        mounted() {
            this.getOrders();
        },

        methods: {
            getOrders() {
                this.$vs.loading({container: this.$refs.browse.$el});
                let payload = this.payload
                if (this.$store.getters['auth/userData'].roles[0].name==='Seller'){
                    payload = '?seller='+this.$store.getters['auth/userData'].id
                }
                this.$store.dispatch('order/getData', payload)
                    .then(response => {
                        this.orders = response.data.data;
                        console.log(this.orders);
                        this.$vs.loading.close(this.$refs.browse.$el);
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.browse.$el);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
            },

            viewOrder(id) {
                this.$router.push({name: 'view-order', params: {'id': id}})
            },

            editOrder(id) {
                this.$router.push({name: 'edit-order', params: {'id': id}})
            },
            returnOrder(id) {
                this.$router.push({name: 'return-order', params: {'id': id}})
            },
            confirmDeleteOrder(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteOrder,
                    parameters: item
                });
            },

            deleteOrder(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('order/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.orders = this.orders.filter(type => {
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
            }
        }
    }
</script>

<style>
    .txt-hover:hover {
        cursor: pointer;
        color: black !important;
    }

</style>

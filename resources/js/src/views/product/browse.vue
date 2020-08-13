<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-product')">

        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{products.length}} results found in {{resultTime}}ms</b>
                </vs-col>
            </vs-row>
        </div>

        <vx-card ref="browse">
            <vs-table
                pagination
                search
                max-items="50"
                :data="products"
            >

                <template slot="header"  v-if="can('create-product')">
                    <vs-button :to="{name: 'create-product'}" vs-w="3" color="primary" type="filled" icon-pack="feather"
                               icon="icon-plus">Add Product
                    </vs-button>
                </template>

                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Image</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Base price</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(product, index) in data">
                        <vs-td :data="product.id">
                            {{ product.id }}
                        </vs-td>

                        <vs-td>
                            <img
                                v-if="product.image"
                                :src="product.image.url"
                                class="preview-large">
                        </vs-td>

                        <vs-td :data="product.name">
                            {{ product.name}}
                        </vs-td>

                        <vs-td :data="product.description">
                            {{ product.description}}
                        </vs-td>

                        <vs-td :data="product.base_price">
                            {{ product.base_price}}
                        </vs-td>

                        <vs-td :data="product.quantity">
                            {{ product.quantity}}
                        </vs-td>

                        <vs-td :data="product.created_at">
                            {{ product.created_at}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 mx-2"><!--v-if="can('view-product')"-->
                                        <vs-button
                                            v-if="can('view-product')"
                                            :id="`btn-view-${product.id}`" class="vs-con-loading__container" radius color="success" type="border"
                                           icon-pack="feather" icon="icon-eye"
                                           @click=viewProduct(product.id)></vs-button>
                                    </div>
                                    <div class="w-1/3 mx-2"><!--v-if="can('edit-product')"-->
                                        <vs-button :id="`btn-edit-${product.id}`" class="vs-con-loading__container"
                                                   v-if="can('edit-product')"
                                                   radius color="warning" type="border"
                                                   icon-pack="feather" icon="icon-edit"
                                                   @click=editProduct(product.id)></vs-button>
                                    </div>
                                    <div class="w-1/3 mx-3"><!-- v-if="can('delete-product')"-->
                                        <vs-button :id="`btn-delete-${product.id}`" class="vs-con-loading__container"
                                                   v-if="can('delete-product')"
                                                   radius color="danger" type="border"
                                                   icon-pack="feather" icon="icon-trash"
                                                   @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteProduct(product)"></vs-button>
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
                products: [],
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
            this.getProducts();


        },

        methods: {
            getProducts() {
                this.$vs.loading({container: this.$refs.browse.$el});
                let payload = this.payload
                if (this.$store.getters['auth/userData'].roles[0].name=='Seller'){
                    payload = '?seller='+this.$store.getters['auth/userData'].id
                }
                this.$store.dispatch('product/getData', payload)
                    .then(response => {
                        this.products = response.data.data;
                        this.$vs.loading.close(this.$refs.browse.$el);
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.browse.$el);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            viewProduct(id) {
                this.$router.push({name: 'view-product', params: {'id': id}})
            },

            editProduct(id) {
                this.$router.push({name: 'edit-product', params: {'id': id}})
            },
            confirmDeleteProduct(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteProduct,
                    parameters: item
                });
            },

            deleteProduct(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('product/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.products = this.products.filter(type => {
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

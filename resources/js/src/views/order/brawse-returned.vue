<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-order')">

        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{returns.length}} results found in {{resultTime}}ms</b>
                </vs-col>
            </vs-row>
        </div>

        <vx-card ref="browse">
            <vs-table
                pagination
                search
                max-items="50"
                :data="returns"
            >

    
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Image</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Base price</vs-th>
                    <vs-th>Quantity</vs-th>
                    <vs-th>Created At</vs-th>
                </template>
    
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(order, index) in data">
                        <vs-td :data="order.product.id">
                            {{ order.id }}
                        </vs-td>
            
                        <vs-td>
                            <img
                                v-if="order.design.images[0].url"
                                :src="order.design.images[0].url"
                                class="preview-large">
                        </vs-td>
            
                        <vs-td :data="order.product.name">
                            {{ order.product.name}}
                        </vs-td>
            
                        <vs-td :data="order.product.description">
                            {{ order.product.description}}
                        </vs-td>
            
                        <vs-td :data="order.product.base_price">
                            {{ order.product.base_price}}
                        </vs-td>
            
                        <vs-td :data="order.product.quantity">
                            {{ order.product.quantity}}
                        </vs-td>
            
                        <vs-td :data="order.created_at">
                            {{ order.created_at}}
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
                returns: [],
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
            this.getReturned();
        },

        methods: {
            getReturned() {
                this.$vs.loading();
                // let payload = this.payload
                // if (this.$store.getters['auth/userData'].roles[0].name==='Seller'){
                //     payload = '?seller='+this.$store.getters['auth/userData'].id
                // }
                
                    this.$store.dispatch('restoredItem/getData', this.payload)
                    .then(response => {
                        this.returns = response.data.data;
                        console.log(this.returns);
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(()=>{
                    this.$vs.loading.close();
                })
            },

            viewOrder(id) {
                this.$router.push({name: 'view-order', params: {'id': id}})
            },
        }
    }
</script>

<style>
    .txt-hover:hover {
        cursor: pointer;
        color: black !important;
    }

</style>

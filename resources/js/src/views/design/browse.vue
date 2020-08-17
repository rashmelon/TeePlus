<template>
    <div class="vx-col w-full mb-base" v-if="can('browse-design')">

        <div class="centerx">
            <vs-row>
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
                    <b class="text-left vx-col w-full">{{designs.length}} results found in {{resultTime}}ms</b>
                </vs-col>
            </vs-row>
        </div>

        <vx-card ref="browse">
            <vs-table
                pagination
                search
                max-items="50"
                :data="designs"
            >

                <template slot="header"  v-if="can('create-design')">
                    <vs-button :to="{name: 'create-design'}" vs-w="3" color="primary" type="filled" icon-pack="feather"
                               icon="icon-plus">Add Design
                    </vs-button>
                </template>

                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Image</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Created At</vs-th>
                    <vs-th>Action</vs-th>
                </template>

                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(design, index) in data">
                        <vs-td :data="design.id">
                            {{ design.id }}
                        </vs-td>

                        <vs-td>
                            <img
                                v-if="design.images"
                                :src="design.images[0].url"
                                class="preview-large">
                        </vs-td>

                        <vs-td :data="design.name">
                            {{ design.name}}
                        </vs-td>


                        <vs-td :data="design.created_at">
                            {{ design.created_at}}
                        </vs-td>

                        <vs-td>
                            <vs-row>
                                <div class="flex mb-4">
                                    <div class="w-1/3 mx-2">
                                        <vs-button
                                            v-if="can('view-design')"
                                            :id="`btn-view-${design.id}`" class="vs-con-loading__container" radius color="success" type="border"
                                           icon-pack="feather" icon="icon-eye"
                                           @click=viewDesign(design.id)></vs-button>
                                    </div>
                                    <div class="w-1/3 mx-2"><!--v-if="can('edit-design')"-->
                                        <vs-button :id="`btn-edit-${design.id}`" class="vs-con-loading__container"
                                                   v-if="can('edit-design')"
                                                   radius color="warning" type="border"
                                                   icon-pack="feather" icon="icon-edit"
                                                   @click=editDesign(design.id)></vs-button>
                                    </div>
                                    <div class="w-1/3 mx-3"><!-- v-if="can('delete-design')"-->
                                        <vs-button :id="`btn-delete-${design.id}`" class="vs-con-loading__container"
                                                   v-if="can('delete-design')"
                                                   radius color="danger" type="border"
                                                   icon-pack="feather" icon="icon-trash"
                                                   @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteDesign(design)"></vs-button>
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
                designs: [],
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
            this.getDesigns();
        },

        methods: {
            getDesigns() {
                this.$vs.loading({container: this.$refs.browse.$el});
                let payload = this.payload
                if (this.$store.getters['auth/userData'].roles[0].name=='Seller'){
                    payload = '?seller='+this.$store.getters['auth/userData'].id
                }
                this.$store.dispatch('design/getData', payload)
                    .then(response => {
                        this.designs = response.data.data;
                        console.log(this.designs.find(item=>item.id ==18));
                        this.$vs.loading.close(this.$refs.browse.$el);
                    })
                    .catch(error => {
                        this.$vs.loading.close(this.$refs.browse.$el);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
            },

            viewDesign(id) {
                this.$router.push({name: 'view-design', params: {'id': id}})
            },

            editDesign(id) {
                this.$router.push({name: 'edit-design', params: {'id': id}})
            },
            confirmDeleteDesign(item) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteDesign,
                    parameters: item
                });
            },

            deleteDesign(item) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('design/delete', item.id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.designs = this.designs.filter(type => {
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

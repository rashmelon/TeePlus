<template>
    <div class="show-single-category-compinations">
        <vx-card class="my-5" collapse-action title="Combinations">


            <vs-select
                label="Combinations"
                multiple
                placeholder="Combinations"
                v-model="productCombinations"
                class="w-full my-3"
            >
                <vs-select-item
                    :key="index"
                    :text='item.combination'
                    :value="item.id"
                    v-for="(item,index) in categoryCombination"/>
            </vs-select>


            <div class="text-center mt-4">
                <vs-button color="primary" type="filled" @click="updateCombination">Edit Combination</vs-button>
            </div>
        </vx-card>
    </div>
</template>

<script>

    export default {
        name: "ShowSingle",
        components: {},
        data() {
            return {
                categoryCombination: [],
                is_requesting: false
            }
        },
        props: {
            prodId: {
                required: false,
                default: ''
            },
            catId: {
                required: false,
                default: ''
            },
            productCombinations: {
                required: true
            }
        },

        mounted() {
            this.getCategoryCombinations();
        },
        methods: {
            getCategoryCombinations() {
                console.log('category Id: ' + this.catId)
                this.$store.dispatch('combination/getData', `?category=${this.catId}`)
                    .then(response => {
                        this.categoryCombination = response.data.data;
                        console.log('category Combinations: ', this.categoryCombination)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },


            updateCombination(item) {
                this.$vs.notify({
                    title: 'Error',
                    text: 'Not handeled yet',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                });

                /*this.is_requesting=true;
                this.$vs.loading({container: `#btn-edit-${item.id}`, color: 'primary', scale: 0.45});
                let form_data = new FormData();


                this.$store.dispatch('combination/update', {id: item.id, data: form_data})
                  .then(response => {
                    this.is_requesting=false;
                    this.$vs.loading.close(`#btn-edit-${item.id} > .con-vs-loading`);
                    this.$vs.notify({
                      title: 'Success',
                      text: response.data.message,
                      iconPack: 'feather',
                      icon: 'icon-check',
                      color: 'success'
                    });
                  })
                  .catch(error => {
                    this.is_requesting=false;
                    this.$vs.loading.close(`#btn-edit-${item.id} > .con-vs-loading`);
                    this.$vs.notify({
                      title: 'Error',
                      text: error.response.data.errors[0],
                      iconPack: 'feather',
                      icon: 'icon-alert-circle',
                      color: 'danger'
                    });
                  });*/
            },
        }

    }
</script>

<style lang="scss" scoped>

</style>

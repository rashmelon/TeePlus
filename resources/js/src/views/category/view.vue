<template>
    <div>
        <div v-if="can('view-category')" class="w-full mb-base">
            <div ref="loadingContainer">

                <vx-card class="my-5" collapse-action>
                    <div class="vx-row">
                        <div class="vx-col md:w-6/6 w-full mb-3">
                            <div class="image-preview" style="display: inline-flex;">
                                <img :src="uploadedImage?uploadedImage:'/images/no-image-found.png'" alt="photo" class="preview-large">
                            </div>
                        </div>
                        <div class="vx-col sm:w-2/2 w-full mb-3">
                            <h3>{{this.form.name}}</h3>
                        </div>
                        <div class="vx-col md:w-1/1 w-full mt-3">
                            <p>{{this.form.description}}</p>
                        </div>
                    </div>
                </vx-card>

                <div class="show-single-category-compinations">
                    <vx-card class="my-5" collapse-action title="Category Combinations">
                        <vs-table
                          :data="combinations"
                        >
                            <template slot="thead">
                                <vs-th>Combination</vs-th>
                                <vs-th>Price</vs-th>
                            </template>

                            <template slot-scope="{data}">
                                <vs-tr :key="index" v-for="(combination, index) in data">

                                    <vs-td>
                                        {{combination.combination}}
                                    </vs-td>


                                    <vs-td>
                                        {{combination.price}}
                                    </vs-td>
                                </vs-tr>
                            </template>
                        </vs-table>

                    </vx-card>
                </div>

                <div class="show-single-criteria-compinations">
                    <vx-card class="my-5" collapse-action title="Category Printing Criteria">
                        <vs-table
                          :data="criterias"
                        >

                            <template slot="thead">
                                <vs-th>Criteria</vs-th>
                                <vs-th>Price</vs-th>
                            </template>

                            <template slot-scope="{data}">
                                <vs-tr :key="index" v-for="(criteria, index) in data">

                                    <vs-td>
                                        {{criteria.criteria}}
                                    </vs-td>


                                    <vs-td>
                                        {{criteria.price}}
                                    </vs-td>

                                </vs-tr>
                            </template>
                        </vs-table>
                    </vx-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShowCombinations from '../combination/ShowSingle'
    import ShowCriterias from '../criteria/ShowSingle'

    export default {
        name: "edit",
        data: function () {
            return {
                form: {},
                uploadedImage: null,
                is_requesting: false,
                combinations: [],
                criterias: [],

            }
        },
        components: {
            ShowCombinations,
            ShowCriterias
        },
        mounted(){
            this.getCategory()
        },
        methods: {
            getCategory(){
                this.$vs.loading();
                this.$store.dispatch('category/view', this.$route.params.id)
                  .then(response => {
                      this.form = response.data.data;

                      // preview used image
                      if (this.form.image){
                          this.uploadedImage = this.form.image.url
                      }

                      this.getCombinations();
                      this.getCriterias();

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
                  }).then(()=>{
                    this.$vs.loading.close()
                })

            },
            getCombinations(){
                this.$store.dispatch('combination/getData', `?category=${this.$route.params.id}`)
                  .then(response => {
                      this.combinations = response.data.data;
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
            getCriterias(){
                this.$store.dispatch('criteria/getData', `?category=${this.$route.params.id}`)
                  .then(response => {
                      this.criterias = response.data.data;
                  })
                  .catch(error => {
                      this.$vs.notify({
                          title: 'Error',
                          text: error.response.data.error,
                          iconPack: 'feather',
                          icon: 'icon-alert-circle',
                          color: 'danger'
                      });
                  });
            },
        }
    }
</script>

<style>
    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding-right: 20px;
        top: 6px;
        position: relative;
    }

    #img-upload {
        display: none;
    }


    .vs-input-number {
        width: fit-content;
    }

    .attribute-actions {
        align-items: baseline;
        display: flex;
    }
</style>

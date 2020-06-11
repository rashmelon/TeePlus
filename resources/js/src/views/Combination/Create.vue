<template>
	<vx-card collapse-action title="Add new price combinations">
		<div class="vx-row">
			<div class="vx-col md:w-1/1 w-full mt-3">
				<vs-button
					@click="addAttribute"
					class="mb-4"
					color="primary"
					icon="icon-plus"
					icon-pack="feather"
					size="small"
					type="filled"
				>Add Combination
				</vs-button>


				<transition-group mode="out-in" name="slide-down">
					<div :key="index" class="vx-row" v-for="(attr,index) in priceCombinations">
						<div class="vx-col md:w-8/12 w-full mb-3">
							<vs-input
								hidden
								class="w-full"
								name="category_id"
								v-model="catId"
							/>
							<vs-input
								:name="'combination-'+index"
								class="w-full"
								v-model="attr.combination"
								v-validate="'required'"
							/>
							<span class="text-danger text-sm"
							      v-show="errors.has('combination-'+index)">{{ errors.first('combination-'+index)}}</span>

						</div>

						<div class="vx-col md:w-2/12 w-full mb-3">
							<vs-input
								:name="'price-'+index"
								class="w-full"
								type="number"
								v-model="attr.price"
								v-validate="'required'"
							/>
							<span class="text-danger text-sm" v-show="errors.has('price-'+index)">{{errors.first('price-'+index)}}</span>
						</div>

						<div class="vx-col md:w-2/12 w-full mb-3">
							<div class="attribute-actions">
								<vs-button
									@click="removeAttribute(index)"
									class="ml-2"
									color="danger"
									icon="icon-trash"
									icon-pack="feather"
									radius
									type="border"
								></vs-button>

							</div>
						</div>
					</div>
				</transition-group>


				<div>
					<vs-button
						@click="savePriceCombinations"
						class="mb-4"
						color="primary"
						icon="icon-save"
						icon-pack="feather"
						size="small"
						type="filled"
						v-if="priceCombinations.length"
					>Save
					</vs-button>
				</div>
			</div>
		</div>
	</vx-card>
</template>

<script>
  export default {
    name: "CreateCombination",
    props: [
      'catId'
    ],
    data() {
      return {
        priceCombinations: [],
      }
    },
    methods: {
      addAttribute() {
        this.priceCombinations.push({
          combination: '',
          price: ''
        })
      },
      removeAttribute(index) {
        this.priceCombinations.splice(index, 1);
      },
      addPrintingCriteria() {
        this.printCriterias.push({
          criteria: '',
          price: ''
        })
      },
      removePrintingCriteria(index) {
        this.printCriterias.splice(index, 1);
      },
      savePriceCombinations() {
        this.$validator.validateAll().then(result => {
          if (result) {
            // if form have no errors
            this.is_requesting = true;

            for (let i in this.priceCombinations) {
              let form_data = new FormData();

              form_data.append('combination', this.priceCombinations[i].combination);
              form_data.append('price', this.priceCombinations[i].price);
              form_data.append('category_id', this.catId);

              this.$store.dispatch('combination/create', form_data)
                .then(response => {
                  this.$vs.notify({
                    title: 'Success',
                    text: response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                  });
                  this.is_requesting = false;

                })
                .catch(error => {
                  console.log(error);
                  this.$vs.notify({
                    title: 'Error',
                    text: error.response.data.errors[0],
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger'
                  });
                  this.is_requesting = false;
                });

            }


            this.priceCombinations=[]

          } else {
            this.$vs.notify({
              title: 'Error',
              text: 'Fix form validation errors',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            })
          }
        })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>
<template>
	<vx-card collapse-action  title="Add new print criteria" class="mt-5">
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
				>Add print criteria
				</vs-button>


				<transition-group mode="out-in" name="slide-down">
					<div :key="index+1" class="vx-row" v-for="(attr,index) in printCriterias">
						<div class="vx-col md:w-8/12 w-full mb-3">
							<vs-input
								hidden
								class="w-full"
								name="category_id"
								v-model="catId"
							/>
							<vs-input
								:name="'criteria-'+index"
								class="w-full"
								v-model="attr.criteria"
								v-validate="'required'"
							/>
							<span class="text-danger text-sm"
							      v-show="errors.has('criteria-'+index)">{{ errors.first('criteria-'+index)}}</span>

						</div>

						<div class="vx-col md:w-2/12 w-full mb-3">
							<vs-input
								:name="'price-'+index"
								class="w-full"
								type="number"
								v-model="attr.price"
								v-validate="'required|min_value:0'"
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
						@click="savePrintCriteria"
						class="mb-4"
						color="primary"
						icon="icon-save"
						icon-pack="feather"
						size="small"
						type="filled"
						v-if="printCriterias.length"
					>Save
					</vs-button>
				</div>
			</div>
		</div>
	</vx-card>
</template>

<script>
  export default {
    name: "CreatePrintCriteria",
    props: [
      'catId'
    ],
    data() {
      return {
        printCriterias: [],
      }
    },
    methods: {
      addAttribute() {
        this.printCriterias.push({
          criteria: '',
          price: ''
        })

      },
      removeAttribute(index) {
        this.printCriterias.splice(index, 1);
      },
      savePrintCriteria() {
        this.$validator.validateAll().then(result => {
          if (result) {
            // if form have no errors
            this.is_requesting = true;

            for (let i in this.printCriterias) {
              let form_data = new FormData();

              form_data.append('criteria', this.printCriterias[i].criteria);
              form_data.append('price', this.printCriterias[i].price);
              form_data.append('category_id', this.catId);

              this.$store.dispatch('criteria/create', form_data)
                .then(response => {
                  this.$vs.notify({
                    title: 'Success',
                    text: response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                  });
                  this.is_requesting = false;


                  this.$emit('addValue',response.data.data)
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


            this.printCriterias=[]

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


<template>
	<div>
		<div class="vx-col w-full mb-base" v-if="can('create-category')">
			<div ref="create" title="Create Category">

				<form-wizard :subtitle="null" :title="null" @on-complete="create" color="rgb(var(--vs-primary))" finishButtonText="Submit">
					<tab-content class="mb-5" title="Category data">
						<vx-card class="vx-row">
							<div class="vx-col md:w-6/6 w-full mb-3">
								<div class="image-preview" style="display: inline-flex;">
									<img :src="uploadedImage?uploadedImage:'/images/no-image-found.png'" alt="photo" class="preview-large">
								</div>
								<div class="d-block mt-3">
									<input @change="previewImage" accept="image/*" id="img-upload" type="file">
									<vs-button icon="icon-upload" icon-pack="feather" onclick="document.getElementById('img-upload').click()" size="small"
									           type="gradient">Upload Photo
									</vs-button>
								</div>
							</div>
							<div class="vx-col sm:w-2/2 w-full mb-3">
								<vs-input
									class="w-full"
									label="Category Name"
									name="name"
									v-model="form.name"
									v-validate="'required'"
								/>
								<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
							</div>

							<div class="vx-col md:w-1/1 w-full mt-3">
								<vs-textarea
									class="mb-0"
									label="Description"
									name="description"
									v-model="form.description"
									v-validate="'required'"
								/>
								<span class="text-danger text-sm" v-show="errors.has('description')">{{ errors.first('description')
                                    }}</span>

							</div>

						</vx-card>
					</tab-content>

					<tab-content class="mb-5" title="Combinations">
						<vx-card class="vx-row">
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
									<div :key="1">
										<div class="vx-row" v-for="(attr,index) in form.priceCombinations">
											<div class="vx-col md:w-8/12 w-full mb-3">
												<vs-input
													:name="'combination-'+index"
													class="w-full"
													label="Combination"
													v-model="attr.combination"
													v-validate="'required'"
												/>
												<span class="text-danger text-sm"
												      v-show="errors.has('combination-'+index)">{{ errors.first('combination-'+index)}}</span>


											</div>

											<div class="vx-col md:w-2/12 w-full mb-3">
												<vs-input
													:name="'price-'+index" class="w-full" label="Price"
													type="number"
													v-model="attr.price"
													v-validate="'required'"
												/>
												<span class="text-danger text-sm" v-show="errors.has('price-'+index)">{{errors.first('price-'+index)}}</span>
											</div>

											<div class="vx-col md:w-2/12 w-full mb-3">
												<div class="attribute-actions mt-5">
													<vs-button
														@click="removeAttribute(index)"
														class="ml-2"
														color="danger"
														icon="icon-minus"
														icon-pack="feather"
														radius
														type="border"
														v-if="index || ( !index && index> 1)"
													></vs-button>

												</div>
											</div>
										</div>
									</div>
								</transition-group>
							</div>
						</vx-card>
					</tab-content>

					<tab-content class="mb-5" title="Printing Criteria">
						<vx-card class="vx-row">
							<div class="vx-col md:w-1/1 w-full mt-3">

								<vs-button
									@click="addPrintingCriteria"
									class="mb-4"
									color="primary"
									icon="icon-plus"
									icon-pack="feather"
									size="small"
									type="filled"
								>Add Printing Criteria
								</vs-button>

								<transition-group mode="out-in" name="slide-down">
									<div :key="2">
										<div class="vx-row" v-for="(criteria,index) in form.printCriterias">
											<div class="vx-col md:w-8/12 w-full mb-3">
												<vs-input :name="'criteria-'+index" class="w-full" label="Criteria"
												          v-model="criteria.criteria"
												          v-validate="'required'"
												/>
												<span class="text-danger text-sm" v-show="errors.has('criteria-'+index)">{{errors.first('criteria-'+index)}}</span>
											</div>

											<div class="vx-col md:w-2/12 w-full mb-3">
												<vs-input :name="'criteria-price-'+index" class="w-full" label="Price" type="number"
												          v-model="criteria.price"W
												          v-validate="'required'"
												/>
												<span class="text-danger text-sm"
												      v-show="errors.has('criteria-price-'+index)">{{errors.first('criteria-price-'+index)
													}}</span>

											</div>

											<div class="vx-col md:w-2/12 w-full mb-3">
												<div class="attribute-actions mt-5">
													<vs-button
														@click="removePrintingCriteria(index)"
														class="ml-2"
														color="danger"
														icon="icon-minus"
														icon-pack="feather"
														radius
														type="border"
														v-if="index || ( !index && index> 1)"
													></vs-button>

												</div>
											</div>
										</div>
									</div>
								</transition-group>
							</div>
						</vx-card>
					</tab-content>
				</form-wizard>

			</div>
		</div>
	</div>
</template>

<script>
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'

  export default {
    name: "create",
    data: function () {
      return {
        form: {
          name: '',
          description: '',
          priceCombinations: [],
          printCriterias: [],
          image: null
        },
        uploadedImage: null,
        is_requesting: false
      }
    },
    components: {
      FormWizard,
      TabContent
    },
    methods: {
      addAttribute() {
        this.form.priceCombinations.push({
          combination: '',
          price: ''
        })
      },
      removeAttribute(index) {
        this.form.priceCombinations.splice(index, 1);
      },
      addPrintingCriteria() {
        this.form.printCriterias.push({
          criteria: '',
          price: ''
        })
      },
      removePrintingCriteria(index) {
        this.form.printCriterias.splice(index, 1);
      },
      previewImage: function (event) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
          // create a new FileReader to read this image and convert to base64 format
          var reader = new FileReader();
          // Define a callback function to run, when FileReader finishes its job
          reader.onload = (e) => {
            // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
            // Read image as base64 and set to imageData
            this.uploadedImage = e.target.result;
            this.form.image = input.files[0];
          };
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      },

      create() {
        this.$validator.validateAll().then(result => {
          if (result) {
            // if form have no errors
            this.is_requesting = true;

            let form_data = new FormData();

            for (let key in this.form) {
              if (key === 'priceCombinations' || key === 'printCriterias') {
                form_data.append(key, JSON.stringify(this.form[key]));
              } else {
                form_data.append(key, this.form[key]);
              }
            }
            this.$store.dispatch('category/create', form_data)
              .then(response => {
                this.$vs.notify({
                  title: 'Success',
                  text: response.data.message,
                  iconPack: 'feather',
                  icon: 'icon-check',
                  color: 'success'
                });
                this.$router.push({name: 'category'});
                this.is_requesting = false;

              })
              .catch(error => {
                console.log(error);
                this.$vs.notify({
                  title: 'Error',
                  text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
                  iconPack: 'feather',
                  icon: 'icon-alert-circle',
                  color: 'danger'
                });
                this.is_requesting = false;
              });
          } else {
            this.$vs.notify({
              title: 'Error',
              text: 'Fix form validation errors',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          }

        })

      },

    }
  }
</script>

<style>
	.image-preview {
		font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
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

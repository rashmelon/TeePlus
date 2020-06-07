<template>
	<div>
		<div class=" w-full mb-base" v-if="can('create-employee')">
			<div ref="create" title="Create Category">

				<form-wizard :subtitle="null" :title="null" @on-complete="create" color="rgb(var(--vs-primary))" finishButtonText="Submit">
					<tab-content class="mb-5" title="Product data">
						<vx-card>
							<div class="vx-row">
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
								<div class="vx-col md:w-4/12 mt-1">
									<vs-select
										label="Category"
										v-model="form.category"
										@change="resetCombinationAndPrinting"
										class="w-full"
									>
										<vs-select-item :key="category.id" :text="category.name" :value="category" v-for="category in categories"/>
									</vs-select>
								</div>
								<div class="vx-col md:w-6/12 mb-3">
									<vs-input class="w-full" label="Product Name" v-model="form.name"/>
								</div>
								<div class="vx-col md:w-2/12 mb-3">
									<vs-input type="number" class="w-full" label="Product Base Price" v-model="form.basePrice"/>
								</div>
								<div class="vx-col md:w-6/6 w-full mt-3">
								<vs-textarea label="Description" v-model="form.description"/>
							</div>
							</div>
						</vx-card>
					</tab-content>

					<tab-content class="mb-5" title="Product Attributes">
						<div class="vx-row">
							<div class="vx-col md:w-1/2 w-full">
								<vx-card class="vx-row">
									<div class="vx-col md:w-1/1 w-full mt-3">
										<vs-select
											label="Combinations"
											multiple
											placeholder="Combinations"
											v-model="form.combinations"
											class="w-full"
										>
											<vs-select-item
												:key="index"
												:text='item.combination'
												:value="item"
												v-for="(item,index) in form.category.combinations"/>
										</vs-select>

										<vs-list>
											<vs-list-header icon="supervisor_account" title="Selected Combinations"></vs-list-header>
											<transition-group mode="out-in" name="slide-down">
												<vs-list-item
													v-for="combination in form.combinations"
													:key="combination.id"
													icon="check" :title="combination.combination" :subtitle="combination.price"></vs-list-item>
											</transition-group>
										</vs-list>
									</div>
								</vx-card>
							</div>
							<div class="vx-col md:w-1/2 w-full">
								<vx-card class="vx-row">
									<div class="vx-col md:w-1/1 w-full mt-3">

										<vs-select
											label="Printing Criteria"
											multiple
											placeholder="Printing Criteria"
											v-model="form.printingCriteria"
											class="w-full"
										>
											<vs-select-item
												:key="index"
												:text='item.criteria'
												:value="item"
												v-for="(item,index) in form.category.printingCriteria"/>
										</vs-select>

										<vs-list>
											<vs-list-header icon="supervisor_account" title="Selected Printing Criteria"></vs-list-header>
											<transition-group mode="out-in" name="slide-down">
												<vs-list-item
													v-for="item in form.printingCriteria"
													:key="item.id"
													icon="check" :title="item.criteria" :subtitle="item.price"></vs-list-item>

											</transition-group>
										</vs-list>
									</div>
								</vx-card>
							</div>
							</div>
					</tab-content>
				</form-wizard>

			</div>
		</div>
	</div>
</template>

<script>
	import './../../filters/filters'
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'
  import {uuid} from '../../utils'

  export default {
    name: "create",
    mounted() {

    },
    computed: {
      validateForm() {
        return !this.errors.any()
          && this.form.name !== ''
      },
      categories() {
        return [
          {
            id: 1000,
            name: 'T-shirt',
            combinations: [
              {
                id: uuid(),
                combination: 'Combination 1',
                price: '150'
              },
              {
                id: uuid(),
                combination: 'Combination 2',
                price: '100'
              },
              {
                id: uuid(),
                combination: 'Combination 3',
                price: '120'
              },
            ],
            printingCriteria: [
              {
                id: uuid(),
                criteria: 'B/W',
                price: '15'
              },
              {
                id: uuid(),
                criteria: 'Color',
                price: '30'
              },
            ]
          },
          {
            id: 1001,
            name: 'Hoodie',
            combinations: [
              {
                id: uuid(),
                combination: 'Combination 8',
                price: '150'
              },
              {
                id: uuid(),
                combination: 'Combination 7',
                price: '100'
              },
              {
                id: uuid(),
                combination: 'Combination 5',
                price: '120'
              },
            ],
            printingCriteria: [
              {
                id: uuid(),
                criteria: 'B/W',
                price: '15'
              },
              {
                id: uuid(),
                criteria: 'Color',
                price: '30'
              },
            ]
          },
          {
            id: 1002,
            name: 'Mug',
            combinations: [
              {
                id: uuid(),
                combination: 'Magic',
                price: '50'
              },
              {
                id: uuid(),
                combination: 'Normal',
                price: '25'
              },
            ],
            printingCriteria: [
              {
                id: uuid(),
                criteria: 'B/W',
                price: '15'
              },
              {
                id: uuid(),
                criteria: 'Color',
                price: '30'
              },
            ]
          },
          {
            id: 1003,
            name: 'Mouse Pad',
            combinations: [
              {
                id: uuid(),
                combination: '15*30',
                price: '50'
              },
              {
                id: uuid(),
                combination: '30*50',
                price: '100'
              },
            ],
            printingCriteria: [
              {
                id: uuid(),
                criteria: 'B/W',
                price: '15'
              },
              {
                id: uuid(),
                criteria: 'Color',
                price: '30'
              },
            ]
          },
        ]
      }
    },
    data: function () {
      return {
        form: {
          name: '',
          description: '',
          category: '',
          basePrice: 0,
          combinations: [],
          printingCriteria: []
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
      resetCombinationAndPrinting(){

        this.form.combinations=[]
	      this.form.printingCriteria=[]
      },
      uploadImages(e) {
        let selectedImages = e.target.files;
        if (!selectedImages.length) {
          return false;
        }
        this.form.images = [];
        for (let i = 0; i < selectedImages.length; i++) {
          this.form.images.push(selectedImages[i]);
        }
      },

      create() {
        console.log(this.form)
        this.$vs.notify({
          title: 'Error',
          text: 'not yet handled',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        });

        /*this.is_requesting=true;
				let form_data = new FormData();

				for (let key in this.form ) {
						if ((key === 'images') && this.form.hasOwnProperty(key)){
								for (let i=0; i<this.form[key].length; i++){
										form_data.append(key+'[]', this.form[key][i]);
								}
						}
						else {
								form_data.append(key, this.form[key]);
						}
				}
				*/

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
            this.form.image = input.files;
          };
          // Start the reader job - read file as a data url (base64 format)
          reader.readAsDataURL(input.files[0]);
        }
      }
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

	img.preview {
		width: 55px;
		height: 55px;
		border-radius: 50%;
		background-color: white;
		border: 1px solid #DDD;
		padding: 5px;
	}

	.vs-input-number {
		width: fit-content;
	}

	.attribute-actions {
		align-items: baseline;
		display: flex;
	}
</style>

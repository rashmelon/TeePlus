<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="create" title="Edit design">
				
				<vx-card>
					<div class="vx-row">
						<div class="vx-col md:w-12/12 w-full mb-3">
							<div class="image-preview" >
								<div class="vx-row">
									<img
										:src="image.url"
										class="preview-large img-fluid vx-col md:w-3/12 w-full mb-2 px-2"
										v-for="image in form.images"
										v-if="uploadedImages.length === 0"
									>
									<img
										:src="image.url"
										class="preview-large img-fluid vx-col md:w-3/12 w-full mb-2 px-2"
										v-for="image in uploadedImages"
										v-if="uploadedImages"
									>
								</div>
							</div>
							<div class="d-block mt-3">
								<input @change="uploadImages" class="form-control d-none" id="img-upload" multiple type="file">
								<vs-button icon="icon-upload" icon-pack="feather" onclick="document.getElementById('img-upload').click()" size="small"
								           type="gradient">Upload Photos
								</vs-button>
							</div>
						</div>
						
						<div class="vx-col md:w-12/12 w-full mb-3">
							<vs-input
								class="w-full"
								label="Name"
								name="name"
								v-model="form.name"
								v-validate="'required'"/>
							<span class="text-danger text-sm" v-show="errors.has('name')">{{ errors.first('name') }}</span>
						</div>
						
						
						
						<div class="vx-col md:w-12/12 w-full">
							<vx-card>
								<DesignPrintPrice :designId="$route.params.id"/>
								
<!--
								<CreateDesignPrintPrice ref="createDesignPrice" :designId="$route.params.id" @addnew="addnew"/>
-->
							</vx-card>
						</div>
					</div>
				
				</vx-card>
			
			
			</div>
		</div>
	</div>
</template>

<script>
	
	import DesignPrintPrice from './../design-print-price/edit'
	import CreateDesignPrintPrice from './../design-print-price/create'
    export default {
        name: "edit",
	    components:{
            DesignPrintPrice,
            CreateDesignPrintPrice
        },
        mounted() {
            this.getDesign();
        },
        computed: {
            validateForm() {
                return !this.errors.any()
            },
        },
        data: function () {
            return {
                form: {
                    name: '',
                    designPrintPrice: [],
                },
                uploadedImages: [],
                is_requesting: false
            }
        },
        methods: {
            addnew(item){
                console.log(item);
                this.is_requesting = true;
                this.$store.dispatch('designPrintPrice/create', item)
                    .then(response => {
	                    this.is_requesting = false;
                        this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});})
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
                
            },
	        
	        
            getDesign() {
                this.$store.dispatch('design/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
            },
            update() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;

                        // create new object for sending object without extra data

                        let form_data = new FormData();

                        for (let key in this.form) {
                            if ((key === 'images') && this.form.hasOwnProperty(key)) {
                                for (let i = 0; i < this.form[key].length; i++) {
                                    form_data.append(key + '[]', this.form[key][i]);
                                }
                            } else {
                                form_data.append(key, this.form[key]);
                            }
                        }

                        this.$store.dispatch('design/update', {id: this.$route.params.id, data: form_data})
                            .then(response => {
                                this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});
                                this.$router.push({name: 'design'});
                                this.is_requesting = false;
                            })
                            .catch(error => {console.log(error);this.$vs.notify({title: 'Error', text: error.response.data, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});this.is_requesting = false;});
                    } else { this.$vs.notify({title: 'Error', text: 'Fix form validation errors', iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});}

                })


            },


            uploadImages(e) {
                this.uploadedImages = [];
                let selectedImages = e.target.files;
                if (!selectedImages.length) {
                    return false;
                }
                this.form.images = [];
                for (let i = 0; i < selectedImages.length; i++) {
                    this.form.images.push(selectedImages[i]);
                    
                    this.uploadedImages.push({url: URL.createObjectURL(selectedImages[i])});
                }
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

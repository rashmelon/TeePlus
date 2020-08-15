<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="view" title="View design">
				
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
						
						
						<div class="vx-col md:w-12/12 w-full" v-if="can('browse-design-price')">
							<vx-card>
								<DesignPrintPrice :designId="$route.params.id"/>

							</vx-card>
						</div>
					</div>
				
				</vx-card>
			
			
			</div>
		</div>
	</div>
</template>

<script>
	import DesignPrintPrice from './../design-print-price/view'
    export default {
        name: "edit",
	    components:{
            DesignPrintPrice
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
            getDesign() {
                this.$store.dispatch('design/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
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

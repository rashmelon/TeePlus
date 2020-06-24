<template>
	<div>
		<div class=" w-full mb-base text-center">
			<div ref="edit" title="Edit Product">

				<vx-card>
					<div class="vx-row">
						<div class="vx-col md:w-6/6 w-full mb-3">
							<div class="image-preview" style="display: inline-flex;">
								<img :src="uploadedImage?uploadedImage:'/images/no-image-found.png'" alt="photo" class="preview-large">
							</div>
						</div>
						<div class="vx-col w-12/12 w-full  mt-1">
							<h2>{{this.form.name}} - <small>({{this.form.category}})</small></h2>
						</div>
						<div class="vx-col w-12/12 w-full  mb-3">
							<h5 v-if="form.category_id"></h5>
						</div>
						<div class="vx-col w-12/12 w-full  mb-3">
							<h5>{{this.form.base_price}}</h5>
						</div>
						<div class="vx-col w-6/6 w-full mt-3">
							<h5>{{this.form.description}}</h5>
						</div>
					</div>

					<h2 class="mt-5 mb-2">Combinations</h2>
					<h5 v-for="item in form.priceCombinations">{{item.combination}}</h5>

				</vx-card>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "edit",
        mounted() {
            this.getProduct()
        },
        data: function () {
            return {
                combinations: [],
                form: {},
                uploadedImage: null,
                is_requesting: false
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {

            getCategory(id) {
                this.$store.dispatch('category/view', id)
                    .then(response => {


                        this.$set(this.form, 'category', response.data.data.name)
                    })
                    .catch(error => {
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    })
            },

            getProduct() {
                this.$store.dispatch('product/view', this.$route.params.id)
                    .then(response => {
                        this.form = response.data.data;

                        this.getCategory(this.form.category_id);

                        // preview used image
                        if (this.form.image) {
                            this.uploadedImage = this.form.image.url;
                        }

                    })
                    .catch(error => {
                        console.log(error.response);

                        /*if (error.response.headers.status === 403){
                            console.log('redirect!')
                        }*/
                        console.log(error);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
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

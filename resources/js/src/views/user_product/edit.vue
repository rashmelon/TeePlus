<template>
	<div class="vx-col w-full mb-base" v-if="can('edit-seller-product')">

		<div class="centerx">
			<vs-row>
				<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
					<b class="text-left vx-col w-full">{{products.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse">
			<vs-table
				pagination
				search
				max-items="50"
				:data="products"
			>

				<template slot="thead">
					<vs-th>Assign</vs-th>
					<vs-th>Image</vs-th>
					<vs-th>Name</vs-th>
					<vs-th>Description</vs-th>
					<vs-th>Base price</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :state="productsToSell.includes(product.id)?'success':''" :key="index" v-for="(product, index) in data">
						<vs-td :data="product.id">
							<vs-checkbox v-model="productsToSell" :vs-value="product.id"></vs-checkbox>
						</vs-td>

						<vs-td>
							<img
								v-if="product.image"
								:src="product.image.url"
								class="preview-large">
						</vs-td>

						<vs-td :data="product.name">
							{{ product.name}}
						</vs-td>

						<vs-td :data="product.description">
							{{ product.description}}
						</vs-td>

						<vs-td :data="product.base_price">
							{{ product.base_price}}
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>


			<div class="text-center mt-4">
				<vs-button @click="update" color="primary" type="filled">Update</vs-button>
			</div>

		</vx-card>
	</div>

</template>

<script>
    export default {
        name: "edit",
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        data() {
            return {
                searchText: "",
                resultTime: 0,
                is_requesting: false,
                products:[],
	            productsToSell:[]
            }
        },
	    mounted() {
            this.getProducts()
		    this.getUserProducts()
        },
	    methods:{
            getProducts() {
                this.$store.dispatch('product/getData', this.payload)
                    .then(response => {
                        this.products = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },

            getUserProducts(){
                this.$store.dispatch('product/getData', `?seller=${this.$route.params.id}`)
                    .then(response => {
                        this.productsToSell = response.data.data;

                        for (let i = 0; i < this.productsToSell.length; i++) {
                            this.productsToSell[i] = this.productsToSell[i].id
                        }

                        console.log(this.productsToSell)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },

            update(){


                this.$store.dispatch('userProduct/update', {id: this.$route.params.id,data:{'productsToSell':JSON.stringify(this.productsToSell)}})
                    .then(response => {
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                        this.$router.push({name: 'user'});
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            }
	    }

    }
</script>

<style lang="scss" scoped>

</style>

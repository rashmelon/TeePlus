<template>
	<div class="vx-col w-full mb-base" v-if="can('view-product')||$store.getters['auth/userData'].id===$route.params.id">

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
					<vs-th>Image</vs-th>
					<vs-th>Name</vs-th>
					<vs-th>Description</vs-th>
					<vs-th>Base price</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(product, index) in data">

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
	            products:[]
            }
        },
	    mounted() {
		    console.log(this.$store.getters['auth/userData'].id)
            this.getUserProducts()

        },
	    methods:{

            getUserProducts(){
                this.$store.dispatch('product/getData', `?seller=${this.$store.getters['auth/userData'].id}`)
                    .then(response => {
                        this.products = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },
	    }
    }
</script>

<style lang="scss" scoped>

</style>

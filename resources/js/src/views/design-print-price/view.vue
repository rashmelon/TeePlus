<template>
	<div class="edit-design-print-price">
		
		<vs-list>
			<vs-list-item
				v-if="designPrintPrice.length"
				:key="price.id"
				:title="price.print_criteria.criteria"
				icon="check"
				v-for="price in designPrintPrice">
				
				<vs-input
					class="w-full"
					label="Price"
					type="number"
					v-model="price.price"
				/>
			
			</vs-list-item>
		</vs-list>
		
	</div>
</template>

<script>
    export default {
        name: "show",
        data() {
            return {
                designPrintPrice: []
            }
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
            designId: {
                required: true
            }
        },
        mounted() {
            this.getDesignPricePrice();
        },
        methods: {
            getDesignPricePrice() {
                this.$store.dispatch('designPrintPrice/getData', `?design=${this.designId}`)
                    .then(response => {
                        this.designPrintPrice = response.data.data

                        console.log('designPrintPrice')
                        console.log(this.designPrintPrice)
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>

<template>
	<div class="add-new-design-price mt-5">
		
		<vs-row class="d-flex">
			<div class="vx-col md:w-6/12 w-full px-4 mb-3">
				
				<vs-select
					class="selectExample w-full"
					label="Criteria"
					v-model="form.print_criteria_id"
				>
					<vs-select-item
						:key="index"
						:name="'criteria'"
						:text="item.criteria"
						:value="item.id"
						v-for="(item,index) in printCriterias"
						v-if="!item.selected"
						v-validate="'required'"/>
					<span class="text-danger text-sm" v-show="errors.has('criteria')">{{ errors.first('criteria')}}</span>
				
				</vs-select>
			
			</div>
			<div class="vx-col md:w-3/12 w-full px-4 mb-3">
				
				<vs-input
					:name="'price'"
					class="w-full"
					label="Price"
					type="number"
					v-model="form.price"
					v-validate="'required|min_value:0'"
				/>
				<span class="text-danger text-sm" v-show="errors.has('price')">{{ errors.first('price')}}</span>
			
			</div>
			<div class="vx-col md:w-3/12 w-full px-4 mb-3">
				<vs-button
					@click="addnew"
					class="mt-5 w-full"
					color="primary"
					icon="icon-save"
					icon-pack="feather"
					type="filled"
				>Add
				</vs-button>
			</div>
		</vs-row>
	</div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                form: {
                    print_criteria_id: 0,
                    price: 0,
                },
                printCriterias: [],
                designPrintPrice: [],
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
            addnew() {

                this.$validator.validateAll().then(result => {
                    if (result) {
                        this.$emit('addnew', {
                            ...this.form,
                            design_id: this.designId
                        });
                    }
                })
            },
            getDesignPricePrice() {
                this.$store.dispatch('designPrintPrice/getData', `?design=${this.designId}`)
                    .then(response => {
                        this.designPrintPrice = response.data.data;
                        this.getPrintCriterias();
                    })
                    .catch(error => {
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    });
            },
            getPrintCriterias() {
                this.$store.dispatch('criteria/getData', this.payload)
                    .then(response => {
                        this.printCriterias = response.data.data;
                        for (let i = 0; i < this.printCriterias.length; i++) {
                            for (let j = 0; j < this.designPrintPrice.length; j++) {
                                if (this.printCriterias[i].id === this.designPrintPrice[j].print_criteria_id) {
                                    this.printCriterias[i].selected = true;
                                    break
                                }
                            }
                            if (!this.printCriterias[i].selected) {
                                this.printCriterias[i].selected = false;
                            }
                        }
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

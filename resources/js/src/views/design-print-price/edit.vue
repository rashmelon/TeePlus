<template>
	<div class="design-print-price">
		<div class="edit-design-print-price" v-if="can('browse-design-price')">
		
		<vs-list>
			<vs-list-item
				v-if="designPrintPrice.length"
				:key="item.print_criteria.id"
				:title="item.print_criteria.criteria"
				icon="check"
				v-for="(item,index) in designPrintPrice">
				
				<vs-row class="d-flex">
					
					<div class="w-1/3">
						
						<vs-input
							:name="'price-'+index"
							class="w-full"
							label="Price"
							type="number"
							v-model="item.price"
							v-validate="'required|min_value:0'"
						/>
						<span class="text-danger text-sm" v-show="errors.has('price-'+index)">{{ errors.first('price-'+index) }}</span>
					
					</div>
					<div class="w-1/3">
						<vs-button :id="`btn-edit-${item.id}`" class="vs-con-loading__container mx-auto mt-4"
						           v-if="can('edit-design-price')"
						           radius color="warning" type="border"
						           icon-pack="feather" icon="icon-edit"
						           @click=editDesignPrice(item)></vs-button>
					</div>
					<div class="w-1/3"><!-- v-if="can('delete-design')"-->
						<vs-button :id="`btn-delete-${item.id}`" class="vs-con-loading__container mx-auto mt-4"
						           v-if="can('delete-design-price')"
						           radius color="danger" type="border"
						           icon-pack="feather" icon="icon-trash"
						           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteDesign(item)"></vs-button>
					</div>
				</vs-row>
			</vs-list-item>
		</vs-list>
		
	</div>
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
					@click="addNew"
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
	</div>

</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                printCriterias: [],
                designPrintPrice: [],
                is_requesting: false,
                form: {
                    print_criteria_id: 0,
                    price: 0,
                },
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

            addNew() {

                this.is_requesting = true;
                this.$store.dispatch('designPrintPrice/create', {
                    ...this.form,
                    design_id:this.designId
                })
                    .then(response => {
						this.designPrintPrice.push(response.data.data)

                        console.log(this.form.print_criteria_id);
                        console.log(this.printCriterias);

                        this.printCriterias = this.printCriterias.filter(type => {
                            return type.id !== this.form.print_criteria_id
                        });
                        
                        this.form= {
                            print_criteria_id: null,
                            price: 0,
                        };
                        this.is_requesting = false;
                        this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});})
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});

            },
	        confirmDeleteDesign(item) {
                this.$vs.dialog({type: 'confirm', color: 'danger', title: `Are you sure!`, text: 'This data can not be retrieved again.', accept: this.deleteDesignPrice, parameters: item});
            },
            deleteDesignPrice(item){
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('designPrintPrice/delete', item.id)
                    .then(response => {
                        this.printCriterias.push(item.print_criteria)
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.designPrintPrice = this.designPrintPrice.filter(type => {
                            return type.id !== item.id
                        });
                        this.$vs.notify({
                            title: 'Success',
                            text: response.data.message,
                            iconPack: 'feather',
                            icon: 'icon-check',
                            color: 'success'
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },
            editDesignPrice(item){
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-edit-${item.id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('designPrintPrice/update', {
                    id: item.id,
	                data: {price: parseInt(item.price)}
                })
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-edit-${item.id} > .con-vs-loading`);
                        this.$vs.notify({title: 'Success', text: response.data.message, iconPack: 'feather', icon: 'icon-check', color: 'success'});})
                    .catch(error => {
                        console.log(error);
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-edit-${item.id} > .con-vs-loading`);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
           
            },
            addDesignPrintPrice(item){
                if (item.selected){
                    //remove from list and remove api (print_price_id)
                }
                return {
                    price: 0,
                    print_criteria: item

                    //create api (print_price_id)
                }
            },
            validateCheck(item){
                item.selected = true;
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
	                            if (this.printCriterias[i].id === this.designPrintPrice[j].print_criteria_id){
                                    this.printCriterias[i].selected = true;
									break
	                            }
                            }
                            if (!this.printCriterias[i].selected ){
                                this.printCriterias[i].selected = false;
                            }
                        }
                    })
                    .catch(error => {this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});});
            },

            /*update(){
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.is_requesting = true;

                        this.$store.dispatch('designPrintPrice/update', {
                            id: this.designId,
	                        data:this.designPrintPrice
                        })
                            .then(response => {
                                console.log(response)
                                console.log(this.designPrintPrice)
                            })
                            .catch(error => {
                                this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                            });
                        
                    }
                })
            }*/


        }
    }
</script>

<style lang="scss" scoped>

</style>

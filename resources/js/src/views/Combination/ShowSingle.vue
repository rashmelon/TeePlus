<template>
	<div class="show-single-category-compinations">
		<vx-card class="my-5" collapse-action title="Category Combinations">
			<vs-table
				:data="combinations"
			>

				<template slot="thead">
					<vs-th>Combination</vs-th>
					<vs-th>Price</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(combination, index) in data">

						<vs-td>
							<vs-input
								class="w-full"
								v-model="combination.combination"
							/>
						</vs-td>


						<vs-td>
							<vs-input
								class="w-full"
								v-model="combination.price"
								type="number"
							/>
						</vs-td>

						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/2 mx-2">
										<vs-button :id="`btn-edit-${combination.id}`" @click=updateCombination(combination) class="vs-con-loading__container"
										           color="warning" icon="icon-edit"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
									<div class="w-1/2 mx-3">
										<vs-button :id="`btn-delete-${combination.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteCombination(combination)" class="vs-con-loading__container" color="danger" icon="icon-trash"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
								</div>
							</vs-row>
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>

			<CreatePriceCombination
				:catId="catId"
			/>
		</vx-card>
	</div>
</template>

<script>
  import CreatePriceCombination from '../Combination/Create'

  export default {
    name: "ShowSingle",
	  components:{
      CreatePriceCombination
	  },
    data() {
      return {
        combinations: [],
	      is_requesting: false
      }
    },
	  props:[
	    'catId'
	  ],

    mounted() {
      this.getCombinations();
    },
    methods: {
      getCombinations(){
        this.$store.dispatch('combination/getData', `?category=${this.catId}`)
          .then(response => {
            this.combinations = response.data.data;
          })
          .catch(error => {
            console.log(error);
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.error,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
      },



      updateCombination(item) {
        this.is_requesting=true;
        this.$vs.loading({container: `#btn-edit-${item.id}`, color: 'primary', scale: 0.45});
        let form_data = new FormData();

        form_data.append('combination', item.combination);
        form_data.append('price', item.price);
        form_data.append('category_id', this.catId);

        this.$store.dispatch('combination/update', {id: item.id, data: form_data})
          .then(response => {
            this.is_requesting=false;
            this.$vs.loading.close(`#btn-edit-${item.id} > .con-vs-loading`);
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
            this.is_requesting=false;
            this.$vs.loading.close(`#btn-edit > .con-vs-loading`);
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.errors[Object.keys(error.response.data.errors)[0]][0],
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
      },

      confirmDeleteCombination(item) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Are you sure!`,
          text: 'This data can not be retrieved again.',
          accept: this.deleteCombination,
          parameters: item
        });
      },


      deleteCombination(item) {
        this.is_requesting=true;
        this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
        this.$store.dispatch('combination/delete', item.id)
          .then(response => {
            this.is_requesting = false;
            this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
            this.combinations = this.combinations.filter(type => {return type.id !== item.id});
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
            this.is_requesting=false;
            this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.error,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
    }

  }}
</script>

<style lang="scss" scoped>

</style>
<template>
	<div class="show-single-criteria-compinations">
		<vx-card class="my-5" collapse-action title="Category Printing Criteria">
			<vs-table
				:data="criterias"
			>

				<template slot="thead">
					<vs-th>Criteria</vs-th>
					<vs-th>Price</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(criteria, index) in data">

						<vs-td>
							<vs-input
								class="w-full"
								v-model="criteria.criteria"
							/>
						</vs-td>


						<vs-td>
							<vs-input
								class="w-full"
								v-model="criteria.price"
								type="number"
							/>
						</vs-td>

						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/2 mx-2">
										<vs-button :id="`btn-edit-criteria-${criteria.id}`" @click=updateCriteria(criteria) class="vs-con-loading__container"
										           color="warning" icon="icon-edit"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
									<div class="w-1/2 mx-3">
										<vs-button :id="`btn-delete-criteria-${criteria.id}`"
										           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteCriteria(criteria)" class="vs-con-loading__container" color="danger" icon="icon-trash"
										           icon-pack="feather" radius
										           type="border"></vs-button>
									</div>
								</div>
							</vs-row>
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>

			<CreatePrintCriteria
				:catId="catId"
				@addValue="addValue"
			/>
		</vx-card>
	</div>
</template>

<script>
  import CreatePrintCriteria from './Create'

  export default {
    name: "ShowSingle",
	  components:{
      CreatePrintCriteria
	  },
    data() {
      return {
        criterias: [],
	      is_requesting: false
      }
    },
	  props:[
	    'catId'
	  ],

    mounted() {
      this.getCriterias();
    },
    methods: {
      addValue(item){
	      this.criterias.push(item)
      },
      getCriterias(){
        this.$store.dispatch('criteria/getData', `?category=${this.catId}`)
          .then(response => {
            this.criterias = response.data.data;
          })
          .catch(error => {
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.error,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
      },



      updateCriteria(item) {
        this.is_requesting=true;
        this.$vs.loading({container: `#btn-edit-criteria-${item.id}`, color: 'primary', scale: 0.45});
        let form_data = new FormData();

        form_data.append('criteria', item.criteria);
        form_data.append('price', item.price);
        form_data.append('category_id', this.catId);

        this.$store.dispatch('criteria/update', {id: item.id, data: form_data})
          .then(response => {
            this.is_requesting=false;
            this.$vs.loading.close(`#btn-edit-criteria-${item.id} > .con-vs-loading`);
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
            this.$vs.loading.close(`#btn-edit-criteria-${item.id} > .con-vs-loading`);
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.errors[0],
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
      },

      confirmDeleteCriteria(item) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Are you sure!`,
          text: 'This data can not be retrieved again.',
          accept: this.deleteCriteria,
          parameters: item
        });
      },


      deleteCriteria(item) {
        this.is_requesting=true;
        this.$vs.loading({container: `#btn-delete-criteria-${item.id}`, color: 'danger', scale: 0.45});
        this.$store.dispatch('criteria/delete', item.id)
          .then(response => {
            console.log(response)
            this.is_requesting = false;
            this.$vs.loading.close(`#btn-delete-criteria-${item.id} > .con-vs-loading`);
            this.criterias = this.criterias.filter(type => {return type.id !== item.id});
            this.$vs.notify({
              title: 'Success',
              text: response.data.message,
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'success'
            });
          })
          .catch(error => {
            this.is_requesting=false;
            this.$vs.loading.close(`#btn-delete-criteria-${item.id} > .con-vs-loading`);
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


<template>
	<div  v-if="can('browse-category')" class="vx-col w-full mb-base">

		<div class="centerx">
			<vs-row>
				<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
					<b class="text-left vx-col w-full">{{categories.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse">
			<vs-table
				pagination
				search
				max-items="50"
				:data="categories"
			>

				<template slot="header">
					<vs-button :to="{name: 'create-category'}" vs-w="3" color="primary" type="filled" icon-pack="feather"
					           icon="icon-plus">Add Category</vs-button>
				</template>

				<template slot="thead">
					<vs-th>#</vs-th>
					<vs-th>Image</vs-th>
					<vs-th>Name</vs-th>
					<vs-th>Description</vs-th>
					<vs-th>Created At</vs-th>
					<vs-th>Action</vs-th>
				</template>

				<template slot-scope="{data}">
					<vs-tr :key="index" v-for="(category, index) in data">
						<vs-td :data="category.id">
							{{ category.id }}
						</vs-td>

						<vs-td>
							<img
								v-if="category.image"
								:src="category.image.url"
								class="preview-large">
						</vs-td>

						<vs-td :data="category.name">
							{{ category.name}}
						</vs-td>

						<vs-td :data="category.description">
							{{ category.description}}
						</vs-td>

						<vs-td :data="category.created_at">
							{{ category.created_at}}
						</vs-td>

						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/3 mx-2" v-if="can('view-category')">
										<vs-button :id="`btn-view-${category.id}`" class="vs-con-loading__container" radius color="primary" type="border"
										           icon-pack="feather" icon="icon-eye"
										           @click=viewCategory(category.id)></vs-button>
									</div>
									<div class="w-1/3 mx-2" v-if="can('edit-category')">
										<vs-button :id="`btn-edit-${category.id}`" class="vs-con-loading__container" radius color="warning" type="border"
										           icon-pack="feather" icon="icon-edit"
										           @click=editCategory(category.id)></vs-button>
									</div>
									<div class="w-1/3 mx-3" v-if="can('delete-category')">
										<vs-button :id="`btn-delete-${category.id}`" class="vs-con-loading__container" radius color="danger" type="border"
										           icon-pack="feather" icon="icon-trash"
										           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteCategory(category)"></vs-button>
									</div>
								</div>
							</vs-row>
						</vs-td>
					</vs-tr>
				</template>
			</vs-table>
		</vx-card>
	</div>
</template>

<script>
  export default {
    data(){
      return {
        searchText: "",
        resultTime: 0,
        categories: [],
        is_requesting: false
      }
    },
    props:{
      payload: {
        required: false,
        default: ''
      }
    },
    mounted() {
      this.getCategories();
    },

    methods: {
      getCategories(){
        this.$vs.loading({container: this.$refs.browse.$el, scale: 0.5});
        this.$store.dispatch('category/getData', this.payload)
          .then(response => {
            this.categories = response.data.data;
            this.$vs.loading.close(this.$refs.browse.$el);
          })
          .catch(error => {
            console.log(error);
            // this.$vs.loading.close(this.$refs.browse);
            this.$vs.notify({
              title: 'Error',
              text: error.response.data.error,
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger'
            });
          });
      },

			viewCategory(id){
        this.$router.push({name:'view-category',params:{'id':id}})
			},
			editCategory(id){
        this.$router.push({name:'edit-category',params:{'id':id}})
			},
      confirmDeleteCategory(item) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Are you sure!`,
          text: 'This data can not be retrieved again.',
          accept: this.deleteCategory,
          parameters: item
        });
      },

      deleteCategory(item) {
        this.is_requesting=true;
        this.$vs.loading({container: `#btn-delete-${item.id}`, color: 'danger', scale: 0.45});
        this.$store.dispatch('category/delete', item.id)
          .then(response => {
            this.is_requesting = false;
            this.$vs.loading.close(`#btn-delete-${item.id} > .con-vs-loading`);
            this.categories = this.categories.filter(type => {return type.id !== item.id});
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
    }
  }
</script>

<style>
	.txt-hover:hover{
		cursor: pointer;
		color: black !important;
	}

</style>

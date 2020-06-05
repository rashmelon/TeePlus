<template>
	<div class="vx-col w-full mb-base">
		<vx-card ref="browse" title="categories List" collapse-action >
			<vs-table
				pagination
				max-items="50"
				search
				:data="categories"
			>
				<template slot="header">
					<vs-button v-if="can('browse-employee')" to="/dashboard/category/create" size="small" icon-pack="feather" icon="icon-plus">Create
						Category</vs-button>
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
					<vs-tr :key="index" v-for="(category, index) in categories">
						<vs-td :data="categories[index].id">
							{{ categories[index].id }}
						</vs-td>

						<vs-td :data="categories[index].image">
							{{ categories[index].image}}
						</vs-td>

						<vs-td :data="categories[index].name">
							{{ categories[index].name}}
						</vs-td>

						<vs-td :data="categories[index].description">
							{{ categories[index].description}}
						</vs-td>

						<vs-td :data="categories[index].created_at">
							{{ categories[index].created_at}}
						</vs-td>

						<vs-td>
							<vs-row>
								<div class="flex mb-4">
									<div class="w-1/2 mx-2" v-if="can('edit-employee')">
										<vs-button :id="`btn-edit-${category.id}`" class="vs-con-loading__container" radius color="warning" type="border"
										           icon-pack="feather" icon="icon-edit"
										           @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmEditCategory(category)"></vs-button>
									</div>
									<div class="w-1/2 mx-3" v-if="can('delete-employee')">
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
        categories: [
          {
            id: 1,
            image: '#',
            name: 'T-Shirt',
            description: 'here some text about t-shirt!',
            created_at: '18 jan 2020',
          }
        ],
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
      getCategories() {
        return this.categories
      },

      confirmDeleteCategory(type) {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: `Are you sure!`,
          text: 'This data can not be retrieved again.',
          accept: this.deleteCategory,
          parameters: [type]
        });
      },
      confirmEditCategory(type) {
        this.$vs.notify({
          title: 'Error',
          text: 'not yet handled',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        });
      },

      deleteCategory(params) {
        this.$vs.notify({
          title: 'Error',
          text: 'not yet handled',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
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
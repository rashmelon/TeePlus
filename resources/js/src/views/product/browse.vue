<template>
	<div class="vx-col w-full mb-base">

		<div class="centerx">
			<vs-row>
				<vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="9">
					<b class="text-left vx-col w-full">{{products.length}} results found in {{resultTime}}ms</b>
				</vs-col>
			</vs-row>
		</div>

		<vx-card ref="browse" title="products List" collapse-action >
			<vs-table
				pagination
				search
				max-items="50"
				:data="products"
			>

				<template slot="header">
					<vs-button :to="{name: 'create-product'}" vs-w="3" color="primary" type="filled" icon-pack="feather"
					           icon="icon-plus">Add Product</vs-button>
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

						<vs-td :data="category.image">
							{{ category.image}}
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
									<div class="w-1/2 mx-2" v-if="can('edit-employee')">
										<vs-button :id="`btn-edit-${category.id}`" class="vs-con-loading__container" radius color="warning" type="border"
										           icon-pack="feather" icon="icon-edit"
										           @click=editCategory(category.id)></vs-button>
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
        products: [
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
      this.getProducts();
    },
    methods: {
      getProducts() {
        return this.products
      },
			editCategory(id){
        // this.$router.push({name:'edit-category',params:{'id':id}})
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
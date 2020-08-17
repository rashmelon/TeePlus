<template>
	<div v-if="can('browse-user')">
		<div>
			<div class="centerx mb-5">
				<vs-row>
					<vs-col vs-align="center" vs-justify="center" vs-type="flex" vs-w="9">
						<b class="text-left vx-col w-full">{{users.length}} results found in {{resultTime}}ms</b>
					</vs-col>
					<vs-col v-if="can('create-user')" vs-align="center" vs-justify="center" vs-type="flex" vs-w="3">
						<vs-button :to="{name:'add-user'}" color="primary" icon="icon-user-plus" icon-pack="feather" type="filled"
						           vs-w="3">&nbsp;&nbsp;Add User
						</vs-button>
					</vs-col>
				</vs-row>
			</div>
			
			<!-- USER PROFILE CARD 2 - MINIMAL -->
			<div class="vx-row" ref="browse">
				<div class="vx-col w-full md:w-1/2 lg:w-1/3 mb-base" v-for="user in users">
					<vx-card class="p-2">
						<vs-avatar :src="user.image? user.image.url:''" class="mx-auto mb-6 block" size="80px"/>
						<div class="text-center">
							<h4>{{ user.name }}</h4>
							<p class="text-grey">{{ user.roles[0].name }}</p>
						</div>
						<br>
						<div class="text-left vx-col w-full">
							<i class="fas fa-envelope"></i> {{ $t('Email') || 'Email' }}
							<p @click="copyToClipboard(user.email)" class="text-grey txt-hover">{{ user.email }}</p>
						</div>
						<br>
						<template slot="footer">
							<vs-divider/>
							
						<div class="flex justify-between">
                            <span class="flex items-center" v-if="can('browse-invoice')">
                                <vx-tooltip text="Invoices">
                                    <vs-button :to="{name: 'browse-user-invoices',params:{id: user.id}}" color="primary" icon="icon-clipboard" icon-pack="feather" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
							<span class="flex items-center" v-if="can('browse-transaction')">
                                <vx-tooltip text="Transactions">
                                    <vs-button :to="{name: 'browse-user-transactions',params:{id: user.id}}" color="dark" icon="icon-repeat" icon-pack="feather" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
                            <span class="flex items-center" v-if="can('create-seller-product')">
                                <vx-tooltip text="Edit user products">
                                    <vs-button :to="{name: 'edit-user-product',params:{id: user.id}}" color="success" icon="fa-tags" icon-pack="fa" type="filled"></vs-button>
                                </vx-tooltip>
                            </span>
								<span class="flex items-center" v-if="can('delete-user')">
                                   <vx-tooltip text="Delete user">
				                         <vs-button :id="`btn-delete-${user.id}`" @click="is_requesting?$store.dispatch('viewWaitMessage', $vs):confirmDeleteUser(user)"
				                                    class="vs-con-loading__container" color="danger" icon="icon-trash" icon-pack="feather" type="filled"></vs-button>
                                    </vx-tooltip>
                            </span>
								<span class="flex items-center" v-if="can('edit-user')||$store.getters['auth/userData'].id===$route.params.id">
                                   <vx-tooltip text="Edit user">
										<vs-button :to="`/user/${user.id}/edit`" color="warning" icon="icon-edit" icon-pack="feather" type="filled"></vs-button>
                                   </vx-tooltip>
								</span>
								<span class="flex items-center" v-if="can('view-user')||$store.getters['auth/userData'].id===$route.params.id">
									<vx-tooltip text="View user">
										 <vs-button :to="`/user/${user.id}`" icon="icon-eye" icon-pack="feather" type="gradient"></vs-button>
                                      </vx-tooltip>
								</span>
							</div>
						</template>
					</vx-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import "@fortawesome/fontawesome-free/css/all.css"
    import "@fortawesome/fontawesome-free/js/all.js"

    export default {
        name: "User",
        mounted() {
            this.getUsersData(Date.now());
        },
        data: function () {
            return {
                searchText: "",
                resultTime: 0,
                users: [],
                is_requesting: false
            }
        },
        methods: {
            getUsersData(InitialTime) {
                this.$vs.loading({container: this.$refs.browse});
                this.$store.dispatch('user/getData', '')
                    .then(response => {
                        this.$vs.loading.close(this.$refs.browse);
                        this.resultTime = Date.now() - InitialTime;
                        this.users = response.data.data;
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.loading.close(this.$refs.browse);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            confirmDeleteUser(type) {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: `Are you sure!`,
                    text: 'This data can not be retrieved again.',
                    accept: this.deleteUser,
                    parameters: [type]
                });
            },

            deleteUser(params) {
                this.is_requesting = true;
                this.$vs.loading({container: `#btn-delete-${params[0].id}`, color: 'danger', scale: 0.45});
                this.$store.dispatch('user/delete', params[0].id)
                    .then(response => {
                        this.is_requesting = false;
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.users = this.users.filter(type => {
                            return type.id !== params[0].id
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
                        this.$vs.loading.close(`#btn-delete-${params[0].id} > .con-vs-loading`);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },

            copyToClipboard(text) {
                if (window.clipboardData && window.clipboardData.setData) {
                    // IE specific code path to prevent textarea being shown while dialog is visible.
                    this.onCopy();
                    return clipboardData.setData("Text", text);

                } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                    var textarea = document.createElement("textarea");
                    textarea.textContent = text;
                    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
                    document.body.appendChild(textarea);
                    textarea.select();
                    try {
                        this.onCopy();
                        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
                    } catch (ex) {
                        this.onError();
                        return false;
                    } finally {
                        document.body.removeChild(textarea);
                    }
                }
            },
            onCopy() {
                this.$vs.notify({
                    title: 'Success!',
                    text: 'Text copied successfully.',
                    color: 'success',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-check-circle'
                });
            },
            onError() {
                this.$vs.notify({
                    title: 'Failed!',
                    text: 'Error in copying text.',
                    color: 'danger',
                    iconPack: 'feather',
                    position: 'bottom-right',
                    icon: 'icon-alert-circle'
                })
            },
        }
    }
</script>

<style>
	.txt-hover:hover {
		cursor: pointer;
		color: black !important;
	}
</style>

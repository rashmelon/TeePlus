<template>
    <div>
        <div class="vx-col w-full mb-base" v-if="can('view-agency')||$store.getters['auth/userData'].id===$route.params.id">
            <vx-card ref="view" title="Agency Information" collapseAction>
                <vs-row v-if="agency">
                    <vs-row class="mb-5">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <vs-avatar class="mx-auto mb-2 block" size="120px" :src="agency.image && agency.image.url? agency.image.url:'/images/avatar-s-11.png'" />
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Name: {{agency.name}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Email: {{agency.email}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Address: {{agency.address}}
                        </vs-col>
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Phone: {{agency.phone}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Working Hours: {{agency.working_hours}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Display in Homepage: {{agency.homepage}}
                        </vs-col>

                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Renewal: <span v-if="agency.latest_renewal[0]">{{agency.latest_renewal[0].start_date}} to {{agency.latest_renewal[0].end_date}}</span>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            Description: {{agency.description}}
                        </vs-col>
                    </vs-row>

                    <vs-row class="mb-2">
                        <vs-col class="m-3" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <span v-html="agency.location_embed"></span>
                        </vs-col>
                    </vs-row>

                    <vs-row class="mt-5 mb-5">
                        <vs-col vs-type="flex" vs-align="center" vs-justify="center">
                            <vs-button :to="`/agency/${ag_id}/edit`" color="warning" type="filled" icon-pack="feather" icon="icon-edit">Edit Information</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>
            </vx-card>

        </div>
    </div>
</template>

<script>

    export default {
        name: "viewData",
        mounted() {
            if (!this.agency_id){
                this.ag_id = this.$route.params.id;
            }else{
                this.ag_id = this.agency_id;
            }
            this.getAgencyData();
        },
        data: () => {
            return {
                agency: null,
                ag_id: null,
                is_requesting: false,
            }
        },
        props:{
            agency_id: {
                required: false
            }
        },
        methods: {
            getAgencyData() {
                // this.$vs.loading({container: this.$refs.view.$refs.content, scale: 0.5});
                this.$store.dispatch('agency/view', this.ag_id)
                    .then(response => {
                        this.agency = response.data.data;
                        // this.$vs.loading.close(this.$refs.view.$refs.content);
                    })
                    .catch(error => {
                        console.log(error);
                        // this.$vs.loading.close(this.$refs.view.$refs.content);
                        this.$vs.notify({
                            title: 'Error',
                            text: error.response.data.error,
                            iconPack: 'feather',
                            icon: 'icon-alert-circle',
                            color: 'danger'
                        });
                    });
            },
        }
    }
</script>

<style>
    .txt-hover:hover{
        cursor: pointer;
        color: black !important;
    }
</style>

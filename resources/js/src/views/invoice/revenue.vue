<template>
	<div v-if="can('view-invoice')">
        <h1>Total Balance: {{sum}}</h1>
	</div>

</template>

<script>
    export default {
        name: "revenue",
        data() {
            return {
                searchText: "",
                resultTime: 0,
                is_requesting: false,
                sum: 0,
            }
        },
        mounted() {
            this.getInvoice();
        },
        methods: {
            getInvoice() {
                this.$vs.loading();

                this.$store.dispatch('invoice/getRevenue', this.$store.state.auth.AppActiveUser.id)
                    .then(response => {
                        this.sum = response.data.data.sum;

                        console.log(this.invoice)
                    })
                    .catch(error => {
                        console.log(error);
                        this.$vs.notify({title: 'Error', text: error.response.data.error, iconPack: 'feather', icon: 'icon-alert-circle', color: 'danger'});
                    }).then(() => {
                    this.$vs.loading.close();
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

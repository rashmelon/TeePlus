<template>
	<div>
		<div class=" w-full mb-base">
			<div ref="create" title="Create product">
				<h1>create shipping</h1>
			</div>
		</div>
	</div>
</template>

<script>

    export default {
        name: "create",
        mounted() {

        },
        computed: {
            validateForm() {
                return !this.errors.any()
                    && this.form.name !== ''
            },
        },
        data: function () {
            return {

                form: {
                },
                is_requesting: false
            }
        },
        components: {
        },
        props: {
            payload: {
                required: false,
                default: ''
            },
        },
        methods: {

        }
    }
</script>

<style>
	.vs-input-number {
		width: fit-content;
	}

	.attribute-actions {
		align-items: baseline;
		display: flex;
	}
</style>

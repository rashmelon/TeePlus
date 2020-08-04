<template>
		<div class="darkmode-switch mx-2">
			<vs-switch
				color="dark"
				v-model="switchDarkmode"
				@change="switchMode"
				vs-icon-on="brightness_2"
				vs-icon-off="wb_sunny"
			/>
		</div>
</template>

<script>
	import themeOptions from './../../../../../themeConfig'
  export default {
    name: "ToggleDarkmode",
    data() {
      return {
        switchDarkmode: false,
      }
    },
	  methods:{
      switchMode(){
				let theme=this.switchDarkmode?'dark':'light'


        this.$store.dispatch('updateTheme',theme)
        localStorage.setItem("theme", theme)

      }
	  },

    computed: {

    },

	  mounted() {
      // this.$store.dispatch('updateTheme','dark')

    }

  }
</script>

<style lang="scss" scoped>
.darkmode-switch{
	display: flex;
}
</style>
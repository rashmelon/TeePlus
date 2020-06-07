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
  export default {
    name: "ToggleDarkmode",
    data() {
      return {
        switchDarkmode: false,
      }
    },
	  methods:{
      switchMode(){
        this.$store.dispatch('updateTheme',this.theme)
        localStorage.setItem("theme", this.theme)
      }
	  },

    computed: {
      darkTheme() {
        return this.$store.state.theme
      },
	    theme(){
        return this.switchDarkmode?'dark':'light'
	    }
    },

	  mounted() {
      if (this.darkTheme == 'dark'){
        this.switchDarkmode = true
      } else{
        this.switchDarkmode = false
      }
    }

  }
</script>

<style lang="scss" scoped>
.darkmode-switch{
	display: flex;
}
</style>
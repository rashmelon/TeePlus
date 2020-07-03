<template>
  <!-- NOTIFICATIONS -->
  <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
    <feather-icon icon="BellIcon" class="cursor-pointer mt-1 sm:mr-6 mr-2" :badge="unreadNotifications.length" />

    <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

      <div class="notification-top text-center p-5 bg-primary text-white">
        <h3 class="text-white">{{ unreadNotifications.length }} New</h3>
        <p class="opacity-75">App Notifications</p>
      </div>

      <component :is="scrollbarTag" ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings" :key="$vs.rtl">
        <ul class="bordered-items">
          <li v-for="ntf in unreadNotifications" :key="ntf.index" class="flex justify-between px-4 py-4 notification cursor-pointer" @click="$router.push(`/dashboard/${ntf.data.model}/${ntf.data.model_id}`)">
            <div class="flex items-start">
<!--              <feather-icon :icon="ntf.icon" :svgClasses="[`text-${ntf.type}`, 'stroke-current mr-1 h-6 w-6']"></feather-icon>-->
              <div class="mx-2">
                <span class="font-medium block notification-title" :class="[`text-${ntf.type}`]">{{ ntf.data.title }}</span>
                <small>{{ ntf.data.body }}</small>
              </div>
            </div>
            <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.created_at) }}</small>
          </li>
        </ul>
      </component>

      <div class="
        checkout-footer
        fixed
        bottom-0
        rounded-b-lg
        text-primary
        w-full
        p-2
        font-semibold
        text-center
        border
        border-b-0
        border-l-0
        border-r-0
        border-solid
        d-theme-border-grey-light
        cursor-pointer"
        @click="markAllAsRead"
      >
        <span>Mark All as Read</span>
      </div>
    </vs-dropdown-menu>
  </vs-dropdown>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      unreadNotifications: [],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: .60,
      },
    }
  },
  computed: {
    scrollbarTag() { return this.$store.getters.scrollbarTag }
  },
    mounted() {
      this.getData(Date.now());
    },
    methods: {

      getData(InitialTime){
        /*this.$vs.loading({container: this.$refs.browse, scale: 0.5});
				this.$store.dispatch('notification/getData', '')
						.then(response => {
								this.$vs.loading.close(this.$refs.browse);
								this.resultTime = Date.now() - InitialTime;
								this.unreadNotifications = response.data.data;
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
						});*/
      },

        markAllAsRead(){
            this.$vs.loading({container: this.$refs.browse, scale: 0.5});
            this.$store.dispatch('notification/markAsRead', '')
                .then(response => {
                    this.$vs.loading.close(this.$refs.browse);
                    this.$vs.notify({
                        title: 'Success',
                        text: response.data.message,
                        iconPack: 'feather',
                        icon: 'icon-check',
                        color: 'success'
                    });
                    this.unreadNotifications = [];
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

    elapsedTime(startTime) {
      let x        = new Date(startTime)
      let now      = new Date()
      var timeDiff = now - x
      timeDiff    /= 1000

      var seconds = Math.round(timeDiff)
      timeDiff    = Math.floor(timeDiff / 60)

      var minutes = Math.round(timeDiff % 60)
      timeDiff    = Math.floor(timeDiff / 60)

      var hours   = Math.round(timeDiff % 24)
      timeDiff    = Math.floor(timeDiff / 24)

      var days    = Math.round(timeDiff % 365)
      timeDiff    = Math.floor(timeDiff / 365)

      var years   = timeDiff

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago'
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago'
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago'
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago'
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? ' sec ago' : 'just now')
      }

      return 'Just Now'
    },
    // Method for creating dummy notification time
    randomDate({ hr, min, sec }) {
      let date = new Date()

      if (hr) date.setHours(date.getHours() - hr)
      if (min) date.setMinutes(date.getMinutes() - min)
      if (sec) date.setSeconds(date.getSeconds() - sec)

      return date
    }
  }
}

</script>


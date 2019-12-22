<template>
  <div class="TypePeopleScreen">
    <div class="bodyMessager">
      <router-view></router-view>
    </div>
    <div class="footerMessager">
      <footerMessenger screen="message" />
    </div>
  </div>
</template>

<script>
import footerMessenger from '@/components/footerMessenger.vue'

export default {
  name: 'TypePeopleScreen',
  components: {
    footerMessenger
  },
  data () {
    return {
      queueData: {
        userQueue: 0,
        helperQueue: 0
      }
    }
  },
  props: {
    msg: String
  },
  mounted () {
    this.authValid()
  },
  methods: {
    authValid () {
      if (!localStorage.token) {
        this.$router.push({ path: '/login' })
        return 0
      }
    }
  }
}
</script>

<style scope>
.TypePeopleScreen {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: auto;
  background-color: #ededed;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
.bodyMessager {
  margin: auto;
}

</style>

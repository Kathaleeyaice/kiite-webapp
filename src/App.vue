<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.authValid()
  },
  methods: {
    authValid () {
      if (!localStorage.token && !this.$route.name !== 'Landing') {
        this.$router.push({ path: '/login' })
        return 0
      }
    }
  }
}
</script>

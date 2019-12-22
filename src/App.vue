<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
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

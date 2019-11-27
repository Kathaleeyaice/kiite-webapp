<template>
  <div class="LandingCon">
    <router-link to="/login">Start Message</router-link>

  </div>
</template>

<script>
export default {
  name: 'LandingCon',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

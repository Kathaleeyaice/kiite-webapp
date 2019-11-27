<template>
  <div class="ProfileScreen">
    <router-link to="/ChatScreen">Chat</router-link>

  </div>
</template>

<script>
export default {
  name: 'ProfileScreen',
  props: {
    msg: String
  }
}
</script>

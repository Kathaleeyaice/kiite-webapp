<template>
    <div class="message">
        <div :key="index" v-for="(item, index) in messages">
            <messageBox :text="item.text" :user="item.user" :time="item.time"></messageBox>
        </div>
    </div>
</template>

<script>
import messageBox from './messageBox.vue'

export default {
  name: 'message',
  components: {
    messageBox
  },
  props: {
    message: {
      type: Array
    }
  },
  data () {
    return {
      messages: this.message
      // item: {}
    }
  },
  mounted () {
    this.messages = this.message
  }
}
</script>

<style scope>
.message{
  margin-top: 16.3418290855vh;
}
</style>

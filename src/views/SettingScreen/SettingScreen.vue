<template>
  <div class="SettingScreen">
    <div>
    <headerMessenger msg="Setting">
    </headerMessenger>
    </div>
    <div class="Setting">
      <Setting/>
    </div>
    <div class="footerMessager">
      <footerMessenger screen="setting" />
    </div>
  </div>
</template>

<script>

import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'
import Setting from '@/views/SettingScreen/components/Setting.vue'
import footerMessenger from '@/components/footerMessenger.vue'

export default {
  name: 'SettingScreen',
  components: {
    footerMessenger,
    headerMessenger,
    Setting
  },
  props: {
    msg: String
  }
}
</script>
<style>
.SettingScreen{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: auto;
    background-color: #ededed;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
</style>

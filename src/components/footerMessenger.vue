<template>
  <div>
    <div v-if="screen =='home' " class="footerMessenger">
      <div class="iconMenuBox"><router-link to="/home"><img src="../assets/timeline.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/messenger/type"><img src="../assets/chatMenu1.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/setting"><img src="../assets/setting1.png" class="iconMenu"></router-link></div>
    </div>
    <div v-else-if="screen =='message' " class="footerMessenger">
      <div class="iconMenuBox"><router-link to="/home"><img src="../assets/timeline1.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/messenger/type"><img src="../assets/chatMenu.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/setting"><img src="../assets/setting1.png" class="iconMenu"></router-link></div>
    </div>
    <div v-else-if="screen =='setting' " class="footerMessenger">
      <div class="iconMenuBox"><router-link to="/home"><img src="../assets/timeline1.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/messenger/type"><img src="../assets/chatMenu1.png" class="iconMenu"></router-link></div>
      <div class="iconMenuBox"><router-link to="/setting"><img src="../assets/setting.png" class="iconMenu"></router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: {

  },
  name: 'footerMessenger',
  props: {
    screen: String
  }
}
</script>

<style scope>
.footerMessenger {
  width: 100vw;
  height: 10.1949025vh;
  background-color: rgba(47, 196, 178, 0.3);
  margin: auto;
  display: inline-flex;
  position: fixed;
  bottom: 0;
  left: 0;
}
.iconMenuBox {
  height: 10.1949025vh;
  margin: auto;
}
.iconMenu {
  width: 5.247376vh;
  height: 5.247376vh;
  margin-top: 2.09895vh;
  cursor: pointer;
}
</style>

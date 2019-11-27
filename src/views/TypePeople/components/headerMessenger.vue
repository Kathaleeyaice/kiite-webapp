<template>
    <div class="headerMessenger">
      <img src="../assets/back.png" class="iconBack" v-if="backButton" @click="goBack">
      <div class="headerKiite">
        {{ msg }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'headerMessenger',
  props: {
    msg: String,
    backButton: Boolean
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scope>
.headerMessenger {
  width: 100vw;
  background-color: #2FC4B2;
  padding-top: 3.448275vh;
  padding-bottom: 3.448275vh;
  font-size: 2.69865vh;
  font-weight: bold;
  color: #f8f8f8;
  display: inline-flex;
}
.iconBack {
  width: 1.7991vh;
  height: 3.27736vh;
  position: absolute;
  margin-left: 2.69865067466vh;
}
.headerKiite {
  margin: auto;
}
</style>

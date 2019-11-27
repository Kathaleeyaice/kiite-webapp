<template>
    <div class="HeaderHome">
       <!-- <button class="backButton" v-if="backButton" @click="goBack"><img src="../assets/back.png" class="iconBack"></button> -->
      <div class="head">
        {{ msg }}
        <div class="positionpost">
          <router-link to="/post">
          <img class="picpost" src="../assets/createpost.png">
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderHome',
  props: {
    msg: String
  }
}
</script>

<style scope>
.HeaderHome {
  width: 100vw;
  background-color: #2FC4B2;
  padding-top: 3.448275vh;
  padding-bottom: 3.448275vh;
  font-size: 2.69865vh;
  font-weight: bold;
  color: #f8f8f8;
  display: inline-flex;
}
.picpost{
    position: absolute;
    width: 3.5682vh;
    height: 3.29835vh;
    float: right;
    margin-left: 19.5%;
}
.positionpost{
  float: right;
}
.head{
  margin: auto;
}
</style>

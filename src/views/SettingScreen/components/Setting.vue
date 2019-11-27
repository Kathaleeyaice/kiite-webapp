<template>
    <div class="Setting">
      <div>
      <router-link to="/aboutus" style="text-decoration:none">
          <div>
            <div class="positionpic">
              <img class="pic" src="../assets/aboutus.png">
            </div>
                <div class="positiontext">
                  <p1 class="text1">About us</p1>
                </div>
          <div class="next">
            <img class="pic2" src="../assets/next.png">
          </div>
          </div>
        </router-link>
    </div>
    <div>
        <router-link to="/privacy" style="text-decoration:none">
          <div>
            <div class="positionpic2">
              <img class="picpro" src="../assets/privacy.png">
            </div>
                <div class="positiontext2">
                  <p1 class="text1">Privacy & Policy</p1>
                </div>
          <div class="next">
            <img class="pic2" src="../assets/next.png">
          </div>
          </div>
        </router-link>
    </div>
    <div @click="remove()">
        <router-link to="/#" style="text-decoration:none">
          <div>
            <div class="positionpic3">
              <img class="piclog" src="../assets/logout.png">
            </div>
                <div class="positiontext2">
                  <p1 class="text1">Log Out</p1>
                </div>
          <div class="next">
            <img class="pic2" src="../assets/next.png">
          </div>
          </div>
        </router-link>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Setting',
  props: {
    screen: String
  },
  methods: {
    remove () {
      localStorage.clear()
    }
  }
}
</script>
<style>
.pic{
  width: 4.047976vh;
  height: 4.047976vh;
  margin-left: 2.69865vh;
  margin-top: 2.24887556vh;
}
.pic2{
  width: 3.44827586vh;
  height: 3.44827586vh;
  margin-right: 2.24887556vh;
  margin-top: 2.5487vh;
}
.picpro{
  width: 4.7976vh;
  height: 5.320839vh;
   margin-top: 2.023988vh;
   margin-right: 4.49775vh;
}
.piclog{
  width: 4.7976vh;
  height: 4.63568vh;
  margin-top: 2.17541229vh;
}
.text1{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 2.3988vh;
  line-height: 2.8485757vh;
  color: black;
}
.positionpic{
  float: left;
  margin: auto;
}
.positionpic2{
  float: left;
  margin: auto;
  margin-left: -4.49775vh;
}
.positionpic3{
  float: left;
  margin: auto;
  margin-left: -9.145427vh;
}
.positiontext{
  float: left;
  margin: auto;
  margin-top: 2.5487256vh;
  margin-left: 1.7991vh;
}
.positiontext2{
  float: left;
  margin: auto;
  margin-top: 2.5487256vh;
  margin-left: -2.8485757vh;
}
.next{
  margin: auto;
  margin-left: 93.6vw;
}
</style>

<template>
  <div class="TopicScreen">
      <div>
      <headerMessenger :backButton="true" msg="Kiite’s Messenger"/>
      </div>
      <div class="TopicBox">
        <div class="headerTopic">Topic</div>
        <div class="SelectTopictBox">
            <!-- <div class="buttonBox">
                <img src="../assets/Love.png" class="iconTopic">
                <router-link :to="`/finding/finding?userType=${this.userType}&topic=love`"><button class="Button" id="topicButtonLove">Love</button></router-link>
            </div> -->
             <router-link :to="`/finding/finding?userType=${this.userType}&topic=love`" class="buttonBox">
                <img src="../assets/Love.png" class="iconTopic">
                <div class="Button">Love</div>
             </router-link>
             <router-link :to="`/finding/finding?userType=${this.userType}&topic=education`" class="buttonBox">
                <img src="../assets/Education.png" class="iconTopic">
                <div class="Button">Education</div>
             </router-link>
             <router-link :to="`/finding/finding?userType=${this.userType}&topic=general`" class="buttonBox">
                <img src="../assets/General.png" class="iconTopic">
                <div class="Button">General</div>
             </router-link>
            <!-- <div class="buttonBox">
                <img src="../assets/Education.png" class="iconTopic">
                <router-link :to="`/finding/finding?userType=${this.userType}&topic=educaion`"><button class="Button" id="topicButtonEducation">Education</button></router-link>
            </div>
            <div class="buttonBox">
                <img src="../assets/General.png" class="iconTopic">
                <router-link :to="`/finding/finding?userType=${this.userType}&topic=general`" ><button class="Button" id="topicButtonGeneral">General</button></router-link>
            </div> -->
        </div>
      </div>
  </div>
</template>

<script>
import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'

export default {
  name: 'TopicScreen',
  data () {
    return {
      userType: this.$route.params.userType
    }
  },
  components: {
    headerMessenger
  },
  props: {
    msg: String
  },
  mounted () {
    this.typeValid()
  },
  methods: {
    typeValid () {
      if (this.$route.params.userType === 'user' || this.$route.params.userType === 'helper') {
        return true
      } else {
        this.$router.push({ path: '/message/type' })
      }
    }
  }
}
</script>

<style scope>
.TopicScreen {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: auto;
}
.TopicBox {
    width: 48.27586vh;
    height: 46.6266867vh;
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 16.49175vh;
    border-radius: 0.89955vh;
}
.headerTopic {
    text-align: center;
    font-size: 2.09895vh;
    font-weight: bold;
    padding-top: 4.347826vh;
}
.SelectTopictBox {
    margin: auto;
    margin-top: 4.347826vh;
}
.buttonBox {
    width: 24.287856vh;
    height: 5.997vh;
    margin: auto;
    margin-left: 11.994vh;
    margin-bottom: 5.09745vh;
    border-radius: 0.89955vh;
    background-color: #8DE5DE;
    cursor: pointer;
    display: inline-flex;
    text-decoration: underline;
    text-decoration: none;
}
.iconTopic {
    width: 2.9985vh;
    height: 2.9985vh;
    margin-top: 1.49925vh;
    margin-left: 4.1979vh;
}
.Button {
    font-size: 1.949025vh;
    font-weight: bold;
    color: #f8f8f8;
    background-color: #8DE5DE;
    border: none;
    cursor: pointer;
    padding-top: 1.549vh;
    padding-left: 3.1vh;
    text-decoration: underline;
    text-decoration: none;
}
#topicButtonLove {
    /* margin-left: 2.24887vh; */
}
#topicButtonEducation {
    /* margin-left: 0.2998vh; */
}
#topicButtonGeneral {
    /* margin-left: 1.3493vh; */
}

</style>

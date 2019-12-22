<template>
  <div class="HomeScreen">
    <div class="fixheader">
      <HeaderHome msg="Kiite’s Timeline">
      </HeaderHome>
      <div class="staticNav1">
        <div class="textMood">currently mood</div>
        <div class="staticBox">
          <b-progress :max="max">
            <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" class="pos">
              <div class="textPos">pos</div>
            </b-progress-bar>
          </b-progress>
        </div>
        <div style="width: 100vw; backgroundColor: #C4C4C4" v-if="newStatus">
          <span>Got a new status. Please Refresh</span>
        </div>
      </div>
    </div>
    <div class="pad-head">
      <div class="borderbox" v-for="msg in message" v-bind:key="msg.name">
        <div class="contentBox">
          <div id="imageContainer">
            <img class="iconTimeline" v-bind:style="{ 'background-color':  msg.icon.iconColor }" :src="require('./assets/'+msg.icon.iconType+'.png')"/>
          </div>
          <div class="post-content">
            {{msg.text}}
          </div>
        </div>
        <div class="timestatus">
              <time1>{{getTime(msg.createdDate)}}</time1>
            </div>
      </div>
    </div>
    <div id="backfoot">
      <div class="footerMessager">
        <footerMessenger screen="home" />
      </div>
    </div>
  </div>
</template>

<script>
import footerMessenger from '@/components/footerMessenger.vue'
import HeaderHome from '@/views/HomeScreen/components/HeaderHome.vue'

export default {
  name: 'HomeScreen',
  components: {
    footerMessenger,
    HeaderHome
  },
  props: {
    msg: String
  },
  data () {
    return {
      value: 50,
      max: 100,
      isLoading: false,
      message: [],
      newStatus: false
    }
  },
  mounted () {
    this.authValid()
    this.fectStatus()
    this.$root.socket.on('timeline', (data) => {
      this.newStatus = true
    })
  },
  methods: {
    authValid () {
      if (!localStorage.token) {
        this.$router.push({ path: '/login' })
        return 0
      }
    },
    fectStatus () {
      this.isLoading = true
      fetch('https://kiite-webservice.herokuapp.com/timeline', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.token
        }
      })
        .then(response => response.json())
        .then((response) => {
          if (response.status === 200) {
            this.isLoading = false
            this.message = response.data
            this.value = this.getPosPercentage()
          } else {
            this.isLoading = false
            alert('Something went wrong. Please try again')
          }
        })
    },
    getTime (time) {
      let todayDate = new Date()
      let createDate = new Date(time)
      let compare = (todayDate.getTime() / 1000) - (createDate.getTime() / 1000)
      compare = Math.abs(compare)
      if (compare < 60) {
        return `${Math.floor(compare)} seconds ago`
      } else if (compare < 3600) {
        return `${Math.floor(compare / 60)} minutes ago`
      } else {
        return `${Math.floor(compare / 3600)} hours ago`
      }
    },
    getPosPercentage () {
      let posCount = 0
      let negCount = 0
      this.message.map((data, key) => {
        if (data.mood === 'pos') {
          posCount += 1
        } else if (data.mood === 'neg') {
          negCount += 1
        }
      })
      let posPercentage = posCount / (posCount + negCount) * 100
      if (isNaN(posPercentage)) {
        return 51
      } else {
        return posPercentage
      }
    }
  }
}
</script>
<style scope>
  .HomeScreen {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: auto;
    background-color: #ededed;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    overflow-y: auto;
  }

  .post-content {
    font-style: normal;
    font-size: 2.3988vh;
    line-height: 2.8485757vh;
    font-family: sans-serif;
    margin-left: 2.99850074963vh;
    margin-right: 2.09895052474vh;
    word-break: break-word;
  }

  .pad-head {
    margin-top: 16.3958641vh;
    display: flex;
    flex-direction: column-reverse;
  }

  .contentBox {
    display: inline-flex;
    margin: 2vh 0vh 0vh 0vh;
    width: 100%;
  }

  .line-timeline {
    width: 95%;
  }

  .borderbox {
    border-bottom: ridge;
    margin: 1vh 1vh 0vh 1vh;
    border-width: 0.5vh;
  }

  .iconTimeline {
    height: 6.29685157421vh;
    width: 6.74662668666vh;
    height: 100%;
    margin-left: 2.09895052474vh;
  }

  #imageContainer {
    height: 100%;
    /* margin-left: 1.19940029985vh; */
  }

  .fixheader {
    position: fixed;
  }

  /* .pad-head {
    margin-top: 18.3958641vh;
  } */
.positiontime{
  float: right;
  padding-top: 80px;
}
  #backfoot {
    height: 10.1949025vh;
    ;
    background-color: #ededed;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .cerrenlymood {
    position: absolute;
    width: 5.24737631184vh;
    height: 5.24737631184vh;
    left: 8.84557721139vh;
  }

  .staticNav1 {
    margin: auto;
    width: 100vw;
    height: 6.14692653673vh;
    background-color: #8DE5DE;
    color: #f8f8f8;
    font-size: 1.79910044978vh;
    position: fixed;
  }

  .textMood {
    width: 50.9745127436vh;
    margin: auto;
    padding-top: 0.59970014992vh;
  }

  .staticBox {
    width: 50.9745127436vh;
    height: 2.24887556222vh;
    background-color: #c4c4c4;
    margin: auto;
    font-size: 1.79910044978vh;
    /* display: inline-flex; */
  }

  .textPos {
    margin-left: 0.89955022488vh;
  }

  .pos {
    background-color: #2FC4B2;
    height: 2.24887556222vh;
  }
  .timestatus{
    float: right;
  }
  time1{
    float: right;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.49925037481vh;
    line-height: 1.79910044978vh;
  }
  </style>

<template>
  <div class="FindingScreen">
    <div class="FindingComp">
      <div class="back">
        <!-- ทำดิสคอนเนค socket -->
        <router-link to="/messenger/type"><img src="./assets/back.png" class="iconBack"></router-link>
      </div>
      <div v-if="isLoading">
        <img src="./assets/finding.png" class="imgFinding" id="imgFinding">
        <div class="Text">Finding User</div>
        <div v-if="user === 'user'">
          <div class="Queue">
            {{queueData.userQueue}} users in queue
          </div>
        </div>
        <div v-else>
          <div class="Queue">
            {{queueData.helperQueue}} users in queue
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="isShow">
          <div class="ShowStaticBox">
            <div class="icon">
              <img :src="this.getIcon(this.iconType)" class="iconType">
            </div>
            <div class="matchName">
              {{matchName}}
            </div>
            <div class="typeMood">
              {{typeMood}} mood
            </div>
            <div class="static">
              <b-progress :max="max">
                <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" class="positive">
                  <div class="textPos">pos</div>
                </b-progress-bar>
              </b-progress>
            </div>
            <div class="yourName">Your name is {{yourName}}</div>
          </div>
          <div class="textStart">Starting Message ...</div>
        </div>
        <div v-if="!isShow">
          <img src="./assets/match.png" class="imgFinding">
          <div class="TextMatch">Matched!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'

export default {
  name: 'FindingScreen',
  props: {
    msg: String
  },
  data () {
    return {
      value: 50,
      max: 100,
      isLoading: true,
      isShow: false,
      queueData: {
        userQueue: 0,
        helperQueue: 0
      },
      roomID: '',
      matchName: '',
      yourName: '',
      matcherStat: {},
      iconType: '',
      typeMood: ''
    }
  },
  mounted () {
    this.authValid()
    this.$root.socket.emit('connection', 'connected')
    this.$root.socket.emit('find_chat', {
      type: this.$route.query.userType,
      topic: this.$route.query.topic,
      token: localStorage.token,
      username: localStorage.username
    })
    this.$root.socket.on('queue_chat', (data) => {
      this.queueData = data
    })
    this.$root.socket.on('found_chat', (data) => {
      setTimeout(() => {
        console.log(data)
        this.roomID = data.room
        this.matchName = this.getThaiName(data.matchName)
        this.iconType = data.matchName
        this.yourName = data.yourName
        this.typeMood = data.topic
        this.matcherStat = data.matcherStat
        this.isLoading = false
        this.value = this.getPosPercentage(this.matcherStat.pos, this.matcherStat.neg)
        setTimeout(() => {
          this.isShow = true
          setTimeout(() => {
            this.$router.push({
              path: `/chat?matchName=${this.matchName}&topic=${this.$route.query.topic}&room=${this.roomID}`
            })
          }, 4000)
        }, 1200)
      }, 1500)
    })
  },
  methods: {
    authValid () {
      if (!localStorage.token) {
        this.$router.push({ path: '/login' })
        return 0
      }
    },
    getPosPercentage (posCount, negCount) {
      let posPercentage = posCount / (posCount + negCount) * 100
      if (isNaN(posPercentage)) {
        return 50
      } else {
        return posPercentage
      }
    },
    getThaiName (iconType) {
      if (iconType === 'tiger') {
        return 'คุณเสือ'
      }
      if (iconType === 'pig') {
        return 'คุณหมู'
      }
      if (iconType === 'cat') {
        return 'คุณแมว'
      }
      if (iconType === 'dog') {
        return 'คุณหมา'
      }
      if (iconType === 'penguin') {
        return 'แพนกวิน'
      }
    },
    getIcon (iconType) {
      if (iconType === 'tiger') {
        return require('./assets/tiger.png')
      }
      if (iconType === 'pig') {
        return require('./assets/pig.png')
      }
      if (iconType === 'cat') {
        return require('./assets/cat.png')
      }
      if (iconType === 'dog') {
        return require('./assets/dog.png')
      }
      if (iconType === 'penguin') {
        return require('./assets/penguin.png')
      }
    }
  },
  socketDisconnect () {
    this.$root.socket.disconnect()
  }
}

</script>

<style scope>
  .FindingScreen {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2FC4B2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .iconBack {
    width: 1.7991vh;
    height: 3.27736vh;
    position: absolute;
    margin-left: 2.69865067466vh;
  }
  .imgFinding{
    position: absolute;
    width: 26.0869565217vh;
    top: 24.4377811094vh;
    left: 15.1424287856vh;
  }
  #imgFinding{
    animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  }
  @keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
  .Text{
    position: absolute;
    font-size: 2.0989vh;
    font-weight: bold;
    left: 22.3388305847vh;
    top: 55.9220389805vh;
}
.TextMatch{
   position: absolute;
    font-size: 2.0989vh;
    font-weight: bold;
    left: 24.287856072vh;
    top: 55.9220389805vh;
}
.Queue{
  position: absolute;
  font-size: 1.79910044978vh;
  left: 21.5892053973vh;
  top: 59.2203898051vh;
}
  .ShowStatic{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: #2FC4B2;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
}
.back{
    margin-top: 3.44827vh;
}
.ShowStaticBox{
    width: 46.02698vh;
    height: 41.52923vh;
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 23.5382vh;
    border-radius: 0.89955vh;
    padding-top: 3.29835vh;
}
.iconType{
    width: 22.48875vh;
    height: 22.48875vh;
    margin-left:11.769115vh;
}
.matchName{
    text-align: center;
    font-size: 2.09895052474;
    font-weight: bold;
    margin-top: 2.54872563718vh;
    color: #262626;
}
.typeMood{
    width: 28.335832084vh;
    margin:auto;
    margin-top:1.04947526237vh;
    font-size:1.34932533733vh;
    color: #262626;
}
.static{
  width: 28.335832084vh;
  height: 2.99850074963vh;
  background-color: #c4c4c4;
  margin: auto;
  font-size: 1.49925037481vh;
}
.positive{
  height: 2.99850074963vh;
  background-color: #2FC4B2;
}
.textStart{
  font-size: 1.94902548726vh;
  font-weight: bold;
  color:#f8f8f8;
  text-align: center;
  margin-top: 15.892053973vh;
}
.yourName{
  color: #262626;
  font-size: 1.49925037481vh;
  text-align: center;
}

</style>

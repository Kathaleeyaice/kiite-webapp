<template>
  <div class="ChatScreen">
    <div class="navChat">
      <router-link to="/messenger/type"><img src="./assets/back.png" id="iconBack"></router-link>
      <div class="name">{{$route.query.matchName}}</div>
    </div>
    <div class="staticNav">
      <div class="textMood">currently mood</div>
      <div class="staticBox">
        <b-progress :max="max">
          <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`" class="pos">
            <div class="textPos">pos</div>
          </b-progress-bar>
        </b-progress>
      </div>
    </div>
    <div class="messageScreen">
      <message :message="messages"></message>
    </div>
    <div class="footerChat">
      <input v-model="textInput" type="text" class="inputMessage">
      <button class="sendButton" @click="sendMessage" >Send</button>
    </div>
  </div>
</template>

<script>
import message from './components/message.vue'

export default {
  name: 'ChatScreen',
  data: function () {
    return {
      name: 'พี่เสือ',
      value: 50,
      max: 100,
      textInput: '',
      messages: []
    }
  },
  components: {
    message
  },
  mounted () {
    this.authValid()
    this.value = this.getPosPercentage()
    console.log(this.value)
    this.$root.socket.on('receive_chat', (data) => {
      let today = new Date()
      let time = this.checkTime(today.getHours()) + ':' + this.checkTime(today.getMinutes())
      let messageData = {
        user: 'matcher',
        text: data.text,
        mood: data.mood,
        time: time
      }
      this.messages.push(messageData)
      this.value = this.getPosPercentage()
    })
  },
  destroyed () {
    this.$root.socket.disconnect()
  },
  methods: {
    getPosPercentage () {
      let posCount = 0
      let negCount = 0
      this.messages.map((data, key) => {
        if (data.mood === 'pos') {
          posCount += 1
        } else if (data.mood === 'neg') {
          negCount += 1
        }
      })
      let posPercentage = posCount / (posCount + negCount) * 100
      if (isNaN(posPercentage)) {
        return 50
      } else {
        return posPercentage
      }
    },
    checkTime (i) {
      return (i < 10) ? '0' + i : i
    },
    sendMessage () {
      let today = new Date()
      let time = this.checkTime(today.getHours()) + ':' + this.checkTime(today.getMinutes())
      let messageData = {
        user: 'user',
        text: this.textInput,
        time: time
      }
      this.$root.socket.emit('send_chat', {
        username: localStorage.username,
        topic: this.$route.query.topic,
        room: this.$route.query.room,
        text: this.textInput
      })
      this.textInput = ''
      this.messages.push(messageData)
    },
    authValid () {
      if (!localStorage.token) {
        this.$router.push({ path: '/login' })
        return 0
      }
    }
  }
}
</script>

<style scope>

.ChatScreen{
  background-color: #ededed;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  overflow-y: auto;
}
.navChat{
  width: 100vw;
  height: 10.1949025487vh;
  background-color: #2FC4B2;
  position: fixed;
}
#iconBack{
  width: 1.7991vh;
  height: 3.27736vh;
  position: absolute;
  margin-left: 2.69865067466vh;
  margin-top: 3.44827586207vh;
}
.name{
  font-size: 2.69865067466vh;
  font-weight: bold;
  color: #f8f8f8;
  margin-left: 7.49625187406vh;
  padding-top: 3.44827586207vh;
}
.staticNav{
  margin: auto;
  margin-top: 10.1949025487vh;
  width: 100vw;
  height: 6.14692653673vh;
  background-color: #8DE5DE;
  color: #f8f8f8;
  font-size: 1.79910044978vh;
  position: fixed;
}
.textMood{
  width: 50.9745127436vh;
  margin: auto;
  padding-top: 0.59970014992vh;
}
.staticBox{
  width: 50.9745127436vh;
  height: 2.24887556222vh;
  background-color: #c4c4c4;
  margin: auto;
  font-size: 1.79910044978vh;
  /* display: inline-flex; */
}
.pos{
  background-color: #2FC4B2;
  height: 2.24887556222vh;
}
.textPos{
  margin-left:0.89955022488vh;
}
.textNag{
  margin-right:0.89955022488vh;
}
.footerChat{
  width: 100vw;
  height: 8.09595202399vh;
  background-color: #2FC4B2;
  position: fixed;
  bottom: 0;
  display: inline-flex;
  margin: auto;
  font-size: 2.3988005997vh;
}
.inputMessage{
  width: 100vw;
  height: 5.09745127436vh;
  outline: none;
  border: 0;
  box-shadow: none;
  border-radius: 0.89955022488vh;
  margin: auto;
  margin-left: 2.09895052474vh;
  background-color: #f8f8f8;
}

.inputMessage:focus{
  outline: none;
  border: 0;
  box-shadow: none;
}

.sendButton{
  width: 14.6666666667vw;
  height: 5.09745127436vh;
  border: none;
  border-radius: 0.89955022488vh;
  margin:auto;
  margin-left:4vw;
  margin-right: 4vw;
  font-weight: bold;
  color: #262626;
  background-color: #f8f8f8;
  cursor: pointer;
}

.messageScreen{
  padding-bottom: 10vh;
}
/* b-progress{
  width: 50.9745127436vh;
  height: 2.24887556222vh;
  background-color: #2FC4B2;
} */
</style>

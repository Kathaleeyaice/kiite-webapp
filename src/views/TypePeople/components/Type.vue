<template>
    <div class="Type">
        <div>
            <headerMessenger msg="Kiite’s Messenger"/>
        </div>
        <div class="typeBox">
            <div class="headerType">Who are you ?</div>
            <div class="selectTypeBox">
                <div class="Helper">
                    <div class="headerText">Helper</div>
                    <img src="../assets/Helper.png" class="iconHelper">
                    <div class="buttonSelectBox">
                        <router-link to="/messenger/topic/helper"><button class="selectButton">Select</button></router-link>
                    </div>
                    <div>{{queueData.helperQueue}} users in queue</div>
                </div>
                <div class="User">
                    <div class="headerText">User</div>
                    <img src="../assets/User.png" class="iconUser">
                    <div class="buttonSelectBox">
                        <router-link to="/messenger/topic/user"><button class="selectButton">Select</button></router-link>
                    </div>
                    <div>{{queueData.userQueue}} users in queue</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'

export default {
  name: 'Type',
  data: function () {
    return {
      queueData: {
        userQueue: 0,
        helperQueue: 0
      }
    }
  },
  components: {
    headerMessenger
  },
  props: {
    msg: String
  },
  mounted () {
    this.$root.socket.emit('connection', 'connected')
    this.$root.socket.on('queue_chat', (data) => {
      this.queueData = data
    })
  }
}
</script>

<style scope>
.Type {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.typeBox {
    width: 48.275862vh;
    height: 33.133433vh;
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 23.988vh;
}
.headerType {
    font-size: 2.09895vh;
    font-weight: bold;
    color: #262626;
    text-align: center;
    padding-top: 2.3988vh;
    margin-bottom: 2.848575vh;
}
.selectTypeBox {
    display: inline-flex;
}
.Helper {
    width: 24.137931034vh;
    text-align: center;
    font-size: 1.6491vh;
}
.User {
    width: 24.137931034vh;
    text-align: center;
    font-size: 1.6491vh;
}
.headerText {
    font-weight: bold;
}
.iconHelper {
    width: 13.793103vh;
    height: 13.379310vh;
    margin-top: 1.049475vh;
}
.iconUser {
    width: 10.973013vh;
    height: 13.379310vh;
    margin-top: 1.049475vh;
}
.selectButton {
  margin: auto;
  width: 13.7931vh;
  height: 3.74812vh;
  border-radius: 0.89vh;
  border: none;
  background-color: #8DE5DE;
  font-size: 1.6491vh;
  font-weight: bold;
  color: #f8f8f8;
  cursor: pointer;
}

</style>

<template>
  <div class="messageBox">
    <div v-if="user === 'user'">
      <div class="userMessageBox">
        <div id="userMessage">
          <div id="textUserMessage">
            {{text}}
          </div>
          <div id="time">
              {{time}}
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="user === 'matcher'">
      <div class="matcherMessageBox">
        <div id="matcherMessage">
          <div id="textMatcherMessage">
            {{text}}
          </div>
          <div id="time">
              {{time}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'messageBox',
  props: {
    user: {
      type: String
    },
    text: {
      type: String
    },
    time: {
      type: String
    }
  }
}

</script>

<style scope>
  .messageBox {
    width: 100%;
  }
  .userMessageBox{
    padding-top:2.99850074963vh;
  }
  #userMessage {
    display: table;
    background-color: #E7E6E6;
    padding: 1.19940029985vh 1.79910044978vh 1.19940029985vh 1.79910044978vh;
    border-radius: 0.89955022488vh;
    font-size: 2.3988005997vh;
    max-width: 34.3328335832vh;
    word-wrap: break-word;
    margin-left: auto;
    margin-right: 1.79910044978vh;
    /* margin-top: 2.99850074963vh; */
  }
  .matcherMessageBox{
    padding-top:2.99850074963vh;
  }
  #matcherMessage {
    display: table;
    background-color: #C5FFFA;
    padding: 1.19940029985vh 1.79910044978vh 1.19940029985vh 1.79910044978vh;
    border-radius: 0.89955022488vh;
    font-size: 2.3988005997vh;
    max-width: 34.3328335832vh;
    word-wrap: break-word;
    margin-left: 1.79910044978vh;
    margin-right: auto;
    /* margin-top: 2.99850074963vh; */
  }

  #time {
    width: 3vh;
    font-size:1.22vh;
    margin-left: auto;
  }

</style>

<template>
  <div class="PostScreen">
    <div>
      <headerMessenger backButton=true msg="Create Post" />
    </div>
    <div id="postarea">
      <div>
        <img src="./assets/1.png" class="iconTopic1">
      </div>
      <div>
        <textarea v-model="textInput" rows="4" cols="50" class="textbox" placeholder="What's happenning"></textarea>
      </div>
    </div>
    <div id="buttonpost">
      <button @click="sendPost">Post</button>
    </div>
  </div>
</template>

<script>
import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'

export default {
  name: 'PostScreen',
  data () {
    return {
      textInput: '',
      isLoading: false
    }
  },
  components: {
    headerMessenger
  },
  props: {
    msg: String
  },
  mounted () {
    this.authValid()
  },
  methods: {
    authValid () {
      if (!localStorage.token) {
        this.$router.push({ path: '/login' })
        return 0
      }
    },
    sendPost () {
      this.isLoading = true
      fetch('https://kiite-webservice.herokuapp.com/timeline', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.token
        },
        body: JSON.stringify({
          username: localStorage.username,
          text: this.textInput
        })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.status === 200) {
            this.isLoading = false
            this.$router.push({ path: '/home' })
          } else {
            this.isLoading = false
            alert('Something went wrong. Please try again')
          }
        })
    }
  }
}
</script>
<style scope>
  .PostScreen {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #2FC4B2;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  button {
    border-radius: 0.89vh;
    border: none;
    background-color: #8DE5DE;
    font-size: 1.79vh;
    width: 18.441vh;
    height: 5.54723vh;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.949vh;
    line-height: 2.249vh;
    color: #f8f8f8;
  }

  .textbox {
    width: 36vh;
    height: 32vh;
    margin: auto;
    margin-left: 10vh;
    margin-top: 2.9985vh;
    border: none;
    background-color: #f8f8f8;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2.3988vh;
    line-height: 2.8486vh;
  }

  .iconTopic1 {
    position: absolute;
    width: 6.7466vh;
    height: 6.7466vh;
    margin: auto;
    margin-left: 2.2489vh;
    margin-top: 1.6492vh;
  }

  #postarea {
    margin: auto;
    font-size: 2.39vh;
    height: 37.3313vh;
    width: 47.6761vh;
    border-radius: 0.89vh;
    border: none;
    background-color: #f8f8f8;
    font-family: roboto;
  }

  #buttonpost {
    margin: auto;
    position: absolute;
    margin-left: 59.5%;
    margin-top: 2.6492vh;
  }
</style>

<template>
  <div class="LoginScreen">
    <div v-if="isLanding">
      <BeforeLogin></BeforeLogin>
    </div>
    <div v-else>
      <div class="KiiteHeader">
        <div class="circle"></div>
        <div class="head">
          <div class="Kiite">
            Kiite
          </div>
          <div class="text">
            I'm always here for you
          </div>
        </div>
      </div>
      <form class="LoginForm">
        <div class="inputBox">
          <img src="./assets/username.png" class="iconLogin">
          <input type="text" class="inputText" v-model="inputUsername" placeholder="Username" >
        </div>
        <div class="inputBox">
          <img src="./assets/password.png" class="iconLogin">
          <input type="password" class="inputText" v-model="inputPassword" placeholder="Password">
        </div>
        <div class="buttonLogin">
          <button :disabled='isLoading' class="button" @click="fetchAPI" >Login</button>
        </div>
      </form>
      <div class="buttonCreate">
        Don't have an account?<router-link to="/createaccout">Create</router-link>
      </div>
      <div class="footer">
        KMILT | <router-link to="/aboutus" class="aboutUs">About Us</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  setTimeout
} from 'timers'
import BeforeLogin from './components/BeforeLogin.vue'

export default {
  name: 'LoginScreen',
  components: {
    BeforeLogin
  },
  data: function () {
    return {
      isLanding: true,
      isLoading: false,
      inputUsername: '',
      inputPassword: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.isLanding = false
      this.authValid()
    }, 1000)
  },
  methods: {
    fetchAPI () {
      if (!this.formValid()) {
        alert('Please fill in all fields')
        return
      }
      this.isLoading = true
      fetch('https://kiite-webservice.herokuapp.com/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.inputUsername,
          password: this.inputPassword
        })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.status === 200) {
            this.isLoading = false
            localStorage.token = response.data.token
            localStorage.username = response.data.username
            localStorage.role = response.data.role
            this.$router.push({ path: '/messenger/type' })
          } else if (response.status === 401) {
            this.isLoading = false
            alert('Wrong username or password')
          } else {
            this.isLoading = false
            alert('Something went wrong. Please try again')
          }
        })
    },
    formValid () {
      if (this.inputUsername.trim().length === 0 || this.inputPassword.trim().length === 0) {
        return false
      } else return true
    },
    authValid () {
      if (localStorage.token) {
        this.$router.push({ path: '/messenger/type' })
      }
    }
  }
}
</script>

<style scoped>
  .LoginScreen {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #2FC4B2;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
  }

  .KiiteHeader {
    width: 100%;
    margin: auto;
    margin-top: 11.094452vh;
    display: inline-flex;
  }

  .circle {
    background-color: #f8f8f8;
    width: 18.290854vh;
    height: 18.290854vh;
    border-radius: 50%;
    position: absolute;
    right: 53.333vw;
    z-index: -1;
  }

  .head {
    margin: auto;
  }

  .Kiite {
    font-size: 11.9940vh;
    height: 11.9940vh;
  }

  .text {
    font-size: 1.799100vh;
    text-align: center;
    margin-top: 1.349325vh;
  }

  .LoginForm {
    margin: auto;
    margin-top: 9.595203vh;
  }

  .inputText {
    font-size: 1.7991vh;
    width: 37vh;
    height: 4.5vh;
    border: none;
    background-color: #f8f8f8;
    margin-left: 1.7991vh;
    margin-top: 0.5vh;
    outline: none;
    border: 0;
    box-shadow: none;
  }
  .inputText:focus{
  outline: none;
  border: 0;
  box-shadow: none;
}

  .inputBox {
    width: 44.67vh;
    height: 5.847vh;
    border-radius: 0.89vh;
    border: none;
    background-color: #f8f8f8;
    margin: auto;
    margin-top: 2.548725vh;
    display: flex;
  }

  .iconLogin {
    width: 3.448275vh;
    height: 3.448275vh;
    margin-left: 1.049475vh;
    margin-top: 1.349325vh;
  }

  .forgot {
    width: 44.67vh;
    margin: auto;
    margin-top: 1.949025vh;
    text-align: right;
    font-size: 1.49vh;
    color: #f8f8f8;
  }

  .buttonLogin {
    margin: auto;
    width: 22.18vh;
    height: 5.99vh;
    margin-top: 5.247376vh;
    cursor: pointer;
  }

  .button {
    margin: auto;
    width: 22.18vh;
    height: 5.99vh;
    border-radius: 0.89vh;
    border: none;
    background-color: #8DE5DE;
    font-size: 1.79vh;
    font-weight: bold;
    color: #f8f8f8;
    cursor: pointer;
  }

  .buttonCreate {
    font-size: 1.79vh;
    text-align: center;
    margin-top: 16vh;
    width: 23.988vh;
  }

  .footer {
    width: 49.025487vh;
    font-size: 1.79vh;
    margin: auto;
    margin-top: 8.395802vh;
    text-align: right;
  }

  .aboutUs {
    color: f8f8f8;
  }
</style>

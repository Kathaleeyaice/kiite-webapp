<template>
  <div class="CreateAccountScreen">
    <div class="headerCreate">
      Create account
    </div>
    <form class="CreateAccountForm">
      <div class="inputBox">
          <img src="./assets/username.png" class="iconCreateAccount">
          <input type="text" class="inputText" v-model="inputUsername" placeholder="Username">
        </div>
        <div class="inputBox">
          <img src="./assets/email.png" class="iconCreateAccount">
          <input type="email" class="inputText" v-model="inputEmail" placeholder="Email">
        </div>
        <div class="inputBox">
          <img src="./assets/password.png" class="iconCreateAccount">
          <input type="password" class="inputText" v-model="inputPassword" placeholder="Password">
        </div>
        <div class="inputBox">
          <img src="./assets/conf pass.png" class="iconCreateAccount">
          <input type="password" class="inputText" v-model="inputRePassword" placeholder="Comfirm Password">
        </div>
        <form id="form1" class="inputCheckBox" name="form1" method="post" action="">
          <input
            type="checkbox" v-model="toggleTerm" true-value="yes" false-value="no">I agree all statements in <router-link to="/termOfServiceScreen" class="aboutUs"> terms of service</router-link>
        </form>
    </form>
    <div class="buttonCreate">
      <button class="createContinue" v-on:click="createAccount" :disabled="this.isLoading">Create</button>
    </div>
    <div class="footer">
      KMILT | <router-link to="/aboutus" class="aboutUs">About Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateAccountScreen',
  data () {
    return {
      isLoading: false,
      inputUsername: '',
      inputPassword: '',
      inputRePassword: '',
      inputEmail: '',
      toggleTerm: false
    }
  },
  methods: {
    createAccount () {
      if (!this.formValid()) {
        return false
      }
      this.isLoading = true
      fetch('https://kiite-webservice.herokuapp.com/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.inputUsername,
          password: this.inputPassword,
          email: this.inputEmail
        })
      })
        .then(response => response.json())
        .then((response) => {
          if (response.status === 200) {
            this.isLoading = false
            alert('Account successfully created')
            this.$router.push({ path: '/login' })
          } else if (response.status === 401) {
            this.isLoading = false
            alert('Your username or/and email have been used')
          } else {
            this.isLoading = false
            alert('Something went wrong. Please try again')
          }
        })
    },
    formValid () {
      if (this.inputUsername.trim().length === 0 || this.inputPassword.trim().length === 0 || this.inputRePassword.trim().length === 0 || this.inputEmail.trim().length === 0) {
        alert('Please fill in all fields')
        return false
      }
      if (this.inputUsername.length < 6 || this.inputUsername.length > 30) {
        alert('The Username field must be at least 6 characters or less than 30 characters')
        return false
      }
      if (!this.emailValidate(this.inputEmail)) {
        alert('The format of the email address is not correct')
        return false
      }
      if (this.inputPassword !== this.inputRePassword) {
        alert('The Confirm Password does not match.')
        return false
      }
      if (this.inputPassword !== this.inputRePassword) {
        alert('The Confirm Password does not match.')
        return false
      }
      if (!this.toggleTerm) {
        alert('To use Kiite, you must accept the Terms of service')
        return false
      }
      return true
    },
    emailValidate (email) {
      /* eslint-disable-next-line */
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}

</script>

<style scope>
.CreateAccountScreen {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #2FC4B2;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
.headerCreate{
  font-size: 2.9985vh;
  font-weight: bold;
  text-align: center;
  margin-top: 22.03898vh;
}
.CreateAccountForm {
  margin: auto;
  margin-top: 4.1979vh;
}
.inputText {
  font-size: 1.7991vh;
  width: 37vh;
  height: 4.5vh;
  border: none;
  background-color:#f8f8f8;
  margin-left: 1.7991vh;
  margin-top: 0.5vh;
  outline: none;
    border: 0;
    box-shadow: none;
}
.inputBox {
  width: 44.67vh;
  height: 5.847vh;
  border-radius: 0.89vh;
  border: none;
  background-color:#f8f8f8;
  margin: auto;
  margin-top: 3.29835vh;
  display: flex;
}
.iconCreateAccount {
  width: 3.448275vh;
  height: 3.448275vh;
  margin-left: 1.049475vh;
  margin-top: 1.349325vh;
}
.inputCheckBox {
  width: 44.67vh;
  margin: auto;
  margin-top: 2.9985vh;
  font-size: 1.7991vh;
  display: flex;
}
.buttonCreate {
  margin: auto;
  width: 22.18vh;
  height: 5.99vh;
  margin-top: 5.24737631vh;
  cursor: pointer;
}
.createContinue {
  margin: auto;
  font-weight: bold;
  width: 22.18vh;
  height: 5.99vh;
  border-radius: 0.89vh;
  border: none;
  background-color: #8DE5DE;
  font-size: 1.79vh;
  color: #f8f8f8;
  cursor: pointer;
}
.footer {
  width: 49.025487vh;
  font-size: 1.79vh;
  margin: auto;
  margin-top: 15.442278vh;
  text-align: right;
}
.aboutUs {
  color: f8f8f8;
}
</style>

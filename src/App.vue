<template>
  <div id="app">
    <header>
      <img alt="Payment logo" class="logo-img" src="@/assets/online-payment.svg"/>

      <div class="wrapper">
        <nav>
          <router-link class="routerLink" tag="button" to="/">
            <img alt="Users" src="@/assets/user.svg" class="colored-img">Users
          </router-link>
          <router-link class="routerLink" to="/merchants">
            <img alt="Merchants" src="@/assets/merchant.svg" class="colored-img"/>Merchants
          </router-link>
          <router-link class="routerLink" to="/payments">
            <img alt="Payments" src="@/assets/payment.svg" class="colored-img"/>Payments
          </router-link>
        </nav>
      </div>
    </header>

    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: 'App',
  data() {
    return {
      settings: false
    }
  },
  mounted() {
    console.log("I am in mounted!!!")
    this.settings = true
  },
  setup() {
    console.log("I am in setup!!!")
  }
}
</script>

<style scoped>
@import './assets/styles/global.css';

.wrapper {
  display: inline-block;
  place-items: flex-start;
  flex-wrap: wrap;
}

.routerLink {
  text-decoration: none;
  color: #ffffff;
  margin-right: 10px;
  background-color: #559980;
  cursor: pointer;
  font-size: 42px;
}

.colored-img {
  background-color: #559980;
  width: 40px;
  height: 40px;
}

.logo-img {
  position: relative;
  top: -7px;
  width: 380px;
  height: 300px;
}

</style>

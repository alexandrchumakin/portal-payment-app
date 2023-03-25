<template>
  <div id="app">
    <header>
      <img alt="Payment logo" class="logo" height="200" src="@/assets/online-payment.svg" width="250"/>

      <div class="wrapper">
        <nav>
          <router-link class="routerLink" tag="button" to="/"><img alt="Users" height="40" src="@/assets/user.svg"
                                                                   width="40"/>Users
          </router-link>
          <router-link class="routerLink" to="/merchants"><img alt="Merchants" height="40" src="@/assets/merchant.svg"
                                                               width="40"/>Merchants
          </router-link>
          <router-link class="routerLink" to="/payments"><img alt="Payments" height="40" src="@/assets/payment.svg"
                                                              width="40"/>Payments
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

.logo {
  margin: 0 2rem 0 0;
}

.routerLink {
  text-decoration: none;
  color: #ffffff;
  margin-right: 10px;
  background-color: #559980;
  cursor: pointer;
  font-size: 20px;
}
</style>

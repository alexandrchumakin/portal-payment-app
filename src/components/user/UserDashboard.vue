<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateUser @createUser="userCreate($event)"/>
        </div>
        <div class="col-md-4">
          <DisplayUserBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()"/>
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Users v-if="users.length > 0" :users="users"/>
    </div>
  </div>
</template>

<script>
import CreateUser from './CreateUser.vue'
import DisplayUserBoard from './DisplayUserBoard.vue'
import Users from './Users.vue'
import { createUser, getAllUsers } from '@/services/UserService'

export default {
  name: 'UserDashboard',
  components: {
    CreateUser,
    DisplayUserBoard,
    Users
  },
  data() {
    return {
      users: {},
      numberOfUsers: 0
    }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = Object.entries(response).map(([key, value]) => Object.assign(value, { 'userId': key }))
        console.log(`Users len: ${Object.keys(this.users).length}`)
        this.numberOfUsers = Object.keys(this.users).length
      })
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted() {
    this.getAllUsers();
  }
}
</script>
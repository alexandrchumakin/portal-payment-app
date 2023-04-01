<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-border">
      <thead>
      <tr>
        <th class="center">User Id</th>
        <th class="center">Account Number</th>
        <th class="center">Name</th>
        <th class="center">Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.userId">
        <td>{{ item.userId }}
          <div class="align-right">
            <button class="btn btn-success" @click="copyUserId(item.userId)">Copy</button>
            <button class="btn btn-success" @click="deleteUser(item.userId)">Delete</button>
          </div>
        </td>
        <td>{{ item.accountNumber }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.phone }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { deleteUser } from "@/services/UserService";

export default {
  name: 'Users',
  props: ['users'],
  methods: {
    copyUserId(value) {
      localStorage.setItem('userId', value)
    },
    deleteUser(userId) {
      console.log(`Deleting user with ID ${userId}`)
      deleteUser(userId).then(status => status === 200).then(() => window.location.reload());
    }
  }
}
</script>
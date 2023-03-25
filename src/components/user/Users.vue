<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>User Id</th>
        <th>Account Number</th>
        <th>Name</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.userId">
        <td>{{ item.userId }}
          <button @click="copyUserId(item.userId)">copy</button>
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

export default {
  name: 'Users',
  props: ['users'],
  methods: {
    copyUserId(value) {
      localStorage.setItem('userId', value)
    }
  }
}
</script>
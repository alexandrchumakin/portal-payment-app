<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>Payment Id</th>
        <th>Amount</th>
        <th>Merchant account</th>
        <th>User account</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in payments" :key="item.paymentId">
        <td>{{ item.paymentId }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.merchantAccount }}</td>
        <td>{{ item.userAccount }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Payments',
  props: ['payments']
}
</script>
<template>
  <div class="container">
    <h2>Users</h2>
    <table class="table table-border">
      <thead>
      <tr>
        <th class="center">Payment Id</th>
        <th class="center">Amount</th>
        <th class="center">Merchant account</th>
        <th class="center">User account</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in payments" :key="item.paymentId">
        <td>{{ item.paymentId }}
          <div class="align-right">
            <button class="btn btn-success" @click="deletePayment(item.paymentId)">Delete</button>
          </div>
        </td>
        <td>{{ item.amount }}</td>
        <td>{{ item.merchantAccount }}</td>
        <td>{{ item.userAccount }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


import { deletePayment } from "@/services/PaymentService";

export default {
  name: 'Payments',
  props: ['payments'],
  methods: {
    deletePayment(paymentId) {
      console.log(`Deleting payment with ID ${paymentId}`)
      deletePayment(paymentId).then(status => status === 200).then(() => window.location.reload());
    }
  }
}
</script>
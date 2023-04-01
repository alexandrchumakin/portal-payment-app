<template>
  <div class="container">
    <h2>Merchants</h2>
    <table class="table table-border">
      <thead>
      <tr>
        <th class="center">Merchant Id</th>
        <th class="center">Account Number</th>
        <th class="center">Address</th>
        <th class="center">Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in merchants" :key="item.merchantId">
        <td>{{ item.merchantId }}
          <div class="align-right">
            <button class="btn btn-success" @click="copyMerchantId(item.merchantId)">Copy</button>
            <button class="btn btn-success" @click="deleteMerchant(item.merchantId)">Delete</button>
          </div>
        </td>
        <td>{{ item.accountNumber }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { deleteMerchant } from "@/services/MerchantService";

export default {
  name: 'Merchants',
  props: ['merchants'],
  methods: {
    copyMerchantId(value) {
      localStorage.setItem('merchantId', value)
    },
    deleteMerchant(merchantId) {
      console.log(`Deleting merchant with ID ${merchantId}`)
      deleteMerchant(merchantId).then(status => status === 200).then(() => window.location.reload());
    }
  }
}
</script>
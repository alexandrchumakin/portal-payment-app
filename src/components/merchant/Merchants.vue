<template>
  <div class="container">
    <h2>Merchants</h2>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>Merchant Id</th>
        <th>Account Number</th>
        <th>Address</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in merchants" :key="item.merchantId">
        <td>{{ item.merchantId }}
          <button @click="copyMerchantId(item.merchantId)">copy</button>
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

export default {
  name: 'Merchants',
  props: ['merchants'],
  methods: {
    copyMerchantId(value) {
      localStorage.setItem('merchantId', value)
    }
  }
}
</script>
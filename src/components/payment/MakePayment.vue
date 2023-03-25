<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Make payment</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-12">
              <label>User ID</label>
              <input id="userId" v-model="userId" aria-describedby="emailHelp" class="form-control" name="userId"
                     placeholder="User ID" type="text"/>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label>Merchant ID</label>
              <input id="merchantId" v-model="merchantId" class="form-control" name="merchantId" placeholder="Merchant ID"
                     type="text"/>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label>Amount</label>
              <input id="amount" v-model="amount" aria-describedby="emailHelp" class="form-control" name="amount"
                     placeholder="Amount" type="text"/>
            </div>
          </div>
          <button class="btn btn-success" type="button" @click='makePayment()'>Pay</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakePayment',
  data() {
    return {
      userId: localStorage.getItem('userId') !== null ? localStorage.getItem('userId') : '',
      merchantId: localStorage.getItem('merchantId') !== null ? localStorage.getItem('merchantId') : '',
      amount: '',
    }
  },
  methods: {
    makePayment() {
      console.log(`Making payment from user ${this.userId} to merchant ${this.merchantId}`)
      const payload = {
        userId: this.userId,
        merchantId: this.merchantId,
        amount: this.amount
      }
      this.$emit('makePayment', payload)
      this.clearForm();
    },
    clearForm() {
      this.userId = '';
      this.merchantId = '';
      this.amount = '';
    }
  }
}
</script>
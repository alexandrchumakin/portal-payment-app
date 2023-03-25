<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Create Merchant</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input id="name" v-model="name" aria-describedby="emailHelp" class="form-control" name="name" placeholder="Name"
                     type="text"/>
            </div>
            <div class="form-group col-md-6">
              <label>Address</label>
              <input id="phone" v-model="address" class="form-control" name="phone" placeholder="Address" type="text"/>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label>Account number</label>
              <input id="accountNumber" v-model="accountNumber" aria-describedby="emailHelp" class="form-control" name="accountNumber"
                     placeholder="Account number" type="text"/>
            </div>
          </div>
          <button class="btn btn-success" type="button" @click='createMerchant()'>Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateMerchant',
  data() {
    return {
      name: '',
      address: '',
      accountNumber: ''
    }
  },
  methods: {
    createMerchant() {
      console.log(`Creating merchant ${this.name}`)
      const payload = {
        name: this.name,
        address: this.address,
        accountNumber: this.accountNumber
      }
      this.$emit('createMerchant', payload)
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.address = "";
      this.accountNumber = "";
    }
  }
}
</script>
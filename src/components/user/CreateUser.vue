<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 mrgnbtm">
        <h2>Create User</h2>
        <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label>Name</label>
              <input id="name" v-model="name" aria-describedby="emailHelp" class="form-control" name="name" placeholder="Name"
                     type="text"/>
            </div>
            <div class="form-group col-md-6">
              <label>Phone</label>
              <input id="phone" v-model="phone" class="form-control" name="phone" placeholder="Phone" type="text"/>
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-12">
              <label>Account number</label>
              <input id="accountNumber" v-model="accountNumber" aria-describedby="emailHelp" class="form-control" name="accountNumber"
                     placeholder="Account number" type="text"/>
            </div>
          </div>
          <button class="btn btn-success" type="button" @click='createUser()'>Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateUser',
  data() {
    return {
      name: '',
      phone: '',
      accountNumber: ''
    }
  },
  methods: {
    createUser() {
      console.log(`Creating user ${this.name}`)
      const payload = {
        name: this.name,
        phone: this.phone,
        accountNumber: this.accountNumber
      }
      this.$emit('createUser', payload)
      this.clearForm();
    },
    clearForm() {
      this.name = "";
      this.phone = "";
      this.accountNumber = "";
    }
  }
}
</script>
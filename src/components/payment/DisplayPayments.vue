<template>
  <div class="display-board">
    <h2 class="header-number">{{ numberOfPayments }} payments made</h2>
    <div class="btn">
      <button class="btn btn-success center" type="button" @click='getAllPayments()'>Show all payments</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayPayments',
  props: ['numberOfPayments'],
  methods: {
    getAllPayments() {
      this.$emit('getAllPayments')
    }
  }
}
</script>
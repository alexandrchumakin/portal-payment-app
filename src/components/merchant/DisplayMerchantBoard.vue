<template>
  <div class="display-board">
    <h2 class="header-number">{{ numberOfMerchants }} merchants created</h2>
    <div class="btn">
      <button class="btn btn-success center" type="button" @click='getAllMerchants()'>Show all merchants</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayMerchantBoard',
  props: ['numberOfMerchants', 'selectedMerchant'],
  methods: {
    getAllMerchants() {
      this.$emit('getAllMerchants')
    }
  }
}
</script>
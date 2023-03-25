<template>
  <div class="display-board">
    <h2 class="header-number">{{ numberOfUsers }} users created</h2>
    <div class="btn">
      <button class="btn btn-success center" type="button" @click='getAllUsers()'>Show all users</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayUserBoard',
  props: ['numberOfUsers'],
  methods: {
    getAllUsers() {
      this.$emit('getAllUsers')
    }
  }
}
</script>
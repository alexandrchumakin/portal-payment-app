<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <CreateMerchant @createMerchant="merchantCreate($event)"/>
        </div>
        <div class="col-md-4">
          <DisplayMerchantBoard :numberOfMerchants="numberOfMerchants" @getAllMerchants="getAllMerchants()"/>
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Merchants v-if="merchants.length > 0" :merchants="merchants"/>
    </div>
  </div>
</template>

<script>
import CreateMerchant from './CreateMerchant.vue'
import DisplayMerchantBoard from './DisplayMerchantBoard.vue'
import Merchants from './Merchants.vue'
import { createMerchant, getAllMerchants } from '@/services/MerchantService'

export default {
  name: 'MerchantDashboard',
  components: {
    CreateMerchant,
    DisplayMerchantBoard,
    Merchants
  },
  data() {
    return {
      merchants: {},
      numberOfMerchants: 0
    }
  },
  methods: {
    getAllMerchants() {
      getAllMerchants().then(response => {
        console.log(response)
        this.merchants = Object.entries(response).map(([key, value]) => Object.assign(value, { 'merchantId': key }))
        console.log(`Merchants len: ${Object.keys(this.merchants).length}`)
        this.numberOfMerchants = Object.keys(this.merchants).length
      })
    },
    merchantCreate(data) {
      console.log('data:::', data)
      createMerchant(data).then(response => {
        console.log(response);
        this.getAllMerchants();
      });
    }
  },
  mounted() {
    this.getAllMerchants();
  }
}
</script>
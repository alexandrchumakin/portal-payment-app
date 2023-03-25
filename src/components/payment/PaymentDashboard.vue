<template>
  <div class="hello">
    <div class="container mrgnbtm">
      <div class="row">
        <div class="col-md-8">
          <MakePayment @makePayment="makePayment($event)"/>
        </div>
        <div class="col-md-4">
          <DisplayPayments :numberOfPayments="numberOfPayments" @getAllPayments="getAllPayments()"/>
        </div>
      </div>
    </div>
    <div class="row mrgnbtm">
      <Payments v-if="payments.length > 0" :payments="payments"/>
    </div>
  </div>
</template>

<script>
import MakePayment from "@/components/payment/MakePayment";
import Payments from "@/components/payment/Payments";
import DisplayPayments from "@/components/payment/DisplayPayments";
import { getAllPayments, makePayment } from '@/services/PaymentService'

export default {
  name: 'PaymentDashboard',
  components: {
    MakePayment,
    DisplayPayments,
    Payments
  },
  data() {
    return {
      payments: {},
      numberOfPayments: 0
    }
  },
  methods: {
    getAllPayments() {
      getAllPayments().then(response => {
        console.log(response)
        this.payments = Object.entries(response).map(([key, value]) => Object.assign(value, { 'paymentId': key }))
        console.log(`Payments len: ${Object.keys(this.payments).length}`)
        this.numberOfPayments = Object.keys(this.payments).length
      })
    },
    makePayment(data) {
      console.log('data:::', data)
      makePayment(data).then(response => {
        console.log(response);
        this.getAllPayments();
      });
    }
  },
  mounted() {
    this.getAllPayments();
  }
}
</script>
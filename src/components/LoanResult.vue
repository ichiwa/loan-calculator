<template>
  <div class="loan-result">
    <h1>{{ title }}</h1>
    <h2>支払い総額 : <span>{{ getTotalPayment().toLocaleString() }}</span><small> 円 </small></h2>
    <h3>元金 : <span>{{ getTotalPrincipal().toLocaleString() }}</span><small> 円 </small></h3>
    <h3>金利合計 : <span>{{ getTotalInterestPayment().toLocaleString() }}</span><small> 円 </small></h3>
  </div>
</template>

<script>
export default {
  name: 'LoanResult',
  data() {
    return {
      title: 'Loan Result',
    };
  },
  methods: {
    getTotalPayment() {
      return this.$store.getters.getTotalPayment();
    },
    getTotalPrincipal() {
      return this.$store.getters.getTotalPrincipal();
    },
    getTotalInterestPayment() {
      return this.$store.getters.getTotalInterestPayment();
    },
  },
};
</script>

<style scoped>
.loan-result {
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
}
</style>

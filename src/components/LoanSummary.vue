<template>
  <div class="component">
    <h2>{{ title }}</h2>
    <h3>支払い総額 : <span>{{ getTotalPayment() | numberFormat }}</span><small> 円 </small></h3>
    <h4>頭金 : <span>{{ initialDeposit | numberFormat }}</span><small> 円 </small></h4>
    <h4>元金 : <span>{{ getTotalPrincipal() | numberFormat }}</span><small> 円 </small></h4>
    <h4>金利合計 : <span>{{ getTotalInterestPayment() | numberFormat }}</span><small> 円 </small></h4>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoanResult',
  data() {
    return {
      title: 'サマリ',
    };
  },
  computed: mapState({
    initialDeposit: state => state.params.initialDeposit,
  }),
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

<style scoped lang="scss">
.component {
  height: auto;
  padding: 10px 10px 10px 20px;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .component {
    border-top: 3px solid #3f3f3f;
    width: 100%;
  }
}
</style>

<template>
  <div class="container">
    <div>
      <h2>{{ title }}</h2>
      <h4 class="text-right">頭金 :
        <span>{{ initialDeposit | numberFormat }}</span><small> 円 </small>
      </h4>
      <h4 class="text-right">諸経費 :
        <span>{{ charges | numberFormat }}</span><small> 円 </small>
      </h4>
      <h4 class="text-right">元金 :
        <span>{{ getTotalPrincipal() | numberFormat }}</span><small> 円 </small>
      </h4>
      <h4 class="text-right">金利合計 :
        <span>{{ getTotalInterestPayment() | numberFormat }}</span><small> 円 </small>
      </h4>
      <h3 class="text-right">支払い総額 :
        <span class="total-payment">
          <span>{{ getTotalPayment() | numberFormat }}</span><small> 円 </small>
        </span>
      </h3>
    </div>
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
    charges: state => state.params.charges,
  }),
  methods: {
    getTotalPayment() {
      let val = 0;
      val += this.initialDeposit;
      val += this.charges;
      val += this.$store.getters.getTotalPrincipal();
      val += this.$store.getters.getTotalInterestPayment();
      return val;
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
.container {
  height: auto;
  padding: 10px 10px 10px 20px;
  div {
    width: 92%;
  }

  h3,
  h4 {
    font-weight: initial;
  }
}
@media screen and (max-width: 1024px) {
  .container {
    border-top: 3px solid #3f3f3f;
  }
}
.total-payment {
  border-bottom: 3px solid #3f3f3f;
  font-weight: bold;
}
</style>

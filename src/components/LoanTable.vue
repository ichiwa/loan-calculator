<template>
  <div class="loan-table">
    <h1>{{ title }}</h1>
    <table>
      <thead>
        <tr>
          <th>回数</th>
          <th>元金</th>
          <th>金利</th>
          <th>月々支払合計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in getTotalPeriod()" :key="index">
          <td>{{ index }}</td>
          <td>{{ getMonthlyPrincipal(index).toLocaleString() }}円</td>
          <td>{{ getMonthlyInterest(index).toLocaleString() }}円</td>
          <td>{{ getMonthlyPayment(index).toLocaleString() }}円</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LoanTable',
  data() {
    return {
      title: 'Loan Table',
    };
  },
  computed: {
    ...mapGetters([
      'getTotalPeriod',
      'getMonthlyPayment',
      'getMonthlyPrincipal',
      'getMonthlyInterest',
    ]),
  },
};
</script>

<style scoped>
.loan-table {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>

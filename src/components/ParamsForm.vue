<template>
<div>
  <form v-on:submit.prevent="onUpdate">
    <div class="text-center">
      <label for="amount">借り入れ金額</label>
      <vue-numeric currency="¥" separator="," v-model="params.amount"></vue-numeric>
    </div>
    <div class="text-center">
      <label for="initialDeposit">頭金</label>
      <vue-numeric currency="¥" separator="," v-model="params.initialDeposit"></vue-numeric>
    </div>
    <div class="text-center">
      <label for="charges">諸費用</label>
      <vue-numeric currency="¥" separator="," v-model="params.charges"></vue-numeric>
    </div>
    <div class="text-center">
      <label for="firstAnnualInterestRate">第一金利(%)</label>
      <vue-numeric
        v-bind:precision="2"
        v-model="params.firstAnnualInterestRate"
      ></vue-numeric>
    </div>
    <div class="text-center">
      <label for="firstPeriod">第一金利期間(年)</label>
      <vue-numeric separator="," v-model="params.firstPeriod"></vue-numeric>
    </div>
    <div class="text-center">
      <label for="secondAnnualInterestRate">第二金利(%)</label>
      <vue-numeric
        v-bind:precision="2"
        v-model="params.secondAnnualInterestRate"
      ></vue-numeric>
    </div>
    <div class="text-center">
      <label for="secondPeriod">第二金利期間(年)</label>
      <vue-numeric separator="," v-model="params.secondPeriod"></vue-numeric>
    </div>
    <div class="text-center">
      <button type="submit">更新</button>
    </div>
  </form>
</div>
</template>

<script>
import { mapState } from 'vuex';
import VueNumeric from 'vue-numeric';
import _ from 'lodash';
import { UPDATE_PARAMS } from '@/constants/actionTypes';

export default {
  name: 'ParamsForm',
  data() {
    let params = Object.assign({}, this.$store.state.params);
    params = _.mapValues(params, val => val.toLocaleString());
    return { title: 'Loan Calculator', params };
  },
  methods: {
    onUpdate() {
      this.$store.commit(UPDATE_PARAMS, this.$data.params);
    },
  },
  components: {
    VueNumeric,
  },
};
</script>

<style scoped>
</style>

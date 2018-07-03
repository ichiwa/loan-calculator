<template>
<div>
  <form v-on:submit.prevent="onUpdate">
    <div class="form-control clearfix">
      <label for="amount" class="left">借り入れ金額</label>
      <vue-numeric class="right" currency="¥" separator="," v-model="params.amount"></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="initialDeposit" class="left">頭金</label>
      <vue-numeric
        class="right"
        currency="¥"
        separator=","
        v-model="params.initialDeposit"
      ></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="charges" class="left">諸費用</label>
      <vue-numeric class="right" currency="¥" separator="," v-model="params.charges"></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="firstAnnualInterestRate" class="left">第一金利(%)</label>
      <vue-numeric
        v-bind:precision="2"
        v-model="params.firstAnnualInterestRate"
        class="right"
      ></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="firstPeriod" class="left">第一金利期間(年)</label>
      <vue-numeric class="right" separator="," v-model="params.firstPeriod"></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="secondAnnualInterestRate" class="left">第二金利(%)</label>
      <vue-numeric
        v-bind:precision="2"
        v-model="params.secondAnnualInterestRate"
        class="right"
      ></vue-numeric>
    </div>
    <div class="form-control clearfix">
      <label for="secondPeriod" class="left">第二金利期間(年)</label>
      <vue-numeric class="right" separator="," v-model="params.secondPeriod"></vue-numeric>
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

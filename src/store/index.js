import Vue from 'vue';
import Vuex from 'vuex';
import financial from 'financial';
import _ from 'lodash';
import { UPDATE_PARAMS } from '@/constants/actionTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    params: {
      amount: 57600000,
      initialDeposit: 5800000,
      charges: 1451748,
      firstAnnualInterestRate: 1.1,
      firstPeriod: 5,
      secondAnnualInterestRate: 1.35,
      secondPeriod: 30,
    },
  },
  getters: {
    getFirstPeriod: ({ params }) => () => {
      return params.firstPeriod * 12;
    },
    getSecondPeriod: ({ params }) => () => {
      return params.secondPeriod * 12;
    },
    getTotalPeriod: ({ params }, getters) => () => {
      const first = getters.getFirstPeriod();
      const second = getters.getSecondPeriod();
      return first + second;
    },
    getAmount: ({ params }) => () => {
      return params.amount - params.initialDeposit;
    },
    getFirstPrincipal: ({ params }, getters) => () => {
      let total = 0;
      const period = getters.getFirstPeriod();
      for (let i = 0; i < period; i++) {
        total += getters.getMonthlyPrincipal(i + 1);
      }
      return total;
    },
    getCurrentAmount: ({ params }, getters) => number => {
      let currentAmount = getters.getAmount();
      if (number > getters.getFirstPeriod()) {
        currentAmount -= getters.getFirstPrincipal();
      }
      return currentAmount;
    },
    getFirstRate: ({ params }) => () => {
      return params.firstAnnualInterestRate / 12 / 100;
    },
    getSecondRate: ({ params }) => () => {
      return params.secondAnnualInterestRate / 12 / 100;
    },
    getMonthlyPayment: ({ params }, getters) => number => {
      let rate = getters.getFirstRate();
      let period = getters.getTotalPeriod();
      const amount = getters.getCurrentAmount(number);
      if (number > params.firstPeriod * 12) {
        rate = getters.getSecondRate();
        period = getters.getTotalPeriod() - getters.getFirstPeriod();
      }
      let val = financial.PMT(rate, period, amount);
      val = Math.round(Math.abs(val));
      if (number === 1) {
        return val + params.initialDeposit + params.charges;
      }
      return val;
    },
    getMonthlyPrincipal: ({ params }, getters) => number => {
      const amount = getters.getCurrentAmount(number);
      let rate = getters.getFirstRate();
      let period = getters.getTotalPeriod();
      let currentNumber = number;
      if (number > params.firstPeriod * 12) {
        rate = getters.getSecondRate();
        period -= getters.getFirstPeriod();
        currentNumber -= getters.getFirstPeriod();
      }
      const val = financial.PPMT(rate, currentNumber, period, amount);
      return Math.round(Math.abs(val));
    },
    getMonthlyInterest: ({ params }, getters) => number => {
      const amount = getters.getCurrentAmount(number);
      let rate = getters.getFirstRate();
      let period = getters.getTotalPeriod();
      let currentNumber = number;
      if (number > params.firstPeriod * 12) {
        rate = getters.getSecondRate();
        period -= getters.getFirstPeriod();
        currentNumber -= getters.getFirstPeriod();
      }
      const val = financial.IPMT(rate, currentNumber, period, amount);
      return Math.round(Math.abs(val));
    },
    getTotalPayment: ({ params }, getters) => () => {
      let total = 0;
      const totalPeriod = getters.getTotalPeriod();
      for (let i = 0; i < totalPeriod; i++) {
        total += getters.getMonthlyPayment(i + 1);
      }
      return total;
    },
    getTotalPrincipal: ({ params }, getters) => () => {
      return params.amount - params.initialDeposit;
    },
    getTotalInterestPayment: ({ params }, getters) => () => {
      let total = 0;
      const totalPeriod = getters.getTotalPeriod();
      for (let i = 0; i < totalPeriod; i++) {
        total += getters.getMonthlyInterest(i + 1);
      }
      return total;
    },
  },
  mutations: {
    [UPDATE_PARAMS]: (state, params) => {
      const convertNumber = value => _.toNumber(value.replace(/,/g, ''));
      state.params = {
        amount: _.toNumber(params.amount),
        initialDeposit: _.toNumber(params.initialDeposit),
        charges: _.toNumber(params.charges),
        firstAnnualInterestRate: _.toNumber(params.firstAnnualInterestRate),
        firstPeriod: _.toNumber(params.firstPeriod),
        secondAnnualInterestRate: _.toNumber(params.secondAnnualInterestRate),
        secondPeriod: _.toNumber(params.secondPeriod),
      };
    },
  },
});

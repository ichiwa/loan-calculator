<template>
  <div class="component">
    <h2 class="title">{{ title }}<span class="description">{{ description }}</span></h2>
    <table class="loan-table">
      <thead>
        <tr>
          <th class="year">年</th>
          <th class="count">回数</th>
          <th class="principal">元金</th>
          <th class="interest">金利</th>
          <th class="payment">月々支払合計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in getTotalPeriod()" :key="index">
          <td
            v-if="((index-1) % 12) == 0 || index == 1"
            class="year"
            rowspan="12"
          >
            {{ Math.floor(index / 12) + 1 }}
          </td>
          <td class="count">{{ index }}</td>
          <td class="principal">{{ getMonthlyPrincipal(index) | numberFormat }}円</td>
          <td class="interest">{{ getMonthlyInterest(index) | numberFormat }}円</td>
          <td class="payment">{{ getMonthlyPayment(index) | numberFormat }}円</td>
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
      title: '試算表',
      description: '初回のみ頭金と諸費用が含まれています',
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

<style scoped lang="scss">
.title {
  padding-left: 20px;
}
.component {
  border-top: 3px solid #3f3f3f;
  height: 400px;
  width: 100%;
}
.description {
  font-size: 0.85rem;
  font-weight: initial;
  margin-left: 20px;
}
.loan-table {
  border-collapse: collapse;
  margin-left: 10px;
  margin-top: 8px;
  position: relative;
  table-layout: fixed;
  width: auto;
  thead,
  tbody {
    display: block;
    width: 100%;
  }
  thead {
    border: 2px solid #3f3f3f;
  }
  thead tr {
    text-align: center;
  }
  tbody {
    border: 2px solid #3f3f3f;
    border-top: 0;
    max-height: 30vh;
    overflow-y: scroll;
    width: 100%;
  }
  tbody tr {
    text-align: center;
  }
  tr:nth-child(even) td {
    background: #e3e3e3;
  }
  th,
  td {
    padding: 14px;
  }
  th.year {
    width: 5vw;
  }
  td.year {
    border-right: 1px solid #3f3f3f;
    border-top: 1px solid #3f3f3f;
    font-size: 1.1rem;
    width: 5vw;
  }
  tr:nth-child(1) > td.year {
    border-top: 0;
  }
  .count {
    width: 5vw;
  }
  .principal {
    width: 14vw;
  }
  .interest {
    width: 14vw;
  }
  .payment {
    width: 14vw;
  }
}
@media screen and (max-width: 1024px) {
  .component {
    font-size: 0.8rem;
    width: 100%;
  }
  .loan-table {
    margin-left: 0;
    tbody {
      max-height: 39vh;
    }
    th,
    td {
      padding: 6px;
    }
    .count {
      width: 10vw;
    }
    .principal {
      width: 20vw;
    }
    .interest {
      width: 20vw;
    }
    .payment {
      width: 26vw;
    }
  }
}
@media screen and (max-width: 320px) {
  .component {
    padding: 0;
  }
  .loan-table {
    tbody {
      max-height: 43vh;
    }
  }
}
@media screen and (min-height: 824px) and (max-height: 1024px) {
  .loan-table {
    tbody {
      max-height: 40vh;
    }
  }
}
@media screen and (min-height: 1024px) {
  .loan-table {
    tbody {
      max-height: 48vh;
    }
  }
}
</style>

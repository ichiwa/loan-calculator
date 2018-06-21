<template>
  <div class="component">
    <h2>{{ title }}</h2>
    <table class="loan-table">
      <thead>
        <tr>
          <th class="count">回数</th>
          <th class="principal">元金</th>
          <th class="interest">金利</th>
          <th class="payment">月々支払合計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in getTotalPeriod()" :key="index">
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
.component {
  border-top: 3px solid #3f3f3f;
  height: auto;
  padding: 10px 10px 10px 20px;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .component {
    width: 100%;
  }
}
.loan-table {
  border-collapse: collapse;
  position: relative;
  table-layout: fixed;
  width: auto;
  thead, tbody {
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
    max-height: 35vh;
    overflow-y: scroll;
    width: 100%;
  }
  tbody tr {
    text-align: center;
  }
  tr:nth-child(even) td {
    background: #e3e3e3;
  }
  th, td {
    padding: 14px;
  }
  .count {
    width: 10vw;
  }
  .principal {
    width: 15vw;
  }
  .interest {
    width: 15vw;
  }
  .payment {
    width: 15vw;
  }
}
@media screen and (max-width: 1024px) {
  .loan-table {
    margin-left: -1%;
    tbody {
      max-height: 40vh;
    }
    th, td {
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

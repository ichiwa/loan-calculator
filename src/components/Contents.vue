<template>
  <div class="contents">
    <LoanResult />
    <LoanTable />
  </div>
</template>

<script>
import LoanResult from '@/components/LoanResult';
import LoanTable from '@/components/LoanTable';

export default {
  name: 'Contents',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    LoanResult,
    LoanTable,
  },
};
</script>

<style scoped>
.contents {
  width: 560px;
  background-color: #fff;
  float: left;
  padding: 15px;
}
</style>

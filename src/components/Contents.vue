<template>
  <div class="contents">
    <LoanSummary />
    <LoanTable />
  </div>
</template>

<script>
import LoanSummary from '@/components/LoanSummary';
import LoanTable from '@/components/LoanTable';

export default {
  name: 'Contents',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: {
    LoanSummary,
    LoanTable,
  },
};
</script>

<style scoped lang="scss">
.contents {
  background-color: #fff;
  border-left: 3px solid #3f3f3f;
  float: left;
  height: 100vh;
  width: 67%;
}
@media screen and (max-width: 1024px) {
  .contents {
    border-left: 0;
    height: auto;
    margin-top: 10px;
    width: 100%;
  }
}
.contents:after {
  clear: both;
  content: "";
  display: block;
}
</style>

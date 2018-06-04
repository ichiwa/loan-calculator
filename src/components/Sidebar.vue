<template>
<div class="sidebar">
  <h1>{{ title }}</h1>
  <ParamsForm/>
</div>
</template>

<script>
import ParamsForm from '@/components/ParamsForm';

export default {
  name: 'Sidebar',
  data() {
    return {
      title: 'Loan Calculator',
    };
  },
  components: { ParamsForm },
};
</script>

<style scoped>
.sidebar {
  border: 1px solid #ccc;
  float: left;
  margin: 15px 0 15px 15px;
  padding: 15px;
  width: 240px;
}
</style>

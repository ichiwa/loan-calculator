<template>
<div class="sidebar">
  <ParamsForm/>
</div>
</template>

<script>
import ParamsForm from '@/components/ParamsForm';

export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
  components: { ParamsForm },
};
</script>

<style scoped lang="scss">
.sidebar {
  float: left;
  height: 85%;
  padding: 15px;
  width: 30%;
}
@media screen and (max-width: 1024px) {
  .sidebar {
    padding: 5px;
    width: 100%;
  }
}
</style>

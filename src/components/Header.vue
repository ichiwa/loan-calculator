<template>
  <header class="site-title">
    <h1 class="site-title-header">{{ title }}</h1>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      title: 'ローン計算機',
    };
  },
};
</script>

<style scoped lang="scss">
.site-title {
  border-bottom: 3px solid #3f3f3f;
  height: 6%;
  margin: 0;
  width: 100%;
}
.site-title-header {
  padding-left: 20px;
}
</style>
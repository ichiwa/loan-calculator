<template>
  <footer>
    <div class="component clearfix">
      <div class="left">{{ owner }}</div>
      <a :href="github" class="right">source code</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      owner: 'Developer Alone 2018',
      github: 'https://github.com/ichiwa/loan-calculator',
    };
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: #fff;
  border-top: 3px solid #3f3f3f;
  bottom: 0;
  height: 48px;
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  footer {
    position: initial;
  }
}
.component {
  padding: 14px;
  width: auto;
}
</style>

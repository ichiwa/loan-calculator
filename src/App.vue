<template>
  <div id="app">
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';
import '@/assets/style/global.scss';
import Sidebar from '@/components/Sidebar';

export default {
  components: { Sidebar },
  name: 'App',
};
</script>

<style>
body {
  font-family: 'Sawarabi Mincho', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  height: 100%;
  margin: 0 auto;
  width: 980px;
}
#app:after {
  clear: both;
  content: '';
  display: block;
}
</style>

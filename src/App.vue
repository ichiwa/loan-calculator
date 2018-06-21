<template>
  <div class="main">
    <div id="app" class="app">
      <Header />
      <Sidebar />
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import 'normalize.css';
import '@/assets/style/global.scss';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default {
  components: { Header, Sidebar, Footer },
  name: 'App',
  data() {
    return {
    };
  },
};
</script>

<style>
html, body {
  font-family: "Sawarabi Gothic", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
@media screen and (max-width: 1024px) {
  html, body {
    overflow: initial;
  }
}
</style>

<style scoped lang="scss">
.app {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .app {
    height: auto;
  }
}
.app:after {
  clear: both;
  content: "";
  display: block;
}
</style>

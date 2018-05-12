<template>
  <div id="app">
    <!-- <div class="progress" :class="{active: start, end: end}">
      <div class="rotate-loading"></div>
      <div class="progress-forward"></div>
    </div> -->
    <div class="go-top user-select-none" @click="goTop">
      <p>返</p>
      <p>回</p>
      <p>头</p>
      <p>部</p>
    </div>
    <div class="router-view">
      <Header />
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/
</style>











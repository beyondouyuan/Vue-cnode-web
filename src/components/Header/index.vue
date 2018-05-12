<template>
  <header class="header">
    <div class="header-wrapper">
      <router-link to="/" class="logo user-select">
        <img src="http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" />
      </router-link>
      <nav class="navigation">
        <router-link to="/">首页</router-link>
        <router-link to="/message">未读信息</router-link>
        <router-link to="/getstart">新手入门</router-link>
        <router-link to="/api">API</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/setting">设置</router-link>
        <router-link to="/login">登陆</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    computed: {

    },
    methods: {
      logout() {
        console.log('logout')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/_variable.scss';
  .header {
    position: relative;
    z-index: 10;
    padding: 10px 10px 15px 0;
    background-color: #444444;
    .header-wrapper {
      width: $width;
      margin: 0 auto;
      overflow: hidden
    }
    .logo {
      float: left;

      img {
        width: 125px;
        pointer-event: none
      }
    }
    .navigation {
      margin-top: 8px;
      float: right;

      a {
        position: relative;
        margin-left: 20px;
        color: #CCCCCC;

        &:hover {
          color: #FFFFFF
        }
      }
    }
  }
</style>




































































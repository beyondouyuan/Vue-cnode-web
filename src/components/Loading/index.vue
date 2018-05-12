<template>
  <div class="mark-container">
    <Spin fix>
      <Icon type="load-c" size=18 class="loading-spin-icon"></Icon>
      <div>Loading</div>
    </Spin>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>
<style lang="scss">
  .mark-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFFFF;

    .loading-spin-icon{
      animation: ani-lading-spin 1s linear infinite;
    }
    @keyframes ani-lading-spin {
      from { transform: rotate(0deg);}
      50%  { transform: rotate(180deg);}
      to   { transform: rotate(360deg);}
    }
  }
</style>

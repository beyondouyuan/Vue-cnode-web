<template>
  <footer class="footer" v-pre>
    <div class="footer-wrapper">
      <div class="source-code-add">
        <a href="https://beyondouyuan.github.io" target="_blank" rel="noopener noreferrer">源码</a>
      </div>
      <div class="vendor">
        <ul>
          <li class="item">
            <span>感谢Cnode社区提供API</span>
            <a href="https://condejs.org" target="_blank" rel="noopener noreferrer">
              <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
            </a>
          </li>
          <li class="item">
            <span>github</span>
            <a href="https://beyondouyuan.github.io" target="_blank" rel="noopener noreferrer">
              <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>


<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  @import '../../assets/styles/_variable.scss';
  .footer {
    padding: 25px 0 35px 0;
    // 解决浮动布局高度坍塌
    overflow: hidden;
    background-color: #FFFFFF;

    .footer-wrapper {
      width: $width;
      margin: 0 auto;
    }

    .source-code-add {

      a:hover {
        text-decoration: underline;
        color: #333333
      }
    }

    .vendor {

      li {
        float: left;
        margin: 15px 30px 0 0
      }

      span {
        margin-right: 10px;
        color: #666666
      }

      .item {

        img {
          width: 100px;
          @include user-select;
        }
      }
    }
  }
</style>






































































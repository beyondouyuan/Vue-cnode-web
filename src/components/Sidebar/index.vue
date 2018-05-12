<template>
  <aside class="sidebar">
    <section class="personal-container">
      <div v-if="from !== 'topic' ">
        <div v-if="isLogin"></div>
        <div v-else class="tourist-container">
          <div class="conde">Cnode：Node.js专业中文社区</div>
          <div class="tourist">
            <span>您尚未登陆</span>
            <router-link to="/login">登陆</router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="top user-select-none">作者</div>
      </div>
    </section>
  </aside>
</template>
<script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        from: 'dev',
        isLogin: false
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/_variable.scss';
  .sidebar {
    width: $sidebarWidth;
    float: right;

    .personal-container {
      border-radius: 5px;
      background-color: #FFFFFF;

      .top {
        padding: 10px;
        background-color: $boxTopColor
      }

      .tourist-container {
        padding: 10px;

        .cnode {
          color: #000000
        }
        .tourist {
          margin-top: 15px;

          a {
            color: #2D8CF0;
            &:hover {
              text-decoration: underline
            }
          }
        }
      }
    }
  }
</style>

































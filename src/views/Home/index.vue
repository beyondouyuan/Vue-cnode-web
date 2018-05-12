<template>
  <section class="home-container">
    <div class="topics-container main-container">
      <nav class="navigation">
        <router-link
          to="/"
          :class="{active: $route.query.tab == 'all' || !$route.query.tab}">全部</router-link>
        <router-link
          to="/?tab=good"
          :class="{active: $route.query.tab == 'good'}">精华</router-link>
        <router-link
          to="/?tab=share"
          :class="{active: $route.query.tab == 'share'}">分享</router-link>
        <router-link
          to="/?tab=ask"
          :class="{active: $route.query.tab == 'ask'}">问答</router-link>
        <router-link
          to="/?tab=job"
          :class="{active: $route.query.tab == 'job'}">招聘</router-link>
        <router-link
          to="/?tab=dev"
          :class="{active: $route.query.tab == 'dev'}">客户端测试</router-link>
      </nav>
      <div class="topics-list">
        <Loading v-show="loading" />
        <TopicList :topics="topics" />
      </div>
      <div class="pagination-container">
        <Page
          :total="total"
          :page-size="20"
          :current.sync="page"
          @on-change="handleCurrentChange"
        ></Page>
      </div>
    </div>
    <Sidebar />
  </section>
</template>


<script>
  import TopicList from '@/components/Topics'
  import { requestTopics } from '@/api'
  export default {
    name: 'Home',
    components: {
      TopicList
    },
    data() {
      return {
        loading: false,
        total: 999,
        page: 1,
        topics: []
      }
    },
    created() {
      this.fetchTopicsList()
    },
    watch: { // 监控路由变化，获取不同主题资源
      $route(to, from) {
        if (to.name !== 'Home') return;
        if (to.query.page == 1 || !to.query.page) {
          this.page = 1 //切换主题主题时从首页开发获取
        }
        this.fetchTopicsList()
      }
    },
    methods: {
      handleCurrentChange(page) {
        // 点击分野获取数据
        // this.page = page
        // this.fetchTopicsList()
        // 或者更改路由参数，交给watch去监听来实现分页切换数据
        this.$router.push({
          name: this.$route.name,
          query: {
              tab: this.$route.query.tab,
              page
          }
        })
      },
      handleHideLoading() {
        this.loading = false
      },
      fetchTopicsList() {
        this.loading = true
        const nowTime = Date.now()
        // 请求参数
        const setting = {
          tab: this.$route.query.tab || 'all',
          page: this.page
        }
        requestTopics(setting).then(res => {
          const reqTime = Date.now() - nowTime
          if (reqTime <= 300) {
            setTimeout(() => {
              this.handleHideLoading()
            }, 300 - reqTime)
          } else {
            this.handleHideLoading()
          }
          if (res.success) {
            const {data} = res
            this.topics = data
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/styles/_variable.scss';

  .home-container {

    .main-container {
      box-shadow: 0 0 8px #CCCCCC;
      background-color: #FFFFFF;
    }
    .topics-container {

      .navigation {
        padding: 10px 0;
        border-radius: 5px 5px 0 0;
        background-color: $boxTopColor;

        a {
          padding: 2px 5px;
          margin-left: 15px;
          color: #80BD01;

          &:hover {
            color: #333333;
          }
          &.active {
            color: #FFFFFF;
            border-radius: 3px;
            background-color: #80BD01;
          }
        }
      }
    }
    .topics-list {
      position: relative;
      overflow: hidden;
      min-height: calc(100vh - 185px); // 减去头部及底部
      border-radius: 0 0 5px 5px;
    }
    .pagination-container {
      margin: 15px 0 20px 10px
    }
  }
</style>

















































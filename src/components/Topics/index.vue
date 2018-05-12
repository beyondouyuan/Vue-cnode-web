<template>
  <ul class="unique-topics_list">
    <li v-for="item of topics" :key="item.id">
      <!-- 头像 -->
      <div class="avatar">
        <router-link :to="{name: 'User', params: {loginname: item.author.loginname}}">
          <img
            :src="item.author.avatar_url"
            :title="item.author.loginname"
            alt="头像">
        </router-link>
      </div>
      <!-- 回复 -->
      <div
        class="reply-view"
        v-if="item.reply_count !== undefined"
      >
        {{ item.reply_count }}/{{ item.visit_count }}
      </div>
      <span class="tag" :class="transformTagText(item).className" v-if="item.tab">{{ transformTagText(item).text }}</span>
      <router-link
        class="title"
        :to="{name: 'Topic', params: {id: item.id}}"
      >
        {{ item.title }}
      </router-link>
      <div class="last-reply_time">
        <time>{{ item.last_reply_at | Format }}</time>
      </div>
    </li>
  </ul>
</template>


<script>
  export default {
    name: 'TopicList',
    props: {
      topics: {
        type: Array,
        default() {
          return []
        },
        required: true
      }
    },
    methods: {
      transformTagText(topic) {
        if (topic.top) {
          return {
            text: '置顶',
            className: 'top'
          }
        }
        if (topic.good) {
          return {
            text: '精华',
            className: 'good'
          }
        }
        switch(topic.tab) {
          case 'ask':
            return {
              text: '问答',
              className: 'ask'
            }
          case 'share':
            return {
              text: '分享',
              className: topic.tab
            }
          case 'ask':
            return {
              text: '问答',
              className: topic.tab
            }
          case 'job':
            return {
              text: '招聘',
              className: topic.tab
            }
          case 'good':
            return {
              text: '精华',
              className: topic.tab
            }
          case 'dev':
            return {
              text: '测试',
              className: topic.tab
            }
          default:
            return {
              text: '',
              className: 'default'
            }
        }
      }
    }
  }
</script>



<style lang="scss">
    @import '../../assets/styles/_variable.scss';
    .unique-topics_list {

      li {
        padding: 10px;
        overflow: hidden;

        &:not(:nth-last-child(1)) {
          border-bottom: 1px solid #F6F6F6;
        }
        &:hover {
          background-color: #EEEEEE;
        }
      }
      .avatar {
        float: left;

        img {
          width: 35px;
          height: 35px;
          object-fit: cover;
          border-radius: 50%
        }
      }

      .reply-view {
        width: 70px;
        float: left;
        margin: 9px 0 0 20px;
        text-align: center;
        font-size: 12px;
      }

      .tag {
        float: left;
        margin-top: 7px;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: 500;
        color: #999999;
        border-radius: 3px;
        background-color: #E5E5E5;

        &.good,
        &.top {
          color: #FFFFFF;
          background-color: #80BD01
        }
      }

      .title {
        display: inline-block;
        width: calc(100% - 230px);
        float: left;
        margin: 6px 0 0 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;

        &:hover {
          text-decorations: underline;
          color: #333333;
        }
      }
      .last-reply_time {
        float: right;
        font-size: 12px;
        margin-top: 8px;
      }
    }
</style>



































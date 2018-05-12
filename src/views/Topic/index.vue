<template>
    <section class="topic main-section">
        <Loading v-show="loading" />
        <div class="topics-container">
            <div class="detail-container">
                <div class="topic-header">
                    <div class="topic-title">
                        <span class="tag" v-if="detail.top || detail.good">{{ detail | tagName }}</span>
                        <h1>{{ detail.title }}</h1>
                    </div>
                    <div class="topic-info_wrapper">
                        <div class="topic-info">
                            <span>• 发布于 {{ detail.create_at}} • 作者 </span>
                            <router-link :to="`/user/${detail.author.loginname}`">{{ detail.author.loginname }}</router-link>
                            <span> • {{ detail.visit_count }} 次浏览 • 最后一次编辑是 {{ detail.last_reply_at }} • 来自 {{ detail.tab }}</span>
                        </div>
                        <div class="collection user-select-none" v-if="isLogin">
                            <button @click="collectionBtn">{{ detail.is_collect ? '取消收藏' : '收藏' }}</button>
                        </div>
                        <div class="operation" v-if="isLogin && detail.author_id === userInfo.id">
                            <router-link :to="`/release/${detail.id}`">
                                <Icon type="compose" title="编辑"></Icon>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="content-container markdown-body" v-html="detail.content"></div>
            </div>
            <!-- 回复区域 -->
            <div class="reply-container" v-show="detail.reply_count > 0">
                <div class="reply-count">{{ detail.reply_count }} 回复</div>
                <ul>
                    <li v-for="(item, index) of detail.replies" :key="item.id">
                        <div class="avatar">
                            <router-link :to="`/user/${item.author.loginname}`">
                                <img :src="item.author.avatar_url" alt="头像" />
                            </router-link>
                        </div>
                        <div class="reply-right">
                            <div class="reply-author">
                                <router-link :to="`/user/${item.author.loginname}`">{{ item.author.loginname }}</router-link>
                                <span>{{ index + 1 }}楼•{{ item.create_at }}</span>
                                <strong v-if="detail.author.loginname == item.author.loginname">作者</strong>
                            </div>
                            <div class="operation user-select-none">
                                <div>
                                    <Icon
                                        :type="item.is_uped ? 'ios-heart' : 'ios-heart-outline'"
                                        @click.native="likeBtn(item.id, item.author, index)" />
                                    <em>{{ item.ups.length }}</em>
                                </div>
                                <div @click="replyOthers(item.author.loginname)" v-if="isLogin">
                                    <Icon type="reply"></Icon>
                                </div>
                            </div>
                        </div>
                        <div class="reply-content markdown-body" v-html="item.content"></div>
                    </li>
                </ul>
            </div>
            <!-- 新建评论 -->
            <div class="insert-reply" :class="{hidden: !isLogin}">
                <div class="tip">添加回复</div>
                <textarea id="markdown-editor"></textarea>
                <div class="reply-btn">
                    <button type="button">{{ addText }}</button>
                </div>
            </div>
        </div>
        <Sidebar :author="detail.author" from="topic" />
    </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import SimpleMDE from 'simplemde'
  import { requestTopic } from '@/api'
  export default {
    name: 'Topic',
    data() {
      return {
        loading: true,
        addText: '回复',
        detail: {
          author: {
            avatar_url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACAQMAAACnuvRZAAAAA1BMVEX29vYACyOqAAAACklEQVQI12MAAgAABAABINItbwAAAABJRU5ErkJggg==',
            loginname: '--'
          },
          author_id: '',
          content: '',
          create_at: Date.now(),
          good: false,
          id: '',
          is_collect: false,
          last_reply_at: Date.now(),
          replies: [],
          reply_count: 0,
          tab: '',
          visit_count: 0
        },
        simplemde: null
      }
    },
    mounted() {
      this.initmarkdownEditor()
    },
    computed: {
      ...mapGetters([
        'isLogin',
        'userInfo'
      ])
    },
    beforeRouteEnter(to, from, next) {
      window.scrollTo(0, 0);
        next(vm => {
            vm.fetchTopic();
        })
    },
    methods: {
      initmarkdownEditor() {
        this.simplemde = new SimpleMDE({
          element: document.getElementById('markdown-editor'),
          spellChecker: false,
          autoDownloadFontAwesome: false
        })
      },
      fetchTopic() {
        this.loading = true
        const { id } = this.$route.params
        const condition = {
          id
        }
        requestTopic(condition).then(res => {
          if (res.success) {
            const { data } = res
            this.detail = data
            this.loading = false
            this.$nextTick(() => {
              const code = document.querySelectorAll('.markdown-body code')
              for(let i = 0; i < code.length; i++) {
                hljs.highlightBlock(code[i])
              }
            })
          }
        })
      }
    }
  }
</script>
<style lang="scss">
 .topic {
  .detail-container {
    position: relative;
    min-height: 300px;
    background-color: #FFFFFF;
    .topic-header {
      padding: 15px 10px;
      border-bottom: 1px solid #EEEEEE;
    }
    .topic-title {
      overfolw: hidden;
      .tag {
        float: left;
        margin-top: 3px;
        font-size: 12px;
        font-weight: bold;
        white-sapce: nowrap;
        color: #FFFFFF;
        padding: 2px 4px;
        border-radius: 3px;
        background-color: #80BD01;
      }
      h1 {
        float: left;
        width: calc(100% - 50px);
        margin: -4px 5px 0 10px;
        font-size: 22px;
        color: #000000;
        font-weight: bold;
      }
    }
    .topic-info_wrapper {
      margin-top: 10px;
      span,
      a {
          font-size: 12px;
        }
      a {
        color: #333333;
        &:hover {
          text-decoration: underline
        }
      }
    }
    .collection {
      text-align: right;

      button {
        position: relative;
        padding: 5px 10px;
        border: none;
        border-radius: 3px;
        font-weight: bold;
        color: #FFFFFF;
        background-color: #80BD01;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 3px;
          opacity: 0;
          background-color: #000000;
        }
        &.active:after {
          opacity: 0.2
        }
      }
    }
    .operation {
      i {
        cursor: pointer;
        font-size: 12px;
      }
    }
    .content-container {
      padding: 10px 20px;
    }
  }
  .reply-container {
      margin-top: 15px;
      border-radius: 3px;
      li {
        padding: 10px 10px 30px 10px;
        overflow: hidden;
        background-color: #FFFFFF;
      }
      .reply-count {
        padding: 10px;
        background-color: #F6F6F6;
      }
      .avatar {
        float: left;

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          background-color: #F7F7F7;
        }
      }
      .reply-author {
        float: left;

        a {
          font-size: 12px;
          color: #000000
        }
        span {
          margin-left: 5px;
          font-size: 12px;
          color: #0000CC
        }
        strong {
          margin-left: 5px;
          font-size: 12px;
          font-weight: bold;
          color: #FFFFFF;
          padding: 1px;
          border-radius: 1px;
          background-color: #80BD01;
        }
      }
       .reply-right {
            float: left;
            width: calc(100% - 40px);
            overflow: hidden;
            margin: 0 0 0 10px;
        }
        .operation {
          float: right;

          i {
            cursor: pointer;
            font-size: 12px;
          }
        }
    }
 }
</style>






























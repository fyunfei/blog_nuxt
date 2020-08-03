<template>
  <div class="clearfix">
    <div class="main-left">
      <article
        v-for="(val, index) in articleList"
        :key="val.bid"
        class="article"
      >
        <div class="article-title">
          <div class="title">{{ val.b_title }}</div>
          <div class="tag"></div>
        </div>
        <div class="article-date">{{ val.b_date | timeFilter }}</div>
        <div
          ref="content"
          class="article-content markdown"
          :class="{
            'article-padding-bottom': !val.textHidden,
          }"
          v-html="val.b_contenthtml"
        ></div>
        <div ref="more-btn" class="more" @click="showMoreArticle(val, index)">
          {{ val.textHidden ? '显示全部' : '收起文章' }}
        </div>
      </article>
    </div>
    <div class="main-right">
      <div class="main-right-profile">
        <div class="profile">
          <img
            src="//mirror-gold-cdn.xitu.io/16ba2bc5a24bf1fc0a3?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt
          />
        </div>
        <div class="title">
          <p>
            欢迎来到我的博客，我叫
            <strong>付云飞</strong>
            ，是一名前端工程师，我的爱好广泛，喜欢
            <strong
              v-for="val in hobbyList"
              :key="val.title"
              class="strong-common"
              :class="`color-${val.color}`"
              >{{ val.title }}</strong
            >
            这个博客用来分享自己在学习工作中遇到的问题以及自己的摄影作品。
          </p>
          <p class="warning">注：目前博客还未完善，仅负责博文内容展示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Article } from '@/services/index'
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    let articleList = {}
    try {
      await Article.get().then((res) => {
        for (const val of res.result) {
          val.textHidden = true
        }
        articleList = res.result
      })
    } catch (err) {}

    return {
      articleList,
    }
  },
  data() {
    return {
      articleList: [],
      hobbyList: [
        {
          title: '旅游',
          color: 'green',
        },
        {
          title: '摄影',
          color: 'orange',
        },
        {
          title: '打篮球',
          color: 'red',
        },
        {
          title: 'csgo',
          color: 'cyan',
        },
        {
          title: 'coding',
          color: 'blue',
        },
      ],
    }
  },
  created() {
    Article.get().then((res) => {
      for (const val of res.result) {
        val.textHidden = true
      }
      this.articleList = res.result
    })
  },
  methods: {
    /**
     * @param {object} article 当前文章内容
     * @param {number} index 当前索引 用来定位article元素
     */
    showMoreArticle(article, index) {
      const eles = document.querySelectorAll('.article-content')
      if (article.textHidden) {
        eles[index].style.height = `${eles[index].scrollHeight}px`
      } else {
        eles[index].style.height = `200px`
      }
      article.textHidden = !article.textHidden
    },
  },
}
</script>

<style lang="scss" scoped>
.main-right {
  float: right;
  max-width: 293px;
  width: 100%;
  margin-top: 50px;
  &-profile {
    display: flex;
    .profile {
      max-width: 56px;
      max-height: 56px;
      min-width: 56px;
      min-height: 56px;
      overflow: hidden;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .title {
      margin-left: 10px;
      .warning {
        margin-top: 10px;
        color: #666;
      }
      .strong-common::after {
        content: '，';
        font-weight: normal;
      }
    }
  }
}
.main-left {
  float: left;
  max-width: 614px;
  width: 100%;
  margin-right: 15px;
  padding: 15px;
  .article {
    position: relative;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-top: 50px;
    .article-title {
      display: flex;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #dbdbdb;
      padding: 0 10px;
      font-size: 20px;
      font-weight: bold;
      .title {
        max-width: 60%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .tag {
        flex: 1;
      }
    }
    .article-date {
      padding: 10px;
      text-align: right;
      color: #666;
    }
    .article-content {
      padding: 10px;
      height: 200px;
      overflow: hidden;
      transition: height 1000ms ease;
    }
    .article-more {
      min-height: 200px;
    }
    .article-padding-bottom {
      padding-bottom: 30px;
    }
    .more {
      cursor: pointer;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-weight: bold;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 1)
      );
    }
  }
}
@media screen and (max-width: 1000px) {
  .main-right {
    display: none;
  }
  .main-container {
    position: relative;
  }
  .main-left {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>

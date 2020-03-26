<template>
  <div class='detail-box'>
    <div class='mk-detail'>
      <header>
        <van-icon name="arrow-left" @click='back' color="#fff"/>
        <div class='box'>
          <van-icon name="like-o" color="#fff"/>
          <van-icon name="other-pay" badge="99+" color="#fff"/>
        </div>
      </header>
      <div class='mk-bg'>
        <img src="https://image.zymkcdn.com/file/cover/000/000/032.jpg-300x400" alt="">
      </div>
      <div class='mk-pic'>
        <img src="https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400" alt="kong">
      </div>
      <div class='content'>
        <h3>都市喵奇谭</h3>
        <p>橘花散里 saremi</p>
        <ul>
          <li><span>热血</span></li>
          <li><span>恋爱</span></li>
          <li><span>玄幻</span></li>
          <li><span>科学</span></li>
          <li><span>少女</span></li>
          <li><span>漫客</span></li>
        </ul>
        <span><i class='iconfont icon-renqi1'></i>4562万</span>
      </div>
    </div>
    <!--不使用router-link，因为接下来的只是来写页面而已-->
    <div class='startread'>
      <span>离线存储</span>
      <span>开始阅读</span>
    </div>
    <van-tabs v-model="active" animated>
      <!--详情-->
      <van-tab>
        <template #title >
          <div class='title'>{{tabdata[0].title}}</div>
        </template>
        <div>
          <h3>剧情简介</h3>
          <p>{{tabdata[0].desc}}</p>
        </div>
        <div class='author'>
          <h3>作者信息</h3>
          <div class='can'>
            <img :src="tabdata[0].author.avatar" alt="头像">
            <div>
              <span>{{tabdata[0].author.filed}}</span>
              <span>粉丝<i>{{tabdata[0].author.fans}}</i>人</span>
            </div>
          </div>
        </div>
        <div>
          <h3>作者公告</h3>
          <p>{{tabdata[0].author.add}}</p>
        </div>
      </van-tab>
      <!--目录-->
      <van-tab  :title="tabdata[1].title">
        <div class='update'>
          <span>最近更新：<strong>3天前</strong></span>
          <span @click="upsee" v-if="isdown"><van-icon name="arrow-down" />降序</span>
          <span @click="upsee" v-else><van-icon name="arrow-up" />升序</span>
        </div>
        <ul :class="{'article-words': true, 'more': more}">
          <li v-for='(item, index) in tabdata[1].article' :key='index'>
            <router-link tag='a' :to="item.link">
              {{item.words}}
            </router-link>
            <img :src="img" v-if="item.buyer">
            <div class='dot' v-if='item.updata'></div>
          </li>
        </ul>
        <div class='btn' @click='changeshow'>
          <span class='more' v-if='isshowall'>查看全部</span>
          <span class='more' v-else>收起</span>
        </div>
      </van-tab>
      <!--支持-->
      <van-tab  :title="tabdata[2].title">
        <!--支持数据统计-->
        <ul class='support'>
          <li v-for="(item, index) in support" :key="index">
            <span :style="`backgroundImage:url(${Img})`"></span>
            <span>{{item}}</span>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <Swipe :wantheader='false'></Swipe>
  </div>
</template>
<script>
import img from '@/assets/icon/lock.png'
import Img from '@/assets/sprite_detail.png'
import Swipe from '@/components/swipe.vue'
export default {
  data () {
    return {
      img: img,
      Img: Img,
      msg: 'detail',
      active: 0,
      tabdata: [
        {
          title: '详情',
          desc: '【独家每周三、六更新】一代剑尊遭遇背叛，新婚之夜却死在挚爱手中。不料天意弄人，剑尊并未身死道消，却在凡间重生。且看背负着血海深仇的穆远，如何重登灵域，大杀四方！',
          author: {
            rank: 1,
            fans: '21345',
            avatar: 'https://m.zymk.cn/static/images/default/error.png',
            filed: '漫客文化',
            add: '这家伙太懒，什么都没说'
          }
        },
        {
          title: '目录',
          article: [
            {
              buyer: true,
              link: '/',
              updata: true,
              words: '40话'
            },
            {
              buyer: true,
              link: '/',
              updata: true,
              words: '39话'
            },
            {
              buyer: true,
              link: '/',
              updata: true,
              words: '38话'
            },
            {
              buyer: true,
              link: '/',
              updata: true,
              words: '37话'
            },
            {
              buyer: true,
              link: '/',
              updata: true,
              words: '36话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '35话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '34话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '33话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '32话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '31话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '30话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '29话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '28话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '27话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '26话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '25话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '24话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '23话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '22话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '21话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '20话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '19话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '18话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '17话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '16话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '15话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '14话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '13话'
            },
            {
              buyer: true,
              link: '/',
              updata: false,
              words: '12话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '11话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '10话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '9话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '8话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '7话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '6话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '5话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '4话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '3话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '2话'
            },
            {
              buyer: false,
              link: '/',
              updata: false,
              words: '1话'
            }
          ]
        },
        {
          title: '支持'
        }
      ],
      isdown: true,
      isshowall: true,
      more: false,
      support: [
        '推荐259万人',
        '打赏751万人',
        '月票108万张',
        '打分23.3万人',
        '收藏232万人',
        '分享153万次'
      ]
    }
  },
  created () {
    // 展示文章数量
    const article = this.tabdata[1].article
    console.log(article)
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changeshow () {
      this.isshowall = !this.isshowall
      this.more = !this.more
    },
    // 升序和降序
    upsee () {
      this.tabdata[1].article.reverse()
      this.isdown = !this.isdown
    }
  },
  components: {
    Swipe
  }
}
</script>

<style lang="less" >
  // 封装一个单位转换函数
  .pxtorem (@num: 0) {
    @result: @num/37.5rem;
  }
  .pxtopadding (@a:0, @b:0, @c:0, @d:0) {
    padding: @a/37.5rem @b/37.5rem @c/37.5rem @d/37.5rem;
  }
  .pxtomargin (@a:0, @b:0, @c:0, @d:0) {
    margin: @a/37.5rem @b/37.5rem @c/37.5rem @d/37.5rem;
  }
  .pxtofont (@num) {
    font-size: @num/37.5rem;
  }
  .widthheight (@width, @height) {
    width: @width/37.5rem;
    height: @height/37.5rem;
  }
  .detail-box {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    .mk-detail {
      width: 100%;
      height: 152/37.5rem;
      padding: 50/37.5rem 0 0 3.600036rem;
      header {
        font-size: 20/37.5rem;
        height: 44/37.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: transparent;
        z-index: 99;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 12/37.5rem;
        .box {
          width: 92/37.5rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          div {
            right: 50% !important;
          }
        }
      }
      .mk-bg {
        height: 152/37.5rem;
        background-size: 500% 500%;
        width: 100%;
        background: #000;
        position: absolute;
        top: 0;
        left: 0;
        img {
          width: 100%;
          height: 100%;
          filter: blur(20/37.5rem);
        }
      }
      .mk-pic {
        position: absolute;
        top: 50.37.5rem;
        left: 10/37.5rem;
        padding: 2/37.5rem;
        background: #fff;
        box-shadow: 0 0 4/37.5rem #666;
        border-radius: 5/37.5rem;
        height: 144/37.5rem;
        img {
          width: 105/37.5rem;
          height: 140/37.5rem;
        }
      }
      .content {
        font-family: SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif;
        position: relative;
        z-index: 9;
        font-size: 12/37.5rem;
        h3 {
          height: 22/37.5rem;
          font-size: 18/37.5rem;
          color: #fff;
          line-height: 22/37.5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          opacity: .95;
        }
        p {
          margin-top: 3/37.5rem;
          color: #fff;
          height: 12/37.5rem;
          line-height: 10/37.5rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          opacity: .8;
        }
        ul {
          width: 100%;
          overflow: hidden;
          height: 36/37.5rem;
          li {
            display: inline-block;
            margin-right: 4/37.5rem;
            padding: 10/37.5rem 0;
            span {
              padding: 0 6/37.5rem;
              border-radius: 14/37.5rem;
              color: #fff;
              opacity: .8;
              display: inline-block;
              line-height: 15/37.5rem;
            }
            &:first-of-type span {
              background: rgb(199, 133, 144);
            }
            &:nth-of-type(2) span {
              background: rgb(243, 189, 126);
            }
            &:nth-of-type(3) span {
              background: rgb(110, 196, 233);
            }
            &:nth-of-type(4) span {
              background: rgb(102, 201, 187);
            }
            &:nth-of-type(5) span {
              background: rgb(155, 155, 213);
            }
            &:nth-of-type(6) span {
              background: rgb(199, 133, 144);
            }
          }
        }
        span {
          color: #fff;
          opacity: .8;
          line-height: 14/37.5rem;
          i {
            margin-right: 3/37.5rem;
          }
        }
      }
    }
    .startread {
      background: #fff;
      width: 100%;
      height: 50/37.5rem;
      flex-direction: row;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #fff;
      font-size: 14/37.5rem;
      span {
        display: block;
        width: 100/37.5rem;
        height: 30/37.5rem;
        line-height: 32/37.5rem;
        // 移动端1px先这样，弄好了在去解决这个问题
        margin-right: 12.5/37.5rem;
        border-radius: 30/37.5rem;
        text-align: center;
        box-sizing: border-box;
      }
      span:first-of-type {
        border: 1/37.5rem solid red;
        color: #fc6454;
      }
      span:last-of-type {
        color: #fff;
        background: #fc6454;
      }
    }
    // 选项卡
    .van-tabs {
      background: #fff;
      margin-bottom: 8/37.5rem;
      .van-tab {
        margin-bottom: 4/37.5rem;
      }
      h3 {
        width: 100%;
        height: 32/37.5rem;
        margin: 12/37.5rem 0 4/37.5rem 0;
        font-size: 14/37.5rem;
        color: #333;
        padding: 0 10/37.5rem;
      }
      p {
        width: 100%;
        font-size: 14/37.5rem;
        color: #666;
        padding: 0 10/37.5rem 16/37.5rem;
      }
      // 作者信息
      .author {
        margin: 0 10/37.5rem;
        h3 {
          height: 32/37.5rem;
          padding: 12/37.5rem 0 4/37.5rem 0;
          color: #666;
          font-size: 14/37.5rem;
          margin: 0;
        }
        .can {
          padding-left: 40/37.5rem;
          position: relative;
          border-bottom: 1/37.5rem solid #ccc;
          img {
            width: 32/37.5rem;
            height: 32/37.5rem;
            position: absolute;
            top: 5/37.5rem;
            left: 0;
          }
          div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            font-size: 12/37.5rem;
            padding-bottom: 16/37.5rem;
            span:first-of-type {
              flex-basis: 24/37.5rem;
              line-height: 24/37.5rem;
              color: #666;
            }
            span:last-of-type {
              color: #666;
              flex-basis: 18/37.5rem;
              line-height: 18/37.5rem;
              i {
                font-style: normal;
                color: #fc6454;
              }
            }
          }
        }
      }
      // 目录
      .update {
        margin: 0 10/37.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .pxtorem(32);
        height: @result;
        .pxtopadding(12, 0, 4, 0);
        box-sizing: content-box;
        .pxtofont(14);
        span:first-of-type {
          color: #999;
          strong {
            .pxtofont(13);
            color: #333;
          }
        }
        span:last-of-type {
          .pxtofont(12);
          color: #999;
        }
        .van-icon {
          vertical-align: middle;
          margin-right: 4/37.5rem;
        }
      }
      .article-words {
        padding: 0 10/37.5rem;
        display: flex;
        overflow: hidden;
        height: 120/37.5rem;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        li {
          .widthheight(80, 32);
          background: #f5f5f5;
          .pxtorem(32);
          line-height: @result;
          .pxtofont(14);
          .pxtomargin(8, 0, 0, 0);
          position: relative;
          a {
            width: 100%;
            height: 100%;
            display: block;
            text-align: center;
            color: #555;
          }
          img {
            .widthheight(10, 10);
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-50%, -50%);
            z-index: 999;
          }
          .dot {
            .widthheight(6,6);
            background: red;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(50%,-50%);
            border-radius: 50%;
          }
        }
      }
      .more {
        height: auto !important;
      }
      .btn {
        .pxtomargin (12, 12, 16, 12);
        .pxtorem(32);
        height: @result;
        text-align: center;
        font-size: 14/37.5rem;
        color: #666;
        span {
          display: block;
          margin: 0 auto;
          height: 100%;
          line-height: 36/37.5rem;
          width: 100%;
          border: 1/37.5rem solid #ccc;
          border-radius: 5/37.5rem;
        }
      }
      // 支持
      .support {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .pxtopadding(12, 10, 8, 10);
        li {
          width: 33.333333%;
          margin-bottom: 12/37.5rem;
          text-align:center;
          span:first-of-type {
            display: block;
            background-size: 144/37.5rem 96/37.5rem;
            .widthheight(48, 47);
            margin: 0 auto;
          }
          span:last-of-type {
            width: 100%;
            display: block;
            color: #999;
            font-size: 14/37.5rem;
            padding-top: 4/37.5rem;
          }
        }
        li:nth-of-type(2) span:first-child{
          background-position: -48/37.5rem 0;
        }
        li:nth-of-type(3) span:first-child{
          background-position: -96/37.5rem 0;
        }
        li:nth-of-type(4) span:first-child{
          background-position: 0 -48/37.5rem;
        }
        li:nth-of-type(5) span:first-child{
          background-position: -48/37.5rem -48/37.5rem;
        }
        li:nth-of-type(6) span:first-child{
          background-position: -96/37.5rem -48/37.5rem;
        }
      }
    }
  }
</style>

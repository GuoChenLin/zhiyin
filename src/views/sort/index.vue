<template>
  <div id="sort">
    <!--头部导航-->
    <van-nav-bar
      @click-left="onClickLeft"
    >
      <template #left>
        <span :style="`backgroundImage:url(${img})`" class='iconleft'></span>
      </template>
      <template #title>
        <span>热血</span>
      </template>
      <template #right>
        <!--下拉菜单-->
        <div class='select-sort'>
          <div class='hd'>
            <span class='text' @click="showselect">{{val}}</span>
            <van-icon name="arrow-down" color="#fff" v-if="!isshow"/>
            <van-icon name="arrow-up" color="#fff" v-else/>
          </div>
          <div class='bd' v-show='isshow' @click.stop="showselect" >
            <div class='mask' ></div>
            <ul class='select-box' @click.stop='selectwant'>
              <li data-sort='0'>人气</li>
              <li data-sort='1'>评分</li>
              <li data-sort='2'>更新</li>
            </ul>
          </div>
        </div>
      </template>
    </van-nav-bar>
    <!--主体内容-->
    <div class='main'>
      <ul class='box'>
        <li v-for="(item, index) in renqidata" :key='index'>
          <router-link to="/detail">
            <div class='imgbox'>
              <img :src="item.pic" :alt="item.name">
              <span><i class='iconfont icon-xingxing'></i>{{item.score}}</span>
              <span>{{item.now}}</span>
            </div>
            <h3>{{item.name}}</h3>
            <p :class="{'h_20': trimreg.test(item.desc)}">{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import img from '@/assets/icon/001.png'
export default {
  data () {
    return {
      img: img,
      // 用于测试字符串是否有空格并且是否有文字，再进行渲染
      trimreg: /^(\s+|[\u4e00-\u9fa5]+)$/,
      isshow: false,
      text: '人气',
      value1: 0,
      option1: [
        { text: '人气', value: 0 },
        { text: '评分', value: 1 },
        { text: '更新', value: 2 }
      ],
      selectvalues: ['人气', '评分', '更新'],
      val: '人气',
      renqidata: [
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '超人气超人气超人气超人气超人气超人气',
          now: '53话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '值得一看',
          now: '103话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '15.5',
          name: '斗破苍穹',
          desc: '永葆青春',
          now: '50话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '8.5',
          name: '斗破苍穹',
          desc: '热门话题',
          now: '544话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '4.5',
          name: '斗破苍穹',
          desc: '',
          now: '54话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '3.5',
          name: '斗破苍穹',
          desc: '',
          now: '54话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '3话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '36话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '9.5',
          name: '斗破苍穹',
          desc: '',
          now: '99话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '4.3',
          name: '斗破苍穹',
          desc: '',
          now: '545话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '7.5',
          name: '斗破苍穹',
          desc: '',
          now: '54话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '503话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '503话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '超人气超人气超人气超人气超人气超人气',
          now: '53话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '值得一看',
          now: '103话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '15.5',
          name: '斗破苍穹',
          desc: '永葆青春',
          now: '50话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '8.5',
          name: '斗破苍穹',
          desc: '热门话题',
          now: '544话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '4.5',
          name: '斗破苍穹',
          desc: '',
          now: '54话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '3.5',
          name: '斗破苍穹',
          desc: '',
          now: '54话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '3话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '5.5',
          name: '斗破苍穹',
          desc: '',
          now: '36话'
        },
        {
          pic: 'http://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400',
          score: '9.5',
          name: '斗破苍穹',
          desc: '',
          now: '99话'
        }
      ]
    }
  },
  methods: {
    showselect () {
      this.isshow = !this.isshow
    },
    onClickLeft () {
      this.$router.back()
    },
    selectwant (e) {
      const index = e.target.dataset.sort
      const value = this.selectvalues[index]
      this.val = value
      // 赋值之后关闭mask
      this.isshow = !this.isshow
    }
  }
}
</script>

<style lang="less" >
  .h_20 {
    height: 20/37.5rem;
    color: #999;
    font-size: 12/37.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 112/37.5rem;
    text-indent: 3/37.5rem;
    line-height: 20/37.5rem;
  }
  #sort {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    font-family: 'SimHei','Microsoft Yahei','SimSun',Tahoma,arial,sans-serif;
    .van-nav-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background: #fc6454;
      color: #fff;
    }
    .van-dropdown-menu {
      background: #fc6454;
      .item {
        color: #fff !important;
      }
    }
    .iconleft {
      display: block;
      width: 24/37.5rem;
      height: 24/37.5rem;
      margin: 10/37.5rem;
      background-position: center center;
    }
    span {
      color: #fff;
    }
    .select-sort {
      .bd {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin-top: 46/37.5rem;
        background-color: rgba(0,0,0,.5);
      }
      .select-box {
        position: absolute;
        right: 6/37rem;
        top: 4/37rem;
        width: 120/37.5rem;
        height: 120/37.5rem;
        background: #fff;
        color: #000;
        li {
          height: 40/37.5rem;
          line-height: 40/37.5rem;
          text-align: center;
        }
      }
    }
  }
  .main {
    width: 100%;
    height: 100%;
    background: #fff;
    padding-top: 46/37.5rem;
    ul {
      padding: 10/37.5rem 5/37.5rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      li {
        width: 33.3333333333%;
        min-height: 172/37.5rem;
        margin-bottom: 12/37.5rem;
        font-size: 14/37.5rem;
        .imgbox {
          width: 112/37.5rem;
          margin: 0 auto;
          position: relative;
          span:first-of-type {
            position: absolute;
            right: 0;
            top: 0;
            background: rgba(0,0,0,.5);
            padding: 4/37.5rem 6/37.5rem;
            line-height: 9/37.5rem;
            border-radius: 18/37.5rem 0 0 18/37.5rem;
            i {
              font-size: 14/37.5rem;
              color: #fff;
            }
          }
          span:last-of-type {
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 22/37.5rem;
            background: rgba(0,0,0,.5);
            line-height: 22/37.5rem;
            font-size: 12/37.5rem;
            text-align: right;
            padding: 0 6/37.5rem;
          }
          img {
            width: 112/37.5rem;
            height: 148/37.5rem;
            margin: 0 auto;
            display: block;
          }
        }
        h3 {
          margin-top: 5/37.5rem;
          text-indent: 3/37.5rem;
          color: #000;
        }
      }
    }
  }
</style>

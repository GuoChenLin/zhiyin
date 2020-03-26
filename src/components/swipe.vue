<template>
  <div id='container'>
    <div class='h_t' v-if="wantheader">
      <div class='left'>
        <span :style="'backgroundPosition: 0 ' + (-30 * id/37.5) +'rem;'"></span>
        <strong>{{mydata.title}}</strong>
        <small>{{mydata.desc}}</small>
      </div>
      <router-link tag='a' to="/" class='right'>更多</router-link>
    </div>
    <p class='title' v-else>相关推荐</p>
    <div class="wrapper">
      <ul class="content">
        <li v-for="(item, index) in mydata.data" :key='index'>
          <img :src="item.pic" alt="独家">
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
          <!--需要定位的两行文本-->
          <span><i class='iconfont icon-xingxing'></i>{{item.score}}</span>
          <p class='text'>烽火戏诸侯</p>
        </li>
        <!-- <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li>
        <li>
          <img src="../assets/dujia/dujia1.jpg" alt="独家">
          <h3>最强枭雄系统</h3>
          <p>来带平行后的自己来带平行后的自己</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      msg: '独家',
      scroll: null
    }
  },
  props: {
    id: {
      type: String,
      default: '0'
    },
    mydata: {
      type: Object,
      default () {
        return {
          title: '经典',
          desc: '永不褪色的记忆',
          data: [
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia8.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia9.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia10.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia1.jpg',
              title: '我是大仙尊',
              text: '他，是地表最强',
              score: '9.0'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia2.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dijia3.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia4.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia5.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia6.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dijia7.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia8.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia9.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            },
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia10.jpg',
              title: '拒嫁豪门',
              text: '一朝跌入尘土的她',
              score: '8.5'
            }
          ]
        }
      }
    },
    wantheader: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // 重父组件传递过来的id可以获取到对应的dom元素
    this.$nextTick(() => {
      const wrap = document.querySelectorAll('.wrapper')[this.id]
      this.scroll = new BScroll(wrap, {
        scrollX: true,
        click: true,
        scrollY: true
      })
    })
    console.log(this.mydata)
  }
}
</script>

<style scoped lang='less'>
  #container {
    margin: 0 0 10/37.5rem 0;
    background: #fff;
    height: 226/37.5rem;
    padding-top: 10/37.5rem;
    overflow: hidden;
    .title {
      height: 32/37.5rem;
      font-size: 14/37.5rem;
      color: #666;
      box-sizing: content-box;
      padding: 0 10/37.5rem;
      line-height: 32/37.5rem;
    }
  }
  .h_t {
    height: 32/37.5rem;
    font-size: 14/37.5rem;
    padding: 0 10/37.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left {
      span {
        background: url('../assets/index_title.png') no-repeat;
        width: 30/37.5rem;
        height: 28/37.5rem;
        display: inline-block;
        background-size: .800008rem 4.4800448rem;
        background-position: 0 0;
        margin-right: 10/37.5rem;
        vertical-align: bottom;
      }
      strong {
        font-size: 16/37.5rem;
      }
      small {
        color: #999;
        margin-left: 10/37.5rem;
      }
    }
    .right {
      width: 46/37.5rem;
      height: 16/37.5rem;
      border-radius: 16/37.5rem;
      text-align: center;
      line-height: 16/37.5rem;
      border: 1/37rem solid #ccc;
      font-size: 12/37.5rem;
      margin-top: 10/37.5rem;
      color: #999;
    }
  }
  .wrapper {
    width: 100%;
    padding: 10/37.5rem 0;
    box-sizing: border-box;
    .content {
      width: 300%;
      height: 100%;
      li {
        height: 174/37.5rem;
        width: 10/3.8rem;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        &:nth-of-type(n-1) {
          margin-left: 10/37.5rem;
        }
        h3 {
          font-size: 15/37.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          height: 26/37.5rem;
          padding-top: 5/37.5rem;
          color: #333;
        }
        p {
          font-size: 12/37.5rem;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          height: 20/37.5rem;
          line-height: 20/37.5rem;
          color: #ccc;
        }
        span {
          position: absolute;
          top: 0;
          right: 0;
          padding-right: 4/37.5rem;
          font-size: 12/37.5rem;
          background: hsla(0, 0%, 50% ,1);
          color: #fff;
          display: block;
          border-radius: 16/37.5rem 0 0 16/37.5rem;
          i {
            display: inline-block;
            width: 12/37.5rem;
            height: 12/37.5rem;
            font-size: 12/37.5rem;
            color: #fff;
            margin: 0 5/37.5rem;
          }
        }
        .text {
          position: absolute;
          bottom: 40/37.5rem;
          left: 0;
          width: 100%;
          height: 20/37.5rem;
          background: hsla(0, 100%, 0% , .5);
          color: #fff;
          font-size: 10/37.5rem;
          text-align: right;
          line-height: 20/37.5rem;
          padding: 0 5/38rem;
        }

      }
      &::after {
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
      }
    }
  }
</style>

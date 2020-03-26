<template>
  <div id='wrapper'>
    <div class="home">
      <Banner></Banner>
      <Swipe id= 0 :mydata="res[0]"></Swipe>
      <Swipe id='1' :mydata="res[1]"></Swipe>
      <Swipe id='2' :mydata="res[2]"></Swipe>
      <Swipe id='3' :mydata="res[3]"></Swipe>
      <Swipe id='4' :mydata="res[4]"></Swipe>
      <Tab></Tab>
    </div>
  </div>
</template>
<script>
import Scroll from 'better-scroll'
import Banner from '@/components/banner.vue'
import Swipe from '@/components/swipe.vue'
import Tab from '@/components/tab.vue'
export default {
  data () {
    return {
      msg: '首页',
      // 模拟数据
      res: [
        {
          title: '独家',
          desc: '独家精品私人定制',
          data: [
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
        },
        {
          title: '经典',
          desc: '永不褪色的记忆',
          data: [
            {
              pic: 'http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dujia1.jpg',
              title: '我是大仙尊',
              text: '他，是地表最强战队',
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
        },
        {
          title: '霸总',
          desc: '女人，你在玩火',
          data: [
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
        },
        {
          title: '新番',
          desc: '本季新作，火钳刘明',
          data: [
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
        },
        {
          title: '燃',
          desc: '热血 友情 奋斗',
          data: [
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
      ],
      scroll: null
    }
  },
  components: {
    Banner,
    Swipe,
    Tab
  },
  mounted () {
    // 解决移动端滚动卡顿问题
    this.$nextTick(() => {
      const wrapper = document.getElementById('wrapper')
      this.scroll = new Scroll(wrapper, {
        click: true,
        scrollY: true
      })
    })
  }
}
</script>
<style lang="less">
  #wrapper {
    width: 100%;
    height: 100%;
  }
  html,body,#app {
    width: 100%;
    height: 100%;
  }
  .home {
    min-height: 100%;
    font-size: 37.5px;
    background: #f3f3f3;
    padding-bottom: 50/37.5rem;
  }
  .testrem {
    font-size: 1rem;
    width: 5rem;
    background: #ccc;
  }
</style>

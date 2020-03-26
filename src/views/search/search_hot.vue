<template>
  <div class='search_hot'>
    <p>{{title}}</p>
    <ul class='items'>
      <router-link tag='li' v-for="(item, index) in hotItems" :key='index' :to='item.path' :style="'backgroundColor:'+item.bgColor+';'">{{item.text}}</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '热门搜索'
    }
  },
  props: {
    hotItems: {
      type: Array,
      default: function () {
        return [
          {
            bgColor: '#c78590',
            path: '/',
            text: '斗破苍穹'
          },
          {
            bgColor: '#6ec4e9',
            path: '/',
            text: '斗罗大陆'
          },
          {
            bgColor: '#f3bd7e',
            path: '/',
            text: '元尊'
          },
          {
            bgColor: '#66c9bb',
            path: '/',
            text: '爵士潭门'
          },
          {
            bgColor: '#9b9bd5',
            text: '绝世唐门',
            path: '/'
          },
          {
            bgColor: '#c78590',
            path: '/',
            text: '斗罗大陆3龙王传说'
          },
          {
            bgColor: '#6ec4e9',
            path: '/',
            text: '斗破苍穹之大主宰'
          },
          {
            bgColor: '#f3bd7e',
            path: '/',
            text: '妖神记'
          },
          {
            bgColor: '#66c9bb',
            path: '/',
            text: '风起苍拦'
          },
          {
            bgColor: '#9b9bd5',
            path: '/',
            text: '凤逆天下'
          }
        ]
      }
    },
    title: {
      type: String,
      default: '热门搜索'
    }
  }

}
</script>
<style scoped lang='less'>
  .search_hot {
    padding: 0 12/37.5rem;
    p {
      padding: 15/37.5rem 0;
      margin: 0;
      font-size: 14/37.5rem;
      color: #666;
    }
    .items {
      li {
        float: left;
        padding: 4/37.5rem 8/37.5rem;
        font-size: 12/37.5rem;
        margin: 0 10/37.5rem 10/37.5rem 0;
        border-radius: 5px;
        color: #fff;
        opacity: .9;
      }
    }
    // 清除浮动
    &::after {
      display: block;
      content: '';
      height: 0;
      clear: both;
    }
  }
</style>

<template>
  <div id='banner'>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item v-for="(item, index) in banner" :key='index' :style="'backgroundImage:url('+item.pic+')'">
        <router-link :to='item.url'>
          <p>{{item.text}}</p>
        </router-link>
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/3
      </div>
    </van-swipe>
    <!--搜索图标-->
    <div class='icon' @click='toSearchPage'>
      <span class='icon-sousuo iconfont'></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: 0
    }
  },
  props: {
    banner: {
      type: Array,
      default: () => {
        return [
          {
            text: '萌宝来袭，妈咪影后天价妻',
            pic: 'https://image.zymkcdn.com/file/news/000/004/013.jpg',
            url: '/'// 要跳转的路由，这里先这样提着
          },
          {
            text: '异界大仙,强悍登场',
            pic: 'https://image.zymkcdn.com/file/news/000/003/604.jpg',
            url: '/'
          },
          {
            text: '异界大仙,强悍登场',
            pic: 'https://image.zymkcdn.com/file/news/000/004/297.jpg',
            url: '/'
          }
        ]
      }
    }
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    toSearchPage () {
      this.$router.push({
        name: 'search'
      })
    }
  }
}
</script>
<style lang='less'>
#banner {
  color: #fff;
  height: 187.5/37.5rem;
  position: relative;
  .my-swipe {
    height: 100%;
    .van-swipe-item {
      height: 100%;
      background-size: cover;
      a {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
        p {
          position: absolute;
          left: 0;
          bottom: 0;
          padding: 5px 12px;
          font-size: 12/37.5rem;
          background: linear-gradient(180deg, hsla(0, 0%, 50%, .1) 0%, hsla(0, 0%, 50%, .7) 100%);
          color: #fff;
          margin: 0;
          width: 100%;
        }
      }
    }
    .custom-indicator {
      position: absolute;
      right: 20px;
      bottom: 5px;
      font-size: 14/37.5rem;
    }
  }
  .icon {
    position: absolute;
    top: 15/37.5rem;
    right: 15/37.5rem;
    width: 32/37.5rem;
    height: 32/37.5rem;
    background: hsla(0, 0%, 50%, .8);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 22/37.5rem;
    border-radius: 50%;
  }
}
</style>

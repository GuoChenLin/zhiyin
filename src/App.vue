<template>
  <div id="app">
    <transition :name="transitionName" mode='in-out'>
      <router-view class='cont'/>
    </transition>
    <!--底部导航栏-->
    <nav v-show='show'>
      <router-link to="/home" tag='a' active-class="actived">
        <span class='iconfont icon-shouye1'></span>
        <span>首页</span>
      </router-link>
      <router-link to='/classify' tag='a' active-class="actived">
        <span class='iconfont icon-fenlei1'></span>
        <span>分类</span>
      </router-link>
      <router-link to="/update" tag='a'  active-class="actived">
        <span class='iconfont icon-zhinanzhen1'></span>
        <span>更新</span>
      </router-link>
      <router-link to="/mine" tag='a' active-class="actived">
        <span class='iconfont icon-renqi1'></span>
        <span>我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 1,
      show: true,
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      // 进行路由判断，如鬼是classify页面就加一个进入动画
      const reg = /^\/classify/
      const reg2 = /^(\/sort|\/login)$/
      if (reg.test(to.path) || reg.test(from.path)) {
        this.transitionName = 'slide'
      } else if (reg2.test(to.path)) {
        this.transitionName = 'slide'
      } else {
        this.transitionName = ''
      }
      // 在详情页和分类页的时候，隐藏底部导航栏
      (to.name === 'detail' || to.name === 'sort' || to.name === 'login') ? this.show = false : this.show = true
    }
  }
}
</script>
<style lang="less">
  .widthheight(@width, @height) {
    width: @width/37.5rem;
    height: @height/37.5rem;
  }
  .cont {
    position: absolute;
    top: 0;
    left: 0;
  }
  nav {
    z-index: 999;
    height: 52/37.5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    color: #fff;
    display: flex;
    a {
      width: 25%;
      height: 100%;
      display: block;
      padding: 4/37.5rem 0;
      color: #000;
      span:first-of-type {
        display: block;
        .widthheight(22, 22);
        margin: 0 auto;
        line-height: 22/37.5rem;
        text-align: center;
        font-size: 22/37.5rem;
      }
      span:last-of-type {
        font-size: 12/37.5rem;
        display: block;
        margin-top: 3/37.5rem;
        text-align:center;
        color: #999;
      }
      &:nth-of-type(2) span:first-child{
        font-size: 24/37.5rem;
      }
      &:nth-of-type(3) span:first-child{
        font-size: 24/37.5rem;
      }
      &:nth-of-type(4) span:first-child{
        font-size: 24/37.5rem;
      }
    }
    // 底部导航栏点击的时候
    .actived {
      span {
        color: red !important;
      }
    }
  }
  .van-tabbar {
    z-index: 999;
  }
  .van-tabbar-item {
    font-size: 12/37.5rem;
    margin: 5/37.5rem 0;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    .icon {
      width: 16/37.5rem;
      height: 16/37.5rem;
      margin: 0 auto 4/37.5rem auto ;
    }
  }
  .fs {
    width: 28/37.5rem;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-enter-active {
    transition: transform .3s;
    transform: translateX(100%);
  }
  .slide-enter-to {
    transition: transform .3s;
    transform: translateX(0);
  }
  .slide-leave {
    transform: translateX(0);
  }
  .slide-leave-active {
    transition: transform .3s;
    transform: translateX(0);
  }
  .slide-leave-to {
    transition: transform .3s;
    transform: translateX(100%);
  }
</style>

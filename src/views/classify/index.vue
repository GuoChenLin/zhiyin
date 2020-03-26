<template>
  <transition name='slide'>
    <div class='classify'>
      <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <span class='back-icon' :style="`backgroundImage:url(${leftImg})`"></span>
        </template>
        <template #title>
          <div class='mod'>
            <router-link to='/classify/ticai' active-class="active" replace>题材</router-link>
            <router-link to='/classify/jindu' active-class="active" replace>进度</router-link>
            <router-link to='/classify/shouzhong' active-class="active" replace>受众</router-link>
            <router-link to='/classify/meiti' active-class="active" replace>媒体</router-link>
          </div>
        </template>
        <template #right >
          <van-icon name="search" class='search-icon'/>
        </template>
      </van-nav-bar>
      <router-view></router-view>
    </div>
  </transition>
</template>

<script>
import leftImg from '@/assets/icon/001.png'
export default {
  data () {
    return {
      leftImg: leftImg
    }
  },
  methods: {
    onClickLeft () {
      // const reg = /^(\/home|\/mine|\/classify|\/update)$/i
      // 这个问题可以吹一个星期
      // 首先是想着用正则能不能解决，结果获取不带上一个路由的信息。放弃
      // 最后去看了一下vue-router的api文档。找到了replace的方法。直接在嵌套的路由router-link上面写replace就实现了
      // 因为在上面写replace是不会调用router.push方法。也就不会保存在history中。调用roouter.replace方法来实现的
      this.$router.push('/')
    },
    onClickRight () {
      this.$router.push('/search')
    }
  },
  mounted () {
    this.$router.replace('/classify/ticai')
  }
}
</script>

<style scoped lang='less'>
  .classify {
    z-index: 9;
    background: #fff;
    .van-nav-bar__title {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
  .van-nav-bar {
    height: 44/37.5rem;
    background: #fc6454;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    a {
      display: inline-block;
      width: 56/37.5rem;
      height: 28/37.5rem;
      font-size: 12/37.5rem;
      line-height: 28/37.5rem;
      color: #fff;
      border: 1/37.5rem solid #fff;
      position: relative;
      // 在移动端1px变粗问题，待解决
      &:nth-child(2){
        left: -1/37.5rem;
        top: 0;
      }
      &:nth-child(3) {
        left: -2/37.5rem;
        top: 0;
      }
      &:nth-child(1) {
        border-radius: 4/37.5rem 0 0 4/37.5rem;
      }
      &:nth-child(4) {
        border-radius: 0 4/37.5rem 4/37.5rem 0;
        left: -3/37.5rem;
        top: 0;
      }
    }
    .search-icon {
      color: #fff !important;
      font-size: 24/37.5rem;
    }
    .back-icon {
      width: 46/37.5rem;
      height: 46/37.5rem;
      padding: 8/37.5rem;
      background-size: 24/37.5rem 24/37.5rem;
      display: block;
      background-size: 30/37.5rem 30/37.5rem;
      background-repeat: no-repeat;
      background-position: center;
      background-clip: content-box;
    }
    .active {
      background: #fff;
      color: #fc6454;
    }

  }
</style>

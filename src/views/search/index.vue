<template>
  <div>
    <header>
      <van-row>
        <van-col span="2">
          <span class='iconfont icon-arrow' @click.stop='back'></span>
        </van-col>
        <van-col span="20">
          <van-field v-model="value" placeholder="可按 漫画名或漫画家 搜索" />
        </van-col>
        <van-col span="2">
          <span class='iconfont icon-sousuo'></span>
        </van-col>
    </van-row>
    </header>
    <searchHot title='热门搜索'></searchHot>
    <!--搜索历史不做。就写个简单的就行了-->
    <searchHot title="搜索历史"></searchHot>
  </div>
</template>
<script>
import searchHot from './search_hot.vue'
export default {
  data () {
    return {
      msg: 'sousuo',
      value: ''
    }
  },
  components: {
    searchHot
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang='less'>
  header {
    height: 44/37.5rem;
    background: #FC6454;
    color: #fff;
    font-weight: bold;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .van-row {
    height: 100%;
  }
  .van-col {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20/37.5rem;
      color: hsla(0, 100%, 100%, 1)
    }
    .van-field {
      font-size: 12/37.5rem;
      color: #ccc;
      height: 28/37.5rem;
      width: 80%;
      padding: 0 0 0 24/37.5rem;
      line-height: 28/37.5rem;
      border-radius: 8/37.5rem;
    }
  }
</style>

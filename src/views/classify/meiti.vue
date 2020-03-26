<template>
  <div class='meiti'>
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="(item, index) in ticai" :key='index' :to='item.link'>
        <van-image :src="item.pic" />
        <p>{{item.name}}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ticai: [
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/028.png',
          name: '知音漫客',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/051.png',
          name: '漫客栈',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/029.png',
          name: '神漫',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/030.png',
          name: '枫漫画',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/052.png',
          name: '枫叶动漫',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/058.png',
          name: '其他',
          link: '/'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .meiti {
    width: 100%;
    min-height: 665/37.5rem;
    padding: 44/37.5rem 0 50/37.5rem 0;
    box-sizing: border-box;
    .van-grid-item {
      height: 100/37.5rem;
      margin: 16/37.5rem 0;
      .van-image {
        width: 80/37.5rem;
        height: 80/37.5rem;
      }
      p {
        margin-top: 4/37.5rem;
        height: 20/37.5rem;
        line-height: 20.37.5rem;
        font-size: 12/37.5rem;
        color: #999;
        opacity: .8;
      }
    }
  }
</style>

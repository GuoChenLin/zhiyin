<template>
  <div class='ticai'>
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
          pic: 'https://image.zymkcdn.com/file/sort/000/000/005.png',
          name: '热血',
          link: '/sort'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/006.png',
          name: '搞笑',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/007.png',
          name: '玄幻',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/008.png',
          name: '生活',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/009.png',
          name: '恋爱',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/010.png',
          name: '动作',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/011.png',
          name: '科幻',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/012.png',
          name: '战争',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/013.png',
          name: '悬疑',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/014.png',
          name: '恐怖',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/015.png',
          name: '校园',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/016.png',
          name: '历史',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/017.png',
          name: '穿鞋',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/018.png',
          name: '体育',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/019.png',
          name: '都市',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/020.png',
          name: '漫改',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/021.png',
          name: '修真',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/022.png',
          name: '霸总',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/063.png',
          name: '疾风',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/064.png',
          name: '游戏',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/065.png',
          name: '真人',
          link: '/'
        },
        {
          pic: 'https://image.zymkcdn.com/file/sort/000/000/066.png',
          name: '武侠',
          link: '/'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .ticai {
    height: 100%;
    width: 100%;
    padding:44/37.5rem 0 50/37.5rem 0;
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

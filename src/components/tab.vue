<template>
  <div>
    <van-tabs v-model="active">
      <van-tab>
        <div slot="title">
          <van-icon class='iconfont icon-renqi1' />人气版
        </div>
        <ul class='bigbox'>
          <li v-for="(item, index) in res[0]" :key="index">
            <div class='smallbox'>
              <div class='imgbox'>
                <img :src="item.pic" alt="缩略图">
              </div>
              <div class='content'>
                <h3>{{item.name}}</h3>
                <p><span>{{item.type[0]}}</span><span>{{item.type[1]}}</span><span>{{item.type[2]}}</span></p>
                <span><i class='iconfont icon-renqi1'></i>人气值:&nbsp;{{item.hot}}</span>
              </div>
            </div>
            <span class='num'>{{item.num}}</span>
          </li>
        </ul>
      </van-tab>
      <van-tab title="月票榜">
        <div slot="title">
          <van-icon class='iconfont icon-dashang1' />打赏榜
        </div>
        <ul class='bigbox'>
          <li v-for="(item, index) in res[1]" :key="index">
            <div class='smallbox'>
              <div class='imgbox'>
                <img :src="item.pic" alt="缩略图">
              </div>
              <div class='content'>
                <h3>{{item.name}}</h3>
                <p><span>{{item.type[0]}}</span><span>{{item.type[1]}}</span><span>{{item.type[2]}}</span></p>
                <span><i class='iconfont icon-renqi1'></i>人气值:&nbsp;{{item.hot}}</span>
              </div>
            </div>
            <span class='num'>{{item.num}}</span>
          </li>
        </ul>
      </van-tab>
      <van-tab>
        <div slot="title">
          <van-icon class='iconfont icon-piao1' />月票榜
        </div>
        <ul class='bigbox'>
          <li v-for="(item, index) in res[2]" :key="index">
            <div class='smallbox'>
              <div class='imgbox'>
                <img :src="item.pic" alt="缩略图">
              </div>
              <div class='content'>
                <h3>{{item.name}}</h3>
                <p><span>{{item.type[0]}}</span><span>{{item.type[1]}}</span><span>{{item.type[2]}}</span></p>
                <span><i class='iconfont icon-renqi1'></i>人气值:&nbsp;{{item.hot}}</span>
              </div>
            </div>
            <span class='num'>{{item.num}}</span>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      // 直接模拟数据
      res: [
        [
          {
            name: '斗破苍穹',
            type: ['玄幻', '热血', '修真'],
            hot: '56.3亿',
            num: '01',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400'
          },
          {
            name: '穿越西元3000后',
            type: ['穿越', '恋爱', '战争'],
            hot: '19.4亿',
            num: '02',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/100.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '03',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/145.jpg-300x400'
          },
          {
            name: '凤逆天下',
            type: ['穿越', '玄幻', '热血'],
            hot: '16.4亿',
            num: '04',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '05',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          }
        ],
        [
          {
            name: '斗破苍穹',
            type: ['玄幻', '热血', '修真'],
            hot: '56.3亿',
            num: '01',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400'
          },
          {
            name: '斗罗大陆',
            type: ['穿越', '恋爱', '战争'],
            hot: '19.4亿',
            num: '02',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          },
          {
            name: '元尊',
            type: ['穿越', '修真', '游戏'],
            hot: '15.4亿',
            num: '03',
            pic: 'https://image.zymkcdn.com/file/cover/000/001/966.jpg-300x400'
          },
          {
            name: '凤逆天下',
            type: ['穿越', '玄幻', '热血'],
            hot: '16.4亿',
            num: '04',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '05',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          },
          {
            name: '斗破苍穹',
            type: ['玄幻', '热血', '修真'],
            hot: '56.3亿',
            num: '06',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/001.jpg-300x400'
          },
          {
            name: '斗罗大陆',
            type: ['穿越', '恋爱', '战争'],
            hot: '19.4亿',
            num: '07',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          },
          {
            name: '元尊',
            type: ['穿越', '修真', '游戏'],
            hot: '15.4亿',
            num: '08',
            pic: 'https://image.zymkcdn.com/file/cover/000/001/966.jpg-300x400'
          },
          {
            name: '凤逆天下',
            type: ['穿越', '玄幻', '热血'],
            hot: '16.4亿',
            num: '09',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '10',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          }
        ],
        [
          {
            name: '绝世唐门',
            type: ['玄幻', '热血', '修真'],
            hot: '56.3亿',
            num: '01',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/609.jpg-300x400'
          },
          {
            name: '凤逆天下',
            type: ['穿越', '玄幻', '热血'],
            hot: '16.4亿',
            num: '02',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '03',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          },
          {
            name: '穿越西元3000后',
            type: ['穿越', '恋爱', '战争'],
            hot: '19.4亿',
            num: '04',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/100.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '05',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/145.jpg-300x400'
          },
          {
            name: '凤逆天下',
            type: ['穿越', '玄幻', '热血'],
            hot: '16.4亿',
            num: '06',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/101.jpg-300x400'
          },
          {
            name: '风起苍蓝',
            type: ['穿越', '修真', '游戏'],
            hot: '19.4亿',
            num: '07',
            pic: 'https://image.zymkcdn.com/file/cover/000/000/002.jpg-300x400'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .bigbox {
    li {
      height: 74/37.5rem;
      margin: 20/37.5rem 0;
      padding: 8/37.5rem 12/37.5rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: #ccc;
      &:first-of-type {
        background: #fc7365;
      }
      &:nth-of-type(2) {
        background: #ff9f71;
      }
      &:nth-of-type(3) {
        background: #ffc477;
      }
      .smallbox {
        display: flex;
        flex-direction: row;
        margin-top: -20/37.5rem;
        .imgbox {
          img {
            width: 60/37.5rem;
            height: 80/37.5rem;
          }
        }
      }
      .content {
        font-size: 14/37.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 12/37.5rem;
        color: #fff;
        h3 {
          font-weight: 600;
          font-size: 14/37.5rem;
        }
        p {
          margin: 2/37.5rem 0;
          span {
            padding: 0 10/37.5rem;
            background: hsla(0, 100%, 0%, .2);
            margin-right: 6/37.5rem;
            border-radius: 20/37.5rem;
            line-height: 20/37.5rem;
            font-size: 12/37.5rem;
          }
        }
        & > span {
          font-size: 12/37.5rem;
          i {
            margin-right: 6/37.5rem;
          }
        }
      }
      .num {
        color: #fff;
        font-weight: normal;
      }
    }
  }
</style>

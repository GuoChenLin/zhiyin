<template>
  <div id='updatepage'>
    <van-tabs v-model="active"
        title-active-color="red"
        animated
        line-height="0"
        background="#fff"
        sticky
        >
      <van-tab
        v-for="(item, index) in days"
        :key='index'
        :title='item.day'
        title-style="'border: none'"
        >
        <!--内容-->
        <div v-for='(t, i) in item.data' :key='i' class='content-box'>
          <div class='imgbox'>
            <img :src="t.pic" alt="bigImg">
            <span class='hot'><i class='iconfont icon-renqi'></i>{{t.hot}}</span>
          </div>
          <h3>{{t.name}}</h3>
          <p>{{t.desc}}</p>
          <p>{{t.now}}</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      days: [
        {
          day: '周一',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/172_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金惨遭背叛，五年后携宝贝归来',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/172_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '周二',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/049_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '150万',
              name: '医妃倾城：王妃要休夫',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/051_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '45万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/070_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '560万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/051_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '210万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '周三',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/178_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '周四',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/056_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '周五',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/172_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '昨天',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/049_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '150万',
              name: '医妃倾城：王妃要休夫',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/051_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '45万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/172_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/173_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        },
        {
          day: '今天',
          data: [
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/172_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '530万',
              name: '金牌甜妻',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/049_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '150万',
              name: '医妃倾城：王妃要休夫',
              desc: '名门千金遭背叛，我年后携宝贝回归',
              now: '更新到208话 顾念城的好主意'
            },
            {
              pic: 'https://image.zymkcdn.com/file/cover/000/004/051_2_1.jpg-720x360.jpg',
              link: '/',
              hot: '45万',
              name: '王爷，女家减个肥',
              desc: '穿越成了大胖子是真的吗？',
              now: '更新到1028话 王爷害羞了'
            }
          ]
        }
      ],
      active: 0
    }
  }
}
</script>

<style lang='less'>
  #updatepage {
    width: 100%;
    min-height: 100%;
    padding-bottom: 50/37.5rem;
    font-family: SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif;
    background-color: #f5f5f5;
    z-index: 1;
    .van-tabs {
      width: 100%;
      .van-tabs__nav {
        padding: 0 10/37.5rem;
        z-index: 1;
      }
      .van-tab {
        flex-basis: 100/7% !important;
        padding: 0;
      }
    }
  }
  .content-box {
    width: 100%;
    font-size: 12/37.5rem;
    height: 260/37.5rem;
    font-family: 'SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif';
    .imgbox {
      width: 100%;
      height: 187/37.5rem;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .hot {
        font-family: 'SimHei,Microsoft Yahei,SimSun,Tahoma,arial,sans-serif';
        position: absolute;
        right: 15/37.5rem;
        bottom: 20/37.5rem;
        color: #fff;
        background: hsla(0, 100%, 0%, .5);
        text-align:center;
        border-radius: 22/37.5rem;
        padding: 4/37.5rem 6/37.5rem;
        box-sizing: border-box;
        line-height: 13/37.5rem;
        opacity: .8;
        i {
          font-size: 14/37.5rem;
          color: red;
          margin-right: 2/37.5rem;
        }
      }
    }
    h3 {
      width: 100%;
      height: 25/37.5rem;
      font-size: 12/37.5rem;
      font-weight: 600;
      text-indent: 14/37.5rem;
      vertical-align: bottom;
      display: table-cell;
    }
    p:first-of-type {
      color: #999;
      text-indent: 14/37.5rem;
    }
    p:last-of-type {
      color: #999;
      padding-right: 14/37.5rem;
      text-align: right;
    }
  }
</style>

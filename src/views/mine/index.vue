<template>
  <div id='mine'>
    <!--头部-->
    <header>
      <div class='profile'>
        <div class='bg_profile'></div>
        <div class='contentBox'>
          <div class='unlogin'>
            <img src="http://www.guocheng54.com/newblog/zhiyinmanke/unlogin.png" alt="">
            <span>zhiyinmanke<i class='sex'></i></span>
            <span><i class='iconfont icon-renqi2'></i>漫客_12345678</span>
          </div>
          <div class='single' style="backgroundImage:url('http://www.guocheng54.com/newblog/zhiyinmanke/signinbtn.png')"> </div>
        </div>
      </div>
    </header>
    <!--月票、关注、粉丝-->
    <div class='data-box'>
      <van-panel class='outer-box'>
        <template #header>
          <div class='red-box'>
            <router-link to='/'>粉丝 0</router-link>
            <router-link to='/'>关注 0</router-link>
            <router-link to='/'>动态 0</router-link>
          </div>
        </template>
        <div class='white-box'>
          <div class='inner-box'>
            <span class='iconfont icon-yuanbao-copy'></span>
            <div class='item'>
              <span>元宝</span>
              <span>0</span>
            </div>
          </div>
          <div class='inner-box'>
            <span class='iconfont icon-tuijian_cur'></span>
            <div class='item'>
              <span>推荐</span>
              <span>2</span>
            </div>
          </div>
          <div class='inner-box'>
            <span class='iconfont icon-piao2'></span>
            <div class='item'>
              <span>月票</span>
              <span>0</span>
            </div>
          </div>
        </div>
      </van-panel>
    </div>
    <!--订阅和历史-->
    <div class='history'>
      <van-row class='title_tab'>
        <van-col span="4">
          <router-link :to="{'name':'reading'}" active-class='active-tab'>订阅</router-link>
        </van-col>
        <van-col span="4">
          <router-link :to="{'name':'history'}" active-class='active-tab'>历史</router-link>
        </van-col>
      </van-row>
      <transition :name="transfromName" >
        <router-view class='con'></router-view>
      </transition>
    </div>
    <div class='helper'>
      <ul>
        <router-link to='/' tag='li'>
          <div><span class='iconfont icon-yuanbao-copy'></span>充值中心</div>
          <p>元宝充值，解锁新章节，不剁手不舒服斯基</p>
        </router-link>
        <router-link to='/' tag='li'>
          <div><span class='iconfont icon-shiyongbangzhu'></span>使用帮助</div>
          <p>找编辑，meme么么哒～</p>
        </router-link>
        <router-link to='/' tag='li'>
          <div><span class='iconfont icon-fankui'></span>反馈报错</div>
          <p>有大把时间可以找错，欢迎你</p>
        </router-link>
      </ul>
    </div>
    <router-link to='/login' tag='div' class='loginin'>登陆</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      transfromName: ''
    }
  },
  watch: {
    $route: {
      handler (to, from) {
        to.name === 'history' ? this.transfromName = 'slideLeft' : this.transfromName = 'slideRight'
      }
    }
  }
}
</script>
<style scoped lang='less'>
  #mine {
    padding-bottom: 60/37.5rem;
    background: #f5f5f5;
  }
  // 头部样式
  .profile {
    width: 100%;
    height: 195/37.5rem;
    overflow: hidden;
    position: relative;
    // 难点在于如果指定模糊的效果。那怎么办？
    .bg_profile {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('http://www.guocheng54.com/newblog/zhiyinmanke/dujia/dijia3.jpg') -10% -90% no-repeat;
      background-size: 100% 100%;
      filter: blur(30/37.5rem);
      opacity: .6;
      background-color: #000;
    }
    .contentBox {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      .single {
        width: 35/37.5rem;
        height: 74/37.5rem;
        background-size: 100% 100%;
        background-position: center center;
        position: absolute;
        top: 22/37.5rem;
        right: 15/37.5rem;
      }
      .unlogin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 124/37.5rem;
        margin: 24/37.5rem auto;
        img {
          width: 80/37.5rem;
          height: 80/37.5rem;
        }
        span:first-of-type {
          font-size: 14/37.5rem;
          i {
            background: url('https://m.zymk.cn/static/images/default/icons/male.png') center center no-repeat;
            width: 15/37.5rem;
            height: 15/37.5rem;
            display: inline-block;
            background-size: 100% 100%;
            vertical-align: middle;
            margin-left: 4/37.5rem;
          }
        }
        span:last-of-type {
          font-size: 12/37.5rem;
          i {
            font-size: 12/37.5rem;
          }
        }
      }
    }
  }
  // data盒子
  .data-box {
    width: 100%;
    height: 62/37.5rem;
    background: #f6f6f6;
    position: relative;
    z-index: 5;
    .outer-box {
      position: relative;
      bottom: 30/37.5rem;
      left: 0;
      margin: 0 auto;
      width: 323/37.5rem;
      height: 80/37.5rem;
      background: transparent;
      opacity: .8;
      .red-box {
        background: #fc6454;
        width: 323/37.5rem;
        height: 30/37.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 12/37.5rem 12/37.5rem 0 0;
        a {
          flex: 1;
          color: #fff;
          font-size: 12/37.5rem;
          text-align: center;
        }
      }
      .white-box {
        background: #fff;
        width: 100%;
        height: 50/37.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 12/37.5rem 12/37.5rem;
        .inner-box {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 14/37.5rem;
          flex: 1;
          .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:first-of-type {
              color: #999;
            }
            &:last-of-type {
              color: #000;
            }
            span:nth-of-type(1) {
              color: #b9b9b9;
            }
            span:nth-of-type(2) {
              color: #666;
            }
          }
          &:nth-of-type(1) .iconfont {
            font-size: 24/37.5rem;
            margin-right: 4/37.5rem;
            color: #FFD700;
          }
          &:nth-of-type(2) .iconfont {
            font-size: 24/37.5rem;
            margin-right: 4/37.5rem;
            color: #00FF7F;
          }
          &:nth-of-type(3) .iconfont {
            font-size: 24/37.5rem;
            margin-right: 4/37.5rem;
            color: #DC143C;
          }
        }
      }
    }
  }
  // 订阅、历史
  .history {
    height: 246/37.5rem;
    font-size: 14/37.5rem;
    .title_tab {
      height: 44/37.5rem;
      line-height: 44/37.5rem;
      border-bottom: 1/37.5rem solid #ccc;
      background: #fff;
      .van-col {
        height: 100%;
        text-align: center;
        a {
          width: 100%;
          height: 100%;
          text-align: center;
          display: block;
          color: #666;
        }
      }
      .active-tab {
        border-bottom: 2/37.5rem solid red;
        color: red !important;
      }
    }
    .con {
      height: 202/37.5rem;
      position: absolute;
      width: 100%;
      text-align: center;
      background: url('http://www.guocheng54.com/newblog/zhiyinmanke/unlogin.png') center center no-repeat;
      background-size: 80/37.5rem 80/37.5rem;
      background-color: #fff;
    }
  }
  // 订阅、历史滑动效果
  .slideLeft-leave {
    transform: translateX(0);
  }
  .slideLeft-leave-active {
    transform: translateX(0);
    transition: transform .2s;
  }
  .slideLeft-leave-to {
    transform: translateX(-100%);
    transition: transform .2s;
  }
  .slideLeft-enter {
    transform: translateX(100%);
    transition: transform .2s;
  }
  .slideLeft-enter-active {
    transform: translateX(100%);
    transition: transform .2s;
  }
  .slideLeft-enter-to {
    transform: translateX(0);
    transition: transform .2s;
  }
  // 向右华
  .slideRight-leave {
    transform: translateX(0);
  }
  .slideRight-leave-active {
    transform: translateX(0);
    transition: transform .2s;
  }
  .slideRight-leave-to {
    transform: translateX(100%);
    transition: transform .2s;
  }
  .slideRight-enter {
    transform: translateX(-100%);
  }
  .slideRight-enter-active {
    transform: translateX(-100%);
    transition: transform .2s;
  }
  .slideRight-enter-to {
    transform: translateX(0);
    transition: transform .2s;
  }
  // 充值中心、反馈问题
  .helper {
    padding: 10/37.5rem 0;
    background: #f3f3f3;
    li {
      height: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      font-size: 14/37.5rem;
      background: #fff;
      margin-bottom: 2/37.5rem;
      padding: 0 12/37.5rem;
      div {
        flex: 1;
        .iconfont {
          font-size: 18/37.5rem;
          margin-right: 6/37.5rem;
        }
      }
      p {
        flex: 2;
        font-size: 12/37.5rem;
        color: #ccc;
        text-align: right;
      }
      // 单独控制颜色
      &:nth-of-type(1) .iconfont {
        color: #FFD700;
      }
      &:nth-of-type(2) .iconfont {
        color: #00FF7F;
        font-size: 20/37.5rem !important;
      }
      &:nth-of-type(3) .iconfont {
        color: #DC143C;
      }
    }
  }
  .loginin {
    width: 356/37.5rem;
    height: 42/37.5rem;
    background: #fc6454;
    border: 1px solid #eaeaea;
    margin: 20/37.5rem 10/37.5rem;
    color: #fff;
    border-radius: 5/37.5rem;
    text-align: center;
    line-height: 42/37.5rem;
    font-size: 14/37.5rem;
  }
</style>

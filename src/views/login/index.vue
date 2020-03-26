<template>
  <div id='loginpage'>
    <header>
      <span class='iconfont icon-arrow' @click='back'></span>
      <span>登陆</span>
    </header>
    <div class='loginimg'>
      <img :src="loginImg" alt="登陆">
    </div>
    <div class='login_banner1' v-if='isActive'></div>
    <div class='login_banner2' v-else></div>
    <div class='loginInfo'>
      <van-field v-model="username" @blur="checkusername" placeholder='请输入手机号码' label-class='fs' v-if='isphone'>
        <template #label>
          <label class='iconfont icon-renqi1'></label>
        </template>
      </van-field>
      <van-field v-model="username" @blur="checkusername" placeholder='请输入星球号、手机号、邮箱' label-class='fs' v-else>
        <template #label>
          <label class='iconfont icon-renqi1'></label>
        </template>
      </van-field>
      <van-field v-model="password" @blur="checkpass" type="password" placeholder='请输入手机验证码' class='mb_50' label-class='fs' v-if='isphone'>
        <template #label>
           <label class='icon-chongzhizhongxin iconfont'></label>
        </template>
        <template #button>
          <van-button size="small" type="default" @click='sendcode' :disabled='able'>{{code}}</van-button>
        </template>
      </van-field>
      <van-field v-model="password" @blur='checkpass' type="password" placeholder='请输入密码' label-class='fs' v-else>
        <template #label>
           <label class='icon-chongzhizhongxin iconfont'></label>
        </template>
      </van-field>
      <div class='forget-box' v-show='!isphone'>
        <span>忘记密码</span>
      </div>
      <div class='loginbtn'>
        <van-button type='default' size='big'>登陆</van-button>
      </div>
      <div class='switchLogin' @click='switchlogin'>
        <span v-show='isphone'>使用登陆密码（漫客星球用户）</span>
        <span v-show='!isphone'>手机验证码登陆</span>
      </div>
    </div>
    <!--第三方登陆-->
    <div class='third—party'>
      <span>使用第三方账号登陆</span>
      <div class='loginicon'>
        <span :style="`backgroundImage: url(${xinlang})`"></span>
        <span :style="`backgroundImage: url(${qq})`"></span>
      </div>
      <span>登陆代表您已经阅读并且同意<strong>《知音漫客用户协议》</strong></span>
    </div>
  </div>
</template>

<script>
import loginImg from '@/assets/login.png'
import bannerImg1 from '@/assets/login_bananer1.png'
import bannerImg2 from '@/assets/login_bananer2.png'
import xinlang from '@/assets/icon/xinlang.jpeg'
import qq from '@/assets/icon/qq.jpeg'
export default {
  data () {
    return {
      loginImg: loginImg,
      bannerImg1: bannerImg1,
      bannerImg2: bannerImg2,
      isActive: true,
      username: '',
      password: '',
      isphone: true,
      xinlang: xinlang,
      qq: qq,
      code: '发送验证码',
      able: false
    }
  },
  methods: {
    switchlogin () {
      this.username = ''
      this.password = ''
      this.isphone = !this.isphone
      this.isActive = !this.isActive
    },
    back () {
      this.$router.back()
    },
    // 验证手机和邮箱
    checkusername () {
      // 手机正则
      const reg = /^[1][3-9]\d{9}$/
      // 手机和邮箱一起的正则
      const phoneEmail = /^([1][3-9]\d{9}|[\w/-]+@[\w]+(\.\w+){1,3})$/
      if (!reg.test(this.username) && this.username !== '' && this.isphone) {
        this.$notify({
          message: '您输入的用户名格式错误',
          duration: 1000,
          type: 'warning'
        })
      }
      if (this.username === '' && this.isphone) {
        this.$notify({
          message: '您输入的用户名不能为空',
          duration: 1000,
          type: 'warning'
        })
      }
      if (!phoneEmail.test(this.username) && this.username !== '' && !this.isphone) {
        this.$notify({
          message: '请输入手机号码或者邮箱格式的账户名',
          duration: 1500,
          type: 'primary'
        })
      }
      if (this.username === '' && !this.isphone) {
        this.$notify({
          message: '账户名不能为空',
          duration: 1200,
          type: 'primary'
        })
      }
    },
    // 验证密码和验证码
    checkpass () {
      // 验证码规则
      const reg = /^\d{6}$/
      // 密码规则 : 6-12位有效字符
      const pass = /^\w{6,12}$/
      // 是手机号的情况下，就需要使用reg
      if (!reg.test(this.password) && this.password !== '' && this.isphone) {
        this.$notify({
          type: 'warning',
          duration: 1200,
          message: '输入验证码的格式错误'
        })
      }
      if (this.password === '' && this.isphone) {
        this.$notify({
          type: 'primary',
          duration: 1200,
          message: '验证码不能为空'
        })
      }
      if (!pass.test(this.password) && this.password !== '' && !this.isphone) {
        this.$notify({
          type: 'warning',
          duration: 1200,
          message: '输入密码的格式错误'
        })
      }
      if (this.password === '' && !this.isphone) {
        this.$notify({
          type: 'primary',
          duration: 1200,
          message: '密码不能为空'
        })
      }
    },
    sendcode () {
      // 发送验证码
      this.checkusername()
      const reg = /^[1][3-9]\d{9}$/
      if (reg.test(this.username) && this.isphone) {
        // 1、让服务器给这个手机号码发动验证码
        // 2、做一个定时器
        let i = 60
        const that = this
        let timer = null
        this.able = true
        timer = setInterval(function () {
          if (i === 0) {
            that.able = false
            that.code = '发送验证码'
            clearInterval(timer)
          } else {
            that.code = --i + 's'
          }
        }, 1000)
        console.log(timer)
      }
    }
  }
}
</script>

<style scoped lang='less'>
  #loginpage {
    z-index: 999;
    position: relative;
    background: #fff;
    max-height: 100%;
    width: 100%;
    position: fixed;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 44/37.5rem;
    background: #fc6454;
    padding: 0 16/37.5rem;
    span {
      text-align: left;
      color: #fff;
      font-size: 14/37.5rem;
    }
    span:first-of-type {
      flex: 4;
    }
    span:last-of-type {
      flex: 5;
    }
  }
  .loginimg {
    margin: 20/37.5rem auto;
    height: 90/37.5rem;
    width: 90/37.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login_banner1, .login_banner2 {
    height: 12/37.5rem;
    width: 100%;
    background: url('https://m.zymk.cn/static/images/default/login_bananer1.png') center center no-repeat;
    background-size: 100% 100%;
  }
  .login_banner2 {
    background: url('https://m.zymk.cn/static/images/default/login_bananer2.png') center center no-repeat;
    background-size: 100% 100%;
  }
  // 账户密码
  .loginInfo {
    width: 100%;
    margin: 30/37.5rem 0;
    .van-field {
      border-bottom: 1/37rem solid #ccc;
      margin: 0 auto;
      width: 315/37.5rem;
      font-size: 12/37.5rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .van-button {
        color: orangered;
        border: 1/37.5rem solid red;
        border-radius: 2/37.5rem;
      }
      label {
        font-size: 24/37.5rem;
        color: orangered;
      }
    }
    .mb_50 {
      margin-bottom: 46/37.5rem;
    }
    .loginbtn {
      width: 315/37.5rem;
      height: 44/37.5rem;
      margin: 0 auto 32/37.5rem;
      .van-button {
        color: #fc6454;
        border: 1/37.5rem solid #fc6454;
        width: 100%;
        height: 100%;
      }
    }
    .switchLogin {
      height: 20/37.5rem;
      line-height: 20/37.5rem;
      text-align: center;
      font-size: 12/37.5rem;
      color: red;
    }
    // 忘记密码
    .forget-box {
      width: 100%;
      padding: 8/37.5rem 30/37.5rem 20/37.5rem;
      text-align: right;
      font-size: 14/37.5rem;
      color: #fc6454;
    }
  }
  // 第三方登陆
  .third—party {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 12/37.5rem;
    height: 180/37.5rem;
    color: #b9b9b9;
    .loginicon {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 46%;
      span {
        display: block;
        width: 48/37.5rem;
        height: 48/37.5rem;
        text-align: center;
        line-height: 48/37.5rem;
        background-position: center center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 50%;
      }
      strong {
        color: #000;
      }
    }
  }
</style>

<template>
 <div class='sginDiv'>
      <img :src="nameInput? homeImg.smile: homeImg.mail" alt=""/>
      <h1>{{nameInput?'第一次来吧，取个名呗':'邮箱地址登陆'}}</h1>
      <p>{{nameInput?'净化荧屏，世界和平。请勿使用敏感词汇':'邮箱地址是您的唯一标示，认真点啊'}}</p>
      <div class='sginInput'>
        <input type="text" :placeholder="nameInput?'请输入用户名':'请输入您的邮箱'" ref="inputer"/>
        <button v-if="nameInput" :class="erro?'buttonAnimate':''" @click="getName">OK</button>
        <button v-else :class="erro?'buttonAnimate':''" @click="getUser">OK</button>
      </div>
      <!-- <CSSTransition
        in={this.state.erro}
          key='tests'
          timeout={200}
          unmountOnExit
          classNames="fade"> -->
      <div class='erroText'>{{erroText}}</div>
      <!-- </CSSTransition> -->
    </div>
</template>

<script>
import checkText from '@/utils/checkText'
export default {
  name: 'sginIn',
  data () {
    return {
      email: null,
      name: null,
      nameInput: false,
      erro: false,
      erroText: ''
    }
  },
  methods: {
    // 邮箱地址请求
    async getUser () {
      let dom = this.$refs.inputer
      if (this.erro) return false // 判断是否在执行错误提示的动画
      const value = dom.value.toString().replace(/<|>/g, ' ')
      const checkMail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (!checkMail.test(value)) return this.upErro('请输入正确的邮箱地址!')
      try {
        let response = await this.$api.getUserApi({ email: value })
        if (response.data.status === 1) {
          this.isOk(response.data.data.name, response.data.data.email)
        } else {
          this.nameInput = true
          console.log(this.state.value)
          this.email = value
          dom.value = ''
        }
      } catch (err) {
        console.log(err)
        this.isErro()
      }
    },
    // 获取用户名请求注册接口
    async getName () {
      let dom = this.$refs.inputer
      if (this.state.erro) return false
      const value = dom.value.toString().replace(/<|>/g, ' ')
      if (!this.CheckTexts(value)) return this.upErro('禁止使用敏感词汇！')
      try {
        let params = { email: this.email, name: value }
        let response = await this.$api.saveUserApi(params)
        if (response.data.status === 1) {
          this.isOk(response.data.data.name, response.data.data.email)
        } else {
          this.isErro()
        }
      } catch (err) {
        console.log(err)
        this.isErro()
      }
    },
    // 敏感词检测
    CheckTexts (str) {
      for (let i = 0; i - checkText.length; i++) {
        if (str.indexOf(checkText[i]) > -1) return false
      }
      return true
    },
    // 注册或登陆成功，将保存用户名和email账号
    isOk (name, email) {
      this.name = name
      this.email = email
    },
    upErro (text) {
      this.erro = true
      this.erroText = text
      this.timeOuts = setTimeout(() => { this.erro = false }, 2000)
    }
  },
  beforeDestroy () {
    clearTimeout(this.timeOuts)
  }
}
</script>

<style lang='scss' scoped>

</style>

<template>
  <div class="sginDiv">
    <img :src="nameInput? $imgUrls.homeImg.smile: $imgUrls.homeImg.mail" alt />
    <h1>{{nameInput?'第一次来吧，取个名呗':'邮箱地址登陆'}}</h1>
    <p>{{nameInput?'净化荧屏，世界和平。请勿使用敏感词汇':'邮箱地址是您的唯一标示，认真点啊'}}</p>
    <div class="sginInput">
      <input type="text" :placeholder="nameInput?'请输入用户名':'请输入您的邮箱'" ref="inputer" />
      <button v-if="!nameInput" :class="erro?'buttonAnimate':''" @click="getUser">OK1</button>
      <button v-else :class="erro?'buttonAnimate':''" @click="saveUser">OK2</button>
    </div>
    <fade-transition animationName='bounce'>
      <div v-if="erro" class="erroText">{{erroText}}</div>
    </fade-transition>
  </div>
</template>

<script>
import checkText from '@/utils/checkText'
import fadeTransition from '@/components/transition/fadeTransition'
export default {
  name: 'sginIn',
  components: {
    fadeTransition
  },
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
    // 1根据邮箱判断用户是否存在
    async getUser () {
      let dom = this.$refs.inputer
      if (this.erro) return false // 判断是否在执行错误提示的动画
      const value = dom.value.toString().replace(/<|>/g, ' ')
      const checkMail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (!checkMail.test(value)) return this.upErro('请输入正确的邮箱地址!')
      try {
        let response = await this.$api.getUserApi({ email: value })
        if (response.data.status === 1) {
          this.isOk(response.data.data.name, response.data.data.email, response.data.data)
        } else {
          this.nameInput = true
          this.email = value
          dom.value = ''
        }
      } catch (err) {
        console.log(err)
        this.isErro()
      }
    },
    // 2根据用户名保存用户
    async saveUser () {
      let dom = this.$refs.inputer
      if (this.erro) return false
      const value = dom.value.toString().replace(/<|>/g, ' ')
      if (!this.CheckTexts(value)) return this.upErro('禁止使用敏感词汇！')
      try {
        let params = { email: this.email, name: value }
        let response = await this.$api.saveUserApi(params)
        if (response.data.status === 1) {
          this.isOk(response.data.data.name, response.data.data.email, response.data.data)
        } else {
          console.log(response)
        }
      } catch (err) {
        console.log(err)
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
    isOk (name, email, userObj) {
      this.name = name
      this.email = email
      sessionStorage.setItem('userObj', JSON.stringify(userObj))
      this.$store.commit('initUser')
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
@import "./sginIn.scss";
</style>

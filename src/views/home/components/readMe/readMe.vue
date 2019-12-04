<template>
  <vue-modal v-model="readMeVisible" :config="showMeConfig">
    <ul class="settBox">
      <li>
        <div class="glitch">
          <img :src="homeImg.glitch" alt />
        </div>
      </li>
      <li>Mr.S Personal Web</li>
      <li>v1.1.0</li>
      <li class="settLink">
        <a class="needsclick" @click="toAbout">View More</a>
      </li>
      <li>
        <hr align="center" width="60%" style="margin:18px auto" color="#b99f51" size="1" />
      </li>
      <li>
        <em v-if="user.emai">{{user.emai}}</em>
        <a v-else @click="login">尚未登陆</a>
      </li>
      <li>
        <em>{{user.name}}</em>
      </li>
    </ul>
  </vue-modal>
</template>

<script>
export default {
  name: 'readMe',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showMeConfig: {
        title: '说明',
        style: 'main',
        type: 'center'
      },
      user: {
        name: '222'
      },
      readMeVisible: this.value
    }
  },
  mounted () {
  },
  methods: {
    toAbout () {

    },
    login () {

    }
  },
  watch: {
    value (val) {
      // 接收home向下传递的值
      this.readMeVisible = val
    },
    readMeVisible (val) {
      // 向上home传递
      this.$emit('input', val)
    }
  },
  computed: {
    homeImg () {
      return this.$imgUrls.homeImg
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./readMe.scss";
</style>

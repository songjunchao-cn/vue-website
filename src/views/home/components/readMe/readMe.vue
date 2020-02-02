<template>
    <ul class="settBox">
      <li>
        <div class="glitch">
          <img :src="homeImg.glitch" alt />
        </div>
      </li>
      <li>Mr.S Personal Web</li>
      <li>v1.1.0</li>
      <li class="settLink">
        <a class="needsclick" @click="$router.push('about')">View More</a>
      </li>
      <li>
        <hr align="center" width="60%" style="margin:18px auto" color="#b99f51" size="1" />
      </li>
      <li>
        <em v-if="userObj.email">{{userObj.email}}</em>
        <a v-else @click="toggleShow">尚未登陆</a>
      </li>
      <vue-modal :config='sginInConfig' v-model="sginInVisable">
        <sgin-in></sgin-in>
      </vue-modal>
    </ul>
</template>

<script>
import sginIn from '@/components/sginIn/sginIn'
export default {
  name: 'readMe',
  components: {
    sginIn
  },
  data () {
    return {
      sginInConfig: {
        title: '登录',
        style: 'white',
        type: 'center'
      },
      sginInVisable: false
    }
  },
  mounted () {
    this.$store.commit('initUser')
  },
  methods: {
    toggleShow () {
      this.sginInVisable = true
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
    },
    'userObj.email': {
      handler: function (val) {
        if (val) this.sginInVisable = false
      }
    }
  },
  computed: {
    homeImg () {
      return this.$imgUrls.homeImg
    },
    userObj () {
      return this.$store.state.userObj || {}
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./readMe.scss";
</style>

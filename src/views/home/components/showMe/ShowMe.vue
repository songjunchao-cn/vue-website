<template>
  <vue-modal v-model="showMeVisible" :config="showMeConfig">
    <ul class="settBox">
      <li>
        <div class="glitch">
          <img :src="homeImg.glitch" alt />
        </div>
      </li>
      <li>Mr.S Personal Web</li>
      <li>v1.1.0</li>
      <li class="settLink">
        <a class="needsclick" onClick="{this.toAbout}">View More</a>
      </li>
      <li>
        <hr align="center" width="60%" style="margin:18px auto" color="#b99f51" size="1" />
      </li>
      <!-- <li>{this.props.other.user.email
              ?<em>{this.props.other.user.email}</em>
              :<a onClick={this.showSign.bind(this)}>尚未登陆</a>}
      </li>-->
      <li>
        <em>{user.name}</em>
      </li>
    </ul>
  </vue-modal>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      showMeVisible: true,
      showMeConfig: {
        title: '说明',
        style: 'main'
      }
    }
  },
  mounted () {
    console.log(this.$imgUrls.homeImg)
  },
  methods: {},
  computed: {
    homeImg () {
      return this.$imgUrls.homeImg
    }
  }
}
</script>

<style lang='scss' scoped>
@import "./show.scss";
</style>

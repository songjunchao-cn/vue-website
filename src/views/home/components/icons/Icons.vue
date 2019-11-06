<template>
  <div class="figureBox">
    <div class="figure-flex" v-for="item in figures" :key="item.src">
      <figure @click="showItem(item)">
        <img :src="item.src" alt />
        <figcaption>{{item.text}}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import { homeIcon } from '@/components/imgurls'
export default {
  data () {
    return {
      figures: [
        {
          src: homeIcon.sup,
          text: '点赞',
          isShow: false,
          unmove: true
          // child: SupPug,
          // type: 'none',
          // add: {
          //   num: 0,
          //   upSup: this.upSup.bind(this) }
        },
        {
          src: homeIcon.readme,
          text: '说明',
          isShow: false,
          // child: ShowMe,
          type: 'main'
        },
        {
          src: homeIcon.msg,
          text: '留言',
          isShow: false,
          // child: Msgs,
          type: 'wathet'
        },
        {
          src: homeIcon.setting,
          text: '设置',
          isShow: false,
          // child: Setting,
          type: 'setting'
        }
      ]
    }
  },
  methods: {
    showItem (item) {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./icon.scss";
</style>

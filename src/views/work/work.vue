<template>
  <main class="scroll">
    <div style="height:'auto';padding-bottom:'6rem'" class="app-center">
      <ListComponent title="Work" :figures="workFigure" />
      <ListComponent title="Code" :figures="codeFigure" />
      <div @click="toAbout" class="more">
        <span class="moreIcon">
          <i></i>
        </span>
         <a @click="$router.push('about')">VIEW MORE</a>
      </div>
    </div>
    <router-switch status="enter" @callback="switchOut" v-if="switchIn"></router-switch>
  </main>
</template>

<script>
import ListComponent from './components/listComponent/listComponent'
import { workIcon } from '@/components/imgurls'
import routerSwitch from '@/components/switch/routerSwitch'
export default {
  name: 'work',
  components: {
    ListComponent,
    routerSwitch
  },
  data () {
    return {
      workFigure: [
        { src: workIcon.logo1, text: '优品养车logo', isShow: false, type: 'white' },
        { src: workIcon.logo2, text: '优品养车logo', isShow: false, type: 'white' },
        { src: workIcon.chick, text: '老思鸡H5', isShow: false, type: 'white' },
        { src: workIcon.moneky, text: '校招H5', isShow: false, type: 'white' }
      ],
      codeFigure: [
        { src: workIcon.game, text: '五子棋', isShow: false, type: 'white' },
        { src: workIcon.jquo, text: 'jQuo', isShow: false, type: 'white' },
        { src: workIcon.pictring, text: 'pictring', isShow: false, type: 'white' },
        { src: workIcon.chick, text: '老思鸡H5', isShow: false, type: 'white' },
        { src: workIcon.vue, text: 'vue-pictring', isShow: false, type: 'white' },
        { src: workIcon.blog, text: 'My Blog', isShow: false, type: 'white' }
      ],
      switchIn: false
    }
  },
  created () {
    setTimeout(() => {
      this.switchIn = true
    }, 820)
  },
  methods: {
    toAbout () {

    },
    switchOut (n) {
      this.switchIn = n
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/views/work/work.scss";
</style>

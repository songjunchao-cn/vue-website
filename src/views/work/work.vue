<template>
  <main :class="'page'+scroll">
    <div style="height:'auto';padding-bottom:'6rem'" class="app-center">
      <ListComponent title="Work" :figures="workFigure" />
      <ListComponent title="Code" :figures="codeFigure" />
      <div @click="toAbout" class="more">
        <span class="moreIcon">
          <i></i>
        </span>
        <span class="needsclick">VIEW MORE</span>
      </div>
      <!-- {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''} -->
    </div>
  </main>
</template>

<script>
import ListComponent from './components/listComponent/listComponent'
import { workIcon } from '@/components/imgurls'
export default {
  name: 'work',
  components: {
    ListComponent
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
      ]
    }
  },
  methods: {
    toAbout () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/views/work/work.scss";
</style>

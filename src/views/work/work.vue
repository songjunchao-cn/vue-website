<template>
  <main class="scroll">
    <div style="height:'auto';padding-bottom:'6rem'" class="app-center">
      <ListComponent @changeVisiable ='changeVisiable' title="Work" :figures="workFigure" />
      <ListComponent @changeVisiable ='changeVisiable' title="Code" :figures="codeFigure" />
      <div class="more">
        <span class="moreIcon">
          <i></i>
        </span>
         <a @click="$router.push('about')">VIEW MORE</a>
      </div>
    </div>
     <vue-modal v-for="item in [...workFigure,...codeFigure]" :key="item.src" v-model="item.isShow" :config="item">
       <div class="img-content">
        <img class="work-img" :src="item.content" alt="">
       </div>
    </vue-modal>
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
        {
          src: workIcon.logo1,
          text: '国家质量监督平台',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.state
        },
        {
          src: workIcon.logo2,
          text: '论文送审系统',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.paper
        },
        {
          src: workIcon.logo3,
          text: '浙大活动室',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.activity
        },
        {
          src: workIcon.logo4,
          text: '计量系统',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.state
        }
      ],
      codeFigure: [
        {
          src: workIcon.blog,
          text: 'Schema',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.blogc
        },
        { src: workIcon.swLogo,
          text: 'Switch',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.switchc
        },
        { src: workIcon.modal,
          text: 'Modal',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.modalc
        },
        { src: workIcon.circle,
          text: 'Circle',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.circlec
        },
        {
          src: workIcon.api,
          text: 'Api',
          isShow: false,
          style: 'white',
          type: 'center',
          content: workIcon.apic
        }
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
    changeVisiable (item) {
      console.log(item)
      item.isShow = !item.isShow
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

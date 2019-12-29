<template>
  <main class="page app-center aboutPage">
    <div class="consMain">
      <div class="fontMain">
        <div class="photo">
          <Photo :photoConfig="photoConfig" />
        </div>
        <div class="mail">
          <Mail :mailConfig='mailConfig' class="Mail" />
        </div>
      </div>
      <div class="introduce">
        <div class="myintro">
          <Introduce :introduceConfig='introduceConfig' class="Introduce" />
        </div>
        <div class="contact">
          <div class="connect">
            <Connect :connectConfig='connectConfig' class="Connect"/>
            <!-- <Modules class="Git" /> -->
          </div>
          <div class="weichart">
            <!-- <Modules class="WeiChart" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="addMain">
      <div class="add">
        <!-- <Modules class="MyAdd" /> -->
      </div>
      <div class="link">
        <!-- <Modules class="OurLink" /> -->
      </div>
    </div>
    <!-- {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''} -->
  </main>
</template>

<script>
import Photo from './componets/photo'
import Mail from './componets/mail'
import Introduce from './componets/introduce'
import Connect from './componets/connect'
import { aboutImg } from '@/components/imgurls'
export default {
  name: 'about',
  components: {
    Photo,
    Mail,
    Introduce,
    Connect
  },
  data () {
    return {
      photoConfig: {
        modelConfig: {
          title: 'Photo',
          style: 'main',
          type: 'about'
        },
        show: true,
        img: aboutImg.myfont
      },
      mailConfig: {
        modelConfig: {
          title: 'Mail',
          style: 'pink',
          type: 'about'
        },
        show: true,
        img: aboutImg.imail
      },
      introduceConfig: {
        modelConfig: {
          title: 'About Me',
          style: 'light',
          type: 'about'
        },
        show: true,
        img: aboutImg.icloud
      },
      connectConfig: {
        modelConfig: {
          title: 'Tel',
          style: 'violet',
          type: 'about'
        },
        show: true,
        img: aboutImg.igit
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import './about.scss'
</style>

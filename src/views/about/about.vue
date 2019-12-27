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
          <Modules class="Introduce" />
        </div>
        <div class="contact">
          <div class="github">
            <Modules class="Git" />
          </div>
          <div class="weichart">
            <Modules class="WeiChart" />
          </div>
        </div>
      </div>
    </div>
    <div class="addMain">
      <div class="add">
        <Modules class="MyAdd" />
      </div>
      <div class="link">
        <Modules class="OurLink" />
      </div>
    </div>
    <!-- {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''} -->
  </main>
</template>

<script>
import Photo from './componets/photo'
import Mail from './componets/mail'
import { aboutImg } from '@/components/imgurls'
export default {
  name: 'about',
  components: {
    Photo,
    Mail
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
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import './about.scss'
</style>

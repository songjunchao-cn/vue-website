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
          </div>
          <div class="wechat">
          <Wechat :wechatConfig='wechatConfig' class="Wechat"/>
          </div>
        </div>
      </div>
    </div>
    <div class="addMain">
      <div class="add">
        <Address :addressConfig='addressConfig' class="Address"/>
      </div>
      <div class="link">
        <OurLink :linkConfig='linkConfig' class="OurLink"/>
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
import Wechat from './componets/wechat'
import Address from './componets/address'
import OurLink from './componets/ourLink'
import { aboutImg } from '@/components/imgurls'
export default {
  name: 'about',
  components: {
    Photo,
    Mail,
    Introduce,
    Connect,
    Wechat,
    Address,
    OurLink
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
      },
      wechatConfig: {
        modelConfig: {
          title: 'Wechat',
          style: 'wathet',
          type: 'about'
        },
        show: true,
        img: aboutImg.icode
      },
      addressConfig: {
        modelConfig: {
          title: 'Where',
          style: 'wathet',
          type: 'about'
        },
        show: true,
        img: aboutImg.iadd
      },
      linkConfig: {
        modelConfig: {
          title: 'Where',
          style: 'pink',
          type: 'about'
        },
        show: true,
        img: aboutImg.iadd
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import './about.scss'
</style>

<template>
  <div class="select-style-ext">
    <div v-if="isPhone" @touchStart="showList = !showList" class="select-curr">{{currItem}}</div>
    <div v-else @click="showList = !showList" class="select-curr">{{currItem}}</div>
    <fade-transition>
    <ul v-if="showList">
      <li @click="changeValue(item)" v-for="item in filterList" :key="item.label">{{item.label}}</li>
    </ul>
    </fade-transition>
  </div>
</template>

<script>
import isPhone from '@/utils/isPhone'
import fadeTransition from '@/components/transition/fadeTransition'
export default {
  name: 'filterColor',
  components: {
    fadeTransition
  },
  data () {
    return {
      isPhone,
      filterList: [
        { label: 'none', class: '' },
        { label: 'hue rotate', class: 'hue-rotate' },
        { label: 'negative', class: 'negative' },
        { label: 'black and white', class: 'black-white' }
      ],
      currItem: '',
      showList: false
    }
  },
  created () {
    this.currItem = this.filterList[0].value
  },
  methods: {
    changeValue (item) {
      this.currItem = item.label
      this.changeClass(item.class)
      this.showList = false
    },
    changeClass (className) {
      let dom = document.body
      dom.setAttribute('class', className)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>

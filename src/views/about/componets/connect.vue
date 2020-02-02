<template>
   <vue-modal v-model="config.show" :config="config.modelConfig">
      <div class='img'>
        <img :src='config.img' alt/>
      </div>
      <h3>13216127918</h3>
      <a v-if="isPhone" href="tel://13216127918" class='linkIcon'></a>
   </vue-modal>
</template>

<script>
import isPhone from '@/utils/isPhone'
export default {
  name: 'connect',
  data () {
    return {
      isPhone
    }
  },
  computed: {
    config () {
      return this.$attrs.connectConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>

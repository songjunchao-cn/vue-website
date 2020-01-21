<template>
   <vue-modal v-model="config.show" :config="config.modelConfig">
      <div class='img'>
        <img :src='config.img' alt/>
      </div>
      <h3>s305811415</h3>
   </vue-modal>
</template>

<script>
export default {
  name: 'wecaht',
  data () {
    return {
    }
  },
  computed: {
    config () {
      return this.$attrs.wechatConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>

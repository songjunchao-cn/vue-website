<template>
   <vue-modal v-model="config.show" :config="config.modelConfig">
      <div class='img'>
        <img :src='config.img' alt/>
      </div>
      <h3>1111</h3>
      <a href="https" rel="external" target="_blank" class='linkIcon'></a>
   </vue-modal>
</template>

<script>
export default {
  name: 'connect',
  data () {
    return {
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

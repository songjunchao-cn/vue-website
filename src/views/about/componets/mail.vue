<template>
  <vue-modal v-model="config.show" :config="config.modelConfig">
    <div class="img">
      <img :src="config.img" alt />
    </div>
    <h3>songjunchao.cn@gmail.com</h3>
    <a href="mailto:songjunchao.cn@gmail.com" class="linkIcon"></a>
  </vue-modal>
</template>

<script>
export default {
  name: 'mail',
  data () {
    return {
    }
  },
  computed: {
    config () {
      return this.$attrs.mailConfig
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>

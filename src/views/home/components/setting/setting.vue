<template>
  <div class="setting">
    <p>background</p>
    <bg-color></bg-color>
    <p style="margin-top:1.8rem">choose filter</p>
    <Filter/>
  </div>
</template>

<script>
import bgColor from './bgColor.vue'
import Filter from './filter'
export default {
  name: 'setting',
  components: {
    bgColor,
    Filter
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='scss'>
@import "./setting.scss";
</style>

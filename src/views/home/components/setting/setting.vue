<template>
  <div class="setting">
    <p>background</p>
    <bg-color></bg-color>
    <p style="margin-top:1.8rem">choose filter</p>
    <filterColor/>
  </div>
</template>

<script>
import bgColor from './bgColor.vue'
import filterColor from './filterColor'
export default {
  name: 'setting',
  components: {
    bgColor,
    filterColor
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

<template>
  <main class="home">
    <div class="app-center">
      <Word/>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import Word from './components/word/Word'
export default {
  name: 'home',
  components: {
    Word
  }
}
</script>

<style lang="scss" scoped>
</style>

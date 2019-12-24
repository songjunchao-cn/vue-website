<template>
  <main :class="'page'+scroll">
        <div style="height:'auto';paddingBottom:'6rem'" class="app-center">
          <!-- <ListCompon v-if="type!=='code'" title="Desgin" figures={this.state.desginFigu} shows={this.show.bind(this)}  close={this.close.bind(this)}/>
          <ListCompon v-if="type==='code'" title="Code" figures={this.state.codeFigu} shows={this.show.bind(this)}  close={this.close.bind(this)}/> -->
          <div @click="toAbout" class="more">
            <span class="moreIcon">
              <i></i>
            </span>
            <span class="needsclick">VIEW MORE</span>
          </div>
          <!-- {this.state.switchin?<Switch type="enter" callback={this.switchOut.bind(this)}/>:''} -->
        </div>
      </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>

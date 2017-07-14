<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Preview class="preview"></Preview>
      <Editor class="editor"></Editor>
    </main>
  </div>
</template>

<script>
  import Limingru from './components/Limingru.vue'
  import Topbar from './components/Topbar.vue'
  import Editor from './components/Editor.vue'
  import Preview from './components/Preview.vue'

  export default {
    components: {
      "Topbar": Topbar,
      "Editor": Editor,
      "Preview": Preview
    }
  }
</script>

<style lang="scss">
  html,body,#app{ height:100%; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display:flex;
    flex-direction:column;
  }
  .topbar{
    background:#eee;
  }
  main{
    background:#ddd;
    box-shadow:0 0 5px #ccc;
    display:flex;
    flex-grow:1;
      .editor{
        flex:2;
      }
      .preview{
        flex:5;
    }

  }
</style>

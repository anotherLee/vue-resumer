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
    position:relative; z-index: 1;
    background:#fff;
    box-shadow: 0 0 8px #4E6E8C;
  }
  main{
    background:#ddd;
    display:flex;
    flex-grow:1;
    padding:32px 32px;

      .preview{
        background:#fff;
        box-shadow:0 0 8px #4E6E8C;
        border-radius:8px;
        flex:5;
      }
      .editor{
        background:#fff;
        flex:3;
        margin-left:32px;
        border-radius:8px;
        box-shadow:0 0 8px #4E6E8C;
      }


  }
</style>

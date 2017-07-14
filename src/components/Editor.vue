<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <section id="editor">
    <div class="panes">
      <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab===i}">{{ msg + (currentTab + 1) }}</li>
    </div>
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab===i}" v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
  </section>
</template>

<script>
  export default{
    data(){
      return {
        currentTab:0,
        icons:['shenfen','work','study','gz','jiangli','Telephone2'],
        msg: 'tab'
      }
    }
  }
</script>


<style lang="scss">
  #editor{
    display:flex;
    min-height:100px;
    overflow:hidden;
    >.panes{
      >li{
        display:none;
        font-size:40px;
        text-align:center;
        padding-top:50px;
        &.active{
          display:block;
         }
       }
     }
    >nav{
      min-width:72px;
      background:#1C456E;
      >ol >li{
        text-align:center;
        padding:16px 0;
        >.icon{
          width: 32px; height: 32px;
          fill:white;
        }
        &.active {
          background: white;
          >.icon {
          fill: black;
          }
        }
      }



    }

    .panes{
      flex-grow:1;
    }
  }
</style>

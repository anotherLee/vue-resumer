<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <section id="editor">
    <div class="panes">
      <li v-bind:class="{active: currentTab===0}">tab 1</li>
      <li v-bind:class="{active: currentTab===1}">tab 2</li>
      <li v-bind:class="{active: currentTab===2}">tab 3</li>
      <li v-bind:class="{active: currentTab===3}">tab 4</li>
      <li v-bind:class="{active: currentTab===4}">tab 5</li>
      <li v-bind:class="{active: currentTab===5}">tab 6</li>
      <li v-bind:class="{active: currentTab===6}">tab 7</li>
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
        icons:['shenfen','work','study','gz','jiangli','Telephone2']
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

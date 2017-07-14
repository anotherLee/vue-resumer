<template>
  <section id="topbar">
    <div class="logo">
      <img src="../assets/resume_logo.png" alt=""/>
    </div>
    <div class="action">
      <button class="register">注册</button>
      <button class="login">登陆</button>
    </div>
  </section>
</template>


<style lang="scss">
  #topbar{
    min-height:100px;
    border:1px solid blue;
    display:flex;
    justify-content:space-between;
    padding: 25px 50px 0 50px;
    .logo {
      img{
        display:inline-block;
        max-width:200px;
      }
    }
    .action{
     
      .register{}
    }

  }
</style>

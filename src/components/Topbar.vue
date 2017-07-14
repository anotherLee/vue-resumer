<template>
  <section id="topbar">
    <div class="logo">
      <img src="../assets/resume_logo.png" alt=""/>
    </div>
    <div class="action">
      <el-button  type="success" class="login">登陆</el-button>
      <el-button  type="info" class="register">注册</el-button>
    </div>
  </section>
</template>


<style lang="scss">
  #topbar{
    min-height:100px;
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
      padding:8px 16px;
      .login{
        background:#4E6E8C;
        border:1px solid #4E6E8C;

      }
      .register{
        background:none;
        border:1px solid #4E6E8C;
        color:#4E6E8C;
        &:hover{
          background:#4E6E8C;
          color:white;
         }
      }
    }

  }
</style>

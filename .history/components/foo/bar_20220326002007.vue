<template>
<header>

  <div class="head">
    <img class="logo" src="/img/logo.png">
    <ul>
    <li><NuxtLink to="/register">新規登録</NuxtLink></li>
    <li><NuxtLink to="/login">ログイン</NuxtLink></li>
    </ul>
  </div>
</header>
</template>

<style>

header{

  margin-left:50px;
  margin-top:20px;
}
.head {
  display: flex;
  justify-content: space-between;
}

    .logo{
      height: 30px;
      width: 100px;
    }


li {
  padding: 10px;
  margin: 10px;
  font-weight: bolder;
   color: ;
}

ul{
   display: flex;
    list-style: none;
}

</style>
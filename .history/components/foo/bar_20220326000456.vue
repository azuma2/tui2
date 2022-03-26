<template>

  <div class="head">
    <img class="logo" src="/img/logo.png">
    <NuxtLink to="/register">新規登録</NuxtLink>
    <NuxtLink to="/login">ログイン</NuxtLink>
  
    <NuxtLink to="/logout">ログアウト</NuxtLink>
    <NuxtLink to="/component">コンポーネント</NuxtLink>
    <NuxtLink to="/toukou">投稿</NuxtLink>
  </div>
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

.head2 {
  padding: 10px;
  margin: 10px;

}

ul{
   display: flex;
    list-style: none;
}

</style>
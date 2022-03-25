

<template>
    <div class="container">
    <h1>ホーム</h1>
    <p>{{ message }}</p>
    <NuxtLink to="/register">新規登録</NuxtLink>
    <br />
    <NuxtLink to="/login">ログイン</NuxtLink>
    <br />
    <NuxtLink to="/logout">ログアウト</NuxtLink>
    <NuxtLink to="/component">コンポーネント</NuxtLink>
  </div>
</template>
  <script>
    Vue.component('sample-component', {
      template: '<h1>サンプルコンポーネント</h1>'
    })
    new Vue({
      el: '#app'
    })
  </script>

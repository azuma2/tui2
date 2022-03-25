<template>
  <div id="app"><>サンプルコンポーネント</h2>
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
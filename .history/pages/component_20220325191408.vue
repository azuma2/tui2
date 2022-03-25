<template>
  <div id="app"><h1>サンプルコンポーネント</h1>
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
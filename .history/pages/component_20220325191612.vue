<template>
  <div id="app"><p>サンプルコンポーネント</p>
  </div>
</template>

  <script>
    Vue.component('sample-component', {
      template: '<p>サンプルコンポーネント</h1>'
    })
    new Vue({
      el: '#app'
    })
  </script>
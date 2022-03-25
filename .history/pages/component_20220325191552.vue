<template>
  <div id="app"><p>サンプルコンポーネント</>
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
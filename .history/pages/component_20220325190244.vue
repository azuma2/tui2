<!DOCTYPE html>
<html lang="ja">

<template>


<body>
  <div id="app">
  </div>
  <script>
    Vue.component('sample-component', {
      template: '<h1>サンプルコンポーネント</h1>'
    })
    new Vue({
      el: '#app'
    })
  </script>
</body>

</html>
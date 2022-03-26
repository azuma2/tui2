
<style>
.waku{
    display: -webkit-flex;
  display: flex;
}

.main2{

  display: block;
}
</style>


<template>
<div class="waku">
  <div class="tes">
  <FooSidebar></FooSidebar>
  
  <div class="main2">
    
    <NuxtLink to="/logout">ログアウト</NuxtLink>
    <NuxtLink to="/component">コンポーネント</NuxtLink>
    <NuxtLink to="/toukou">投稿</NuxtLink>
    
  </div>
</div>
  
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      message: 'ログインができておりません',
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.message = 'ログイン済みです'
      }
    })
  },
}
</script>
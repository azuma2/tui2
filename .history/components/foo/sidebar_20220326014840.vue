
<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <!-- サイドバーメニュー -->
        <p><router-link to="/counselings" class="sidebar-link">カウンセリング</router-link></p>
        <p><router-link to="/expenses" class="sidebar-link">経費</router-link></p>
        <p><router-link to="/problems" class="sidebar-link">悩み</router-link></p>
        <p><router-link to="/calendars" class="sidebar-link">カレンダー</router-link></p>
        <p><router-link to="/admins" class="sidebar-link">管理者</router-link></p>
        <p><router-link to="/users" class="sidebar-link">生徒一覧</router-link></p>
        <p><router-link to="/tasks" class="sidebar-link">イベント一覧</router-link></p>
      </div>
    </div>
  </div>
</template>





<style scoped>
.sidebar-area {
  /* 左側に固定 */
  float: left;
}

.footer-area {
  margin-top: 40px;
}

.scafold-wrapper {
  /* display: flex; 要素を横並びにする */
  flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 200px);

  /* サイドバーで隠れるので右に寄せる */
  margin: 0 0 0 180px;
}
</style>
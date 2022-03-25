import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.use(Vuetify,{
  iconfont: 'md',
})
Vue.config.productionTip = false

// Firebase設定
let firebaseConfig = {
//設定をここでメインに書きます
}

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()
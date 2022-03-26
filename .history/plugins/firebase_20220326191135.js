import firebase from 'firebase'


//firebaseの初期化に必要なデータをconfigで用意する
//必要に応じてパラメーターをここで定義
const config = {
  projectId: process.env.FIREBASE_PROJECT_ID
}


if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyA1pzEAqka3DxYccKU9_oWr2i-C5bYv70Y",
      authDomain: "tui2-d4bb5.firebaseapp.com",
      projectId: "tui2-d4bb5",
      storageBucket: "tui2-d4bb5.appspot.com",
      messagingSenderId: "346412649786",
      appId: "1:346412649786:web:1dae038c8397f4aeca1403",
      measurementId: "G-TQRSJEKHXD"
    }
  )
}
  
export default firebase
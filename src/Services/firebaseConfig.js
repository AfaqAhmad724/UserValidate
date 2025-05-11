import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLjWC-qTGdh1J3P5gGIuZCgEg7wxGWBf4",
    authDomain: "uservalid-9b932.firebaseapp.com",
    projectId: "uservalid-9b932",
    storageBucket: "uservalid-9b932.firebasestorage.app",
    messagingSenderId: "778339215773",
    appId: "1:778339215773:android:e296df47450d2de8086774",
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export {auth}
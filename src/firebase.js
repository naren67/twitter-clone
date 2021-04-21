import firebase from 'firebase'

        const firebaseApp = firebase.initializeApp(
          {
                    apiKey: "AIzaSyDoaUOMB7-cVLAGrZfZ_JJQHgtjTyDfr-U",
                    authDomain: "twitter-clone-ce69f.firebaseapp.com",
                    projectId: "twitter-clone-ce69f",
                    storageBucket: "twitter-clone-ce69f.appspot.com",
                    messagingSenderId: "181709216530",
                    appId: "1:181709216530:web:7819d193e6b5664a0671cb",
                    measurementId: "G-N5YYW4VKF1"
                  }
          )

          const db = firebaseApp.firestore()

          export default db
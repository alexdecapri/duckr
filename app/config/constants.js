import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD-tdsMDd9J48BAvjt5VTnm15_Yh-nfiRg',
  authDomain: 'alex-test-project-a9339.firebaseapp.com',
  databaseURL: 'https://alex-test-project-a9339.firebaseio.com',
  storageBucket: 'alex-test-project-a9339.appspot.com',
  messagingSenderId: '369565711039',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

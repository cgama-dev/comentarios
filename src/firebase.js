// import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyBkJySDuNkheNllROwCYEfORLDI3kTDhB0",
    authDomain: "reactjs-390ae.firebaseapp.com",
    databaseURL: "https://reactjs-390ae.firebaseio.com",
    projectId: "reactjs-390ae",
    storageBucket: "reactjs-390ae.appspot.com",
    messagingSenderId: "249616481169"
}


firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()

// const db = firebase.database(firebaseApp)
// const base = Rebase.createClass(db)

// export const providers = {
//   //'facebook': new firebase.auth.FacebookAuthProvider()
// }

// //export const auth = firebaseApp.auth()
// export default base
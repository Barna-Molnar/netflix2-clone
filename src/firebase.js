// import * as firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAYNmCYK-WzilF5IyueQ7pvONBvek5hEoI",
    authDomain: "netflix2-clone-71ceb.firebaseapp.com",
    projectId: "netflix2-clone-71ceb",
    storageBucket: "netflix2-clone-71ceb.appspot.com",
    messagingSenderId: "229871229440",
    appId: "1:229871229440:web:f029a13db97026e4b596e5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { auth }
export default db
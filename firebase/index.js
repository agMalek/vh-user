import firebase from 'firebase/app'
import '@firebase/firestore'
import '@firebase/storage'

const APIKEY = "AIzaSyD_OxDz-eyyABa5Nr_Mc1kSuut75DcQIXQ"
const AUTH_DOMAIN = "virtualhockey.firebaseapp.com"
const PROJECT_ID = "virtualhockey"
const STORAGE_BUCKET = "virtualhockey.appspot.com"
const MESSAGING_SENDER_ID = "405449447383"
const APP_ID = "1:405449447383:web:a36b72395dfdaffd8d9d92"

export const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
}

const app = firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export function getStorage() {
    return storage
}

export function getFirebase() {
    return app
}

export function getFirestore() {
    return firebase.firestore(app)
}


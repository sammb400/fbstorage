import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import firebaseConfig from './plugins/firebase'
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";

import "firebase/firestore";


const analytics = getAnalytics();

export const storage = getStorage();


createApp(App).use(router).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import Element from 'element-ui'

Vue.use(Element)




// import firebase from "firebase/app"



// import { firestorePlugin } from 'vuefire'
// import 'firebase/firestore'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUser)
Vue.prototype.$axios=axios;
Vue.config.productionTip = false



























// var firebaseConfig = {
//   apiKey: "AIzaSyCaCpM26vr3kqlO983OcpE228PvAGWgEhY",
//   authDomain: "newpro-4df7e.firebaseapp.com",
//   projectId: "newpro-4df7e",
//   storageBucket: "newpro-4df7e.appspot.com",
//   messagingSenderId: "90858009327",
//   appId: "1:90858009327:web:a9ca8aed01335dec5ba11a",
//   measurementId: "G-VB7FWH780T"
// };

// const app=firebase.initializeApp(firebaseConfig);

// export const db=app.database();
// export const namesRef=db.ref('names');


























 
// var firebaseConfig = {
//   apiKey: "AIzaSyCaCpM26vr3kqlO983OcpE228PvAGWgEhY",
//   authDomain: "newpro-4df7e.firebaseapp.com",
//   projectId: "newpro-4df7e",
//   storageBucket: "newpro-4df7e.appspot.com",
//   messagingSenderId: "90858009327",
//   appId: "1:90858009327:web:a9ca8aed01335dec5ba11a",
//   measurementId: "G-VB7FWH780T"
// };
// Initialize Firebase

// firebase.initializeApp(firebaseConfig);

// Vue.use(firebase)
// Vue.use(firestorePlugin)
Vue.use(VueSidebarMenu)






//  export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


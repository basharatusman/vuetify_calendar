import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDE1ySuCIyEMUceWLQutzD_xsr2239_AiY",
  authDomain: "vue-calendar-5d4df.firebaseapp.com",
  databaseURL: "https://vue-calendar-5d4df.firebaseio.com",
  projectId: "vue-calendar-5d4df",
  storageBucket: "vue-calendar-5d4df.appspot.com",
  messagingSenderId: "72530926049",
  appId: "1:72530926049:web:31b20ca77b9ea0593ddaa0"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

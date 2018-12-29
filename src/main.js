import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAMfuWAXlAhQC4eHqPE17wy6J83p2cG5I4",
  authDomain: "wraithia-trpg.firebaseapp.com",
  databaseURL: "https://wraithia-trpg.firebaseio.com",
  projectId: "wraithia-trpg",
  storageBucket: "wraithia-trpg.appspot.com",
  messagingSenderId: "1078050853384"
};
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

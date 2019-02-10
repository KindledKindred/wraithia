import Vue from 'vue'
import Vuex from 'vuex'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import config from '@/plugins/firebase'
Firebase.initializeApp(config)

import users from '@/store/users'
import conversations from '@/store/conversations'

Vue.use(Vuex)
const state = {
  db: Firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})
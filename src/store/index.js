import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users'
import conversations from '@/store/conversations'

import Firebase from 'Firebase'
import 'Firebase/firestore'
import config from '../config'
Firebase.initializeApp(config)

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
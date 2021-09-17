import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      {
        name: '予習',
        time: '30'
      },
       {
        name: '学習',
        time: '40'
      },
         {
        name: '復習',
        time: '50'
      }
    ]
  },
  mutations: {
    addItemToList(state, payload) {
      state.cart.push(payload);
    }
  }
})

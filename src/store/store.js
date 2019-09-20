import Vue from 'vue'
import Vuex from 'vuex'
import general from "./general"
import contacts from "./contacts"
import products from "./products"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general,
    contacts,
    products
  }
})
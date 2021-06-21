import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      currentPage: 1,
      info: {
        pages: 0
      },
      results: [],
      baseURL: 'https://rickandmortyapi.com/api/character/',
      filterURL: '',
      error: false,
      filterResults: false,
    },
    actions: { 
      // Get a base character list
      async getCharactersList({commit, state}, payload = '') {
        try {
          let res = await axios.get(state.baseURL+`?page=${payload}`)
          console.log(res.data)
          commit("SETDATA", {data: res.data, filter: false})
        } catch (error) {
          commit("SETERROR")
          return error.response.data.error
        }
      },
      // Get a filter character list
      async getFilterCharacterList({commit, state}, payload) {
        try {
          let url, res
          if ( typeof payload === 'object' ) {
            url = `${state.baseURL}?name=${payload.search}&status=${payload.status}&gender=${payload.gender}`
            commit("SETFILTERURL", url)
            res = await axios.get(url)
            commit("SETDATA", {data: res.data, filter: true}) 
          } else if ( typeof payload === 'number') {
            url = state.filterURL + `&page=${payload}`
            res = await axios.get(url)
            commit("SETDATA", {data: res.data, filter: true}) 
          }
        } catch (error) {
          commit("SETDATA", {data: {info: {pages: 0}, results: []}, filter: false})
          commit("SETERROR")
          return error.response.data.error
        }
      }
    },
    mutations: {
      // set the data
      SETDATA(state, payload) {
        if(!payload.filter) {
          state.filterURL= ''
        }
        state.filterResults = payload.filter
        state.info = payload.data.info
        state.results = payload.data.results
        state.error = false
      },
      SETFILTERURL(state, payload) {
        state.filterURL = payload
      },
      // set the current page number
      SETCURRENTPAGE(state, payload) {
        state.currentPage = payload
      },
      SETERROR(state) {
        state.error = true
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}

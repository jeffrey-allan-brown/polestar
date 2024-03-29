/* authentication.store.js */
import axios from "axios";

// define variables from environment //
const ENV = process.env.ENV;
let apiEndpointDomain;
if (ENV === 'development') {
  apiEndpointDomain = process.env.DEV_API_DOMAIN;
}

// initial state object //
const initialState = () => ({
  authenticationMethod: null,
  user: null,
});

// state //
const state = initialState();

// getters //
const getters = {
  getCurrentUser(state) {
    return state.user;
  }
}

// actions //
const actions = {
  googleLogIn: async ({commit, dispatch}) => {
    let a = await axios.get(`http://localhost:3000/login`).then(res => {
      console.log(res)
      return res;
    })

    return a
  },
  logout: ({}) => {
    console.log('logout')
  }
}

// mutations //
const mutations = { 
  storeCurrentUser: (state, user) => {
    state.user = user;
  },
  storeUserAuthenticationMethod: (state, method) => {
    state.authenticationMethod = method
  },
  authenticationLogout: (state) => {
    const newState = initial();
    Object.keys(newState).forEach(key => {
      state[key] = newState[key]
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
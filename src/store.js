import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

let battlecardzapi = axios.create({
  baseURL: "//battlecardz.herokuapp.com/api/games"
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    game: {},
    player: {},
    opponent: {},
    playerCard: '',
    opponentCard: ''


  },
  mutations: {
    newGame(state, game) {
      state.game = game

    },

    setGame(state, game) {
      state.game = game

    },
    setPlayerCard(state, playerCard) {
      state.playerCard = playerCard
      console.log(playerCard)
    },
    setOpponentCard(state, opponentCard) {
      state.opponentCard = opponentCard
      console.log(opponentCard)
    }
  },
  actions: {
    startGame({ commit }) {
      battlecardzapi.post("")
        .then(res => {
          commit('newGame', res.data.game)
          console.log(res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },
    getGame({ commit }, gameId) {
      battlecardzapi.get(gameId)
        .then(res => {
          console.log(res)
          commit('setGame', res.data.data)
        })
    },
    attack({ commit }, payload) {
      battlecardzapi.put('/' + payload.gameId, payload)
        .then(res => {
          commit("setGame", res.data.game)
        })
    },
    playerCard({ commit }, playerCard) {
      commit('setPlayerCard', playerCard)
    },
    opponentCard({ commit }, Card) {
      commit('setOpponentCard', Card)
    }
  }
})


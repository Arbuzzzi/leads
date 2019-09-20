export default {
	state: {
		processing: false,
		error: {
			message: null,
			code: null
		},
		dark: true,

	},
	mutations: {
		setProcessingToState(state, payload) {
			state.processing = payload
		},
		setErrorToState(state, payload) {
			state.error = payload
		},
		clearErrorState(state) {
			state.error = {
				message: null,
				code: null
			}
		},
		setDark(state, payload) {
			state.dark = payload
		}
	},
	actions: {
		setDark({commit}, payload) {
			commit('setDark', payload)
		}
	},
	getters: {
		getProcessing(state) {
			return state.processing
		},
		getError(state) {
			return state.error
		},
		getDark(state) {
			return state.dark
		},

	}
}
import Vue from 'vue'

export default {
	state: {
		products: [
			{
				name: '',
				id: `product${(+new Date).toString(16)}`
			}
		],
		scrims: [
			{
				name: '320*450'
			},
			{
				name: '470*650'
			},
			{
				name: '470*620'
			},
			{
				name: '450*640'
			},
			{
				name: '500*700'
			},
			{
				name: '520*720'
			},
			{
				name: '330*700'
			},
			{
				name: '450*670'
			}
		],
		paperTypes:[
			{
				name: 'Мелованная матовая	'
			},
			{
				name: 'Мелованная глянцевая	'
			},
			{
				name: 'Офсетная	'
			},
			{
				name: 'Самоклеющаяся'
			},
			{
				name: 'Дизайнерская',
				comments: true
			},
		],
		paperThickness: [
			{
				name: '90 г/м2',
			},
			{
				name: '115 г/м2'
			},
			{
				name: '130 г/м2'
			},
			{
				name: '150 г/м2'
			},
			{
				name: '170 г/м2'
			},
			{
				name: '200 г/м2'
			},
			{
				name: '250 г/м2'
			},
			{
				name: '300 г/м2'
			},
		]
	},
	mutations: {
		addProduct(state, payload) {
			state.products.push(payload)
		},
		removeProduct(state, payload) {
			state.products.splice(payload, 1)
		},

		setProductValue(state, payload) {
			state.products[payload.index][payload.name] = payload.value
		},
		setProductName(state, payload) {
			state.products.find(x => x.id === payload.id).name = payload.value
		},

	},
	actions: {
		addProduct({commit}, payload) {
			commit('addProduct', payload)
		},
		removeProduct({commit}, payload) {
			commit('removeProduct', payload)
		},
		setProductValue({commit}, payload) {
			commit('setProductValue', payload)
		},
		setProductName({commit}, payload) {
			commit('setProductName', payload)
		}
	},
	getters: {
		getScrims(state) {
			return state.scrims
		},
		getPaperTypes(state) {
			return state.paperTypes
		},
		getProducts(state) {
			return state.products
		},
		getPaperThickness(state) {
			return state.paperThickness
		},
	}
}
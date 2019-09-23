import Vue from 'vue'

let defaultProduct = {
	edition: null,
	detail: {
		width: null,
		height: null
	},
	scrim: {
		name: '',
		printType: 'china',
		paperType: {
			comments: false
		},
		paperComment: null,
		paperThickness: null,
		coloration: {
			x: null,
			y: null
		},
	},
	turnover: 'our',
	price: null,
	comment: ''
}

export default {
	state: {
		products: [
			{
				name: '',
				id: `product${(+new Date).toString(16)}`,
				edition: null,
				detail: {
					width: null,
					height: null
				},
				scrim: {
					name: '',
					printType: 'china',
					paperType: {
						comments: false
					},
					paperComment: null,
					paperThickness: null,
					coloration: {
						x: null,
						y: null
					},
				},
				turnover: 'our',
				price: null,
				comment: ''
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
			state.products.push({...defaultProduct, ...payload})
		},
		removeProduct(state, payload) {
			state.products.splice(payload, 1)
		},

		setProductValue(state, payload) {
			state.products[payload.index][payload.name] = payload.value
			// console.log('name: ', state.products)
		},

		setProductValueDetail(state, payload) {
			for (let key in payload.detail) {
				state.products[payload.index].detail[key] = payload.detail[key]
			}
			// console.log('detail: ', state.products)
		},

		setProductValueScrim(state, payload) {
			for (let key in payload.scrim) {
				let scrimItem = state.products[payload.index].scrim[key]
				let payloadItem = payload.scrim[key]
				let isObjectPayloadItem = typeof payloadItem === 'object'

				if (state.products[payload.index].scrim[key] && isObjectPayloadItem) {
					state.products[payload.index].scrim[key] = Object.assign(scrimItem, payloadItem)
				} else {
					state.products[payload.index].scrim[key] = payloadItem
				}
			}
			// console.log('scrim: ', state.products[payload.index])
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
			// console.log('payload: ', payload)
			if (payload.detail) {
				commit('setProductValueDetail', payload)
			}
			if (payload.scrim) {
				commit('setProductValueScrim', payload)
			}
			if (payload.name) {
				commit('setProductValue', payload)
			}

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
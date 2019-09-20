export default {
	state: {
		contacts: [
			{
				name: 'Olga',
				tel: '+79223332233',
				email: 'olga@mail.ru'
			},
			{
				name: 'Ivan',
				tel: '+7 (922) 333 22 33',
				email: 'ivan@mail.ru'
			},
			{
				name: 'Stepan',
				tel: '922-333-22-33',
				email: 'stepan@mail.ru'
			},
		],
		contactValue: {
			name: null,
			tel: null,
			email: null
		},
		newContact: {
			name: null,
			tel: null,
			email: null,
			createdContact: true
		},
		newCompany: {
			name: null,
			tel: null,
			email: null,
			createdContact: true
		},
		companyValue: {
			name: null,
			tel: null,
			email: null
		},
		companies: [
			{
				name: 'OOO',
				tel: '+79114442244',
				email: 'ooo@mail.ru'
			},
			{
				name: 'OAO',
				tel: '+79223332233',
				email: 'oao@mail.ru'
			},
			{
				name: 'AAA',
				tel: '+79556669988',
				email: 'aaa@mail.ru'
			},
		],

	},
	mutations: {
		addContact(state, payload) {
			let isNewContact = false

			state.contacts.forEach((item, index)=>{
				if (item.createdContact) {
					for(let key in state.contacts[index]) {
						state.contacts[index][key] = payload[key]
					}
					isNewContact = true
				}
			})
			if (!isNewContact) {
				state.contacts.push(payload)
			}
		},
		addCompany(state, payload) {
			let isNewContact = false

			state.companies.forEach((item, index)=>{
				if (item.createdContact) {
					for(let key in state.companies[index]) {
						state.companies[index][key] = payload[key]
					}
					isNewContact = true
				}
			})
			if (!isNewContact) {
				state.companies.push(payload)
			}
		},

		setContactValue(state, payload) {
			state.contactValue = payload
		},
		setCompanyValue(state, payload) {
			state.companyValue = payload
		},

		setNewContact(state, payload) {
			state.newContact = payload
		},
		setNewCompany(state, payload) {
			state.newCompany = payload
		}
	},
	actions: {
		addContact({commit}, payload) {
			commit('addContact', payload)
			commit('setContactValue', payload)
			commit('setNewContact', payload)
		},
		addCompany({commit}, payload) {
			commit('addCompany', payload)
			commit('setCompanyValue', payload)
			commit('setNewCompany', payload)
		},

		setContactValue({commit}, payload) {
			commit('setContactValue', payload)
		},
		setCompanyValue({commit}, payload) {
			commit('setCompanyValue', payload)
		},
	},
	getters: {
		getContacts(state) {
			return state.contacts
		},
		getCompanies(state) {
			return state.companies
		},
		getNewContact(state) {
			return state.newContact
		},
		getNewCompany(state) {
			return state.newCompany
		},

		getContactValue(state) {
			return state.contactValue
		},
		getCompanyValue(state) {
			return state.companyValue
		}
	}
}
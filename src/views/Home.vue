<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<v-container
			grid-list-lg
	>
		<v-card>
			<v-card-title><h2>Добавление контакта</h2></v-card-title>
			<v-card-text>
				<v-form>
					<v-layout>
						<v-flex xs6>
							<v-autocomplete
									:items="getContacts"
									:filter="customFilter"
									color="white"
									item-text="name"
									label="Поиск контакта"
									return-object
									:value="getContactValue"
									@input="setContactValue($event)"
							></v-autocomplete>
							<p>Имя: {{ getContactValue.name }}</p>
							<p>Телефон: {{ getContactValue.tel }}</p>
							<p>E-mail: {{ getContactValue.email }}</p>
							<v-sheet class="text-xs-center">
								<lead-form
										@send="addContact"
										title="Добавление нового контакта"
										:contact="newContact"
								>
									<v-btn
											small
											color="green"
											@click="newContact = getNewContact"
									>
										Создать контакт
									</v-btn>
								</lead-form>
							</v-sheet>
						</v-flex>
						<v-flex xs6>
							<v-autocomplete
									:items="getCompanies"
									:filter="customFilter"
									color="white"
									item-text="name"
									label="Поиск компании"
									return-object
									:value="getCompanyValue"
									@input="setCompanyValue($event)"
							></v-autocomplete>
							<p>Название: {{ getCompanyValue.name }}</p>
							<p>Телефон: {{ getCompanyValue.tel }}</p>
							<p>E-mail: {{ getCompanyValue.email }}</p>
							<v-sheet class="text-xs-center">
								<lead-form
										@send="addCompany"
										title="Добавление новой компании"
										:contact="newCompany"

								>
									<v-btn
											small
											color="green"
											@click="newCompany = getNewCompany"
									>
										Создать компанию
									</v-btn>
								</lead-form>
							</v-sheet>

						</v-flex>
					</v-layout>
				</v-form>
			</v-card-text>
		</v-card>
		<product-template></product-template>
	</v-container>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import LeadForm from '../components/LeadForm';
	import ProductTemplate from '../components/ProductTemplate';

	export default {
		name: 'Home',
		components: {ProductTemplate, LeadForm},
		data: () => ({
			newContact: {
				name: '',
				phone: '',
				email: ''
			},
			newCompany: {
				name: '',
				phone: '',
				email: ''
			}
		}),
		computed: {
			...mapGetters([
				'getContacts',
				'getCompanies',
				'getProducts',
				'getScrims',
				'getPaperTypes',
				'getPaperThickness',

				'getNewContact',
				'getNewCompany',

				'getContactValue',
				'getCompanyValue'
			]),
		},
		methods: {
			...mapActions([
				'addContact',
				'addCompany',
				'addProduct',
				'removeProduct',

				'setContactValue',
				'setCompanyValue',

				'setProductValue'
			]),
			sendNewContact(payload) {
				this.newContact = payload
			},
			customFilter(item, queryText, itemText) {
				return item.name
			},
			test(data) {
				console.log(data)
				return data
			}
		}
	}
</script>

<style scoped>

</style>
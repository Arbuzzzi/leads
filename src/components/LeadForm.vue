<template>
	<v-dialog
			:value="dialogAddContact"
			@input="dialogHandler($event)"
			width="500"
	>
		<template v-slot:activator="{ on }">
			<div v-on="on">
				<slot></slot>
			</div>

		</template>
		<v-card>
			<v-card-title class="primary">
				{{ title }}
			</v-card-title>
			<v-card-text>
				<v-form
						@submit.prevent="sendData"
						ref="formAddContact"
						v-model="valid"
				>
					<v-text-field
							label="Имя"
							type="text"
							reqired
							:value="newContact.name"
							@input="newContact.name = $event"
							:rules="[rules.required]"
					></v-text-field>
					<v-text-field
							label="Телефон"
							type="tel"
							mask="### ### ## ##"
							reqired
							prefix="+7"
							:value="newContact.tel"
							@input="newContact.tel = $event"
							:rules="[rules.required, rules.tel]"
					></v-text-field>
					<v-text-field
							label="E-mail"
							type="email"
							reqired
							:rules="[rules.required, rules.email]"
							:value="newContact.email"
							@input="newContact.email = $event"
					></v-text-field>
					<v-sheet class="text-xs-center">
						<v-btn
								color="success"
								type="submit"
								:disabled="!valid"
						>Создать</v-btn>
						<v-btn
								@click="closeDialog()"
						>Отмена</v-btn>
					</v-sheet>
				</v-form>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	let contactCache
	function setContactCache(payload) {
		return payload
	}
	export default {
		name: 'LeadForm',
		data: () => ({
			dialogAddContact: false,
			newContact: {
				name: null,
				email: null,
				tel: null
			},
			valid: false,
			rules: {
				required: value => !!value || 'Это поле обязательное',
				tel: v => v ? v.length >= 10 || 'Номер телефона не меньше 10 цифр' : false,
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return pattern.test(value) || 'Пожалуйста введите корректный e-mail'
				}
			}
		}),
		props: {
			action: {
				default: ()=>{},
				type: Function
			},
			title: {
				default: 'Добавление нового контакта',
				type: String
			},
			contact: {
				default: () => ({}),
				type: Object
			}
		},
		computed: {
			...mapGetters([
				'getContacts'
			])
		},
		methods: {
			...mapActions([
			]),
			sendData() {
				this.dialogHandler(false)
				this.$emit('send', this.newContact)
			},
			dialogHandler(event, close = true) {
				this.dialogAddContact = event
				if (event) {
					contactCache = Object.assign({}, this.contact)
				}
				if (close) {
					this.newContact = contactCache
				}
			},
			closeDialog(){
				this.dialogHandler(false, false)
			},

			test(data) {
				console.log(data)
				return data
			}
		},
	}
</script>

<style scoped>

</style>
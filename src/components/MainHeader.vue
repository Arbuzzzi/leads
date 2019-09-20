<template>
	<v-toolbar
			clipped-left
			app
			fixed
	>
		<v-toolbar-title>
			<i class="icon-logo"></i>
		</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-flex xs3 class="ml-3">
			<v-text-field
					label="Идентификатор группы Заказов"
					hide-details
			></v-text-field>
		</v-flex>
		<v-flex shrink class="text-xs-right ml-3">
			<h2>Изделий: {{ getProducts.length }}</h2>
		</v-flex>
		<v-toolbar-items class="hidden-sm-and-down ml-3">
			<v-btn flat>Добавить заказы</v-btn>
			<!--<v-layout align-center>
				<v-flex xs4>
					<v-text-field
							label="Идентификатор группы Заказов"
					></v-text-field>
				</v-flex>
				<v-flex xs6 class="text-xs-center">
					<h2>Изделий: {{ getProducts.length }}</h2>
				</v-flex>
				<v-flex xs2 class="text-xs-right">
					<v-btn color="primary">Добавить заказы</v-btn>
				</v-flex>
			</v-layout>-->
			<v-menu
					offset-y
					min-width="250"
					:close-on-content-click="false"
			>
				<template v-slot:activator="{ on }">
					<v-btn
							icon
							v-on="on"
					>
						<v-icon>more_vert</v-icon>
					</v-btn>
				</template>
				<v-card>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-switch
								@change="setDark($event)"
								primary
								:label="getDark ? 'Ночь' : 'День'"
								:input-value="getDark"
								messages=""
						/>
					</v-card-actions>

				</v-card>
			</v-menu>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'

	export default {
		name: 'MainHeader',
		data: () => ({
		}),
		computed: {
			...mapGetters([
				'getDark',
				'getProducts'
			])
		},
		methods: {
			...mapActions([
				'setDark'
			])
		}
	}
</script>

<style scoped>

</style>
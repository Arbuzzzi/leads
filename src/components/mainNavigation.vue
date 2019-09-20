<template>
	<v-navigation-drawer
			clipped
			floating
			app
			width="220"
	>
		<v-list
				expand
		>
			<v-list-tile
					v-for="(product, i) in getProducts"
					:key="product.name + i"
					@click="$vuetify.goTo('#'+product.id, {})"

			>
				<v-list-tile-title>
					<!--{{ product.name ? product.name: 'Изделие 1' }}-->
					{{ `${i + 1}: ${product.name}` }}
				</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		name: 'mainNavigation',
		data: () => ({

		}),
		computed: {
			...mapGetters([
				'getProducts'
			])
		},
		methods: {
			test(data) {
				console.log(data)
			}
		}
	}
</script>

<style scoped>

</style>
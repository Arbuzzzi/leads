<template>
	<div>
		<v-card class="mb-3 mt-3 elevation-5"
				v-for="(productItem, i) in getProducts"
				:key="`productItem${productItem+i}`"
				:id="productItem.id"
		>
			<v-card-title>
				<v-flex >
					<h2>{{ `Изделие ${i+1}: ${productItem.name}` }}</h2>
				</v-flex>
				<v-spacer></v-spacer>
				<v-flex shrink>
					<v-btn
							:disabled="getProducts.length <= 1"
							color="red"
							small
							@click="removeProduct(i)"
					>Удалить изделие</v-btn>
				</v-flex>
			</v-card-title>

			<v-card-text>
				<v-layout wrap align-end>
					<v-flex xs6>
						<v-text-field
								label="Название изделия"
								:value="productItem.name"
								@input="setProductValue({index: i, value: $event, name: 'name'})"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs1>
						<v-text-field
								label="Тираж"
								type="number"
								min="0"
								v-restrict.alpha.number
								:value="productItem.edition"
								@input="setProductValue({index: i, value: $event, name: 'edition'})"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs2>
						<v-text-field
								label="Сторона изделия A"
								type="number"
								:value="productItem.detail.width"
								@input="setProductValue({index: i, detail: {width: $event}})"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs2>
						<v-text-field
								label="Сторона изделия B"
								type="number"
								:value="productItem.detail.height"
								@input="setProductValue({index: i, detail: {height: $event}})"
						>
						</v-text-field>
					</v-flex>
					<v-flex xs1>
						<v-radio-group
								:value="productItem.scrim.printType"
								@change="setProductValue({index: i, scrim: {printType: $event}})"
						>
							<v-radio label="Китай" value="china"></v-radio>
							<v-radio label="Евро" value="euro"></v-radio>
						</v-radio-group>
					</v-flex>
				</v-layout>
				<v-layout wrap align-end >
					<v-flex xs3>
						<v-select
								class="mt-3"
								:items="getScrims"
								:value="productItem.scrim.name"
								@change="setProductValue({index: i, scrim: {name: $event}})"
								label="Формат листа"
								item-text="name"
								hide-details
						></v-select>
					</v-flex>
					<v-flex xs3>
						<v-select
								class="mt-3"
								:items="getPaperTypes"
								label="Тип бумаги"
								item-text="name"
								:value="productItem.scrim.paperType"
								@input="setProductValue({index: i, scrim: {paperType: $event}})"
								return-object
								hide-details
						></v-select>
					</v-flex>
					<v-flex xs6>
						<v-text-field
								v-if="productItem.scrim.paperType.comments"
								label="Комментарий"
								box
								hide-details
								:value="productItem.scrim.paperComment"
								@input="setProductValue({index: i, scrim: {paperComment: $event}})"
						></v-text-field>
					</v-flex>
					<v-flex xs6>
						<v-layout wrap>
							<v-flex xs6>
								<v-select
										:items="getPaperThickness"
										:value="productItem.scrim.paperThickness"
										@change="setProductValue({index: i, scrim: {paperThickness: $event}})"
										label="Плотность бумаги"
										item-text="name"
								></v-select>
							</v-flex>
							<v-flex xs6>
								<v-layout align-center>
									<v-flex xs5>
										<v-subheader>
											Цветность:
										</v-subheader>
									</v-flex>
									<v-flex xs3>
										<v-text-field
												type="number"
												min="0"
												max="10"
												v-restrict.alpha.number
												:value="productItem.scrim.coloration.x"
												@input="setProductValue({index: i, scrim: {coloration: {x: $event}}})"
										></v-text-field>
									</v-flex>
									<v-flex xs1 align-self-center>
										x
									</v-flex>
									<v-flex xs3>
										<v-text-field
												type="number"
												min="0"
												max="10"
												v-restrict.alpha.number
												:value="productItem.scrim.coloration.y"
												@input="setProductValue({index: i, scrim: {coloration: {y: $event}}})"
										></v-text-field>
									</v-flex>
								</v-layout>
							</v-flex>
							<v-flex xs6>
								<p>Оборот:</p>
								<v-radio-group
										v-model="product.turnover"
										:value="productItem.turnover"
										@input="setProductValue({index: i, scrim: {coloration: {y: $event}}})"
								>
									<v-radio label="Свой" value="our"></v-radio>
									<v-radio label="Чужой" value="notOur"></v-radio>
								</v-radio-group>
							</v-flex>
							<v-flex xs6>
								<v-text-field
										label="Стоимость тиража"
										type="number"
										suffix="руб."
										:value="productItem.price"
										@input="setProductValue({index: i, name: 'price', value: $event})"
								></v-text-field>
							</v-flex>
						</v-layout>
					</v-flex>
					<v-flex xs6>
						<v-textarea
								name="input-7-1"
								label="Общий комментарий"
								value=""
								auto-grow
								rows="7"
								box
								:value="productItem.comment"
								@input="setProductValue({index: i, name: 'comment', value: $event})"
						></v-textarea>
					</v-flex>
				</v-layout>
			</v-card-text>
		</v-card>
		<div class="text-xs-right">
			<v-btn
					color="green"
					@click="addProduct({name: '', id: `product${(+new Date).toString(16)}`})"
			>
				Добавить изделие
			</v-btn>
		</div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		name: 'ProductTemplate',
		data: () => ({
			product: {
				name: '',
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
					paperComment: '',
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
		}),

		props: {
			title: {
				default: '',
				type: String
			},
			productData: {
				default: () =>({

				}),
				type: Object
			},
			id: {
				default: '',
				type: String
			},
		},

		computed: {
			...mapGetters([
				'getContacts',
				'getCompanies',
				'getProducts',
				'getScrims',
				'getPaperTypes',
				'getPaperThickness',

			]),
			getProductName() {
				return this.product.name
			}
		},

		methods: {
			...mapActions([
				'setProductValue',
				'removeProduct',
				'addProduct',
			]),

			onlyNumber ($event) {
				let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
				if ((keyCode < 48 || keyCode > 57)) {
					$event.preventDefault();
				}
			},
			max(count, event, el) {
				console.log(el)
				if (event > count) {
					el = count
				}
			},
			test(data) {
				console.log(data)
			}
		},
		watch: {
			// getProductName(data, old, t){
			// 	console.log(data)
			// 	this.$store.dispatch('setProductValue', {index: 0, value: this.product, name: 'name'})
			// }
		}

	}
</script>

<style scoped lang="scss">
	.theme--dark {
		.height-5{
			margin-left: -16px;
			margin-right: -16px;
			max-width: none;
			border-top-width: 10px !important;
			border-top-color: #303030;
		}
	}

</style>
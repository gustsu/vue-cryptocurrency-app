<template>
	<div class="rankings container">
		<div class="md-layout md-gutter">
			<div class="md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100">
				<md-table md-card>
					<md-table-toolbar>
						<h1 class="md-title">Top Cryptocurrencies By Market Cap</h1>
					</md-table-toolbar>

					<md-table-row>
						<md-table-head>Rank</md-table-head>
						<md-table-head>Symbol</md-table-head>
						<md-table-head>Name</md-table-head>
						<md-table-head>Price</md-table-head>
						<md-table-head>Market Cap</md-table-head>
					</md-table-row>

					<md-table-row v-for="(coin, index) in coins" :key="index">
						<md-table-cell>{{ index + 1 }}</md-table-cell>
						<md-table-cell>{{ coin.CoinInfo.Name }}</md-table-cell>
						<md-table-cell>{{ coin.CoinInfo.FullName }}</md-table-cell>
						<md-table-cell>{{ coin.DISPLAY.USD.PRICE }}</md-table-cell>
						<md-table-cell>{{ coin.DISPLAY.USD.MKTCAP }}</md-table-cell>
					</md-table-row>
				</md-table>
				<md-progress-bar v-if="isLoading" class="md-primary" md-mode="indeterminate"></md-progress-bar>
			</div>
			<div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-100">
				<md-field>
					<label for="movie">Coin Limit</label>
					<md-select v-model="coinLimit" name="coinLimit" id="coinLimit" @md-selected="getRanks(coinLimit)">
						<md-option value="20">20</md-option>
						<md-option value="50">50</md-option>
						<md-option value="100">100</md-option>
					</md-select>
				</md-field>
			</div>
		</div>
	</div>
</template>
<script>
import CoinApiService from '@/services/CoinApiService.js';
export default {
	data() {
		return {
			coins: [],
			coinLimit: 20,
			isLoading: true
		};
	},
	created() {
		this.getRanks(this.coinLimit);
	},
	methods: {
		getRanks(limit) {
			this.isLoading = true;
			CoinApiService.getTopCoinsByLimit(limit)
				.then(response => {
					this.coins = response.data.Data;
					this.isLoading = false;
				})
				.catch(error => {
					console.log('errr: ' + error.response);
				});
		}
	}
};
</script>

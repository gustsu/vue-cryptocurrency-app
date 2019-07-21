<template>
	<div class="rankings container">
		<div class="md-layout md-gutter">
			<div class="md-layout-item md-medium-size-100">
				<md-table md-card>
					<md-table-toolbar>
						<h1 class="md-title">Cryptocurrencies</h1>
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
			</div>
		</div>
	</div>
</template>
<script>
import CoinApiService from '@/services/CoinApiService.js';
export default {
	data() {
		return {
			coins: []
		};
	},
	created() {
		CoinApiService.getTopCoins()
			.then(response => {
				this.coins = response.data.Data;
			})
			.catch(error => {
				console.log('errr: ' + error.response);
			});
	}
};
</script>

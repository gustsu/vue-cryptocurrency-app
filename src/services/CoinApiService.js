import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://min-api.cryptocompare.com`,
	withCredentials: false, // This is the default
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		authorization: 'af5f7791c02e756d19c5e58c64d203b7641901df5173bad03ea486474c60cfeb'
	}
});

export default {
	getCoinPriceBySymbol(symbol) {
		return apiClient.get('/data/price?fsym=' + symbol + '&tsyms=USD');
	},
	getTopCoins() {
		return apiClient.get('/data/top/mktcapfull?limit=20&tsym=USD');
	}
};

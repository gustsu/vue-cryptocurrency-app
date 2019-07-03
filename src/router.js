import Vue from 'vue';
import Router from 'vue-router';
import Rankings from './views/Rankings';
import News from './views/News';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'ranks',
			component: Rankings
		},
		{
			path: '/news',
			name: 'news',
			component: News
		}
	]
});

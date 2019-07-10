<template>
	<div id="nav">
		<router-link :to="{ name: 'ranks' }">Rankings</router-link>
		<router-link :to="{ name: 'news' }">News</router-link>
	</div>
</template>
<style lang="scss" scoped>
#nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 200px;

	a {
		background: #009688;
		padding: 20px;
		color: #fff;
		text-decoration: none;
		font-family: sans-serif;
		letter-spacing: 1px;
	}
}
</style>

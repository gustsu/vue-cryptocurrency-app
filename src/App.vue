<template>
	<div id="app">
		<div id="nav">
			<router-link :to="{ name: 'ranks' }">Rankings</router-link>
			<router-link :to="{ name: 'news' }">News</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
html,
body {
	background: #f0f0f0;
}
</style>

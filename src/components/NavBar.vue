<template>
	<div id="nav">
		<md-toolbar class="md-accent" md-elevation="1" id="nav">
			<h3 class="md-title" id="logo">CoinPrice</h3>

			<router-link :to="{ name: 'ranks' }">
				<md-button>Rankings</md-button>
			</router-link>
			<router-link :to="{ name: 'news' }">
				<md-button>News</md-button>
			</router-link>
		</md-toolbar>
	</div>
</template>

<style lang="scss" scoped>
#logo {
	flex: 1;
}
</style>

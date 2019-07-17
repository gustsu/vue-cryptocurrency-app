<template>
	<div id="app">
		<NavBar />
		<router-view></router-view>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
	components: {
		NavBar
	}
};
</script>

<style lang="scss">
//setup theme
@import '~vue-material/dist/theme/engine';
@include md-register-theme(
	'default',
	(
		primary: md-get-palette-color(deeppurple, 500),
		accent: #e42c64,
		theme: light // This can be dark or light
	)
);
@import '~vue-material/dist/theme/all';

.container {
	max-width: 1280px;
	width: 100%;
	margin: 0px auto;
	padding: 90px 12px 0px;
}
</style>

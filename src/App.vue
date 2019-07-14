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
//material purple
// @include md-register-theme(
// 	'default',
// 	(
// 		primary: md-get-palette-color(deeppurple, 500),
// 		accent: md-get-palette-color(lightgreen, A400)
// 	)
// );
//custom colors
@include md-register-theme(
	'default',
	(
		//primary: #121b74,
		primary: md-get-palette-color(deeppurple, 500),
		accent: #e42c64,
		theme: dark // This can be dark or light
	)
);
@import '~vue-material/dist/theme/all';

//app wide styles
// html,
// body {
// 	background: #dedede;
// }
.container {
	max-width: 1280px;
	width: 100%;
	margin: 0px auto;
	padding: 90px 12px 0px;
}
</style>

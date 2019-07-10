<template>
	<div id="app">
		<NavBar />
		<router-view></router-view>
	</div>
</template>

<style lang="scss">
html,
body {
	background: #f0f0f0;
}
</style>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
	components: {
		NavBar
	}
};
</script>

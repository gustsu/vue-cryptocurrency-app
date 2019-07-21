<template>
	<div id="nav">
		<md-toolbar class="md-primary" md-elevation="5" id="nav">
			<router-link :to="{ name: 'ranks' }" id="logo-link">
				<h3 class="md-title" id="logo">
					<span>Coin</span>
					<span class="bold">Price</span>
					<md-icon>bar_chart</md-icon>
				</h3>
			</router-link>

			<router-link :to="{ name: 'ranks' }">
				<md-button>Rankings</md-button>
			</router-link>
			<router-link :to="{ name: 'news' }">
				<md-button>News</md-button>
			</router-link>
			<div class="user-profile">
				<md-menu md-direction="top-end">
					<md-badge class="md-accent" md-content="2" md-menu-trigger md-dense>
						<md-avatar>
							<img src="@/assets/avatar.jpg" alt="Avatar" />
						</md-avatar>
					</md-badge>
					<md-menu-content>
						<md-menu-item>
							<md-icon>notifications</md-icon>
							<span class="md-list-item-text">Notifications</span>
							<md-badge class="md-accent" md-content="2" />
						</md-menu-item>
						<md-menu-item>
							<md-icon>person</md-icon>
							<span class="md-list-item-text">Profile</span>
						</md-menu-item>
						<md-menu-item>
							<md-icon>settings</md-icon>
							<span class="md-list-item-text">Settings</span>
						</md-menu-item>

						<md-menu-item>
							<md-switch v-model="boolean">Dark Mode</md-switch>
						</md-menu-item>
					</md-menu-content>
				</md-menu>
			</div>
		</md-toolbar>
	</div>
</template>

<style lang="scss">
.md-badge {
	margin-left: 8px;
}
#nav {
	position: fixed;
	top: 0px;
	z-index: 5;
}
#nav .md-toolbar {
	height: 60px;
}
#logo-link {
	flex: 1 1 auto;
}
#logo {
	font-weight: 300;

	i {
		position: relative;
		left: 4px;
	}

	span.bold {
		font-weight: 700;
	}
}
.user-profile {
	margin-left: 10px;
	margin-right: 10px;
	cursor: pointer;
	transition: opacity 0.25s;

	&:hover {
		opacity: 0.8;
	}
}
.router-link-exact-active {
	.md-button-content {
		transition: all 0.25s;
		opacity: 0.6 !important;
	}
}
.md-list-item {
	transition: background 0.25s;
	cursor: pointerl;

	&:hover {
		// background: rgba(255, 255, 255, 0.2);
		cursor: pointer;
	}
}
</style>

<script>
export default {
	data: () => ({
		boolean: false
	})
};
</script>

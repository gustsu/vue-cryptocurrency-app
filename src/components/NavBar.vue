<template>
	<div id="nav">
		<md-toolbar class="md-primary" md-elevation="5" id="nav">
			<h3 class="md-title" id="logo">
				<span>Coin</span>
				<span class="bold">Price</span>
				<i class="material-icons">bar_chart</i>
			</h3>

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
#logo {
	flex: 1;
	font-weight: 300;

	i {
		position: relative;
		top: 5px;
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
	cursor: pointer;
	&:hover {
		//background: #dedede;
	}
}
</style>

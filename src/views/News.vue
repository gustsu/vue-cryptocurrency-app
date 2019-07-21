<template>
	<div class="news container">
		<div class="md-layout md-gutter">
			<div v-if="isLoading" class="my-spinner-container">
				<md-progress-spinner class="md-primary" :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
			</div>

			<div v-for="story in news" :key="story.id" class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
				<a :href="story.guid" target="_blank" class="my-link">
					<md-card md-with-hover>
						<md-ripple>
							<md-card-media>
								<img :src="story.imageurl" :alt="story.title" />
							</md-card-media>

							<md-card-header>
								<div class="md-title">{{ story.title }}</div>
								<div class="md-subhead">By: {{ story.source_info.name }}</div>
							</md-card-header>

							<md-card-content>{{ story.body.substring(0, 200) }}...</md-card-content>

							<md-card-actions md-alignment="left">
								<md-button>Read More</md-button>
							</md-card-actions>
						</md-ripple>
					</md-card>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import CoinApiService from '@/services/CoinApiService.js';
export default {
	data() {
		return {
			news: [],
			isLoading: true
		};
	},
	created() {
		CoinApiService.getNews()
			.then(response => {
				this.news = response.data.Data;
				this.isLoading = false;
				//console.log(response.data.Data);
			})
			.catch(error => {
				console.log('errr: ' + error.response);
			});
	}
};
</script>

<style lang="scss">
.md-layout-item {
	margin-bottom: 30px;

	a.my-link {
		display: block;
		height: 100%;

		.md-card {
			height: 100%;
		}

		.md-card-actions {
			position: absolute;
			width: 100%;
			bottom: 0px;
		}

		.md-card-content {
			padding-bottom: 80px;
		}

		&:hover {
			text-decoration: none;
		}
	}
}
.my-spinner-container {
	display: block;
	margin: 0 auto;
}
</style>

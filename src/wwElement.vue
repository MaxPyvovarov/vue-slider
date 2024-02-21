<template :style="{width: '100%'}">
	<div class="loading-bar">
		<div :style="{width: getProgress() + '%'}" class="progress"></div>
		<div
			:style="{width: getAdditionalProgress() + '%'}"
			class="additional-progress"
		></div>
	</div>
	<div class="hours">
		<p class="approved">{{ approvedHours }}</p>
		<p class="pending">{{ pendingHours }}</p>
	</div>
</template>

<script>
export default {
	props: {
		content: {type: Object, required: true},
	},
	computed: {
		max() {
			return this.content.max;
		},
		approvedHours() {
			return this.content.approvedHours;
		},
		pendingHours() {
			return this.content.pendingHours;
		},
	},

	methods: {
		getProgress() {
			return Math.round((this.approvedHours / this.max) * 100);
		},
		getAdditionalProgress() {
			return Math.round((this.pendingHours / this.max) * 100);
		},
	},
};
</script>

<style lang="scss" scoped>
.loading-bar {
	width: 100%;
	height: 20px;
	background-color: #f1f1f1;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	margin-bottom: 3px;
}
.loading-bar .progress {
	display: block;
	height: 100%;
	background-color: #16067c;
	transition: width 0.5s ease;
	border-radius: 10px;
	flex-shrink: 0;
}
.loading-bar .additional-progress {
	display: block;
	height: 100%;
	background-color: #d8d1ff;
	transition: width 0.5s ease, left 0.5s ease;
	border-radius: 10px;
}

.hours {
	display: flex;
	gap: 3px;
}

.hours .approved {
	color: #fff;
	background-color: #002952;
	border-radius: 10px;
	padding: 0 8px;
}

.hours .pending {
	color: #002952;
	background-color: #d8d1ff;
	border-radius: 10px;
	padding: 0 8px;
}
</style>

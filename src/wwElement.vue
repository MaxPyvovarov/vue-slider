<template :style="{width: '100%'}">
	<div class="loading-bar" :style="{backgroundColor: mainBgColor}">
		<div
			:style="{
				width: getProgress(this.approvedHours) + '%',
				backgroundColor: approvedBgColor,
			}"
			class="progress"
		></div>
		<div
			:style="{
				width: getProgress(this.pendingHours) + '%',
				backgroundColor: pendingBgColor,
			}"
			class="additional-progress"
		></div>
	</div>
	<div class="hours">
		<p
			:style="{backgroundColor: approvedBgColor, color: approvedTextColor}"
			class="approved"
		>
			{{ approvedHours }}
		</p>
		<p
			:style="{backgroundColor: pendingBgColor, color: pendingTextColor}"
			class="pending"
		>
			{{ pendingHours }}
		</p>
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
		approvedBgColor() {
			return this.content.approvedBgColor;
		},
		approvedTextColor() {
			return this.content.approvedTextColor;
		},
		pendingBgColor() {
			return this.content.pendingBgColor;
		},
		pendingTextColor() {
			return this.content.pendingTextColor;
		},
		mainBgColor() {
			return this.content.mainBgColor;
		},
	},

	methods: {
		getProgress(hours) {
			return Math.round((hours / this.max) * 100);
		},
	},
};
</script>

<style lang="scss" scoped>
.loading-bar {
	width: 100%;
	height: 12px;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	margin-bottom: 3px;
	border: 1px solid #c1c1c1;
}
.loading-bar .progress {
	display: block;
	height: 100%;
	transition: width 0.5s ease;
	border-radius: 10px;
	flex-shrink: 0;
}
.loading-bar .additional-progress {
	display: block;
	height: 100%;
	transition: width 0.5s ease, left 0.5s ease;
	border-radius: 10px;
}

.hours {
	display: flex;
	gap: 3px;
	font-size: 12px;
}

.hours .approved {
	border-radius: 10px;
	padding: 0 4px;
}

.hours .pending {
	border-radius: 10px;
	padding: 0 4px;
}
</style>

<template :style="{width: '100%'}">
	<div
		class="loading-bar"
		:style="{
			backgroundColor: mainBgColor,
			border: '1px solid ' + mainBorderColor,
		}"
	>
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
		<div class="left">
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
		<p
			:style="{
				backgroundColor: overtimeBgColor,
				color: overtimeTextColor,
			}"
			v-if="overtimeHours > 0"
			class="overtime"
		>
			{{ overtimeHours + 'h overtime' }}
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
		overtimeHours() {
			return this.content.overtimeHours;
		},
		overtimeBgColor() {
			return this.content.overtimeBgColor;
		},
		overtimeTextColor() {
			return this.content.overtimeTextColor;
		},
		mainBgColor() {
			return this.content.mainBgColor;
		},
		mainBorderColor() {
			return this.content.mainBorderColor;
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
	height: 15px;
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
	gap: 5px;
	justify-content: space-between;
	font-size: 12px;
	align-items: center;
}

.left {
	display: flex;
	gap: 3px;
}

.approved,
.pending,
.overtime {
	border-radius: 10px;
	padding: 0 4px;
}
</style>

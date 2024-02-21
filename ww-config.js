export default {
	editor: {
		label: {
			en: 'Vue-slider',
		},
	},
	properties: {
		max: {
			label: {en: 'Max hours'},
			type: 'Number',
			bindable: true,
			defaultValue: 0,
		},
		approvedHours: {
			label: {en: 'Approved hours'},
			type: 'Number',
			bindable: true,
			defaultValue: 0,
		},
		pendingHours: {
			label: {en: 'Pending hours'},
			type: 'Number',
			bindable: true,
			defaultValue: 0,
		},
	},
};

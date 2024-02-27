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
		approvedBgColor: {
			label: {
				en: 'Approved color',
			},
			type: 'Color',
			defaultValue: '#16067c',
			bindable: true,
		},
		approvedTextColor: {
			label: {
				en: 'Approved text color',
			},
			type: 'Color',
			defaultValue: '#fff',
			bindable: true,
		},
		pendingBgColor: {
			label: {
				en: 'Pending color',
			},
			type: 'Color',
			defaultValue: '#d8d1ff',
			bindable: true,
		},
		pendingTextColor: {
			label: {
				en: 'Pending text color',
			},
			type: 'Color',
			defaultValue: '#002952',
			bindable: true,
		},
		mainBgColor: {
			label: {
				en: 'Main background color',
			},
			type: 'Color',
			defaultValue: '#f1f1f1',
			bindable: true,
		},
		mainBorderColor: {
			label: {
				en: 'Main border color',
			},
			type: 'Color',
			defaultValue: '#c1c1c1',
			bindable: true,
		},
	},
};

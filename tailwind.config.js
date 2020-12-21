module.exports = {
	purge: ['./pages/**/*.js', './components/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'primary-blue': '#085EA9',
				'secundary-blue': '#0B82EA',
				'primary-yellow': '#FDCD21',
				'secundary-yellow': '#FED84B',
				'primary-gray': '#BEC1C5',
				'secundary-gray': '#DBDCDE',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

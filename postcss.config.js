const nodeEnv = process.env.NODE_ENV;
const mode = nodeEnv ? nodeEnv : 'development';

module.exports = {
	map: mode === 'development',
	plugins: {
		'postcss-import': {},
		'postcss-preset-env': {
			stage: 1,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
			},
			autoprefixer: {
				grid: true,
			},
		},
		'postcss-pxtorem': {},
		cssnano: {},
	},
};

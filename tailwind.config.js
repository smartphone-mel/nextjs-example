module.exports = {
	// @see https://tailwindcss.com/docs/upcoming-changes
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [
		'./src/components/**/*.js',
		'./pages/**/*.js'],
	theme: {
		//extend: {},
		minHeight: {
			'40vh': '40vh'
		}
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}
// Nuxt config
export default {

	// Load this boilerplate and this package
	buildModules: [
		'@cloak-app/boilerplate/nuxt',
		'@cloak-app/demo-theme/nuxt',
	],

	// Load CMS module
	modules: ['@nuxt/content'],

	// @nuxt/content config
	content: {
		liveEdit: false
	},

}

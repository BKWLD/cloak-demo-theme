// Nuxt config
export default {

	// Load boilerplate and this package
	buildModules: [
		'@cloak-app/boilerplate/nuxt',
		'@cloak-app/demo-theme/nuxt.js',
	],

	// Set the site name
	cloak: {
		boilerplate: {
			siteName: '@cloak-app/demo-theme demo',
		}
	},

	// Load CMS module
	modules: ['@nuxt/content'],

	// @nuxt/content config
	content: {
		liveEdit: false,
	}

}

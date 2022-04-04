// Nuxt config
export default {

	// Load boilerplate and this package
	buildModules: [
		'@cloak-app/boilerplate/nuxt',
		'../nuxt',
	],

	// Set the site name
	cloak: {
		boilerplate: {
			siteName: '@cloak-app/demo-theme demo',
		}
	},

}

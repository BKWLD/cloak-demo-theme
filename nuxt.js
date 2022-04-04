import { join } from 'path'
import defaultsDeep from 'lodash/defaultsDeep'
export default function() {

	// Have Nuxt transpile resources
	this.options.build.transpile.push('@cloak-app/demo-theme')

	// Inject the stylesheet
	this.options.css.push(join(__dirname, './assets/theme.styl'))

	// Set default @nuxt/content config
	defaultsDeep(this.options, { content: {

		// Adds instability and not needed
		liveEdit: false,

		// Set a dark syntax highligher
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-atom-dark.css'
			}
		}
	}})

	// Add @nuxt/content
	this.requireModule('@nuxt/content')
}

// Required for published modules
module.exports.meta = require('./package.json')

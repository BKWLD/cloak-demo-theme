import { join } from 'path'
export default function() {

	// Have Nuxt transpile resources
	this.options.build.transpile.push('@cloak-app/demo-theme')

	// Inject the stylesheet
	this.options.css.push(join(__dirname, './assets/theme.styl'))
}

// Required for published modules
module.exports.meta = require('./package.json')

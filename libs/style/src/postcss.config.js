const autoPrefixer = require('autoprefixer');
const tailwindCss = require('tailwindcss');

module.exports = {
	plugins: [tailwindCss(), autoPrefixer()]
};

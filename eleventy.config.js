const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter('postcss', (cssCode, done) => {
    postcss([tailwindcss('./tailwind.config.js'), autoprefixer()])
    .process(cssCode, { from: undefined })
    .then(result => done(null, result.css), error => done(error, null));
  });
  eleventyConfig.addWatchTarget('./src/css/');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/images');
  return { dir: { input: 'src', output: '_site', includes: '_includes', layouts: '_includes/layouts' } };
};

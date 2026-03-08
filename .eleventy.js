const fs = require('fs');
const path = require('path');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/js');
  eleventyConfig.addPassthroughCopy('src/assets/img');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('robots.txt');
  eleventyConfig.addPassthroughCopy('manifest.json');
  eleventyConfig.addPassthroughCopy('sw.js');
  
  eleventyConfig.addCollection('news', function(collectionApi) {
    const isDev = process.env.NODE_ENV !== 'production';
    return collectionApi.getFilteredByGlob('src/news/**/*.md')
      .filter(item => isDev || item.data.draft !== true)
      .sort((a, b) => b.date - a.date);
  });
  
  eleventyConfig.addCollection('tagList', function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ('tags' in item.data) {
        const tags = typeof item.data.tags === 'string' ? [item.data.tags] : item.data.tags;
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });
  
  eleventyConfig.addFilter('dateFormat', function(date) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('ru-RU', {year: 'numeric', month: 'long', day: 'numeric'});
  });
  
  eleventyConfig.addFilter('excerpt', function(content) {
    if (!content) return '';
    const plain = content.replace(/(<([^>]+)>)/gi, '');
    return plain.substring(0, 150) + (plain.length > 150 ? '...' : '');
  });
  
  eleventyConfig.addFilter('slice', function(arr, start, end) {
    if (!Array.isArray(arr)) return [];
    return arr.slice(start, end);
  });
  
  eleventyConfig.addFilter('reverse', function(arr) {
    if (!Array.isArray(arr)) return [];
    return [...arr].reverse();
  });
  
  eleventyConfig.addFilter('slug', function(str) {
    if (!str) return '';
    return str.toString().toLowerCase().replace(/[^a-z0-9а-я\s-]/g, '').replace(/\s+/g, '-').substring(0, 50);
  });
  
  eleventyConfig.addWatchTarget('src/assets/css/');
  eleventyConfig.addWatchTarget('src/assets/js/');
  
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk'
  };
};

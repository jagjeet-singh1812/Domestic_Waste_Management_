const SitemapGenerator = require('sitemap-generator');

const generator = SitemapGenerator('https://www.labelxai.com', {
  stripQuerystring: false, 
});

generator.start();

generator.on('done', () => {
  console.log('Sitemap generated');
});

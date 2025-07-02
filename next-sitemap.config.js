/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ashari.tech',
  generateRobotsTxt: false, // We already have a custom robots.txt
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/cms/*', '/api/*', '/_next/*', '/out/*'],
  additionalPaths: async (config) => {
    return [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#about',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#products',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#goals',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#testimonials',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/#contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
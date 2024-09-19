export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/' , '/docs/*' , '/instalation/*'],
        disallow: ['/code/*'],
      },
      sitemap: 'https://blured-ui.vercel.app/sitemap.xml',
    }
  }
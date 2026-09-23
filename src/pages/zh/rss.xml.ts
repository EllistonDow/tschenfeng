import rss from '@astrojs/rss';
import { getPostsByLang } from '@/lib/content';
import { getProfileConfig } from '@/config/profile';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPostsByLang('zh');
  const profile = getProfileConfig('zh');

  return rss({
    title: profile.site.title,
    description: profile.site.description,
    site: context.site || profile.site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/zh/blog/${post.slug}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}

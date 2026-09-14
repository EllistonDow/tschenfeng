import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { profileConfig } from '@/config/profile';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const publishedPosts = posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: profileConfig.site.title,
    description: profileConfig.site.description,
    site: context.site || profileConfig.site.url,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>${profileConfig.site.locale}</language>`,
  });
}

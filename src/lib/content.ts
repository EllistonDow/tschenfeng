import { getCollection } from 'astro:content';
import type { Lang } from '@/i18n/ui';

export interface ParsedContent<T> {
  lang: Lang;
  slug: string;
  entry: T;
}

export function parseContentId(id: string): { lang: Lang; slug: string } {
  const parts = id.split('/');
  if (parts.length >= 2) {
    const lang = (parts[0] === 'zh' ? 'zh' : 'en') as Lang;
    const slug = parts.slice(1).join('/');
    return { lang, slug };
  }
  return { lang: 'en', slug: id };
}

export async function getPostsByLang(lang: Lang) {
  const allPosts = await getCollection('posts', (post) => {
    return !post.data.draft && post.id.startsWith(`${lang}/`);
  });

  return allPosts
    .map((post) => ({
      ...post,
      slug: parseContentId(post.id).slug,
    }))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjectsByLang(lang: Lang) {
  const allProjects = await getCollection('projects', (project) => {
    return project.id.startsWith(`${lang}/`);
  });

  return allProjects
    .map((project) => ({
      ...project,
      slug: parseContentId(project.id).slug,
    }))
    .sort((a, b) => a.data.order - b.data.order);
}

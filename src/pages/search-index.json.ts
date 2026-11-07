import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [posts, projects, pages] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('projects', ({ data }) => !data.draft),
    getCollection('pages', ({ data }) => !data.draft),
  ]);
  const records = [
    ...posts.map((item) => ({ title: item.data.title, description: item.data.description, url: `/blog/${item.id}/`, type: 'Article', tags: item.data.tags || [] })),
    ...projects.map((item) => ({ title: item.data.title, description: item.data.description, url: `/portfolio/${item.id}/`, type: 'Project', tags: item.data.tags || [] })),
    ...pages.map((item) => ({ title: item.data.title, description: item.data.description || '', url: item.id === 'about' || item.id === 'contact' ? `/${item.id}/` : `/pages/${item.id}/`, type: 'Page', tags: [] })),
  ];
  return new Response(JSON.stringify(records), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};

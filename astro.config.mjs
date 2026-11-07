import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY || '';
const [owner, repository] = repo.split('/');
const isUserOrOrgSite = repository === `${owner}.github.io`;
const site = owner ? `https://${owner}.github.io` : 'https://example.github.io';
const base = repository && !isUserOrOrgSite ? `/${repository}` : '';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
});

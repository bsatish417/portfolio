# Astro + Sveltia CMS personal blog & portfolio

A static personal website with a CMS-managed navigation menu, nested submenus, pages, blog posts, portfolio projects, and client-side search. Deploys to GitHub Pages with GitHub Actions.

## Requirements

- Node.js 20.3+ (Node 22 recommended)
- A GitHub account and repository
- Write access to the GitHub repository

## 1. Configure the repository

1. Create a GitHub repository, for example `my-portfolio`.
2. Upload/push the contents of this folder to the repository's `main` branch.
3. Edit `public/admin/config.yml`:
   - `backend.repo`: `YOUR_GITHUB_USERNAME/YOUR_REPOSITORY`
   - `site_url` and `display_url`: your actual GitHub Pages URL.
4. Edit `src/data/site.json` with your name, bio, email, and social links.
5. Edit `src/data/navigation.json` to set your menu.

For a normal project repository, your URL is `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/`.
For a user/organization site repository named `YOUR_GITHUB_USERNAME.github.io`, your URL is `https://YOUR_GITHUB_USERNAME.github.io/`.

The Astro config reads `GITHUB_REPOSITORY` during GitHub Actions builds and automatically sets the correct repository base path.

## 2. Run locally

```bash
npm install
npm run dev
```

Open the local site shown by Astro. For the CMS local development page, visit `/admin/index.html`. The production CMS is available at `/admin/`.

To test a production build:

```bash
npm run build
npm run preview
```

## 3. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` or run the workflow manually under **Actions**.
5. Wait for the deploy workflow to finish. Your site will be available at the GitHub Pages URL.

## 4. Sign in to Sveltia CMS

This starter configures the GitHub backend to use token sign-in (`auth_methods: [token]`). Open `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY/admin/`, choose **Sign In with Token**, follow the GitHub link in the sign-in dialog to create a fine-grained personal access token, and grant it access to this repository with **Contents: Read and write**. Paste the token into the dialog. Sveltia stores it in your browser's local storage; never paste it into a source file, commit it to Git, or share it. Anyone using the CMS needs their own GitHub account with write access to the repository.

Official guide: https://sveltiacms.app/en/docs/backends/github

## What can be edited in the CMS?

- **Site Settings:** site title, tagline, description, author, email, social links, footer.
- **Navigation:** menu labels, URLs, submenus, and one further nested submenu level.
- **Pages:** create and edit Markdown pages.
- **Blog Posts:** create posts, descriptions, dates, authors, tags, cover images, drafts, and article body.
- **Portfolio Projects:** create case studies, roles, tags, links, cover images, featured status, and drafts.

Content is committed to the GitHub repository. GitHub Actions rebuilds and republishes the site after changes to `main`.

## Search

The search page uses a generated static JSON index and browser-side text matching. It searches published pages, blog posts, and portfolio projects. No search server or database is needed.

## Important notes

- This is a static site. It does not provide server-side comments, user accounts, contact form processing, or dynamic database features.
- The CMS is a separate browser app served from a CDN. Its GitHub authentication must be configured according to Sveltia's current backend documentation.
- Uploaded images are stored in `public/uploads` in Git. Keep image sizes optimized.
- The `public/admin/config.yml` file must contain the correct repository and site URL before using the CMS.
- Search and public pages are regenerated on each deployment. Allow the GitHub Actions workflow to finish after editing content.

# Quickstart

[Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart)

Showcase /share your projects / blog / resume

Available in public repositories with Github Free and Github Free for organizations

Github Pages now uses Github actions to execute the Jekyll build which must therefore be enabled

You can manage the permissions for Github Actions in detail [Managing GitHub Actions settings](https://docs.github.com/en/actions/security-guides/managing-github-actions-settings)

## Creating a website for username

1. Select new repository

2. Enter <username>.github.io as the repository name

3. Choose a repository vvisibility

4. Select Initialize this repository with a README.

5. Click Create repository

6. Under your repository name, click  Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.

7. In the "Code and automation" section of the sidebar, click  Pages.

8. Under "Build and deployment", under "Branch", use the branch dropdown menu and select a publishing source.

9. Visit username.github.io to view your new website. Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub

## Changing the title and description

1. By default, the title of your site is username.github.io. You can change the title by editing the _config.yml file in your repository. You can also add a description for your site.

2. Click the Code tab of your repository.

3. In the file list, click _config.yml to open the file.

4. Click  to edit the file.

5. The _config.yml file already contains a line that specifies the theme for your site. Add a new line with title: followed by the title you want. Add a new line with description: followed by the description you want. For example:

```
theme: jekyll-theme-minimal
title: Octocat's homepage
description: Bookmark this to keep an eye on my project updates!
```

6. Commit the changes

## Next Steps


You've successfully created, personalized, and published your first GitHub Pages website but there's so much more to explore! Here are some helpful resources for taking your next steps with GitHub Pages:

[Adding content to your GitHub Pages site using Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites): This guide explains how to add additional pages to your site.

[Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site): You can host your site on GitHub's github.io domain or your own custom domain.
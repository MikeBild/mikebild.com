---
title: 'Making a static blog with SvelteKit, Tailwind CSS and Markdown'
slug: 'about_this_site'
outline: 'A brief reference to the technologies used to create this website'
tags: [{name: 'English'}, { name: 'SvelteKit', link: 'https://kit.svelte.dev/' }, { name: 'Tailwind CSS', link: 'https://www.tailwindcss.com' }, { name: 'Markdown', link: 'https://www.markdownguide.org/' }]
published_at: '12 May 2021'
---

<script>
  import PostHeader from '$lib/PostHeader.svelte'
</script>

<PostHeader {title} {published_at} {tags} />

## Table of Content

- [Table of Content](#table-of-content)
- [TLDR](#tldr)
- [Context](#context)
- [Why](#why)
- [How-to](#how-to)
- [Deploying](#deploying)
- [Conclusion](#conclusion)
- [Resources](#resources)

## TLDR

This site was created using [SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://www.tailwindcss.com) and [Markdown](https://www.markdownguide.org/).
If you're interested, you can check [the source code](https://github.com/mikebild/mikebild.com)

## Context

SvelteKit is the latest development from [Svelte](svelte.dev/) a JS frontend framework.

## Why

This is for those wanting to try SvelteKit on something simple like a markdown blog.
It's a collection of information I wish I had when doing this.

## How-to

- From the [docs](https://kit.svelte.dev/), to create a squeletton using the following inside your repo.

```sh
npm init svelte@next my-app
cd my-app
npm install
npm run dev -- --open
```

- From there, you can use [Svelte-adder](https://github.com/svelte-add/svelte-adders).
  The Svelte ecosystem has [mdsvex](https://github.com/pngwn/MDsveX) for markdown.
  [Tailwind JIT](https://github.com/tailwindlabs/tailwindcss-jit) is the latest feature from tailwind
  From their docs run

```sh
npx svelte-add mdsvex
npx svelte-add tailwind --jit
npm install
```

- You can add metadata to your markdown posts by adding a simple header. [example here](https://github.com/MikeBild/mikebild.com/blob/master/src/routes/blog/about_this_site.md)

```md
---
title: 'Making a static blog with SvelteKit, Tailwind CSS and Markdown'
slug: 'about_this_site'
outline: 'A brief reference to the technologies used to create this website'
tags: [{name: 'English'}, { name: 'SvelteKit', link: 'https://kit.svelte.dev/' }, { name: 'Tailwind CSS', link: 'https://www.tailwindcss.com' }, { name: 'Markdown', link: 'https://www.markdownguide.org/' }]
published_at: '12 May 2021'
---
```

- You can then load those metadata on a blog page (listing your posts). Your `/blog/index.svelte` file, would look like this

```svelte
<script context="module" lang="ts">
  const posts = import.meta.glob('./*.md');

  const body = [];

  for (const path in posts) {
    body.push(posts[path]().then(({ metadata }) => metadata));
  }

  export async function load({ page, fetch }) {
    const posts = await Promise.all(body);

    return {
      props: {
        posts,
      },
    };
  }
</script>
```

Let's break this down a little. SvelteKit allows you to do glob imports.
This code will look for all your svx (Svelte markdown format) file and import them.
Since the import returns a promise, you need to load those metadata asychronously.
SvelteKit has a [load](https://kit.svelte.dev/docs#loading) mechanism to fetch data on page load.
This load function will just pass your posts metadata to your component as posts.
To access the posts, the rest of the file would contain something like

```svelte
<ul class="list-none">
  {#each posts as { title, tags, outline, slug }}
    <li class="list-none">
      <a class="text-yellow-500 space-y-3" rel="prefetch" href="blog/{slug}">
        <h2>
          {title}
        </h2>

        <p class="text-white text-base">
          {outline}
        </p>

        <p class="text-sm font-normal text-gray-500">
          Tags: {#each tags as tag}
            <Tag {tag} />
          {/each}
        </p>
      </a>
    </li>
  {/each}
</ul>
```

## Deploying

SvelteKit has many different [adapters](https://kit.svelte.dev/docs#adapters) (plugins to help you deploy).
The static one (prerendering your site as a collection of static files) is straightforward to use.
Just edit your `svelte.config.js` file and replace `node` with `static`.

Those files could be smaller, but for a JS framework, the result is pretty impressive!
I used [AWS-CDK](https://github.com/aws/aws-cdk) to deploy as a static website into AWS S3 and CloudFront as CDN.

## Conclusion

Is worth learning Svelte (if you don't already know it) to deploy a static blog? Probably not! However if you ever feel like trying, now you have a simple project to do so! Is it overkill to use a Svelte for a static blog? Most definitely! But at least with this guide you won't waste time doing it!

## Resources

- [SvelteKit Blog Demo](https://github.com/svelteland/svelte-kit-blog-demo)
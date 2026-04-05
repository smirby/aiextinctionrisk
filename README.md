# aiextinctionrisk.ca

Companion website for *From Tool to Actor: Artificial Intelligence and Human Extinction Risk* by William Leiss and Richard Smith (McGill-Queen's University Press).

## Local Development

With Docker installed:

```bash
docker build -t hugo-site .
docker run -p 1313:1313 -v $(pwd):/site hugo-site
```

Then visit [http://localhost:1313](http://localhost:1313).

Alternatively, with Hugo installed locally:

```bash
hugo server
```

## Deployment

The site deploys automatically via Cloudflare Pages when changes are pushed to the `main` branch.

## Adding a Blog Post

Create a new markdown file in `content/blog/`:

```bash
hugo new blog/my-post-title.md
```

Edit the file, set `draft: false` when ready to publish, and push.

## Structure

```
content/
  _index.md          # Home page
  about/
    book.md          # About the book
    authors.md       # Author bios
    resources.md     # Links and resources
    errata.md        # Corrections
  blog/
    _index.md        # Blog index
    *.md             # Blog posts
layouts/             # HTML templates
static/
  css/style.css      # Stylesheet (minimal until book design available)
  images/            # Site images
  js/                # JavaScript (future interactive features)
```

---
layout: default
permalink: /blogs/
title: Blogs
---

<div class="page__inner-wrap">
  <header>
    <h1 class="page__title">{{ page.title }}</h1>
  </header>

  <section class="page__content">
    {% if site.posts.size > 0 %}
      <div class="blog-list">
        {% for post in site.posts %}
          <article class="blog-post-item">
            <h2 class="blog-post-title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <p class="blog-post-meta">
              <i class="fa fa-fw fa-calendar" aria-hidden="true"></i>
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
            </p>
            {% if post.excerpt %}
              <div class="blog-post-excerpt">
                {{ post.excerpt | markdownify }}
              </div>
            {% endif %}
            <p class="blog-post-read-more">
              <a href="{{ post.url | relative_url }}" class="btn btn--inverse">Read More →</a>
            </p>
            <hr>
          </article>
        {% endfor %}
      </div>
    {% else %}
      <p>No blog posts yet. Check back soon!</p>
    {% endif %}
  </section>
</div>

<style>
.blog-list {
  margin-top: 2em;
}

.blog-post-item {
  margin-bottom: 2em;
}

.blog-post-title {
  margin-bottom: 0.5em;
  font-size: 1.5em;
}

.blog-post-title a {
  text-decoration: none;
  color: inherit;
}

.blog-post-title a:hover {
  color: #0073e6;
}

.blog-post-meta {
  color: #666;
  font-size: 0.9em;
  margin-bottom: 1em;
}

.blog-post-excerpt {
  margin-bottom: 1em;
  color: #333;
}

.blog-post-read-more {
  margin-bottom: 1em;
}
</style>

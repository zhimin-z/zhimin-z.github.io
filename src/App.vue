<script setup>
import {
  profile,
  books,
  papers,
  blogs,
  openSource,
  community,
  education,
  honors,
  teaching,
  work
} from './data/profileData'

const nav = [
  ['biography', 'Biography'],
  ['interest', 'Research'],
  ['publications', 'Publications'],
  ['projects', 'Projects'],
  ['books', 'Books'],
  ['writing', 'Writing'],
  ['service', 'Service'],
  ['education', 'Education'],
  ['experience', 'Experience']
]

const projects = openSource.filter((item) => item.kind !== 'organization')
const organizations = openSource.filter((item) => item.kind === 'organization')
</script>

<template>
  <main class="site-shell">
    <header class="masthead">
      <div class="identity">
        <p class="eyebrow">AI + Software Engineering</p>
        <h1>Zhimin Zhao <span>赵志民</span></h1>
        <p class="affiliation">
          Ph.D. Candidate,
          <a :href="profile.links.sail">Software Analysis and Intelligence Lab</a>,
          School of Computing, Queen's University
        </p>
        <nav aria-label="Page sections">
          <a v-for="([id, label], index) in nav" :key="id" :href="`#${id}`">
            {{ label }}<span v-if="index < nav.length - 1"> / </span>
          </a>
        </nav>
        <p class="contact">
          Email: {{ profile.email }} ·
          <a href="https://github.com/zhimin-z">GitHub</a> ·
          <a href="https://conf.researchr.org/profile/zhiminzhao1">Research profile</a>
        </p>
      </div>
      <img src="/selfie.jpg" alt="Portrait of Zhimin Zhao" />
    </header>

    <section id="biography">
      <h2>Biography</h2>
      <p>
        I am a Ph.D. candidate at Queen's University, advised by
        <a :href="profile.links.advisor">Ahmed E. Hassan</a>. My research sits at the intersection of
        artificial intelligence and software engineering, with a focus on evaluating foundation models
        and building reliable AI-powered software.
      </p>
      <p>
        Previously, I earned an M.S.E. from the <a :href="profile.links.penn">University of Pennsylvania</a>
        and a B.Eng. from the <a :href="profile.links.bit">Beijing Institute of Technology</a>.
        I turn research into open-source systems, benchmarks, books, and practical tutorials.
      </p>
    </section>

    <section id="interest">
      <h2>Research Interest</h2>
      <p>I work on AI for software engineering and software engineering for AI. Current topics include:</p>
      <ul class="compact-list">
        <li>Foundation model evaluation and evaluation engineering</li>
        <li>AI engineering, LLMOps, and MLOps</li>
        <li>AI agents and reliable AI-powered software</li>
      </ul>
      <p class="collaboration">I enjoy collaborating on research and open-source work. Feel free to reach out.</p>
    </section>

    <section id="publications">
      <h2>Publications</h2>
      <ol class="publication-list" reversed>
        <li v-for="paper in papers" :key="paper.title">
          <span class="venue">{{ paper.badge }}</span>
          <strong>{{ paper.title }}</strong>.
          <span class="authors">{{ paper.authors }}.</span>
          <span>{{ paper.venue }}</span>
          <span class="item-links">
            <a v-for="link in paper.links" :key="link.url" :href="link.url">[{{ link.label }}]</a>
          </span>
        </li>
      </ol>
    </section>

    <section id="projects">
      <h2>Open-Source Projects</h2>
      <ul class="detail-list">
        <li v-for="item in projects" :key="item.title">
          <a :href="item.url"><strong>{{ item.title }}</strong></a> — {{ item.desc }}
        </li>
      </ul>
      <details>
        <summary>Open-source organizations</summary>
        <ul class="detail-list nested">
          <li v-for="item in organizations" :key="item.title">
            <a :href="item.url">{{ item.title }}</a> — {{ item.role }}. {{ item.desc }}
          </li>
        </ul>
      </details>
    </section>

    <section id="books">
      <h2>Books</h2>
      <ol class="publication-list" reversed>
        <li v-for="book in books" :key="book.title">
          <strong>{{ book.title }}</strong>. {{ book.authors }}. {{ book.venue }}
          <span class="item-links">
            <a v-for="link in book.links" :key="link.url" :href="link.url">[{{ link.label }}]</a>
          </span>
        </li>
      </ol>
    </section>

    <section id="writing">
      <h2>Selected Writing</h2>
      <ul class="dated-list">
        <li v-for="post in blogs" :key="post.title">
          <a :href="post.links[0].url">{{ post.title }}</a><span>{{ post.venue }}</span>
        </li>
      </ul>
    </section>

    <section id="service">
      <h2>Service and Activities</h2>
      <ul class="detail-list">
        <li v-for="item in community" :key="item" v-html="item"></li>
      </ul>
      <h3>Teaching</h3>
      <ul class="detail-list">
        <li v-for="item in [...teaching.queens, ...teaching.penn]" :key="item.text">{{ item.text }}</li>
      </ul>
    </section>

    <section id="education">
      <h2>Education</h2>
      <ul class="dated-list">
        <li v-for="item in education" :key="item.period">
          <time>{{ item.period }}</time><span>{{ item.text }}</span>
        </li>
      </ul>
    </section>

    <section id="experience">
      <h2>Experience</h2>
      <ul class="dated-list">
        <li v-for="item in work" :key="item.period">
          <time>{{ item.period }}</time><span>{{ item.text }}</span>
        </li>
      </ul>
    </section>

    <section id="honors">
      <h2>Honors and Awards</h2>
      <ul class="detail-list">
        <li v-for="item in honors" :key="item" v-html="item"></li>
      </ul>
    </section>

    <footer>Last updated August 2026.</footer>
  </main>
</template>

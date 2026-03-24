<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  profile,
  brandNarrative,
  byNumbers,
  quickNav,
  highlights,
  books,
  papers,
  blogs,
  demoReels,
  openSource,
  community,
  education,
  honors,
  teaching,
  work
} from './data/profileData'

const jumpTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const drawerOpen = ref(false)
const drawerTitle = ref('')
const drawerBadge = ref('')
const drawerMeta = ref([])
const drawerLinks = ref([])

const openDrawer = (type, item) => {
  drawerTitle.value = item.title || 'Detail'
  drawerBadge.value = item.badge || ''

  if (type === 'highlight') {
    drawerMeta.value = [item.desc]
    drawerLinks.value = item.links || []
  } else if (type === 'book' || type === 'paper') {
    drawerMeta.value = [item.authors, item.venue].filter(Boolean)
    drawerLinks.value = item.links || []
  } else if (type === 'blog') {
    drawerMeta.value = [item.venue].filter(Boolean)
    drawerLinks.value = item.links || []
  } else if (type === 'opensource') {
    drawerMeta.value = [item.role, item.desc].filter(Boolean)
    drawerLinks.value = [{ label: 'project', url: item.url }]
  } else {
    drawerMeta.value = []
    drawerLinks.value = []
  }

  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}

const openSourceGroups = computed(() => [
  {
    key: 'organization',
    title: 'Organizations',
    items: openSource.filter((item) => item.kind === 'organization')
  },
  {
    key: 'project',
    title: 'Projects',
    items: openSource.filter((item) => item.kind === 'project')
  },
  {
    key: 'tutorial',
    title: 'Open Source Tutorials',
    items: openSource.filter((item) => item.kind === 'tutorial')
  }
])

const onKeydown = (e) => {
  if (e.key === 'Escape' && drawerOpen.value) {
    closeDrawer()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="page">
    <aside class="side-nav">
      <div class="side-title">Navigate</div>
      <button v-for="item in quickNav" :key="item.id" @click="jumpTo(item.id)">{{ item.label }}</button>
    </aside>

    <main class="content">
      <section class="hero card" id="top">
        <div class="hero-left">
          <div class="hero-kicker">{{ brandNarrative.kicker }}</div>
          <h1>👋 Hi, I'm {{ profile.name }}</h1>
          <p class="subtitle">
            {{ brandNarrative.headline }}
          </p>
          <p class="intro">
            I am currently a {{ profile.title }} at
            <a :href="profile.links.sail" target="_blank" rel="noreferrer">SAIL@Queen's</a>, advised by
            <a :href="profile.links.advisor" target="_blank" rel="noreferrer">Dr. Ahmed E. Hassan</a>
            (ACM/IEEE Fellow), working at the intersection of <strong>AI + Software Engineering</strong>.
          </p>
          <p class="intro">
            Previously, I earned my Master's degree from
            <a :href="profile.links.penn" target="_blank" rel="noreferrer">CG@Penn</a>
            with
            <a :href="profile.links.lane" target="_blank" rel="noreferrer">Dr. Stephen H. Lane</a>,
            and my Bachelor's degree from
            <a :href="profile.links.bit" target="_blank" rel="noreferrer">ISC@BIT</a>
            with
            <a :href="profile.links.luo" target="_blank" rel="noreferrer">Dr. Senlin Luo</a>.
          </p>
          <div class="pillar-grid">
            <article class="pillar-card" v-for="pillar in brandNarrative.pillars" :key="pillar.title">
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.text }}</p>
            </article>
          </div>
          <p class="ps">P.S. My Chinese name is “{{ profile.cnName }}” and my English name is “Jimmy Zhao”.</p>
          <p><strong>Email:</strong> {{ profile.email }}</p>
        </div>
        <div class="hero-right">
          <img src="/selfie.jpg" alt="Zhimin Zhao" class="avatar" />
        </div>
      </section>

      <section id="numbers" class="card isolated">
        <h2>📈 By Numbers</h2>
        <div class="numbers-grid">
          <article class="stat-card" v-for="item in byNumbers" :key="item.label">
            <div class="stat-value">{{ item.value }}</div>
            <div class="stat-label">{{ item.label }}</div>
          </article>
        </div>
      </section>

      <section id="highlights" class="card">
        <h2>🚀 Research Highlights</h2>
        <p class="section-intro">Core research questions and flagship projects.</p>
        <div class="grid3">
          <article class="project-card clickable" v-for="h in highlights" :key="h.title" @click="openDrawer('highlight', h)">
            <h3>{{ h.title }}</h3>
            <p>{{ h.desc }}</p>
            <div class="links">
              <a v-for="l in h.links" :key="l.url" :href="l.url" target="_blank" rel="noreferrer" @click.stop>{{ l.label }}</a>
            </div>
          </article>
        </div>
      </section>

      <section id="opensource" class="card isolated">
        <h2>🔧 Open Source Contributions</h2>
        <p class="section-intro">Systems, benchmarks, and tutorials built from that work.</p>
        <div v-for="group in openSourceGroups" :key="group.key" class="os-group" v-show="group.items.length">
          <h3 class="os-group-title">{{ group.title }}</h3>
          <article class="project-card clickable" v-for="o in group.items" :key="o.title" @click="openDrawer('opensource', o)">
            <h3><a :href="o.url" target="_blank" rel="noreferrer" @click.stop>{{ o.title }}</a> <span class="role">{{ o.role }}</span></h3>
            <p>{{ o.desc }}</p>
          </article>
        </div>
      </section>

      <section id="books" class="card isolated">
        <h2>📚 Books</h2>
        <p class="section-intro">Long-form teaching and knowledge packaging.</p>
        <article class="entry clickable" v-for="b in books" :key="b.title" @click="openDrawer('book', b)">
          <div class="badge">{{ b.badge }}</div>
          <h3>{{ b.title }}</h3>
          <p class="muted">{{ b.authors }}</p>
          <p>{{ b.venue }}</p>
          <div class="links">
            <a v-for="l in b.links" :key="l.url" :href="l.url" target="_blank" rel="noreferrer" @click.stop>{{ l.label }}</a>
          </div>
        </article>
      </section>

      <section id="papers" class="card isolated">
        <h2>📝 Papers</h2>
        <article class="entry clickable" v-for="p in papers" :key="p.title" @click="openDrawer('paper', p)">
          <div class="badge">{{ p.badge }}</div>
          <h3>{{ p.title }}</h3>
          <p class="muted">{{ p.authors }}</p>
          <p>{{ p.venue }}</p>
          <div class="links">
            <a v-for="l in p.links" :key="l.url" :href="l.url" target="_blank" rel="noreferrer" @click.stop>{{ l.label }}</a>
          </div>
        </article>
      </section>

      <section id="blogs" class="card isolated">
        <h2>📝 Blogs</h2>
        <article class="entry clickable" v-for="b in blogs" :key="b.title" @click="openDrawer('blog', b)">
          <div class="badge">{{ b.badge }}</div>
          <h3>{{ b.title }}</h3>
          <p>{{ b.venue }}</p>
          <div class="links"><a :href="b.links[0].url" target="_blank" rel="noreferrer" @click.stop>blog</a></div>
        </article>
      </section>

      <section id="demoreels" class="card isolated">
        <h2>🎬 Demo Reels</h2>
        <p class="section-intro">Visual showcases from past projects.</p>
        <div class="video-embed" v-for="d in demoReels" :key="d.url">
          <iframe
            :src="'https://www.youtube.com/embed/zFPO7Nr4bM8?list=PLisQsVOIdMfRj7WicZocqBoOFMjJmJjZP'"
            title="Demo Reels"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="width:100%;aspect-ratio:16/9;border-radius:8px;"
          ></iframe>
        </div>
      </section>

      <section id="community" class="card isolated">
        <h2>💬 Community Services</h2>
        <ul class="timeline">
          <li v-for="c in community" :key="c">{{ c }}</li>
        </ul>
      </section>

      <section id="education" class="card isolated">
        <h2>📖 Educations</h2>
        <ul class="timeline">
          <li v-for="e in education" :key="e.period + e.text">
            <strong>{{ e.period }}</strong> — {{ e.text }}
          </li>
        </ul>
      </section>

      <section id="honors" class="card isolated">
        <h2>🎖 Honors and Awards</h2>
        <ul class="timeline">
          <li v-for="h in honors" :key="h">{{ h }}</li>
        </ul>
      </section>

      <section id="teaching" class="card isolated">
        <h2>📐 Teaching Experience</h2>
        <h3>Queen's University</h3>
        <ul class="timeline">
          <li v-for="t in teaching.queens" :key="t.text">{{ t.text }}</li>
        </ul>
        <h3>University of Pennsylvania</h3>
        <ul class="timeline">
          <li v-for="t in teaching.penn" :key="t.text">{{ t.text }}</li>
        </ul>
      </section>

      <section id="work" class="card isolated">
        <h2>📊 Working Experience</h2>
        <ul class="timeline">
          <li v-for="w in work" :key="w.period + w.text">
            <strong>{{ w.period }}</strong> — {{ w.text }}
          </li>
        </ul>
      </section>
    </main>

    <transition name="drawer-fade">
      <div class="drawer-overlay" v-if="drawerOpen" @click="closeDrawer" />
    </transition>

    <transition name="drawer-slide">
      <aside class="drawer" v-if="drawerOpen" aria-label="Project details" role="dialog" aria-modal="true">
        <div class="drawer-header">
          <div>
            <div v-if="drawerBadge" class="badge">{{ drawerBadge }}</div>
            <h2>{{ drawerTitle }}</h2>
          </div>
          <button class="drawer-close" @click="closeDrawer" aria-label="Close details">✕</button>
        </div>
        <div class="drawer-body">
          <p v-for="line in drawerMeta" :key="line">{{ line }}</p>
          <div class="links" v-if="drawerLinks.length">
            <a v-for="link in drawerLinks" :key="link.url" :href="link.url" target="_blank" rel="noreferrer">{{ link.label }}</a>
          </div>
        </div>
      </aside>
    </transition>
  </div>
</template>

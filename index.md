---
layout: home
title: Nepali Date Picker
hero:
  name: Nepali Date Picker
  text: Bikram Sambat Date Picker Made Easy
  tagline: A ready-to-use Nepali (Bikram Sambat) date picker component for Vue 3, Vue 2, and React — built on top of nepali-date-library.
  actions:
    - theme: brand
      text: Vue 3 Docs
      link: /docs/Vue3/getting-started
    - theme: alt
      text: Vue 2 Docs
      link: /docs/Vue2/getting-started
features:
  - icon: 💚
    title: Vue 3 Support
    details: First-class Vue 3 component with full TypeScript support, v-model binding, and Composition API.
  - icon: 💚
    title: Vue 2 Support
    details: Fully compatible Vue 2 component with v-model binding and options API support.
  - icon: ⚛️
    title: React (Coming Soon)
    details: A React component is currently in development. Stay tuned!
  - icon: 📅
    title: Accurate BS Dates
    details: Supports BS 1976 to 2100 with accurate month lengths, powered by nepali-date-library package.
    link: https://github.com/SandipGhimire/Nepali-Date-Library-NodeJS
  - icon: 🎨
    title: Highly Customizable
    details: Control min/max dates, placeholder, disabled state, typing, Saturday highlights, and more via props.
  - icon: 🌐
    title: Smart Positioning
    details: Calendar auto-positions above or below the input based on available viewport space.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #42d392 30%, #647eff);
}

.VPHero .text {
  font-size: 2rem !important;
}

.framework-switcher {
  display: flex;
  padding: 0; 
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
}

.framework-box {
  flex: 1;
  padding: 24px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s;
}

.framework-box:not(.coming-soon):hover {
  border-color: var(--vp-c-brand);
}

.framework-box.coming-soon {
  opacity: 0.55;
}

.framework-box h3 {
  margin-top: 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.coming-soon-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  background: var(--vp-c-yellow-soft);
  color: var(--vp-c-yellow-dark);
}
</style>

## Quick Start

::: code-group

```vue [Vue 3]
<!-- npm install nepali-datepicker-vue -->
<script setup>
import { ref } from "vue";
import NepaliDatePicker from "nepali-datepicker-vue";

const date = ref("");
</script>

<template>
  <NepaliDatePicker
    v-model="date"
    placeholder="YYYY-MM-DD"
    :year-select="true"
    :month-select="true"
  />
</template>
```

```vue [Vue 2]
<!-- npm install nepali-datepicker-vue2 -->
<script>
import NepaliDatePicker from "nepali-datepicker-vue2";

export default {
  components: { NepaliDatePicker },
  data() {
    return { date: "" };
  },
};
</script>

<template>
  <NepaliDatePicker
    v-model="date"
    placeholder="YYYY-MM-DD"
    :year-select="true"
    :month-select="true"
  />
</template>
```

```tsx [React (Coming Soon)]
// Stay tuned for the React component package!
```

:::

---

## Packages

<div class="framework-switcher">
  <div class="framework-box">
    <h3>💚 Vue 3</h3>
    <p>Full-featured date picker for Vue 3 with TypeScript support and Composition API.</p>
    <a href="/docs/Vue3/">View Vue 3 Docs →</a>
  </div>
  <div class="framework-box">
    <h3>💚 Vue 2</h3>
    <p>Date picker component compatible with Vue 2 and the Options API.</p>
    <a href="/docs/Vue2/">View Vue 2 Docs →</a>
  </div>
  <div class="framework-box coming-soon">
    <h3>⚛️ React <span class="coming-soon-badge">Coming Soon</span></h3>
    <p>A React version of the Nepali date picker is currently in development.</p>
  </div>
</div>

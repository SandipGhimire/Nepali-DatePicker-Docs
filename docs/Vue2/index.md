# Vue 2 — Nepali Date Picker

<div class="warning custom-block" style="padding-top: 8px">
  <p>⚠️ <strong>Maintenance Mode</strong> — The Vue 2 package receives bug fixes only. New features are developed exclusively for the <a href="/docs/Vue3/">Vue 3 version</a>.</p>
</div>

## Overview

**nepali-datepicker-vue2** is a Vue 2 component for selecting dates in the **Nepali (Bikram Sambat)** calendar system. Built with the Vue 2 Options API, it provides a clean, functional date picker experience.

### Package Details

| | |
|---|---|
| **Package** | `nepali-datepicker-vue2` |
| **Version** | 1.0.2 |
| **License** | MIT |
| **Vue Version** | ^2.5.7 |
| **API Style** | Options API |

### Features

- 📅 **Nepali (BS) Calendar** — Full Bikram Sambat calendar from 1976 to 2100 BS
- 🗓️ **Year & Month Selection** — Dropdown selectors for quick navigation
- ✨ **Today Highlighting** — Current date is visually highlighted
- ⌨️ **Keyboard Input** — Type dates directly and press Enter
- ❌ **Clear Button** — Quick reset with the ✕ icon
- 📆 **Adjacent Month Days** — Shows prev/next month days in the grid
- 🔄 **Click-Outside Detection** — Auto-closes when clicking outside

### Vue 3 vs Vue 2

If you are starting a new project, we **strongly recommend** using the [Vue 3 package](/docs/Vue3/). It includes many features not available in Vue 2:

- TypeScript support
- Smart viewport positioning (Teleport)
- Min/max date validation
- Disabled state
- Auto-formatting input
- Mini English dates
- Saturday highlighting
- Custom input class styling
- Scroll/resize repositioning

## Quick Install

```bash
npm install nepali-datepicker-vue2
```

Import styles in your entry file:

```js
// main.js
import 'nepali-datepicker-vue2/main.css'
```

Use the component:

```vue
<template>
  <NepaliDatepicker v-model="date" placeholder="YYYY-MM-DD" />
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return { date: '' }
  }
}
</script>
```

::: tip Next Steps
Head to [Getting Started](/docs/Vue2/getting-started) for a full walkthrough, or see the [Props Reference](/docs/Vue2/reference/props).
:::

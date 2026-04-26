# Vue 3 — Nepali Date Picker

<div class="tip custom-block" style="padding-top: 8px">
  <p>Package: <code>nepali-datepicker-vue</code> &nbsp;|&nbsp; Latest: <strong>v2.0.0</strong> &nbsp;|&nbsp; License: MIT</p>
</div>

## Overview

**nepali-datepicker-vue** is a full-featured Vue 3 component for selecting dates in the **Nepali (Bikram Sambat)** calendar system. Built entirely with the Vue 3 Composition API and TypeScript, it provides a rich, accessible, and highly customizable date-picking experience.

### Why Vue 3?

The Vue 3 package is the **actively developed** version. It leverages modern Vue 3 capabilities to deliver features that are not available in the Vue 2 version:

| Capability | Vue 3 ✅ | Vue 2 |
|---|---|---|
| Composition API (`<script setup>`) | ✅ | ❌ Options API only |
| Full TypeScript support | ✅ Exported interfaces | ❌ |
| `v-model` (native) | ✅ `modelValue` | ✅ `value` |
| `<Teleport>` calendar rendering | ✅ Renders to `<body>` | ❌ Inline positioning |
| Smart viewport positioning | ✅ Auto above/below | ❌ |
| Min / Max date validation | ✅ | ❌ |
| Disabled state | ✅ | ❌ |
| Allow / disallow typing | ✅ | ❌ |
| Auto-formatting on input | ✅ | ❌ |
| Click-to-select all text | ✅ | ❌ |
| Real-time input updates | ✅ `updateOnInputChange` | ❌ |
| Mini English date display | ✅ | ❌ |
| Saturday highlighting | ✅ | ❌ |
| Custom input class | ✅ `inputClass` | ❌ |
| Scroll & resize repositioning | ✅ | ❌ |

### Key Features

- 🗓️ **Accurate BS Dates** — Supports Bikram Sambat years 1976 to 2100 using `nepali-date-library`
- 📅 **Year & Month Quick Selection** — Dropdown pickers for fast navigation
- 🔒 **Date Range Restriction** — Enforce `minDate` and `maxDate` boundaries
- ⌨️ **Keyboard Input** — Type dates directly with intelligent auto-formatting
- 🎨 **Customizable** — Override wrapper class, input class, and all internal CSS
- 📍 **Smart Positioning** — Calendar auto-positions above or below based on viewport space
- 🌍 **Mini English Dates** — Optionally display the corresponding AD day inside each cell
- 🔴 **Saturday Highlighting** — Optionally highlight Saturdays (Nepal's weekly holiday)
- ♿ **Accessible** — Focus management and `aria-haspopup` support

## Quick Install

```bash
npm install nepali-datepicker-vue
```

Then import the styles in your entry file:

```ts
// main.ts
import 'nepali-datepicker-vue/main.css'
```

And use the component:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <NepaliDatePicker v-model="date" placeholder="YYYY-MM-DD" />
</template>
```

::: tip Next Steps
Head to [Getting Started](/docs/Vue3/getting-started) for a full installation walkthrough, or jump to the [Props Reference](/docs/Vue3/reference/props) to explore every available option.
:::

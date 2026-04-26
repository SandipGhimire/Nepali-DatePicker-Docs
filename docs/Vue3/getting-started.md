# Getting Started — Vue 3

Follow the steps below to install and integrate the Nepali Date Picker into your Vue 3 project.

## Prerequisites

- **Node.js** ≥ 18
- **Vue 3** ≥ 3.5
- A Vue 3 project (Vite, Nuxt 3, Vue CLI, etc.)

## Installation

::: code-group

```bash [npm]
npm install nepali-datepicker-vue
```

```bash [pnpm]
pnpm add nepali-datepicker-vue
```

```bash [yarn]
yarn add nepali-datepicker-vue
```

:::

The package has two peer/bundled dependencies:
- `vue` ^3.5 (peer — you must have Vue 3 in your project)
- `nepali-date-library` (bundled automatically)

## Import Styles

You **must** import the component's stylesheet once in your app's entry file:

```ts
// main.ts or main.js
import 'nepali-datepicker-vue/main.css'
```

::: warning
Without this import the calendar popup will have no styling and will appear broken.
:::

## Basic Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <div style="width: 250px">
    <NepaliDatePicker
      v-model="date"
      placeholder="YYYY-MM-DD"
      :year-select="true"
      :month-select="true"
    />
    <p v-if="date">Selected: {{ date }}</p>
  </div>
</template>
```

The component binds via `v-model`. The selected date is always in **`YYYY-MM-DD`** BS format (e.g. `2081-05-15`).

## With Date Range Restrictions

Restrict the selectable dates to a specific range using `minDate` and `maxDate`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <NepaliDatePicker
    v-model="date"
    minDate="2080-01-01"
    maxDate="2085-12-30"
    placeholder="Pick within range"
  />
</template>
```

Dates outside the range will appear disabled and cannot be selected.

## Disabling the Picker

```vue
<NepaliDatePicker v-model="date" :disabled="true" />
```

When disabled, the input is non-interactive and the calendar will not open.

## Listening to Selection Events

In addition to `v-model`, you can listen to the `@onSelect` event for side-effects:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')

function handleSelect(value: string) {
  console.log('User selected:', value)
}
</script>

<template>
  <NepaliDatePicker v-model="date" @onSelect="handleSelect" />
</template>
```

## TypeScript Support

The package exports the `NepaliDatePickerProps` interface so you can type-check props programmatically:

```ts
import type { NepaliDatePickerProps } from 'nepali-datepicker-vue'
```

## Global Registration (Optional)

If you prefer to register the component globally:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'
import 'nepali-datepicker-vue/main.css'

const app = createApp(App)
app.component('NepaliDatePicker', NepaliDatePicker)
app.mount('#app')
```

Then use `<NepaliDatePicker />` anywhere without importing per-component.

## Next Steps

- [Props Reference](/docs/Vue3/reference/props) — explore every prop in detail
- [Events Reference](/docs/Vue3/reference/events) — all emitted events
- [Examples](/docs/Vue3/reference/example) — common patterns and recipes
- [API Overview](/docs/Vue3/api/) — component exports and TypeScript types

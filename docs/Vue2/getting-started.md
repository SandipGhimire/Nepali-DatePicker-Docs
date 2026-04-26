# Getting Started — Vue 2

Follow the steps below to install and integrate the Nepali Date Picker into your Vue 2 project.

::: warning
This is the **Vue 2** package. If you are using Vue 3, see the [Vue 3 Getting Started](/docs/Vue3/getting-started) guide instead.
:::

## Prerequisites

- **Node.js** ≥ 14
- **Vue 2** ≥ 2.5
- A Vue 2 project (Vue CLI, Vite with `@vitejs/plugin-vue2`, Nuxt 2, etc.)

## Installation

::: code-group

```bash [npm]
npm install nepali-datepicker-vue2
```

```bash [pnpm]
pnpm add nepali-datepicker-vue2
```

```bash [yarn]
yarn add nepali-datepicker-vue2
```

:::

The package bundles its own dependencies:
- `vue` ^2.5.7 (must be in your project)
- `nepali-date-library` (bundled automatically)

## Import Styles

You **must** import the component's stylesheet once in your app's entry file:

```js
// main.js
import 'nepali-datepicker-vue2/main.css'
```

::: warning
Without this import the calendar popup will appear unstyled and broken.
:::

## Basic Usage

```vue
<template>
  <div style="width: 250px">
    <NepaliDatepicker
      v-model="selectedDate"
      placeholder="Select a date"
    />
    <p v-if="selectedDate">Selected: {{ selectedDate }}</p>
  </div>
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return {
      selectedDate: ''
    }
  }
}
</script>
```

The component uses Vue 2's `v-model` (via `value` prop and `input` event). The date is in **`YYYY-MM-DD`** BS format.

## With Custom Class

Apply a custom CSS class to the wrapper:

```vue
<template>
  <NepaliDatepicker
    v-model="date"
    classValue="my-custom-picker"
    placeholder="YYYY-MM-DD"
  />
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

## Without Year/Month Selectors

Disable the year and/or month dropdown selectors:

```vue
<NepaliDatepicker
  v-model="date"
  :year-select="false"
  :month-select="false"
/>
```

## Listening to the onSelect Event

```vue
<template>
  <NepaliDatepicker v-model="date" @onSelect="handleSelect" />
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return { date: '' }
  },
  methods: {
    handleSelect(value) {
      console.log('Date selected:', value)
    }
  }
}
</script>
```

## Global Registration (Optional)

Register globally in your `main.js`:

```js
import Vue from 'vue'
import NepaliDatepicker from 'nepali-datepicker-vue2'
import 'nepali-datepicker-vue2/main.css'

Vue.component('NepaliDatepicker', NepaliDatepicker)
```

Then use `<NepaliDatepicker />` anywhere without importing per-component.

## Next Steps

- [Props Reference](/docs/Vue2/reference/props) — all available props
- [Events Reference](/docs/Vue2/reference/events) — emitted events
- [Examples](/docs/Vue2/reference/example) — common patterns
- [API Overview](/docs/Vue2/api/) — exports and CSS classes

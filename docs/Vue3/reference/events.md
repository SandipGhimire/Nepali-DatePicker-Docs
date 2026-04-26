# Events Reference — Vue 3

Complete reference for all events emitted by the `<NepaliDatePicker>` component.

## Events Summary

| Event | Payload | When Emitted |
|---|---|---|
| `update:modelValue` | `string` | When the selected date changes (v-model compatible) |
| `onSelect` | `string` | When the user actively picks a date |

---

## `update:modelValue`

This is the standard Vue 3 `v-model` event. It fires whenever the internal date value changes:

- User clicks a day in the calendar
- User types a valid date and presses Enter
- User types a valid date (with `updateOnInputChange` enabled)
- The clear button is clicked (emits `''`)

### Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <!-- v-model automatically listens to update:modelValue -->
  <NepaliDatePicker v-model="date" />
</template>
```

### Manual Listening

If you prefer not to use `v-model`:

```vue
<template>
  <NepaliDatePicker
    :modelValue="date"
    @update:modelValue="date = $event"
  />
</template>
```

---

## `onSelect`

Fires specifically when a user **actively selects** a date. This is emitted at the same time as `update:modelValue` but provides a dedicated hook for side-effects like API calls, form validation, or analytics.

### Usage

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')

function handleSelect(selectedDate: string) {
  console.log('User selected:', selectedDate)
  // Make API call, trigger validation, etc.
}
</script>

<template>
  <NepaliDatePicker v-model="date" @onSelect="handleSelect" />
</template>
```

### When It Fires

| User Action | `update:modelValue` | `onSelect` |
|---|---|---|
| Click a day in the calendar | ✅ | ✅ |
| Press Enter after typing a date | ✅ | ✅ |
| Type a valid date (with `updateOnInputChange`) | ✅ | ✅ |
| Click the clear button (✕) | ✅ (emits `''`) | ✅ (emits `''`) |
| Programmatically change `v-model` | ✅ | ❌ |

::: tip
Use `@onSelect` when you need to distinguish user-initiated selections from programmatic changes. Since both events fire simultaneously for user actions, `@onSelect` is the better hook for triggering side-effects.
:::

---

## Example: Combined Usage

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
const history: string[] = []

// Watch v-model for all changes (including programmatic)
watch(date, (newDate) => {
  console.log('[v-model] Date changed to:', newDate)
})

// Use onSelect for user-initiated actions only
function onUserSelect(selectedDate: string) {
  history.push(selectedDate)
  console.log('[onSelect] User picked:', selectedDate)
}
</script>

<template>
  <NepaliDatePicker v-model="date" @onSelect="onUserSelect" />
  <button @click="date = '2081-01-01'">Set to 2081-01-01</button>
</template>
```

In this example:
- Clicking the button triggers the `watch` but **not** `onSelect`
- Picking a date from the calendar triggers **both**

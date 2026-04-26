# Events Reference — Vue 2

Complete reference for all events emitted by the `<NepaliDatepicker>` component.

## Events Summary

| Event | Payload | When Emitted |
|---|---|---|
| `input` | `string` | When the selected date changes (v-model compatible) |
| `onSelect` | `string` | When the user actively picks or clears a date |

---

## `input`

This is the standard Vue 2 `v-model` event. It fires whenever the date value changes:

- User clicks a day in the calendar
- User types a valid date and presses Enter
- The clear button is clicked (emits `''`)

### Usage

```vue
<template>
  <!-- v-model automatically listens to 'input' event -->
  <NepaliDatepicker v-model="date" />
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

### Manual Listening

If you prefer not to use `v-model`:

```vue
<template>
  <NepaliDatepicker :value="date" @input="date = $event" />
</template>
```

::: tip Vue 3 Difference
In Vue 3, this event is `update:modelValue` instead of `input`.
:::

---

## `onSelect`

Fires whenever the user **actively selects** a date from the calendar or clears the value. This provides a dedicated hook for side-effects.

### Usage

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
    handleSelect(selectedDate) {
      console.log('User selected:', selectedDate)
      // Trigger API call, validation, etc.
    }
  }
}
</script>
```

### When It Fires

| User Action | `input` | `onSelect` |
|---|---|---|
| Click a day in the calendar | ✅ | ✅ |
| Press Enter after typing | ✅ | ✅ |
| Click the clear button (✕) | ✅ (emits `''`) | ✅ (emits `''`) |
| Programmatically change `value` | ❌ | ❌ |

---

## Example: Combined Usage

```vue
<template>
  <div>
    <NepaliDatepicker v-model="date" @onSelect="onUserSelect" />
    <button @click="date = '2081-01-01'">Set to 2081-01-01</button>
    <p>Current: {{ date }}</p>
    <p>Last user selection: {{ lastPick }}</p>
  </div>
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return {
      date: '',
      lastPick: ''
    }
  },
  watch: {
    date(newVal) {
      console.log('[v-model] changed to:', newVal)
    }
  },
  methods: {
    onUserSelect(val) {
      this.lastPick = val
      console.log('[onSelect] user picked:', val)
    }
  }
}
</script>
```

In this example:
- Clicking "Set to 2081-01-01" triggers the `watch` but **not** `onSelect`
- Picking a date from the calendar triggers **both**

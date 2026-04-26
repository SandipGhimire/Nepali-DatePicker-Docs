# Examples — Vue 2

Practical examples for using the Nepali Date Picker in Vue 2 applications.

## Basic Date Picker

```vue
<template>
  <div style="width: 250px">
    <NepaliDatepicker v-model="date" placeholder="Select a date" />
    <p v-if="date">You selected: {{ date }}</p>
  </div>
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

---

## Pre-filled Date

Start with a pre-selected value:

```vue
<template>
  <NepaliDatepicker v-model="date" />
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return { date: '2081-05-15' }
  }
}
</script>
```

---

## Without Year Selector

Disable the year dropdown — user navigates years with double-arrow buttons:

```vue
<NepaliDatepicker v-model="date" :year-select="false" />
```

---

## Without Month Selector

Disable the month dropdown — user navigates months with single-arrow buttons:

```vue
<NepaliDatepicker v-model="date" :month-select="false" />
```

---

## Without Both Selectors

Minimal navigation — arrow buttons only:

```vue
<NepaliDatepicker v-model="date" :year-select="false" :month-select="false" />
```

---

## Custom Wrapper Class

Apply a custom CSS class using `classValue`:

```vue
<template>
  <NepaliDatepicker v-model="date" classValue="my-picker" placeholder="Styled picker" />
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

<style>
.my-picker {
  max-width: 280px;
}
.my-picker .calendar-input {
  border: 2px solid #4A90E2 !important;
  border-radius: 6px !important;
  padding: 4px 8px !important;
}
</style>
```

---

## Listening to onSelect

React to user selections:

```vue
<template>
  <div>
    <NepaliDatepicker v-model="date" @onSelect="handleSelect" />
    <p>Last selected: {{ lastSelection }}</p>
  </div>
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return {
      date: '',
      lastSelection: 'none'
    }
  },
  methods: {
    handleSelect(value) {
      this.lastSelection = value || '(cleared)'
      console.log('Selected:', value)
    }
  }
}
</script>
```

---

## Form Integration

Use inside a form with basic validation:

```vue
<template>
  <form @submit.prevent="submitForm">
    <div style="margin-bottom: 16px">
      <label>Full Name</label>
      <input v-model="form.name" type="text" />
      <span v-if="errors.name" style="color: red">{{ errors.name }}</span>
    </div>

    <div style="margin-bottom: 16px">
      <label>Date of Birth (BS)</label>
      <NepaliDatepicker v-model="form.birthDate" placeholder="YYYY-MM-DD" />
      <span v-if="errors.birthDate" style="color: red">{{ errors.birthDate }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return {
      form: { name: '', birthDate: '' },
      errors: { name: '', birthDate: '' }
    }
  },
  methods: {
    submitForm() {
      this.errors.name = this.form.name ? '' : 'Name is required'
      this.errors.birthDate = this.form.birthDate ? '' : 'Date is required'

      if (this.form.name && this.form.birthDate) {
        alert('Submitted: ' + JSON.stringify(this.form))
      }
    }
  }
}
</script>
```

---

## Multiple Pickers on One Page

Each picker maintains its own independent state:

```vue
<template>
  <div style="display: flex; gap: 16px">
    <div>
      <label>Start Date</label>
      <NepaliDatepicker v-model="startDate" placeholder="Start" />
    </div>
    <div>
      <label>End Date</label>
      <NepaliDatepicker v-model="endDate" placeholder="End" />
    </div>
  </div>
  <p v-if="startDate && endDate">Range: {{ startDate }} → {{ endDate }}</p>
</template>

<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return {
      startDate: '',
      endDate: ''
    }
  }
}
</script>
```

::: tip
Unlike Vue 3, the Vue 2 version does not support `minDate`/`maxDate` props. You would need to add manual validation logic if you want to enforce a date range.
:::

---

## Watching for Changes

Use Vue 2 watchers to react to date changes:

```vue
<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker },
  data() {
    return { date: '' }
  },
  watch: {
    date(newVal, oldVal) {
      console.log(`Date changed from ${oldVal} to ${newVal}`)
      // Trigger side-effects, API calls, etc.
    }
  }
}
</script>
```

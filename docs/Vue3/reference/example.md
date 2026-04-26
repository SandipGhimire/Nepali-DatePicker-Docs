# Examples — Vue 3

Practical examples for using the Nepali Date Picker in Vue 3 applications.

## Basic Date Picker

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <div style="width: 250px">
    <NepaliDatePicker v-model="date" placeholder="Select a date" />
    <p v-if="date">You selected: {{ date }}</p>
  </div>
</template>
```

---

## Date Range Restriction

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
</script>

<template>
  <NepaliDatePicker
    v-model="date"
    minDate="2082-01-01"
    maxDate="2082-02-32"
    placeholder="YYYY-MM-DD"
  />
</template>
```

---

## Dynamic Min/Max Dates

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'
import { NepaliDate } from 'nepali-date-library'

const date = ref('')
const today = new NepaliDate()
const minDate = today.addDays(-7).format('YYYY-MM-DD')
const maxDate = new NepaliDate().addDays(7).format('YYYY-MM-DD')
</script>

<template>
  <NepaliDatePicker v-model="date" :minDate="minDate" :maxDate="maxDate" />
</template>
```

---

## Without Year and Month Selectors

```vue
<NepaliDatePicker v-model="date" :year-select="false" :month-select="false" />
```

---

## Read-Only (No Typing)

```vue
<NepaliDatePicker v-model="date" :allow-typing="false" placeholder="Click to open" />
```

---

## With Mini English Dates & Saturday Highlighting

```vue
<NepaliDatePicker
  v-model="date"
  :mini-english-date="true"
  :highlight-saturday="true"
/>
```

---

## Real-Time Input Updates

```vue
<NepaliDatePicker v-model="date" :update-on-input-change="true" />
```

---

## Custom Styled Input

```vue
<NepaliDatePicker v-model="date" class="custom-wrapper" inputClass="custom-input" />
```

```css
.custom-input {
  border: 2px solid #4A90E2 !important;
  border-radius: 8px !important;
  padding: 8px 12px !important;
}
```

---

## Dark Theme Override

```css
.dark .nepali-datepicker .calendar-input {
  background: #2c3e50;
  color: #ecf0f1;
  border: 1px solid #34495e;
}
.dark .nepali-datepicker .calendar {
  background: #2c3e50;
  color: #ecf0f1;
  border: 1px solid #34495e;
}
.dark .nepali-datepicker .calendar__selected {
  background-color: #3498db !important;
}
.dark .nepali-datepicker .calendar__toggle_button {
  background: #2c3e50;
}
```

---

## Form Integration

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const form = reactive({ name: '', birthDate: '' })
const errors = reactive({ name: '', birthDate: '' })

function submitForm() {
  errors.name = form.name ? '' : 'Name is required'
  errors.birthDate = form.birthDate ? '' : 'Birth date is required'
  if (form.name && form.birthDate) {
    alert('Submitted: ' + JSON.stringify(form))
  }
}
</script>

<template>
  <form @submit.prevent="submitForm" style="max-width: 350px">
    <div style="margin-bottom: 16px">
      <label>Name</label>
      <input v-model="form.name" />
      <span v-if="errors.name" style="color:red">{{ errors.name }}</span>
    </div>
    <div style="margin-bottom: 16px">
      <label>Date of Birth (BS)</label>
      <NepaliDatePicker v-model="form.birthDate" placeholder="YYYY-MM-DD" />
      <span v-if="errors.birthDate" style="color:red">{{ errors.birthDate }}</span>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>
```

---

## Linked Date Range (Two Pickers)

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const startDate = ref('')
const endDate = ref('')
</script>

<template>
  <div style="display: flex; gap: 16px">
    <div>
      <label>Start Date</label>
      <NepaliDatePicker v-model="startDate" placeholder="Start" />
    </div>
    <div>
      <label>End Date</label>
      <NepaliDatePicker v-model="endDate" :minDate="startDate" placeholder="End" />
    </div>
  </div>
</template>
```

::: tip
Binding `endDate`'s `minDate` to `startDate` creates a linked range where end can never be before start.
:::

---

## Programmatic Focus

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('')
const openPicker = () => document.getElementById('my-picker')?.focus()
</script>

<template>
  <NepaliDatePicker v-model="date" id="my-picker" />
  <button @click="openPicker">Open Picker</button>
</template>
```

---

## Disabled State

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { NepaliDatePicker } from 'nepali-datepicker-vue'

const date = ref('2081-05-15')
const isDisabled = ref(true)
</script>

<template>
  <NepaliDatePicker v-model="date" :disabled="isDisabled" />
  <button @click="isDisabled = !isDisabled">Toggle Disabled</button>
</template>
```

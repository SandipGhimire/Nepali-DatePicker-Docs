# Props Reference — Vue 2

Complete reference for all props accepted by the `<NepaliDatepicker>` component.

::: warning
The Vue 2 component has a **smaller prop surface** than the Vue 3 version. Features like `minDate`, `maxDate`, `disabled`, `allowTyping`, `autoFormat`, `miniEnglishDate`, and `highlightSaturday` are **only available in Vue 3**. See the [Vue 3 Props Reference](/docs/Vue3/reference/props) for the full feature set.
:::

## All Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `String` | `''` | `v-model` binding — selected date in `YYYY-MM-DD` BS format |
| `yearSelect` | `Boolean` | `true` | Show clickable year selector in the calendar header |
| `monthSelect` | `Boolean` | `true` | Show clickable month selector in the calendar header |
| `classValue` | `String` | `''` | Custom CSS class applied to the wrapper element |
| `placeholder` | `String` | `''` | Placeholder text shown when no date is selected |

---

## Detailed Prop Descriptions

### `value` / `v-model`

The core two-way binding prop. Uses Vue 2's `v-model` convention (`value` prop + `input` event).

```vue
<NepaliDatepicker v-model="selectedDate" />
```

The selected date is always in **`YYYY-MM-DD`** BS format (e.g. `2081-05-15`).

You can also set a default value:

```vue
<script>
export default {
  data() {
    return {
      selectedDate: '2081-05-15' // Opens with Bhadra 15, 2081 selected
    }
  }
}
</script>
```

---

### `yearSelect`

Controls whether the year label in the calendar header is a clickable dropdown:

```vue
<!-- With year selector (default) -->
<NepaliDatepicker v-model="date" :year-select="true" />

<!-- Without year selector — navigate with double arrows only -->
<NepaliDatepicker v-model="date" :year-select="false" />
```

When enabled, the year picker displays **10 years per page** with pagination.

When a year is selected and `monthSelect` is also enabled, the month picker opens automatically.

---

### `monthSelect`

Controls whether the month label in the calendar header is a clickable dropdown:

```vue
<!-- With month selector (default) -->
<NepaliDatepicker v-model="date" :month-select="true" />

<!-- Without — navigate with single arrows only -->
<NepaliDatepicker v-model="date" :month-select="false" />
```

---

### `classValue`

Applies a custom CSS class to the root wrapper `<div>`:

```vue
<NepaliDatepicker v-model="date" classValue="my-custom-picker" />
```

```css
.my-custom-picker {
  max-width: 300px;
}
```

::: tip Vue 3 Difference
In Vue 3, this prop is named `class` (standard HTML attribute) and there is an additional `inputClass` prop for the input element.
:::

---

### `placeholder`

Standard input placeholder text:

```vue
<NepaliDatepicker v-model="date" placeholder="YYYY-MM-DD" />
```

---

## Comparison with Vue 3 Props

| Prop | Vue 2 | Vue 3 |
|---|---|---|
| `value` / `modelValue` | ✅ `value` | ✅ `modelValue` |
| `yearSelect` | ✅ | ✅ |
| `monthSelect` | ✅ | ✅ |
| `classValue` / `class` | ✅ `classValue` | ✅ `class` |
| `placeholder` | ✅ | ✅ |
| `id` | ❌ | ✅ |
| `inputClass` | ❌ | ✅ |
| `minDate` | ❌ | ✅ |
| `maxDate` | ❌ | ✅ |
| `clickSelect` | ❌ | ✅ |
| `updateOnInputChange` | ❌ | ✅ |
| `autoFormat` | ❌ | ✅ |
| `miniEnglishDate` | ❌ | ✅ |
| `highlightSaturday` | ❌ | ✅ |
| `allowTyping` | ❌ | ✅ |
| `disabled` | ❌ | ✅ |

# Props Reference — Vue 3

Complete reference for all props accepted by the `<NepaliDatePicker>` component.

## All Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `modelValue` | `String` | `''` | `v-model` binding — selected date in `YYYY-MM-DD` BS format |
| `id` | `String` | `''` | Custom HTML `id` attribute on the wrapper element |
| `yearSelect` | `Boolean` | `true` | Show clickable year selector in the calendar header |
| `monthSelect` | `Boolean` | `true` | Show clickable month selector in the calendar header |
| `class` | `String` | `''` | Custom CSS class applied to the wrapper `<div>` |
| `inputClass` | `String` | `''` | Custom CSS class applied to the `<input>` element |
| `placeholder` | `String` | `''` | Placeholder text shown when no date is selected |
| `minDate` | `String` | `''` | Minimum selectable date (`YYYY-MM-DD` BS format) |
| `maxDate` | `String` | `''` | Maximum selectable date (`YYYY-MM-DD` BS format) |
| `clickSelect` | `Boolean` | `false` | Auto-select input text when clicked (for easy replacement) |
| `updateOnInputChange` | `Boolean` | `false` | Update `modelValue` in real-time as the user types a valid date |
| `autoFormat` | `Boolean` | `true` | Auto-insert dashes while typing (e.g. `20810515` → `2081-05-15`) |
| `miniEnglishDate` | `Boolean` | `false` | Show the corresponding AD day number below each BS day in the calendar |
| `highlightSaturday` | `Boolean` | `false` | Highlight Saturday cells in red (Nepal's weekly holiday) |
| `allowTyping` | `Boolean` | `true` | Allow manual keyboard input in the date field |
| `disabled` | `Boolean` | `false` | Disable the entire date picker (input + calendar) |

---

## Detailed Prop Descriptions

### `modelValue` / `v-model`

The core two-way binding prop. Accepts and emits dates in `YYYY-MM-DD` BS (Bikram Sambat) format.

```vue
<NepaliDatePicker v-model="selectedDate" />
```

When the user selects a date, the component emits `update:modelValue` with the formatted string. You can also programmatically set the value:

```ts
const date = ref('2081-05-15') // Sets the picker to Bhadra 15, 2081
```

---

### `id`

Sets a custom HTML `id` on the root wrapper element. Useful for targeting with CSS or for programmatic focus:

```vue
<NepaliDatePicker v-model="date" id="birth-date-picker" />
```

```ts
document.getElementById('birth-date-picker')?.focus()
```

---

### `yearSelect` / `monthSelect`

Controls whether the year and month labels in the calendar header are clickable dropdowns.

```vue
<!-- Full navigation -->
<NepaliDatePicker v-model="date" :year-select="true" :month-select="true" />

<!-- Arrow-only navigation (no dropdowns) -->
<NepaliDatePicker v-model="date" :year-select="false" :month-select="false" />
```

When `yearSelect` is enabled, the year picker displays **10 years per page** with pagination arrows.

When a year is selected from the dropdown and `monthSelect` is also enabled, the month picker opens automatically for seamless navigation.

---

### `class` / `inputClass`

Apply custom CSS classes to the wrapper div and the input element respectively:

```vue
<NepaliDatePicker
  v-model="date"
  class="my-wrapper"
  inputClass="my-input"
/>
```

```css
.my-wrapper { max-width: 300px; }
.my-input { border-radius: 8px; padding: 8px 12px; }
```

---

### `placeholder`

Standard input placeholder text:

```vue
<NepaliDatePicker v-model="date" placeholder="YYYY-MM-DD" />
```

---

### `minDate` / `maxDate`

Restrict selectable dates to a range. Both props accept strings in `YYYY-MM-DD` BS format.

```vue
<NepaliDatePicker
  v-model="date"
  minDate="2080-01-01"
  maxDate="2085-12-30"
/>
```

**Behavior:**
- Days outside the range are visually disabled (greyed out) and cannot be clicked
- Manually typed dates outside the range are rejected and reverted
- If `minDate` ≥ `maxDate`, both constraints are ignored and a console error is logged
- Both props are **reactive** — changing them at runtime updates the calendar immediately

---

### `clickSelect`

When `true` and `allowTyping` is also `true`, clicking the input field auto-selects all text so the user can immediately type a replacement:

```vue
<NepaliDatePicker v-model="date" :click-select="true" />
```

---

### `updateOnInputChange`

By default, manually typed dates are only committed when the user presses **Enter** or clicks outside. When this prop is `true`, the model updates in real-time as soon as a valid `YYYY-MM-DD` pattern is typed:

```vue
<NepaliDatePicker v-model="date" :update-on-input-change="true" />
```

---

### `autoFormat`

When `true` (default), the component automatically inserts dashes as the user types digits:

- Type `2081` → shows `2081`
- Type `20810` → shows `2081-0`
- Type `2081051` → shows `2081-05-1`
- Type `20810515` → shows `2081-05-15`

Set to `false` if you want raw unformatted input:

```vue
<NepaliDatePicker v-model="date" :auto-format="false" />
```

---

### `miniEnglishDate`

Shows the corresponding AD (Gregorian) day number as a small label below each BS day in the calendar grid:

```vue
<NepaliDatePicker v-model="date" :mini-english-date="true" />
```

This is helpful for users who need to cross-reference BS and AD dates.

---

### `highlightSaturday`

Highlights Saturday cells in red. In Nepal, Saturday is the weekly public holiday:

```vue
<NepaliDatePicker v-model="date" :highlight-saturday="true" />
```

Saturday cells in the current month appear in red; Saturdays in adjacent months appear in a lighter red.

---

### `allowTyping`

Controls whether the user can type into the input field:

```vue
<!-- Read-only input — can only pick from calendar -->
<NepaliDatePicker v-model="date" :allow-typing="false" />
```

When `false`, the input becomes `readonly` and dates can only be selected by clicking on the calendar.

---

### `disabled`

Completely disables the date picker:

```vue
<NepaliDatePicker v-model="date" :disabled="true" />
```

- The input gets the HTML `disabled` attribute
- The calendar icon is non-interactive
- The clear button is hidden
- The calendar will not open

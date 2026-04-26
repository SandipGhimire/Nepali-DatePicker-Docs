# API Overview — Vue 2

This page summarizes the public API surface of `nepali-datepicker-vue2`.

## Package Exports

```js
// Default export
import NepaliDatepicker from 'nepali-datepicker-vue2'

// Named export
import { NepaliDatePicker } from 'nepali-datepicker-vue2'
```

## CSS Entry

```js
import 'nepali-datepicker-vue2/main.css'
```

This stylesheet must be imported once in your application entry file. It provides all styles for the input, calendar popup, day grid, month/year selectors, and animations.

## Component Registration

### Per-Component (Recommended)

```vue
<script>
import NepaliDatepicker from 'nepali-datepicker-vue2'

export default {
  components: { NepaliDatepicker }
}
</script>
```

### Global

```js
import Vue from 'vue'
import NepaliDatepicker from 'nepali-datepicker-vue2'

Vue.component('NepaliDatepicker', NepaliDatepicker)
```

## v-model Contract

The Vue 2 component follows Vue 2's `v-model` convention:

| Aspect | Value |
|---|---|
| **Prop** | `value` |
| **Event** | `input` |

This means `v-model="date"` is equivalent to:

```vue
<NepaliDatepicker :value="date" @input="date = $event" />
```

::: warning Vue 3 Difference
In Vue 3, the contract uses `modelValue` prop and `update:modelValue` event. If migrating, update your bindings accordingly.
:::

## Internal Dependencies

The component uses [`nepali-date-library`](https://www.npmjs.com/package/nepali-date-library) internally for all date calculations.

Key imports from the library:

| Import | Purpose |
|---|---|
| `NepaliDate` | Core date object for BS date operations |
| `MONTH_EN` | Array of English month names (`Baisakh`, `Jestha`, …) |
| `WEEK_SHORT_EN` | Short weekday names (`Su`, `Mo`, …) |
| `NEPALI_DATE_MAP` | Lookup table of days-per-month for every supported BS year |

## Rendering Architecture

The Vue 2 component renders the calendar popup **inline** inside the component's own DOM using `position: absolute`. This differs from the Vue 3 version which uses `<Teleport>`.

**Implications:**
- The calendar may be clipped by parent elements with `overflow: hidden`
- Positioning is relative to the component's nearest positioned ancestor
- No automatic viewport-aware repositioning

## CSS Class Reference

All internal CSS classes that can be targeted for customization:

| Class | Element |
|---|---|
| `.nepali-datepicker` | Root wrapper |
| `.calendar-input` | Text input field |
| `.calendar-input-div` | Input container |
| `.calendar` | Calendar popup |
| `.calendar__head` | Header row (navigation) |
| `.calendar__header_label` | Month/year text |
| `.calendar__header_selector` | Clickable month/year label |
| `.calendar__weeks` | Weekday header row |
| `.calendar__weekday` | Individual weekday label |
| `.calendar__days` | Day grid |
| `.calendar__day` | Individual day cell |
| `.selected` | Currently selected day |
| `.today` | Today's date |
| `.not_current_month` | Day from adjacent month |
| `.calendar__months` | Month selector grid |
| `.calendar_month` | Individual month option |
| `.calendar__years` | Year selector grid |
| `.calendar__year` | Individual year option |
| `.calendar__toggle_button` | Navigation arrow buttons |
| `.calendar__day_spacer` | Empty spacer cell at calendar boundaries |

::: tip CSS Class Naming Difference
Vue 2 uses simpler class names (e.g. `.selected`, `.today`) while Vue 3 prefixes everything with `calendar__` (e.g. `.calendar__selected`, `.calendar__today`). Keep this in mind if migrating styles.
:::

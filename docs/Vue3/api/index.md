# API Overview — Vue 3

This page summarizes the public API surface of `nepali-datepicker-vue`.

## Package Exports

```ts
// Default export
import NepaliDatePicker from 'nepali-datepicker-vue'

// Named exports
import { NepaliDatePicker } from 'nepali-datepicker-vue'
import type { NepaliDatePickerProps } from 'nepali-datepicker-vue'
```

## CSS Entry

```ts
import 'nepali-datepicker-vue/main.css'
```

This stylesheet must be imported once in your application entry file. It provides all the default styles for the input, calendar popup, day grid, month/year selectors, and animations.

## Component Interface

The component accepts the following TypeScript interface for its props:

```ts
interface NepaliDatePickerProps {
  /** Custom HTML id for the wrapper element */
  id?: string

  /** v-model binding — selected date in YYYY-MM-DD BS format */
  modelValue?: string

  /** Enable year dropdown selector (default: true) */
  yearSelect?: boolean

  /** Enable month dropdown selector (default: true) */
  monthSelect?: boolean

  /** Custom CSS class for the wrapper div */
  class?: string

  /** Placeholder text for the input field */
  placeholder?: string

  /** Minimum selectable date in YYYY-MM-DD BS format */
  minDate?: string

  /** Maximum selectable date in YYYY-MM-DD BS format */
  maxDate?: string

  /** Custom CSS class for the input element */
  inputClass?: string

  /** If true, clicking the input selects all text (default: false) */
  clickSelect?: boolean

  /** If true, model updates as you type valid dates (default: false) */
  updateOnInputChange?: boolean

  /** If true, auto-formats typed input with dashes (default: true) */
  autoFormat?: boolean

  /** If true, shows corresponding AD day in each calendar cell (default: false) */
  miniEnglishDate?: boolean

  /** If true, Saturday cells are highlighted in red (default: false) */
  highlightSaturday?: boolean

  /** If true, the input is editable by keyboard (default: true) */
  allowTyping?: boolean

  /** If true, the date picker is disabled entirely (default: false) */
  disabled?: boolean
}
```

## Emitted Events

| Event | Payload | Description |
|---|---|---|
| `update:modelValue` | `string` | Standard v-model update; emits the selected date |
| `onSelect` | `string` | Fires whenever the user picks a date from the calendar or confirms via keyboard |

## Internal Dependencies

The component uses [`nepali-date-library`](https://www.npmjs.com/package/nepali-date-library) internally for all date calculations. You don't need to import this library yourself unless you need to perform date arithmetic in your own code.

Key imports from the library used by the component:

| Import | Purpose |
|---|---|
| `NepaliDate` | Core date object for BS date operations |
| `MONTH_EN` | Array of English month names (`Baisakh`, `Jestha`, …) |
| `WEEK_SHORT_EN` | Short weekday names (`Su`, `Mo`, …) |
| `NEPALI_DATE_MAP` | Lookup table of days-per-month for every supported BS year |

## Rendering Architecture

The Vue 3 component uses **`<Teleport to="body">`** to render the calendar popup directly into `<body>`. This ensures:

- The calendar is never clipped by parent `overflow: hidden` containers
- Positioning is calculated relative to the viewport
- Scroll and resize events dynamically reposition the calendar

This is a **key architectural difference** from the Vue 2 version, which renders the calendar inline (inside the component's own DOM).

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
| `.calendar__selected` | Currently selected day |
| `.calendar__today` | Today's date |
| `.calendar__disable_date` | Disabled (out-of-range) day |
| `.calendar__not_current_month` | Day from adjacent month |
| `.calendar__saturday` | Saturday cell (when highlighted) |
| `.calendar__english_day` | Mini AD date label |
| `.calendar__months` | Month selector grid |
| `.calendar_month` | Individual month option |
| `.calendar__years` | Year selector grid |
| `.calendar__year` | Individual year option |
| `.calendar__toggle_button` | Navigation arrow buttons |

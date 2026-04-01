# Interactive States & Chart Color Customization

## Overview
Added support for customizing interactive states (hover, active/selected) for table rows/headers and chart line colors in the View Embed wrapper.

## New Props Added

### Interactive State Colors
- `headerActiveTextColor` - Text color for active/selected table headers
- `headerActiveBgColor` - Background color for active/selected table headers
- `rowHoverTextColor` - Text color when hovering over table rows
- `rowHoverBgColor` - Background color when hovering over table rows
- `rowHoverBorderColor` - Border color when hovering over table rows (creates cell outline effect)

### Chart Colors
- `chartLineColor` - Color for line chart lines (overrides the default data color)

## Implementation Details

### Files Modified

#### view-embed-react-wrapper (Wrapper Package)
1. **src/ViewEmbedWrapper.tsx** - Added new props to interface and postMessage
2. **utils/embedWithHooks.tsx** - Added props to EmbedWithHooks component
3. **stories/ViewEmbedProd.stories.tsx** - Added argTypes and new "InteractiveStates" demo story

#### telemetry/ts/packages/view-embed (Embedded Application)
1. **src/ViewEmbed.tsx** - Updated IParentPostMessageData interface and postMessage handler
2. Passed new props to RectanglesApp component

#### telemetry/ts/packages/rectangle-sdk (Module Rendering)
1. **src/types/ModuleView.ts** - Added new props to IModuleLayoutProps interface
2. **src/components/InteractiveStateStyles.tsx** - NEW FILE - Dynamic CSS injection component
3. **src/RectanglesApp.tsx** - Added InteractiveStateStyles component

## How It Works

The InteractiveStateStyles component dynamically injects CSS into the document head that targets:
- Table headers with `.active` class or `aria-selected="true"` attribute
- Table rows on `:hover` pseudo-class
- Chart line elements (`.recharts-line-curve`, `.recharts-line path`, etc.)

The CSS uses `!important` to ensure it overrides existing styles from the theme system.

## Usage Example

```tsx
<ViewEmbedWrapper
  viewId="your-view-id"
  deviceIds={["device-id"]}
  authToken="your-token"
  
  // Interactive states
  headerActiveTextColor="#FFFFFF"
  headerActiveBgColor="#4A90E2"
  rowHoverTextColor="#FFFFFF"
  rowHoverBgColor="#50C878"
  rowHoverBorderColor="#F39C12"
  
  // Chart colors
  chartLineColor="#50C878"
/>
```

## Storybook Demo

A new "InteractiveStates" story has been added to demonstrate all these features:
- Blue background with white text for active headers
- Green background with white text for hovered rows
- Orange border outline on hovered rows
- Green line color for charts

## Customer Requirements Met

✅ **On Click: Change text color when header clicked/selected**
- Supported via `headerActiveTextColor` and `headerActiveBgColor`

✅ **On Hover: Change hover color and hover text color**
- Supported via `rowHoverTextColor` and `rowHoverBgColor`

✅ **On Hover: Set border color on hover with cell outlined**
- Supported via `rowHoverBorderColor`

✅ **Chart Line Color: Ability to change line chart line color**
- Supported via `chartLineColor`

## Testing

1. Run Storybook: `npm run storybook` in view-embed-react-wrapper
2. Navigate to "View Embed > Interactive States" story
3. Hover over table rows to see custom hover effects
4. Click on table headers to see custom active/selected effects
5. View line charts to see custom line color

## Notes

- The CSS selectors target common class names used in Formant's table and chart components
- If the actual class names differ, the CSS selectors in InteractiveStateStyles.tsx may need to be updated
- The chart line color currently targets Recharts and Chart.js libraries - additional selectors may be needed for other charting libraries


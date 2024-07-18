# Formant View Embed React Wrapper

## Installation

**NPM**: `npm install @formant/view-embed-react-wrapper`

**Yarn**: `yarn add @formant/view-embed-react-wrapper`

## Props

| Prop Name              | Type                     | Required | Description                                                                        |
| ---------------------- | ------------------------ | -------- | ---------------------------------------------------------------------------------- |
| `viewId`               | `string`                 | Yes      | The ID of the view to be displayed.                                                |
| `deviceId`             | `string`                 | Yes      | The ID of the device associated with the view.                                     |
| `authToken`            | `string`                 | Yes      | The authentication token required to access the data source.                       |
| `dataSrcUrl`           | `string`                 | No       | The URL of the data source.                                                        |
| `tags`                 | `string[]`               | No       | An array of tags to be used with the view.                                         |
| `startDate`            | `Date`                   | No       | The start date for the data to be displayed.                                       |
| `endDate`              | `Date`                   | No       | The end date for the data to be displayed.                                         |
| `themeOverride`        | `Record<string, string>` | No       | An object containing theme overrides, allowing customization of colors and styles. |
| `wrapperStyleOverride` | `Record<string, any>`    | No       | An object containing style overrides for the wrapper element.                      |
| `containerHeight`      | `string`                 | No       | The height of the wrapper container.                                               |
| `containerWidth`       | `string`                 | No       | The width of the wrapper container.                                                |

### Available `themeOverride` options

We currently only support color overrides using the noted object keys below:

```js
{
  "formant-color-primary-white": "",
  "formant-color-primary-silver": "",
  "formant-color-primary-black": "",
  "formant-color-primary-dark": "",
  "formant-color-primary-flagship": "",
  "formant-color-background": "",
  "formant-color-primary-module": "",
  "formant-color-primary-steel01": "",
  "formant-color-primary-steel02": "",
  "formant-color-primary-steel03": "",
  "formant-color-highlights-blue": "",
  "formant-color-data-royal-blue": "",
  "formant-color-data-purple": "",
  "formant-color-data-red": "",
  "formant-color-data-orange": "",
  "formant-color-data-yellow": "",
  "formant-color-data-green": "",
};
```

## Example Usage

```jsx
import React from "react";
import { ViewEmbedWrapper } from "@formant/view-embed-react-wrapper";

const App = () => {
  return (
    <ViewEmbedWrapper
      viewId="your-view-id"
      deviceId="your-device-id"
      authToken="your-auth-token"
      dataSrcUrl="http://your-data-source-url"
      tags={["tag1", "tag2"]}
      startDate={new Date("2023-01-01")}
      endDate={new Date("2023-12-31")}
      themeOverride={{
        "formant-color-primary-white": "#000000",
        "formant-color-primary-silver": "#1F1F1F",
      }}
      wrapperStyleOverride={{ border: "1px solid #ccc" }}
      containerHeight="600px"
      containerWidth="1200px"
    />
  );
};

export default App;
```

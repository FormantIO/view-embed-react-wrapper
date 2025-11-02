import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ViewEmbedWrapper } from "../src/ViewEmbedWrapper";
import {
  AGGREGATION_OPTIONS,
  EmbedWithHooks,
  TIME_RANGE_OPTIONS,
} from "../utils/embedWithHooks";

const DEVICE_OPTIONS = [
  {
    value: "9fccbfd0-67e8-47c9-be7a-10105a737050",
    label: "View Embed Example",
  },
];

const API_URL_OPTIONS = [
  "https://api.formant.io",
  "https://api-stage.formant.io",
  "https://api-dev.formant.io",
];

const DATA_SRC_URL_OPTIONS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://embed.formant.io",
  "https://embed-stage.formant.io",
  "https://embed-dev.formant.io",
];

const meta = {
  title: "View Embed",
  component: ViewEmbedWrapper,
  argTypes: {
    themeOverride: {
      control: false,
      table: { disable: true },
    },
    wrapperStyleOverride: {
      control: false,
      table: { disable: true },
    },
    hasAuthToken: {
      control: "boolean",
      name: "hasAuthToken [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    serviceAccountEmail: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "serviceAccountEmail [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    serviceAccountPassword: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "serviceAccountPassword [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    apiBaseUrl: {
      control: "select",
      if: { arg: "hasAuthToken", truthy: false },
      name: "apiBaseUrl [Internal Only]",
      options: API_URL_OPTIONS,
      table: { category: "01. Authentication" },
    },
    authScope: {
      control: "object",
      if: { arg: "hasAuthToken", truthy: false },
      name: "authScope [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    roleId: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "roleId [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    authToken: {
      table: { disable: true },
    },
    providedAuthToken: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: true },
      name: "providedAuthToken [Storybook Only]",
      table: { category: "01. Authentication" },
    },
    viewId: {
      control: "text",
      description: "The Formant view ID to embed",
      table: { category: "02. View Configuration" },
    },
    viewTags: {
      control: "object",
      name: "viewTags",
      description: "Filter devices by tags",
      table: { category: "02. View Configuration" },
    },
    deviceIds: {
      control: "object",
      description: "Array of device IDs to display",
      table: { category: "02. View Configuration" },
    },
    moduleId: {
      control: "text",
      description: "Specific module ID to display (optional)",
      table: { category: "02. View Configuration" },
    },
    hideTimeline: {
      control: "boolean",
      description: "Hide the timeline scrubber",
      table: { category: "02. View Configuration" },
    },
    currentDate: {
      control: "date",
      description: "Current date for time-based data",
      table: { category: "03. Time Configuration" },
    },
    timeRange: {
      options: TIME_RANGE_OPTIONS,
      control: "select",
      description: "Time range for live data",
      table: { category: "03. Time Configuration" },
    },
    aggregation: {
      options: AGGREGATION_OPTIONS,
      control: "select",
      description: "Data aggregation period",
      table: { category: "03. Time Configuration" },
    },
    aggregateStartDate: {
      control: "date",
      description: "Start date for aggregated data",
      table: { category: "03. Time Configuration" },
    },
    aggregateEndDate: {
      control: "date",
      description: "End date for aggregated data",
      table: { category: "03. Time Configuration" },
    },
    fontFamily: {
      control: "text",
      description: "Custom font family name",
      table: { category: "04. Theme - Typography" },
    },
    fontFamilyUrl: {
      control: "text",
      description: "URL to load custom font (Google Fonts, etc)",
      table: { category: "04. Theme - Typography" },
    },
    fontSize: {
      control: "select",
      options: ["12px", "14px", "16px", "18px", "20px", "24px"],
      description: "Base font size",
      table: { category: "04. Theme - Typography" },
    },
    fontWeight: {
      control: "select",
      options: ["300", "400", "500", "600", "700"],
      description: "Font weight",
      table: { category: "04. Theme - Typography" },
    },
    lineHeight: {
      control: "select",
      options: ["1.2", "1.4", "1.6", "1.8", "2.0"],
      description: "Line height multiplier",
      table: { category: "04. Theme - Typography" },
    },
    primaryColor: {
      control: "color",
      description: "Primary background color",
      table: { category: "05. Theme - Colors" },
    },
    secondaryColor: {
      control: "color",
      description: "Secondary/accent color",
      table: { category: "05. Theme - Colors" },
    },
    textColor: {
      control: "color",
      description: "Main text color",
      table: { category: "05. Theme - Colors" },
    },
    customSpacing: {
      control: "select",
      options: [
        "0.25rem",
        "0.5rem",
        "0.75rem",
        "1rem",
        "1.25rem",
        "1.5rem",
        "2rem",
      ],
      description: "Custom spacing unit",
      table: { category: "06. Theme - Spacing" },
    },
    customBorderRadius: {
      control: "text",
      description: "Custom border radius (e.g., 8px, 1rem)",
      table: { category: "07. Theme - Borders" },
    },
    customShadow: {
      control: "text",
      description: "Custom box shadow CSS value",
      table: { category: "08. Theme - Shadows" },
    },
    borderRadius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "full"],
      description: "Module border radius preset",
      table: { category: "09. Layout Presets" },
    },
    moduleSpacing: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Spacing between modules",
      table: { category: "09. Layout Presets" },
    },
    modulePadding: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Padding inside modules",
      table: { category: "09. Layout Presets" },
    },
    shadowSize: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl", "2xl"],
      description: "Module box shadow preset",
      table: { category: "09. Layout Presets" },
    },
    containerMaxWidth: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
      description: "Maximum width of the container",
      table: { category: "09. Layout Presets" },
    },
    gridColumns: {
      control: { type: "number", min: 12, max: 48, step: 6 },
      description: "Number of grid columns (default: 36)",
      table: { category: "09. Layout Presets" },
    },
    gridRowHeight: {
      control: { type: "number", min: 25, max: 200, step: 25 },
      description: "Height of each grid row in pixels (default: 75px)",
      table: { category: "09. Layout Presets" },
    },
    customLoadingComponent: {
      control: false,
      description:
        "Custom React component to display while the iframe is loading",
      table: { category: "13. Loading" },
    },
    customLoadingIconUrl: {
      control: "text",
      description:
        "URL to a custom loading icon/GIF to replace the Formant triangle inside the view modules",
      table: { category: "13. Loading" },
    },
    enableAnimations: {
      control: "boolean",
      description: "Enable CSS animations",
      table: { category: "10. Animations" },
    },
    enableTransitions: {
      control: "boolean",
      description: "Enable CSS transitions",
      table: { category: "10. Animations" },
    },
    reducedMotion: {
      control: "boolean",
      description: "Reduce motion for accessibility",
      table: { category: "10. Animations" },
    },
    wrapperBorder: {
      control: "text",
      description: "CSS border for iframe wrapper (e.g., 1px solid #ccc)",
      table: { category: "11. Wrapper Styles" },
    },
    wrapperPadding: {
      control: "text",
      description: "CSS padding for iframe wrapper",
      table: { category: "11. Wrapper Styles" },
    },
    wrapperBackground: {
      control: "color",
      description: "Background color for iframe wrapper",
      table: { category: "11. Wrapper Styles" },
    },
    dataSrcUrl: {
      control: "select",
      name: "dataSrcUrl [Internal Only]",
      options: DATA_SRC_URL_OPTIONS,
      table: { category: "12. Internal" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ViewEmbedWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseDemo: Story = {
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    authScope: { tags: {} },
    roleId: "",
    apiBaseUrl: "https://api-stage.formant.io",
    authToken: "",
    dataSrcUrl: "http://localhost:5173",
    viewId: "",
    viewTags: {},
    deviceIds: [],
    moduleId: "",
    hideTimeline: false,
    currentDate: new Date(),
    timeRange: "30 minute",
    aggregation: "1d",
    aggregateStartDate: new Date(Date.now() - 86400000),
    aggregateEndDate: new Date(),
    fontFamily: "",
    fontFamilyUrl: "",
    fontSize: undefined,
    fontWeight: undefined,
    lineHeight: undefined,
    primaryColor: undefined,
    secondaryColor: undefined,
    textColor: undefined,
    customSpacing: undefined,
    customBorderRadius: undefined,
    customShadow: undefined,
    borderRadius: "md",
    moduleSpacing: "md",
    modulePadding: "md",
    shadowSize: "md",
    containerMaxWidth: "full",
    enableAnimations: true,
    enableTransitions: true,
    reducedMotion: false,
    wrapperBorder: undefined,
    wrapperPadding: undefined,
    wrapperBackground: undefined,
  } as any,
  render: (args) => {
    // Manually parse URL parameters for arrays (Storybook doesn't do this automatically with control: "object")
    const urlParams = new URLSearchParams(window.location.search);
    const argsParam = urlParams.get("args");

    if (argsParam && (args.deviceIds ? args.deviceIds.length === 0 : true)) {
      // Parse deviceIds from URL like "deviceIds[0]:value;deviceIds[1]:value2"
      const deviceIdsFromUrl: string[] = [];
      const deviceIdMatches = argsParam.matchAll(/deviceIds\[(\d+)\]:([^;]+)/g);
      for (const match of deviceIdMatches) {
        const index = parseInt(match[1]);
        const value = match[2];
        deviceIdsFromUrl[index] = value;
      }
      if (deviceIdsFromUrl.length > 0) {
        args.deviceIds = deviceIdsFromUrl;
      }
    }

    console.log("[Storybook Args Debug]", {
      deviceIds: args.deviceIds,
      viewId: args.viewId,
      hasAuthToken: args.hasAuthToken,
      hasToken: !!(args as any).providedAuthToken || !!(args as any).authToken,
    });

    const argsWithCustom = args as typeof args & {
      fontFamily?: string;
      fontFamilyUrl?: string;
      fontSize?: string;
      fontWeight?: string;
      lineHeight?: string;
      primaryColor?: string;
      secondaryColor?: string;
      textColor?: string;
      customSpacing?: string;
      customBorderRadius?: string;
      customShadow?: string;
      wrapperBorder?: string;
      wrapperPadding?: string;
      wrapperBackground?: string;
      gridColumns?: number;
      gridRowHeight?: number;
    };

    // If a complete themeOverride object is provided, use it directly
    let themeOverride: any = argsWithCustom.themeOverride || {};

    // Otherwise, build themeOverride from individual props
    if (!argsWithCustom.themeOverride) {
      if (argsWithCustom.fontFamily) {
        themeOverride.fontFamily = argsWithCustom.fontFamily;
      }
      if (argsWithCustom.fontFamilyUrl) {
        themeOverride.fontFamilyUrl = argsWithCustom.fontFamilyUrl;
      }

      const colors: Record<string, string> = {};
      if (argsWithCustom.primaryColor) {
        colors["formant-color-primary-white"] = argsWithCustom.primaryColor;
      }
      if (argsWithCustom.secondaryColor) {
        colors["formant-color-primary-silver"] = argsWithCustom.secondaryColor;
      }
      if (argsWithCustom.textColor) {
        colors["formant-color-text-primary"] = argsWithCustom.textColor;
      }
      if (Object.keys(colors).length > 0) {
        themeOverride.colors = colors;
      }

      const typography: Record<string, string> = {};
      if (argsWithCustom.fontSize) {
        typography["font-size-base"] = argsWithCustom.fontSize;
      }
      if (argsWithCustom.fontWeight) {
        typography["font-weight-semibold"] = argsWithCustom.fontWeight;
      }
      if (argsWithCustom.lineHeight) {
        typography["line-height-base"] = argsWithCustom.lineHeight;
      }
      if (Object.keys(typography).length > 0) {
        themeOverride.typography = typography;
      }
    }

    const spacing: Record<string, string> = {};
    if (argsWithCustom.customSpacing) {
      spacing["spacing-md"] = argsWithCustom.customSpacing;
    }
    if (Object.keys(spacing).length > 0) {
      themeOverride.spacing = spacing;
    }

    const borders: Record<string, string> = {};
    if (argsWithCustom.customBorderRadius) {
      borders["border-radius-lg"] = argsWithCustom.customBorderRadius;
    }
    if (Object.keys(borders).length > 0) {
      themeOverride.borders = borders;
    }

    const shadows: Record<string, string> = {};
    if (argsWithCustom.customShadow) {
      shadows["box-shadow-lg"] = argsWithCustom.customShadow;
    }
    if (Object.keys(shadows).length > 0) {
      themeOverride.shadows = shadows;
    }

    const wrapperStyleOverride: React.CSSProperties = {};
    if (argsWithCustom.wrapperBorder) {
      wrapperStyleOverride.border = argsWithCustom.wrapperBorder;
    }
    if (argsWithCustom.wrapperPadding) {
      wrapperStyleOverride.padding = argsWithCustom.wrapperPadding;
    }
    if (argsWithCustom.wrapperBackground) {
      wrapperStyleOverride.background = argsWithCustom.wrapperBackground;
    }

    return (
      <EmbedWithHooks
        deviceIds={args.deviceIds}
        moduleId={args.moduleId}
        hideTimeline={args.hideTimeline}
        viewId={args.viewId}
        themeOverride={
          Object.keys(themeOverride).length > 0 ? themeOverride : undefined
        }
        providedAuthToken={args.providedAuthToken || args.authToken}
        timeRange={args.timeRange}
        currentDate={args.currentDate}
        dataSrcUrl={args.dataSrcUrl}
        hasAuthToken={args.hasAuthToken}
        serviceAccountEmail={args.serviceAccountEmail}
        serviceAccountPassword={args.serviceAccountPassword}
        apiBaseUrl={args.apiBaseUrl}
        authScope={args.authScope}
        roleId={args.roleId}
        viewTags={args.viewTags}
        wrapperStyleOverride={
          Object.keys(wrapperStyleOverride).length > 0
            ? wrapperStyleOverride
            : undefined
        }
        aggregation={args.aggregation}
        aggregateStartDate={args.aggregateStartDate}
        aggregateEndDate={args.aggregateEndDate}
        borderRadius={args.borderRadius}
        moduleSpacing={args.moduleSpacing}
        modulePadding={args.modulePadding}
        shadowSize={args.shadowSize}
        containerMaxWidth={args.containerMaxWidth}
        enableAnimations={args.enableAnimations}
        enableTransitions={args.enableTransitions}
        reducedMotion={args.reducedMotion}
        fontFamily={argsWithCustom.fontFamily}
        fontSize={argsWithCustom.fontSize}
        fontWeight={argsWithCustom.fontWeight}
        lineHeight={argsWithCustom.lineHeight}
        gridColumns={argsWithCustom.gridColumns}
        gridRowHeight={argsWithCustom.gridRowHeight}
        customLoadingComponent={args.customLoadingComponent}
        customLoadingIconUrl={args.customLoadingIconUrl}
      />
    );
  },
};

// NOTE: The following stories include hardcoded authentication tokens, viewId, and deviceIds
// for testing and demonstration purposes only. In production, these should be provided
// dynamically through the component props or Storybook controls.
export const LargeRoundedModules: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5174",
    apiBaseUrl: "https://api.formant.io",
    borderRadius: "xl",
    moduleSpacing: "lg",
    modulePadding: "lg",
    shadowSize: "2xl",
  } as any,
};

export const CompactLayout: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5174",
    apiBaseUrl: "https://api.formant.io",
    borderRadius: "sm",
    moduleSpacing: "sm",
    modulePadding: "sm",
    shadowSize: "sm",
    containerMaxWidth: "lg",
  } as any,
};

// === 04. Theme - Typography Demo ===
export const ThemeTypography: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    fontFamily: "Roboto Mono",
    fontFamilyUrl:
      "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "2.0",
  } as any,
};

// === 05. Theme - Colors Demo ===
export const ThemeColors: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    themeOverride: {
      colors: {
        // Data colors for charts (using both legacy and new color systems)
        "color-data-1": "#50C878", // Green for primary data series
        "color-data-2": "#4A90E2", // Blue
        "color-data-3": "#F39C12", // Orange
        "color-data-4": "#E74C3C", // Red
        "formant-color-data-royalBlue": "#50C878", // Legacy: Override royal blue with green
        "formant-color-highlights-royalBlue": "#50C878", // Legacy: Override royal blue highlight

        // Module colors
        "formant-color-primary-white": "#4A90E2", // Module background
        "formant-color-primary-silver": "#50C878", // Secondary
        "color-text-primary": "#2C3E50", // Text color
      },
    },
  } as any,
};

// === 06. Theme - Custom Spacing Demo ===
export const ThemeCustomSpacing: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    customSpacing: "2.5rem",
  } as any,
};

// === 07. Theme - Border Radius Demo ===
export const ThemeBorderRadius: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    customBorderRadius: "24px",
  } as any,
};

// === 08. Theme - Shadow Demo ===
export const ThemeShadow: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    customShadow:
      "0 20px 40px rgba(255, 0, 128, 0.3), 0 10px 20px rgba(0, 128, 255, 0.2)",
  } as any,
};

export const TargetView: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5174",
    apiBaseUrl: "https://api.formant.io",
  } as any,
};

export const CustomLoadingDemo: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",
    customLoadingIconUrl:
      "https://loading.io/assets/mod/spinner/bean-eater/lg.gif",
    customLoadingComponent: (
      <div style={{ textAlign: "center" }}>
        <img
          src="https://loading.io/assets/mod/spinner/bean-eater/lg.gif"
          alt="Loading..."
          style={{ width: "100px", height: "100px" }}
        />
        <div style={{ marginTop: "20px", fontSize: "16px", color: "#666" }}>
          Loading wrapper...
        </div>
      </div>
    ),
  } as any,
};

// === APPLE DESIGN: If Apple Built a Formant View ===
// Minimalist, elegant design inspired by Apple's design language
// Features SF Pro typography, subtle shadows, refined spacing, and Apple's signature colors
export const AppleDesign: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844", // View with actual data
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",

    // === Typography: SF Pro (Apple's signature font) ===
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
    fontFamilyUrl: "",
    fontSize: "17px",
    fontWeight: "400",
    lineHeight: "1.47059",

    // === Theme Override: Comprehensive light theme with OFFICIAL Apple brand colors ===
    // Reference: https://www.canny-creative.com/brand-breakdown/brand/apple/
    themeOverride: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
      fontFamilyUrl: "",
      colors: {
        // Background Colors - Apple's official brand palette
        "color-background-primary": "#FFFFFF", // Apple White
        "color-background-secondary": "#F5F5F7", // Apple Light Gray
        "color-background-tertiary": "#F5F5F7", // Apple Light Gray
        "color-background-surface": "#FFFFFF", // Apple White
        "color-background-active": "#8E8E93", // Apple Medium Gray
        "color-background-active2": "#1D1D1F", // Apple Dark Gray

        // Border Colors - Subtle Apple grays
        "color-border-primary": "#F5F5F7", // Apple Light Gray
        "color-border-active": "#8E8E93", // Apple Medium Gray
        "color-border-secondary": "#F5F5F7", // Apple Light Gray
        "color-border-tertiary": "#F5F5F7", // Apple Light Gray
        "color-border-current": "#0066CC", // Apple Blue

        // Text Colors - Apple's official text hierarchy
        "color-text-primary": "#1D1D1F", // Apple Dark Gray (primary text)
        "color-text-secondary": "#1D1D1F", // Apple Dark Gray
        "color-text-tertiary": "#8E8E93", // Apple Medium Gray
        "color-text-muted": "#8E8E93", // Apple Medium Gray
        "color-text-inverse": "#FFFFFF", // Apple White

        // Action Colors - Apple's signature blue
        "color-action-primary": "#0066CC", // Apple Blue
        "color-action-secondary": "#0066CC", // Apple Blue
        "color-action-tertiary": "#0066CC", // Apple Blue
        "color-action-quaternary": "#0066CC", // Apple Blue

        // Severity Colors - Adapted from iOS system colors
        "color-severity-open": "#34C759", // iOS Green
        "color-severity-info": "#0066CC", // Apple Blue
        "color-severity-warning": "#FF9500", // iOS Orange
        "color-severity-error": "#FF3B30", // iOS Red
        "color-severity-critical": "#FF3B30", // iOS Red

        // Module-Specific Colors
        "color-background-header-module": "#F5F5F7", // Apple Light Gray
        "color-background-header-module-active": "#8E8E93", // Apple Medium Gray
        "color-background-header-table": "#FFFFFF", // Apple White
        "color-text-header-module": "#1D1D1F", // Apple Dark Gray
        "color-text-header-table": "#1D1D1F", // Apple Dark Gray

        // Data/Chart Colors - iOS Green for primary data visualization
        "color-data-1": "#34C759", // iOS Green (matches severity-open)
        "color-data-2": "#0066CC", // Apple Blue
        "color-data-3": "#FF9500", // iOS Orange
        "color-data-4": "#FF3B30", // iOS Red
        "color-data-5": "#AF52DE", // iOS Purple
        "color-data-6": "#5AC8FA", // iOS Teal
        "color-data-7": "#FFCC00", // iOS Yellow
        "color-data-8": "#FF2D55", // iOS Pink
      },
    },

    // === Spacing: Apple's generous whitespace ===
    customSpacing: "1.5rem",

    // === Borders: Apple's signature rounded corners ===
    customBorderRadius: "18px",

    // === Shadows: Subtle, refined elevation ===
    customShadow: "0 2px 16px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.1)",

    // === Layout ===
    borderRadius: "xl",
    moduleSpacing: "lg",
    modulePadding: "lg",
    shadowSize: "md",
    containerMaxWidth: "xl",
    gridColumns: 48,
    gridRowHeight: 50,

    // === Animations: Smooth, refined motion ===
    enableAnimations: true,
    enableTransitions: true,
    reducedMotion: false,

    // === Wrapper Styling: Clean, minimal chrome ===
    wrapperBorder: "1px solid rgba(0, 0, 0, 0.1)",
    wrapperPadding: "32px",
    wrapperBackground: "#FFFFFF",

    // === Loading: Apple-style loading indicator ===
    customLoadingComponent: (
      <div
        style={{
          textAlign: "center",
          padding: "80px 40px",
          background: "#FFFFFF",
          borderRadius: "18px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            margin: "0 auto",
            border: "3px solid rgba(0, 0, 0, 0.1)",
            borderTopColor: "#000000",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <div
          style={{
            marginTop: "24px",
            fontSize: "17px",
            fontWeight: "400",
            color: "#1d1d1f",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
            letterSpacing: "-0.022em",
          }}
        >
          Loading...
        </div>
        <style>
          {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    ),
  } as any,
};

// === KITCHEN SINK: Everything Modified Demo ===
// This demo shows what happens when you modify EVERY available option,
// resulting in a view that looks nothing like a traditional Formant view.
export const KitchenSink: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    hasAuthToken: true,
    providedAuthToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTc2MjEyODQ5NSwiaWF0IjoxNzYyMDQyMDk1LCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJzZXJ2aWNlLWFjY291bnQiLCJvcmdhbml6YXRpb25JZCI6IjBkMjlmNjU2LWNjMWMtNGI5ZS1iYWFkLTE5OWNmYTFmY2NlZCIsInVzZXJJZCI6IjJkYjY0YjhlLTFlNDAtNDZkNS1hYmNmLTU0OGEzNTFjNGM3NyJ9fQ.aVdRyOoCN6av7vtnel3Ga_eADBDxK9WgHwSOViiiyXo",
    viewId: "a0743181-1e11-4033-9258-0da248bd4844",
    deviceIds: ["58d7f6e1-899d-4a8a-8c02-4c805cc8227f"],
    dataSrcUrl: "http://localhost:5173",
    apiBaseUrl: "https://api.formant.io",

    // === 01. Authentication ===
    // (already set above)

    // === 02. View Configuration ===
    timeRange: "6 hours",
    aggregation: "30s",
    environment: "production",

    // === 03. Layout ===
    gridColumns: 64,
    gridRowHeight: 40,
    borderRadius: "none",
    moduleSpacing: "xl",
    modulePadding: "xl",
    shadowSize: "none",
    containerMaxWidth: "full",

    // === 04. Theme - Typography ===
    fontFamily: "Courier New",
    fontFamilyUrl: "", // System font
    fontSize: "22px",
    fontWeight: "900",
    lineHeight: "2.5",

    // === 05. Theme - Colors ===
    primaryColor: "#FF1493", // Deep pink
    secondaryColor: "#00FF7F", // Spring green
    textColor: "#FFD700", // Gold

    // === 06. Theme - Custom Spacing ===
    customSpacing: "3rem",

    // === 07. Theme - Border Radius ===
    customBorderRadius: "0px", // Sharp corners everywhere

    // === 08. Theme - Shadow ===
    customShadow:
      "0 0 30px rgba(255, 20, 147, 0.8), 0 0 60px rgba(0, 255, 127, 0.6)",

    // === 09. Behavior ===
    enableAnimations: false,
    enableTransitions: false,
    reducedMotion: true,

    // === 10. Advanced Theme Override ===
    themeOverride: {
      colors: {
        "formant-color-primary-white": "#000000",
        "formant-color-primary-silver": "#1a1a1a",
        "formant-color-primary-black": "#FFFFFF",
        "formant-color-primary-grey": "#FF00FF",
        "formant-color-primary-dark-grey": "#00FFFF",
        "formant-color-background": "#2D0A4E",
        "formant-color-background-light": "#4A1572",
      },
      typography: {
        "formant-font-size-xs": "10px",
        "formant-font-size-sm": "14px",
        "formant-font-size-md": "20px",
        "formant-font-size-lg": "28px",
        "formant-font-size-xl": "36px",
      },
    },

    // === 11. Wrapper Styling ===
    wrapperBorder: "5px dashed #FF1493",
    wrapperPadding: "40px",
    wrapperBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

    // === 12. Internal ===
    singleModuleMode: false,
    hideHeader: false,
    disableInteractions: false,

    // === 13. Loading ===
    customLoadingIconUrl:
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif",
    customLoadingComponent: (
      <div
        style={{
          textAlign: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "20px",
          border: "5px dashed #FF1493",
        }}
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif"
          alt="Loading..."
          style={{ width: "150px", height: "150px" }}
        />
        <div
          style={{
            marginTop: "30px",
            fontSize: "28px",
            fontWeight: "900",
            color: "#FFD700",
            fontFamily: "Courier New",
            textShadow: "0 0 10px rgba(255, 215, 0, 0.8)",
          }}
        >
          🚀 LOADING EVERYTHING... 🚀
        </div>
      </div>
    ),
  } as any,
};

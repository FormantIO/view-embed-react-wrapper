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
  "https://embed.formant.io",
  "https://embed-stage.formant.io",
  "https://embed-dev.formant.io",
];

const meta = {
  title: "View Embed",
  component: ViewEmbedWrapper,
  argTypes: {
    hasAuthToken: {
      control: "boolean",
      name: "hasAuthToken [Storybook Only]",
    },
    serviceAccountEmail: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "serviceAccountEmail [Storybook Only]",
    },
    serviceAccountPassword: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "serviceAccountPassword [Storybook Only]",
    },
    apiBaseUrl: {
      control: "select",
      if: { arg: "hasAuthToken", truthy: false },
      name: "apiBaseUrl [Internal Only]",
      options: API_URL_OPTIONS,
    },
    authScope: {
      control: "object",
      if: { arg: "hasAuthToken", truthy: false },
      name: "authScope [Storybook Only]",
    },
    roleId: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "roleId [Storybook Only]",
    },
    authToken: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: true },
      name: "authToken [Storybook Only]",
    },
    viewId: {
      control: "text",
    },
    viewTags: {
      control: "object",
      name: "viewTags",
    },
    deviceIds: {
      control: "object",
    },
    currentDate: {
      control: "date",
    },
    timeRange: {
      options: TIME_RANGE_OPTIONS,
      control: "select",
    },
    aggregation: {
      options: AGGREGATION_OPTIONS,
      control: "select",
    },
    aggregateStartDate: {
      control: "date",
    },
    aggregateEndDate: {
      control: "date",
    },
    themeOverride: {
      control: "object",
    },
    wrapperStyleOverride: {
      control: "object",
    },
    borderWidth: {
      control: { type: "number", min: 0, max: 20, step: 1 },
      description: "Module border width in pixels",
      table: { category: "Theme - Sizes" },
    },
    shadowSize: {
      control: { type: "number", min: 0, max: 20, step: 1 },
      description: "Module box shadow size in pixels",
      table: { category: "Theme - Sizes" },
    },
    dataSrcUrl: {
      control: "select",
      name: "dataSrcUrl [Internal Only]",
      options: DATA_SRC_URL_OPTIONS,
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
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    dataSrcUrl: "https://embed.formant.io",
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
    borderWidth: 1,
    shadowSize: 1,
    themeOverride: {
      fontFamily: "Oswald",
      fontFamilyUrl:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",
      colors: {},
    },
  } as any,
  render: (args) => {
    const argsWithExtras = args as typeof args & {
      borderWidth?: number;
      shadowSize?: number;
    };
    const borderWidth = argsWithExtras.borderWidth ?? 1;
    const shadowSize = argsWithExtras.shadowSize ?? 1;

    const themeOverride = {
      ...(args.themeOverride || {}),

      sizes: {
        ...(args.themeOverride?.sizes || {}),
        "module-border-width": borderWidth,
        "module-box-shadow-size": shadowSize,
      },
    };

    return (
      <EmbedWithHooks
        deviceIds={args.deviceIds}
        moduleId={args.moduleId}
        hideTimeline={args.hideTimeline}
        viewId={args.viewId}
        themeOverride={themeOverride}
        providedAuthToken={args.authToken}
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
        wrapperStyleOverride={args.wrapperStyleOverride}
        aggregation={args.aggregation}
        aggregateStartDate={args.aggregateStartDate}
        aggregateEndDate={args.aggregateEndDate}
      />
    );
  },
};

export const ThickBorders: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    borderWidth: 8,
  } as any,
};

export const LargeShadows: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    shadowSize: 5,
  } as any,
};

export const NoBorders: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    borderWidth: 0,
  } as any,
};

export const CustomStyled: Story = {
  ...BaseDemo,
  args: {
    ...BaseDemo.args,
    borderWidth: 5,
    shadowSize: 3,
  } as any,
};

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
    roleName: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "roleName [Storybook Only]",
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
    dataSrcUrl: {
      control: "select",
      name: "dataSrcUrl [Internal Only]",
      options: DATA_SRC_URL_OPTIONS,
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ViewEmbedWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseDemo: Story = {
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    authScope: { tags: {} },
    roleName: "administrator",
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    dataSrcUrl: "https://embed.formant.io",
    viewId: "9140bb02-32fe-47ea-bc24-8f6178eff205",
    viewTags: {},
    deviceIds: [],
    currentDate: new Date(),
    timeRange: "30 minute",
    aggregation: "1d",
    aggregateStartDate: new Date(Date.now() - 86400000),
    aggregateEndDate: new Date(),
    themeOverride: {
      fontFamily: "Oswald",
      fontFamilyUrl:
        "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",
      colors: {},
    },
  },
  render: (args) => (
    <EmbedWithHooks
      deviceIds={args.deviceIds}
      viewId={args.viewId}
      themeOverride={args.themeOverride}
      providedAuthToken={args.authToken}
      timeRange={args.timeRange}
      currentDate={args.currentDate}
      dataSrcUrl={args.dataSrcUrl}
      hasAuthToken={args.hasAuthToken}
      serviceAccountEmail={args.serviceAccountEmail}
      serviceAccountPassword={args.serviceAccountPassword}
      apiBaseUrl={args.apiBaseUrl}
      authScope={args.authScope}
      roleName={args.roleName}
      viewTags={args.viewTags}
      wrapperStyleOverride={args.wrapperStyleOverride}
      aggregation={args.aggregation}
      aggregateStartDate={args.aggregateStartDate}
      aggregateEndDate={args.aggregateEndDate}
    />
  ),
};

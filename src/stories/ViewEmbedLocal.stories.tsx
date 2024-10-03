import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
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

const meta = {
  title: "View Embed [Local Development]",
  component: ViewEmbedWrapper,
  tags: ["!dev"],
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
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "apiBaseUrl [Storybook Only]",
    },
    authTagSets: {
      control: "object",
      if: { arg: "hasAuthToken", truthy: false },
      name: "tagSets [Storybook Only]",
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
      control: "text",
    },
    deviceId: {
      control: "text",
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
    fontFamilyUrl: {
      control: "text",
    },
    themeOverride: {
      control: "object",
    },
    wrapperStyleOverride: {
      control: "object",
    },
    dataSrcUrl: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ViewEmbedWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    authTagSets: {},
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    viewId: "9140bb02-32fe-47ea-bc24-8f6178eff205",
    viewTags: "",
    deviceId: DEVICE_OPTIONS[0].value,
    currentDate: new Date(),
    timeRange: "30 minute",
    aggregation: undefined,
    aggregateStartDate: undefined,
    aggregateEndDate: undefined,
    fontFamilyUrl:
      "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",
    themeOverride: {
      colors: {
        "formant-color-primary-white": "#000000",
        "formant-color-primary-silver": "#1F1F1F",
        "formant-color-primary-black": "#FFFFFF",
        "formant-color-primary-dark": "#E6E6E6",
        "formant-color-primary-flagship": "#E8E8E8",
        "formant-color-background": "#E8E8E8",
        "formant-color-primary-module": "#FFFFFF",
        "formant-color-primary-steel01": "#005897",
        "formant-color-primary-steel02": "#005897",
        "formant-color-primary-steel03": "#81cbff",
        "formant-color-highlights-blue": "#005897",
        "formant-color-data-royal-blue": "#005897",
        "formant-color-data-purple": "#E6E6FA",
        "formant-color-data-red": "#FF7F50",
        "formant-color-data-orange": "#FFDAB9",
        "formant-color-data-yellow": "#F9C36E",
        "formant-color-data-green": "#40E0D0",
      },
      fontFamily: "Oswald",
    },
  },
  render: (args) => (
    <EmbedWithHooks
      deviceId={args.deviceId}
      viewId={args.viewId}
      themeOverride={args.themeOverride}
      fontFamilyUrl={args.fontFamilyUrl}
      providedAuthToken={args.authToken}
      timeRange={args.timeRange}
      currentDate={args.currentDate}
      aggregateStartDate={args.aggregateStartDate}
      aggregateEndDate={args.aggregateEndDate}
      aggregation={args.aggregation}
      dataSrcUrl="https://embed.formant.io"
      hasAuthToken={args.hasAuthToken}
      serviceAccountEmail={args.serviceAccountEmail}
      serviceAccountPassword={args.serviceAccountPassword}
      apiBaseUrl={args.apiBaseUrl}
      authTagSets={args.authTagSets}
      viewTags={args.viewTags}
    />
  ),
};

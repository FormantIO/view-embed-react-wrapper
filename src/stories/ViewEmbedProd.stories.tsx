import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { EmbedWithHooks, TIME_RANGE_OPTIONS } from "../utils/embedWithHooks";
import { code } from "./ViewEmbedProd.source";

const DEVICE_OPTIONS = [
  { value: "9fccbfd0-67e8-47c9-be7a-10105a737050", label: "Holman View Embed" },
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
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
      name: "apiBaseUrl [Internal Only]",
    },
    authTagSets: {
      control: "object",
      if: { arg: "hasAuthToken", truthy: false },
      name: "authTagSets [Storybook Only]",
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
      name: "viewTags",
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
      name: "dataSrcUrl [Internal Only]",
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
    authTagSets: {},
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    dataSrcUrl: "https://embed.formant.io",
    viewId: "9140bb02-32fe-47ea-bc24-8f6178eff205",
    viewTags: "",
    deviceId: DEVICE_OPTIONS[0].value,
    timeRange: "30 minute",
    currentDate: new Date(),
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
      dataSrcUrl={args.dataSrcUrl}
      hasAuthToken={args.hasAuthToken}
      serviceAccountEmail={args.serviceAccountEmail}
      serviceAccountPassword={args.serviceAccountPassword}
      apiBaseUrl={args.apiBaseUrl}
      authTagSets={args.authTagSets}
      viewTags={args.viewTags}
      wrapperStyleOverride={args.wrapperStyleOverride}
    />
  ),
};

BaseDemo.parameters = {
  storySource: {
    source: code,
  },
};

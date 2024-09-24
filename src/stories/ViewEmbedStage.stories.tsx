import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { EmbedWithHooks, TIME_RANGE_OPTIONS } from "../utils/embedWithHooks";
import { code } from "./ViewEmbedLocal.source";

const DEVICE_OPTIONS = [
  {
    value: "60abc339-73fc-410a-9553-893bcf92c828",
    label: "server.testing.hanssel.3",
  },
];

const meta = {
  title: "View Embed [Staging]",
  component: ViewEmbedWrapper,
  argTypes: {
    hasAuthToken: {
      control: {
        type: "boolean",
      },
    },
    serviceAccountEmail: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
    },
    serviceAccountPassword: {
      control: "text",
      if: { arg: "hasAuthToken", truthy: false },
    },
    apiBaseUrl: { control: "text", if: { arg: "hasAuthToken", truthy: false } },
    authToken: {
      control: {
        type: "text",
      },
      if: { arg: "hasAuthToken", truthy: true },
    },
    viewId: {
      control: {
        type: "text",
      },
    },
    deviceId: {
      control: {
        type: "text",
      },
    },

    fontFamilyUrl: {
      control: {
        type: "text",
      },
    },
    tags: {
      control: {
        type: "text",
      },
    },
    currentDate: {
      control: {
        type: "date",
      },
    },
    dataSrcUrl: {
      control: {
        type: "text",
      },
    },
    timeRange: {
      options: TIME_RANGE_OPTIONS,
      control: {
        type: "select",
      },
    },
    themeOverride: {
      control: {
        type: "object",
      },
    },
    wrapperStyleOverride: {
      control: {
        type: "object",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: [],
} satisfies Meta<typeof ViewEmbedWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StageBaseDemo: Story = {
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    viewId: "3d18f36b-9e76-4f9c-aadf-bbbc6ba1634c",
    deviceId: DEVICE_OPTIONS[0].value,
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
    timeRange: "30 minute",
    currentDate: new Date(),
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
      dataSrcUrl="https://embed-stage.formant.io"
      hasAuthToken={args.hasAuthToken}
      serviceAccountEmail={args.serviceAccountEmail}
      serviceAccountPassword={args.serviceAccountPassword}
      apiBaseUrl={args.apiBaseUrl}
    />
  ),
};

StageBaseDemo.parameters = {
  storySource: {
    source: code,
  },
};

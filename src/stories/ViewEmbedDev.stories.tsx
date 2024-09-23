import type { Meta, StoryObj } from "@storybook/react";

import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { EmbedWithHooks } from "../utils/embedWithHooks";
import { code } from "./ViewEmbedDev.source";

// const API_BASE_URL = "https://api-dev.formant.io";
// const SERVICE_ACCOUNT_EMAIL =
//   "view-embed-demo@8b824611-7b17-4366-b668-3c97ef1fcf21.iam-dev.formant.io";
// const SERVICE_ACCOUNT_PASSWORD =
//   "RKzgUNkLU1o0RJ0YR7-hs6biY_KFXAMhcNWJeu6fnQLPML6kAVaF3IYG3P-a7LCg";
// const TAG_SETS = {};

const DEVICE_OPTIONS = [
  { value: "7ba87617-adc8-42d1-bdf4-22f4931c1a5e", label: "beast" },
];

const TIME_RANGE_OPTIONS = [
  "3 hour",
  "1 hour",
  "30 minute",
  "5 minute",
  "1 minute",
  "1 minute",
  "30 seconds",
  "30 seconds",
  "5 seconds",
];

const meta = {
  title: "View Embed [Development]",
  component: ViewEmbedWrapper,
  argTypes: {
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
    authToken: {
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

export const DevBaseDemo: Story = {
  args: {
    viewId: "8b0303cb-d958-433d-9556-89bdf987aafb",
    deviceId: DEVICE_OPTIONS[0].value,
    authToken: "",
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
      authToken={args.authToken}
      timeRange={args.timeRange}
      currentDate={args.currentDate}
      dataSrcUrl="https://embed-dev.formant.io"
    />
  ),
};

DevBaseDemo.parameters = {
  storySource: {
    source: code,
  },
};

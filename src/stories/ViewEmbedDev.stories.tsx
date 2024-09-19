import type { Meta, StoryObj } from "@storybook/react";

import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import { useAuthToken } from "../utils/useAuthToken";

const API_BASE_URL = "https://api.formant.io";
const SERVICE_ACCOUNT_EMAIL =
  "view-embed-dev@d7814f1f-fe29-47cc-8684-742e450a132c.iam-dev.formant.io";
const SERVICE_ACCOUNT_PASSWORD =
  "NhpLztG8Rx20kiWUPQgo1APx3KNnZtdxByC8znoTY1VaW15PbUmLGBZEHSmHoF6m";
const TAG_SETS = {};

const DEVICE_OPTIONS = [
  { value: "7d4a86d7-1b54-4792-96eb-5ac3adfdea8b", label: "Test Device" },
];

const TIME_RANGE_OPTIONS = [
  { value: "", label: "Custom Range" },
  { value: "3 hour", label: "3 hours" },
  { value: "1 hour", label: "1 hour" },
  { value: "30 minute", label: "30 minutes" },
  { value: "5 minute", label: "5 minutes" },
  { value: "1 minute", label: "1 minute" },
  { value: "30 seconds", label: "30 seconds" },
  { value: "5 seconds", label: "5 seconds" },
];

const meta = {
  title: "View Embed [Development]",
  component: ViewEmbedWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ViewEmbedWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IProps {
  pageLayoutAboveContent?: any;
  pageLayoutBelowContent?: any;
  viewId: string;
  deviceId: string;
  themeOverride: Record<string, any>;
  fontFamilyUrl?: string;
}

const Dropdown = ({ options, onChange, defaultValue }: any) => (
  <select onChange={onChange} defaultValue={defaultValue}>
    {options.map((option: { value: string; label: string }) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const EmbedWithHooks = ({
  pageLayoutAboveContent,
  pageLayoutBelowContent,
  deviceId,
  viewId,
  themeOverride,
  fontFamilyUrl,
}: IProps) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(deviceId);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const authToken = useAuthToken({
    serviceAccountEmail: SERVICE_ACCOUNT_EMAIL,
    serviceAccountPassword: SERVICE_ACCOUNT_PASSWORD,
    tagSets: TAG_SETS,
    apiBaseUrl: API_BASE_URL,
  });

  return (
    <>
      {pageLayoutAboveContent}

      <div
        style={{
          paddingBottom: "20px",
          display: "flex",
          alignContent: "center",
          columnGap: "20px",
        }}
      >
        <div style={{ paddingBottom: "10px", paddingTop: "5px" }}>
          Choose Device:{" "}
          <Dropdown
            options={DEVICE_OPTIONS}
            onChange={(e: any) => setSelectedDeviceId(e.currentTarget.value)}
          />
        </div>

        <div style={{ paddingBottom: "10px" }}>
          Choose Date:{" "}
          <DateTimePicker onChange={setSelectedDate} value={selectedDate} />
        </div>

        <div style={{ paddingTop: "5px" }}>
          Choose Time Range:{" "}
          <Dropdown
            options={TIME_RANGE_OPTIONS}
            onChange={(e: any) => setSelectedTimeRange(e.currentTarget.value)}
            defaultValue="30 minute"
          />
        </div>
      </div>

      <ViewEmbedWrapper
        fontFamilyUrl={fontFamilyUrl}
        viewId={viewId}
        deviceId={selectedDeviceId}
        authToken={authToken}
        // @ts-ignore
        currentDate={selectedDate}
        timeRange={selectedTimeRange}
        themeOverride={themeOverride}
        dataSrcUrl="http://embed-dev.formant.io"
      />

      {pageLayoutBelowContent}
    </>
  );
};

export const DevBaseDemo: Story = {
  args: {
    viewId: "",
    deviceId: "",
    authToken: "",
  },
  render: () => (
    <EmbedWithHooks
      deviceId={DEVICE_OPTIONS[0].value}
      viewId="48844169-14be-4586-9353-447ba1559c13"
      fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
      themeOverride={{
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
      }}
    />
  ),
};

export const DevHolmanDemo: Story = {
  args: {
    viewId: "",
    deviceId: "",
    authToken: "",
  },
  render: () => (
    <EmbedWithHooks
      pageLayoutAboveContent={
        <>
          <div>
            <img src="../static/logo.png" />
          </div>

          <div style={{ paddingBottom: "10px" }}>
            <img src="../static/img1.png" width="100%" />
          </div>
        </>
      }
      pageLayoutBelowContent={
        <>
          <div style={{ paddingTop: "10px" }}>
            <img src="../static/img2.png" width="100%" />
          </div>
        </>
      }
      deviceId={DEVICE_OPTIONS[0].value}
      viewId="9140bb02-32fe-47ea-bc24-8f6178eff205"
      fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
      themeOverride={{
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
      }}
    />
  ),
};

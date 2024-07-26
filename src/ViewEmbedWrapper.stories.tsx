import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "./ViewEmbedWrapper";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";

const meta = {
  title: "View Embed Wrapper",
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

const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJmb3JtYW50LmlvIiwiYXVkIjoiZm9ybWFudC5pbyIsImV4cCI6MTcyMTkyNzk1MCwiaWF0IjoxNzIxOTI0MzUwLCJzdWIiOiI4cERibVFwc0tKc0FCYThUT2R6bSIsImZvcm1hbnQ6Y2xhaW1zIjp7InR5cGUiOiJ1c2VyIiwib3JnYW5pemF0aW9uSWQiOiIwZDI5ZjY1Ni1jYzFjLTRiOWUtYmFhZC0xOTljZmExZmNjZWQiLCJ1c2VySWQiOiJlMTM5MTM0Ni03M2ExLTRkYzktODIyNC0zN2E4Mjk2ZDlhNzgifX0.giweWNDqeN4GobIENDPzdUVk35hbcxrfNlNuGe5Tsqs";

interface IProps {
  viewId: string;
  deviceId: string;
  themeOverride: Record<string, any>;
  fontFamilyUrl?: string;
}

const EmbedWithHooks = (props: IProps) => {
  const { deviceId, viewId, themeOverride, fontFamilyUrl } = props;

  const [selectedDeviceId, setSelectedDeviceId] = useState(deviceId);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState("");

  return (
    <>
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
          <select
            onChange={(event) => {
              setSelectedDeviceId(event.currentTarget.value);
            }}
          >
            <option value="58d7f6e1-899d-4a8a-8c02-4c805cc8227f">
              Alpacabot
            </option>
            <option value="b0990d5a-cdff-4c3c-ab71-c6c72be385ad">Walter</option>
          </select>
        </div>

        <div style={{ paddingBottom: "10px" }}>
          Choose Date:{" "}
          <DateTimePicker onChange={setSelectedDate} value={selectedDate} />
        </div>

        <div style={{ paddingTop: "5px" }}>
          Choose Time Range:{" "}
          <select
            defaultValue="30 minute"
            onChange={(event) => {
              setSelectedTimeRange(event.currentTarget.value);
            }}
          >
            <option value="">Custom Range</option>
            <option value="3 hour">3 hours</option>
            <option value="1 hour">1 hour</option>
            <option value="30 minute">30 minutes</option>
            <option value="5 minute">5 minutes</option>
            <option value="1 minute">1 minute</option>
            <option value="30 seconds">30 seconds</option>
            <option value="5 seconds">5 seconds</option>
          </select>
        </div>
      </div>
      <div>
        <ViewEmbedWrapper
          fontFamilyUrl={fontFamilyUrl}
          viewId={viewId}
          deviceId={selectedDeviceId}
          authToken={authToken}
          // @ts-ignore
          currentDate={selectedDate}
          timeRange={selectedTimeRange}
          themeOverride={themeOverride}
        />
      </div>
    </>
  );
};

export const Base: Story = {
  args: {
    viewId: "",
    deviceId: "",
    authToken: "",
  },
  render: () => (
    <EmbedWithHooks
      deviceId="58d7f6e1-899d-4a8a-8c02-4c805cc8227f"
      viewId="6e1a6845-c53b-42d2-b169-e4104404d676#eJwNzMENwyAMAMBd"
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

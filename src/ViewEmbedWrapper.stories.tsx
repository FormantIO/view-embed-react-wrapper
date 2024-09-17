import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "./ViewEmbedWrapper";

import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";

const API_BASE_URL = "https://api.formant.io";
const AUTH_LOGIN_ENDPOINT = "/v1/admin/auth/login-embed";
const SERVICE_ACCOUNT_EMAIL =
  "embed@3e3fa599-37a2-4c64-916d-e27e9fb370ee.iam.formant.io";
const SERVICE_ACCOUNT_PASSWORD =
  "42q3WEBGsUbKRTsU8ifmBC0HxV71i7rSrowL_ISu3px4lo7QQOpPr_fCXsQb0_zP";
const DEVICE_OPTIONS = [
  { value: "9fccbfd0-67e8-47c9-be7a-10105a737050", label: "Holman View Embed" },
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

interface IProps {
  viewId: string;
  deviceId: string;
  themeOverride: Record<string, any>;
  fontFamilyUrl?: string;
}

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
  },
});

const provisionAuthToken = async () => {
  const response = await axiosInstance.post(AUTH_LOGIN_ENDPOINT, {
    email: SERVICE_ACCOUNT_EMAIL,
    password: SERVICE_ACCOUNT_PASSWORD,
  });
  return response.data.accessToken;
};

const useAuthToken = () => {
  const [authToken, setAuthToken] = useState<string>("");

  const fetchAuthToken = async () => {
    const token = await provisionAuthToken();
    setAuthToken(token);
  };

  useEffect(() => {
    fetchAuthToken();
  }, []);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const delay = 60000;
      const timer = setInterval(() => {
        const currentDtm = Math.round(new Date().getTime() / 1000);

        if (authToken) {
          try {
            const decodedToken: { exp: number } = jwtDecode(authToken);

            if (decodedToken.exp && currentDtm >= decodedToken.exp) {
              clearInterval(timer);
              fetchAuthToken();
            }
          } catch (error) {
            console.error(":: Error decoding token", error);
          }
        }
      }, delay);

      return () => clearInterval(timer);
    };

    if (authToken) {
      checkTokenExpiration();
    }
  }, [authToken]);

  return authToken;
};

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
  deviceId,
  viewId,
  themeOverride,
  fontFamilyUrl,
}: IProps) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(deviceId);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const authToken = useAuthToken();

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
        dataSrcUrl="http://localhost:5174"
      />
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

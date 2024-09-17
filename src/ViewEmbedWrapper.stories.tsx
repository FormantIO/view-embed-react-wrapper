import type { Meta, StoryObj } from "@storybook/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
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

interface IProps {
  viewId: string;
  deviceId: string;
  themeOverride: Record<string, any>;
  fontFamilyUrl?: string;
}

const provisionAuthToken = async () => {
  const instance = axios.create({
    baseURL: "https://api.formant.io",
    withCredentials: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
    },
  });

  const serviceAccountEmail =
    "embed@3e3fa599-37a2-4c64-916d-e27e9fb370ee.iam.formant.io";
  const serviceAccountPassword =
    "42q3WEBGsUbKRTsU8ifmBC0HxV71i7rSrowL_ISu3px4lo7QQOpPr_fCXsQb0_zP";

  const response = await instance.post("/v1/admin/auth/login-embed", {
    email: serviceAccountEmail,
    password: serviceAccountPassword,
  });

  return response.data.accessToken;
};

const EmbedWithHooks = (props: IProps) => {
  const { deviceId, viewId, themeOverride, fontFamilyUrl } = props;

  const [selectedDeviceId, setSelectedDeviceId] = useState(deviceId);
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState("");
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const fetchAuthToken = async () => {
      const tempAuthToken = await provisionAuthToken();
      setAuthToken(tempAuthToken);
    };

    fetchAuthToken();
  }, []);

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const refreshToken = async () => {
        const newToken = await provisionAuthToken();
        setAuthToken(newToken);
      };

      const delay = 60000;
      const timer = setInterval(() => {
        console.log(":: Checking token expiration");
        const currentDtm = Math.round(new Date().getTime() / 1000);

        if (authToken) {
          try {
            const decodedToken: { exp: number } = jwtDecode(authToken);

            if (decodedToken.exp && currentDtm >= decodedToken.exp) {
              console.log(":: Token expired, fetching new token");
              clearInterval(timer);
              refreshToken();
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
            <option value="9fccbfd0-67e8-47c9-be7a-10105a737050">
              Holman View Embed
            </option>
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
          dataSrcUrl="http://localhost:5174"
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
      deviceId="9fccbfd0-67e8-47c9-be7a-10105a737050"
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

import{j as n}from"./jsx-runtime-DEdD30eg.js";import{V as l,T as c,E as i}from"./embedWithHooks-DXRJx9XQ.js";import"./index-RYns6xqu.js";import"./v4-LUkOAzCQ.js";const s=`
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { useAuthToken } from "../utils/useAuthToken";

const API_BASE_URL = "https://api.formant.io";
const SERVICE_ACCOUNT_EMAIL =
  "<YOUR_SERVICE_ACCOUNT_EMAIL>";
const SERVICE_ACCOUNT_PASSWORD =
  "<YOUR_SERVICE_ACCOUNT_PASSWORD>";
const TAG_SETS = {};

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

export const ViewEmbedDemo = () => {
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
        fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
        authToken="<YOUR_AUTH_TOKEN>"
        viewId="<YOUR_VIEW_ID>"
        deviceId="<YOUR_DEVICE_ID>"
        tags="<YOUR_TAGS>"
        currentDate={selectedDate}
        timeRange={selectedTimeRange}
        dataSrcUrl="https://embed.formant.io"
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
        }}
      />
    </>
  );
};
`,m=[{value:"9fccbfd0-67e8-47c9-be7a-10105a737050",label:"Holman View Embed"}],h={title:"View Embed",component:l,argTypes:{hasAuthToken:{control:"boolean",name:"hasAuthToken [Storybook Only]"},serviceAccountEmail:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"serviceAccountEmail [Storybook Only]"},serviceAccountPassword:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"serviceAccountPassword [Storybook Only]"},apiBaseUrl:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"apiBaseUrl [Internal Only]"},authTagSets:{control:"object",if:{arg:"hasAuthToken",truthy:!1},name:"authTagSets [Storybook Only]"},authToken:{control:"text",if:{arg:"hasAuthToken",truthy:!0},name:"authToken [Storybook Only]"},viewId:{control:"text"},viewTags:{control:"text",name:"viewTags"},deviceId:{control:"text"},currentDate:{control:"date"},timeRange:{options:c,control:"select"},fontFamilyUrl:{control:"text"},themeOverride:{control:"object"},wrapperStyleOverride:{control:"object"},dataSrcUrl:{control:"text",name:"dataSrcUrl [Internal Only]"}},parameters:{layout:"centered"}},a={args:{hasAuthToken:!1,serviceAccountEmail:"",serviceAccountPassword:"",authTagSets:{},apiBaseUrl:"https://api.formant.io",authToken:"",dataSrcUrl:"https://embed.formant.io",viewId:"9140bb02-32fe-47ea-bc24-8f6178eff205",viewTags:"",deviceId:m[0].value,timeRange:"30 minute",currentDate:new Date,fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}},render:e=>n.jsx(i,{deviceId:e.deviceId,viewId:e.viewId,themeOverride:e.themeOverride,fontFamilyUrl:e.fontFamilyUrl,providedAuthToken:e.authToken,timeRange:e.timeRange,currentDate:e.currentDate,dataSrcUrl:e.dataSrcUrl,hasAuthToken:e.hasAuthToken,serviceAccountEmail:e.serviceAccountEmail,serviceAccountPassword:e.serviceAccountPassword,apiBaseUrl:e.apiBaseUrl,authTagSets:e.authTagSets,viewTags:e.viewTags,wrapperStyleOverride:e.wrapperStyleOverride})};a.parameters={storySource:{source:s}};var r,o,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
    fontFamilyUrl: "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",
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
        "formant-color-data-green": "#40E0D0"
      },
      fontFamily: "Oswald"
    }
  },
  render: args => <EmbedWithHooks deviceId={args.deviceId} viewId={args.viewId} themeOverride={args.themeOverride} fontFamilyUrl={args.fontFamilyUrl} providedAuthToken={args.authToken} timeRange={args.timeRange} currentDate={args.currentDate} dataSrcUrl={args.dataSrcUrl} hasAuthToken={args.hasAuthToken} serviceAccountEmail={args.serviceAccountEmail} serviceAccountPassword={args.serviceAccountPassword} apiBaseUrl={args.apiBaseUrl} authTagSets={args.authTagSets} viewTags={args.viewTags} wrapperStyleOverride={args.wrapperStyleOverride} />
}`,...(t=(o=a.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const E=["BaseDemo"];export{a as BaseDemo,E as __namedExportsOrder,h as default};

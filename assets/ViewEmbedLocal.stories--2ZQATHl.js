import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{V as v,u as A,D as O}from"./useAuthToken-XyYGm3N3.js";import"./index-DAfSkmQi.js";import"./v4-LUkOAzCQ.js";const h=`
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { useAuthToken } from "../utils/useAuthToken";

const API_BASE_URL = "https://api.formant.io";
const SERVICE_ACCOUNT_EMAIL =
  "XXXXX";
const SERVICE_ACCOUNT_PASSWORD =
  "XXXXX";
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

export const ViewEmbedDemo = () => {
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
        viewId="48844169-14be-4586-9353-447ba1559c13"
        deviceId={DEVICE_OPTIONS[0].value}
        authToken={authToken}
        currentDate={selectedDate}
        timeRange={selectedTimeRange}
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
        dataSrcUrl="http://localhost:5174"
      />
    </>
  );
};
`,_="https://api.formant.io",k="embed@3e3fa599-37a2-4c64-916d-e27e9fb370ee.iam.formant.io",R="42q3WEBGsUbKRTsU8ifmBC0HxV71i7rSrowL_ISu3px4lo7QQOpPr_fCXsQb0_zP",B={},i=[{value:"9fccbfd0-67e8-47c9-be7a-10105a737050",label:"Holman View Embed"}],V=[{value:"",label:"Custom Range"},{value:"3 hour",label:"3 hours"},{value:"1 hour",label:"1 hour"},{value:"30 minute",label:"30 minutes"},{value:"5 minute",label:"5 minutes"},{value:"1 minute",label:"1 minute"},{value:"30 seconds",label:"30 seconds"},{value:"5 seconds",label:"5 seconds"}],W={title:"View Embed [Local Development]",component:v,parameters:{layout:"centered"},tags:["autodocs"]},d=({options:t,onChange:n,defaultValue:l})=>e.jsx("select",{onChange:n,defaultValue:l,children:t.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))}),y=({pageLayoutAboveContent:t,pageLayoutBelowContent:n,deviceId:l,viewId:o,themeOverride:b,fontFamilyUrl:w})=>{const[T,I]=c.useState(l),[m,S]=c.useState(new Date),[D,C]=c.useState(""),x=A({serviceAccountEmail:k,serviceAccountPassword:R,tagSets:B,apiBaseUrl:_});return e.jsxs(e.Fragment,{children:[t,e.jsxs("div",{style:{paddingBottom:"20px",display:"flex",alignContent:"center",columnGap:"20px"},children:[e.jsxs("div",{style:{paddingBottom:"10px",paddingTop:"5px"},children:["Choose Device:"," ",e.jsx(d,{options:i,onChange:s=>I(s.currentTarget.value)})]}),e.jsxs("div",{style:{paddingBottom:"10px"},children:["Choose Date:"," ",e.jsx(O,{onChange:S,value:m})]}),e.jsxs("div",{style:{paddingTop:"5px"},children:["Choose Time Range:"," ",e.jsx(d,{options:V,onChange:s=>C(s.currentTarget.value),defaultValue:"30 minute"})]})]}),e.jsx(v,{fontFamilyUrl:w,viewId:o,deviceId:T,authToken:x,currentDate:m,timeRange:D,themeOverride:b,dataSrcUrl:"http://localhost:5174"}),n]})},a={args:{viewId:"",deviceId:"",authToken:""},render:()=>e.jsx(y,{deviceId:i[0].value,viewId:"9140bb02-32fe-47ea-bc24-8f6178eff205",fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}})};a.parameters={storySource:{source:h}};const r={args:{viewId:"",deviceId:"",authToken:""},render:()=>e.jsx(y,{pageLayoutAboveContent:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:"../static/logo.png"})}),e.jsx("div",{style:{paddingBottom:"10px"},children:e.jsx("img",{src:"../static/img1.png",width:"100%"})})]}),pageLayoutBelowContent:e.jsx(e.Fragment,{children:e.jsx("div",{style:{paddingTop:"10px"},children:e.jsx("img",{src:"../static/img2.png",width:"100%"})})}),deviceId:i[0].value,viewId:"9140bb02-32fe-47ea-bc24-8f6178eff205",fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}})};r.parameters={storySource:{source:h}};var p,f,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    viewId: "",
    deviceId: "",
    authToken: ""
  },
  render: () => <EmbedWithHooks deviceId={DEVICE_OPTIONS[0].value} viewId="9140bb02-32fe-47ea-bc24-8f6178eff205" fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" themeOverride={{
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
  }} />
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var F,E,g;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    viewId: "",
    deviceId: "",
    authToken: ""
  },
  render: () => <EmbedWithHooks pageLayoutAboveContent={<>
          <div>
            <img src="../static/logo.png" />
          </div>

          <div style={{
      paddingBottom: "10px"
    }}>
            <img src="../static/img1.png" width="100%" />
          </div>
        </>} pageLayoutBelowContent={<>
          <div style={{
      paddingTop: "10px"
    }}>
            <img src="../static/img2.png" width="100%" />
          </div>
        </>} deviceId={DEVICE_OPTIONS[0].value} viewId="9140bb02-32fe-47ea-bc24-8f6178eff205" fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" themeOverride={{
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
  }} />
}`,...(g=(E=r.parameters)==null?void 0:E.docs)==null?void 0:g.source}}};const X=["LocalBaseDemo","LocalHolmanDemo"];export{a as LocalBaseDemo,r as LocalHolmanDemo,X as __namedExportsOrder,W as default};

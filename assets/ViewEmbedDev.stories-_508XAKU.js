import{j as e}from"./extends-xdV4tO5b.js";import{r as c}from"./index-RYns6xqu.js";import{V as v,u as x,D as O}from"./useAuthToken-C6K7tvXj.js";import"./index-DAfSkmQi.js";import"./v4-LUkOAzCQ.js";const h=`
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { useAuthToken } from "../utils/useAuthToken";

const API_BASE_URL = "https://api-dev.formant.io";
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
        dataSrcUrl="https://embed-dev.formant.io"
      />
    </>
  );
};
`,k="https://api-dev.formant.io",_="view-embed-demo@8b824611-7b17-4366-b668-3c97ef1fcf21.iam-dev.formant.io",R="RKzgUNkLU1o0RJ0YR7-hs6biY_KFXAMhcNWJeu6fnQLPML6kAVaF3IYG3P-a7LCg",j={},i=[{value:"7ba87617-adc8-42d1-bdf4-22f4931c1a5e",label:"beast"}],V=[{value:"",label:"Custom Range"},{value:"3 hour",label:"3 hours"},{value:"1 hour",label:"1 hour"},{value:"30 minute",label:"30 minutes"},{value:"5 minute",label:"5 minutes"},{value:"1 minute",label:"1 minute"},{value:"30 seconds",label:"30 seconds"},{value:"5 seconds",label:"5 seconds"}],W={title:"View Embed [Development]",component:v,parameters:{layout:"centered"},tags:["autodocs"]},d=({options:t,onChange:n,defaultValue:l})=>e.jsx("select",{onChange:n,defaultValue:l,children:t.map(o=>e.jsx("option",{value:o.value,children:o.label},o.value))}),y=({pageLayoutAboveContent:t,pageLayoutBelowContent:n,deviceId:l,viewId:o,themeOverride:b,fontFamilyUrl:w})=>{const[T,D]=c.useState(l),[m,I]=c.useState(new Date),[S,C]=c.useState(""),A=x({serviceAccountEmail:_,serviceAccountPassword:R,tagSets:j,apiBaseUrl:k});return e.jsxs(e.Fragment,{children:[t,e.jsxs("div",{style:{paddingBottom:"20px",display:"flex",alignContent:"center",columnGap:"20px"},children:[e.jsxs("div",{style:{paddingBottom:"10px",paddingTop:"5px"},children:["Choose Device:"," ",e.jsx(d,{options:i,onChange:s=>D(s.currentTarget.value)})]}),e.jsxs("div",{style:{paddingBottom:"10px"},children:["Choose Date:"," ",e.jsx(O,{onChange:I,value:m})]}),e.jsxs("div",{style:{paddingTop:"5px"},children:["Choose Time Range:"," ",e.jsx(d,{options:V,onChange:s=>C(s.currentTarget.value),defaultValue:"30 minute"})]})]}),e.jsx(v,{fontFamilyUrl:w,viewId:o,deviceId:T,authToken:A,currentDate:m,timeRange:S,themeOverride:b,dataSrcUrl:"https://embed-dev.formant.io"}),n]})},a={args:{viewId:"",deviceId:"",authToken:""},render:()=>e.jsx(y,{deviceId:i[0].value,viewId:"8b0303cb-d958-433d-9556-89bdf987aafb",fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}})};a.parameters={storySource:{source:h}};const r={args:{viewId:"",deviceId:"",authToken:""},render:()=>e.jsx(y,{pageLayoutAboveContent:e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("img",{src:"../static/logo.png"})}),e.jsx("div",{style:{paddingBottom:"10px"},children:e.jsx("img",{src:"../static/img1.png",width:"100%"})})]}),pageLayoutBelowContent:e.jsx(e.Fragment,{children:e.jsx("div",{style:{paddingTop:"10px"},children:e.jsx("img",{src:"../static/img2.png",width:"100%"})})}),deviceId:i[0].value,viewId:"8b0303cb-d958-433d-9556-89bdf987aafb",fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}})};r.parameters={storySource:{source:h}};var p,f,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    viewId: "",
    deviceId: "",
    authToken: ""
  },
  render: () => <EmbedWithHooks deviceId={DEVICE_OPTIONS[0].value} viewId="8b0303cb-d958-433d-9556-89bdf987aafb" fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" themeOverride={{
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
}`,...(u=(f=a.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var F,g,E;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
        </>} deviceId={DEVICE_OPTIONS[0].value} viewId="8b0303cb-d958-433d-9556-89bdf987aafb" fontFamilyUrl="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" themeOverride={{
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
}`,...(E=(g=r.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const X=["DevBaseDemo","DevHolmanDemo"];export{a as DevBaseDemo,r as DevHolmanDemo,X as __namedExportsOrder,W as default};
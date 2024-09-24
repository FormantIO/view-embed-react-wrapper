import{j as n}from"./jsx-runtime-DEdD30eg.js";import{V as c,T as l,E as i,c as s}from"./ViewEmbedLocal.source-xO_qti_i.js";import"./index-RYns6xqu.js";import"./v4-LUkOAzCQ.js";const m=[{value:"9fccbfd0-67e8-47c9-be7a-10105a737050",label:"Holman View Embed"}],h={title:"View Embed [Production]",component:c,argTypes:{hasAuthToken:{control:{type:"boolean"}},serviceAccountEmail:{control:"text",if:{arg:"hasAuthToken",truthy:!1}},serviceAccountPassword:{control:"text",if:{arg:"hasAuthToken",truthy:!1}},apiBaseUrl:{control:"text",if:{arg:"hasAuthToken",truthy:!1}},authToken:{control:{type:"text"},if:{arg:"hasAuthToken",truthy:!0}},viewId:{control:{type:"text"}},deviceId:{control:{type:"text"}},fontFamilyUrl:{control:{type:"text"}},tags:{control:{type:"text"}},currentDate:{control:{type:"date"}},dataSrcUrl:{control:{type:"text"}},timeRange:{options:l,control:{type:"select"}},themeOverride:{control:{type:"object"}},wrapperStyleOverride:{control:{type:"object"}}},parameters:{layout:"centered"},tags:[]},r={args:{hasAuthToken:!1,serviceAccountEmail:"",serviceAccountPassword:"",apiBaseUrl:"https://api.formant.io",authToken:"",viewId:"9140bb02-32fe-47ea-bc24-8f6178eff205",deviceId:m[0].value,fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"},timeRange:"30 minute",currentDate:new Date},render:e=>n.jsx(i,{deviceId:e.deviceId,viewId:e.viewId,themeOverride:e.themeOverride,fontFamilyUrl:e.fontFamilyUrl,providedAuthToken:e.authToken,timeRange:e.timeRange,currentDate:e.currentDate,dataSrcUrl:"https://embed.formant.io",hasAuthToken:e.hasAuthToken,serviceAccountEmail:e.serviceAccountEmail,serviceAccountPassword:e.serviceAccountPassword,apiBaseUrl:e.apiBaseUrl})};r.parameters={storySource:{source:s}};var o,t,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    viewId: "9140bb02-32fe-47ea-bc24-8f6178eff205",
    deviceId: DEVICE_OPTIONS[0].value,
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
    },
    timeRange: "30 minute",
    currentDate: new Date()
  },
  render: args => <EmbedWithHooks deviceId={args.deviceId} viewId={args.viewId} themeOverride={args.themeOverride} fontFamilyUrl={args.fontFamilyUrl} providedAuthToken={args.authToken} timeRange={args.timeRange} currentDate={args.currentDate} dataSrcUrl="https://embed.formant.io" hasAuthToken={args.hasAuthToken} serviceAccountEmail={args.serviceAccountEmail} serviceAccountPassword={args.serviceAccountPassword} apiBaseUrl={args.apiBaseUrl} />
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const y=["BaseDemo"];export{r as BaseDemo,y as __namedExportsOrder,h as default};

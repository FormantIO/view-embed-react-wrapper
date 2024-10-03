import{j as n}from"./jsx-runtime-DEdD30eg.js";import{V as l,T as i,A as c,E as s}from"./embedWithHooks-CRHEqKEM.js";import"./index-RYns6xqu.js";import"./v4-LUkOAzCQ.js";const m=[{value:"9fccbfd0-67e8-47c9-be7a-10105a737050",label:"View Embed Example"}],h={title:"View Embed [Local Development]",component:l,tags:["!dev"],argTypes:{hasAuthToken:{control:"boolean",name:"hasAuthToken [Storybook Only]"},serviceAccountEmail:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"serviceAccountEmail [Storybook Only]"},serviceAccountPassword:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"serviceAccountPassword [Storybook Only]"},apiBaseUrl:{control:"text",if:{arg:"hasAuthToken",truthy:!1},name:"apiBaseUrl [Storybook Only]"},authTagSets:{control:"object",if:{arg:"hasAuthToken",truthy:!1},name:"tagSets [Storybook Only]"},authToken:{control:"text",if:{arg:"hasAuthToken",truthy:!0},name:"authToken [Storybook Only]"},viewId:{control:"text"},viewTags:{control:"text"},deviceId:{control:"text"},currentDate:{control:"date"},timeRange:{options:i,control:"select"},aggregation:{options:c,control:"select"},aggregateStartDate:{control:"date"},aggregateEndDate:{control:"date"},fontFamilyUrl:{control:"text"},themeOverride:{control:"object"},wrapperStyleOverride:{control:"object"},dataSrcUrl:{control:"text"}},parameters:{layout:"centered"}},a={args:{hasAuthToken:!1,serviceAccountEmail:"",serviceAccountPassword:"",authTagSets:{},apiBaseUrl:"https://api.formant.io",authToken:"",viewId:"9140bb02-32fe-47ea-bc24-8f6178eff205",viewTags:"",deviceId:m[0].value,currentDate:new Date,timeRange:"30 minute",aggregation:void 0,aggregateStartDate:void 0,aggregateEndDate:void 0,fontFamilyUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap",themeOverride:{colors:{"formant-color-primary-white":"#000000","formant-color-primary-silver":"#1F1F1F","formant-color-primary-black":"#FFFFFF","formant-color-primary-dark":"#E6E6E6","formant-color-primary-flagship":"#E8E8E8","formant-color-background":"#E8E8E8","formant-color-primary-module":"#FFFFFF","formant-color-primary-steel01":"#005897","formant-color-primary-steel02":"#005897","formant-color-primary-steel03":"#81cbff","formant-color-highlights-blue":"#005897","formant-color-data-royal-blue":"#005897","formant-color-data-purple":"#E6E6FA","formant-color-data-red":"#FF7F50","formant-color-data-orange":"#FFDAB9","formant-color-data-yellow":"#F9C36E","formant-color-data-green":"#40E0D0"},fontFamily:"Oswald"}},render:e=>n.jsx(s,{deviceId:e.deviceId,viewId:e.viewId,themeOverride:e.themeOverride,fontFamilyUrl:e.fontFamilyUrl,providedAuthToken:e.authToken,timeRange:e.timeRange,currentDate:e.currentDate,aggregateStartDate:e.aggregateStartDate,aggregateEndDate:e.aggregateEndDate,aggregation:e.aggregation,dataSrcUrl:"https://embed.formant.io",hasAuthToken:e.hasAuthToken,serviceAccountEmail:e.serviceAccountEmail,serviceAccountPassword:e.serviceAccountPassword,apiBaseUrl:e.apiBaseUrl,authTagSets:e.authTagSets,viewTags:e.viewTags})};var t,r,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    hasAuthToken: false,
    serviceAccountEmail: "",
    serviceAccountPassword: "",
    authTagSets: {},
    apiBaseUrl: "https://api.formant.io",
    authToken: "",
    viewId: "9140bb02-32fe-47ea-bc24-8f6178eff205",
    viewTags: "",
    deviceId: DEVICE_OPTIONS[0].value,
    currentDate: new Date(),
    timeRange: "30 minute",
    aggregation: undefined,
    aggregateStartDate: undefined,
    aggregateEndDate: undefined,
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
  render: args => <EmbedWithHooks deviceId={args.deviceId} viewId={args.viewId} themeOverride={args.themeOverride} fontFamilyUrl={args.fontFamilyUrl} providedAuthToken={args.authToken} timeRange={args.timeRange} currentDate={args.currentDate} aggregateStartDate={args.aggregateStartDate} aggregateEndDate={args.aggregateEndDate} aggregation={args.aggregation} dataSrcUrl="https://embed.formant.io" hasAuthToken={args.hasAuthToken} serviceAccountEmail={args.serviceAccountEmail} serviceAccountPassword={args.serviceAccountPassword} apiBaseUrl={args.apiBaseUrl} authTagSets={args.authTagSets} viewTags={args.viewTags} />
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const p=["Demo"];export{a as Demo,p as __namedExportsOrder,h as default};

import React, { useEffect, useState } from "react";
import shortUUID from "short-uuid";
import { ISimpleUserScope } from "../model/ISimpleUserScope";

interface IProps {
  // START :: Only development usage.
  hasAuthToken?: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  authScope?: ISimpleUserScope;
  roleId?: string;
  apiBaseUrl?: string;
  // END :: Only development usage.
  viewId?: string;
  deviceIds?: string[];
  moduleId?: string;
  hideTimeline?: boolean;
  authToken?: string;
  dataSrcUrl?: string;
  viewTags?: any;
  currentDate?: Date;
  aggregation?: string;
  aggregateStartDate?: Date;
  aggregateEndDate?: Date;
  timeRange?: string;
  themeOverride?: any;
  wrapperStyleOverride?: any;
  fontFamily?: string;
  fontFamilyUrl?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  moduleSpacing?: "none" | "sm" | "md" | "lg" | "xl";
  modulePadding?: "none" | "sm" | "md" | "lg" | "xl";
  shadowSize?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  gridColumns?: number;
  gridRowHeight?: number;
  enableAnimations?: boolean;
  enableTransitions?: boolean;
  reducedMotion?: boolean;
  customLoadingComponent?: React.ReactNode;
  customLoadingIconUrl?: string;
  // Interactive state colors
  headerActiveTextColor?: string;
  headerActiveBgColor?: string;
  rowHoverTextColor?: string;
  rowHoverBgColor?: string;
  rowHoverBorderColor?: string;
  // Chart colors
  chartLineColor?: string;
}

const sendPostMessageUpdate = (iframeId: string, data: Record<string, any>) => {
  const rectangleIframe = document.getElementById(
    `rectangle-app-${iframeId}`
  ) as HTMLIFrameElement;

  rectangleIframe.contentWindow?.postMessage(
    JSON.stringify({
      messageType: "viewEmbedUpdate",
      ...data,
    }),
    "*"
  );
};

export const ViewEmbedWrapper = (props: IProps) => {
  const {
    viewId,
    deviceIds,
    moduleId,
    hideTimeline,
    dataSrcUrl = "https://embed.formant.io",
    authToken,
    currentDate,
    timeRange,
    aggregation,
    aggregateStartDate,
    aggregateEndDate,
    themeOverride,
    wrapperStyleOverride,
    viewTags,
    apiBaseUrl = "https://api.formant.io",
    fontFamily,
    fontFamilyUrl,
    fontSize,
    fontWeight,
    lineHeight,
    borderRadius,
    moduleSpacing,
    modulePadding,
    shadowSize,
    containerMaxWidth,
    gridColumns,
    gridRowHeight,
    enableAnimations,
    enableTransitions,
    reducedMotion,
    customLoadingComponent,
    customLoadingIconUrl,
    headerActiveTextColor,
    headerActiveBgColor,
    rowHoverTextColor,
    rowHoverBgColor,
    rowHoverBorderColor,
    chartLineColor,
  } = props;

  const [iframeId] = useState(shortUUID.generate());
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    sendPostMessageUpdate(iframeId, {
      viewId,
      deviceIds,
      moduleId,
      hideTimeline,
      dataSrcUrl,
      authToken,
      currentDate,
      timeRange,
      aggregation,
      aggregateStartDate,
      aggregateEndDate,
      themeOverride,
      viewTags,
      apiBaseUrl,
      fontFamily,
      fontFamilyUrl,
      fontSize,
      fontWeight,
      lineHeight,
      borderRadius,
      moduleSpacing,
      modulePadding,
      shadowSize,
      containerMaxWidth,
      gridColumns,
      gridRowHeight,
      enableAnimations,
      enableTransitions,
      reducedMotion,
      customLoadingIconUrl,
    });
  }, [
    viewId,
    deviceIds,
    hideTimeline,
    moduleId,
    dataSrcUrl,
    authToken,
    currentDate,
    timeRange,
    aggregation,
    aggregateStartDate,
    aggregateEndDate,
    themeOverride,
    viewTags,
    fontFamily,
    fontFamilyUrl,
    fontSize,
    fontWeight,
    lineHeight,
    borderRadius,
    moduleSpacing,
    modulePadding,
    shadowSize,
    containerMaxWidth,
    gridColumns,
    gridRowHeight,
    enableAnimations,
    enableTransitions,
    reducedMotion,
    customLoadingIconUrl,
  ]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "98vw" }}>
      {!iframeLoaded && customLoadingComponent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: wrapperStyleOverride?.background || "transparent",
            zIndex: 1,
          }}
        >
          {customLoadingComponent}
        </div>
      )}
      <iframe
        key={`${iframeId}-${dataSrcUrl}`}
        id={`rectangle-app-${iframeId}`}
        name={`rectangle-app-${iframeId}`}
        src={`${dataSrcUrl}?iframeId=${iframeId}`}
        onLoad={() => {
          setIframeLoaded(true);
          const rectangleIframe = document.getElementById(
            `rectangle-app-${iframeId}`
          ) as HTMLIFrameElement;
          rectangleIframe.contentWindow?.postMessage(
            JSON.stringify({
              messageType: "viewEmbedLoad",
              viewId,
              deviceIds,
              moduleId,
              themeOverride,
              authToken,
              currentDate,
              timeRange,
              aggregation,
              aggregateStartDate,
              aggregateEndDate,
              dataSrcUrl,
              viewTags,
              apiBaseUrl,
              fontFamily,
              fontFamilyUrl,
              fontSize,
              fontWeight,
              lineHeight,
              borderRadius,
              moduleSpacing,
              modulePadding,
              shadowSize,
              containerMaxWidth,
              gridColumns,
              gridRowHeight,
              enableAnimations,
              enableTransitions,
              reducedMotion,
              customLoadingIconUrl,
              headerActiveTextColor,
              headerActiveBgColor,
              rowHoverTextColor,
              rowHoverBgColor,
              rowHoverBorderColor,
              chartLineColor,
            }),
            "*"
          );
        }}
        style={{
          height: "100vh",
          width: "98vw",
          border: "none",
          ...wrapperStyleOverride,
        }}
        data-testid="view-embed-iframe"
      />
    </div>
  );
};

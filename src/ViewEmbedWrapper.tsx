import React, { useEffect, useState } from "react";
import shortUUID from "short-uuid";

interface IProps {
  // START :: Only development usage.
  hasAuthToken?: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  authTagSets?: any;
  apiBaseUrl?: string;
  // END :: Only development usage.
  viewId?: string;
  deviceId?: string;
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
  fontFamilyUrl?: string;
}

const sendPostMessageUpdate = (iframeId: string, data: Record<string, any>) => {
  const rectangleIframe = document.getElementById(
    `rectangle-app-${iframeId}`
  ) as HTMLIFrameElement;

  console.log(data);

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
    deviceId,
    dataSrcUrl = "https://embed.formant.io",
    authToken,
    currentDate,
    timeRange,
    aggregation,
    aggregateStartDate,
    aggregateEndDate,
    themeOverride,
    fontFamilyUrl,
    wrapperStyleOverride,
    viewTags,
    apiBaseUrl = "https://api.formant.io",
  } = props;

  const [iframeId] = useState(shortUUID.generate());

  useEffect(() => {
    sendPostMessageUpdate(iframeId, {
      viewId,
      deviceId,
      dataSrcUrl,
      authToken,
      currentDate,
      timeRange,
      aggregation,
      aggregateStartDate,
      aggregateEndDate,
      themeOverride,
      fontFamilyUrl,
      viewTags,
      apiBaseUrl,
    });
  }, [
    viewId,
    deviceId,
    dataSrcUrl,
    authToken,
    currentDate,
    timeRange,
    aggregation,
    aggregateStartDate,
    aggregateEndDate,
    themeOverride,
    fontFamilyUrl,
    viewTags,
    apiBaseUrl,
  ]);

  return (
    <iframe
      id={`rectangle-app-${iframeId}`}
      name={`rectangle-app-${iframeId}`}
      src={`${dataSrcUrl}?iframeId=${iframeId}`}
      onLoad={() => {
        const rectangleIframe = document.getElementById(
          `rectangle-app-${iframeId}`
        ) as HTMLIFrameElement;

        rectangleIframe.contentWindow?.postMessage(
          JSON.stringify({
            messageType: "viewEmbedLoad",
            viewId,
            deviceId,
            themeOverride,
            authToken,
            currentDate,
            timeRange,
            aggregation,
            aggregateStartDate,
            aggregateEndDate,
            fontFamilyUrl,
            apiBaseUrl,
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
    />
  );
};

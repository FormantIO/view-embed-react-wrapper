import React, { useEffect, useState } from "react";
import shortUUID from "short-uuid";
import { ISimpleUserScope } from "../model/ISimpleUserScope";

interface IProps {
  // START :: Only development usage.
  hasAuthToken?: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  authScope?: ISimpleUserScope;
  apiBaseUrl?: string;
  // END :: Only development usage.
  viewId?: string;
  deviceIds?: string[];
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
  } = props;

  const [iframeId] = useState(shortUUID.generate());

  useEffect(() => {
    sendPostMessageUpdate(iframeId, {
      viewId,
      deviceIds,
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
    });
  }, [
    viewId,
    deviceIds,
    dataSrcUrl,
    authToken,
    currentDate,
    timeRange,
    aggregation,
    aggregateStartDate,
    aggregateEndDate,
    themeOverride,
    viewTags,
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
            deviceIds,
            themeOverride,
            authToken,
            currentDate,
            timeRange,
            aggregation,
            aggregateStartDate,
            aggregateEndDate,
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
  );
};

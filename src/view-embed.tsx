import React, { useState } from "react";
import shortUUID from "short-uuid";

interface IProps {
  viewId: string;
  deviceId: string;
  authToken: string;
  dataSrcUrl: string;
  tags?: string[];
  startDate?: Date;
  endDate?: Date;
  themeOverride?: Record<string, string>;
  wrapperStyleOverride?: Record<string, any>;
  containerHeight?: string;
  containerWidth?: string;
}

export const ViewEmbedWrapper = (props: IProps) => {
  const {
    viewId,
    deviceId,
    dataSrcUrl = "http://localhost:5174",
    authToken,
    tags,
    startDate,
    endDate,
    themeOverride,
    wrapperStyleOverride = { border: "none" },
    containerHeight = "800px",
    containerWidth = "1768px",
  } = props;

  const [iframeId] = useState(shortUUID.generate());

  return (
    <iframe
      id={`rectangle-app-${iframeId}`}
      name={`rectangle-app-${iframeId}`}
      src={dataSrcUrl}
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
            tags,
            startDate,
            endDate,
          }),
          "*"
        );
      }}
      width={containerWidth}
      height={containerHeight}
      style={{ ...wrapperStyleOverride }}
    />
  );
};

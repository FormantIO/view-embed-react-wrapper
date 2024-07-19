import React, { useEffect, useState } from "react";
import shortUUID from "short-uuid";

interface IProps {
  viewId: string;
  deviceId: string;
  authToken: string;
  dataSrcUrl?: string;
  tags?: string[];
  currentDate?: string;
  timeRange?: string;
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
    currentDate,
    timeRange,
    themeOverride,
    wrapperStyleOverride = { border: "none" },
    containerHeight = "800px",
    containerWidth = "1768px",
  } = props;

  const [iframeId] = useState(shortUUID.generate());

  const sendPostMessageUpdate = (data: Record<string, any>) => {
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

  useEffect(() => {
    sendPostMessageUpdate({ deviceId: deviceId });
  }, [deviceId]);

  useEffect(() => {
    sendPostMessageUpdate({ currentDate: currentDate });
  }, [currentDate]);

  useEffect(() => {
    sendPostMessageUpdate({ timeRange: timeRange });
  }, [timeRange]);

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
            currentDate,
            timeRange,
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

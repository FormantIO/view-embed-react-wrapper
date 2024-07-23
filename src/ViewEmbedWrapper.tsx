import IframeResizer from "@iframe-resizer/react";
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
  console.log(props);

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
  } = props;

  const [iframeId] = useState(shortUUID.generate());

  useEffect(() => {
    sendPostMessageUpdate(iframeId, { deviceId });
  }, [deviceId]);

  useEffect(() => {
    sendPostMessageUpdate(iframeId, { currentDate });
  }, [currentDate]);

  useEffect(() => {
    sendPostMessageUpdate(iframeId, { timeRange });
  }, [timeRange]);

  useEffect(() => {
    sendPostMessageUpdate(iframeId, { authToken });
  }, [authToken]);

  useEffect(() => {
    sendPostMessageUpdate(iframeId, { tags });
  }, [tags]);

  return (
    <IframeResizer
      license="GPLv3"
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
      style={{ height: "100vh", width: "98vw", ...wrapperStyleOverride }}
    />
  );
};

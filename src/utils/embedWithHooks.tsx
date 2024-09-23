import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";

export const TIME_RANGE_OPTIONS = [
  "3 hour",
  "1 hour",
  "30 minute",
  "5 minute",
  "1 minute",
  "1 minute",
  "30 seconds",
  "30 seconds",
  "5 seconds",
];

interface IProps {
  pageLayoutAboveContent?: any;
  pageLayoutBelowContent?: any;
  viewId: string;
  deviceId: string;
  themeOverride: any;
  fontFamilyUrl?: string;
  authToken: string;
  timeRange?: string;
  currentDate?: Date;
  dataSrcUrl: string;
}

export const EmbedWithHooks = ({
  pageLayoutAboveContent,
  pageLayoutBelowContent,
  deviceId,
  viewId,
  themeOverride,
  fontFamilyUrl,
  authToken,
  timeRange,
  currentDate,
  dataSrcUrl,
}: IProps) => {
  return (
    <>
      {pageLayoutAboveContent}

      <ViewEmbedWrapper
        fontFamilyUrl={fontFamilyUrl}
        viewId={viewId}
        deviceId={deviceId}
        authToken={authToken}
        currentDate={currentDate}
        timeRange={timeRange}
        themeOverride={themeOverride}
        dataSrcUrl={dataSrcUrl}
      />

      {pageLayoutBelowContent}
    </>
  );
};

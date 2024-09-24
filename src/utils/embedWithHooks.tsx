import React from "react";
import { ViewEmbedWrapper } from "../ViewEmbedWrapper";
import { useAuthToken } from "./useAuthToken";

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
  providedAuthToken: string;
  timeRange?: string;
  currentDate?: Date;
  dataSrcUrl: string;
  hasAuthToken?: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  apiBaseUrl?: string;
}

export const EmbedWithHooks = (props: IProps) => {
  const {
    pageLayoutAboveContent,
    pageLayoutBelowContent,
    deviceId,
    viewId,
    themeOverride,
    fontFamilyUrl,
    timeRange,
    currentDate,
    dataSrcUrl,
    providedAuthToken,
    hasAuthToken = false,
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
  } = props;

  const provisionedAuthToken = useAuthToken({
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
    hasAuthToken,
    tagSets: {},
  });

  return (
    <>
      {pageLayoutAboveContent}

      <ViewEmbedWrapper
        fontFamilyUrl={fontFamilyUrl}
        viewId={viewId}
        deviceId={deviceId}
        authToken={providedAuthToken ? providedAuthToken : provisionedAuthToken}
        currentDate={currentDate}
        timeRange={timeRange}
        themeOverride={themeOverride}
        dataSrcUrl={dataSrcUrl}
      />

      {pageLayoutBelowContent}
    </>
  );
};

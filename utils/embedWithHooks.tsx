import React from "react";
import { ViewEmbedWrapper } from "../src/ViewEmbedWrapper";
import { useAuthToken } from "./useAuthToken";
import { ISimpleUserScope } from "../model/ISimpleUserScope";

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

export const AGGREGATION_OPTIONS = ["1d", "1w", "1m", "3m", "6m", "1y"];

interface IProps {
  pageLayoutAboveContent?: any;
  pageLayoutBelowContent?: any;
  viewId?: string;
  deviceIds?: string[];
  themeOverride?: any;
  providedAuthToken?: string;
  timeRange?: string;
  currentDate?: Date;
  aggregation?: string;
  aggregateStartDate?: Date;
  aggregateEndDate?: Date;
  dataSrcUrl?: string;
  hasAuthToken?: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  apiBaseUrl?: string;
  authScope?: ISimpleUserScope;
  roleName?: string;
  viewTags?: any;
  wrapperStyleOverride?: any;
}

export const EmbedWithHooks = (props: IProps) => {
  const {
    pageLayoutAboveContent,
    pageLayoutBelowContent,
    deviceIds,
    viewId,
    themeOverride,
    timeRange,
    currentDate,
    aggregateStartDate,
    aggregateEndDate,
    aggregation,
    dataSrcUrl,
    providedAuthToken,
    hasAuthToken = false,
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
    authScope,
    roleName,
    viewTags,
  } = props;

  const provisionedAuthToken = useAuthToken({
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
    hasAuthToken,
    authScope,
    roleName
  });

  if (!provisionedAuthToken && !providedAuthToken) {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <div style={{ fontWeight: "bold", paddingBottom: "10px" }}>
          Unauthorized.
        </div>
        <div style={{ paddingBottom: "10px" }}>
          Enter a valid authentication token, or enter a serviceAccountEmail,
          serviceAccountPassword, authScope and roleName to let Storybook generate an
          authentication token for you via the Formant Admin API.
        </div>
        <div>
          For more information, see{" "}
          <a
            href="https://docs.formant.io/docs/embed-a-formant-view-in-an-external-site"
            target="_blank"
          >
            Embed a Formant view in an external site
          </a>
          .
        </div>
      </div>
    );
  }

  let transformedAggregateStartDate;
  let transformedAggregateEndDate;

  if (typeof aggregateStartDate === "number") {
    transformedAggregateStartDate = new Date(aggregateStartDate);
  } else {
    transformedAggregateStartDate = aggregateStartDate;
  }

  if (typeof aggregateEndDate === "number") {
    transformedAggregateEndDate = new Date(aggregateEndDate);
  } else {
    transformedAggregateEndDate = aggregateEndDate;
  }

  return (
    <>
      {pageLayoutAboveContent}

      <ViewEmbedWrapper
        viewId={viewId}
        deviceIds={deviceIds}
        authToken={providedAuthToken ? providedAuthToken : provisionedAuthToken}
        currentDate={currentDate}
        aggregateStartDate={transformedAggregateStartDate}
        aggregateEndDate={transformedAggregateEndDate}
        aggregation={aggregation}
        timeRange={timeRange}
        themeOverride={themeOverride}
        // dataSrcUrl="http://localhost:5174"
        dataSrcUrl={dataSrcUrl}
        viewTags={viewTags}
      />

      {pageLayoutBelowContent}
    </>
  );
};

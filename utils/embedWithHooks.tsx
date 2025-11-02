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
  moduleId?: string;
  hideTimeline?: boolean;
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
  roleId?: string;
  viewTags?: any;
  wrapperStyleOverride?: any;
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  moduleSpacing?: "none" | "sm" | "md" | "lg" | "xl";
  modulePadding?: "none" | "sm" | "md" | "lg" | "xl";
  shadowSize?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  enableAnimations?: boolean;
  enableTransitions?: boolean;
  reducedMotion?: boolean;
  fontFamily?: string;
  fontFamilyUrl?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  gridColumns?: number;
  gridRowHeight?: number;
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

export const EmbedWithHooks = (props: IProps) => {
  const {
    pageLayoutAboveContent,
    pageLayoutBelowContent,
    deviceIds,
    moduleId,
    hideTimeline,
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
    roleId,
    viewTags,
    wrapperStyleOverride,
    borderRadius,
    moduleSpacing,
    modulePadding,
    shadowSize,
    containerMaxWidth,
    enableAnimations,
    enableTransitions,
    reducedMotion,
    fontFamily,
    fontFamilyUrl,
    fontSize,
    fontWeight,
    lineHeight,
    gridColumns,
    gridRowHeight,
    customLoadingComponent,
    customLoadingIconUrl,
    headerActiveTextColor,
    headerActiveBgColor,
    rowHoverTextColor,
    rowHoverBgColor,
    rowHoverBorderColor,
    chartLineColor,
  } = props;

  const provisionedAuthToken = useAuthToken({
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
    hasAuthToken,
    authScope,
    roleId
  });

  const mergedToken = providedAuthToken || (props as any).authToken || provisionedAuthToken;

  if (!mergedToken) {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <div style={{ fontWeight: "bold", paddingBottom: "10px" }}>
          Unauthorized.
        </div>
        <div style={{ paddingBottom: "10px" }}>
          Enter a valid authentication token, or enter a serviceAccountEmail,
          serviceAccountPassword, authScope and roleId to let Storybook generate an
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
        moduleId={moduleId}
        hideTimeline={hideTimeline}
        authToken={mergedToken}
        currentDate={currentDate}
        aggregateStartDate={transformedAggregateStartDate}
        aggregateEndDate={transformedAggregateEndDate}
        aggregation={aggregation}
        timeRange={timeRange}
        themeOverride={themeOverride}
        dataSrcUrl={dataSrcUrl}
        viewTags={viewTags}
        wrapperStyleOverride={wrapperStyleOverride}
        borderRadius={borderRadius}
        moduleSpacing={moduleSpacing}
        modulePadding={modulePadding}
        shadowSize={shadowSize}
        containerMaxWidth={containerMaxWidth}
        enableAnimations={enableAnimations}
        enableTransitions={enableTransitions}
        reducedMotion={reducedMotion}
        fontFamily={fontFamily}
        fontFamilyUrl={fontFamilyUrl}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        gridColumns={gridColumns}
        gridRowHeight={gridRowHeight}
        customLoadingComponent={customLoadingComponent}
        customLoadingIconUrl={customLoadingIconUrl}
        headerActiveTextColor={headerActiveTextColor}
        headerActiveBgColor={headerActiveBgColor}
        rowHoverTextColor={rowHoverTextColor}
        rowHoverBgColor={rowHoverBgColor}
        rowHoverBorderColor={rowHoverBorderColor}
        chartLineColor={chartLineColor}
      />

      {pageLayoutBelowContent}
    </>
  );
};

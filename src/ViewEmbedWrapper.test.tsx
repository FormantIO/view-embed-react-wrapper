import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ViewEmbedWrapper } from "./ViewEmbedWrapper";

jest.mock("short-uuid", () => ({
  generate: jest.fn(() => "test-iframe-id"),
}));

const mockPostMessage = jest.fn();

beforeAll(() => {
  Object.defineProperty(window.HTMLIFrameElement.prototype, "contentWindow", {
    get: () => ({
      postMessage: mockPostMessage,
    }),
  });
});

describe("ViewEmbedWrapper Component", () => {
  const mockProps = {
    viewId: "test-view-id",
    deviceIds: ["device1", "device2"],
    authToken: "test-auth-token",
    currentDate: new Date("2024-10-21T00:00:00Z"),
    timeRange: "30 minutes",
    aggregation: "1d",
    aggregateStartDate: new Date("2024-10-20T00:00:00Z"),
    aggregateEndDate: new Date("2024-10-21T00:00:00Z"),
    themeOverride: {
      "formant-color-primary-white": "#000000",
      "formant-color-primary-silver": "#1F1F1F",
    },
    wrapperStyleOverride: {
      border: "2px solid red",
    },
    apiBaseUrl: "https://api.formant.io",
    dataSrcUrl: "https://embed.formant.io",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders an iframe with the correct src and ID", () => {
    render(<ViewEmbedWrapper {...mockProps} />);

    const iframe = screen.getByTestId("view-embed-iframe");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("id", "rectangle-app-test-iframe-id");
    expect(iframe).toHaveAttribute("name", "rectangle-app-test-iframe-id");
    expect(iframe).toHaveAttribute(
      "src",
      "https://embed.formant.io?iframeId=test-iframe-id"
    );
  });

  it("applies the wrapper style override correctly", () => {
    render(<ViewEmbedWrapper {...mockProps} />);

    const iframe = screen.getByTestId("view-embed-iframe");
    expect(iframe).toHaveStyle({
      height: "100vh",
      width: "98vw",
      border: "2px solid red",
    });
  });

  it('sends "viewEmbedLoad" message to iframe on load', () => {
    render(<ViewEmbedWrapper {...mockProps} />);

    const iframe = screen.getByTestId("view-embed-iframe");
    iframe.dispatchEvent(new Event("load"));

    expect(mockPostMessage).toHaveBeenCalledWith(
      JSON.stringify({
        messageType: "viewEmbedLoad",
        viewId: "test-view-id",
        deviceIds: ["device1", "device2"],
        themeOverride: {
          "formant-color-primary-white": "#000000",
          "formant-color-primary-silver": "#1F1F1F",
        },
        authToken: "test-auth-token",
        currentDate: new Date("2024-10-21T00:00:00Z").toISOString(),
        timeRange: "30 minutes",
        aggregation: "1d",
        aggregateStartDate: new Date("2024-10-20T00:00:00Z").toISOString(),
        aggregateEndDate: new Date("2024-10-21T00:00:00Z").toISOString(),
      }),
      "*"
    );
  });

  it('sends "viewEmbedUpdate" message on prop change', () => {
    const { rerender } = render(<ViewEmbedWrapper {...mockProps} />);

    const updatedProps = {
      ...mockProps,
      viewId: "updated-view-id",
      timeRange: "1 hour",
    };

    rerender(<ViewEmbedWrapper {...updatedProps} />);

    expect(mockPostMessage).toHaveBeenCalledWith(
      JSON.stringify({
        messageType: "viewEmbedUpdate",
        viewId: "updated-view-id",
        deviceIds: ["device1", "device2"],
        dataSrcUrl: "https://embed.formant.io",
        authToken: "test-auth-token",
        currentDate: new Date("2024-10-21T00:00:00Z").toISOString(),
        timeRange: "1 hour",
        aggregation: "1d",
        aggregateStartDate: new Date("2024-10-20T00:00:00Z").toISOString(),
        aggregateEndDate: new Date("2024-10-21T00:00:00Z").toISOString(),
        themeOverride: {
          "formant-color-primary-white": "#000000",
          "formant-color-primary-silver": "#1F1F1F",
        },
        viewTags: undefined,
        apiBaseUrl: "https://api.formant.io",
      }),
      "*"
    );
  });
});

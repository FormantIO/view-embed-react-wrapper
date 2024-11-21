import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { ViewEmbedWrapper } from "../src/ViewEmbedWrapper";
import { EmbedWithHooks } from "./embedWithHooks";
import { useAuthToken } from "./useAuthToken";

jest.mock("../ViewEmbedWrapper", () => ({
  ViewEmbedWrapper: jest.fn(() => (
    <div data-testid="view-embed-wrapper">ViewEmbedWrapper</div>
  )),
}));

jest.mock("./useAuthToken");

const mockedUseAuthToken = useAuthToken as jest.MockedFunction<
  typeof useAuthToken
>;

describe("EmbedWithHooks Component", () => {
  const defaultProps = {
    viewId: "test-view-id",
    deviceIds: ["device1", "device2"],
    timeRange: "30 minutes",
    currentDate: new Date("2024-10-21T00:00:00Z"),
    aggregation: "1d",
    aggregateStartDate: new Date("2024-10-20T00:00:00Z"),
    aggregateEndDate: new Date("2024-10-21T00:00:00Z"),
    dataSrcUrl: "https://embed.formant.io",
    serviceAccountEmail: "test@example.com",
    serviceAccountPassword: "password",
    apiBaseUrl: "https://api.formant.io",
    authScope: { tags: { role: ["admin"] } },
    roleName: "administrator"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders "Unauthorized" when both providedAuthToken and provisionedAuthToken are missing', () => {
    mockedUseAuthToken.mockReturnValue("");

    render(<EmbedWithHooks {...defaultProps} />);

    expect(screen.getByText("Unauthorized.")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Enter a valid authentication token, or enter a serviceAccountEmail, serviceAccountPassword, authScope and roleName/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Embed a Formant view in an external site")
    ).toBeInTheDocument();
  });

  it("renders ViewEmbedWrapper when providedAuthToken is available", () => {
    render(<EmbedWithHooks {...defaultProps} providedAuthToken="test-token" />);

    expect(screen.getByTestId("view-embed-wrapper")).toBeInTheDocument();
  });

  it("renders ViewEmbedWrapper when provisionedAuthToken is available", () => {
    mockedUseAuthToken.mockReturnValue("provisioned-token");

    render(<EmbedWithHooks {...defaultProps} />);

    expect(screen.getByTestId("view-embed-wrapper")).toBeInTheDocument();
  });

  it("renders pageLayoutAboveContent and pageLayoutBelowContent when provided", () => {
    render(
      <EmbedWithHooks
        {...defaultProps}
        pageLayoutAboveContent={
          <div data-testid="above-content">Above Content</div>
        }
        pageLayoutBelowContent={
          <div data-testid="below-content">Below Content</div>
        }
      />
    );

    expect(screen.getByTestId("above-content")).toBeInTheDocument();
    expect(screen.getByTestId("below-content")).toBeInTheDocument();
  });

  it("passes the correct props to ViewEmbedWrapper", () => {
    render(<EmbedWithHooks {...defaultProps} providedAuthToken="test-token" />);

    expect(ViewEmbedWrapper).toHaveBeenCalledWith(
      expect.objectContaining({
        viewId: "test-view-id",
        deviceIds: ["device1", "device2"],
        authToken: "test-token",
        currentDate: defaultProps.currentDate,
        aggregateStartDate: defaultProps.aggregateStartDate,
        aggregateEndDate: defaultProps.aggregateEndDate,
        aggregation: "1d",
        timeRange: "30 minutes",
        themeOverride: undefined,
        dataSrcUrl: "https://embed.formant.io",
        viewTags: undefined,
      }),
      {}
    );
  });

  it("transforms numeric aggregateStartDate and aggregateEndDate to Date objects", () => {
    render(
      <EmbedWithHooks
        {...defaultProps}
        // @ts-ignore
        aggregateStartDate={1672531200000} // equivalent to 2023-01-01T00:00:00Z
        // @ts-ignore
        aggregateEndDate={1672617600000} // equivalent to 2023-01-02T00:00:00Z
        providedAuthToken="test-token"
      />
    );

    expect(ViewEmbedWrapper).toHaveBeenCalledWith(
      expect.objectContaining({
        aggregateStartDate: new Date(1672531200000),
        aggregateEndDate: new Date(1672617600000),
      }),
      {}
    );
  });
});

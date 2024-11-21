import { act, renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuthToken } from "./useAuthToken";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("jwt-decode", () => jest.fn());
// @ts-ignore
const mockedJwtDecode = jwtDecode as jest.MockedFunction<typeof jwtDecode>;

describe("useAuthToken Hook", () => {
  const mockProps = {
    hasAuthToken: false,
    serviceAccountEmail: "test@example.com",
    serviceAccountPassword: "password",
    apiBaseUrl: "https://api.example.com",
    authScope: { tags: { role: ["admin"] } },
    roleName: "administrator"
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("provisions an auth token when hasAuthToken is false and credentials are provided", async () => {
    const mockResponse = { data: { accessToken: "test-token" } };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);

    const { result } = renderHook(() => useAuthToken(mockProps));

    await waitFor(() => expect(result.current).toBe("test-token"));

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "https://api.example.com/v1/admin/auth/login-embed",
      {
        email: "test@example.com",
        password: "password",
        scope: { tags: { role: ["admin"] } },
        roleName: "administrator"
      }
    );
  });

  it("does not provision a token when hasAuthToken is true", () => {
    const { result } = renderHook(() =>
      useAuthToken({ ...mockProps, hasAuthToken: true })
    );

    expect(mockedAxios.post).not.toHaveBeenCalled();
    expect(result.current).toBe("");
  });

  it("sets the authToken to an empty string when credentials are missing", () => {
    const { result } = renderHook(() =>
      useAuthToken({
        ...mockProps,
        serviceAccountEmail: "",
        serviceAccountPassword: "",
      })
    );

    expect(mockedAxios.post).not.toHaveBeenCalled();
    expect(result.current).toBe("");
  });

  it("checks for token expiration and re-provisions the token", async () => {
    const mockToken = "expired-token";
    const mockResponse = { data: { accessToken: "new-token" } };
    const expiredJwt = { exp: Math.floor(Date.now() / 1000) - 10 };
    mockedAxios.post.mockResolvedValueOnce(mockResponse);
    mockedJwtDecode.mockReturnValue(expiredJwt);

    jest.useFakeTimers();

    const { result } = renderHook(() => useAuthToken(mockProps));

    await waitFor(() => expect(result.current).toBe("test-token"));

    act(() => {
      result.current = mockToken;
    });

    act(() => {
      jest.advanceTimersByTime(60000);
    });

    await waitFor(() => expect(result.current).toBe("new-token"));

    expect(mockedJwtDecode).toHaveBeenCalledWith(mockToken);
    expect(mockedAxios.post).toHaveBeenCalledTimes(2);

    jest.useRealTimers();
  });

  it("handles jwtDecode errors gracefully", () => {
    mockedJwtDecode.mockImplementation(() => {
      throw new Error("Invalid token");
    });

    const { result } = renderHook(() =>
      useAuthToken({ ...mockProps, hasAuthToken: false })
    );

    expect(result.current).toBe("");
  });
});

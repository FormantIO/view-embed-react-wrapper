import { act, renderHook, waitFor } from "@testing-library/react";
import { jwtDecode } from "jwt-decode";
import { useAuthToken } from "./useAuthToken";

jest.mock("jwt-decode", () => ({ jwtDecode: jest.fn() }));
const mockedJwtDecode = jwtDecode as jest.MockedFunction<typeof jwtDecode>;

const mockFetch = jest.fn();
global.fetch = mockFetch as unknown as typeof fetch;

const ok = (accessToken: string) => ({
  ok: true,
  status: 200,
  json: async () => ({ accessToken }),
});

describe("useAuthToken Hook", () => {
  const mockProps = {
    hasAuthToken: false,
    serviceAccountEmail: "test@example.com",
    serviceAccountPassword: "password",
    apiBaseUrl: "https://api.example.com",
    authScope: { tags: { role: ["admin"] } },
    roleId: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("provisions a token via POST login-embed with the identical request shape", async () => {
    mockFetch.mockResolvedValueOnce(ok("test-token"));

    const { result } = renderHook(() => useAuthToken(mockProps));

    await waitFor(() => expect(result.current).toBe("test-token"));

    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.example.com/v1/admin/auth/login-embed",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "test@example.com",
          password: "password",
          scope: { tags: { role: ["admin"] } },
          roleId: undefined,
        }),
      },
    );
  });

  it("sends roleId when provided", async () => {
    mockFetch.mockResolvedValueOnce(ok("test-token"));

    renderHook(() => useAuthToken({ ...mockProps, roleId: "role-123" }));

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    const body = JSON.parse(mockFetch.mock.calls[0][1].body);
    expect(body.roleId).toBe("role-123");
  });

  it("does not provision a token when hasAuthToken is true", () => {
    const { result } = renderHook(() =>
      useAuthToken({ ...mockProps, hasAuthToken: true }),
    );

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.current).toBe("");
  });

  it("does not provision a token when credentials are missing", () => {
    const { result } = renderHook(() =>
      useAuthToken({
        ...mockProps,
        serviceAccountEmail: "",
        serviceAccountPassword: "",
      }),
    );

    expect(mockFetch).not.toHaveBeenCalled();
    expect(result.current).toBe("");
  });

  it("leaves authToken empty on a non-2xx response without throwing (response.ok guard)", async () => {
    const errSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const jsonSpy = jest.fn();
    mockFetch.mockResolvedValueOnce({ ok: false, status: 401, json: jsonSpy });

    const { result } = renderHook(() => useAuthToken(mockProps));

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current).toBe("");
    expect(jsonSpy).not.toHaveBeenCalled();
    expect(errSpy).toHaveBeenCalledWith(
      ":: Failed to provision auth token",
      401,
    );
    errSpy.mockRestore();
  });

  it("re-provisions the token when the current one has expired", async () => {
    jest.useFakeTimers();
    mockFetch
      .mockResolvedValueOnce(ok("first-token"))
      .mockResolvedValueOnce(ok("second-token"));
    mockedJwtDecode.mockReturnValue({
      exp: Math.floor(Date.now() / 1000) - 10,
    } as never);

    const { result } = renderHook(() => useAuthToken(mockProps));

    await waitFor(() => expect(result.current).toBe("first-token"));

    await act(async () => {
      jest.advanceTimersByTime(60000);
      await Promise.resolve();
    });

    await waitFor(() => expect(result.current).toBe("second-token"));
    expect(mockFetch).toHaveBeenCalledTimes(2);

    jest.useRealTimers();
  });

  it("does not crash when jwtDecode throws on the expiry check", async () => {
    jest.useFakeTimers();
    mockFetch.mockResolvedValueOnce(ok("first-token"));
    mockedJwtDecode.mockImplementation(() => {
      throw new Error("Invalid token");
    });
    const errSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    const { result } = renderHook(() => useAuthToken(mockProps));
    await waitFor(() => expect(result.current).toBe("first-token"));

    await act(async () => {
      jest.advanceTimersByTime(60000);
      await Promise.resolve();
    });

    expect(result.current).toBe("first-token");
    errSpy.mockRestore();
    jest.useRealTimers();
  });
});

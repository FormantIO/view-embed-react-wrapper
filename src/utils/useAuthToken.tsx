import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface Props {
  hasAuthToken: boolean;
  serviceAccountEmail?: string;
  serviceAccountPassword?: string;
  apiBaseUrl?: string;
  tagSets?: Record<string, string>;
}

export const useAuthToken = (props: Props) => {
  const {
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl,
    tagSets,
    hasAuthToken,
  } = props;

  const [authToken, setAuthToken] = useState<string>("");

  const provisionAuthToken = async () => {
    const response = await axios.post(
      `${apiBaseUrl}/v1/admin/auth/login-embed`,
      {
        email: serviceAccountEmail,
        password: serviceAccountPassword,
        tags: tagSets || {},
      }
    );

    setAuthToken(response.data.accessToken);
  };

  useEffect(() => {
    if (
      !hasAuthToken &&
      serviceAccountEmail &&
      serviceAccountPassword &&
      apiBaseUrl
    ) {
      provisionAuthToken();
    } else {
      setAuthToken("");
    }
  }, [hasAuthToken, serviceAccountEmail, serviceAccountPassword, apiBaseUrl]);

  useEffect(() => {
    const checkTokenExpiration = () => {
      const delay = 60000;
      const timer = setInterval(() => {
        const currentDtm = Math.round(new Date().getTime() / 1000);

        if (authToken) {
          try {
            const decodedToken: { exp: number } = jwtDecode(authToken);

            if (decodedToken.exp && currentDtm >= decodedToken.exp) {
              clearInterval(timer);
              provisionAuthToken();
            }
          } catch (error) {
            console.error(":: Error decoding token", error);
          }
        }
      }, delay);

      return () => clearInterval(timer);
    };

    if (authToken) {
      checkTokenExpiration();
    }
  }, [authToken]);

  return authToken;
};

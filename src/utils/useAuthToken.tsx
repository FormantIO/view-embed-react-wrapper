import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface Props {
  serviceAccountEmail: string;
  serviceAccountPassword: string;
  apiBaseUrl: string;
}

export const useAuthToken = (props: Props) => {
  const {
    serviceAccountEmail,
    serviceAccountPassword,
    apiBaseUrl = "https://api.formant.io",
  } = props;

  const [authToken, setAuthToken] = useState<string>("");
  const [axiosInstance] = useState<AxiosInstance>(
    axios.create({
      baseURL: apiBaseUrl,
      withCredentials: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
    })
  );

  const provisionAuthToken = async () => {
    const response = await axiosInstance.post("/v1/admin/auth/login-embed", {
      email: serviceAccountEmail,
      password: serviceAccountPassword,
    });
    return response.data.accessToken;
  };

  const fetchAuthToken = async () => {
    const token = await provisionAuthToken();
    setAuthToken(token);
  };

  useEffect(() => {
    fetchAuthToken();
  }, []);

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
              fetchAuthToken();
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

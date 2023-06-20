// useAuth.ts
import { useState, useEffect } from "react";

interface UseAuthState {
  token: string | null;
  setAccessToken: (token: string) => void;
}

const useAuth = (): UseAuthState => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  const setAccessToken = (token: string) => {
    localStorage.setItem("access_token", token);
  };

  return {
    token,
    setAccessToken,
  };
};

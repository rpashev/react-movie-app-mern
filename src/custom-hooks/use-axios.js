import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const useAxios = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (params) => {
    setError("");
    setIsLoading(true);

    try {
      const result = await axios.request(params);
      return result.data;
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { error, isLoading, sendRequest };
};

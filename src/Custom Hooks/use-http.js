import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

export const useAxios = () => {
  const [response, setResponse] = useState();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const sendRequest = useCallback(async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { response, error, isLoading, sendRequest };
};

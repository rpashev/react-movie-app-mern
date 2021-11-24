import { useState, useCallback } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

export const useAxios = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async (params) => {
      setError("");
      setIsLoading(true);

      try {
        const result = await axios.request(params);
        // console.log(result)
        return result.data;
      } catch (error) {
        console.log(error);
        console.log(error.response);
        setError(error.response?.data?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { error, isLoading, sendRequest };
};

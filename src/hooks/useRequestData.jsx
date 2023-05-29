import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../constants/contants";

export const useRequestData = () => {
  const [isLoading, setIsLoading] = useState(false);

  const requestData = async (path, method, headers, body) => {
    try {
      setIsLoading(true);
      const data = await axios.request({
        url: BASE_URL + "/" + path,
        method: method,
        headers: headers,
        data: body,
      });
      setIsLoading(false);
      return data;
    } catch (error) {
      setIsLoading(false);
      return error.response;
    }
  };

  return { isLoading, requestData };
};

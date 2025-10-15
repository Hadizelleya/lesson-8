import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchHook = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        const data = res.data;
        setIsLoading(false);
        setData(data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, error };
};

import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url, initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async (url) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(url, {
          signal: abortController.signal,
        });
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err);
          setIsLoading(false);
        }
      }
    };
    fetchData(url);
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}

import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetData = (url) => {
  const [state, setState] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    const customFetch = async () => {
      try {
        const res = await axios.get(url);
        if (res.data) setState((p) => ({ ...p, data: res.data }));
      } catch (error) {
        setState((p) => ({
          ...p,
          error: error?.data?.message ?? error.message,
        }));
      }
    };

    customFetch();
  }, []);

  return state;
};

export default useGetData;

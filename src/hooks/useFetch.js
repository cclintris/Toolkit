import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState({ data: "", loading: false });
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setResult({
      data: "",
      loading: true,
    });
    fetch(url)
      .then((res) => res.text())
      .then((res) => {
        if (isCurrent.current) {
          setResult({
            data: res,
            loading: false,
          });
        }
      });

    // return () => {
    //   setResult({
    //     data: "",
    //     loading: false,
    //   });
    // };
  }, [url]);

  return result;
};

export default useFetch;

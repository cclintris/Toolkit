import { useState } from "react";

const useForm = (initValues) => {
  const [values, setValues] = useState(initValues);

  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useForm;

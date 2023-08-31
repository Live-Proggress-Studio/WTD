import { useState, ChangeEvent } from "react";

interface Values {
  [key: string]: string;
}

function useForm(initialValues: Values) {
  const [values, setValues] = useState<Values>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export { useForm };

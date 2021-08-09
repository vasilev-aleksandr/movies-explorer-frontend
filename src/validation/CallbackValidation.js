import React, { useState} from "react";
import validation from "./validation";

function CallbackValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    console.log(name, value)
    const error = validation(name, value);
    setErrors(validation(name, value));
    setValues({ ...values, [name]: value });
    if (Object.keys(error).length === 0) {
      setIsValid(target.closest("form").checkValidity());
    }
  };

  const resetForm = React.useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    onFocus,
    isFocused,
    setValues,
  };
}

export default CallbackValidation;
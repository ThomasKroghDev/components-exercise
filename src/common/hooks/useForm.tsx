import { useState } from 'react';

interface ValidationErrors<T> {
  [key: string]: T;
}

export function useForm(
  initialState = {},
  validations = [] as any[],
  onSubmit: () => Promise<void>
) {
  function validate(validations: any[], values: Record<string, unknown>) {
    const errors: ValidationErrors<string> = {};

    validations.forEach((validation) => {
      const result = validation(values);
      if (typeof result === 'object') {
        Object.assign(errors, result);
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState<{ [x: string]: string }>(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(initialIsValid);
  const [touched, setTouched] = useState<{ [x: string]: boolean }>(
    initialState
  );
  const changeHandler = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    const newValues = { ...values, [name]: value };
    const newlyTouched = { ...touched, [name]: true };
    const { isValid, errors } = validate(validations, newValues);
    setIsValid(isValid); // set the isValid state based on the latest validation results
    setValues(newValues);
    setErrors(errors);
    setTouched(newlyTouched);
  };

  const submitHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    void onSubmit();
  };
  return { values, changeHandler, isValid, errors, touched, submitHandler };
}

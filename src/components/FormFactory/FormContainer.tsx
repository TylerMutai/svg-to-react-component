import React, { useCallback, useMemo, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import FormContext, {
  FormContainerProps,
  FormValidator,
} from "../../utils/contexts/formContext";

function FormContainer<T extends FieldValues>(
  props: Readonly<FormContainerProps<T>>,
): React.JSX.Element {
  const {
    className = "",
    onSubmit,
    initialValues = {},
    children,
    error,
    mode = "onSubmit",
    validationOptions,
  } = props;
  const { control, register, handleSubmit, setValue, watch, getValues } =
    useForm<T>({
      shouldUseNativeValidation: true,
      criteriaMode: "all",
    });
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const _handleSubmitTrue = useCallback(
    async (data: T) => {
      if (validationOptions) {
        const _errors: { [key: string]: string[] } = {};
        const voKeys = Object.keys(validationOptions);
        voKeys.forEach((k) => {
          const validator: FormValidator<T> = validationOptions[k];
          const _res = validator(`${data[k] || ""}`, data);
          if (_res.length) {
            _errors[k] = _res;
          }
        });
        if (Object.keys(_errors).length) {
          alert(
            "Some errors were encountered when submitting form. Please check then try again.",
          );
          setErrors(_errors);
          return;
        }
        setErrors({});
      }
      onSubmit(data);
    },
    [onSubmit, validationOptions],
  );
  const values = useMemo(
    () => ({
      initialValues,
      errors,
      register,
      setValue,
      watch,
      getValues,
      control,
    }),
    [errors, initialValues, control, register, setValue, watch, getValues],
  );
  return (
    <FormContext.Provider value={values}>
      <form
        onBlur={
          mode === "onTouched" ? handleSubmit(_handleSubmitTrue) : undefined
        }
        onSubmit={handleSubmit(_handleSubmitTrue)}
        className={className}
      >
        {error ? (
          <div className="flex items-center gap-5 w-full p-7 bg-red-100">
            {error}
          </div>
        ) : null}
        {children}
      </form>
    </FormContext.Provider>
  );
}

export default FormContainer;

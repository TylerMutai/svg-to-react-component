import { Alert } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineCancel } from "react-icons/md";
import FormContext, {
  FormContainerProps,
  FormValidator,
} from "../../../../utils/contexts/formContext";
import CustomIcon from "../../icons/CustomIcon";
import showAlertModal from "../../layout/AlertModal/AlertModal";

function FormContainer<T>(props: Readonly<FormContainerProps<T>>): JSX.Element {
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
          showAlertModal({
            type: "error",
            title: "Validation Errors",
            description:
              "Some errors were encountered when submitting form. Please check then try again.",
          }).then();
          setErrors(_errors);
          return;
        }
        setErrors({});
      }
      onSubmit(data);
    },
    [onSubmit, validationOptions]
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
    [errors, initialValues, control, register, setValue, watch, getValues]
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
          <Alert
            icon={<CustomIcon size="small" as={MdOutlineCancel} />}
            severity="error"
          >
            {error}
          </Alert>
        ) : null}
        {children}
      </form>
    </FormContext.Provider>
  );
}

export default FormContainer;

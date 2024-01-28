"use client";

import React from "react";
import {
  Control,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface FormContextProps<T> {
  initialValues: Record<string, T>;
  errors?: { [key: string]: string[] };
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  watch: UseFormWatch<T>;
  getValues: UseFormGetValues<T>;
  control: Control<T>;
}

export type FormValidator<T> = (value: string, formValues?: T) => string[];

export interface FormContainerProps<T> {
  className?: string;
  initialValues?: Record<string, T>;
  validationOptions?: {
    [key in keyof T]: FormValidator<T>;
  };
  error?: string;
  children: any;
  mode?: "onSubmit" | "onWatch" | "onTouched";
  onSubmit: (data: T) => void;
  errors?: { [key: string]: string[] };
}

const FormContext = React.createContext<FormContextProps<any>>({
  initialValues: {},
  errors: {},
  register: (() => {}) as any,
  setValue: (() => {}) as any,
  watch: (() => {}) as any,
  getValues: (() => {}) as any,
  control: {} as any,
});

export default FormContext;

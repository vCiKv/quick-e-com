'use client'
import { Formik, Form, Field } from "formik";
import {TextField,IconButton,InputAdornment} from "@mui/material";
import {Visibility,VisibilityOff} from "@mui/icons-material";
import { useState } from "react";
import Schema from "./schema";
import { FormFieldType, FormikFormFieldType, InitializeType, ValidationType } from "@/types/form";
import useToggle from "@/hooks/useToggle";
const PasswordAdornment = () => {
  const [showPassword,togglePassword] = useToggle();
  // const showPassword = passwordState.get();
  const handleClickShowPassword = () => {
    togglePassword();
    setTimeout(() => {
      togglePassword();
    }, 20000);
  };
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        // onMouseDown={handleMouseDownPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};
const UnitAdornment = ({ unit }: { unit: string }) => {
  return (
    <InputAdornment className="text-color-primary" position={"start"}>
      {unit}
    </InputAdornment>
  );
};
const FormField = (props: FormikFormFieldType) => {
  const [displayPassword,togglePassword] = useToggle();
  const { name, type, label, errors, value } = props;

  const showPassword = type === "password" ? displayPassword : false;
  const disabled = props.disabled ?? false;
  const hasError = value && errors ? true : false;
  const hasText = props.helperText ?? "";
  const adornment = props.adornment ?? null;
  let adornments = {};
  if (type === "password") {
    adornments = {
      endAdornment: <PasswordAdornment />,
    };
  } else if (adornment) {
    adornments = {
      startAdornment: <UnitAdornment unit={adornment} />,
    };
  }

  return (
    <Field
      margin="normal"
      error={hasError}
      as={TextField}
      type={showPassword ? "text" : type}
      name={name}
      label={label}
      fullWidth
      disabled={disabled}
      helperText={hasError ? errors : hasText}
      InputProps={adornments}
    />
  );
};
export const BasicForm = (props: {
  noTitle?: boolean;
  disabled?: boolean;
  title?: string;
  additionalData?: {};
  validateType?: ValidationType;
  buttonText?: string;
  data: FormFieldType[];
  submit: (...args: any[]) => void;
}) => {
  const [hasSubmittedState,setHasSubmittedState] = useState(false);
  const hasSubmitted = hasSubmittedState;
  const formData = props.data;
  const initialize = () => {
    let initialized:InitializeType<FormFieldType> = {};
    formData.forEach((items) => {
      Object.keys(items).forEach((i) => {
        if (i === "type") {
          initialized =
            items[i] === "hidden"
              ? { ...initialized, [items["name"]]: items["label"] }
              : { ...initialized, [items["name"]]: "" };
        }
      });
    });
    return initialized;
  };
  const initialValues = initialize();
  const validateType = props.validateType ? Schema(props.validateType) : "";
  const submitForm = props.submit;
  const disabled = props.disabled ?? false;
  const noTitle = props.noTitle ?? false;
  return (
    <div className="user-input">
      {!noTitle && <h1 className="full-stop">{props.title}</h1>}
      <Formik
        initialValues={initialValues}
        validationSchema={validateType}
        onSubmit={async (values) => {
          //setSubmitting(true)
          //hasSubmittedState.set(false)
          const addData = props.additionalData ?? null;
          addData
            ? await submitForm({ ...values, ...addData })
            : await submitForm(values);
          //setSubmitting(false)
        }}
      >
        {({ isSubmitting, errors, values, isValid }) => (
          <Form>
            {formData.map((input) => (
              <FormField
                key={input.name}
                name={input.name}
                type={input.type}
                adornment={input.adornment}
                disabled={input.disabled}
                label={input.label}
                helperText={input.helperText}
                value={values[input.name]}
                errors={errors[input.name]}
              />
            ))}
            <div className="center-content">
              <button
                onClick={() => setHasSubmittedState(true)}
                className={`button button-primary button-wide-mobile ${
                  isSubmitting ? "is-loading" : ""
                }`}
                type="submit"
                disabled={isSubmitting || disabled}
              >
                {props.buttonText ?? "Submit"}
              </button>
              <br></br>
              {hasSubmitted && !isValid && (
                <span
                  style={{ display: "block", margin: "10px 0" }}
                  className="text-color-error my-2"
                >
                  please complete the form
                </span>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

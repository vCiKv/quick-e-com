import { ValidationType } from "@/types/form";
import * as Yup from "yup";

const password = Yup.string()
  .min(6, "Password Too Short")
  .required("Password is Required");

const email = Yup.string()
  .email("E-mail is not valid")
  .required("E-mail is Required")
  .lowercase()
  .trim();
const amount = Yup.number()
  .required("amount required")
  .moreThan(10, "amount cannot be less than $10")
  .integer("must be a whole number")
  .positive("must be greater than zero");
const getName = (name = "name") => {
  return Yup.string()
    .min(3, `${name} Too Short`)
    .max(24, `${name} Too Long`)
    .required(`Please Add Your ${name}`)
    .matches(/^[A-Za-z '-]+$/, "invalid character")
    .trim()
    .lowercase();
};
const Schema = (
  type:ValidationType
) => {
  const changePassword = Yup.object().shape({
    password: password,
    newPassword: password,
    confirmNewPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });
  const onlyEmail = Yup.object().shape({
    email: email,
  });
  const referral = Yup.object().shape({
    refBy: Yup.string()
      .min(6, "Not Valid Code")
      .max(6, "Not Valid Code")
      .required("Please Add A Referral Code"),
  });
  const signup = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name Too Short")
      .max(24, "First Name Too Long")
      .required("Please Add Your First Name")
      .matches(/^[A-Za-z '-]+$/, "invalid character")
      .trim()
      .lowercase(),
    lastName: Yup.string()
      .min(3, "Last Name Too Short")
      .max(24, "Last Name Too Long")
      .required("Please Add Your Last Name")
      .matches(/^[A-Za-z '-]+$/, "invalid character")
      .trim()
      .lowercase(),
    email: Yup.string()
      .email("E-mail is not valid")
      .required("E-mail is Required")
      .lowercase()
      .trim(),
    password: Yup.string()
      .min(6, "Password Too Short")
      .required("Password is Required")
      .trim(),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const login = Yup.object().shape({
    email: email,
    password: password,
  });
  const userPlan = Yup.object().shape({
    email: email,
    roi: Yup.number()
      .required("roi Required")
      .moreThan(90, "cannot be more than 100"),
    amount: amount,
  });
  const btcAddress = Yup.object().shape({
    btcAddress: Yup.string()
      .required("invalid address")
      .min(10, "invalid address")
      .max(50, "invalid address"),
  });
  const planShape = Yup.object().shape({
    amount: amount,
    months: Yup.number()
      .optional()
      .integer("must be a whole number")
      .positive("must be greater than zero"),
  });
  const newPassword = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password Too Short")
      .required("Password is Required")
      .trim(),
    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  const getValidationType = {
    login,
    signup,
    changePassword,
    referral,
    onlyEmail,
    userPlan,
    btcAddress,
    planShape,
    plan:planShape,
    newPassword
  };
  return getValidationType[type] ?? Yup.object().shape({});

};
export default Schema;


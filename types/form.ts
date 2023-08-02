export interface EmailType {
  email: string;
}
export interface PasswordType {
  password: string;
  confirmPassword: string;
}
export interface NameTypes {
  firstName: string;
  lastName: string;
  middleName?: string;
}
export interface FormFieldType {
  name: string;
  type: string;
  label?: string;
  disabled?: boolean | string;
  helperText?: string;
  adornment?: string;
}
export type InitializeType<T extends { name: string }> = {
  [K in T["name"]]: string | number | undefined;
};
export type IDType<T extends {}> = T & {id:string}|T & {uid:string}

export type FormikFormFieldType = FormFieldType & { errors: any; value: any };
export type ValidationType =
  | "login"
  | "signup"
  | "changePassword"
  | "referral"
  | "onlyEmail"
  | "userPlan"
  | "btcAddress"
  | "planShape"
  | "plan"
  | "newPassword";

export type SigninType = EmailType & Omit<PasswordType, "confirmPassword">;
export type SignupType = EmailType & PasswordType & NameTypes;
export type ChangePasswordType = PasswordType & { newPassword: string };
export type UserPlanType = EmailType & { roi: number; amount: number };
export type ConfirmCodeType = EmailType & { id: string; refBy?: string };

import * as Yup from "yup";
import { FormikConfig, FormikValues } from "formik";

const MIN_CHARACTERS = 2;
const HEX_REG_EXP = /^#([0-9a-f]{3}){1,2}$/i;

export function addColorFormikForm(
  handleSubmit: () => void
): FormikConfig<FormikValues> {
  return {
    initialValues: {
      name: "",
      hex: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(MIN_CHARACTERS).required("*name is required"),
      hex: Yup.string()
        .min(MIN_CHARACTERS)
        .matches(HEX_REG_EXP, "*incorrect hex format")
        .required("*hex is required"),
    }),
    onSubmit: handleSubmit,
  };
}

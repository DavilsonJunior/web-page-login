import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("E-mail invalido").required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

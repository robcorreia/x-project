/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/naming-convention */
import { yupResolver } from "@hookform/resolvers/yup";
import { SignIn } from "phosphor-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Form, LoginContainer } from "./styles";

interface LoginForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .required("Digite um e-mail válido.")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "Deve ter no mínimo 6 caracteres."),
  })
  .required();

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: LoginForm) => {
    navigate("/home");
  };

  return (
    <LoginContainer>
      <h2>Informe seus dados</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Digite seu e-mail"
          {...register("email")}
          // supportMessage=
        />
        {errors.email?.message && (
          <span className="supportMessage">{errors.email.message}</span>
        )}
        <input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message && (
          <span className="supportMessage">{errors.password.message}</span>
        )}
        <button type="submit">
          Acessar <SignIn size={16} weight="bold" />
        </button>
      </Form>
    </LoginContainer>
  );
}

export default Login;

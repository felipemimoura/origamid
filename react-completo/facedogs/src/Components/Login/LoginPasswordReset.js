import React, { useEffect, useState } from "react";
import Input from "../Forms/Inputs";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_RESET } from "../../api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router";
import Head from "../../Helper/Head";

export default function LoginPasswordReset() {
  const { login, setLogin } = useState();
  const [key, setKey] = useState();
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.localStorage.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/");
    }
  }

  return (
    <div>
       <Head title="Reset a senha"/>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </div>
  );
}

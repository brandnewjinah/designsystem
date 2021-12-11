import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Input } from "./Input";

//components
type FormValues = {
  email: string;
  password: string;
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <Container>
      <Login>
        <h2>{isSignup ? "Create an account" : "Sign In"}</h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <Input name="email" />
          <Input name="password" />
          <button>submit</button>
        </form>
      </Login>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

const Login = styled.article`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  background-color: #fff;
  padding: 1rem;
`;

export default Auth;

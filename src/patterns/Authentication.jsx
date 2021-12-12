import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Button } from "../components/Buttons/Button";
import { Input } from "../components/Input";
import { blue, fontSize } from "../components/Token";

//util
import { userValidation } from "../utils/validate";

//components

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const userInput = { ...user };
    userInput[e.target.name] = e.target.value;
    setUser(userInput);
  };

  const handleSwitch = () => {
    setIsSignup((prev) => !prev);
    isSignup
      ? setUser({ email: "", password: "" })
      : setUser({ email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = userValidation(user);

    setErrors(errors || {});
    if (errors) return;
    console.log("submitted");
  };

  return (
    <Container>
      <Login>
        <Header>
          <h2>{isSignup ? "Create an account" : "Sign In"}</h2>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Email"
            name="email"
            value={user.email}
            error={errors.email}
            handleChange={handleChange}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={user.password}
            error={errors.password}
            handleChange={handleChange}
          />
          {isSignup && (
            <>
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={user.confirmPassword}
                error={errors.confirmPassword}
                handleChange={handleChange}
              />
            </>
          )}
          <Button
            label={isSignup ? "Sign Up" : "Sign In"}
            color={blue[400]}
            variant="primary"
            shape="rounded"
            labelColor="#fff"
            handleClick={() => console.log("clicked")}
          />
        </Form>
        <Button
          label={
            isSignup
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"
          }
          variant="tertiary"
          color={blue[400]}
          handleClick={handleSwitch}
        />
      </Login>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2em;
`;

const Header = styled.header`
  text-align: center;

  h2 {
    font-size: ${fontSize.lg2};
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;
`;

export default Auth;

import React, { ChangeEvent, FC, useState } from "react";

//import styles and assets
import styled from "styled-components";
import { Eye, EyeOff } from "../assets/Icons";
import { fontSize, neutral } from "./Token";

interface Props {
  label?: string;
  name: string;
  value?: string;
  required?: boolean;
  error?: string;
  type?: "text" | "password";
  prefix?: string;
  placeholder?: string;
  id?: any;
  small?: boolean;
  shape?: "underline" | "pill" | "rounded";
  margin?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

type StyleProps = {
  shape?: string | undefined;
  margin?: string | undefined;
};

export const Input: FC<Props> = ({
  label,
  value,
  required,
  type,
  name,
  error,
  small,
  shape,
  margin,
  placeholder,
  handleChange,
  ...rest
}) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <InputContainer margin={margin} shape={shape}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && " *"}
        </label>
      )}
      {type === "password" && (
        <div className="pw" onClick={() => setIsPassword(!isPassword)}>
          {isPassword ? (
            <Eye width={20} height={20} color="#000" stroke={1} />
          ) : (
            <EyeOff width={20} height={20} color="#000" stroke={1} />
          )}
        </div>
      )}

      <InputTag
        placeholder={placeholder}
        shape={shape}
        id={name}
        className={`${small && "small"} ${error && "error"}`}
        type={type === "password" && isPassword ? "password" : "text"}
        name={name}
        value={value}
        aria-required={required}
        aria-invalid={!!error}
        onChange={handleChange}
        {...rest}
      />

      {error && <p className="helper">{error}</p>}
    </InputContainer>
  );
};

export const FloatingInput: FC<Props> = ({
  label,
  value,
  required,
  type,
  name,
  error,
  margin,
  handleChange,
}) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <FloatingInputContainer margin={margin}>
      <input
        id={name}
        className={error ? "error" : ""}
        type={type === "password" && isPassword ? "password" : "text"}
        name={name}
        value={value}
        placeholder=" "
        aria-label={name}
        aria-required={required}
        aria-invalid={error ? true : false}
        onChange={handleChange}
      />
      <label htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      {type === "password" && (
        <div className="pw" onClick={() => setIsPassword(!isPassword)}>
          {isPassword ? (
            <Eye width={20} height={20} color="#000" stroke={1} />
          ) : (
            <EyeOff width={20} height={20} color="#000" stroke={1} />
          )}
        </div>
      )}
      {error && <p className="helper">error message</p>}
    </FloatingInputContainer>
  );
};

const InputContainer = styled.div<StyleProps>`
  position: relative;
  margin: ${(props) => `${props.margin} 0`};

  label {
    font-size: 0.925rem;
    color: ${neutral[400]};
  }

  .error {
    border-top: ${(props) =>
      props.shape === "underline" ? "none" : `1px solid red`};
    border-left: ${(props) =>
      props.shape === "underline" ? "none" : `1px solid red`};
    border-right: ${(props) =>
      props.shape === "underline" ? "none" : `1px solid red`};
    border-bottom: 1px solid red;

    background-color: ${(props) =>
      props.shape === "underline" ? "transparent" : "rgba(255, 0, 0, 0.05)"};
  }

  .small {
    height: 2.25rem;
  }

  .pw {
    position: absolute;
    top: 2.5rem;
    right: 0.75rem;
    display: flex;
    cursor: pointer;
  }

  .helper {
    font-size: 0.7875rem;
    color: red;
    margin: 0.25em 0;
  }
`;

const InputTag = styled.input<StyleProps>`
  width: 100%;
  font-size: ${fontSize.base};
  height: 3rem;
  border-radius: ${(props) =>
    props.shape === "underline" ? "none" : "0.35rem"};
  border-top: ${(props) =>
    props.shape === "underline" ? "none" : `1px solid #d2d2d7`};
  border-left: ${(props) =>
    props.shape === "underline" ? "none" : `1px solid #d2d2d7`};
  border-right: ${(props) =>
    props.shape === "underline" ? "none" : `1px solid #d2d2d7`};
  border-bottom: 1px solid #d2d2d7;
  padding: 0 2.5rem 0 0.875rem;
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 125, 250, 0.6);
    border-radius: 0.35rem;
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.925rem;
    color: ${neutral[200]};
  }
`;

const FloatingInputContainer = styled.div<StyleProps>`
  position: relative;
  margin: ${(props) => `${props.margin} 0`};

  input {
    width: 100%;
    font-size: 1.05rem;
    height: 3.25rem;
    border-radius: 0.35rem;
    border: 1px solid #d2d2d7;
    padding: 1em 0.875rem 0;
    transition: all 0.3s ease-out;
    appearance: none;

    &:focus {
      box-shadow: 0 0 0 4px rgba(0, 125, 250, 0.6);
      outline: none;
    }
  }

  label {
    pointer-events: none;
    position: absolute;
    color: #888;
    top: 0;
    left: 0;
    margin: 0.75em 0 0 0.75em;
    transition: all 0.3s ease-out;
  }

  input:focus + label, 
  //placeholder-shown means input is empty, thus placeholder is shown. So apply the style when placeholder isn't shown, meaning when user typed something in the input field.
  input:not(:placeholder-shown) + label {
    font-size: 0.75rem;
    margin-top: 0.05em;
    left: 0.25rem;
    color: #3951b2;
  }

  .pw {
    position: absolute;
    bottom: 1em;
    right: 0.75em;
    display: flex;
    cursor: pointer;
  }

  .error {
    border: 1px solid red;
    background-color: rgba(255, 0, 0, 0.05);
  }

  .helper {
    font-size: 0.7875rem;
    color: red;
    margin: 0.25em 0;
  }
`;

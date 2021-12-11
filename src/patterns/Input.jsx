import React from "react";
import { useForm } from "react-hook-form";

export const Input = ({ name, ...rest }) => {
  const { register } = useForm();

  return <input {...register(name)} {...rest} />;
};

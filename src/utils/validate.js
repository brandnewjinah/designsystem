export const userValidation = (user) => {
  console.log(user);
  const errors = {};

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (user.email === "") {
    errors.email = "Email address is required";
  } else if (!regex.test(user.email)) {
    errors.email = "This is not a valid email format";
  }

  if (user.password === "") {
    errors.password = "Password is required";
  }

  if (user.password !== user.confirmPassword) {
    errors.confirmPassword = "Password doesn't match";
  }

  return Object.keys(errors).length === 0 ? null : errors;
};

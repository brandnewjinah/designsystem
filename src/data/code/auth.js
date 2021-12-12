export const auth = `
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { userValidation } from "./utils/validate";

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
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={user.confirmPassword}
              error={errors.confirmPassword}
              handleChange={handleChange}
            />
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
`;

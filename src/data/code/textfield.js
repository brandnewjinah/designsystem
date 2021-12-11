export const base = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Label"
        name="label"
        handleChange={handleChange}
      />
    )
`;

export const labelHidden = `
    import { Input } from "components/Input";

    return(
      <Input
        name="label"
        handleChange={handleChange}
        aria-label="label"
      />
    )
`;

export const required = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Label"
        name="label"
        required={true}
        handleChange={handleChange}
      />
    )
`;

export const placeholder = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Label"
        name="label"
        required={true}
        placeholder="e.g. Placeholder"
        handleChange={handleChange}
      />
    )
`;

export const password = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Password"
        name="password"
        type="password"
        handleChange={handleChange}
      />
    )
`;

export const error = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Error"
        name="error"
        aria-invalid={true}
        error="Error message"
        handleChange={handleChange}
      />
    )
`;

export const underline = `
    import { Input } from "components/Input";

    return(
      <Input
        label="Underline"
        name="underline"
        shape="underline"
        placeholder="e.g. Placeholder"
        handleChange={handleChange}
      />
    )
`;

export const floating = `
    import { FloatingInput } from "components/Input";

    return(
      <FloatingInput
        label="Floating Label"
        name="label"
        required={true}
        handleChange={handleChange}
      />
    )
`;

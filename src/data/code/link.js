export const primary = `
    import { Link } from "components/Link";

    return(
      <Link
        label="Primary Link"
        href="#"
      />
    )
`;

export const secondary = `
    import { Link } from "components/Link";

    return(
      <Link
        label="Secondary Link"
        href="#"
        variant="secondary"
      />
    )
`;

export const tertiary = `
    import { Link } from "components/Link";

    return(
      <Link
        label="Tertiary Link"
        href="#"
        variant="tertiary"
      />
    )
`;

export const external = `
    import { Link } from "components/Link";

    return(
      <Link
        label="External Link"
        href="#"
        external={true}
      />
    )
`;

export const disabled = `
    import { Link } from "components/Link";

    return(
      <Link
        label="Disabled Link"
        href="#"
        disabled={true}
      />
    )
`;

export const theme = `
    --themes.js--
    import { neutral, blue, peach } from "./colors";

    export const defaultTheme = {
    primaryColor: blue[400],
    secondaryColor: peach[400],
    neutralHover: neutral[200],
    ...
    };

    --Button.js--
    import { defaultTheme } from "./themes";

    <Button color={defaultTheme.primaryColor}/>
`;

export const implement = `
    import { neutral } from "components/Token";

    <Component
    color={neutral[400]}
    />
`;

export const process = `
    ├── components
    │   └── Token
    │       └── index.js
    │       └── colors.js


    --index.js--
    export * from "./colors";


    --colors.js--
    export const neutral = {
    10: "#ffffff",
    100: "#E7E7EC",
    200: "#C4C4CF",
    300: "#A0A1B2",
    400: "#838494",
    500: "#505165",
    600: "#2A2A43",
    700: "#12143F",
    };

    export const blue = {
    ...
    }

    export const coral = {
    ...
    }
`;

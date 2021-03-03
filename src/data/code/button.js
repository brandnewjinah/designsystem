export const implement = `
    import { TextButton, OutlinedButton, FilledButton, IconButton, } from "components/Input";
    import { Heart } from "assets/Icons";

    <TextButton
    label="Button"
    color="#d35400"
    handleClick={() => console.log("clicked")}
    />

    <OutlinedButton
    label="Outlined Button"
    color="#d35400"
    shape="rounded"
    handleClick={() => console.log("clicked")}
    />

    <FilledButton
    label="Button"
    disabled
    color="#d35400"
    shape="pill"
    icon
    handleClick={() => console.log("clicked")}
    >
    <Heart width={18} height={18} stroke={2} color="#d35400" />
    </FilledButton>  

    <IconButton
    label="Button"
    color="#d35400"
    handleClick={() => console.log("clicked")}
    >
    <Heart width={18} height={18} stroke={2} fill="#fff" ariaHidden={true} />
    </IconButton>
`;

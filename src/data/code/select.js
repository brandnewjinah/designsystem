export const checkbox = `
    import { Checkbox } from "components/Checkbox";

    const [data, setData] = useState({
      one: true,
      two: false,
      three: true,
    });
  
    const handleChange = (e) => {
      const userInput = { ...data };
      userInput[e.target.name] = e.target.checked;
      setData(userInput);
    };

    return(
    <Checkbox
      label="label 1"
      name="one"
      value={data.one}
      checked={data.one}
      onChange={handleChange}
    />
    <Checkbox
      label="label 2"
      name="two"
      value={data.two}
      checked={data.two}
      onChange={handleChange}
    />
    <Checkbox
      label="label 3"
      name="three"
      value={data.three}
      checked={data.three}
      disabled={true}
      onChange={handleChange}
    />
    )
`;

export const radio = `
    import { RadioButton } from "components/RadioButton";

    const [selection, setSelection] = useState("one");

    const handleChange = (e) => {
      setSelection(e.target.value);
    };

    return(
    <Radio
      label="label 1"
      name="group"
      value="one"
      checked={selection === "one"}
      onChange={handleChange}
    />
    <RadioButton
      label="label 2"
      name="group"
      value="two"
      checked={selection === "two"}
      onChange={handleChange}
    />
    <RadioButton
      label="label 3"
      name="group"
      value="three"
      checked={selection === "three"}
      disabled={true}
      onChange={handleChange}
    />
    )
`;

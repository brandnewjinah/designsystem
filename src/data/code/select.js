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

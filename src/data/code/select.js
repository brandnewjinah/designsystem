export const checkbox = `
    import { Checkbox } from "components/Checkbox";

    const [check, setCheck] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);
    const [checkAll, setCheckAll] = useState(false);
  
    const handleCheck = (e) => {
      setCheck(!check);
    };
  
    const handleSelect = (e) => {
      const { name, checked } = e.target;
      setCheckedItems([...checkedItems, name]);
      if (!checked) {
        setCheckedItems(checkedItems.filter((item) => item !== name));
      }
    };
  
    const handleSelectAll = (e) => {
      setCheckAll(!checkAll);
      setCheckedItems(groupData.map((item) => item.name));
      if (checkAll) {
        setCheckedItems([]);
      }
    };

    return (
      <Checkbox
        label="Checkbox"
        name="default"
        checked={check}
        onChange={handleCheck}
      />
      <Checkbox
        label="select all"
        name="all"
        indeterminate={indeterminate}
        checked={checkAll}
        onChange={handleSelectAll}
      />
      {data.map((item) => (
        <Checkbox
          key={item.id}
          label={item.name}
          name={item.name}
          checked={checkedItems.includes(item.name)}
          onChange={handleSelect}
        />
      ))}
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

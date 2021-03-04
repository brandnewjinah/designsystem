export const install = `
    npm i react-select
    npm i @types/react-select 
`;

export const label = `
    import Select from "react-select";

    <div>
        <p>{label}</p>
        <Select />
    </div>
`;

export const props = `
    import Select from "react-select";

    <div>
      <p>{label}</p>
      <Select 
        options={data}
        isMulti={isMulti}
        placeholder={placeholder}
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
        }}
      />
    </div>
`;

const Dropdown = (props) => {
  const options = props.options;
  const selectOptions = options.map((option) => <option>{option}</option>);

  return (
    <select className="col-auto p-1 pl-3 h-9" id={props.id}>
      <option value="" disabled selected> {props.title} </option>
      {selectOptions}
    </select>
  );
};

export default Dropdown;
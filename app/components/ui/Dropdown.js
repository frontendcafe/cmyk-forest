const Dropdown = ({ style, id, options, title, onChangeHandler, defaultValue }) => {
  const selectOptions = options.map((option, id) => (
    <option value={option} key={id}>{option}</option>
  ));

  return (
    <select
      className="col-auto p-1 pl-3 h-9"
      style={style}
      onChange={onChangeHandler}
      id={id}
      defaultValue={defaultValue}
    >
      <option disabled  >
        {title}
      </option>
      {selectOptions}
    </select>
  );
};

export default Dropdown;

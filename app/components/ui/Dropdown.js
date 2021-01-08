const Dropdown = ({ style, id, options, title, onChangeHandler, onBlur }) => {
  const selectOptions = options.map((option) => (
    <option value={option}>{option}</option>
  ));

  return (
    <select
      className="col-auto p-1 pl-3 h-9"
      style={style}
      onChange={onChangeHandler}
      id={id}
    >
      <option value="" disabled selected>
        {title}
      </option>
      {selectOptions}
    </select>
  );
};

export default Dropdown;

const Dropdown = ({ id, options, title, onChangeHandler }) => {
  const selectOptions = options.map((option) => (
    <option value={option}>{option}</option>
  ));

  return (
    <select
      className="col-auto p-1 pl-3 h-9"
      id={id}
      onChange={onChangeHandler}
    >
      <option value="" disabled selected>
        {title}
      </option>
      {selectOptions}
    </select>
  );
};

export default Dropdown;

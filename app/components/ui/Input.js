const Input = ({ type, name, id, placeholder, onChangeHandler, value }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className="col-auto p-1 pl-3 h-9"
            onChange={onChangeHandler}
            value={value}
        />
    )
}

export default Input;
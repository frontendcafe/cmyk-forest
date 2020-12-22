const Input = ({ type, name, id, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className="col-auto p-1 pl-3 h-9"
        />
    )
}

export default Input;
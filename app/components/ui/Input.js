const Input = (props) => {
    return (
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            class="col-auto p-1 pl-3 h-9"
          />
    )
}

export default Input;
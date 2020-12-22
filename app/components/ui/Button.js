const Button = ({ text, type, id }) => {
  return (
    <button className="rounded-br-2xl text-white " id={id} type={type}>
      {text}
    </button>
  );
};

export default Button;

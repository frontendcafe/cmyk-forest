const Sidebar = ({ id, title, text }) => {
  return (
    <div id={id}>
      <div className="mt-11 ml-6" id="frontendlogo">
        <img src="./assets/img/vector2.png" alt="" className="ml-8" />
        <img src="./assets/img/vector.png" alt="" />
      </div>
      <h1 className="mt-8 mb-8 ml-9 text-5xl pr-20  ">{title}</h1>
      {text}
      <div id="mosaic"></div>
    </div>
  );
};

export default Sidebar;

const Sidebar = (props) => {
  return (
    <>
      <section className="-mt-9" id={props.id}>
        <div className="mt-11 ml-6" id="frontendlogo">
          <img src="./assets/img/vector2.png" alt="" className="ml-8" />
          <img src="./assets/img/vector.png" alt="" />
        </div>
        <h1 className="mt-8 mb-8 ml-9 text-5xl pr-20  ">{props.title}</h1>
        {props.text}
        <div id="mosaic"></div>
      </section>
    </>
  );
};

export default Sidebar;

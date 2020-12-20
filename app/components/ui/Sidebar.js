const Sidebar = (props) => {
  return (
    <>
        <section class="-mt-9" id={props.id}>
          <div class="mt-11 ml-6" id="frontendlogo">
            <img src="./assets/img/vector2.png" alt="" class="ml-8" />
            <img src="./assets/img/vector.png" alt="" />
          </div>
          <h1 class="mt-12 ml-9 text-6xl">{props.title}</h1>
          {props.text}
          {/* <p class="text-white p-6">
            If you have any other questions you can always find us on 
            <a
              class="text-white font-bold text-base"
              href="https://discord.com/invite/3GC6TJd"
              rel="noopener noreferrer"
            >
               Discord
            </a>
            .
          </p> */}
          <div id="mosaic" class="mt-10"></div>
        </section>
      
    </>
  );
};

export default Sidebar;

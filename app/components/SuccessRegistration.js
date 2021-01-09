import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

export const SuccessRegistration = () => {
  return (
    <>
      <Sidebar id="sidebarGreen" title="WELCOME TO CMYK" />
      <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">
        <Navbar className="anchorGreen" />
        <div className="flex flex-col items-center mt-20 " id="formcontainer">
          <img
            src="./assets/img/cmyk-green.png"
            alt="cmyk"
            className="cmyk mt-10 pt-5"
          />
          <p className="text-green-500  font-bold fon  text-base md:text-2xl xl:text-4xl ">
            ¡Thanks for participating!
          </p>
          <p className="text-green-500  font-bold fon  text-sm md:text-base xl:text-lg pt-5  mb-10">
            Your registration has been successful 😊, check your email 📬
          </p>
          <a
            className="text-green-500 text-sm md:text-base xl:text-lg pl-1 pr-1  "
            href="https://frontend.cafe/cmyk"
          >
            See final projects 😎
          </a>
          <a
            className="text-green-500 pl-1 pr-1 text-sm md:text-base xl:text-lg"
            href="https://discord.com/invite/3GC6TJd"
          >
            Go to the FEC Discord 🚀
          </a>
        </div>
      </div>
    </>
  );
};

export default SuccessRegistration;

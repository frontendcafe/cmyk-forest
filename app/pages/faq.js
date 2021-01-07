import Header from "../components/Head";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import { FaqData } from "../components/FaqData";

const Faq = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar
            id="sidebarBlue"
            title="FAQ"
            text={
              <p className="text-white ml-10 mr-10  mt-10 mb-10 ">
                If you have any other questions you can always find us on
                <a
                  className="text-white font-bold text-base ml-1"
                  href="https://discord.com/invite/3GC6TJd"
                  rel="noopener noreferrer"
                >
                  Discord
                </a>
              </p>
            }
          />
          <FaqData />
          <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-2">
            <Navbar className="anchorBlue" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

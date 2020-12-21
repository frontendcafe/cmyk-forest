import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";

const Faq = () => {
  return (
    <>
      <Layout className="anchorblue"></Layout>
      <div className="flex">
        <Sidebar
          id="sidebarblue"
          title="FAQ"
          text={
            <p className="text-white ml-10 ">
              If you have any other questions you can always find us on
              <a
                className="text-white font-bold text-base ml-1"
                href="https://discord.com/invite/3GC6TJd"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              .
            </p>
          }
        />
      </div>
    </>
  );
};

export default Faq;

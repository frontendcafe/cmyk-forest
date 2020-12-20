import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";

const Faq = () => {
  return (
    <>
      <Layout>
        <h1>FAQ WIP</h1>
      </Layout>
      <Sidebar
        id="sidebarblue"
        title="FAQ"
        text={
          <p className="text-white p-6">
            If you have any other questions you can always find us on
            <a
              className="text-white font-bold text-base"
              href="https://discord.com/invite/3GC6TJd"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            .
          </p>
        }
      />
    </>
  );
};

export default Faq;

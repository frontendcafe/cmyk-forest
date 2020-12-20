import Head from "next/head";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>CMYK Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        {children}
        <Navbar />
      </div>
    </>
  );
};

export default Layout;

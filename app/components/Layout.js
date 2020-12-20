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
      <h1>Layout</h1>
      {children}
      <Sidebar />
      <Navbar />
    </>
  );
};

export default Layout;

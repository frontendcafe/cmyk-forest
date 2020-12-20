import Head from "next/head";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>CMYK Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        {props.children}
        <Navbar className={props.className} />
      </div>
    </>
  );
};

export default Layout;

import Head from "next/head";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CMYK Panel</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col">
        {props.children}
        <Navbar className={props.className} />
      </div>
    </>
  );
};

export default Layout;

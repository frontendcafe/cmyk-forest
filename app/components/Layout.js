import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Layout</h1>
      {children}
      <Sidebar />
      <Navbar />
    </>
  );
};

export default Layout;

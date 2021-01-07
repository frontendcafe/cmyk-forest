import Header from "../components/Head";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import { Form } from "../components/Form";

export const index = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar id="sidebar" title="WELCOME TO CMYK" />
          <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-2">
            <Navbar className="className" />
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

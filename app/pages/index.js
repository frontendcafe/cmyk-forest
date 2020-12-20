import Layout from "../components/Layout";
import Form from "../components/Form";
import Sidebar from "../components/ui/Sidebar";

export default function Home() {
  return (
    <>
      <Layout></Layout>
      <Sidebar 
      id="sidebar"
      title="WELCOME TO CMYK"
      />
      <Form />
    </>
  );
}

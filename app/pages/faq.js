import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query allFaqs {
    allFaqs {
      id
      question
      answer
    }
  }
`;

const Faq = () => {
  const { data, loading } = useQuery(QUERY);

  return (
    <>
      <Layout className="anchorBlue" />
      <div className="flex">
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
        <div className="pl-20 mt-2 pr-20 ">
          {data &&
            data.allFaqs.map((faq) => (
              <>
                <h1 className="text-black text-xl mt-10">{faq.question}</h1>
                <p className="mt-3">{faq.answer}</p>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

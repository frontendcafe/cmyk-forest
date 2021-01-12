import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import Spinner from "./ui/Spinner";

const QUERY = gql`
  query allFaqs {
    allFaqs {
      id
      question
      answer
    }
  }
`;

export const FaqData = () => {
  const { data, loading } = useQuery(QUERY);
  return (
    <div className="pl-20 mt-2 pr-20 ">
      {loading ? (
        <Spinner />
      ) : (
          data.allFaqs.map((faq) => (
            <>
              <h1 className="text-black text-lg mt-10">{faq.question}</h1>
              <p className="mt-2">{faq.answer}</p>
            </>
          ))
        )}
    </div>
  );
};

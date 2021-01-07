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

export const FaqData = () => {
  const { data, loading } = useQuery(QUERY);
  return (
    <div className="pl-20 mt-2 pr-20 ">
      {data &&
        data.allFaqs.map((faq) => (
          <>
            <h1 className="text-black text-xl mt-10">{faq.question}</h1>
            <p className="mt-3">{faq.answer}</p>
          </>
        ))}
    </div>
  );
};

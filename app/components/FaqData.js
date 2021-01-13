import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="pl-20  pr-20 "
    >
      {loading ? (
        <Spinner />
      ) : (
        data.allFaqs.map((faq) => (
          <>
            <motion.h1
              initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
              animate={{ x: 0, opacity: 1, color: "#000000" }}
              transition={{ delay: 0.3 }}
              className="text-black text-lg mt-6"
            >
              {faq.question}
            </motion.h1>
            <motion.p
              initial={{ x: -150, opacity: 0, color: "#55a4d1" }}
              animate={{ x: 0, opacity: 1, color: "#000000" }}
              transition={{ delay: 0.3 }}
              className="mt-2"
            >
              {faq.answer}
            </motion.p>
          </>
        ))
      )}
    </motion.div>
  );
};

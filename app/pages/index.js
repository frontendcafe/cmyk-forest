import MainForm from "../components/MainForm";
import RegistrationClosedForm from "../components/RegistrationClosedForm";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";


const QUERY = gql`
  query allUsers {
    allUsers {
      full_name
      role
    }
  }
`;
const Index = () => {
  const { data } = useQuery(QUERY);


  return (
    <>
      { data && data.allUsers.filter(role => role.role === "Participant").length > 20 ? (
        <RegistrationClosedForm />
      ) : (
          <MainForm />
        )
      }
    </>
  );
};

export default Index;

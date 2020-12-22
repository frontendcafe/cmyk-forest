import MainForm from "../components/MainForm";
import RegistrationClosedForm from "../components/RegistrationClosedForm";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query allUsers {
    allUsers {
      full_name
    }
  }
`;
const Index = () => {
  const { data, loading } = useQuery(QUERY);
  if (loading) {
    return 'cargando...'
  }

  return (
    <>
      {data && data.allUsers.length > 10 ? (
        <RegistrationClosedForm />
      ) : (
          <MainForm />
        )}
    </>
  );
};

export default Index;

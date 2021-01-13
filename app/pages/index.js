import Header from "../components/Head";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import MainForm from "../components/MainForm";
import RegistrationClosedForm from "../components/RegistrationClosedForm";

const QUERY = gql`
  query allUsers {
    allUsers {
      full_name
      role
    }
  }
`;

export const index = () => {
  const { data } = useQuery(QUERY);
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <div className="flex min-h-screen">
          {data &&
          data.allUsers.filter((role) => role.role === "Participant").length >
            30 ? (
            <RegistrationClosedForm />
          ) : (
            <MainForm />
          )}
        </div>
      </div>
    </>
  );
};

export default index;

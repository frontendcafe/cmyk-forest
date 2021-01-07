import React from "react";
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

export const Form = () => {
  const { data } = useQuery(QUERY);
  return (
    <div>
      {data &&
      data.allUsers.filter((role) => role.role === "Participant").length >
        20 ? (
        <RegistrationClosedForm />
      ) : (
        <MainForm />
      )}
    </div>
  );
};

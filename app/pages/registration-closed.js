import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";
import Button from "../components/ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
  mutation createUser($data: UserCreateInput) {
    createUser(data: $data) {
      email
    }
  }
`;
export default function Home() {
  const [createUser] = useMutation(CREATE_USER);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
    }),
    onSubmit: (values) => {
      const { email } = values;
      try {
        createUser({
          variables: {
            data: {
              email,
            },
          },
        });
      } catch (error) {
        console.error(error);
      }
      console.log(values);
    },
  });

  return (
    <>
      <Layout className="anchorYellow" />
      <div className="flex">
        <Sidebar id="sidebarYellow" title="WELCOME TO CMYK" />
        <section
          className="ml-40 pl-10 mt-20   flex flex-col items-center  "
          id="formcontainer"
        >
          <img src="./assets/img/CMYK.png" alt="" className="w-72" />

          <p className="text-gray-500 text-base font-bold">
            The registration for this event is now closed.
          </p>
          <p className="text-gray-500 text-base pb-10 ">
            Enter your email below to get notified as soon as we open new
            registrations.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            className="grid gap-x-8 gap-y-4  "
          >
            {formik.touched.email && formik.errors.email ? (
              <input
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.email}
              />
            ) : (
              <input
                type="email"
                id="email"
                placeholder="E-mail adress"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            <Button type="submit" text="SUBMIT" id="buttonYellow" />
          </form>
          <p className="text-gray-500 text-sm pt-10 ">
            Visit
            <a
              className="text-yellow-500 text-sm pl-1 pr-1 "
              href="https://frontend.cafe/"
            >
              our website
            </a>
            to see past projects.
          </p>
        </section>
      </div>
    </>
  );
}

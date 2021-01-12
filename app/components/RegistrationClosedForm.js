import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";
import Button from "../components/ui/Button";

const CREATE_USER = gql`
  mutation createUser($data: UserCreateInput) {
    createUser(data: $data) {
      email
      role
      full_name
    }
  }
`;
export default function Home() {
  const [createUser] = useMutation(CREATE_USER);


  const formik = useFormik({
    initialValues: {
      email: "",
      role: "Waiting",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
    }),
    onSubmit: (values) => {
      const { email, full_name } = values;
      try {
        createUser({
          variables: {
            data: {
              email,
              full_name,
            },
          },
        });

        const templateParams = {
          name: full_name,
          email: email,
        };

        emailjs.send(
          process.env.NEXT_PUBLIC_MAIL_SERVICE,
          process.env.NEXT_PUBLIC_WAITING_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );

        Swal.fire({
          title: "Form sent!",
          text: "Don't forget to check on your email",
          icon: "success",
          confirmButtonText: "Cool",
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <Sidebar id="sidebarYellow" title="WELCOME TO CMYK" />
      <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">
        <Navbar className="anchorYellow" />
        <div className="flex flex-col items-center mt-20 " id="formcontainer">
          <img src="./assets/img/CMYK.png" alt="cmyk" className="cmyk pt-5" />

          <p className="text-gray-500 text-base md:text-lg xl:text-xl font-bold">
            The registration for this event is now closed. 😕
          </p>
          <p className="text-gray-500 text-base pb-10 ">
            Enter your email below to get notified as soon as we open new
            registrations.
          </p>
          <form onSubmit={formik.handleSubmit} className="closed-form">
            {formik.touched.email && formik.errors.email ? (
              <input
                className="error-email"
                placeholder={formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                id="email"
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
          <a
            className="text-yellow-500 text-sm mt-7 "
            href="https://frontend.cafe/"
          >
            Visit our website to see past projects.
          </a>
        </div>
      </div>
    </>
  );
}

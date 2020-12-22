import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Dropdown from "../components/ui/Dropdown";
import TextArea from "../components/ui/TextArea";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";

const CREATE_USER = gql`
  mutation createUser($data: UserCreateInput) {
    createUser(data: $data) {
      full_name
      email
    }
  }
`;
const MainForm = () => {
  const [createUser] = useMutation(CREATE_USER);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      skills: "",
      github: "",
      linkedin: "",
      discord_id: "",
      questions: "",
      about: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
      skills: Yup.string().required("Technologies is required"),
      github: Yup.string().required("Your GitHub account is required"),
      linkedin: Yup.string().required("Your LinkedIn account is required"),
      discord_id: Yup.string().required("Your Discord account is required"),
    }),
    onSubmit: (values) => {
      const {
        full_name,
        email,
        skills,
        github,
        linkedin,
        discord_id,
        questions,
        about,
      } = values;
      try {
        createUser({
          variables: {
            data: {
              full_name,
              email,
              skills,
              github,
              linkedin,
              skills,
              discord_id,
              questions,
              about,
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
      <Layout />
      <div className="flex">
        <Sidebar id="sidebar" title="WELCOME TO CMYK" />
        <section
          className="ml-40 mt-5 flex flex-col items-center"
          id="formcontainer"
        >
          <img src="./assets/img/CMYK.png" alt="cmyk" className="w-72" />
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-2 gap-x-8 gap-y-4"
          >
            {formik.touched.full_name && formik.errors.full_name ? (
              <input
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.full_name}
              />
            ) : (
              <input
                type="text"
                id="full_name"
                placeholder="Full Name"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
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
            <Dropdown
              title="Role"
              options={["Participant", "Leader"]}
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Dropdown
              title="Level"
              options={[
                "Level 1 (HTML, CSS, JAVASCRIPT)",
                "Level 2 (Level 1 + React)",
              ]}
            />

            {formik.touched.skills && formik.errors.skills ? (
              <textarea
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.skills}
              />
            ) : (
              <textarea
                placeholder="Technologies"
                className="col-auto p-1 pl-3"
                id="skills"
                value={formik.values.skills}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}

            <div>
              <Dropdown
                id="freetime"
                title="Free Time"
                options={["Value 1", "Value 2", "Value 3", "Value 4"]}
              />
              <div className="flex place-content-between mt-3">
                <label className="justify-self-start">Experience</label>
                <label htmlFor="Yes">Yes</label>
                <Input type="radio" value="Yes" />
                <label htmlFor="No">No</label>
                <Input type="radio" value="No" />
              </div>
            </div>
            {formik.touched.github && formik.errors.github ? (
              <input
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.github}
              />
            ) : (
              <input
                type="url"
                name="github"
                id="github"
                placeholder="Github"
                value={formik.values.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.linkedin && formik.errors.linkedin ? (
              <input
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.linkedin}
              />
            ) : (
              <input
                type="url"
                id="linkedin"
                placeholder="LinkedIn"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            {formik.touched.discord_id && formik.errors.discord_id ? (
              <input
                className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                placeholder={formik.errors.discord_id}
              />
            ) : (
              <input
                type="text"
                id="discord_id"
                placeholder="Discord"
                value={formik.values.discord_id}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            )}
            <textarea
              placeholder="Any questions?"
              className="col-auto p-1 pl-3"
              id="questions"
              value={formik.values.questions}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <textarea
              className="-mt-9 col-auto p-1 pl-3"
              placeholder="Tell us something about yourself"
              id="about"
              value={formik.values.about}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Button type="submit" text="JOIN" id="buttonRed" />
          </form>
        </section>
      </div>
    </>
  );
};

export default MainForm;

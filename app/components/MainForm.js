import { useState } from "react";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import Navbar from "./ui/Navbar";
import Sidebar from "./ui/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Dropdown from "../components/ui/Dropdown";
import SuccessRegistration from "./SuccessRegistration";

const CREATE_USER = gql`
  mutation createUser($data: UserCreateInput) {
    createUser(data: $data) {
      full_name
      email
    }
  }
`;
const MainForm = (props) => {
  const [createUser] = useMutation(CREATE_USER);
  const [formSent, setFormSent] = useState(false);

  console.log(process.env.NEXT_PUBLIC_MAIL_SERVICE);

  const formik = useFormik({
    initialValues: {
      full_name: "Braian",
      email: "blvogric@gmail.com",
      role: "",
      level: "",
      skills: "React",
      available_time: "",
      experience: "",
      github: "https://github.com/vogric",
      linkedin: "https://linkedin.com/vogric",
      discord_id: "vogric",
      questions: "",
      about: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Email is not valid"),
      role: Yup.string().required("Role is required"),
      level: Yup.string().required("Level is required"),
      skills: Yup.string().required("Skills/Technologies is required"),
      available_time: Yup.string().required("Available time is required"),
      experience: Yup.string().required("Experience time is required"),
      github: Yup.string().required("GitHub account is required"),
      linkedin: Yup.string().required("LinkedIn account is required"),
      discord_id: Yup.string().required("Discord account is required"),
    }),
    onSubmit: (values, e) => {
      const {
        full_name,
        email,
        skills,
        github,
        linkedin,
        discord_id,
        questions,
        about,
        available_time,
        role,
        experience,
        level,
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
              available_time,
              role,
              experience,
              level,
            },
          },
        });

        const templateParams = {
          name: full_name,
          email: email,
        };

        emailjs.send(
          process.env.NEXT_PUBLIC_MAIL_SERVICE,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_USER_ID
        );

        Swal.fire({
          title: "Form sent!",
          text: "Don't forget to check on Discord",
          icon: "success",
          confirmButtonText: "Cool",
        });

        setFormSent(true);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      {formSent ? (
        <SuccessRegistration />
      ) : (
        <>
          <Sidebar id="sidebar" title="WELCOME TO CMYK" />
          <div className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">
            <Navbar className="className" />
            <div className="flex flex-col items-center">
              <img src="./assets/img/CMYK.png" alt="cmyk" className="cmyk" />
              <form
                onSubmit={formik.handleSubmit}
                className="grid sm:grid-cols-1 sm:gap-y-5  lg:grid-cols-2 lg:gap-x-1 lg:gap-y-3 xl:gap-x-2 xl:gap-y-4 2xl:gap-x-3 2xl:gap-y-6"
              >
                {formik.touched.full_name && formik.errors.full_name ? (
                  <input
                    className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                    placeholder={formik.errors.full_name}
                    value={formik.values.full_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    id="full_name"
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

                {formik.touched.role && formik.errors.role ? (
                  <Dropdown
                    title={formik.errors.role}
                    options={["Participant", "Leader"]}
                    style={{
                      backgroundColor: "#fee2e2",
                      color: "#766969",
                      borderColor: "#b91c1c",
                    }}
                    id="role"
                    value={formik.values.role}
                    onChangeHandler={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <Dropdown
                    title="Role"
                    options={["Participant", "Leader"]}
                    id="role"
                    value={formik.values.role}
                    onChangeHandler={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}
                {formik.touched.level && formik.errors.level ? (
                  <Dropdown
                    options={[
                      "Level 1 (HTML/CSS/JavaScript)",
                      "Level 2 (Level 1 + React)",
                    ]}
                    title={formik.errors.level}
                    style={{
                      backgroundColor: "#fee2e2",
                      color: "#766969",
                      borderColor: "#b91c1c",
                    }}
                    id="level"
                    value={formik.values.level}
                    onChangeHandler={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <Dropdown
                    title="Level"
                    options={[
                      "Level 1 (HTML/CSS/JavaScript)",
                      "Level 2 (Level 1 + React)",
                    ]}
                    id="level"
                    value={formik.values.level}
                    onChangeHandler={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}

                {formik.touched.skills && formik.errors.skills ? (
                  <textarea
                    className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                    placeholder={formik.errors.skills}
                    id="skills"
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <textarea
                    placeholder="Skills/Technologies"
                    className="col-auto p-1 pl-3"
                    id="skills"
                    value={formik.values.skills}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                )}

                <div>
                  {formik.touched.available_time &&
                  formik.errors.available_time ? (
                    <Dropdown
                      options={[2, 4, 6, 8, 10, 12]}
                      title={formik.errors.available_time}
                      style={{
                        backgroundColor: "#fee2e2",
                        color: "#766969",
                        borderColor: "#b91c1c",
                        width: "91%",
                      }}
                      id="available_time"
                      value={formik.values.available_time}
                      onChangeHandler={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  ) : (
                    <Dropdown
                      id="available_time"
                      title="Available time"
                      options={[2, 4, 6, 8, 10, 12]}
                      value={formik.values.available_time}
                      onChangeHandler={formik.handleChange}
                    />
                  )}
                  {formik.touched.experience && formik.errors.experience ? (
                    <div className="flex-col">
                      <p className="experience-error">
                        {formik.errors.experience}
                      </p>
                      <div className="flex place-content-evenly ">
                        <label className="justify-self-start">Experience</label>
                        <label htmlFor="Yes">Yes</label>
                        <Input
                          type="radio"
                          value="Yes"
                          id="Yes"
                          name="experience"
                          onChangeHandler={formik.handleChange}
                        />
                        <label htmlFor="No">No</label>
                        <Input
                          type="radio"
                          value="No"
                          id="No"
                          name="experience"
                          onChangeHandler={formik.handleChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex place-content-evenly mt-6">
                      <label className="justify-self-start">Experience</label>
                      <label htmlFor="Yes">Yes</label>
                      <Input
                        type="radio"
                        value="Yes"
                        id="Yes"
                        name="experience"
                        onChangeHandler={formik.handleChange}
                      />
                      <label htmlFor="No">No</label>
                      <Input
                        type="radio"
                        value="No"
                        id="No"
                        name="experience"
                        onChangeHandler={formik.handleChange}
                      />
                    </div>
                  )}
                </div>
                {formik.touched.github && formik.errors.github ? (
                  <input
                    className="bg-red-100 border-l-2 border-red-700 placeholder-black"
                    placeholder={formik.errors.github}
                    value={formik.values.github}
                    type="url"
                    name="github"
                    id="github"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                    type="url"
                    id="linkedin"
                    placeholder={formik.errors.linkedin}
                    value={formik.values.linkedin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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

                <div>
                  {formik.touched.discord_id && formik.errors.discord_id ? (
                    <input
                      className="bg-red-100 border-l-2 border-red-700 placeholder-black "
                      placeholder={formik.errors.discord_id}
                      value={formik.values.discord_id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      type="text"
                      id="discord_id"
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
                </div>
                <textarea
                  placeholder="Any questions?"
                  id="questions"
                  value={formik.values.questions}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <textarea
                  placeholder="Tell us something about yourself"
                  id="about"
                  value={formik.values.about}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Button type="submit" text="JOIN" id="buttonRed" />
              </form>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default MainForm;

import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Dropdown from "../components/ui/Dropdown";
import TextArea from "../components/ui/TextArea";
import { useFormik } from "formik";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      role: "",
      technologies: "",
      github: "",
      linkedin: "",
      discord: "",
      questions: "",
      aboutYourself: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Layout />
      <div className="flex">
        <Sidebar id="sidebar" title="WELCOME TO CMYK" />
        <section
          className="p-7 ml-24 mt-5 flex flex-col items-center"
          id="formcontainer"
        >
          <img src="./assets/img/CMYK.png" alt="" className="w-72" />
          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-2 gap-x-8 gap-y-4"
          >
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              value={formik.values.fullname}
              onChange={formik.handleChange}
            />
            <input
              type="email"
              id="email"
              placeholder="E-mail adress"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Dropdown
              title="Role"
              options={["Participant", "Leader"]}
              id="role"
              value={formik.values.role}
              onChange={formik.handleChange}
            />
            <Dropdown
              title="Level"
              options={[
                "Level 1 (HTML, CSS, JAVASCRIPT)",
                "Level 2 (Level 1 + React)",
              ]}
            />
            <textarea
              placeholder="Technologies"
              className="col-auto p-1 pl-3"
              id="technologies"
              value={formik.values.technologies}
              onChange={formik.handleChange}
            />
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
            <input
              type="url"
              name="github"
              id="github"
              placeholder="Github"
              value={formik.values.github}
              onChange={formik.handleChange}
            />
            <input
              type="url"
              id="linkedin"
              placeholder="LinkedIn"
              value={formik.values.linkedin}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              id="discord"
              placeholder="Discord"
              value={formik.values.discord}
              onChange={formik.handleChange}
            />
            <textarea
              placeholder="Any questions?"
              className="col-auto p-1 pl-3"
              id="questions"
              value={formik.values.questions}
              onChange={formik.handleChange}
            />
            <textarea
              className="-mt-9 col-auto p-1 pl-3"
              placeholder="Tell us something about yourself"
              id="aboutYourself"
              value={formik.values.aboutYourself}
              onChange={formik.handleChange}
            />
            <Button type="submit" text="JOIN" />
          </form>
        </section>
      </div>
    </>
  );
}

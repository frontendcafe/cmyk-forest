import Layout from "../components/Layout";
import Sidebar from "../components/ui/Sidebar";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Dropdown from "../components/ui/Dropdown";
import TextArea from "../components/ui/TextArea";

export default function Home() {
  return (
    <>
      <Layout></Layout>
      <div className="flex">
        <Sidebar id="sidebar" title="WELCOME TO CMYK" />
        <section
          className="ml-40 mt-5 flex flex-col items-center"
          id="formcontainer"
        >
          <img src="./assets/img/CMYK.png" alt="" className="w-72" />
          <form className="grid grid-cols-2 gap-x-8 gap-y-4">
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail adress"
            />
            <Dropdown title="Role" options={["Participant", "Leader"]} />
            <Dropdown
              title="Level"
              options={[
                "Level 1 (HTML, CSS, JAVASCRIPT)",
                "Level 2 (Level 1 + React)",
              ]}
            />
            <TextArea
              placeholder="Technologies"
              className="col-auto p-1 pl-3"
            />
            <div>
              <Dropdown
                id="freetime"
                title="Free Time"
                options={["Value 1", "Value 2", "Value 3", "Value 4"]}
              />
              <div className="flex place-content-between mt-3">
                <label className="justify-self-start">Experience</label>
                <Input type="radio" /> Yes
                <Input type="radio" /> No
              </div>
            </div>
            <Input type="url" name="github" id="github" placeholder="Github" />
            <Input
              type="url"
              name="linkedin"
              id="linkedin"
              placeholder="LinkedIn"
            />
            <Input
              type="text"
              name="discord"
              id="discord"
              placeholder="Discord"
            />
            <TextArea
              placeholder="Any questions?"
              className="col-auto p-1 pl-3"
            />
            <TextArea
              className="-mt-9 col-auto p-1 pl-3"
              placeholder="Tell us something about yourself"
            />
            <Button text="JOIN" />
          </form>
        </section>
      </div>
    </>
  );
}

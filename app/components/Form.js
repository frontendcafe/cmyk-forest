import Button from "./ui/Button";
import Input from "./ui/Input";
import Dropdown from "./ui/Dropdown";

const Form = () => {
  return (
    <>
      <section
        class="p-7 ml-24 mt-5 flex flex-col items-center ml-8"
        id="formcontainer"
      >
        <img src="./assets/img/CMYK.png" alt="" class="w-72" />
        <form class="grid grid-cols-2 gap-x-8 gap-y-4">
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
          <textarea
            class="col-auto p-1 pl-3"
            placeholder="Technologies"
          ></textarea>
          <div>
            <select class="col-auto p-1 pl-3 h-9" id="freetime">
              <option value="" disabled selected>
                {" "}
                Free Time
              </option>
              <option>Value 1</option>
              <option>Value 2</option>
              <option>Value 3</option>
              <option>Value 4</option>
            </select>
            <div class="flex place-content-between mt-3">
              <label class="justify-self-start">Experience</label>
              <input type="radio" value="y" class="" /> Yes
              <input type="radio" value="n" class="" /> No
            </div>
          </div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Github"
            class="col-auto p-1 pl-3"
          />
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="LinkedIn"
            class="col-auto p-1 pl-3"
          />
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Discord"
            class="col-auto p-1 pl-3 h-9"
          />
          <textarea
            class="col-auto p-1 pl-3"
            placeholder="Any questions? "
          ></textarea>
          <textarea
            class="-mt-9 col-auto p-1 pl-3"
            placeholder="Tell us something about yourself"
          ></textarea>
          <Button text="JOIN" />
          {/* <button class="rounded-br-2xl text-white">JOIN</button> */}
        </form>
      </section>
    </>
  );
};

export default Form;

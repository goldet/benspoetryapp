import DropdownMenu from "../utility/DropdownMenu";
import Sections from "./Sections";

const Menu = ({ dropdown, setDropdown, setMainMenu }) => {


  return (
    <ul className="absolute z-10 flex flex-col justify-evenly gap-2 pt-2 align-middle ">
      {!dropdown && (
        <Sections setDropdown={setDropdown} setMainMenu={setMainMenu} />
      )}
      {dropdown === "work" && (
        <DropdownMenu name="work" slugs={["poetry", "essays"]} setMainMenu={setMainMenu} />
      )}
     {/*  {dropdown === "about" && (
        <DropdownMenu name="about" slugs={["bio", "cv"]} setMainMenu={setMainMenu} />
      )} */}
    </ul>
  );
};

export default Menu;

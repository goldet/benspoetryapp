import DropdownMenu from "../utility/DropdownMenu";
import Sections from "./Sections";

const Menu = ({ dropdown, setDropdown }) => {

  // inline style define variable for each
  //  custom css calculates time for staggered animation
  return (
    <ul className="absolute z-10 flex flex-col justify-evenly gap-2 pt-2 align-middle ">
      {!dropdown && (
        <Sections setDropdown={setDropdown} />
      )}
      {dropdown === "work" && (
        <DropdownMenu name="work" slugs={["poetry", "essays"]} />
      )}
      {dropdown === "about" && (
        <DropdownMenu name="about" slugs={["bio", "cv"]} />
      )}
    </ul>
  );
};

export default Menu;

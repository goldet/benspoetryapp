import DropdownMenu from "../utility/DropdownMenu";
import SectionsBig from "./SectionsBig";

const MenuBig = ({ dropdown, setDropdown }) => {

  return (
    <div>
      {!dropdown && <SectionsBig setDropdown={setDropdown} />}
      {dropdown === "work" && (
        <DropdownMenu name="work" slugs={["poetry", "essays"]} />
      )}
      {dropdown === "about" && (
        <DropdownMenu name="about" slugs={["bio", "cv"]} />
      )}
    </div>
  );
};

export default MenuBig;

import Link from "next/link";
import DropdownMenu from "../utility/DropdownMenu";

const MenuBig = ({ dropdown, setDropdown, isWide, reference, needed }) => {
  return (
    <>
      <div className="flex gap-6 items-center md:text-lg" ref={reference}>
        <li className="h-6  hover:underline pr-1">
          <Link href="/">Home</Link>
        </li>

        <div className="h-6 ">
          <button className="hover:underline pr-1" onClick={() => setDropdown("work")}>Work</button>
          {dropdown === "work" && (
            <DropdownMenu
              name="work"
              slugs={["poetry", "essays"]}
              isWide={isWide}
              setDropdown={setDropdown}
            />
          )}
        </div>

        <div className="h-6 ">
          <button className="hover:underline pr-1" onClick={() => setDropdown("about")}>About </button>
          {dropdown === "about" && (
            <DropdownMenu
              name="about"
              slugs={["bio", "cv"]}
              isWide={isWide}
              setDropdown={setDropdown}
            />
          )}
        </div>

        <li className="h-6  hover:underline pr-1">
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </>
  );
};

export default MenuBig;

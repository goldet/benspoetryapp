import Link from "next/link";
import DropdownMenu from "../utility/DropdownMenu";

const MenuBig = ({ dropMenu, setDropMenu, isWide, reference, needed }) => {
  return (
    <>
      <div className="flex gap-6 items-center md:text-lg" ref={reference}>
        <li className="h-6  hover:underline pr-1">
          <Link href="/">Home</Link>
        </li>

        <div className="h-6 ">
          <button className="hover:underline pr-1" onClick={() => setDropMenu(2)}>Work</button>
          {dropMenu === 2 && (
            <DropdownMenu
              name="work"
              slugs={["poetry", "essays"]}
              isWide={isWide}
              setDropMenu={setDropMenu}
            />
          )}
        </div>

        <li className="h-6  hover:underline pr-1">
          <Link href="/about/cv">CV</Link>
        </li>

      {/*   <div className="h-6 ">
          <button className="hover:underline pr-1" onClick={() => setDropdown("about")}>About </button>
          {dropdown === "about" && (
            <DropdownMenu
              name="about"
              slugs={["bio", "cv"]}
              isWide={isWide}
              setDropdown={setDropdown}
            />
          )}
        </div> */}

        <li className="h-6  hover:underline pr-1">
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </>
  );
};

export default MenuBig;

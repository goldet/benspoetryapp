import Link from "next/link";
import DropdownMenu from "../utility/DropdownMenu";

const MenuBig = ({ dropMenu, setDropMenu, isWide, clickOutsideRef }) => {
  return (
    <>
      <div className="flex gap-6 items-center md:text-lg" ref={clickOutsideRef}>
        <li className="h-6  hover:underline pr-1">
          <Link href="/" onClick={() => setDropMenu(0)}>Home</Link>
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
          <Link href="/about/cv" onClick={() => setDropMenu(0)}>CV</Link>
        </li>
        <li className="h-6  hover:underline pr-1">
          <Link href="/contact" onClick={() => setDropMenu(0)}>Contact</Link>
        </li>
      </div>
    </>
  );
};

export default MenuBig;

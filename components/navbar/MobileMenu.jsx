import { useEffect, useRef, useState } from "react";
import DropdownMenu from "../utility/DropdownMenu";
import Sections from "./Sections";
import { CgArrowLongLeft } from "react-icons/cg";

const MobileMenu = ({ dropMenu, setDropMenu }) => {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current?.contains(event.target)) {
        setDropMenu(0);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, dropMenu]);

  const handleMenuClick = () => {
    if (dropMenu === 0) setDropMenu(1);
    if (dropMenu === 1) setDropMenu(0)
    if (dropMenu === 2) setDropMenu(1);
  };

  return (
    <div ref={ref} className="relative z-50">
      <div
        className={`${
          dropMenu && "border-b-2"
        } box-content flex h-full align-middle`}
      >
        <button className="w-12 font-medium" onClick={handleMenuClick}>
          {dropMenu !== 2 ? (
                  "Menu"
                ) : (
                  <CgArrowLongLeft className="mx-auto text-gray-500" />
                )}
        </button>
      </div>
      {dropMenu === 1 && (
        <>
          <Sections setDropMenu={setDropMenu} />
        </>
      )}
      {dropMenu === 2 && (
        <DropdownMenu
          name="work"
          slugs={["poetry", "essays"]}
          setDropMenu={setDropMenu}
        />
      )}
    </div>
  );
};

export default MobileMenu;

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { CgArrowLongLeft } from "react-icons/cg";
import Sections from "./Sections";


// WINDOW IS NOT DEFINED ?!?!
const Navbar = () => {
  const [mainMenu, setMainMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {

      console.log(window.innerWidth)
      if (!ref.current?.contains(event.target)) {

        setMainMenu(!mainMenu);
        setDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, mainMenu]);


  const handleMenuClick = () => {
    if (!mainMenu) {
      setMainMenu(true);
    } else if (mainMenu && !dropdown) {
      setMainMenu(false);
    } else if (mainMenu && dropdown) {
      setDropdown(null);
    }
  };

  return (
    <>
      <div className="flex justify-between py-8 px-8 align-middle">
        <h2 className="nameHeader text-4xl font-extralight italic">
          Ben Schroeder
        </h2>

        {/* {window.innerWidth <= 640 ? */}
        <div ref={ref} className="relative">
          <div
            className={`${
              mainMenu && "border-b-2"
            } box-content flex h-full align-middle`}
          >
            <button className="w-12 font-medium" onClick={handleMenuClick}>
              {!dropdown ? (
                "Menu"
              ) : (
                <CgArrowLongLeft className="mx-auto text-gray-500" />
              )}
            </button>
          </div>
          {mainMenu && <Menu dropdown={dropdown} setDropdown={setDropdown} />}
        </div>
        {/* :
        <div>
          <Sections />
        </div>
        } */}
      </div>

    </>
  );
};

export default Navbar;

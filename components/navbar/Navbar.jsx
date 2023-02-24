import { useEffect, useRef, useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { useMedia } from "react-use";
import Menu from "./Menu";
import MenuBig from "./MenuBig";

const Navbar = () => {
  const [mainMenu, setMainMenu] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const ref = useRef();
  const isWide = useMedia("(min-width: 480px)", 1);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!ref.current?.contains(event.target)) {
        setMainMenu(false);
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
      <div className="flex h-28 justify-between py-8 px-8 align-middle lg:text-lg">
        <h2 className="nameHeader text-4xl font-extralight italic">
          {/* Ben Schroeder */}
        </h2>

        {isWide ? (
          <MenuBig
            reference={ref}
            dropdown={dropdown}
            setDropdown={setDropdown}
            isWide={isWide}
            needed={true}
          />
        ) : (
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
            {mainMenu && (
              <Menu
                dropdown={dropdown}
                setDropdown={setDropdown}
                setMainMenu={setMainMenu}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

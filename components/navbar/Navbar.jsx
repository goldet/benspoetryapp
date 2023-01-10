import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [mainMenu, setMainMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
    
      if (!ref.current.contains(event.target)) {
        setMainMenu(!mainMenu);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, mainMenu]);

  return ( <>    

    <div className="flex justify-between align-middle py-8 px-8">
      <h2 className="nameHeader text-4xl italic font-extralight">
        Ben Schroeder
      </h2>

      <div ref={ref} className="flex justify-center relative">
        <button className={`${mainMenu && "border-b-2"} font-medium`} onClick={() => setMainMenu(!mainMenu)}>
          Menu
        </button>
        {mainMenu && <Menu />}
      </div>
      </div>
    </>
  );
};

export default Navbar;

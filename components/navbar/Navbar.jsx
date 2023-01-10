import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [mainMenu, setMainMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(ref.current, event.target);
      if (
        !ref.current.contains(event.target)
      ) {
        setMainMenu(!mainMenu);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, mainMenu]);

  return (
    <div className="flex justify-between py-8 px-4">
      <h2 className="text-4xl italic">
        Ben Schroeder
      </h2>

      <div ref={ref}>
        {mainMenu ? (
          <>
            <button
              className="font-bold absolute top-0 right-2"
              onClick={() => setMainMenu(!mainMenu)}
            >
              x
            </button>
            <Menu />
          </>
        ) : (
          <button 
            className="" 
            onClick={() => setMainMenu(!mainMenu)}
          >
            Menu
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

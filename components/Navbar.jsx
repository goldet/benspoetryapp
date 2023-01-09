import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import DropdownMenu from "./utility/DropdownMenu";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const work = useRef();
  const about = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(work.current, about.current, event.target);
      if (
        !work.current.contains(event.target) ||
        !about.current.contains(event.target)
      ) {
        setDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [work, about]);

  const handleClick = (menu) => {
    if (!dropdown) {
      setDropdown(menu);
    }
    if (dropdown !== menu) {
      setDropdown(menu);
    }
  };

  return (
    <div>
      <h2>Ben Schroeder</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <button ref={work} onClick={() => handleClick("work")}>
            Work
          </button>
          {dropdown === "work" && (
            <DropdownMenu name="work" slugs={["poetry", "essays"]} />
          )}
        </li>

        <li>
          <button ref={about} onClick={() => handleClick("about")}>
            About
          </button>
          {dropdown === "about" && (
            <DropdownMenu name="about" slugs={["bio", "cv"]} />
          )}
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

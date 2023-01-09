import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./utility/DropdownMenu";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const work = useRef();
  const about = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      console.log(work.current, about.current, event.target);
      if (
        !work.current.contains(event.target) &&
        !about.current.contains(event.target)
      ) {
        console.log('first')
        setDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [work, about]);

  const handleClick = (name) => {
    console.log('second')
    if (!dropdown) {
      setDropdown(name);
    } else if (dropdown !== name) {
      setDropdown(name);
    } else if (dropdown === name) {
      setDropdown(null);
    }
  };

  return (
    <div>
      <h2>Ben Schroeder</h2>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="relative">
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

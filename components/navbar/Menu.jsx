import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import DropdownMenu from "../utility/DropdownMenu";
import styles from "../../styles/menuAnimation.module.css";

const Menu = () => {
  const [dropdown, setDropdown] = useState(null);
  // const work = useRef();
  // const about = useRef();

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       !work.current.contains(event.target) &&
  //       !about.current.contains(event.target)
  //     ) {
  //       setDropdown(null);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [about]);

  const handleClick = (name) => {
    console.log("second");
    if (!dropdown) {
      setDropdown(name);
    } else if (dropdown !== name) {
      setDropdown(name);
    } else if (dropdown === name) {
      setDropdown(null);
    }
  };

  // inline style define variable for each
  //  custom css calculates time for staggered animation
  return (
    <ul className="absolute right-4 z-10 flex flex-col justify-evenly gap-2 pt-2 align-middle ">
      {!dropdown && (
        <>
          <li className={styles.reveal} style={{ "--i": "0" }}>
            <Link href="/">Home</Link>
          </li>

          <li /* ref={work} */ className={styles.reveal} style={{ "--i": "1" }}>
            <button onClick={() => handleClick("work")}>Work</button>
            {dropdown === "work" && (
              <DropdownMenu name="work" slugs={["poetry", "essays"]} />
            )}
          </li>

          <li /* ref={about} */ className={styles.reveal} style={{ "--i": "2" }}>
            <button onClick={() => handleClick("about")}>About</button>
            {dropdown === "about" && (
              <DropdownMenu name="about" slugs={["bio", "cv"]} />
            )}
          </li>

          <li className={styles.reveal} style={{ "--i": "3" }}>
            <Link href="/contact">Contact</Link>
          </li>
        </>
      )}
      {dropdown === "work" && (
        <DropdownMenu name="work" slugs={["poetry", "essays"]} />
      )}
      {dropdown === "about" && (
        <DropdownMenu name="about" slugs={["bio", "cv"]} />
      )}
    </ul>
  );
};

export default Menu;

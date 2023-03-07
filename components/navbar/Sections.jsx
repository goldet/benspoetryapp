import Link from "next/link";
import styles from "../../styles/menuAnimation.module.css";

const Sections = ({ setDropdown, setMainMenu }) => {
  // inline style define variable for each
  //  custom css calculates time for staggered animation
  return (
    <>
      <li className={styles.reveal} style={{ "--i": "0" }}>
        <Link href="/" onClick={() => setMainMenu(false)}>
          Home
        </Link>
      </li>

      <li className={styles.reveal} style={{ "--i": "1" }}>
        <button onClick={() => setDropdown("work")}>Work</button>
      </li>

      <li className={styles.reveal} style={{ "--i": "2" }}>
        <Link href="/about/cv" onClick={() => setMainMenu(false)}>
          CV
        </Link>
      </li>
      <li className={styles.reveal} style={{ "--i": "3" }}>
        <Link href="/contact" onClick={() => setMainMenu(false)}>
          Contact
        </Link>
      </li>
    </>
  );
};

export default Sections;

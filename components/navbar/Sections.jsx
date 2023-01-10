import Link from "next/link";
import styles from "../../styles/menuAnimation.module.css";

const Sections = ({ setDropdown }) => {
  return (
    <>
          <li className={styles.reveal} style={{ "--i": "0" }}>
            <Link href="/">Home</Link>
          </li>

          <li className={styles.reveal} style={{ "--i": "1" }}>
            <button onClick={() => setDropdown("work")}>Work</button>
          </li>

          <li className={styles.reveal} style={{ "--i": "2" }}>
            <button onClick={() => setDropdown("about")}>About</button>
          </li>

          <li className={styles.reveal} style={{ "--i": "3" }}>
            <Link href="/contact">Contact</Link>
          </li>
        </>
  )
};

export default Sections;
import Link from "next/link";
import styles from "../../styles/menuAnimation.module.css";


const SectionsBig = ({ setDropdown }) => {
  return (
    <>
          <div>
          <li className="inline">
            <Link href="/">Home</Link>
          </li>

          <li className="inline">  {/* NEED TO PUT THIS BACK IN! {styles.reveal} style={{ "--i": "1" }} */}
            <button onClick={() => setDropdown("work")}>Work</button>
          </li>

          <li className="inline">  {/* NEED TO PUT THIS BACK IN! {styles.reveal} style={{ "--i": "2" }} */}
            <button onClick={() => setDropdown("about")}>About </button>
          </li>

          <li className="inline">
            <Link href="/contact"> Contact</Link>
          </li>
          </div>
        </>
  )
};

export default SectionsBig;

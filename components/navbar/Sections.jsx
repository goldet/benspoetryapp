import Link from 'next/link';
import styles from '../../styles/menuAnimation.module.css';

const Sections = ({ setDropMenu }) => {
  // inline style define variable for each
  //  custom css calculates time for staggered animation
  return (
    <>
      <li className={styles.reveal} style={{ '--i': '0' }}>
        <Link href="/" onClick={() => setDropMenu(0)}>
          Home
        </Link>
      </li>

      <li className={styles.reveal} style={{ '--i': '1' }}>
        <button onClick={() => setDropMenu(2)}>Work</button>
      </li>

      <li className={styles.reveal} style={{ '--i': '2' }}>
        <Link href="/cv" onClick={() => setDropMenu(0)}>
          CV
        </Link>
      </li>
      <li className={styles.reveal} style={{ '--i': '3' }}>
        <Link href="/contact" onClick={() => setDropMenu(0)}>
          Contact
        </Link>
      </li>
    </>
  );
};

export default Sections;

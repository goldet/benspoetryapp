import Link from "next/link";
import styles from "../../styles/menuAnimation.module.css";

const DropdownMenu = ({ name, slugs, setMainMenu }) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      {slugs.map((slug, i) => (
        <li key={slug} className={styles.reveal} style={{ "--i": `${i}` }} onClick={() => setMainMenu(false)}>
          <Link href={`/${name}/${slug}`}>
            {capitalizeFirstLetter(slug)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default DropdownMenu;

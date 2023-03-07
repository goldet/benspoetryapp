import Link from 'next/link';
import styles from '../../styles/menuAnimation.module.css';

const DropdownMenu = ({ elements, setDropMenu }) => {
  // const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const trimSectionName = (slug) => {
   const sectionName = slug.substring(slug.lastIndexOf('/') + 1)
   return sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
  }

  return (
    <>
      {Object.keys(elements).map((element) => (
        <li
          key={elements[element].id}
          className={styles.reveal}
          style={{ '--i': `${elements[element].id}` }}
          >
          {elements[element].type === "link" && <Link href={elements[element].slug} onClick={() => setDropMenu(0)}>{trimSectionName(elements[element].slug)}</Link>}
          {elements[element].type === "button" && <button onClick={() => setDropMenu(2)}>
              {/* <DropdownMenu /> */}
            </button>}
        </li>
      ))}
    </>
  );
};

export default DropdownMenu;

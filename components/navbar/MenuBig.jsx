import Link from 'next/link';
import useDropMenu from '../../hooks/useDropMenu';
import DropdownMenu from '../utility/DropdownMenu';

const MenuBig = ({ isWide }) => {
  const { dropMenu, setDropMenu, clickOutsideRef } = useDropMenu();
  return (
    <>
      <div className="flex items-center gap-6 md:text-lg" ref={clickOutsideRef}>
        <li className="h-6  pr-1 hover:underline">
          <Link href="/" onClick={() => setDropMenu(0)}>
            Home
          </Link>
        </li>

        <div className="h-6 ">
          <button className="pr-1 hover:underline" onClick={() => setDropMenu(2)}>
            Work
          </button>
          {dropMenu === 2 && (
            <DropdownMenu
              name="work"
              slugs={['poetry', 'essays']}
              isWide={isWide}
              setDropMenu={setDropMenu}
            />
          )}
        </div>

        <li className="h-6  pr-1 hover:underline">
          <Link href="/about/cv" onClick={() => setDropMenu(0)}>
            CV
          </Link>
        </li>
        <li className="h-6  pr-1 hover:underline">
          <Link href="/contact" onClick={() => setDropMenu(0)}>
            Contact
          </Link>
        </li>
      </div>
    </>
  );
};

export default MenuBig;

import DropdownMenu from './DropdownMenu';
import Sections from './Sections';
import { CgArrowLongLeft } from 'react-icons/cg';
import useDropMenu from '../../hooks/useDropMenu';

const MobileMenu = () => {
  const { dropMenu, setDropMenu, handleMenuClick, clickOutsideRef } = useDropMenu();
  return (
    <div ref={clickOutsideRef} className="relative z-50">
      <div className={`${dropMenu && 'border-b-2'} box-content flex h-full align-middle`}>
        <button className="w-12 font-medium" onClick={handleMenuClick}>
          {dropMenu !== 2 ? 'Menu' : <CgArrowLongLeft className="mx-auto text-gray-500" />}
        </button>
      </div>
      <ul className="absolute z-10 flex flex-col justify-evenly gap-2 pt-2 align-middle ">
        {dropMenu === 1 && (
          <>
            <Sections setDropMenu={setDropMenu} />
          </>
        )}
        {dropMenu === 2 && (
          <DropdownMenu name="work" slugs={['poetry', 'essays']} setDropMenu={setDropMenu} />
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;

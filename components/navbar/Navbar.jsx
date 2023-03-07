import useDropMenu from '../../hooks/useDropMenu';
import MenuBig from './MenuBig';
import MobileMenu from './MobileMenu';

const Navbar = ({ isWide }) => {
  const { dropMenu, setDropMenu, handleMenuClick, clickOutsideRef } = useDropMenu();
  return (
    <>
      <div className="flex h-28 justify-end py-8 px-8 align-middle lg:text-lg">
        {isWide ? (
          <MenuBig
            dropMenu={dropMenu}
            isWide={isWide}
            clickOutsideRef={clickOutsideRef}
            setDropMenu={setDropMenu}
          />
        ) : (
          <MobileMenu
            dropMenu={dropMenu}
            handleMenuClick={handleMenuClick}
            clickOutsideRef={clickOutsideRef}
            setDropMenu={setDropMenu}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;

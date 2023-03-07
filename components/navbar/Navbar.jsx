import MenuBig from './MenuBig';
import MobileMenu from './MobileMenu';

const Navbar = ({ isWide }) => {
  return (
    <>
      <div className="flex h-28 justify-end py-8 px-8 align-middle lg:text-lg">
        {isWide ? <MenuBig /> : <MobileMenu />}
      </div>
    </>
  );
};

export default Navbar;

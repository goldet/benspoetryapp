import { useEffect, useRef, useState } from "react";
import { CgArrowLongLeft } from "react-icons/cg";
import { useMedia } from "react-use";
import Menu from "./Menu";
import MenuBig from "./MenuBig";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [dropMenu, setDropMenu] = useState(0);
 
  const isWide = useMedia("(min-width: 480px)", 1000);

 

  return (
    <>
      <div className="flex h-28 justify-end py-8 px-8 align-middle lg:text-lg">
        {isWide ? (
          <MenuBig
            // reference={ref}
            // dropdown={dropdown}
            dropMenu={dropMenu}
            setDropMenu={setDropMenu}
            isWide={isWide}
            needed={true}
          />
        ) : (
          <MobileMenu dropMenu={dropMenu} setDropMenu={setDropMenu} />
        )}
      </div>
    </>
  );
};

export default Navbar;

//ATTEMPTED MEDIA QUERY WILL USE IMPORTED CUSTOM HOOK

/* import { useEffect, useCallback, useState } from "react";
import Menu from "./Menu";
import MenuBig from "./MenuBig";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

export default useMediaQuery; */

/* const NavbarBig = () => {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div>
      {isBreakpoint ? (
        <div>
          <Menu />
        </div>
      ) : (
        <div> <MenuBig /> </div>
      )}
    </div>
  );
};
export default NavbarBig;
 */
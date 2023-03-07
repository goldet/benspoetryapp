import { useState } from 'react';
import useHandleClickOutside from './useHandleClickOutside';

/**
 * @returns { dropMenu, setDropMenu, handleMenuClick, clickOutsideRef }
 */
const useDropMenu = () => {
  const [dropMenu, setDropMenu] = useState(0);
  const rock = 2;
  const clickOutsideRef = useHandleClickOutside(setDropMenu, dropMenu, rock)

  const handleMenuClick = () => {
    if (dropMenu === 0) setDropMenu(1);
    if (dropMenu === 1) setDropMenu(0);
    if (dropMenu === 2) setDropMenu(1);
  };

  return { dropMenu, setDropMenu, handleMenuClick, clickOutsideRef };
};

export default useDropMenu;

import { useEffect, useRef, useState } from "react";

const useDropMenu = () => {
  const [dropMenu, setDropMenu] = useState(0);
  const clickOutsideRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (!clickOutsideRef.current?.contains(event.target)) {
        setDropMenu(0);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickOutsideRef, dropMenu]);

  const handleMenuClick = () => {
    if (dropMenu === 0) setDropMenu(1);
    if (dropMenu === 1) setDropMenu(0);
    if (dropMenu === 2) setDropMenu(1);
  };

  return { dropMenu, setDropMenu, handleMenuClick, clickOutsideRef }
}

export default useDropMenu
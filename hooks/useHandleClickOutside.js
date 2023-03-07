import { useEffect, useRef } from "react";

/**
 * Executes 'action' when click outside ref'd html element
 * @param {function} action 
 * @param  {...any} dependencies 
 * @returns {ref}
 */
const useHandleClickOutside = (action, ...dependencies) => {
  const clickOutsideRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (!clickOutsideRef.current?.contains(event.target)) {
        action(0);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickOutsideRef, action, dependencies]);

  return clickOutsideRef;
}

export default useHandleClickOutside
import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [isShow, setIsShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOut = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener("click", handleClickOut);
    return () => {
      document.removeEventListener("click", handleClickOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isShow,
    setIsShow,
    nodeRef,
  };
}

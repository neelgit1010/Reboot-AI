import { useState, useEffect, useRef } from "react";

const useElementHeight = () => {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  const updateHeight = () => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight();

    const handleResize = () => {
      updateHeight();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return [height, elementRef];
};

export default useElementHeight;

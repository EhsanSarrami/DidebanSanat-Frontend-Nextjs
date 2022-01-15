import { useEffect } from "react";

const useDisableScroll = (boolean) => {
  // with boolean disable scroll
  useEffect(() => {
    if (boolean) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [boolean]);

  return null;
};

export default useDisableScroll;

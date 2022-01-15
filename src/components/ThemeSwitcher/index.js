import { ThemeSwitcherBtn } from "./style";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { setStoreage } from "../../helper/funcLocalStoreage";

const ThemeSwitcher = () => {

  // handle change theme
  const handleChangeTheme = () => {
    setStoreage("darkTheme", JSON.stringify(true));
  };

  return (
    <ThemeSwitcherBtn onClick={handleChangeTheme}>
      {true ? <BsSunFill /> : <BsFillMoonFill />}
    </ThemeSwitcherBtn>
  );
};

export default ThemeSwitcher;

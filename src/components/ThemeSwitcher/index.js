import { useContext } from "react";
import { AppContext } from "../../context";
import { ThemeSwitcherBtn } from "./style";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { setStoreage } from "../../helper";

const ThemeSwitcher = () => {
  // use context
  const { darkTheme, changeTheme } = useContext(AppContext);

  // handle change theme
  const handleChangeTheme = () => {
    setStoreage("darkTheme", JSON.stringify(!darkTheme));
    changeTheme();
  };

  return (
    <ThemeSwitcherBtn onClick={handleChangeTheme}>
      {darkTheme ? <BsSunFill /> : <BsFillMoonFill />}
    </ThemeSwitcherBtn>
  );
};

export default ThemeSwitcher;

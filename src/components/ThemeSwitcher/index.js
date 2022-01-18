import { useContext } from "react";
import { AppContext } from "../../context";
import { ThemeSwitcherBtn } from "./style";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  // use context
  const { darkTheme, changeTheme } = useContext(AppContext);

  // handle change theme
  const handleChangeTheme = () => {
    changeTheme();
    setStoreage("darkTheme", JSON.stringify(true));
  };

  return (
    <ThemeSwitcherBtn onClick={handleChangeTheme}>
      {true ? <BsSunFill /> : <BsFillMoonFill />}
    </ThemeSwitcherBtn>
  );
};

export default ThemeSwitcher;

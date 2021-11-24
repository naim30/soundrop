import classes from "./NavigationBar.module.css";
import Logo from "../../components/UI/Logo/Logo";
import Github from "../../components/UI/Github/Github";
import Search from "../../components/UI/Search/Search";

const navigationBar = (props) => {
  return (
    <div className={classes.NavigationBar}>
      <div className={classes.LogoContainer}>
        <Github />
        <Logo />
      </div>
      <Search />
    </div>
  );
};

export default navigationBar;

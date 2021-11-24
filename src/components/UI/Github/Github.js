import classes from "./Github.module.css";
import githubIcon from "../../../assets/icons/github.svg";

const github = (props) => {
  return (
    <a href="https://github.com/naim30" className={classes.Github}>
      <div className={classes.Button}>
        <img src={githubIcon} alt="github-link" />
      </div>
    </a>
  );
};

export default github;

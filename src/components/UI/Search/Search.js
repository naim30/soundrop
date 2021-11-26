import classes from "./Search.module.css";
import SearchIcon from "../../../assets/icons/search.svg";

const search = (props) => {
  return (
    <div className={classes.Search}>
      <span>
        <img src={SearchIcon} alt="search-icons" />
      </span>
      <input
        type="text"
        placeholder="enter recipe + enter"
        onKeyUp={props.getRecipeHandler}
      />
    </div>
  );
};

export default search;

import classes from "./Recipe.module.css";
import recipeImage from "../../assets/emojis/recipe.png";
import copyImage from "../../assets/emojis/copy.png";

const recipe = (props) => {
  return (
    <div className={classes.Recipe}>
      <div>
        <img src={recipeImage} alt="recipe emoji" />
        YOUR RECIPE :
      </div>
      <div>{props.recipe}</div>
      <div>
        copy and share your recipe with others
        <img
          src={copyImage}
          alt="copy recipe"
          title="copy recipe"
          onClick={props.copyToClipboardhandler}
        />
      </div>
    </div>
  );
};

export default recipe;

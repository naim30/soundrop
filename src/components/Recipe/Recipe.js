import classes from "./Recipe.module.css";
import recipeImage from "../../assets/emojis/recipe.png";

const recipe = (props) => {
  return (
    <div className={classes.Recipe}>
      <div>
        <img src={recipeImage} alt="recipe emoji" />
        YOUR RECIPE :
      </div>
      <div>{props.recipe}</div>
      <div>copy and share your recipe with others</div>
    </div>
  );
};

export default recipe;

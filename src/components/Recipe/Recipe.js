import classes from "./Recipe.module.css";
import recipeImage from "../../assets/emojis/recipe.png";

const recipe = (props) => {
  return (
    <div className={classes.Recipe}>
      <div>
        <img src={recipeImage} alt="recipe emoji" />
        YOUR RECIPE :
      </div>
      <div>
        lorem asnf kajbf askjfasfasdnbf asdfasdnhnfsdf sdaf asbfjbjasdfsda jkf
        fn sdafbjkasd fnmsd jkfbsdjkf jasdf ns fhjkrsbfj{" "}
      </div>
    </div>
  );
};

export default recipe;

import classes from "./SoundBoard.module.css";
import SoundTiles from "../SoundTiles/SoundTiles";
import Recipe from "../Recipe/Recipe";

const soundBoard = (props) => {
  return (
    <div className={classes.SoundBoard}>
      <SoundTiles
        sounds={props.sounds}
        changeProgressbar={props.changeProgressbar}
        toggleSoundhandler={props.toggleSoundhandler}
      />
      <Recipe recipe={props.recipe} />
    </div>
  );
};

export default soundBoard;

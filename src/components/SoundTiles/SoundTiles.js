import classes from "./SoundTiles.module.css";
import Tile from "./Tile/Tile";

const soundTiles = (props) => {
  let tilesArr = props.sounds.map((sound, i) => (
    <Tile
      volume={sound.volume}
      key={i}
      changeProgressbar={props.changeProgressbar}
      id={i}
      name={sound.name}
      icon={sound.icon}
      on={sound.on}
      sound={sound.sound}
      emoji={sound.emoji}
      toggleSoundhandler={props.toggleSoundhandler}
    />
  ));
  return <div className={classes.SoundTiles}>{tilesArr}</div>;
};

export default soundTiles;

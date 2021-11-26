import { useRef } from "react";

import classes from "./Tile.module.css";

const Tile = (props) => {
  let sound = useRef(null);

  let barStyle = {
    background: `linear-gradient(
        to right,
        #f7a1a1 0%,
        #f7a1a1 ${props.volume * 10}%,
        #ebedf5 0%,
        #ebedf5 100%
      )`,
  };

  if (sound.current && sound.current.paused && props.on) {
    sound.current.play();
    sound.current.volume = props.volume / 10;
  }
  if (sound.current && !sound.current.paused && !props.on) {
    sound.current.pause();
  }

  return (
    <div className={[classes.Tile, props.on ? classes.Selected : ""].join(" ")}>
      <div
        className={classes.Container}
        onClick={() => props.toggleSoundhandler(props.id, sound)}
      >
        <div className={classes.Name}>{props.name}</div>
        <div className={classes.Icon}>
          <img src={props.emoji} alt={props.name + " emoji"} />
        </div>
      </div>
      <input
        style={barStyle}
        type="range"
        id="points"
        name="points"
        min="0"
        max="10"
        value={props.volume}
        className={classes.SoundBar}
        onChange={(event) => props.changeProgressbar(event, props.id, sound)}
      />
      <audio loop={true} ref={sound}>
        <source src={props.sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Tile;

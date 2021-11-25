import React from "react";
import { Component } from "react";

import classes from "./Layout.module.css";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SoundBoard from "../../components/SoundBoard/SoundBoard";
import sounds from "../../util/sounds";
import emojis from "../../util/emojis";

class Layout extends Component {
  state = {
    sounds: [
      {
        name: "cafe",
        on: false,
        volume: 10,
        sound: sounds.cafesound,
        emoji: emojis.cafeemoji,
      },
      {
        name: "farm",
        on: false,
        volume: 10,
        sound: sounds.farmsound,
        emoji: emojis.farmemoji,
      },
      {
        name: "forest",
        on: false,
        volume: 10,
        sound: sounds.forestsound,
        emoji: emojis.forestemoji,
      },
      {
        name: "keyboard",
        on: false,
        volume: 10,
        sound: sounds.keyboardsound,
        emoji: emojis.keyboardemoji,
      },
      {
        name: "library",
        on: false,
        volume: 10,
        sound: sounds.librarysound,
        emoji: emojis.libraryemoji,
      },
      {
        name: "lightning",
        on: false,
        volume: 10,
        sound: sounds.lightningsound,
        emoji: emojis.lightningemoji,
      },
      {
        name: "night",
        on: false,
        volume: 10,
        sound: sounds.nightsound,
        emoji: emojis.nightemoji,
      },
      {
        name: "ocean",
        on: false,
        volume: 10,
        sound: sounds.oceansound,
        emoji: emojis.oceanemoji,
      },
      {
        name: "office",
        on: false,
        volume: 10,
        sound: sounds.officesound,
        emoji: emojis.officeemoji,
      },
      {
        name: "rain",
        on: false,
        volume: 10,
        sound: sounds.rainsound,
        emoji: emojis.rainemoji,
      },
      {
        name: "wind",
        on: false,
        volume: 10,
        sound: sounds.windsound,
        emoji: emojis.windemoji,
      },
      {
        name: "windchime",
        on: false,
        volume: 10,
        sound: sounds.windchimesound,
        emoji: emojis.windchimeemoji,
      },
    ],
  };

  progressObj = [
    ["a soft rhythmic sound of", "a whisper sound of"],
    ["light rhythmic sound of", "a hint of"],
    ["light consistence sound of", "soft sound of"],
    ["smidge sound of"],
    ["a heavy dose of"],
    ["strong consistent sound of"],
    ["loud sound of", "strong sound of"],
    ["a large portion of"],
    ["an ever-present consistent sound of"],
    ["loud steady sound of "],
    ["intensive steady sound of"],
  ];

  changeProgressbar = (event, id, sound) => {
    sound.current.volume = event.target.value / 10;
    let newSounds = [...this.state.sounds];
    newSounds[id].volume = event.target.value;
    this.setState({ sounds: newSounds });
  };

  toggleSoundhandler = (id, sound) => {
    let newSounds = [...this.state.sounds];
    if (!newSounds[id].on) {
      sound.current.play();
    } else {
      sound.current.pause();
    }
    newSounds[id].on = !newSounds[id].on;
    this.setState({ sounds: newSounds });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationBar />
        <SoundBoard
          sounds={this.state.sounds}
          changeProgressbar={this.changeProgressbar}
          toggleSoundhandler={this.toggleSoundhandler}
        />
      </div>
    );
  }
}

export default Layout;

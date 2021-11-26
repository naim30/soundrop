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
    recipe: "✨ create your own recipe ✨",
  };

  progressObj = [
    ["a soft rhythmic sound of", "a whispering sound of"],
    ["light rhythmic sound of", "a hint of"],
    ["light consistence sound of", "soft sound of"],
    ["smidge sound of"],
    ["a heavy dose of"],
    ["strong consistent sound of"],
    ["loud sound of"],
    ["a large portion of"],
    ["an ever-present consistent sound of"],
    ["intensive steady sound of", "strong sound of", "loud steady sound of"],
  ];

  createRecipe = (sounds, progressObj) => {
    let recipe = [];
    sounds.forEach((sound) => {
      if (sound.on && sound.volume > 0) {
        recipe.push(
          `${
            progressObj[sound.volume - 1][
              Math.floor(Math.random() * progressObj[sound.volume - 1].length)
            ]
          } ${sound.name}`
        );
      }
    });

    if (recipe.length > 1) {
      recipe.splice(
        recipe.length - 2,
        2,
        recipe[recipe.length - 2] + " and " + recipe[recipe.length - 1]
      );
    }
    if (recipe.length === 0) {
      this.setState({ recipe: "✨ create your own recipe ✨" });
      return;
    }

    this.setState({ recipe: recipe.join(", ") });
  };

  getRecipeHandler = (event) => {
    if (event.keyCode === 13) {
      let text = event.target.value;
      let textArr = text.split(",").map((a) => a.trim());
      if (textArr.length > 1 || textArr[0].indexOf("and") !== -1) {
        textArr.splice(
          textArr.length - 1,
          1,
          ...textArr[textArr.length - 1].split("and").map((a) => a.trim())
        );
      }
      let newSounds = [...this.state.sounds];
      newSounds = newSounds.map((a) => ({ ...a, on: false }));

      for (let i = 0; i < textArr.length; i++) {
        let soundArr = textArr[i].split(" ");
        let sound = soundArr[soundArr.length - 1];
        let volume =
          this.progressObj.findIndex((a) =>
            a.includes(soundArr.slice(0, -1).join(" "))
          ) + 1;
        console.log(volume);
        let index = newSounds.findIndex((a) => a.name === sound);
        newSounds[index] = {
          ...newSounds[index],
          name: sound,
          volume: volume,
          on: true,
        };
        this.setState({ sounds: newSounds });
      }
    }
  };

  changeProgressbar = (event, id, sound) => {
    sound.current.volume = event.target.value / 10;
    let newSounds = [...this.state.sounds];
    newSounds[id].volume = event.target.value;
    this.setState({ sounds: newSounds });
    this.createRecipe(newSounds, this.progressObj);
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
    this.createRecipe(newSounds, this.progressObj);
  };

  render() {
    return (
      <div className={classes.Layout}>
        <NavigationBar
          getRecipeHandler={(event) => this.getRecipeHandler(event)}
        />
        <SoundBoard
          sounds={this.state.sounds}
          changeProgressbar={this.changeProgressbar}
          toggleSoundhandler={this.toggleSoundhandler}
          recipe={this.state.recipe}
        />
      </div>
    );
  }
}

export default Layout;

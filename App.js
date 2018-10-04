import React from "react";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

import Box from "./Box";

const { width, height } = Dimensions.get("screen");
const boxSize = Math.trunc(Math.max(width, height) * 0.075);
const initialBox = Matter.Bodies.rectangle(
  width / 2,
  height / 2,
  boxSize,
  boxSize
);

export default class App extends React.Component {
  render() {
    return (
      <GameEngine
        style={styles.container}
        entities={{
          initialBox: {
            body: initialBox,
            size: [boxSize, boxSize],
            color: "red",
            renderer: Box
          }
        }}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

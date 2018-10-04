import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";

export default class App extends React.Component {
  render() {
    return (
      <GameEngine style={styles.container}>
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

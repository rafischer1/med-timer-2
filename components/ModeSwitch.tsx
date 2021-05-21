import React, { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { MontserratText } from "./MontserratText";
import { toggleSoundState } from "../stores/sound-toggle.store";

const ModeSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      toggleSoundState(!previousState);
      return !previousState;
    });
  };

  return (
    <View style={styles.container}>
      <MontserratText style={{ fontSize: 24 }}>
        Sound {isEnabled ? "On" : "Off"}
      </MontserratText>
      <Switch
        trackColor={{ false: "#78DCEF", true: "#78EFE4" }}
        thumbColor={isEnabled ? "#333" : "#333"}
        ios_backgroundColor="#78BFEF"
        onValueChange={toggleSwitch}
        value={!isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ModeSwitch;

import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Audio } from "expo-av";
import { Input } from "react-native-elements";
import { MontserratText } from "./MontserratText";
import Slider from "@react-native-community/slider";
import { timer } from "rxjs/dist/types";

const Timer = () => {
  let [time, setTime] = useState(0);
  let [mins, setMins] = useState(0);
  let [hours, setHours] = useState(0);
  let [running, setRunning] = useState(false);

  let finished: boolean = false;
  let notes: string = "";
  let timerTime: number = 0;

  const updateHourValue = (hours: number) => setHours(() => hours * 60);

  const updateMinuteValue = (mins: number) => setMins(() => mins);

  const startButton = () => {
    setTime(() => hours * 60 + mins * 60);
    setRunning(() => true);
    playSound().then();
  };

  const postSession = (sessionTime: number, notes: string) => {};

  const cancelSession = () => {
    console.log("cancel called");
    setRunning(() => false);
  };

  const finishedCall = (type: "finished") => {
    console.log("finished called");
    setTime(() => 0);
    setRunning(() => false);
  };

  useEffect(() => {});

  return (
    <SafeAreaView>
      <MontserratText style={[styles.labels, { marginBottom: 10 }]}>
        Select time and begin
      </MontserratText>
      {time && time > 0 ? (
        <CountDown
          size={30}
          until={time}
          // onFinish={() => finishedCall("finished")}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 5,
          }}
          digitTxtStyle={{ color: "#333" }}
          timeLabelStyle={{
            color: "#333",
            fontWeight: "bold",
          }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{
            h: "hr",
            m: "min",
            s: "sec",
          }}
          showSeparator
          running={running}
        />
      ) : (
        <Text />
      )}

      <View>
        <MontserratText style={styles.labels}>
          {hours > 0 ? hours / 60 : ""} Hours
        </MontserratText>
        <Slider
          style={{ marginVertical: 10, height: 20 }}
          step={1}
          disabled={running}
          maximumValue={12}
          minimumValue={0}
          onValueChange={(val) => {
            updateHourValue(val);
          }}
        />

        <MontserratText style={styles.labels}>
          {mins > 0 ? mins : ""} Minutes
        </MontserratText>
        <Slider
          style={{ marginVertical: 10, height: 20 }}
          step={1}
          maximumValue={59}
          minimumValue={1}
          disabled={running}
          onValueChange={(val) => updateMinuteValue(val)}
        />
      </View>
      {!finished ? (
        <View>
          <View style={buttonStyle}>
            <Button
              onPress={() => {
                setHours(() => 0);
                setMins(() => 0);
                setTime(() => 0);
              }}
              title="Clear"
              color={"black"}
              accessibilityLabel="Clear the timer"
            />
          </View>
          <View style={buttonStyle}>
            <Button
              onPress={() => startButton()}
              title="Start"
              color={"black"}
              accessibilityLabel="Start the meditation timer"
            />
          </View>
          <View style={buttonStyle}>
            <Button
              onPress={() => setRunning(() => false)}
              title="Pause"
              color={"black"}
              accessibilityLabel="Stop the meditation timer"
            />
          </View>
        </View>
      ) : (
        <ScrollView>
          <Input
            placeholder="Session Notes"
            containerStyle={{
              backgroundColor: "white",
              padding: 10,
              borderRadius: 5,
            }}
            onChangeText={(text) => (notes = text)}
            value={notes}
            spellCheck={true}
          />
          <View>
            <Button
              onPress={() => {
                return postSession(time, notes);
              }}
              title="Log Session"
              accessibilityLabel="Log the session to your profile"
            />
          </View>
          <View>
            <Button
              onPress={() => cancelSession()}
              title="Cancel Session"
              accessibilityLabel="Log the session to your profile"
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const playSound = async () => {
  let soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(require("../assets/bell.mp3"));
    await soundObject.playAsync();
  } catch (err) {
    console.log("sound error:", err);
  }
};

// -=-Stylesheet Definition-=-
const styles = StyleSheet.create({
  labels: {
    fontSize: 20,
    textDecorationLine: "underline",
    textDecorationColor: "#78EFE4",
    textAlign: "center",
  },
});

const buttonStyle: ViewStyle = {
  width: "50%",
  borderRadius: 10,
  backgroundColor: "#78BFEF",
  marginLeft: "25%",
  marginTop: 5,
};

export default Timer;

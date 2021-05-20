import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Audio } from "expo-av";
import { Input } from "react-native-elements";
import { MontserratText } from "./MontserratText";

export default class Timer extends React.Component<
  {},
  {
    value: number;
    timerValue: number;
    running: boolean;
    duration: number;
    finished: boolean;
    notes: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      timerValue: 0,
      running: false,
      duration: 2,
      finished: false,
      notes: "",
    };
  }

  _playSound = async () => {
    let soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("../assets/bell.mp3"));
      await soundObject.playAsync();
    } catch (err) {
      console.log("sound error:", err);
    }
  };

  _startButton(value) {
    return this.setState({
      timerValue: value,
      value: 0,
      running: true,
      finished: false,
    });
  }

  _stopButton = () => this.setState({ running: false });

  _finishedCall(msg) {
    this._playSound().then();
    return this.setState({ finished: true });
  }

  _postSession = async (id, duration, notes) => {
    let postBody = {
      duration,
      notes,
    };
    console.log("Session Posted:", postBody);
  };

  _cancelSession = () => {
    return this.setState({
      finished: false,
      running: false,
      timerValue: 0,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <MontserratText>Select time in minutes and begin</MontserratText>
        <CountDown
          size={30}
          until={this.state.timerValue * 60}
          onFinish={() => this._finishedCall("finished")}
          digitStyle={{
            backgroundColor: "#FFF",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 5,
          }}
          digitTxtStyle={{ color: "#2546A4" }}
          timeLabelStyle={{
            color: "white",
            fontWeight: "bold",
          }}
          timeToShow={["H", "M", "S"]}
          timeLabels={{
            h: "hr",
            m: "min",
            s: "sec",
          }}
          showSeparator
          running={this.state.running}
        />
        <View>
          <Input
            keyboardType={"number-pad"}
            value={this.state.value}
            onChange={(value) => this.setState({ value: this.state.value })}
          />
        </View>
        {!this.state.finished ? (
          <View>
            <View>
              <Button
                onPress={() => this._startButton(this.state.value)}
                title="Start"
                accessibilityLabel="Start the meditation timer"
              />
            </View>
            <View>
              <Button
                onPress={() => this._stopButton()}
                title="Stop"
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
              onChangeText={(text) =>
                this.setState({ notes: this.state.notes })
              }
              value={this.state.notes}
              spellCheck={true}
            />
            <View>
              <Button
                onPress={() => {
                  return this._postSession(
                    "default",
                    this.state.timerValue,
                    this.state.notes
                  );
                }}
                title="Log Session"
                accessibilityLabel="Log the session to your profile"
              />
            </View>
            <View>
              <Button
                onPress={() => this._cancelSession()}
                title="Cancel Session"
                accessibilityLabel="Log the session to your profile"
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    );
  }
}

// -=-Stylesheet Definition-=-
// const styles = StyleSheet.create({
//   container: { color: "black" },
//   cancelButton: { color: "black" },
//   button: { color: "black" },
//   input: { color: "black" },
//   buttonStop: { color: "black" },
//   buttonStart: { color: "black" },
// });

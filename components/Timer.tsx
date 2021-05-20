import React from "react";
import {
  ScrollView,
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Audio } from "expo-av";
import { Input } from "react-native-elements";
import { MontserratText } from "./MontserratText";
import Slider from "@react-native-community/slider";

export default class Timer extends React.Component<
  {},
  {
    hourValue: number;
    minuteValue: number;
    timerValue: string;
    running: boolean;
    duration: number;
    finished: boolean;
    notes: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      hourValue: 0,
      minuteValue: 0,
      timerValue: "",
      running: false,
      duration: 2,
      finished: false,
      notes: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
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
      timerValue: value.toString(),
      hourValue: 0,
      minuteValue: 0,
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
      timerValue: "",
    });
  };

  _onInputChange(val: string) {
    return this.setState({
      timerValue: val.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ""),
    });
  }

  render() {
    return (
      <SafeAreaView>
        <MontserratText>Select time in minutes and begin</MontserratText>
        <CountDown
          size={30}
          until={this.state.hourValue * 60 + this.state.minuteValue}
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
        {!this.state.running ? (
          <View>
            <Slider
              step={1}
              maximumValue={12}
              minimumValue={0}
              onSlidingComplete={(hourValue) => this.setState({ hourValue })}
            />
            <Text>{this.state.hourValue} Hours</Text>
            <Slider
              step={1}
              maximumValue={59}
              minimumValue={1}
              onSlidingComplete={(minuteValue) =>
                this.setState({ minuteValue })
              }
            />
            <Text>{this.state.minuteValue} Minutes</Text>
          </View>
        ) : (
          <Text />
        )}

        {!this.state.finished ? (
          <View>
            <View>
              <Button
                onPress={() =>
                  this._startButton(
                    this.state.hourValue * 60 + this.state.minuteValue
                  )
                }
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
const styles = StyleSheet.create({
  numberInput: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  container: { color: "black" },
  cancelButton: { color: "black" },
  button: { color: "black" },
  input: { color: "black" },
  buttonStop: { color: "black" },
  buttonStart: { color: "black" },
});

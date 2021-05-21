import React from "react";
import { Text } from "react-native";

export function MontserratText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "San Francisco" }]} />
  );
}

import {
  BottomTabBarOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import TimerScreen from "../screens/TimerScreen";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="🏡" component={HomeScreen} />
      <Tab.Screen name="⏱" component={TimerScreen} />
      <Tab.Screen name="👋" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export const tabBarOptions: BottomTabBarOptions = {
  allowFontScaling: true,
  tabStyle: {
    flex: 1,
    justifyContent: "space-around",
    borderTopColor: "#333333",
    backgroundColor: "#dfdfdf",

  },
};

export default Tabs;
